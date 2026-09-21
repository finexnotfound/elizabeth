import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Cpu, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <section
      id="overview"
      className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-[#e5e5e5] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Technical Badges & Grid Markers */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-between gap-3 pb-8 border-b border-[#e5e5e5]"
        >
          <div className="flex items-center gap-3">
            <span
              id="hero-technical-label"
              className="inline-block font-tech-mono text-xs sm:text-sm uppercase tracking-widest text-black font-medium border border-black px-2.5 py-1 bg-white"
            >
              ABOUT / ELIZABETH
            </span>
            <span className="font-tech-mono text-[11px] uppercase tracking-wider text-neutral-400 hidden sm:inline-block">
              // SPECIFICATION & ARCHITECTURE
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-tech-mono text-neutral-500">
            <span className="flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-black" />
              <span>COGNITIVE RETRIEVAL ENGINE</span>
            </span>
            <span className="text-neutral-300">|</span>
            <span className="font-semibold text-neutral-800">REF: ELZ-2026</span>
          </div>
        </motion.div>

        {/* Huge Heading: LEARN FROM PAST. */}
        <div className="pt-10 sm:pt-14 pb-8 sm:pb-12">
          <motion.h1
            id="hero-main-title"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-ntype text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-bold tracking-tighter uppercase text-black leading-[0.92]"
          >
            LEARN FROM
            <br />
            PAST.
          </motion.h1>

          {/* Statement Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 sm:mt-12 max-w-3xl"
          >
            <p
              id="hero-statement-text"
              className="font-apple-body text-lg sm:text-2xl text-neutral-800 font-normal leading-relaxed"
            >
              Elizabeth is a study helper designed to help students test their own memory,
              practice subjects, and understand where they need improvement.
            </p>
          </motion.div>
        </div>

        {/* Technical Design Matrix: SYSTEM SLOGAN & PIPELINE */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="pt-8 border-t border-[#e5e5e5] grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
        >
          <div className="md:col-span-5 flex flex-col gap-1">
            <span className="font-tech-mono text-[10px] tracking-widest text-neutral-400 uppercase">
              PLATFORM DESIGNATION
            </span>
            <span
              id="technical-system-label"
              className="font-ntype text-base sm:text-lg font-bold uppercase tracking-tight text-black"
            >
              ELIZABETH / STUDY SYSTEM
            </span>
          </div>

          <div className="md:col-span-7 flex flex-wrap items-center justify-start md:justify-end gap-2 sm:gap-3">
            <span className="font-tech-mono text-[10px] tracking-widest text-neutral-400 uppercase w-full md:w-auto md:mr-2">
              CORE COGNITIVE LOOP:
            </span>
            <div
              id="core-loop-indicator"
              className="inline-flex items-center flex-wrap gap-1.5 sm:gap-2 font-tech-mono text-[11px] sm:text-xs tracking-wider uppercase bg-white border border-[#e5e5e5] px-3 py-1.5 text-neutral-900"
            >
              <span className="font-semibold text-black">MEMORY</span>
              <span className="text-neutral-400">→</span>
              <span className="font-semibold text-black">RECALL</span>
              <span className="text-neutral-400">→</span>
              <span className="font-semibold text-black">CHECK</span>
              <span className="text-neutral-400">→</span>
              <span className="font-semibold text-black">IMPROVE</span>
            </div>
          </div>
        </motion.div>

        {/* Subtle Quick Scroll Hint */}
        <div className="mt-12 flex items-center justify-between text-neutral-400 font-tech-mono text-[10px] uppercase tracking-widest pt-6 border-t border-neutral-100">
          <span>COGNITIVE RETENTION PROTOCOL</span>
          <button
            type="button"
            onClick={onExploreClick}
            className="flex items-center gap-1.5 text-neutral-700 hover:text-black transition-colors cursor-pointer"
          >
            <span>SCROLL TO SYSTEM DETAILS</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
