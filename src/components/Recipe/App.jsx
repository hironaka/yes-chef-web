"use client"

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import SessionControls from "./SessionControls";
import RecipePanel from "./RecipePanel";
import { generateToken } from '@/app/lib/actions';
import Header from '@/components/Layout/Header';

export default function App() {
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [dataChannel, setDataChannel] = useState(null);
  const [recipe, setRecipe] = useState(null);
  const peerConnection = useRef(null);
  const audioElement = useRef(null);

  async function startSession() {
    // Get an ephemeral key from the Fastify server
    const tokenResponse = await generateToken();
    console.log(tokenResponse);
    const EPHEMERAL_KEY = tokenResponse.data.client_secret.value;

    // Create a peer connection
    const pc = new RTCPeerConnection();

    // Set up to play remote audio from the model
    audioElement.current = document.createElement("audio");
    audioElement.current.autoplay = true;
    pc.ontrack = (e) => (audioElement.current.srcObject = e.streams[0]);

    // Add local audio track for microphone input in the browser
    const ms = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });
    pc.addTrack(ms.getTracks()[0]);

    // Set up data channel for sending and receiving events
    const dc = pc.createDataChannel("oai-events");
    setDataChannel(dc);

    // Start the session using the Session Description Protocol (SDP)
    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);

    const baseUrl = "https://api.openai.com/v1/realtime";
    const model = "gpt-4o-realtime-preview-2024-12-17";
    const sdpResponse = await fetch(`${baseUrl}?model=${model}`, {
      method: "POST",
      body: offer.sdp,
      headers: {
        Authorization: `Bearer ${EPHEMERAL_KEY}`,
        "Content-Type": "application/sdp",
      },
    });

    const answer = {
      type: "answer",
      sdp: await sdpResponse.text(),
    };
    await pc.setRemoteDescription(answer);

    peerConnection.current = pc;
  }

  // Stop current session, clean up peer connection and data channel
  function stopSession() {
    if (dataChannel) {
      dataChannel.close();
    }

    peerConnection.current.getSenders().forEach((sender) => {
      if (sender.track) {
        sender.track.stop();
      }
    });

    if (peerConnection.current) {
      peerConnection.current.close();
    }

    setIsSessionActive(false);
    setDataChannel(null);
    peerConnection.current = null;
  }

  // Send a message to the model
  const sendClientEvent = useCallback((message) => {
    if (dataChannel) {
      message.event_id = message.event_id || crypto.randomUUID();
      console.log('Client Event:', JSON.stringify(message, null, 2));
      dataChannel.send(JSON.stringify(message));
    } else {
      console.error(
        "Failed to send message - no data channel available",
        message,
      );
    }
  }, [dataChannel]);

  // Send a text message to the model
  const sendTextMessage = useCallback((message) => {
    const event = {
      type: "conversation.item.create",
      item: {
        type: "message",
        role: "user",
        content: [
          {
            type: "input_text",
            text: message,
          },
        ],
      },
    };

    sendClientEvent(event);
    sendClientEvent({ type: "response.create" });
  }, [sendClientEvent]);

  // Attach event listeners to the data channel when a new one is created
  useEffect(() => {
    if (dataChannel) {
      // Append new server events to the list
      dataChannel.addEventListener("message", (e) => {
        console.log('Server Event:', JSON.stringify(JSON.parse(e.data), null, 2));
      });

      // Set session active when the data channel is opened
      dataChannel.addEventListener("open", () => {
        setIsSessionActive(true);
      });
    }
  }, [dataChannel]);

  // Get the recipe from the browser extension
  useEffect(() => {
    const extensionId = 'lmakaflodkdoemdbcahofdoiihchjbim'; // Replace with your extension ID
    if (chrome && chrome.runtime) {
      chrome.runtime.sendMessage(extensionId, { action: 'GET_RECIPE' }, response => {
        console.log('Response from extension:', response);
        if (response && response.recipe) {
          setRecipe(response.recipe);
          console.log('Recipe set:', response.recipe);
        } else {
          console.error('No recipe received from extension');
        }
      });
    } else {
      console.error('Chrome runtime not available');
    }
  }, []);

  const systemInstruction = `
  You are a helpful sous-chef working as an assistant to a chef.

  Start by saying 'yes chef' and wait for a question. Make answers as consice as possible without missing any information. Only give instructions when asked. Be as incremental and step by step as possible.

  When an ingredient lists alternative units of measure and quantities (e.g., ounces or grams), say "or" to connect each option.
  `;
  
  const sessionUpdate = useCallback(() => {
    return {
      type: "session.update",
      session: {
        "instructions": systemInstruction,
        "temperature": 0.6,
      },
    };
  }, [systemInstruction]);

  // Send the recipe to the model
  useEffect(() => {
    if (isSessionActive && dataChannel && recipe) {
      sendClientEvent(sessionUpdate());
      sendTextMessage(JSON.stringify(recipe));
    }
  }, [isSessionActive, dataChannel, recipe, sendClientEvent, sendTextMessage, sessionUpdate]);

  return (
    <>
      <Header showNav={false} />
      <main className="flex flex-col items-center min-h-screen pt-20 px-4">
        <div className="w-full max-w-4xl p-4">
          <RecipePanel
            recipe={recipe}
            sendClientEvent={sendClientEvent}
            sendTextMessage={sendTextMessage}
            isSessionActive={isSessionActive}
          />
        </div>
        <div className="mb-4">
          <SessionControls
            startSession={startSession}
            stopSession={stopSession}
            sendClientEvent={sendClientEvent}
            sendTextMessage={sendTextMessage}
            isSessionActive={isSessionActive}
          />
        </div>
      </main>
    </>
  );
}
