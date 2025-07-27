import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

const useTimerStore = create(
  persist(
    immer((set) => ({
      initialDuration: 0,
      remainingTime: 0,
      isRunning: false,
      isPaused: false,
      endTime: null,
      isAlarmPlaying: false,
      setTimer: (duration) => set((state) => {
        state.initialDuration = duration;
        state.remainingTime = duration;
        state.isRunning = true;
        state.isPaused = false;
        state.endTime = Date.now() + duration * 1000;
      }),
      stopTimer: () => set((state) => {
        state.initialDuration = 0;
        state.remainingTime = 0;
        state.isRunning = false;
        state.isPaused = false;
        state.endTime = null;
        state.isAlarmPlaying = false;
      }),
      pauseTimer: () => set((state) => {
        state.isPaused = true;
      }),
      resumeTimer: () => set((state) => {
        state.isPaused = false;
        state.endTime = Date.now() + state.remainingTime * 1000;
      }),
      setRemainingTime: (time) => set((state) => {
        state.remainingTime = time;
      }),
      setIsAlarmPlaying: (playing) => set((state) => {
        state.isAlarmPlaying = playing;
      }),
    })),
    {
      name: 'timer-storage', 
      storage: createJSONStorage(() => localStorage), 
    }
  )
);

export default useTimerStore;