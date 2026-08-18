"use client";

import { motion } from "framer-motion";

export default function StoryExperience({ onBack }: { onBack: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex-1 z-20 pointer-events-auto flex flex-col justify-start"
    >
      <div className="min-h-full w-full flex flex-col justify-start items-center pt-20 md:pt-28 pb-48 md:pb-64 px-4 md:px-8">
        
        {/* Main Glass Container */}
        <div className="relative max-w-5xl w-full bg-[#151713]/90 backdrop-blur-3xl p-6 md:p-14 rounded-[2rem] border border-[#B46F6C]/30 shadow-[0_0_50px_rgba(180,111,108,0.15)] overflow-hidden flex flex-col md:flex-row gap-12">
          
          {/* Background Typography Watermark */}
          <div className="absolute -bottom-4 md:-bottom-10 -left-2 md:-left-10 text-[90px] sm:text-[120px] md:text-[200px] font-serif font-black text-[#B46F6C]/5 select-none pointer-events-none leading-none tracking-tighter">
            STORY
          </div>

          {/* Left Column: The Narrative */}
          <div className="flex-1 relative z-10 flex flex-col">
            <button 
              onClick={onBack}
              className="text-[#E8D8C1]/50 text-xs tracking-[0.3em] uppercase mb-10 hover:text-[#B46F6C] transition-colors flex items-center gap-2 group w-max"
            >
              <span className="text-[#B46F6C] group-hover:-translate-x-1 transition-transform">&larr;</span> Return to Hub
            </button>

            <h2 className="text-4xl md:text-6xl font-serif font-light text-[#E8D8C1] mb-6 leading-tight">
              What have you <br/> <span className="text-[#B46F6C] italic tracking-tight">survived?</span>
            </h2>
            
            <p className="text-[#E8D8C1]/70 font-sans text-sm md:text-base font-light leading-relaxed mb-8 max-w-md">
              Every chapter of your life is a lesson. Pull the book off the shelf, learn from what you&apos;ve become, and rewrite your next chapter without the confines of your past.
            </p>

            <div className="flex flex-col gap-4 mt-auto">
              <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#B46F6C]/80 mb-2">Signature Services</h4>
              
              <a href="https://elonakearney.com" target="_blank" rel="noreferrer" className="group relative overflow-hidden flex items-center justify-between p-5 bg-[#24241F]/60 rounded-xl border border-[#B46F6C]/20 hover:border-[#B46F6C]/60 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-[#B46F6C]/0 via-[#B46F6C]/5 to-[#B46F6C]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <div className="flex items-center gap-4">
                  <span className="text-2xl grayscale group-hover:grayscale-0 transition-all opacity-80">🎤</span>
                  <div className="text-left">
                    <span className="block font-serif text-lg text-[#E8D8C1] group-hover:text-white transition-colors">Keynotes &amp; Speaking</span>
                    <span className="block font-sans text-xs text-[#E8D8C1]/40 mt-1">Book EL&apos;ona for your next event</span>
                  </div>
                </div>
                <span className="text-[#B46F6C] group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
              </a>

              <a href="https://elonakearney.com" target="_blank" rel="noreferrer" className="group relative overflow-hidden flex items-center justify-between p-5 bg-[#24241F]/60 rounded-xl border border-[#B46F6C]/20 hover:border-[#B46F6C]/60 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-[#B46F6C]/0 via-[#B46F6C]/5 to-[#B46F6C]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <div className="flex items-center gap-4">
                  <span className="text-2xl grayscale group-hover:grayscale-0 transition-all opacity-80">🤝</span>
                  <div className="text-left">
                    <span className="block font-serif text-lg text-[#E8D8C1] group-hover:text-white transition-colors">Workshops &amp; Consulting</span>
                    <span className="block font-sans text-xs text-[#E8D8C1]/40 mt-1">Corporate and nonprofit training</span>
                  </div>
                </div>
                <span className="text-[#B46F6C] group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Right Column: The Creator */}
          <div className="flex-1 relative z-10 border-t md:border-t-0 md:border-l border-[#B46F6C]/10 pt-10 md:pt-0 md:pl-12 flex flex-col justify-center">
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 text-center sm:text-left">
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border border-[#B46F6C]/40 shadow-[0_0_30px_rgba(180,111,108,0.3)] group">
                <img 
                  src="/logo.png" 
                  alt="Mindset Reset Logo" 
                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700 bg-black/40" 
                />
                <div className="absolute inset-0 border-[4px] border-transparent group-hover:border-[#B46F6C]/20 rounded-full transition-colors duration-500" />
              </div>
              
              <div className="pt-2">
                <h3 className="font-serif text-3xl md:text-4xl text-[#E8D8C1] mb-2">Mindset Reset</h3>
                <p className="text-[#E8D8C1]/50 font-sans text-xs uppercase tracking-widest">The Brand Story</p>
              </div>
            </div>
            
            <div className="relative mb-10">
              <span className="absolute -top-4 -left-2 text-4xl text-[#B46F6C]/20 font-serif">"</span>
              <p className="text-[#E8D8C1]/80 font-serif text-lg md:text-xl font-normal leading-relaxed pl-4 border-l-2 border-[#B46F6C]/30">
                Forgiveness with boundaries.
              </p>
            </div>

            <div className="text-[#E8D8C1]/60 font-sans text-sm leading-relaxed mb-8 space-y-4">
              <p className="text-[#E8D8C1]/80">Built From Real Life. Designed for Real Change.</p>
              <p>
                Mindset Reset was born from a simple belief: your past, your circumstances, and the labels placed on you do not have to determine what comes next.
              </p>
              <p>
                Our books, Cultivated Characteristic Cards, interactive experiences, and second-chance housing were created from lived experience—not theory. Each tool is designed to help people recognize patterns, uncover strengths that may have been hidden beneath negative labels, and make more intentional choices about who they are becoming.
              </p>
              <p>
                For organizations, that means stronger communication, accountability, leadership, culture, and second-chance success. For the individual who feels stuck, overlooked, or counted out, it means something just as important:
              </p>
              <p className="font-normal text-[#E8D8C1]/80">
                There is still something to build from.
              </p>
              <p>
                Mindset Reset creates practical tools and immersive experiences that help people and organizations move beyond labels and cultivate what comes next.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <a href="https://elonakearney.com" target="_blank" rel="noreferrer" className="group flex-1 text-center bg-[#B46F6C] border border-[#B46F6C]/30 text-[#151713] py-4 rounded-xl font-bold font-sans uppercase tracking-widest text-[10px] md:text-xs hover:border-[#E8D8C1] hover:bg-[#E8D8C1] transition-all">
                Meet the Creator
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </motion.div>
  );
}
