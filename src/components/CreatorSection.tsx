import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Terminal, Github } from 'lucide-react';

export const CreatorSection: React.FC = () => {
  return (
    <section
      id="creator"
      className="py-16 sm:py-24 border-b border-[#e5e5e5] bg-[#fafafa]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12 border-b border-[#e5e5e5]">
          {/* Left Column: Heading & Label */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <span className="font-tech-mono text-xs uppercase tracking-widest text-neutral-400 block mb-2">
              05 // AUTHORSHIP &amp; CREDITS
            </span>
            <h2
              id="built-by-finex-heading"
              className="font-ntype text-3xl sm:text-5xl font-bold uppercase tracking-tight text-black leading-tight"
            >
              BUILT BY
              <br />
              FINEX
            </h2>
            <div className="mt-4 font-apple-body text-lg text-neutral-700">
              Designed and built by Finex.
            </div>
          </motion.div>

          {/* Right Column: Clean GitHub Link with Subtle Hover Animation */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col sm:items-end justify-center"
          >
            <a
              id="creator-github-link"
              href="https://github.com/finexnotfound"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-white border border-[#e5e5e5] hover:border-black p-4 sm:p-5 transition-all duration-200 active:scale-[0.99]"
            >
              <div className="w-8 h-8 bg-black text-white flex items-center justify-center">
                <Github className="w-4 h-4" />
              </div>

              <div className="flex flex-col text-left">
                <span className="font-tech-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                  SOURCE &amp; COLLABORATION
                </span>
                <span className="font-tech-mono text-sm sm:text-base font-semibold text-black tracking-wide">
                  github.com/finexnotfound
                </span>
              </div>

              <div className="ml-2 pl-3 border-l border-neutral-200 text-neutral-400 group-hover:text-black transition-colors">
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>

            <div className="mt-3 font-tech-mono text-[11px] text-neutral-400 uppercase tracking-wider">
              OPEN SOURCE STUDY ARTIFACT // REPO ARCHIVE
            </div>
          </motion.div>
        </div>

        {/* Subtle Specs Matrix below */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-[11px] font-tech-mono text-neutral-500 uppercase">
          <div>
            <span className="text-neutral-400 block mb-1">CRAFTED BY</span>
            <span className="text-black font-semibold">FINEX</span>
          </div>
          <div>
            <span className="text-neutral-400 block mb-1">SYSTEM EDITION</span>
            <span className="text-black font-semibold">ELIZABETH V1.4</span>
          </div>
          <div>
            <span className="text-neutral-400 block mb-1">DESIGN PHILOSOPHY</span>
            <span className="text-black font-semibold">MINIMAL INDUSTRIAL TECH</span>
          </div>
          <div>
            <span className="text-neutral-400 block mb-1">FOCUS</span>
            <span className="text-black font-semibold">COGNITIVE RETRIEVAL</span>
          </div>
        </div>
      </div>
    </section>
  );
};
