import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Compass, ShieldCheck } from 'lucide-react';

export const WhyElizabeth: React.FC = () => {
  return (
    <section
      id="why-elizabeth"
      className="py-16 sm:py-24 border-b border-[#e5e5e5] bg-[#fafafa]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Title Column */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <span className="font-tech-mono text-xs uppercase tracking-widest text-neutral-400 block mb-2">
              04 // PHILOSOPHY
            </span>
            <h2
              id="why-elizabeth-heading"
              className="font-ntype text-3xl sm:text-5xl font-bold uppercase tracking-tight text-black leading-tight"
            >
              WHY
              <br />
              ELIZABETH?
            </h2>

            <div className="mt-6 pt-6 border-t border-[#e5e5e5] font-tech-mono text-[11px] text-neutral-500 uppercase tracking-widest space-y-1">
              <div>// HUMAN RETENTION FIRST</div>
              <div>// INDEPENDENT COGNITION</div>
            </div>
          </motion.div>

          {/* Right Content Column: Short, Human, Thoughtful */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="font-apple-body text-xl sm:text-2xl text-black font-normal leading-relaxed">
              When software immediately gives you the answer, your brain doesn&apos;t learn—it
              merely nods along.
            </p>

            <p className="font-apple-body text-neutral-700 text-base sm:text-lg leading-relaxed">
              Elizabeth was created around a simple conviction: true understanding only occurs when
              you struggle to recall something yourself. By stepping back, waiting for your voice,
              and measuring how well you reconstructed the idea, Elizabeth helps you become an
              independent thinker.
            </p>

            <p className="font-apple-body text-neutral-700 text-base sm:text-lg leading-relaxed">
              It is not an answer engine. It is a testing ground for your own memory, built to reveal
              exactly what you have mastered and where your curiosity should go next.
            </p>

            {/* Micro Quote Badge */}
            <div className="pt-6 border-t border-[#e5e5e5] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white border border-[#e5e5e5]">
                <span className="font-tech-mono text-[10px] text-neutral-400 uppercase tracking-wider block mb-1">
                  CORE OUTCOME
                </span>
                <span className="font-ntype text-sm font-bold uppercase text-black">
                  DURABLE KNOWLEDGE
                </span>
                <p className="font-apple-body text-xs text-neutral-600 mt-1">
                  Knowledge that stays in your head when the screen is turned off.
                </p>
              </div>

              <div className="p-4 bg-white border border-[#e5e5e5]">
                <span className="font-tech-mono text-[10px] text-neutral-400 uppercase tracking-wider block mb-1">
                  STUDY DYNAMIC
                </span>
                <span className="font-ntype text-sm font-bold uppercase text-black">
                  HONEST SELF-TESTING
                </span>
                <p className="font-apple-body text-xs text-neutral-600 mt-1">
                  No false confidence. Clear, actionable signals on what to rehearse.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
