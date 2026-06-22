"use client";

import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // TEMPORARILY DISABLED: Check if the user has already seen the loader this session
    // const hasSeenLoader = sessionStorage.getItem("hasSeenLoader_v3");
    // if (hasSeenLoader) {
    //   setPhase(3);
    //   return;
    // }

    // Phase 1: Enter (slide up from bottom to cover screen)
    const enterTimer = setTimeout(() => {
      setPhase(1);
    }, 100);

    // Phase 2: Exit (slide up from screen to top)
    const exitTimer = setTimeout(() => {
      setPhase(2);
    }, 1400);

    // Phase 3: Completely remove the overlay from the DOM
    const removeTimer = setTimeout(() => {
      // Mark as seen only after the animation completes so React Strict Mode doesn't break it
      sessionStorage.setItem("hasSeenLoader_v3", "true");
      setPhase(3);
    }, 3000);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (phase === 3) return null;

  // 5 columns for the staggered effect
  const columns = [0, 1, 2, 3, 4];

  return (
    <div className="fixed inset-0 z-[100] flex pointer-events-none overflow-hidden">
      {columns.map((col) => {
        let translateClass = "translate-y-full"; // Initial state (at the bottom)
        if (phase === 1) translateClass = "translate-y-0"; // Entered state (covering screen)
        if (phase === 2) translateClass = "-translate-y-full"; // Exited state (at the top)

        // Stagger logic: 
        // Entering (0 to 1): left to right -> delay = col * 100
        // Exiting (1 to 2): right to left -> delay = (4 - col) * 100
        const delay = phase === 2 ? (4 - col) * 100 : col * 100;

        return (
          <div
            key={col}
            className={`flex-1 h-full bg-blue-600 transition-transform duration-[800ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${translateClass}`}
            style={{ transitionDelay: `${delay}ms` }}
          />
        );
      })}
    </div>
  );
}
