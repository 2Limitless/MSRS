"use client";

import { useState, useRef, useEffect } from "react";

export default function AudioToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // We only try to play automatically if it's already "isPlaying" state, 
    // but browsers block auto-play until user interacts.
    // The safest way is to let the user manually click play the first time.
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Soft background volume
    }
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50">
      {/* Hidden audio element pointing to kulakovka-cinematic-ambient-274889.mp3 */}
      <audio ref={audioRef} src="/kulakovka-cinematic-ambient-274889.mp3" loop />

      <button
        onClick={toggleMute}
        className={`group flex items-center gap-3 px-5 py-3 rounded-full border transition-all duration-500 shadow-xl ${
          isPlaying 
            ? "bg-[#B46F6C]/20 border-[#B46F6C] shadow-[0_0_20px_rgba(180,111,108,0.3)]" 
            : "bg-[#24241F]/60 border-[#E8D8C1]/30 backdrop-blur-xl hover:border-[#E8D8C1]/60 shadow-[0_0_15px_rgba(232,216,193,0.1)]"
        }`}
        aria-label="Toggle Sound"
      >
        <span className="text-[#E8D8C1] font-mono text-[10px] tracking-[0.3em] uppercase mt-[2px]">
          {isPlaying ? "Playing" : "Sound"}
        </span>

        {isPlaying ? (
          /* Pause Icon */
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-[#E8D8C1]"
          >
            <rect x="6" y="4" width="4" height="16"></rect>
            <rect x="14" y="4" width="4" height="16"></rect>
          </svg>
        ) : (
          /* Play Icon */
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-[#E8D8C1]"
          >
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        )}
      </button>
    </div>
  );
}
