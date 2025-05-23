import React, { useState, useEffect, useCallback } from 'react';


export default function TimerPanel({
  isSessionActive,
  sendClientEvent,
  events,
}) {

  const [initialDuration, setInitialDuration] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [endTime, setEndTime] = useState(null);

  const formatTime = useCallback((totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }, []);

  const playTimerEndSound = useCallback(() => {
    if (typeof window !== 'undefined' && (window.AudioContext || window.webkitAudioContext)) {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(440, audioContext.currentTime); // A4 note
      gainNode.gain.setValueAtTime(0.5, audioContext.currentTime); // Adjust volume
      gainNode.gain.exponentialRampToValueAtTime(0.00001, audioContext.currentTime + 1);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 1);
    }
  }, []);

  const handleStopTimer = useCallback((calledByMCP = false, callId = null) => {
    setIsRunning(false);
    setIsPaused(false);
    setInitialDuration(0);
    setRemainingTime(0);
    setEndTime(null);

    if (calledByMCP && callId) {
      sendClientEvent({
        type: "conversation.item.create",
        item: {
          type: "function_call_output",
          call_id: callId,
          output: "Timer stopped and reset."
        }
      });
    }
  }, [sendClientEvent]);

  const handleStartTimer = useCallback((durationInSeconds, callId) => {
    setInitialDuration(durationInSeconds);
    setRemainingTime(durationInSeconds);
    setEndTime(Date.now() + durationInSeconds * 1000);
    setIsRunning(true);
    setIsPaused(false);

    if (callId) {
        sendClientEvent({
            type: "conversation.item.create",
            item: {
              type: "function_call_output",
              call_id: callId,
              output: `Timer started for ${durationInSeconds} seconds.`
            }
        });
    }
  }, [sendClientEvent]);

  const handlePauseTimer = useCallback((callId = null) => {
    if (isRunning && !isPaused) {
      setIsPaused(true);
      // The timer loop will stop due to isPaused being true.
      if (callId) {
        sendClientEvent({
          type: "conversation.item.create",
          item: {
            type: "function_call_output",
            call_id: callId,
            output: "Timer paused."
          }
        });
      }
    } else if (callId) {
        sendClientEvent({
            type: "conversation.item.create",
            item: {
              type: "function_call_output",
              call_id: callId,
              output: "Timer cannot be paused (not running or already paused)."
            }
          });
    }
  }, [isRunning, isPaused, sendClientEvent]);

  const handleResumeTimer = useCallback((callId = null) => {
    if (isRunning && isPaused) {
      setEndTime(Date.now() + remainingTime * 1000); // Recalculate endTime
      setIsPaused(false);
      // The timer loop will restart.
      if (callId) {
        sendClientEvent({
          type: "conversation.item.create",
          item: {
            type: "function_call_output",
            call_id: callId,
            output: "Timer resumed."
          }
        });
      }
    } else if (callId) {
        sendClientEvent({
            type: "conversation.item.create",
            item: {
              type: "function_call_output",
              call_id: callId,
              output: "Timer cannot be resumed (not running or not paused)."
            }
          });
    }
  }, [isRunning, isPaused, remainingTime, sendClientEvent]);

  useEffect(() => {
    let animationFrameId;
    if (isRunning && !isPaused && endTime) {
      const tick = () => {
        const now = Date.now();
        const newRemaining = Math.max(0, Math.round((endTime - now) / 1000));
        setRemainingTime(newRemaining);

        if (newRemaining === 0) {
          playTimerEndSound();
          handleStopTimer(false); // Timer ended naturally
        } else {
          animationFrameId = requestAnimationFrame(tick);
        }
      };
      animationFrameId = requestAnimationFrame(tick);
    }
    return () => cancelAnimationFrame(animationFrameId);
  }, [isRunning, isPaused, endTime, playTimerEndSound, handleStopTimer]);

  useEffect(() => {
    if (!events || events.length === 0) return;

    const mostRecentEvent = events[0];
    if (
      mostRecentEvent.type === "response.done" &&
      mostRecentEvent.response.output
    ) {
      mostRecentEvent.response.output.forEach((output) => {
        if (output.type === "function_call") {
          const { name, arguments: args, id: callId } = output;
          console.log('Function call detected:', { name, args, callId });
          
          if (name === "start_timer") {
            let duration = 0;
            try {
              const parsedArgs = typeof args === 'string' ? JSON.parse(args) : args;
              duration = parsedArgs && typeof parsedArgs.duration === 'number' ? parsedArgs.duration : 0;
            } catch (e) {
              console.error('Error parsing timer arguments:', e);
            }
            
            if (duration > 0) {
              handleStartTimer(duration, callId);
            } else if (callId) {
              sendClientEvent({
                type: "conversation.item.create",
                item: {
                  type: "function_call_output",
                  call_id: callId,
                  output: "Invalid duration provided. Timer not started."
                }
              });
            }
          } else if (name === "stop_timer") {
            handleStopTimer(true, callId);
          } else if (name === "pause_timer") {
            handlePauseTimer(callId);
          } else if (name === "resume_timer") {
            handleResumeTimer(callId);
          }
        }
      });
    }
  }, [events, sendClientEvent, handleStartTimer, handleStopTimer, handlePauseTimer, handleResumeTimer]);

  useEffect(() => {
    if (!isSessionActive) {
      setIsRunning(false);
      setIsPaused(false);
      setInitialDuration(0);
      setRemainingTime(0);
      setEndTime(null);
    }
  }, [isSessionActive]);

  if (initialDuration === 0 && !isRunning) {
    return null; // Don't display if no timer was set or it has finished and reset
  }

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-lg">
      <div className="text-3xl font-bold text-gray-900 dark:text-white">
        {formatTime(remainingTime)}
      </div>
      {/* 
        // Manual controls can be added here for testing if needed
        {isRunning && !isPaused && <button onClick={() => handlePauseTimer()}>Pause Manually</button>}
        {isRunning && isPaused && <button onClick={() => handleResumeTimer()}>Resume Manually</button>}
        {(isRunning || initialDuration > 0) && <button onClick={() => handleStopTimer()}>Stop Manually</button>}
      */}
    </div>
  );
}