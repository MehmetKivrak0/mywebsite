'use client';

import { useEffect } from 'react';

export default function ConsoleErrorSuppressor() {
  useEffect(() => {
    // Suppress Chrome extension errors
    const originalError = console.error;
    console.error = function (...args: any[]) {
      if (
        args[0] &&
        typeof args[0] === 'string' &&
        (args[0].includes('chrome-extension://') ||
          args[0].includes('Unexpected token') ||
          args[0].includes('j.ntent_reporter'))
      ) {
        return; // Suppress Chrome extension errors
      }
      originalError.apply(console, args);
    };

    // Cleanup on unmount
    return () => {
      console.error = originalError;
    };
  }, []);

  return null;
}
