import { useState } from "react";
import { CloudLightning, CloudOff, MessageSquare } from "react-feather";
import Button from "./Button";

function SessionStopped({ startSession }) {
  const [isActivating, setIsActivating] = useState(false);

  function handleStartSession() {
    if (isActivating) return;

    setIsActivating(true);
    startSession();
  }

  return (
    <div className="flex items-center justify-center w-full h-full bg-white rounded-full">
      <Button
        onClick={handleStartSession}
        className={isActivating ? "text-primary text-sm bg-primary/15 hover:text-white hover:bg-primary cursor-not-allowed" : "bg-primary text-white text-sm hover:bg-primary/15 hover:text-primary"}
        icon={<CloudLightning height={16} />}
      >
        {isActivating ? "starting..." : "start cooking"}
      </Button>
    </div>
  );
}

function SessionActive({ stopSession }) {

  return (
    <div className="flex items-center justify-center w-full h-full bg-white rounded-full">
      <Button onClick={stopSession} icon={<CloudOff height={16} />} className="text-primary text-sm bg-primary/15 hover:text-white hover:bg-primary">
        disconnect
      </Button>
    </div>
  );
}

export default function SessionControls({
  startSession,
  stopSession,
  sendClientEvent,
  sendTextMessage,
  serverEvents,
  isSessionActive,
}) {
  return (
    <div className="flex gap-4 h-full">
      {isSessionActive ? (
        <SessionActive
          stopSession={stopSession}
          sendClientEvent={sendClientEvent}
          serverEvents={serverEvents}
        />
      ) : (
        <SessionStopped startSession={startSession} />
      )}
    </div>
  );
}
