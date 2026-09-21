import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, Mic, Brain, Sparkles, Compass } from 'lucide-react';

export const WhatIsElizabeth: React.FC = () => {
  return (
    <section
      id="what-is-elizabeth"
      className="py-16 sm:py-24 border-b border-[#e5e5e5] bg-[#fafafa]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-[#e5e5e5]">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col justify-between"
          >
            <div>
              <span className="font-tech-mono text-xs uppercase tracking-widest text-neutral-400 block mb-2">
                01 // DEFINITION
              </span>
              <h2
                id="what-is-elizabeth-heading"
                className="font-ntype text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-black leading-tight"
              >
                WHAT IS
                <br />
                ELIZABETH?
              </h2>
            </div>

            <div className="mt-6 pt-6 border-t border-[#e5e5e5] font-tech-mono text-[11px] text-neutral-500 uppercase tracking-wider space-y-1">
              <div>PRINCIPLE: ACTIVE RETRIEVAL</div>
              <div>MODALITY: VOCAL RECONSTRUCTION</div>
              <div>VERIFICATION: SEMANTIC PARITY</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 flex flex-col justify-center space-y-6"
          >
            <p className="font-apple-body text-xl sm:text-2xl text-black font-medium leading-snug">
              Elizabeth is built around active recall rather than simply showing students answers.
            </p>

            <p className="font-apple-body text-neutral-700 text-base sm:text-lg leading-relaxed">
              The student provides their study context, remembers it independently, speaks their
              answer, and Elizabeth evaluates how closely their response matches the provided context.
            </p>

            <div className="p-4 sm:p-5 bg-white border border-[#e5e5e5] flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-9 h-9 flex-shrink-0 bg-black text-white flex items-center justify-center">
                <Brain className="w-5 h-5" />
              </div>
              <div className="font-apple-body text-sm sm:text-[15px] text-neutral-700 leading-normal">
                <strong className="text-black font-semibold">No passive consumption.</strong> Most
                study tools reveal solutions when you stumble. Elizabeth gives you the mental
                friction necessary to consolidate long-term memories.
              </div>
            </div>
          </motion.div>
        </div>

        {/* Deep Contrast Grid: Passive vs Active Retrieval */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Passive Studying */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-[#e5e5e5] p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#e5e5e5]">
                <span className="font-tech-mono text-xs uppercase tracking-widest text-neutral-400">
                  TRADITIONAL / PASSIVE
                </span>
                <span className="font-tech-mono text-[10px] uppercase text-neutral-400">
                  INEFFICIENT
                </span>
              </div>

              <h3 className="font-ntype text-xl sm:text-2xl font-bold uppercase tracking-tight text-black mt-4">
                THE ILLUSION OF MASTERY
              </h3>

              <ul className="mt-5 space-y-3 font-apple-body text-sm sm:text-base text-neutral-600">
                <li className="flex items-start gap-2.5">
                  <span className="font-tech-mono text-xs text-neutral-400 pt-0.5">—</span>
                  <span>Re-reading textbook chapters repeatedly creates familiarity, not recall.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-tech-mono text-xs text-neutral-400 pt-0.5">—</span>
                  <span>Flipping flashcards prematurely deprives the brain of retrieval effort.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-tech-mono text-xs text-neutral-400 pt-0.5">—</span>
                  <span>Looking up solutions hides blind spots until actual exam time.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-100 font-tech-mono text-[11px] text-neutral-400 uppercase">
              RESULT: HIGH TIME SPENT / LOW RETENTION
            </div>
          </motion.div>

          {/* Active Recall with Elizabeth */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-black p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#e5e5e5]">
                <span className="font-tech-mono text-xs uppercase tracking-widest text-black font-semibold">
                  ELIZABETH PROTOCOL
                </span>
                <span className="font-tech-mono text-[10px] uppercase bg-black text-white px-2 py-0.5 font-medium">
                  ACTIVE RECALL
                </span>
              </div>

              <h3 className="font-ntype text-xl sm:text-2xl font-bold uppercase tracking-tight text-black mt-4">
                INDEPENDENT RETRIEVAL
              </h3>

              <ul className="mt-5 space-y-3 font-apple-body text-sm sm:text-base text-neutral-800">
                <li className="flex items-start gap-2.5">
                  <span className="font-tech-mono text-xs text-black font-bold pt-0.5">+</span>
                  <span>Student commits material to memory, then deliberately blanks the notes.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-tech-mono text-xs text-black font-bold pt-0.5">+</span>
                  <span>Verbalizes the concept using voice to verify true structural understanding.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-tech-mono text-xs text-black font-bold pt-0.5">+</span>
                  <span>Elizabeth objectively checks semantic fidelity and marks exact knowledge gaps.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-100 font-tech-mono text-[11px] text-black font-semibold uppercase">
              RESULT: HIGH COGNITIVE DURABILITY / FAST REINFORCEMENT
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
