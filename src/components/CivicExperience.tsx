"use client";

import { motion } from "framer-motion";
import { useState, useRef, MouseEvent, useEffect } from "react";

export default function CivicExperience({ onBack }: { onBack: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [trail, setTrail] = useState<{x: number, y: number, id: number}[]>([]);

  // Gradually fade the trail when the mouse stops moving
  useEffect(() => {
    if (trail.length === 0) return;
    const timer = setTimeout(() => {
      setTrail((prev) => prev.slice(0, -1));
    }, 100);
    return () => clearTimeout(timer);
  }, [trail]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const cellX = Math.floor(x / 40) * 40;
    const cellY = Math.floor(y / 40) * 40;
    
    setTrail((prev) => {
      // Don't add if we're hovering over the exact same cell as the last one
      if (prev.length > 0 && prev[0].x === cellX && prev[0].y === cellY) return prev;
      return [{ x: cellX, y: cellY, id: Date.now() + Math.random() }, ...prev].slice(0, 12);
    });
  };

  const handleMouseLeave = () => {
    setTrail([]);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex-1 z-20 pointer-events-auto flex flex-col justify-start"
    >
      <div className="min-h-full w-full flex flex-col justify-start items-center pt-8 md:pt-16 pb-48 md:pb-64 px-4 md:px-8">
        
        {/* Main Glass Container */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative max-w-5xl w-full bg-[#151713]/95 backdrop-blur-3xl p-6 md:p-14 rounded-none md:rounded-sm border border-[#E8D8C1]/30 shadow-[0_0_50px_rgba(232,216,193,0.1)] overflow-hidden"
        >
          
          {/* Base Subtle Blueprint Grid Background */}
          <div className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03]"
               style={{ backgroundImage: 'linear-gradient(#E8D8C1 1px, transparent 1px), linear-gradient(90deg, #E8D8C1 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
          />
          
          {/* Individual Hovered Square Trail (Mouse interaction) */}
          {trail.map((cell, idx) => (
            <div 
              key={cell.id}
              className="absolute pointer-events-none transition-all duration-300 ease-out hidden md:block"
              style={{ 
                width: '40px', 
                height: '40px',
                left: cell.x,
                top: cell.y,
                backgroundColor: '#E8D8C1',
                opacity: Math.max(0, 0.15 - (idx * 0.015)) 
              }} 
            />
          ))}

          {/* Autonomous flashing grid squares for mobile devices */}
          <div className="absolute inset-0 pointer-events-none block md:hidden">
             {[...Array(6)].map((_, i) => (
               <motion.div
                 key={i}
                 className="absolute bg-[#E8D8C1] w-[40px] h-[40px]"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: [0, 0.15, 0] }}
                 transition={{ 
                   duration: 2 + Math.random() * 2, 
                   repeat: Infinity, 
                   repeatDelay: Math.random() * 5,
                   delay: Math.random() * 2 
                 }}
                 style={{
                   left: `${Math.floor(Math.random() * 8) * 40}px`,
                   top: `${Math.floor(Math.random() * 12) * 40}px`
                 }}
               />
             ))}
          </div>

          {/* Background Typography Watermark */}
          <div className="absolute -top-6 -right-6 text-[100px] md:text-[200px] font-serif font-black text-[#E8D8C1]/5 select-none pointer-events-none leading-none tracking-tighter">
            CIVIC
          </div>

          <div className="relative z-10 flex flex-col md:flex-row gap-12">
            
            {/* Left Column: The Vision */}
            <div className="flex-1 flex flex-col">
              <button 
                onClick={onBack}
                className="text-[#E8D8C1]/50 text-xs tracking-[0.3em] uppercase mb-12 hover:text-[#E8D8C1] transition-colors flex items-center gap-2 group w-max"
              >
                <span className="text-[#E8D8C1] group-hover:-translate-x-1 transition-transform">&larr;</span> Return to Hub
              </button>

              <p className="font-mono text-[#E8D8C1]/40 uppercase tracking-[0.4em] text-[10px] mb-4">
                System Redesign
              </p>

              <h2 className="text-4xl md:text-6xl font-serif font-light text-[#E8D8C1] mb-6 leading-tight">
                How would you <br/> <span className="text-white font-bold tracking-tight bg-[#E8D8C1]/10 px-2">lead?</span>
              </h2>
              
              <p className="text-[#E8D8C1]/70 font-sans text-sm md:text-base font-light leading-relaxed mb-8 max-w-sm border-l border-[#E8D8C1]/20 pl-4">
                Explore books, workbooks, card decks, and workplace curriculum designed to help people understand leadership, engage thoughtfully in civic life, challenge the way they think, and recognize the potential in people beyond their past. <span className="font-semibold text-[#E8D8C1]">These products turn conversation into reflection—and reflection into informed action.</span>
              </p>

              <div className="mt-auto pt-8">
                <a href="https://elonakearney.com" target="_blank" rel="noreferrer" className="group relative inline-flex items-center gap-4 border border-[#E8D8C1]/40 py-3 px-6 hover:bg-[#E8D8C1] hover:text-[#151713] transition-all duration-500 overflow-hidden text-[#E8D8C1]">
                  <span className="font-sans text-xs font-bold uppercase tracking-widest relative z-10">Read The Manifesto</span>
                  <span className="relative z-10 group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
                </a>
              </div>
            </div>

            {/* Right Column: The Tools */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } }
              }}
              className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              
              {/* Tool Card 1 */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                }}
                className="group relative bg-[#24241F]/40 border border-[#E8D8C1]/10 hover:border-[#E8D8C1]/40 transition-colors p-6 md:p-8 cursor-pointer flex flex-col justify-between h-full min-h-[220px] overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-40 transition-opacity">
                  <span className="font-serif text-6xl font-black italic">1</span>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xl">🏛️</span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#E8D8C1]/50 border border-[#E8D8C1]/20 px-2 py-0.5">Framework</span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#E8D8C1] group-hover:text-white transition-colors mb-3">
                    Political Cards
                  </h3>
                  <p className="font-sans text-sm text-[#E8D8C1]/60 leading-relaxed max-w-[280px]">
                    Interactive tools to draft mock legislation, examine systemic flaws, and strategize structural change.
                  </p>
                </div>

                <div className="relative z-10 mt-8 border-t border-[#E8D8C1]/10 pt-4">
                  <a href="https://linktr.ee/elonakearney" target="_blank" rel="noreferrer" className="flex items-center justify-between group/link cursor-pointer w-full">
                    <span className="font-sans text-xs tracking-widest uppercase text-[#E8D8C1]/50 group-hover:text-[#E8D8C1] transition-colors flex items-center gap-2">
                      Access Toolkit
                      <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="inline-block md:hidden">&rarr;</motion.span>
                    </span>
                    <span className="w-6 h-6 rounded-full border border-[#E8D8C1]/30 flex items-center justify-center text-[#E8D8C1] group-hover/link:bg-[#E8D8C1] group-hover/link:text-[#151713] transition-all">
                      +
                    </span>
                  </a>
                </div>
              </motion.div>

              {/* Tool Card 2 */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                }}
                className="group relative bg-[#24241F]/40 border border-[#E8D8C1]/10 hover:border-[#E8D8C1]/40 transition-colors p-6 md:p-8 cursor-pointer flex flex-col justify-between h-full min-h-[220px] overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-40 transition-opacity">
                  <span className="font-serif text-6xl font-black italic">2</span>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xl">📘</span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#E8D8C1]/50 border border-[#E8D8C1]/20 px-2 py-0.5">Book</span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#E8D8C1] group-hover:text-white transition-colors mb-3">
                    We Are Running for Governor
                  </h3>
                  <p className="font-sans text-sm text-[#E8D8C1]/60 leading-relaxed max-w-[280px]">
                    The defining educational book and activity workbook for aspiring leaders and civic architects.
                  </p>
                </div>

                <div className="relative z-10 mt-8 border-t border-[#E8D8C1]/10 pt-4">
                  <a href="https://linktr.ee/elonakearney" target="_blank" rel="noreferrer" className="flex items-center justify-between group/link cursor-pointer w-full">
                    <span className="font-sans text-xs tracking-widest uppercase text-[#E8D8C1]/50 group-hover:text-[#E8D8C1] transition-colors flex items-center gap-2">
                      View Book
                      <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }} className="inline-block md:hidden">&rarr;</motion.span>
                    </span>
                    <span className="w-6 h-6 rounded-full border border-[#E8D8C1]/30 flex items-center justify-center text-[#E8D8C1] group-hover/link:bg-[#E8D8C1] group-hover/link:text-[#151713] transition-all">
                      +
                    </span>
                  </a>
                </div>
              </motion.div>

              {/* Tool Card 3: CORE Housing */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                }}
                className="group relative bg-[#24241F]/40 border border-[#E8D8C1]/10 hover:border-[#E8D8C1]/40 transition-colors p-6 md:p-8 cursor-pointer flex flex-col justify-between h-full min-h-[220px] overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-40 transition-opacity">
                  <span className="font-serif text-6xl font-black italic">3</span>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xl">🏢</span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#E8D8C1]/50 border border-[#E8D8C1]/20 px-2 py-0.5">Workforce</span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#E8D8C1] group-hover:text-white transition-colors mb-3">
                    Second Chance Workforce Transformation
                  </h3>
                  <p className="font-sans text-sm text-[#E8D8C1]/60 leading-relaxed max-w-[280px]">
                    Helping organizations build inclusive cultures and unlock the talent of returning citizens.
                  </p>
                </div>

                <div className="relative z-10 mt-8 border-t border-[#E8D8C1]/10 pt-4">
                  <a href="https://elonakearney.com" target="_blank" rel="noreferrer" className="flex items-center justify-between group/link cursor-pointer w-full">
                    <span className="font-sans text-xs tracking-widest uppercase text-[#E8D8C1]/50 group-hover:text-[#E8D8C1] transition-colors flex items-center gap-2">
                      Learn More
                      <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }} className="inline-block md:hidden">&rarr;</motion.span>
                    </span>
                    <span className="w-6 h-6 rounded-full border border-[#E8D8C1]/30 flex items-center justify-center text-[#E8D8C1] group-hover/link:bg-[#E8D8C1] group-hover/link:text-[#151713] transition-all">
                      +
                    </span>
                  </a>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
