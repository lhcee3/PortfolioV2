"use client";

import { useEffect } from "react";

export default function ClientErrorHandler() {
  useEffect(() => {
    // Suppress wallet extension errors only on client side
    const originalError = console.error;
    console.error = (...args) => {
      if (
        typeof args[0] === 'string' && 
        (args[0].includes('Receiving end does not exist') || 
         args[0].includes('chrome-extension'))
      ) {
        return; // Suppress wallet extension errors
      }
      originalError.apply(console, args);
    };

    // Cleanup function to restore original console.error
    return () => {
      console.error = originalError;
    };
  }, []);

  return null; // This component doesn't render anything
}