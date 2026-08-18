"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SmoothScroll from "@/components/SmoothScroll";
import HubScene from "@/components/HubScene";
import CharacterExperience from "@/components/CharacterExperience";
import FrequencyExperience from "@/components/FrequencyExperience";
import StoryExperience from "@/components/StoryExperience";
import CivicExperience from "@/components/CivicExperience";
import OrganizationsExperience from "@/components/OrganizationsExperience";
import AudioToggle from "@/components/AudioToggle";

type ViewState = "hub" | "character" | "frequency" | "story" | "civic" | "organizations";

export default function Home() {
  const [currentView, setCurrentView] = useState<ViewState>("hub");

  return (
    <SmoothScroll>
      <main className="relative w-full min-h-screen bg-[#151713] overflow-x-hidden text-[#F1E7D8]">
        
        {/* Persistent 3D Canvas Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <HubScene currentView={currentView} onViewChange={setCurrentView} />
        </div>

        {/* Global Audio Toggle */}
        <AudioToggle />

        {/* DOM UI Layer */}
        <div className="relative z-10 w-full min-h-screen pointer-events-none flex flex-col justify-between p-4 md:p-12">
          <header className="flex justify-between items-center pointer-events-auto">
            <div 
              className="flex items-center gap-3 cursor-pointer group pointer-events-auto relative z-50"
              onClick={() => {
                setCurrentView("hub");
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
              }}
            >
              <img src="/logo.png" alt="Mindset Reset Logo" className="h-10 md:h-12 w-auto object-contain drop-shadow-[0_0_15px_rgba(232,216,193,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(180,111,108,0.5)] transition-all duration-500" />
              <span className="font-serif text-lg md:text-xl tracking-widest text-[#E8D8C1] group-hover:text-[#B46F6C] transition-colors duration-500">
                MINDSET RESET
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm tracking-[0.2em] uppercase text-[#E8D8C1]/60">
              {["Character", "Frequency", "Story", "Civic"].map((item) => (
                <button
                  key={item}
                  onClick={() => setCurrentView(item.toLowerCase() as ViewState)}
                  className={`hover:text-[#B46F6C] transition-colors ${currentView === item.toLowerCase() ? "text-[#B46F6C]" : ""}`}
                >
                  {item}
                </button>
              ))}
              <div className="w-[1px] h-4 bg-[#E8D8C1]/20 mx-2" />
              <button onClick={() => setCurrentView("organizations")} className={`hover:text-[#B46F6C] transition-colors ${currentView === "organizations" ? "text-[#B46F6C]" : ""}`}>ORGANIZATIONS</button>
              <a href="https://elonakearney.com" target="_blank" rel="noreferrer" className="text-[#151713] bg-[#B46F6C] hover:bg-[#E8D8C1] px-5 py-2 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(180,111,108,0.2)]">
                HOST A CULTIVATION PARTY
              </a>
            </nav>
          </header>

          <AnimatePresence mode="wait">
            {currentView === "hub" && (
              <motion.div
                key="hub"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex-1 flex flex-col items-center justify-center pointer-events-auto text-center"
              >
                {/* Normal Document Flow Text (Always stays below header) */}
                <div className="w-full flex flex-col items-center mt-4 md:mt-8 pointer-events-none text-center z-10 relative">
                  <h2 className="text-3xl md:text-6xl font-serif font-light mb-4 text-shadow-glow text-[#E8D8C1] drop-shadow-2xl px-4">
                    What are you here to explore?
                  </h2>
                  <p className="text-[#E8D8C1] font-semibold tracking-widest uppercase text-[10px] md:text-sm shadow-xl border border-[#B46F6C]/30 rounded-full px-4 md:px-6 py-2 bg-[#24241F]/60 backdrop-blur-md mx-auto">
                    Move Beyond Labels. Rebuild Identity.
                  </p>
                </div>

                {/* Spacer to push the About section below the fold */}
                <div className="w-full h-[60vh] md:h-[70vh] pointer-events-none"></div>

                {/* Orbit Layout Container - Absolutely positioned at exactly 50vh to mathematically match the 3D center */}
                <div className="absolute top-[50vh] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl flex items-center justify-center pointer-events-none">
                  
                  {/* 4 Orbiting Cards inside a rotating container */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
                    className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px] flex items-center justify-center"
                  >
                    {/* The Physical Orbital Ring */}
                    <div className="absolute inset-0 rounded-full border border-[#E8D8C1]/10 shadow-[0_0_60px_rgba(232,216,193,0.03)] pointer-events-none" />
                    
                    {[
                      { id: "character", label: "Who am I becoming?", title: "CHARACTER", num: "01", pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" },
                      { id: "frequency", label: "What am I picking up?", title: "FREQUENCY", num: "02", pos: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2" },
                      { id: "story", label: "What have I survived?", title: "STORY", num: "03", pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" },
                      { id: "civic", label: "What would you change?", title: "CIVIC", num: "04", pos: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" },
                    ].map((exp) => (
                      <motion.div
                        key={exp.id}
                        className={`absolute ${exp.pos} pointer-events-auto`}
                        animate={{ rotate: -360 }}
                        transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
                      >
                        <button
                          onClick={() => setCurrentView(exp.id as ViewState)}
                          className="group relative flex flex-col items-center justify-center p-2 md:p-6 border border-[#7E8768]/30 bg-gradient-to-br from-[#151713]/90 to-[#24241F]/80 backdrop-blur-2xl rounded-full shadow-[inset_0_0_20px_rgba(232,216,193,0.03)] hover:scale-105 hover:bg-gradient-to-br hover:from-[#24241F]/90 hover:to-[#B46F6C]/20 hover:border-[#E8D8C1]/40 hover:shadow-[0_0_40px_rgba(232,216,193,0.15)] transition-all duration-700 w-[110px] md:w-[130px] h-[110px] md:h-[130px] overflow-hidden"
                        >
                          {/* Numbering Detail (Top Center) */}
                          <span className="absolute top-2 md:top-4 left-1/2 -translate-x-1/2 text-[9px] md:text-[11px] font-mono text-[#E8D8C1]/30 group-hover:text-[#E8D8C1]/80 transition-colors duration-500">
                            {exp.num}
                          </span>
                          
                          {/* Title & Underline Animation */}
                          <div className="relative mb-1 md:mb-2 mt-3 md:mt-3">
                            <span className="text-[#B46F6C] font-serif text-[11px] md:text-sm group-hover:text-[#E8D8C1] transition-colors duration-500 tracking-wide">
                              {exp.title}
                            </span>
                            <div className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-[#E8D8C1] group-hover:w-full group-hover:left-0 transition-all duration-500 ease-out"></div>
                          </div>
                          
                          <span className="text-[7.5px] md:text-[9px] tracking-widest text-[#E8D8C1]/60 uppercase mt-1 md:mt-2 group-hover:text-[#E8D8C1] transition-colors duration-500 text-center leading-tight max-w-[90%]">
                            {exp.label}
                          </span>
                          
                          {/* Hover Arrow (Bottom Center) */}
                          <span className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 text-[10px] md:text-xs text-[#E8D8C1] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                            &darr;
                          </span>
                        </button>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* About Mindset Reset Section */}
                <div className="mt-20 w-full max-w-4xl mx-auto bg-[#151713]/95 backdrop-blur-3xl border border-[#B46F6C]/30 shadow-[0_0_50px_rgba(180,111,108,0.15)] rounded-[2rem] p-8 md:p-12 text-left pointer-events-auto relative overflow-hidden">
                  
                  {/* Subtle Background Glow */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#B46F6C]/5 blur-3xl pointer-events-none" />
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-[1px] w-12 bg-[#B46F6C]" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#B46F6C]">Our Mission</span>
                  </div>
                  <h3 className="font-serif text-3xl md:text-5xl text-[#E8D8C1] mb-6">What is Mindset Reset?</h3>
                  <p className="font-sans text-sm md:text-lg text-[#E8D8C1]/70 leading-relaxed mb-10 max-w-3xl">
                    Mindset Reset is a transformation agency founded by EL&apos;ona Kearney. We provide the tools, curriculum, and structure for individuals and organizations ready to move beyond limiting labels. From corporate keynotes and identity coaching to our Second Chance Workforce Transformation programs, we build systems that reconstruct civic engagement and personal identity.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                    <div className="border border-[#B46F6C]/10 bg-[#24241F]/40 p-6 rounded-xl hover:bg-[#B46F6C]/10 hover:border-[#B46F6C]/40 hover:shadow-[0_0_30px_rgba(180,111,108,0.15)] transition-all duration-500 cursor-default">
                      <h4 className="font-serif text-lg md:text-2xl text-[#E8D8C1] mb-2">Speaking &amp; Keynotes</h4>
                      <p className="font-sans text-xs md:text-sm text-[#E8D8C1]/60 leading-relaxed">Book EL&apos;ona to inspire and challenge your organization.</p>
                    </div>
                    <div className="border border-[#B46F6C]/10 bg-[#24241F]/40 p-6 rounded-xl hover:bg-[#B46F6C]/10 hover:border-[#B46F6C]/40 hover:shadow-[0_0_30px_rgba(180,111,108,0.15)] transition-all duration-500 cursor-default">
                      <h4 className="font-serif text-lg md:text-2xl text-[#E8D8C1] mb-2">Immersive Identity Experiences</h4>
                      <p className="font-sans text-xs md:text-sm text-[#E8D8C1]/60 leading-relaxed">Interactive experiences using the Mindset Reset tools to uncover, define, and cultivate who you choose to become.</p>
                    </div>
                    <div className="border border-[#B46F6C]/10 bg-[#24241F]/40 p-6 rounded-xl hover:bg-[#B46F6C]/10 hover:border-[#B46F6C]/40 hover:shadow-[0_0_30px_rgba(180,111,108,0.15)] transition-all duration-500 cursor-default">
                      <h4 className="font-serif text-lg md:text-2xl text-[#E8D8C1] mb-2">CORE Housing</h4>
                      <p className="font-sans text-xs md:text-sm text-[#E8D8C1]/60 leading-relaxed">Structured transition housing for rebuilding lives.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {currentView === "character" && (
              <CharacterExperience key="character" onBack={() => setCurrentView("hub")} />
            )}
            {currentView === "frequency" && (
              <FrequencyExperience key="frequency" onBack={() => setCurrentView("hub")} />
            )}
            {currentView === "story" && (
              <StoryExperience key="story" onBack={() => setCurrentView("hub")} />
            )}
            {currentView === "civic" && (
              <CivicExperience key="civic" onBack={() => setCurrentView("hub")} />
            )}
            {currentView === "organizations" && (
              <OrganizationsExperience key="organizations" onBack={() => setCurrentView("hub")} />
            )}
          </AnimatePresence>

          <footer className="text-center text-[#E8D8C1]/40 text-xs tracking-widest uppercase pointer-events-none mt-16 pb-16">
            I am becoming without permission.
          </footer>
        </div>
      </main>
    </SmoothScroll>
  );
}
