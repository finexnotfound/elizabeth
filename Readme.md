<p align="center">
  <img src="assets/elizabeth-header.png" alt="ELIZABETH" width="760" />
</p>

<p align="center">
  <strong>ELIZABETH / STUDY SYSTEM</strong><br />
  <em>A minimalist study helper engineered for active recall, vocal retrieval, and diagnostic test practice.</em>
</p>

<p align="center">
  <a href="#the-cognitive-retrieval-protocol"><img src="https://img.shields.io/badge/CORE_LOOP-MEMORY_→_RECALL_→_CHECK_→_IMPROVE-black?style=flat-square" alt="Cognitive Loop" /></a>
  <a href="#tech-stack"><img src="https://img.shields.io/badge/ARCHITECTURE-REACT_19_+_VITE-black?style=flat-square" alt="React 19" /></a>
  <a href="https://github.com/finexnotfound"><img src="https://img.shields.io/badge/BUILT_BY-FINEX-black?style=flat-square" alt="Finex" /></a>
</p>

---

## // SPECIFICATION & OVERVIEW

```
PLATFORM DESIGNATION : ELIZABETH / STUDY SYSTEM
VERSION              : V1.4
CORE COGNITIVE LOOP  : MEMORY → RECALL → CHECK → IMPROVE
AUTHOR               : FINEX (github.com/finexnotfound)
DESIGN SYSTEM        : MINIMAL INDUSTRIAL TECH (NTYPE / MONO)
```

**ELIZABETH** is a study helper designed to help students test their own memory, practice subjects, and understand where they need improvement.

Unlike traditional study tools that immediately reveal solutions or rely on passive flashcard flipping, Elizabeth is built around **active recall**. The student provides their study material, remembers it independently without hints, speaks their answer aloud, and Elizabeth evaluates how closely the spoken response matches the original context.

---

## // WHAT IS ELIZABETH?

When software gives you the answer immediately, the brain nods along under the **illusion of competence**. True long-term memory consolidation requires mental friction—the deliberate struggle to retrieve and reconstruct concepts from memory.

| Traditional / Passive Studying | The Elizabeth Protocol |
| :--- | :--- |
| Re-reading notes creates superficial familiarity | Material is hidden; student engages in unassisted retrieval |
| Flipping flashcards too quickly deprives memory of effort | Vocalizing forces structured synthesis and causational clarity |
| Looking up solutions hides true gaps until test day | Algorithmic evaluation isolates exact conceptual omissions |
| **Result:** High study hours, low durability | **Result:** Fast reinforcement, durable knowledge |

---

## // THE 5-STEP PROTOCOL

Elizabeth enforces a clean, five-stage cognitive retrieval loop:

```
[ 01 CONTEXT ] ───► [ 02 REMEMBER ] ───► [ 03 SPEAK ] ───► [ 04 CHECK ] ───► [ 05 IMPROVE ]
```

### 01 — ENTER CONTEXT
> The student provides the material they want to remember.
- Paste lecture notes, textbook passages, formulas, or conceptual summaries.
- The raw context is ingested and indexed for semantic evaluation.

### 02 — REMEMBER
> Elizabeth gives the student space to recall the information without showing the answer.
- The display blanks out the source notes. Zero hints or premature flashcard peeks.
- The student takes a quiet moment to rebuild the concept in working memory.

### 03 — SPEAK
> The student explains what they remember using their voice.
- Verbalizing triggers the *production effect*, engaging motor memory and auditory feedback.
- The voice input is transcribed into structured sentences in real time.

### 04 — CHECK
> Elizabeth compares the spoken response with the original context.
- Semantic parity algorithms compare the user's explanation against the source material.
- Measures key terminology, causal relationships, and conceptual coverage.

### 05 — IMPROVE
> Elizabeth provides feedback and identifies what needs more practice.
- Generates an objective fidelity match score (0–100%).
- Pinpoints omitted concepts, inaccurate claims, and suggested re-testing intervals.

---

## // SYNTHETIC TEST PRACTICE

In addition to vocal recall sessions, Elizabeth generates dynamic assessment modules:

- **Adaptive MCQs**: Multiple-choice questions built with nuanced distractors to test exact boundary conditions.
- **Free Recall Prompts**: Scenario-driven prompts derived directly from what the student previously explained.
- **Deficit Isolation**: Highlights the specific mechanisms, definitions, or equations that require another retrieval cycle.

---

## // VISUAL IDENTITY & DESIGN SYSTEM

Inspired by minimalist industrial technology and the aesthetic language of Nothing:

- **Palette**: Clean off-white canvas (`#fafafa`), deep black typography (`#111111`), hairline borders (`#e5e5e5`), and zero unsolicited colors or gradients.
- **Typography**:
  - **Headings**: NType / Space Grotesk display typography with tight tracking and uppercase geometry.
  - **Body**: System-native Apple sans-serif for high readability.
  - **Technical Meta**: Monospace (`JetBrains Mono` / `Chivo Mono`) for timestamps, specs, and status indicators.
- **Tactile UI**: Crisp square corners, subtle 1px dividers, restrained micro-interactions, and balanced negative space.

---

## // PROJECT STRUCTURE

```
├── assets/
│   └── elizabeth-header.png        # Header logo banner
├── src/
│   ├── components/
│   │   ├── Navbar.tsx              # System header with live clock & quick navigation
│   │   ├── HeroSection.tsx         # "LEARN FROM PAST." display section
│   │   ├── WhatIsElizabeth.tsx     # Active recall philosophy & comparison
│   │   ├── HowItWorks.tsx          # 01-05 sequential protocol with step inspector
│   │   ├── InteractiveRecallDemo.tsx # Working 5-step simulator
│   │   ├── TestPractice.tsx        # Dynamic question generator & diagnostic preview
│   │   ├── WhyElizabeth.tsx        # Human-centered educational philosophy
│   │   ├── CreatorSection.tsx      # Built by Finex attribution & GitHub link
│   │   └── Footer.tsx              # Minimalist footer
│   ├── types.ts                    # TypeScript interfaces
│   ├── App.tsx                     # Main application entry point
│   ├── main.tsx                    # React DOM bootstrap
│   └── index.css                   # Tailwind CSS v4 & custom typography tokens
├── index.html                      # HTML entry with custom typography links
├── metadata.json                   # Applet configuration
├── package.json                    # Dependencies & scripts
└── tsconfig.json                   # TypeScript compiler options
```

---

## // GETTING STARTED

### Prerequisites
- Node.js 18+ or Bun
- npm or bun package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/finexnotfound/elizabeth.git
cd elizabeth

# Install dependencies
npm install

# Start development server
npm run dev
```

The application runs on `http://localhost:3000`.

### Production Build

```bash
npm run build
npm run preview
```

---

## // AUTHOR & CREDITS

**BUILT BY FINEX**  
Designed and built by Finex.

- **GitHub**: [github.com/finexnotfound](https://github.com/finexnotfound)
- **Repository**: [github.com/finexnotfound/elizabeth](https://github.com/finexnotfound/elizabeth)

---

<p align="center">
  <sub>ELIZABETH &bull; A STUDY HELPER FOR ACTIVE RECALL &bull; MADE BY FINEX</sub>
</p>
