'use client';

import { useEffect } from 'react';
import { initAllAnimations } from '@/app/animation';

export default function AnimationProvider({ children }) {
  useEffect(() => {
    // Initialize animations and get cleanup function
    const cleanup = initAllAnimations();
    
    // Return cleanup function to remove event listeners when component unmounts
    return () => {
      if (typeof cleanup === 'function') {
        cleanup();
      }
    };
  }, []);

  return (
    <>
      {children}
    </>
  );
} 