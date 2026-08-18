"use client";

import { motion } from "framer-motion";

export default function FrequencyExperience({ onBack }: { onBack: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex-1 z-20 pointer-events-auto flex flex-col justify-start"
    >
      <div className="min-h-full w-full flex flex-col justify-start items-center pt-4 md:pt-6 pb-48 md:pb-64 px-4 md:px-8">
        
        {/* Main Glass Container - Simplified for a cleaner look */}
        <div className="relative max-w-4xl w-full bg-[#151713]/95 backdrop-blur-3xl p-8 md:p-16 rounded-3xl border border-[#7E8768]/10 shadow-2xl overflow-hidden text-center">
        
        {/* Clean Zen Ripple Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center opacity-50">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute w-64 md:w-96 aspect-square rounded-full border border-[#7E8768]"
              animate={{ 
                scale: [0, 4],
                opacity: [0.15, 0]
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity, 
                ease: "linear",
                delay: i * 3.3
              }}
            />
          ))}
        </div>

        <button 
          onClick={onBack}
          className="relative z-10 text-[#E8D8C1]/40 text-[10px] tracking-[0.3em] uppercase mb-12 hover:text-[#7E8768] transition-colors inline-flex items-center gap-3 group mx-auto"
        >
          <span className="text-[#7E8768] group-hover:-translate-x-1 transition-transform">&larr;</span> Return to Hub
        </button>

        <h2 className="relative z-10 text-3xl md:text-5xl font-serif font-light text-[#E8D8C1] mb-6 leading-tight max-w-lg mx-auto">
          What are you <span className="text-[#7E8768] italic tracking-tight">picking up?</span>
        </h2>
        
        <p className="relative z-10 text-[#E8D8C1]/50 font-sans text-xs md:text-sm font-light leading-relaxed mb-16 max-w-xl mx-auto">
          Tune into the signals you&apos;ve been overlooking. Discover how the people, messages, environments, and patterns around you can influence the way you think, feel, and respond. <span className="font-semibold text-[#E8D8C1]/80">Learn to audit your mental diet, protect your peace, and become intentional about what you carry into every room.</span>
        </p>

        {/* Clean Editorial Product Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mb-16 text-left"
        >
          {[
            { title: "You Are Not Random", type: "Book", desc: "The foundational text on assessing your environment and beliefs.", price: "$27.00", icon: "📖", action: "View Details", link: "https://linktr.ee/elonakearney" },
            { title: "Frequency Finder", type: "App", desc: "A tool to use along with You Are Not Random Workbook to tune in to what to address in life.", price: "Free", icon: "📱", action: "Access Tool", link: "https://mindsetfrequencymatcher.com", image: "/frequency-matcher.png" },
            { title: "Cultivated Cards", type: "Cards", desc: "Cultivated Cards help you look beneath negative labels to uncover the hidden strengths within them and intentionally cultivate those traits into growth, confidence, and purpose.", price: "$34.99", icon: "🎴", action: "View Details", link: "https://linktr.ee/elonakearney" },
            { title: "You Are Not Random Workbook", type: "Workbook", desc: "The companion workbook for You Are Not Random.", price: "$19.99", icon: "📓", action: "View Details", link: "https://linktr.ee/elonakearney" }
          ].map((item, idx) => (
            <motion.a 
              href={item.link}
              target={item.link !== "#" ? "_blank" : undefined}
              rel={item.link !== "#" ? "noreferrer" : undefined}
              key={idx} 
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
              }}
              className="group relative flex flex-col justify-between p-6 md:p-8 bg-transparent border-t border-[#7E8768]/10 hover:border-[#7E8768]/40 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Subtle background shift on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#7E8768]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="w-12 h-auto object-contain rounded opacity-70 group-hover:opacity-100 transition-all shadow-sm" />
                  ) : (
                    <span className="text-xl opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all">{item.icon}</span>
                  )}
                  <span className="font-mono text-[9px] tracking-widest uppercase text-[#7E8768]/50">
                    {item.type}
                  </span>
                </div>
                
                <div className="flex-grow">
                  <h4 className="font-serif text-base text-[#E8D8C1]/90 group-hover:text-white transition-colors mb-3">
                    {item.title}
                  </h4>
                  <p className="font-sans text-[11px] text-[#E8D8C1]/40 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>
                
                <div className="flex justify-between items-center mt-auto">
                  <span className="font-mono text-[10px] text-[#E8D8C1]/60">{item.price}</span>
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#7E8768] group-hover:text-[#E8D8C1] transition-colors flex items-center gap-2">
                    {item.action}
                    <span className="hidden md:inline-block group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
        
        <a href="https://linktr.ee/elonakearney" target="_blank" rel="noreferrer" className="relative z-10 inline-flex items-center gap-4 text-[#7E8768] hover:text-[#E8D8C1] transition-colors font-mono text-xs uppercase tracking-widest group border-b border-[#7E8768]/30 hover:border-[#E8D8C1]/50 pb-2">
          <span>View EL&apos;ona&apos;s Full Catalog</span>
          <span className="group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
        </a>

      </div>
      </div>
    </motion.div>
  );
}
