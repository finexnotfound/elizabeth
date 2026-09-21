import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mic, FileText, Brain, CheckSquare, TrendingUp, Sparkles, ChevronRight } from 'lucide-react';
import { StepItem } from '../types';

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: (StepItem & { icon: React.ReactNode; previewDetail: string })[] = [
    {
      number: '01',
      title: 'ENTER CONTEXT',
      description: 'The student provides the material they want to remember.',
      detail: 'Paste lecture notes, study excerpts, textbook passages, or key conceptual summaries.',
      technicalKey: 'INPUT_STREAM // RAW_CONTEXT',
      icon: <FileText className="w-4 h-4" />,
      previewDetail: 'User provides: "Mitosis comprises 4 primary phases: Prophase (chromatin condenses), Metaphase (chromosomes align on equator), Anaphase (sister chromatids separate), and Telophase (nuclear envelope re-forms). Cytokinesis finalizes cellular cleavage."'
    },
    {
      number: '02',
      title: 'REMEMBER',
      description: 'Elizabeth gives the student space to recall the information without showing the answer.',
      detail: 'The context is hidden. The student pauses, organizes their thoughts, and initiates mental retrieval.',
      technicalKey: 'COGNITIVE_GAP // NO_PEEKING',
      icon: <Brain className="w-4 h-4" />,
      previewDetail: 'Display cleared. Zero hints or flashcard prompts. The student engages pure unassisted cognitive retrieval.'
    },
    {
      number: '03',
      title: 'SPEAK',
      description: 'The student explains what they remember using their voice.',
      detail: 'Verbalizing forces structured articulation—demonstrating whether the concept is truly understood.',
      technicalKey: 'AUDIO_INPUT // SPEECH_TRANSCRIBE',
      icon: <Mic className="w-4 h-4" />,
      previewDetail: 'Student speaks: "Mitosis has four phases: Prophase where chromatin condenses, Metaphase where chromosomes line up in the middle, Anaphase where chromatids get pulled apart, and Telophase where the nuclei form again."'
    },
    {
      number: '04',
      title: 'CHECK',
      description: 'Elizabeth compares the spoken response with the original context.',
      detail: 'Algorithmic semantic comparison determines which core facts were remembered and what was omitted.',
      technicalKey: 'EVAL_ENGINE // SEMANTIC_ALIGN',
      icon: <CheckSquare className="w-4 h-4" />,
      previewDetail: 'Semantic Match: 92%. Verified items: Prophase, Metaphase, Anaphase, Telophase. Minor gap flagged: Omission of "Cytokinesis" (the final cleavage stage).'
    },
    {
      number: '05',
      title: 'IMPROVE',
      description: 'Elizabeth provides feedback and identifies what needs more practice.',
      detail: 'Targeted reinforcement highlights specific weak points so the student knows exactly where to refocus.',
      technicalKey: 'ADAPTIVE_FEEDBACK // GAP_ANALYSIS',
      icon: <TrendingUp className="w-4 h-4" />,
      previewDetail: 'Recommended Focus: Review difference between Telophase and Cytokinesis. Re-test scheduled in 10 minutes for optimal spaced repetition.'
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-16 sm:py-24 border-b border-[#e5e5e5] bg-[#fafafa]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#e5e5e5]">
          <div>
            <span className="font-tech-mono text-xs uppercase tracking-widest text-neutral-400 block mb-2">
              02 // SEQUENTIAL PROTOCOL
            </span>
            <h2
              id="how-it-works-heading"
              className="font-ntype text-3xl sm:text-5xl font-bold uppercase tracking-tight text-black"
            >
              HOW IT WORKS
            </h2>
          </div>

          <div className="font-tech-mono text-[11px] text-neutral-500 uppercase tracking-widest">
            5 STEPS // SYSTEM FLOW
          </div>
        </div>

        {/* Minimal Numbered Sequence Grid */}
        <div className="mt-8 grid grid-cols-1 divide-y divide-[#e5e5e5] border-y border-[#e5e5e5] bg-white">
          {steps.map((step, index) => {
            const isSelected = activeStep === index;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActiveStep(index)}
                className={`p-6 sm:p-8 transition-colors cursor-pointer group ${
                  isSelected ? 'bg-neutral-50/80' : 'hover:bg-neutral-50/40'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Step Number & Tech ID */}
                  <div className="lg:col-span-3 flex items-baseline gap-4">
                    <span className="font-ntype text-3xl sm:text-4xl font-bold text-black group-hover:translate-x-0.5 transition-transform">
                      {step.number}
                    </span>
                    <span className="font-tech-mono text-xs text-neutral-400 uppercase tracking-wider">
                      {step.technicalKey}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="lg:col-span-6 space-y-2">
                    <h3 className="font-ntype text-xl sm:text-2xl font-bold uppercase tracking-tight text-black">
                      {step.number} — {step.title}
                    </h3>
                    <p className="font-apple-body text-base text-neutral-700 leading-relaxed font-medium">
                      {step.description}
                    </p>
                    <p className="font-apple-body text-sm text-neutral-500 leading-normal">
                      {step.detail}
                    </p>
                  </div>

                  {/* Right Status / Interactive Inspector Trigger */}
                  <div className="lg:col-span-3 flex lg:justify-end items-center">
                    <span
                      className={`inline-flex items-center gap-2 font-tech-mono text-xs uppercase px-3 py-1.5 transition-all border ${
                        isSelected
                          ? 'bg-black text-white border-black'
                          : 'bg-white text-neutral-600 border-[#e5e5e5] group-hover:border-black'
                      }`}
                    >
                      {step.icon}
                      <span>{isSelected ? 'INSPECTING' : 'VIEW STEP'}</span>
                    </span>
                  </div>
                </div>

                {/* Expanded Step Inspector Details */}
                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 pt-6 border-t border-[#e5e5e5] bg-white p-4 sm:p-5 border"
                  >
                    <div className="flex items-center justify-between font-tech-mono text-[11px] text-neutral-500 uppercase tracking-wider pb-3 border-b border-neutral-100">
                      <span>STEP {step.number} RUNTIME SIMULATION</span>
                      <span>ACTIVE RECALL PIPELINE</span>
                    </div>
                    <div className="mt-3 font-tech-mono text-xs text-neutral-800 leading-relaxed bg-neutral-50 p-3 border border-neutral-200">
                      <span className="text-neutral-400 font-normal mr-2">&gt;</span>
                      {step.previewDetail}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Minimal Pipeline Visual Strip */}
        <div className="mt-8 pt-6 flex flex-wrap items-center justify-between gap-4 font-tech-mono text-[11px] text-neutral-500 uppercase tracking-widest border-t border-[#e5e5e5]">
          <span>CYCLE LATENCY: IMMEDIATE</span>
          <div className="flex items-center gap-2">
            <span>CONTINUOUS COGNITIVE CALIBRATION</span>
            <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
          </div>
        </div>
      </div>
    </section>
  );
};
