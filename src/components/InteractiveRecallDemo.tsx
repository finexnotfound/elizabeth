import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mic, MicOff, RefreshCw, CheckCircle2, ArrowRight, Play, RotateCcw } from 'lucide-react';
import { RecallPreset } from '../types';

const PRESETS: RecallPreset[] = [
  {
    id: 'preset-1',
    title: 'COGNITIVE LOAD THEORY',
    subject: 'EDUCATIONAL PSYCHOLOGY',
    context:
      'Cognitive load theory posits that working memory has a limited capacity (Miller’s 7±2, or Sweller’s 4 chunks). It identifies three load types: Intrinsic load (inherent topic difficulty), Extraneous load (poor instructional design), and Germane load (mental work dedicated to processing schemas into long-term memory). Effective instruction minimizes extraneous load while optimizing germane schema construction.',
    sampleSpoken:
      'Cognitive load theory states working memory is strictly limited to around four chunks. There are three types of load: Intrinsic load which is the natural difficulty of the subject, Extraneous load which comes from bad formatting or confusing instructions, and Germane load which is the brain working to build schemas for long term memory.',
    matchScore: 94,
    feedback:
      'Exceptional recall. You accurately identified all three load types (Intrinsic, Extraneous, Germane) and correctly described the role of schema construction.',
    improvementFocus: [
      'Mention Sweller & Miller capacity limits explicitly',
      'Explain how minimizing extraneous load frees mental bandwidth',
    ],
  },
  {
    id: 'preset-2',
    title: "NEWTON'S THREE LAWS",
    subject: 'CLASSICAL MECHANICS',
    context:
      'First Law: An object remains at rest or in uniform straight-line motion unless acted upon by a net external force (Inertia). Second Law: Acceleration is directly proportional to net force and inversely proportional to mass (F = ma). Third Law: When one body exerts a force on a second body, the second body simultaneously exerts an equal and opposite force on the first.',
    sampleSpoken:
      'First law is inertia, an object stays at rest or keeps moving unless a force acts on it. Second law is F equals m times a, force equals mass times acceleration. Third law says every action has an equal and opposite reaction force.',
    matchScore: 91,
    feedback:
      'Strong recall of foundational mechanics. Key equations and physical concepts captured concisely.',
    improvementFocus: [
      'Specify "net external force" rather than just any force',
      'Emphasize that the action-reaction forces act on two different bodies',
    ],
  },
];

