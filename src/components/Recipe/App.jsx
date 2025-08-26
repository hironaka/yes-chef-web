"use client"

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import SessionControls from "./SessionControls";
import RecipePanel from "./RecipePanel";
import Timer from "./Timer";
import { generateToken } from '@/app/lib/actions';
import { useWakeLock } from "@/hooks/useWakeLock";

export default function App() {
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [isReconnecting, setIsReconnecting] = useState(false);
  const [dataChannel, setDataChannel] = useState(null);
  const [recipe, setRecipe] = useState(null);
  const [events, setEvents] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const { isSupported } = useWakeLock(isSessionActive);
  const peerConnection = useRef(null);
  const audioElement = useRef(null);
  const reconnectTimer = useRef(null);
  const transcriptsRef = useRef([]);

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
    const model = "gpt-4o-realtime-preview-2025-06-03";
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
    setEvents([]);
    peerConnection.current = null;

    // Clear the reconnect timer
    if (reconnectTimer.current) {
      clearTimeout(reconnectTimer.current);
      reconnectTimer.current = null;
    }
  }

  async function reconnectSession() {
    console.log("Reconnecting session...");
    setIsReconnecting(true);

    // 1. Collect transcripts from the old session
    setEvents(prevEvents => {
      const transcripts = prevEvents
        .filter((event) => event.type === "response.audio_transcript.done" && event.transcript)
        .map((event) => event.transcript)
        .reverse(); // reverse to maintain chronological order
      console.log("Transcripts:", transcripts);
      transcriptsRef.current = transcripts;
      return prevEvents;
    });

    // 2. Keep old session alive (optional, for smoother transition)
    const oldPc = peerConnection.current;
    const oldDc = dataChannel;

    // 3. Start a new session
    await startSession();

    // 4. Close old session
    if (oldDc) {
      oldDc.close();
    }
    if (oldPc) {
      oldPc.getSenders().forEach((sender) => {
        if (sender.track) {
          sender.track.stop();
        }
      });
      oldPc.close();
    }
    console.log("Session reconnected.");
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

  const sendTranscriptMessage = useCallback((message) => {
    const event = {
      type: "conversation.item.create",
      item: {
        type: "message",
        role: "model",
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
        const eventData = JSON.parse(e.data);
        console.log('Server Event:', JSON.stringify(eventData, null, 2));
        setEvents(prevEvents => [eventData, ...prevEvents]);
      });

      // Set session active when the data channel is opened
      dataChannel.addEventListener("open", () => {
        setIsSessionActive(true);
        setIsReconnecting(false);
        // Start a 29-minute timer to reconnect the session
        reconnectTimer.current = setTimeout(() => {
          reconnectSession();
        }, 29 * 60 * 1000);
      });
    }
  }, [dataChannel]);

  // Get the recipe from the browser extension
  useEffect(() => {
    const extensionId = 'lmakaflodkdoemdbcahofdoiihchjbim'; // Replace with your extension ID
    const safariExtensionId = 'ai.yes-chef.YesChef.Extension (6WY2A6DU5T)'; // Safari extension ID when available
    
    // Feature detection for browser extension APIs
    const getBrowserRuntime = () => {
      if (typeof chrome !== 'undefined' && chrome.runtime) {
        return { runtime: chrome.runtime, extensionId, browserType: 'chrome' };
      } else if (typeof safari !== 'undefined' && safari.extension) {
        // Safari extension API (legacy)
        return { runtime: safari.extension, extensionId: safariExtensionId, browserType: 'safari-legacy' };
      } else if (typeof browser !== 'undefined' && browser.runtime && navigator.userAgent.includes('Safari')) {
        // Safari with WebExtension API (Safari 14+)
        return { runtime: browser.runtime, extensionId: safariExtensionId, browserType: 'safari-webext' };
      }  else if (typeof browser !== 'undefined' && browser.runtime) {
        // Firefox/WebExtension API
        return { runtime: browser.runtime, extensionId, browserType: 'firefox' };
      }
      return null;
    };

    const browserAPI = getBrowserRuntime();
    
    if (browserAPI) {
      const { runtime, extensionId: currentExtensionId, browserType } = browserAPI;
      
      try {
        if (browserType === 'safari-legacy') {
          // Safari legacy extension messaging
          if (runtime.sendMessage) {
            runtime.sendMessage('GET_RECIPE', response => {
              console.log('Response from Safari extension:', response);
              if (response && response.recipe) {
                setRecipe(response.recipe);
                console.log('Recipe set:', response.recipe);
              } else {
                console.error('No recipe received from Safari extension');
              }
            });
          }
        } else {
          // Chrome/Firefox/Safari WebExtension API
          runtime.sendMessage(currentExtensionId, { action: 'GET_RECIPE' }, response => {
            console.log(`Response from ${browserType} extension:`, response);
            if (response && response.recipe) {
              setRecipe(response.recipe);
              console.log('Recipe set:', response.recipe);
            } else {
              console.error(`No recipe received from ${browserType} extension`);
            }
          });
        }
      } catch (error) {
        console.error('Error communicating with extension:', error);
        // Fallback: prompt user to manually input recipe or provide alternative
        console.log('Extension not available. Consider manual recipe input or alternative data source.');
      }
    } else {
      console.error('Browser extension APIs not available');
      // Fallback: show UI for manual recipe input
      console.log('No extension support detected. Consider manual recipe input or alternative data source.');
    }
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Clean up the timer when the component unmounts
  useEffect(() => {
    return () => {
      if (reconnectTimer.current) {
        clearTimeout(reconnectTimer.current);
      }
    };
  }, []);

  const systemInstruction = `
  You are a helpful sous-chef working as an assistant to a chef.

  Start by saying 'yes chef' and wait for a question. After the initial greeting, do not say 'yes chef' ever again.
  
  Only give instructions when asked. Be as incremental and step by step as possible.

  Make answers as consice as possible without missing any information. You should be concise, direct, and to the point. You MUST answer concisely with fewer than 4 lines (not including tool use), unless user asks for detail. IMPORTANT: You should minimize output tokens as much as possible while maintaining helpfulness, quality, and accuracy. Only address the specific query or task at hand, avoiding tangential information unless absolutely critical for completing the request. If you can answer in 1-3 sentences or a short paragraph, please do. IMPORTANT: You should NOT answer with unnecessary preamble or postamble (such as explaining your code or summarizing your action), unless the user asks you to.

  When an ingredient lists alternative units of measure and quantities (e.g., ounces or grams), say "or" to connect each option.

  If an instruction includes a specific cooking duration, and in no other circumstance, offer to set a timer.

  Stay on the topic of cooking and recipes, do not speak about other topics.
  `;
  
  const sessionUpdate = useCallback(() => {
    return {
      type: "session.update",
      session: {
        "instructions": systemInstruction,
        "temperature": 0.6,
        "tools": [
          {
            type: "function",
            name: "start_timer",
            description: "Call this function when a user asks to start or set a timer.",
            parameters: {
              type: "object",
              strict: true,
              properties: {
                duration: {
                  type: "integer",
                  description: "The duration of the timer in seconds.",
                }
              },
              required: ["duration"],
            },
          },
          {
            type: "function",
            name: "stop_timer",
            description: "Call this function when a user asks to stop (end and reset) the current timer.",
            parameters: {
              type: "object",
              strict: true,
              properties: {},
            },
          },
          {
            type: "function",
            name: "pause_timer",
            description: "Call this function when a user asks to pause the current timer.",
            parameters: {
              type: "object",
              strict: true,
              properties: {},
            },
          },
          {
            type: "function",
            name: "resume_timer",
            description: "Call this function when a user asks to resume the paused timer.",
            parameters: {
              type: "object",
              strict: true,
              properties: {},
            },
          }
        ],
        "tool_choice": "auto",
      },
    };
  }, [systemInstruction]);

  // Send the recipe to the model
  useEffect(() => {
    if (isSessionActive && dataChannel && recipe && !isReconnecting) {
      sendClientEvent(sessionUpdate());
      sendTextMessage(JSON.stringify(recipe));
      if (transcriptsRef.current && transcriptsRef.current.length > 0) {
        const transcriptText = transcriptsRef.current.join("\n");
        sendTextMessage("We just reconnected from a previous session. Do not mention reconnecting. Here is the previous conversation history:");
        sendTextMessage(transcriptText);
      }
    }
  }, [isSessionActive, isReconnecting, dataChannel, recipe, sendClientEvent, sendTextMessage, sessionUpdate, transcriptsRef]);

  return (
    <>
      <main className="flex flex-col items-center min-h-screen pt-20 px-4">
        <div className="w-full max-w-4xl pb-20">
          <RecipePanel
            recipe={recipe}
            setRecipe={setRecipe}
            sendClientEvent={sendClientEvent}
            sendTextMessage={sendTextMessage}
          />
        </div>
        {recipe && (
          <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-40 flex flex-col items-center">
            {isSmallScreen && (
              <div className="mb-4">
                <Timer
                  isSessionActive={isSessionActive}
                  sendClientEvent={sendClientEvent}
                  events={events}
                />
              </div>
            )}
            <SessionControls
              startSession={startSession}
              stopSession={stopSession}
              sendClientEvent={sendClientEvent}
              sendTextMessage={sendTextMessage}
              isSessionActive={isSessionActive}
            />
          </div>
        )}
      </main>

      {/* Timer positioned in bottom right on larger screens */}
      {!isSmallScreen && (
        <div className="fixed bottom-10 right-10 z-50">
          <Timer
            isSessionActive={isSessionActive}
            sendClientEvent={sendClientEvent}
            events={events}
          />
        </div>
      )}
    </>
  );
}
