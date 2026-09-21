import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="bg-white border-t border-[#e5e5e5] py-14 sm:py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-12 border-b border-[#e5e5e5]">
          {/* Brand & Slogan */}
          <div className="md:col-span-6 space-y-2">
            <h3
              id="footer-brand"
              className="font-ntype text-2xl sm:text-3xl font-bold uppercase tracking-tight text-black"
            >
              ELIZABETH
            </h3>
            <p
              id="footer-slogan"
              className="font-tech-mono text-xs sm:text-sm uppercase tracking-widest text-neutral-600 font-medium"
            >
              A STUDY HELPER FOR ACTIVE RECALL.
            </p>
          </div>

          {/* Center Links & Made By */}
          <div className="md:col-span-4 flex flex-col justify-between space-y-4">
            <div>
              <span className="font-tech-mono text-[10px] text-neutral-400 uppercase tracking-widest block mb-1">
                CREDITS
              </span>
              <p
                id="footer-made-by"
                className="font-tech-mono text-xs sm:text-sm uppercase tracking-wider text-black font-semibold"
              >
                MADE BY FINEX
              </p>
            </div>
            <div className="font-tech-mono text-[11px] text-neutral-500 uppercase tracking-wide">
              NO COOKIES // NO TRACKERS // NO DISTRACTION
            </div>
          </div>

          {/* Right: Scroll to top */}
          <div className="md:col-span-2 flex md:justify-end items-start">
            <button
              id="footer-back-to-top"
              type="button"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 border border-[#e5e5e5] hover:border-black bg-[#fafafa] hover:bg-white px-3 py-2 text-[11px] font-tech-mono uppercase tracking-wider text-neutral-700 hover:text-black transition-all cursor-pointer"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Minimal Legal / Metadata line */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-tech-mono text-[11px] text-neutral-400 uppercase tracking-wider">
          <div className="flex items-center gap-3">
            <span>ELIZABETH STUDY SYSTEM</span>
            <span>&bull;</span>
            <span>2026 ARCHITECTURE</span>
          </div>
          <div>
            <span>INSPIRED BY INDUSTRIAL-TECH MINIMALISM</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
