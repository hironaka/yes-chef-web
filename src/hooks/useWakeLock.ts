"use client";
import { useEffect, useRef } from 'react';

export const useWakeLock = (enabled: boolean = true) => {
  const wakeLockRef = useRef<WakeLockSentinel | null>(null);

  useEffect(() => {
    if (!enabled || typeof window === 'undefined' || !('wakeLock' in navigator)) {
      return;
    }

    const requestWakeLock = async () => {
      try {
        wakeLockRef.current = await navigator.wakeLock.request('screen');
        console.log('Wake lock acquired');
      } catch (err) {
        console.error('Failed to acquire wake lock:', err);
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && wakeLockRef.current?.released) {
        requestWakeLock();
      }
    };

    // Request wake lock when component mounts
    requestWakeLock();

    // Re-acquire wake lock when page becomes visible again
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      // Release wake lock when component unmounts
      if (wakeLockRef.current) {
        wakeLockRef.current.release();
        console.log('Wake lock released');
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [enabled]);

  return {
    isSupported: typeof window !== 'undefined' && 'wakeLock' in navigator,
    wakeLock: wakeLockRef.current
  };
};