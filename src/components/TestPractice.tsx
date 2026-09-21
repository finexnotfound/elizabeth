import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, X, ArrowRight, HelpCircle, Layers, Award } from 'lucide-react';
import { PracticeTestSample } from '../types';

export const TestPractice: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);

  const sampleQuestion: PracticeTestSample = {
    id: 'Q-01',
    subject: 'COGNITIVE SCIENCE // MEMORY',
    question: 'Why does speaking your answer aloud result in stronger recall than silent reading?',
    options: [
      'It creates an audio recording that you can listen to later on your phone.',
      'The "production effect" and dual-encoding engage motor memory and auditory feedback loops, forcing active synthesis.',
      'It allows other students nearby to evaluate your accuracy in real time.',
      'It prevents your brain from needing to store long-term synaptic connections.',
    ],
    correctIndex: 1,
    explanation:
      'Active vocalization triggers the production effect, converting passive conceptual recognition into active generative memory.',
    targetConcept: 'PRODUCTION_EFFECT // ACTIVE_SYNTHESIS',
  };

  const handleSelect = (index: number) => {
    if (!hasSubmitted) {
      setSelectedAnswer(index);
    }
  };

  const handleVerify = () => {
    if (selectedAnswer !== null) {
      setHasSubmitted(true);
    }
  };

  const handleReset = () => {
    setSelectedAnswer(null);
    setHasSubmitted(false);
  };

  return (
    <section
      id="test-practice"
      className="py-16 sm:py-24 border-b border-[#e5e5e5] bg-[#fafafa]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-[#e5e5e5]">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <span className="font-tech-mono text-xs uppercase tracking-widest text-neutral-400 block mb-2">
              03 // SYNTHETIC ASSESSMENT
            </span>
            <h2
              id="test-practice-heading"
              className="font-ntype text-3xl sm:text-5xl font-bold uppercase tracking-tight text-black leading-tight"
            >
              TEST
              <br />
              PRACTICE
            </h2>
            <div className="mt-6 font-tech-mono text-[11px] text-neutral-500 uppercase tracking-wider">
              DYNAMIC QUESTION GENERATION &amp; WEAK-SPOT DETECTION
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center space-y-5"
          >
            <p className="font-apple-body text-xl sm:text-2xl text-black font-medium leading-snug">
              Elizabeth can also generate practice tests from a subject or from the student&apos;s
              own explanation of what they are studying.
            </p>
            <p className="font-apple-body text-neutral-700 text-base sm:text-lg leading-relaxed">
              It can create questions such as MCQs and other appropriate question types, then
              evaluate the result and show areas that need more practice.
            </p>
          </motion.div>
        </div>

        {/* 3 Pillars of Practice Testing */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-[#e5e5e5] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100 font-tech-mono text-[10px] text-neutral-400 uppercase">
                <span>FORMAT 01</span>
                <span>OBJECTIVE</span>
              </div>
              <h3 className="font-ntype text-lg font-bold uppercase text-black mt-4">
                ADAPTIVE MCQS
              </h3>
              <p className="font-apple-body text-sm text-neutral-600 mt-2 leading-relaxed">
                Precision multiple-choice questions crafted with subtle plausible distractors to
                test whether you truly comprehend nuanced boundaries.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-neutral-100 font-tech-mono text-[10px] text-neutral-400 uppercase">
              // DISCRIMINATION TESTING
            </div>
          </div>

          <div className="bg-white border border-[#e5e5e5] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100 font-tech-mono text-[10px] text-neutral-400 uppercase">
                <span>FORMAT 02</span>
                <span>SYNTHESIS</span>
              </div>
              <h3 className="font-ntype text-lg font-bold uppercase text-black mt-4">
                FREE RECALL PROMPTS
              </h3>
              <p className="font-apple-body text-sm text-neutral-600 mt-2 leading-relaxed">
                Generates scenario-based prompts derived directly from the student&apos;s own verbal
                explanations to bridge conceptual voids.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-neutral-100 font-tech-mono text-[10px] text-neutral-400 uppercase">
              // GENERATIVE VERIFICATION
            </div>
          </div>

          <div className="bg-white border border-[#e5e5e5] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100 font-tech-mono text-[10px] text-neutral-400 uppercase">
                <span>OUTPUT</span>
                <span>DIAGNOSTIC</span>
              </div>
              <h3 className="font-ntype text-lg font-bold uppercase text-black mt-4">
                WEAK-AREA TARGETING
              </h3>
              <p className="font-apple-body text-sm text-neutral-600 mt-2 leading-relaxed">
                Instead of simple letter grades, Elizabeth pinpoints the exact concept, definition,
                or mechanism that requires an additional recall repetition.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-neutral-100 font-tech-mono text-[10px] text-neutral-400 uppercase">
              // DEFICIT ISOLATION
            </div>
          </div>
        </div>

        {/* Interactive Practice Question Preview Component */}
        <div className="mt-12 bg-white border border-[#e5e5e5] p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#e5e5e5]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-black rounded-none"></span>
              <span className="font-tech-mono text-xs uppercase tracking-widest text-black font-semibold">
                INTERACTIVE GENERATOR PREVIEW
              </span>
            </div>
            <span className="font-tech-mono text-[11px] text-neutral-400 uppercase">
              {sampleQuestion.subject}
            </span>
          </div>

          <div className="mt-6">
            <h4 className="font-apple-body text-lg sm:text-xl font-semibold text-black leading-snug">
              {sampleQuestion.question}
            </h4>
            <div className="mt-2 font-tech-mono text-[11px] text-neutral-400 uppercase">
              TARGET CONCEPT: {sampleQuestion.targetConcept}
            </div>

            {/* Options list */}
            <div className="mt-6 space-y-2.5">
              {sampleQuestion.options.map((opt, idx) => {
                const isChosen = selectedAnswer === idx;
                const isCorrect = idx === sampleQuestion.correctIndex;
                let borderClass = 'border-[#e5e5e5] hover:border-black';
                let bgClass = 'bg-white';

                if (hasSubmitted) {
                  if (isCorrect) {
                    borderClass = 'border-black';
                    bgClass = 'bg-neutral-100 font-medium';
                  } else if (isChosen && !isCorrect) {
                    borderClass = 'border-neutral-400';
                    bgClass = 'bg-neutral-50';
                  }
                } else if (isChosen) {
                  borderClass = 'border-black';
                  bgClass = 'bg-neutral-50';
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelect(idx)}
                    className={`w-full text-left p-3.5 sm:p-4 border ${borderClass} ${bgClass} transition-all flex items-start gap-3 cursor-pointer group`}
                  >
                    <span className="font-tech-mono text-xs text-neutral-400 group-hover:text-black pt-0.5">
                      [{String.fromCharCode(65 + idx)}]
                    </span>
                    <span className="font-apple-body text-sm sm:text-base text-neutral-800 flex-1 leading-normal">
                      {opt}
                    </span>
                    {hasSubmitted && isCorrect && (
                      <Check className="w-4 h-4 text-black flex-shrink-0 mt-0.5" />
                    )}
                    {hasSubmitted && isChosen && !isCorrect && (
                      <X className="w-4 h-4 text-neutral-400 flex-shrink-0 mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Action Bar */}
            <div className="mt-6 pt-4 border-t border-[#e5e5e5] flex flex-wrap items-center justify-between gap-4">
              <div className="font-tech-mono text-xs text-neutral-500">
                {!hasSubmitted
                  ? selectedAnswer === null
                    ? 'Select an option to simulate student answer'
                    : 'Option selected. Click evaluate to submit.'
                  : selectedAnswer === sampleQuestion.correctIndex
                  ? 'EVALUATION: ACCURATE RETRIEVAL'
                  : 'EVALUATION: TARGET CONCEPT REQUIRING REVIEW'}
              </div>

              <div className="flex items-center gap-3">
                {hasSubmitted ? (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="font-tech-mono text-xs uppercase tracking-wider text-neutral-600 hover:text-black underline cursor-pointer"
                  >
                    RESET PREVIEW
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleVerify}
                    disabled={selectedAnswer === null}
                    className="bg-black text-white px-5 py-2 text-xs font-tech-mono uppercase tracking-wider hover:bg-neutral-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer rounded-none border border-black"
                  >
                    EVALUATE RESPONSE
                  </button>
                )}
              </div>
            </div>

            {/* Diagnostic feedback card after submit */}
            {hasSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 sm:p-5 border border-black bg-neutral-50"
              >
                <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
                  <span className="font-tech-mono text-xs uppercase tracking-wider text-black font-semibold">
                    ELIZABETH DIAGNOSTIC REPORT
                  </span>
                  <span className="font-tech-mono text-[10px] text-neutral-500">
                    STATUS: COMPLETED
                  </span>
                </div>
                <p className="mt-3 font-apple-body text-sm text-neutral-800 leading-relaxed">
                  {sampleQuestion.explanation}
                </p>
                <div className="mt-4 pt-3 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-2 text-[11px] font-tech-mono">
                  <span className="text-neutral-500">IDENTIFIED RETENTION TARGET:</span>
                  <span className="text-black font-semibold">
                    VOCAL SYNTHESIS &amp; ENCODING LATENCY
                  </span>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
