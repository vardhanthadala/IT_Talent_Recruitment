"use client";

import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [phase, setPhase] = useState(0);
  const [progress, setProgress] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the loader this session
    const hasSeenLoader = sessionStorage.getItem("hasSeenLoader_v12");
    if (hasSeenLoader) {
      setPhase(3);
      return;
    }

    // Trigger the progress bar immediately on mount
    const progressTimer = setTimeout(() => {
      setProgress(true);
    }, 50);

    // Wait for progress to fill, then split the curtains
    const exitTimer = setTimeout(() => {
      setPhase(1); // Trigger the curtain split
    }, 1000);

    // Completely remove the overlay from the DOM after animations finish
    const removeTimer = setTimeout(() => {
      sessionStorage.setItem("hasSeenLoader_v12", "true");
      setPhase(3);
    }, 2500);

    return () => {
      clearTimeout(progressTimer);
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (phase === 3) return null;

  return (
    <>
      {/* 
        This inline script executes immediately as the HTML is parsed. 
        It completely prevents the "flash" of the blue screen on page refresh 
        by injecting a CSS rule to hide the loader before React even hydrates.
      */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if (sessionStorage.getItem('hasSeenLoader_v12')) {
              var style = document.createElement('style');
              style.innerHTML = '.global-loader-container { display: none !important; }';
              document.head.appendChild(style);
            }
          `,
        }}
      />
      <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden global-loader-container">
        {/* Left Curtain */}
        <div 
          className={`absolute inset-y-0 left-0 w-1/2 bg-[#0f172a] transition-transform duration-[1200ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${
              phase >= 1 ? '-translate-x-full' : 'translate-x-0'
          }`}
        />
        
        {/* Right Curtain */}
        <div 
          className={`absolute inset-y-0 right-0 w-1/2 bg-[#0f172a] transition-transform duration-[1200ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${
              phase >= 1 ? 'translate-x-full' : 'translate-x-0'
          }`}
        />

        {/* Ultra-Minimalist Progress Line */}
        <div 
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-[400ms] ease-in-out ${
              phase >= 1 ? 'opacity-0' : 'opacity-100'
          }`}
        >
            <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-white/90 rounded-full transition-all duration-[800ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${
                    progress ? 'w-full' : 'w-0'
                  }`}
                />
            </div>
        </div>
      </div>
    </>
  );
}
