"use client";

import { motion } from "framer-motion";

export default function CharacterExperience({ onBack }: { onBack: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex-1 z-20 pointer-events-auto flex flex-col justify-start"
    >
      <div className="min-h-full w-full flex flex-col justify-start items-center pt-8 md:pt-16 pb-48 md:pb-64 px-4 md:px-8">
        
        {/* Main Glass Container */}
        <div className="relative max-w-5xl w-full bg-[#151713]/90 backdrop-blur-3xl p-6 md:p-14 rounded-[2rem] border border-[#B46F6C]/30 shadow-[0_0_50px_rgba(180,111,108,0.15)] overflow-hidden flex flex-col md:flex-row gap-16 items-center">
          
          {/* Background Typography Watermark */}
          <div className="absolute top-10 left-0 text-[100px] md:text-[180px] font-serif font-black text-[#B46F6C]/5 select-none pointer-events-none leading-none tracking-tighter mix-blend-overlay">
            IDENTITY
          </div>

          {/* Left Column: The Narrative */}
          <div className="flex-1 relative z-10 flex flex-col w-full">
            <button 
              onClick={onBack}
              className="text-[#E8D8C1]/50 text-xs tracking-[0.3em] uppercase mb-12 hover:text-[#B46F6C] transition-colors flex items-center gap-2 group w-max"
            >
              <span className="text-[#B46F6C] group-hover:-translate-x-1 transition-transform">&larr;</span> Return to Hub
            </button>

            <h2 className="text-4xl md:text-6xl font-serif font-light text-[#E8D8C1] mb-6 leading-tight">
              What have you <br/> been <span className="text-[#B46F6C] italic tracking-tight relative">called?
                <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-[#B46F6C] to-transparent" />
              </span>
            </h2>
            
            <p className="text-[#E8D8C1]/70 font-sans text-sm md:text-base font-light leading-relaxed mb-10 max-w-md">
              You are not what they called you. Shed the labels placed upon you and intentionally build who you are becoming through EL’ona’s immersive identity experiences and the Cultivated Characteristic System. These interactive, card-based experiences are designed to help individuals, teams, and communities define identity, uncover hidden strengths, and cultivate more intentional ways of thinking, responding, and becoming.
            </p>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.2 }
                }
              }}
              className="space-y-6 font-mono text-xs uppercase tracking-widest text-[#B46F6C]"
            >
              {[
                { num: "01", text: "Cultivated Characteristic Cards" },
                { num: "02", text: "Scenario Expansion Deck" },
                { num: "03", text: "AlphaBET on U Workbook" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
                  }}
                  className="flex items-center gap-6 border-b border-[#E8D8C1]/10 pb-4 hover:pl-4 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#B46F6C]/0 via-[#B46F6C]/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                  <span className="text-[#E8D8C1]/20 group-hover:text-[#B46F6C] transition-colors text-lg relative z-10">{item.num}</span> 
                  <span className="text-[#E8D8C1] group-hover:text-white transition-colors font-sans font-normal relative z-10 flex-1">{item.text}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#B46F6C] relative z-10">&rarr;</span>
                </motion.div>
              ))}
            </motion.div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-12 w-full">
              <motion.a 
                href="https://linktr.ee/elonakearney"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex-1 bg-[#B46F6C] text-[#151713] py-5 rounded-xl font-bold font-sans uppercase tracking-widest text-xs md:text-sm hover:bg-[#E8D8C1] transition-all shadow-[0_0_20px_rgba(180,111,108,0.2)] hover:shadow-[0_0_30px_rgba(232,216,193,0.4)] flex justify-center items-center gap-4 overflow-hidden animate-[pulse_4s_ease-in-out_infinite] md:animate-none"
              >
                <span className="relative z-10">Explore The System</span>
                <span className="relative z-10 group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              </motion.a>

              <motion.a 
                href="https://elonakearney.com"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex-1 bg-transparent border border-[#B46F6C]/30 text-[#E8D8C1] py-5 rounded-xl font-bold font-sans uppercase tracking-widest text-xs md:text-sm hover:border-[#B46F6C] hover:bg-[#B46F6C]/5 transition-all flex justify-center items-center gap-4 overflow-hidden"
              >
                <span className="relative z-10 text-center">Host a Cultivate Party</span>
              </motion.a>
            </div>
          </div>

          {/* Right Column: The Interactive Card Box */}
          <div className="flex-1 relative w-full h-[450px] md:h-[500px] flex items-center justify-center group mt-20 md:mt-0 perspective-1000">
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-48 md:w-64 h-72 md:h-96 transition-all duration-700 transform-style-preserve-3d md:group-hover:rotate-x-[10deg] md:group-hover:rotate-y-[-10deg] cursor-pointer"
            >
              
              {/* Back of the Tuck Box (Deep Inside) */}
              <div className="absolute inset-0 bg-[#050505] rounded-xl border border-[#B46F6C]/10 shadow-[inset_0_20px_40px_rgba(0,0,0,0.8)] z-0" />

              {/* DESKTOP CARDS (Hover to fan out) */}
              <div className="hidden md:block">
                <div className="absolute inset-x-2 top-2 bottom-2 rounded-lg overflow-hidden transition-all duration-700 z-10 origin-bottom border border-black shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:-translate-y-36 group-hover:rotate-[-12deg] group-hover:-translate-x-16">
                  <img src="/cards/card-back.png" alt="Card Back" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-x-2 top-2 bottom-2 rounded-lg overflow-hidden transition-all duration-700 z-20 origin-bottom border border-black shadow-[0_20px_50px_rgba(0,0,0,0.6)] group-hover:-translate-y-48 group-hover:rotate-[15deg] group-hover:translate-x-12">
                  <img src="/cards/card-front.png" alt="Card Front" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* MOBILE CARDS (Scroll to fan out) */}
              <div className="block md:hidden">
                <motion.div 
                  initial={{ y: 0, rotate: 0, x: 0 }}
                  whileInView={{ y: -80, rotate: -12, x: -40 }}
                  transition={{ type: "spring", bounce: 0.4, duration: 1.5, delay: 0.2 }}
                  viewport={{ once: false, margin: "-100px" }}
                  className="absolute inset-x-2 top-2 bottom-2 rounded-lg overflow-hidden z-10 origin-bottom border border-black shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                >
                  <img src="/cards/card-back.png" alt="Card Back" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div 
                  initial={{ y: 0, rotate: 0, x: 0 }}
                  whileInView={{ y: -112, rotate: 15, x: 40 }}
                  transition={{ type: "spring", bounce: 0.4, duration: 1.5, delay: 0.3 }}
                  viewport={{ once: false, margin: "-100px" }}
                  className="absolute inset-x-2 top-2 bottom-2 rounded-lg overflow-hidden z-20 origin-bottom border border-black shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                >
                  <img src="/cards/card-front.png" alt="Card Front" className="w-full h-full object-cover" />
                </motion.div>
              </div>

              {/* Front of the Tuck Box (Packaging) */}
              <div className="absolute inset-0 rounded-xl border border-black/40 shadow-[0_30px_60px_rgba(0,0,0,0.9)] z-30 overflow-hidden pointer-events-none">
                
                {/* Generated Box Art */}
                <img src="/cards/box-front.png" alt="Custom Box Art" className="absolute inset-0 w-full h-full object-cover" />
                
                {/* 3D Lighting / Plastic Wrap Sheen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 mix-blend-overlay" />
                
                {/* Inner shadow to make the edges feel thick */}
                <div className="absolute inset-0 shadow-[inset_0_0_15px_rgba(0,0,0,0.5)]" />

              </div>

              {/* Left Spine of the Box (to give 3D depth) */}
              <div className="absolute top-0 bottom-0 left-0 w-4 bg-[#0a0a0a] rounded-l-xl border-y-2 border-l-2 border-[#B46F6C]/30 origin-right transition-transform duration-700 transform -translate-x-full rotate-y-90 shadow-2xl z-20 hidden md:block" style={{ transform: 'translateX(-100%) rotateY(-90deg)' }} />

            </motion.div>
          </div>
          
        </div>
      </div>
    </motion.div>
  );
}
