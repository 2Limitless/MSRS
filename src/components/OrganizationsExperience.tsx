"use client";

import { motion } from "framer-motion";

export default function OrganizationsExperience({ onBack }: { onBack: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex-1 z-20 pointer-events-auto flex flex-col justify-start"
    >
      <div className="min-h-full w-full flex flex-col justify-start items-center pt-8 md:pt-16 pb-48 md:pb-64 px-4 md:px-8">
        
        {/* Main Glass Container */}
        <div className="relative max-w-5xl w-full bg-[#151713]/90 backdrop-blur-3xl p-6 md:p-14 rounded-[2rem] border border-[#B46F6C]/30 shadow-[0_0_50px_rgba(180,111,108,0.15)] overflow-hidden flex flex-col items-center">
          
          {/* Background Typography Watermark */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[80px] md:text-[140px] font-serif font-black text-[#B46F6C]/5 select-none pointer-events-none leading-none tracking-tighter mix-blend-overlay">
            ORGANIZATIONS
          </div>

          <button 
            onClick={onBack}
            className="relative z-10 text-[#E8D8C1]/50 text-xs tracking-[0.3em] uppercase mb-12 hover:text-[#B46F6C] transition-colors flex items-center gap-2 group w-max mx-auto"
          >
            <span className="text-[#B46F6C] group-hover:-translate-x-1 transition-transform">&larr;</span> Return to Hub
          </button>

          <h2 className="relative z-10 text-3xl md:text-5xl font-serif font-light text-[#E8D8C1] mb-6 leading-tight max-w-3xl text-center">
            Experiences people participate in—<br/>
            <span className="text-[#B46F6C] italic tracking-tight">not just sit through.</span>
          </h2>
          
          <p className="relative z-10 text-[#E8D8C1]/70 font-sans text-sm md:text-base font-light leading-relaxed mb-16 max-w-3xl text-center">
            Mindset Reset brings interactive tools, card-based experiences, and practical frameworks into workplaces, universities, community organizations, and workforce programs to strengthen identity, communication, accountability, leadership, and culture.
          </p>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mb-16">
            {[
              { title: "Immersive Experiences", desc: "Interactive, facilitated experiences built around identity, mindset, communication, and intentional growth." },
              { title: "Cultivate Parties", desc: "Card-based group experiences that turn labels, patterns, and strengths into meaningful conversation and action." },
              { title: "Tools for Teams", desc: "Cards, books, workbooks, and resources for leadership development, retreats, classrooms, and ongoing programs." },
              { title: "Second-Chance Workforce", desc: "Practical workforce transformation centered on accountability, readiness, retention, and successful reentry." }
            ].map((card, idx) => (
              <div key={idx} className="bg-[#24241F]/40 border border-[#B46F6C]/10 p-6 md:p-8 rounded-xl hover:border-[#B46F6C]/40 transition-colors">
                <h3 className="font-serif text-2xl text-[#E8D8C1] mb-3">{card.title}</h3>
                <p className="font-sans text-sm text-[#E8D8C1]/60 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="relative z-10 w-full mb-16 py-8 border-y border-[#B46F6C]/10 text-center">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#B46F6C] mb-4">Designed For</h4>
            <p className="font-sans text-sm text-[#E8D8C1]/80 tracking-widest leading-loose">
              Corporations &bull; Universities &bull; Government Agencies &bull; Nonprofits &bull; Workforce Programs &bull; Community Organizations
            </p>
          </div>

          <div className="relative z-10 flex flex-col items-center w-full text-center">
            <h3 className="font-serif text-3xl md:text-4xl text-[#E8D8C1] mb-4">Bring Mindset Reset to Your Organization</h3>
            <p className="font-sans text-sm text-[#E8D8C1]/60 leading-relaxed mb-8 max-w-2xl">
              Whether you need an immersive experience, organizational tools, workforce programming, or a customized engagement, we can help build the right fit.
            </p>
            
            <a 
              href="https://elonakearney.com"
              target="_blank"
              rel="noreferrer"
              className="group relative bg-[#B46F6C] text-[#151713] py-4 px-8 rounded-xl font-bold font-sans uppercase tracking-widest text-xs hover:bg-[#E8D8C1] transition-all shadow-[0_0_20px_rgba(180,111,108,0.2)] hover:shadow-[0_0_30px_rgba(232,216,193,0.4)] flex justify-center items-center gap-4 overflow-hidden mb-6"
            >
              <span className="relative z-10">Explore Organizational Options</span>
              <span className="relative z-10 group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
            </a>

            <p className="text-[#E8D8C1]/50 text-xs font-sans">
              Looking for EL&apos;ona or Kong for speaking or leadership engagements?{" "}
              <a href="https://elonakearney.com" target="_blank" rel="noreferrer" className="text-[#B46F6C] hover:text-[#E8D8C1] transition-colors font-semibold">
                Meet the Creators &rarr;
              </a>
            </p>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