export const InteractiveRecallDemo: React.FC = () => {
  const [selectedPreset, setSelectedPreset] = useState<RecallPreset>(PRESETS[0]);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [userSpokenText, setUserSpokenText] = useState<string>('');
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [evaluationResult, setEvaluationResult] = useState<{
    score: number;
    feedback: string;
    focus: string[];
  } | null>(null);

  const handleSelectPreset = (p: RecallPreset) => {
    setSelectedPreset(p);
    setCurrentStep(1);
    setUserSpokenText('');
    setEvaluationResult(null);
  };

  const handleProceedToRemember = () => {
    setCurrentStep(2);
  };

  const handleProceedToSpeak = () => {
    setCurrentStep(3);
  };

  const handleSimulateVoice = () => {
    setIsRecording(true);
    setTimeout(() => {
      setUserSpokenText(selectedPreset.sampleSpoken);
      setIsRecording(false);
      setCurrentStep(4);
    }, 1200);
  };

  const handleEvaluate = () => {
    setEvaluationResult({
      score: selectedPreset.matchScore,
      feedback: selectedPreset.feedback,
      focus: selectedPreset.improvementFocus,
    });
    setCurrentStep(5);
  };

  const handleReset = () => {
    setCurrentStep(1);
    setUserSpokenText('');
    setEvaluationResult(null);
  };

  return (
    <section
      id="recall-simulator"
      className="py-16 sm:py-24 border-b border-[#e5e5e5] bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#e5e5e5]">
          <div>
            <span className="font-tech-mono text-xs uppercase tracking-widest text-neutral-400 block mb-2">
              RUNTIME SIMULATOR
            </span>
            <h2 className="font-ntype text-2xl sm:text-4xl font-bold uppercase tracking-tight text-black">
              TEST THE 5-STEP CYCLE
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-tech-mono text-[11px] text-neutral-500 uppercase">
              SELECT PRESET CONTEXT:
            </span>
            <div className="inline-flex border border-[#e5e5e5]">
              {PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => handleSelectPreset(preset)}
                  className={`px-2.5 py-1 text-[11px] font-tech-mono uppercase tracking-wider transition-colors cursor-pointer ${
                    selectedPreset.id === preset.id
                      ? 'bg-black text-white'
                      : 'bg-white text-neutral-600 hover:text-black'
                  }`}
                >
                  {preset.title.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 5-Step Progress Tabs */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-5 border border-[#e5e5e5] bg-[#fafafa]">
          {[
            { num: '01', title: 'CONTEXT' },
            { num: '02', title: 'REMEMBER' },
            { num: '03', title: 'SPEAK' },
            { num: '04', title: 'CHECK' },
            { num: '05', title: 'IMPROVE' },
          ].map((item, idx) => {
            const stepNum = idx + 1;
            const isActive = currentStep === stepNum;
            const isDone = currentStep > stepNum;

            return (
              <div
                key={item.num}
                className={`p-3 sm:p-4 border-r border-b sm:border-b-0 border-[#e5e5e5] last:border-r-0 transition-colors ${
                  isActive
                    ? 'bg-black text-white'
                    : isDone
                    ? 'bg-neutral-100 text-neutral-900'
                    : 'text-neutral-400'
                }`}
              >
                <div className="font-tech-mono text-[10px] tracking-widest uppercase">
                  {item.num}
                </div>
                <div className="font-ntype text-xs sm:text-sm font-bold tracking-tight uppercase mt-0.5">
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>

        {/* Simulator Stage Box */}
        <div className="mt-6 border border-black p-6 sm:p-8 bg-white">
          {/* STEP 01: ENTER CONTEXT */}
          {currentStep === 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#e5e5e5]">
                <span className="font-tech-mono text-xs uppercase tracking-widest text-black font-semibold">
                  01 // CONTEXT INPUT
                </span>
                <span className="font-tech-mono text-[11px] text-neutral-400 uppercase">
                  SUBJECT: {selectedPreset.subject}
                </span>
              </div>

              <div>
                <label className="font-tech-mono text-xs text-neutral-500 uppercase block mb-2">
                  STUDY MATERIAL TO MEMORIZE
                </label>
                <div className="p-4 sm:p-5 bg-[#fafafa] border border-[#e5e5e5] font-apple-body text-neutral-800 text-base leading-relaxed">
                  {selectedPreset.context}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#e5e5e5]">
                <span className="font-tech-mono text-xs text-neutral-400">
                  Read through and prepare your active recall.
                </span>
                <button
                  type="button"
                  onClick={handleProceedToRemember}
                  className="bg-black text-white px-5 py-2.5 text-xs font-tech-mono uppercase tracking-wider hover:bg-neutral-800 active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer border border-black"
                >
                  <span>PROCEED TO REMEMBER</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 02: REMEMBER */}
          {currentStep === 2 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#e5e5e5]">
                <span className="font-tech-mono text-xs uppercase tracking-widest text-black font-semibold">
                  02 // SILENT RETRIEVAL SPACE
                </span>
                <span className="font-tech-mono text-[11px] text-neutral-400 uppercase">
                  ACTIVE RECALL NO-PEEKING
                </span>
              </div>

              <div className="py-12 sm:py-16 text-center space-y-4">
                <div className="w-12 h-12 mx-auto border border-black flex items-center justify-center font-ntype text-xl font-bold">
                  ...
                </div>
                <h3 className="font-ntype text-2xl sm:text-3xl font-bold uppercase text-black">
                  NOW RECALL FROM MEMORY
                </h3>
                <p className="font-apple-body text-neutral-600 text-sm sm:text-base max-w-lg mx-auto">
                  Elizabeth has hidden your notes. Take a quiet second to reconstruct the concept in
                  your thoughts before speaking aloud.
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#e5e5e5]">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="font-tech-mono text-xs text-neutral-500 hover:text-black uppercase underline cursor-pointer"
                >
                  &larr; PEEK AT CONTEXT
                </button>
                <button
                  type="button"
                  onClick={handleProceedToSpeak}
                  className="bg-black text-white px-5 py-2.5 text-xs font-tech-mono uppercase tracking-wider hover:bg-neutral-800 active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer border border-black"
                >
                  <span>READY TO SPEAK</span>
                  <Mic className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 03: SPEAK */}
          {currentStep === 3 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#e5e5e5]">
                <span className="font-tech-mono text-xs uppercase tracking-widest text-black font-semibold">
                  03 // VOCAL EXPLANATION
                </span>
                <span className="font-tech-mono text-[11px] text-neutral-400 uppercase">
                  VOICE INPUT
                </span>
              </div>

              <div className="p-8 text-center space-y-6 bg-neutral-50 border border-[#e5e5e5]">
                <div className="font-ntype text-xl sm:text-2xl font-bold uppercase text-black">
                  EXPLAIN IN YOUR OWN WORDS
                </div>
                <p className="font-apple-body text-sm sm:text-base text-neutral-600 max-w-md mx-auto">
                  Click the button below to simulate speaking your answer into Elizabeth&apos;s audio
                  input.
                </p>

                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={handleSimulateVoice}
                    disabled={isRecording}
                    className="bg-black text-white px-6 py-3.5 text-xs font-tech-mono uppercase tracking-wider hover:bg-neutral-800 active:scale-[0.98] transition-all flex items-center gap-3 cursor-pointer border border-black disabled:opacity-50"
                  >
                    <Mic className={`w-4 h-4 ${isRecording ? 'animate-pulse text-red-400' : ''}`} />
                    <span>{isRecording ? 'TRANSCRIBING VOCAL RECALL...' : 'SIMULATE SPOKEN RESPONSE'}</span>
                  </button>
                </div>
              </div>

              <div className="pt-4 border-t border-[#e5e5e5] text-right">
                <button
                  type="button"
                  onClick={() => {
                    setUserSpokenText(selectedPreset.sampleSpoken);
                    setCurrentStep(4);
                  }}
                  className="font-tech-mono text-xs text-neutral-400 hover:text-black uppercase cursor-pointer"
                >
                  SKIP SIMULATION &rarr;
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 04: CHECK */}
          {currentStep === 4 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#e5e5e5]">
                <span className="font-tech-mono text-xs uppercase tracking-widest text-black font-semibold">
                  04 // COMPARE &amp; EVALUATE
                </span>
                <span className="font-tech-mono text-[11px] text-neutral-400 uppercase">
                  TRANSCRIBED RECALL
                </span>
              </div>

              <div>
                <label className="font-tech-mono text-xs text-neutral-500 uppercase block mb-2">
                  CAPTURED SPOKEN RESPONSE
                </label>
                <div className="p-4 sm:p-5 bg-neutral-50 border border-black font-apple-body text-black text-base leading-relaxed">
                  &ldquo;{userSpokenText}&rdquo;
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#e5e5e5]">
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="font-tech-mono text-xs text-neutral-500 hover:text-black uppercase underline cursor-pointer"
                >
                  RE-RECORD VOICE
                </button>
                <button
                  type="button"
                  onClick={handleEvaluate}
                  className="bg-black text-white px-5 py-2.5 text-xs font-tech-mono uppercase tracking-wider hover:bg-neutral-800 active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer border border-black"
                >
                  <span>RUN EVALUATION</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 05: IMPROVE */}
          {currentStep === 5 && evaluationResult && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#e5e5e5]">
                <span className="font-tech-mono text-xs uppercase tracking-widest text-black font-semibold">
                  05 // DIAGNOSTIC &amp; IMPROVEMENT
                </span>
                <span className="font-tech-mono text-[11px] bg-black text-white px-2 py-0.5">
                  MATCH SCORE: {evaluationResult.score}%
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-4 p-5 bg-[#fafafa] border border-[#e5e5e5] flex flex-col justify-between">
                  <div>
                    <span className="font-tech-mono text-[10px] text-neutral-400 uppercase tracking-widest block mb-1">
                      SEMANTIC FIDELITY
                    </span>
                    <div className="font-ntype text-4xl sm:text-5xl font-bold text-black">
                      {evaluationResult.score}%
                    </div>
                    <p className="font-apple-body text-xs text-neutral-600 mt-2">
                      Accuracy based on key conceptual markers and causal associations.
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-[#e5e5e5] font-tech-mono text-[10px] text-neutral-500 uppercase">
                    STATUS: HIGH DURABILITY
                  </div>
                </div>

                <div className="md:col-span-8 space-y-4">
                  <div className="p-4 bg-[#fafafa] border border-[#e5e5e5]">
                    <span className="font-tech-mono text-xs text-black uppercase font-semibold block mb-2">
                      FEEDBACK
                    </span>
                    <p className="font-apple-body text-sm sm:text-base text-neutral-800 leading-relaxed">
                      {evaluationResult.feedback}
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-black">
                    <span className="font-tech-mono text-xs text-black uppercase font-bold block mb-2">
                      TARGET AREAS FOR NEXT PRACTICE
                    </span>
                    <ul className="space-y-1.5 font-apple-body text-sm text-neutral-700">
                      {evaluationResult.focus.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="font-tech-mono text-xs text-black font-bold pt-0.5">
                            &gt;
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#e5e5e5]">
                <span className="font-tech-mono text-xs text-neutral-400">
                  Cycle complete. Ready for next topic repetition.
                </span>
                <button
                  type="button"
                  onClick={handleReset}
                  className="bg-black text-white px-4 py-2 text-xs font-tech-mono uppercase tracking-wider hover:bg-neutral-800 transition-all flex items-center gap-2 cursor-pointer border border-black"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>START NEW CYCLE</span>
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
