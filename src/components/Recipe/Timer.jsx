import React, { useEffect, useCallback, useRef } from 'react';
import useTimerStore from '../../stores/timerStore';

export default function TimerPanel({
  isSessionActive,
  sendClientEvent,
  events,
}) {
  const {
    initialDuration,
    remainingTime,
    isRunning,
    isPaused,
    endTime,
    isAlarmPlaying,
    setTimer,
    stopTimer,
    pauseTimer,
    resumeTimer,
    setRemainingTime,
    setIsAlarmPlaying,
  } = useTimerStore();
  const audioRef = useRef(null);

  const formatTime = useCallback((totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }, []);

  const playTimerEndSound = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/audio/kitchen-timer-33043.mp3');
      audioRef.current.loop = true;
    }
    
    audioRef.current.play().catch(error => {
      console.error('Error playing timer sound:', error);
    });
    setIsAlarmPlaying(true);
  }, [setIsAlarmPlaying]);

  const stopTimerSound = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsAlarmPlaying(false);
  }, [setIsAlarmPlaying]);

  const handleStopTimer = useCallback((calledByMCP = false, callId = null) => {
    stopTimer();
    stopTimerSound();

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
  }, [sendClientEvent, stopTimer, stopTimerSound]);

  const handleStartTimer = useCallback((durationInSeconds, callId) => {
    setTimer(durationInSeconds);

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
  }, [sendClientEvent, setTimer]);

  const handlePauseTimer = useCallback((callId = null) => {
    if (isRunning && !isPaused) {
      pauseTimer();
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
  }, [isRunning, isPaused, sendClientEvent, pauseTimer]);

  const handleResumeTimer = useCallback((callId = null) => {
    if (isRunning && isPaused) {
      resumeTimer();
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
  }, [isRunning, isPaused, sendClientEvent, resumeTimer]);

  useEffect(() => {
    let animationFrameId;
    if (isRunning && !isPaused && endTime) {
      const tick = () => {
        const now = Date.now();
        const newRemaining = Math.max(0, Math.round((endTime - now) / 1000));
        setRemainingTime(newRemaining);

        if (newRemaining === 0 && !isAlarmPlaying) {
          playTimerEndSound();
        }
        
        if (newRemaining > 0) {
          animationFrameId = requestAnimationFrame(tick);
        }
      };
      animationFrameId = requestAnimationFrame(tick);
    }
    return () => cancelAnimationFrame(animationFrameId);
  }, [isRunning, isPaused, endTime, isAlarmPlaying, playTimerEndSound, setRemainingTime]);

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
      stopTimer();
      stopTimerSound();
    }
  }, [isSessionActive, stopTimer, stopTimerSound]);

  if (initialDuration === 0 && !isRunning && !isAlarmPlaying) {
    return null; // Don't display if no timer was set or it has finished and reset
  }

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-lg relative">
      <button
        onClick={() => handleStopTimer()}
        className="absolute top-1 right-1 w-4 h-4 text-gray-300 hover:text-black rounded-full flex items-center justify-center transition-colors text-md"
      >
        ×
      </button>
      <div className="text-sm font-bold text-gray-900 dark:text-white">
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