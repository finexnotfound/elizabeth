export interface StepItem {
  number: string;
  title: string;
  description: string;
  detail?: string;
  technicalKey?: string;
}

export interface PracticeTestSample {
  id: string;
  subject: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  targetConcept: string;
}

export interface RecallPreset {
  id: string;
  title: string;
  subject: string;
  context: string;
  sampleSpoken: string;
  matchScore: number;
  feedback: string;
  improvementFocus: string[];
}
