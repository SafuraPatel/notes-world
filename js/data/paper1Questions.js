/**
 * PAPER 1 PREVIOUS YEAR QUESTIONS (PYQs)
 * Authentic questions from UGC NET and All State SET exams (MH-SET, WB-SET, KSET, AP-SET, etc.)
 * Organized unit-wise across all 10 units of Paper 1.
 * Includes complete 4-option breakdown explanations for every question.
 */

export const paper1Questions = [
  // =========================================================================
  // UNIT 1: TEACHING APTITUDE (p1-u1)
  // =========================================================================
  {
    id: "p1-u1-q1",
    paper: "paper1",
    unitId: "p1-u1",
    unitNumber: 1,
    unitName: "Teaching Aptitude",
    examSource: "UGC NET Dec 2023",
    question: "Which of the following levels of teaching is primarily focused on the development of critical thinking, problem-solving, and original creative insight?",
    options: [
      { id: "A", text: "Memory Level (Herbart)" },
      { id: "B", text: "Understanding Level (Morrison)" },
      { id: "C", text: "Reflective Level (Hunt)" },
      { id: "D", text: "Autonomous Development Level" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "Memory Level (Herbart): Focuses only on rote memorization, stimulus-response association, and factual recall without deep critical inquiry.",
      "B": "Understanding Level (Morrison): Focuses on comprehending generalizations, relationships, and grasping concepts with examples, but not independent problem-discovery.",
      "C": "Reflective Level (Hunt): Correct! This is the highest introspective level where learners actively formulate hypotheses, analyze situations critically, and solve real problems independently.",
      "D": "Autonomous Development Level (Morris): Primarily self-guided emotional and developmental growth with minimal direct cognitive steering by the teacher."
    },
    summaryExplanation: "Hunt's Reflective Level operates at the highest cognitive plane, encouraging autonomous problem identification and solution synthesis."
  },
  {
    id: "p1-u1-q2",
    paper: "paper1",
    unitId: "p1-u1",
    unitNumber: 1,
    unitName: "Teaching Aptitude",
    examSource: "MH-SET 2024",
    question: "In the revised Bloom's Taxonomy of Cognitive Domain proposed by Anderson and Krathwohl, which cognitive process occupies the highest level of the hierarchy?",
    options: [
      { id: "A", text: "Evaluating" },
      { id: "B", text: "Creating" },
      { id: "C", text: "Analyzing" },
      { id: "D", text: "Applying" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Evaluating: Was the top tier in Bloom's original 1956 taxonomy ('Evaluation'), but was placed at rank 5 in the 2001 revised version.",
      "B": "Creating: Correct! In the revised taxonomy (2001), action verbs are used and 'Creating' (putting elements together to form a coherent or novel whole) is placed at the very pinnacle (level 6).",
      "C": "Analyzing: Occupies the 4th level; involves breaking down material into constituent parts to understand organizational structures.",
      "D": "Applying: Occupies the 3rd level; involves carrying out or using a procedure in a given familiar or new scenario."
    },
    summaryExplanation: "The revised hierarchy (low to high) is: Remember → Understand → Apply → Analyze → Evaluate → Create."
  },
  {
    id: "p1-u1-q3",
    paper: "paper1",
    unitId: "p1-u1",
    unitNumber: 1,
    unitName: "Teaching Aptitude",
    examSource: "WB-SET 2023",
    question: "Under the SWAYAM platform initiative launched by the Government of India, how many distinct pedagogical 'Quadrants' are specified for every online course?",
    options: [
      { id: "A", text: "2 Quadrants" },
      { id: "B", text: "3 Quadrants" },
      { id: "C", text: "4 Quadrants" },
      { id: "D", text: "5 Quadrants" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "2 Quadrants: Incomplete; online MOOCs in SWAYAM go far beyond just video and text.",
      "B": "3 Quadrants: Incorrect; SWAYAM includes self-assessment and interactive discussion in addition to lectures.",
      "C": "4 Quadrants: Correct! The 4 pillars are: Quadrant 1 = e-Tutorial (video/audio lectures), Quadrant 2 = e-Content (reading materials, e-books), Quadrant 3 = Self-Assessment (quizzes/tests), Quadrant 4 = Discussion Forum (for doubt resolution).",
      "D": "5 Quadrants: There is no 5th quadrant in the official SWAYAM MOOC architecture."
    },
    summaryExplanation: "SWAYAM's 4-Quadrant approach guarantees multi-modal, self-paced, and interactive learning."
  },
  {
    id: "p1-u1-q4",
    paper: "paper1",
    unitId: "p1-u1",
    unitNumber: 1,
    unitName: "Teaching Aptitude",
    examSource: "KSET 2023",
    question: "Which type of assessment is specifically carried out continuously during the instruction process to monitor student learning and provide immediate corrective feedback?",
    options: [
      { id: "A", text: "Summative Assessment" },
      { id: "B", text: "Formative Assessment" },
      { id: "C", text: "Norm-Referenced Assessment" },
      { id: "D", text: "Criterion-Referenced Assessment" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Summative Assessment: Conducted at the end of a term/course (e.g. final semester exams) to assign grades, not for real-time remedial feedback.",
      "B": "Formative Assessment: Correct! Ongoing assessment 'for' learning (quizzes, questioning in class, exit tickets) used to guide day-to-day teaching adjustments.",
      "C": "Norm-Referenced Assessment: Ranks a student compared to a peer group (e.g. percentile scores in entrance tests).",
      "D": "Criterion-Referenced Assessment: Measures mastery against predefined standards or cutoffs (e.g. scoring 60% or typing 40 wpm), irrespective of others."
    },
    summaryExplanation: "Formative assessment is developmental and continuous; Summative is evaluative and terminal."
  },

  // =========================================================================
  // UNIT 2: RESEARCH APTITUDE (p1-u2)
  // =========================================================================
  {
    id: "p1-u2-q1",
    paper: "paper1",
    unitId: "p1-u2",
    unitNumber: 2,
    unitName: "Research Aptitude",
    examSource: "UGC NET June 2024",
    question: "When a researcher rejects a Null Hypothesis (H0) that is actually TRUE in reality, what type of statistical decision error has occurred?",
    options: [
      { id: "A", text: "Type I Error (Alpha error)" },
      { id: "B", text: "Type II Error (Beta error)" },
      { id: "C", text: "Standard Sampling Error" },
      { id: "D", text: "Systematic Bias Error" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Type I Error (Alpha error): Correct! False Positive error: rejecting a true null hypothesis when no actual effect exists in reality.",
      "B": "Type II Error (Beta error): False Negative error: failing to reject (accepting) a null hypothesis when it is actually false.",
      "C": "Standard Sampling Error: The statistical variance arising because a sample rather than the full population was surveyed.",
      "D": "Systematic Bias Error: Constant directional deviation due to flawed instruments or non-random sampling."
    },
    summaryExplanation: "Type I (α) = Rejecting True H0 (False Alarm); Type II (β) = Retaining False H0 (Missed Opportunity)."
  },
  {
    id: "p1-u2-q2",
    paper: "paper1",
    unitId: "p1-u2",
    unitNumber: 2,
    unitName: "Research Aptitude",
    examSource: "MH-SET 2024",
    question: "Which research approach is primarily characterized by immersion in natural settings, inductive reasoning, emergent design, and rich narrative descriptions rather than numerical metrics?",
    options: [
      { id: "A", text: "Quantitative Experimental Research" },
      { id: "B", text: "Qualitative Phenomenological / Ethnographic Research" },
      { id: "C", text: "Ex-Post Facto Research" },
      { id: "D", text: "Correlational Survey Research" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Quantitative Experimental Research: Deductive, objective, testing specific causal hypotheses using manipulated variables and numerical measurements.",
      "B": "Qualitative Research: Correct! Explores meanings, lived experiences, and cultural patterns through observation, interviews, and thematic analysis.",
      "C": "Ex-Post Facto Research: Quasi-experimental study investigating past events where variables cannot be manipulated by the researcher.",
      "D": "Correlational Survey Research: Quantitative statistical measurement of the degree of relationship between two or more measurable variables."
    },
    summaryExplanation: "Qualitative research is inductive, holistic, and naturalistic; Quantitative is deductive, structured, and statistical."
  },
  {
    id: "p1-u2-q3",
    paper: "paper1",
    unitId: "p1-u2",
    unitNumber: 2,
    unitName: "Research Aptitude",
    examSource: "AP-SET 2024",
    question: "According to standard UGC academic integrity regulations, what is the penalty if a student or researcher is found guilty of Level 3 Plagiarism (similarities above 60%) in their thesis?",
    options: [
      { id: "A", text: "Warning to submit a revised draft within 6 months" },
      { id: "B", text: "Debarred from submitting revised thesis for 1 year" },
      { id: "C", text: "Cancellation of registration for the degree program" },
      { id: "D", text: "Fine of ₹50,000 only" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "Revision within 6 months: This penalty applies to Level 1 similarity (10% to 40%).",
      "B": "Debarred for 1 year: This applies to Level 2 similarity (40% to 60%).",
      "C": "Cancellation of registration: Correct! Level 3 similarity (>60%) carries the highest penalty—immediate cancellation of registration for the research program.",
      "D": "Monetary fine: UGC regulations do not impose simple monetary fines for severe academic dishonesty."
    },
    summaryExplanation: "UGC Plagiarism Tiers: Level 0 (up to 10% - no penalty), Level 1 (10-40% - revise within 6 mos), Level 2 (40-60% - debarred 1 yr), Level 3 (>60% - registration cancelled)."
  },

  // =========================================================================
  // UNIT 3: READING COMPREHENSION (p1-u3)
  // =========================================================================
  {
    id: "p1-u3-q1",
    paper: "paper1",
    unitId: "p1-u3",
    unitNumber: 3,
    unitName: "Reading Comprehension",
    examSource: "UGC NET Dec 2023",
    question: "In academic reading comprehension, an 'Inference' drawn from a passage is defined as:",
    options: [
      { id: "A", text: "A direct factual quote explicitly stated word-for-word in the passage" },
      { id: "B", text: "A logical conclusion derived from stated evidence and implicit contextual clues" },
      { id: "C", text: "The reader's personal opinion formed independently without passage proof" },
      { id: "D", text: "A restatement of the introductory title sentence" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Direct factual quote: This is explicit retrieval/literal comprehension, not an inference.",
      "B": "Logical conclusion: Correct! Inference is reading between the lines—connecting explicit facts with logical deduction to uncover implicit meaning.",
      "C": "Reader's external opinion: Comprehension answers must strictly stem from the author's statements, never subjective external speculation.",
      "D": "Restatement of title: Merely re-reading or paraphrasing the title does not constitute an inferential deduction."
    },
    summaryExplanation: "Inference = Stated Evidence + Logical Deduction (Reading between the lines)."
  },
  {
    id: "p1-u3-q2",
    paper: "paper1",
    unitId: "p1-u3",
    unitNumber: 3,
    unitName: "Reading Comprehension",
    examSource: "WB-SET 2023",
    question: "When analyzing an argumentative passage, which reading strategy is most efficient for quickly locating specific facts, dates, or numerical statistics?",
    options: [
      { id: "A", text: "Skimming" },
      { id: "B", text: "Scanning" },
      { id: "C", text: "Intensive Critical Analysis" },
      { id: "D", text: "Extensive Reading" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Skimming: Reading rapidly across headings and topic sentences to get the overall main gist/theme, not locating single facts.",
      "B": "Scanning: Correct! Moving eyes quickly over the page searching specifically for a target keyword, year, number, or name.",
      "C": "Intensive Analysis: In-depth, slow deconstruction of complex arguments, too slow for quick data retrieval.",
      "D": "Extensive Reading: Leisurely reading of long texts for broad fluency and enjoyment."
    },
    summaryExplanation: "Skim for the Gist (General theme); Scan for the Specifics (Facts, numbers, keywords)."
  },

  // =========================================================================
  // UNIT 4: COMMUNICATION (p1-u4)
  // =========================================================================
  {
    id: "p1-u4-q1",
    paper: "paper1",
    unitId: "p1-u4",
    unitNumber: 4,
    unitName: "Communication",
    examSource: "MH-SET 2024",
    question: "Communication that takes place within an individual's own mind—such as self-reflection, meditation, internal prayer, or silent decision-making—is called:",
    options: [
      { id: "A", text: "Interpersonal Communication" },
      { id: "B", text: "Intrapersonal Communication" },
      { id: "C", text: "Group Communication" },
      { id: "D", text: "Mass Communication" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Interpersonal Communication: Occurs between two distinct individuals (dyadic exchange like interviews, conversations).",
      "B": "Intrapersonal Communication: Correct! Communication within oneself (Prefix 'Intra' = within; 'Inter' = between).",
      "C": "Group Communication: Interaction among three or more people sharing common goals (committees, focus groups).",
      "D": "Mass Communication: Transmission to large, anonymous, heterogeneous audiences via public media channels (TV, radio, newspapers)."
    },
    summaryExplanation: "Intrapersonal = Within self; Interpersonal = Between people; Mass = Broadcast to public."
  },
  {
    id: "p1-u4-q2",
    paper: "paper1",
    unitId: "p1-u4",
    unitNumber: 4,
    unitName: "Communication",
    examSource: "UGC NET Dec 2023",
    question: "In the Shannon-Weaver mathematical model of communication, what element causes distortion, corruption, or degradation of the transmitted signal across the channel?",
    options: [
      { id: "A", text: "Encoder" },
      { id: "B", text: "Feedback" },
      { id: "C", text: "Noise" },
      { id: "D", text: "Entropy" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "Encoder: The transmitter that converts thoughts or data into signals/messages.",
      "B": "Feedback: The receiver's reaction returned to the sender; was missing in original linear Shannon-Weaver model.",
      "C": "Noise: Correct! Any unwanted sound, static, interference, or barrier that alters the message between transmitter and receiver.",
      "D": "Entropy: A measure of uncertainty or disorder in information theory, not the physical distorting interference itself."
    },
    summaryExplanation: "Noise is the external or psychological interference disrupting the fidelity of a transmission."
  },
  {
    id: "p1-u4-q3",
    paper: "paper1",
    unitId: "p1-u4",
    unitNumber: 4,
    unitName: "Communication",
    examSource: "KSET 2023",
    question: "When a receiver interprets words, gestures, or symbols differently due to differing cultural vocabularies, ambiguous terminology, or jargon, what type of communication barrier is at play?",
    options: [
      { id: "A", text: "Physical Barrier" },
      { id: "B", text: "Semantic Barrier" },
      { id: "C", text: "Psychological Barrier" },
      { id: "D", text: "Organizational Barrier" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Physical Barrier: Environmental obstacles like geographical distance, faulty microphones, or loud machinery.",
      "B": "Semantic Barrier: Correct! Pertains to linguistic meaning, vocabulary misunderstandings, homophones, and specialized jargon.",
      "C": "Psychological Barrier: Mental states like anger, prejudice, emotional stress, or selective perception.",
      "D": "Organizational Barrier: Hierarchy rules, rigid protocols, or span of control blocking communication flow."
    },
    summaryExplanation: "Semantics deals with meaning in language; semantic noise occurs when sender and receiver interpret symbols differently."
  },

  // =========================================================================
  // UNIT 5: MATHEMATICAL REASONING & APTITUDE (p1-u5)
  // =========================================================================
  {
    id: "p1-u5-q1",
    paper: "paper1",
    unitId: "p1-u5",
    unitNumber: 5,
    unitName: "Mathematical Reasoning & Aptitude",
    examSource: "UGC NET June 2024",
    question: "Find the next missing number in the following series: 2, 6, 12, 20, 30, 42, ?",
    options: [
      { id: "A", text: "52" },
      { id: "B", text: "54" },
      { id: "C", text: "56" },
      { id: "D", text: "60" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "52: Incorrect; misses the increasing difference pattern.",
      "B": "54: Incorrect arithmetic addition.",
      "C": "56: Correct! Differences are: +4, +6, +8, +10, +12. Next difference must be +14: 42 + 14 = 56. (Alternatively, n*(n+1): 1*2=2, 2*3=6, 3*4=12, 4*5=20, 5*6=30, 6*7=42, 7*8=56).",
      "D": "60: Overestimated the series progression."
    },
    summaryExplanation: "Pattern: n(n+1) or successive differences increasing by 2 (+4, +6, +8, +10, +12, +14). 42 + 14 = 56."
  },
  {
    id: "p1-u5-q2",
    paper: "paper1",
    unitId: "p1-u5",
    unitNumber: 5,
    unitName: "Mathematical Reasoning & Aptitude",
    examSource: "MH-SET 2024",
    question: "If in a certain code language 'TEACHER' is written as 'VGCEJGT', how will 'STUDENT' be written in that same code?",
    options: [
      { id: "A", text: "UVWFGPV" },
      { id: "B", text: "UVWFGPU" },
      { id: "C", text: "TVVGFPV" },
      { id: "D", text: "UWVFGPV" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "UVWFGPV: Correct! Every letter is shifted forward by +2 positions in alphabet: S(+2)=U, T(+2)=V, U(+2)=W, D(+2)=F, E(+2)=G, N(+2)=P, T(+2)=V.",
      "B": "UVWFGPU: Last letter 'T' shifted by +1 to 'U' instead of +2 to 'V'.",
      "C": "TVVGFPV: First letter 'S' shifted by +1 instead of +2.",
      "D": "UWVFGPV: Swapped 2nd and 3rd letters."
    },
    summaryExplanation: "The rule is constant forward shift of +2 for every character in the word."
  },

  // =========================================================================
  // UNIT 6: LOGICAL REASONING (p1-u6)
  // =========================================================================
  {
    id: "p1-u6-q1",
    paper: "paper1",
    unitId: "p1-u6",
    unitNumber: 6,
    unitName: "Logical Reasoning",
    examSource: "UGC NET Dec 2023",
    question: "According to the classical Square of Opposition, if the universal affirmative proposition 'All metals are conductors' (A) is given as TRUE, what is the truth value of 'Some metals are not conductors' (O)?",
    options: [
      { id: "A", text: "True" },
      { id: "B", text: "False" },
      { id: "C", text: "Undetermined / Doubtful" },
      { id: "D", text: "Both True and False" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "True: Contradicts the golden rule of contradictory propositions.",
      "B": "False: Correct! In the square of opposition, A and O are Contradictories. They can never have the same truth value. If A is True, O MUST be False.",
      "C": "Undetermined: Contradictories are never undetermined when one value is definitively known.",
      "D": "Both True and False: Violates the fundamental law of non-contradiction in classical formal logic."
    },
    summaryExplanation: "Contradictories (A-O, E-I) always have strictly opposite truth values. True ⟷ False."
  },
  {
    id: "p1-u6-q2",
    paper: "paper1",
    unitId: "p1-u6",
    unitNumber: 6,
    unitName: "Logical Reasoning",
    examSource: "WB-SET 2023",
    question: "In classical Indian Logic (Nyaya philosophy), which valid source of true knowledge (Pramana) is derived from knowledge of unshakeable universal concomitance (Vyapti) between middle term (Hetu) and major term (Sadhya)?",
    options: [
      { id: "A", text: "Pratyaksha (Direct Perception)" },
      { id: "B", text: "Anumana (Inference)" },
      { id: "C", text: "Upamana (Comparison / Analogy)" },
      { id: "D", text: "Shabda (Verbal Testimony)" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Pratyaksha (Perception): Immediate sensory cognition arising from sense-object contact (Indriya-Artha Sannikarsha).",
      "B": "Anumana (Inference): Correct! Defined as cognition which follows other knowledge. It relies on observing the Hetu (smoke) in Paksha (mountain) and recalling Vyapti ('wherever there is smoke, there is fire').",
      "C": "Upamana (Comparison): Knowledge derived through similarity or analogy (e.g. recognizing a Gavaya by its likeness to a cow).",
      "D": "Shabda (Testimony): Knowledge derived from the statement of a trustworthy and authoritative person (Aptavakya)."
    },
    summaryExplanation: "Anumana (Inference) is grounded in Vyapti—the invariant relation between the sign (Hetu) and the signified (Sadhya)."
  },

  // =========================================================================
  // UNIT 7: DATA INTERPRETATION (p1-u7)
  // =========================================================================
  {
    id: "p1-u7-q1",
    paper: "paper1",
    unitId: "p1-u7",
    unitNumber: 7,
    unitName: "Data Interpretation",
    examSource: "UGC NET June 2024",
    question: "If a college's student enrolment increased from 1,200 in the year 2020 to 1,500 in the year 2022, what is the exact percentage increase in student enrolment?",
    options: [
      { id: "A", text: "20%" },
      { id: "B", text: "25%" },
      { id: "C", text: "30%" },
      { id: "D", text: "15%" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "20%: Incorrectly divided the difference by 1500 instead of initial base 1200.",
      "B": "25%: Correct! Increase = 1500 - 1200 = 300. Percentage Increase = (300 / 1200) × 100 = 1/4 × 100 = 25%.",
      "C": "30%: Confused 300 increase with 30%.",
      "D": "15%: Calculation error."
    },
    summaryExplanation: "% Increase = [(New Value - Base Value) / Base Value] × 100 = (300 / 1200) × 100 = 25%."
  },

  // =========================================================================
  // UNIT 8: ICT (p1-u8)
  // =========================================================================
  {
    id: "p1-u8-q1",
    paper: "paper1",
    unitId: "p1-u8",
    unitNumber: 8,
    unitName: "Information and Communication Technology (ICT)",
    examSource: "MH-SET 2024",
    question: "Which of the following computer storage memories is the FASTEST in terms of data read/write access time and is located directly inside the CPU chip?",
    options: [
      { id: "A", text: "Solid State Drive (SSD)" },
      { id: "B", text: "Random Access Memory (RAM)" },
      { id: "C", text: "CPU Registers" },
      { id: "D", text: "Optical Disc (Blu-Ray)" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "Solid State Drive: Non-volatile secondary storage, much slower than processor memory.",
      "B": "RAM: Primary main memory, fast, but significantly slower than cache and registers.",
      "C": "CPU Registers: Correct! Located directly within the ALU/Control Unit of the CPU; provides near-zero cycle access speeds (fastest in the memory hierarchy).",
      "D": "Optical Disc: Slowest secondary optical storage media."
    },
    summaryExplanation: "Memory Speed Hierarchy (Fastest to Slowest): CPU Registers > L1/L2 Cache > RAM > SSD/HDD > Optical Media."
  },
  {
    id: "p1-u8-q2",
    paper: "paper1",
    unitId: "p1-u8",
    unitNumber: 8,
    unitName: "Information and Communication Technology (ICT)",
    examSource: "UGC NET Dec 2023",
    question: "What is the primary distinguishing characteristic of a 'Ransomware' cyber attack compared to a conventional computer virus?",
    options: [
      { id: "A", text: "It silently monitors keystrokes and logs bank passwords" },
      { id: "B", text: "It encrypts the victim's critical files and demands payment for the decryption key" },
      { id: "C", text: "It displays unwanted promotional popup advertisements on the browser" },
      { id: "D", text: "It overwhelms network servers with millions of dummy traffic packets" },
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Keystroke monitoring: This describes a Keylogger / Spyware.",
      "B": "File encryption with ransom: Correct! Ransomware (like WannaCry) encrypts user data using military-grade cryptography and demands cryptocurrency ransom for recovery.",
      "C": "Promotional popups: This describes Adware.",
      "D": "Flooding dummy packets: This describes a Distributed Denial of Service (DDoS) attack."
    },
    summaryExplanation: "Ransomware holds victim files hostage through encryption until a financial ransom is paid."
  },

  // =========================================================================
  // UNIT 9: PEOPLE, DEVELOPMENT AND ENVIRONMENT (p1-u9)
  // =========================================================================
  {
    id: "p1-u9-q1",
    paper: "paper1",
    unitId: "p1-u9",
    unitNumber: 9,
    unitName: "People, Development and Environment",
    examSource: "UGC NET June 2024",
    question: "Under the United Nations 2030 Agenda for Sustainable Development, how many Sustainable Development Goals (SDGs) and associated targets were adopted by member nations?",
    options: [
      { id: "A", text: "8 Goals and 21 Targets" },
      { id: "B", text: "15 Goals and 125 Targets" },
      { id: "C", text: "17 Goals and 169 Targets" },
      { id: "D", text: "20 Goals and 200 Targets" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "8 Goals & 21 Targets: These were the earlier Millennium Development Goals (MDGs, 2000-2015).",
      "B": "15 Goals & 125 Targets: Incorrect figures.",
      "C": "17 Goals & 169 Targets: Correct! The SDGs (2015-2030) comprise exactly 17 universal goals and 169 interconnected targets.",
      "D": "20 Goals: There are only 17 SDGs."
    },
    summaryExplanation: "MDGs = 8 Goals (target 2015); SDGs = 17 Goals & 169 Targets (target 2030)."
  },
  {
    id: "p1-u9-q2",
    paper: "paper1",
    unitId: "p1-u9",
    unitNumber: 9,
    unitName: "People, Development and Environment",
    examSource: "MH-SET 2024",
    question: "The historic international treaty 'Montreal Protocol' (1987) was negotiated specifically to protect the environment by phasing out substances that cause:",
    options: [
      { id: "A", text: "Global Greenhouse Warming Emissions" },
      { id: "B", text: "Depletion of the Stratospheric Ozone Layer" },
      { id: "C", text: "Cross-border transboundary movement of hazardous waste" },
      { id: "D", text: "Desertification in arid regions" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Greenhouse gases: Governed by the Kyoto Protocol (1997) and Paris Agreement (2015).",
      "B": "Ozone layer depletion: Correct! The Montreal Protocol specifically mandated phase-out of Ozone Depleting Substances (ODS) like Chlorofluorocarbons (CFCs) and Halons.",
      "C": "Hazardous waste: Governed by the Basel Convention (1989).",
      "D": "Desertification: Governed by the UN Convention to Combat Desertification (UNCCD, 1994)."
    },
    summaryExplanation: "Montreal Protocol = Ozone Layer protection (CFCs phase-out); Kyoto/Paris = Climate Change & Greenhouse Gases."
  },

  // =========================================================================
  // UNIT 10: HIGHER EDUCATION SYSTEM (p1-u10)
  // =========================================================================
  {
    id: "p1-u10-q1",
    paper: "paper1",
    unitId: "p1-u10",
    unitNumber: 10,
    unitName: "Higher Education System",
    examSource: "UGC NET Dec 2023",
    question: "Under the National Education Policy (NEP) 2020, what is the targeted Gross Enrolment Ratio (GER) in higher education, including vocational education, to be achieved by the year 2035?",
    options: [
      { id: "A", text: "35%" },
      { id: "B", text: "50%" },
      { id: "C", text: "75%" },
      { id: "D", text: "100%" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "35%: Current baseline is approximately 28.4% (AISHE); NEP target is substantially higher.",
      "B": "50%: Correct! NEP 2020 explicitly aims to increase the Higher Education GER from ~27% to 50% by 2035.",
      "C": "75%: Unrealistic target for 2035.",
      "D": "100%: 100% GER target is designated for School Education (preschool to secondary) by 2030, not higher education."
    },
    summaryExplanation: "NEP 2020 Targets: 100% GER in School Education by 2030; 50% GER in Higher Education by 2035."
  },
  {
    id: "p1-u10-q2",
    paper: "paper1",
    unitId: "p1-u10",
    unitNumber: 10,
    unitName: "Higher Education System",
    examSource: "WB-SET 2023",
    question: "Which ancient Indian seat of higher learning, located in modern-day Pakistan, was world-famous for its specialized curriculum in statecraft, medicine (Ayurveda), and archery, and educated scholar Chanakya and physician Jivaka?",
    options: [
      { id: "A", text: "Nalanda University" },
      { id: "B", text: "Takshashila (Taxila)" },
      { id: "C", text: "Vikramashila University" },
      { id: "D", text: "Vallabhi University" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Nalanda University: Located in modern Bihar; famed for Buddhist monastic philosophy and its vast library Dharmaganja.",
      "B": "Takshashila: Correct! Located in Rawalpindi district of Punjab (now Pakistan); renowned for specialized arts, military science, medicine, and mentorship of Chanakya, Panini, and Charaka.",
      "C": "Vikramashila: Founded by King Dharmapala in Bihar; celebrated for Tantric Buddhism and logic.",
      "D": "Vallabhi: Located in Saurashtra (Gujarat); rival center to Nalanda in Hinayana Buddhism and administration."
    },
    summaryExplanation: "Takshashila was renowned for individual specialized mentors and statecraft; Nalanda was residential monastic."
  },
  {
    id: "p1-u1-q5",
    paper: "paper1",
    unitId: "p1-u1",
    unitNumber: 1,
    unitName: "Teaching Aptitude",
    examSource: "UGC NET Dec 2022",
    question: "In the standard Indian Micro-teaching cycle developed by NCERT, what is the prescribed standard total duration of one full micro-teaching cycle?",
    options: [
      { id: "A", text: "24 Minutes" },
      { id: "B", text: "36 Minutes" },
      { id: "C", text: "45 Minutes" },
      { id: "D", text: "60 Minutes" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "24 Minutes: Underestimated duration.",
      "B": "36 Minutes: Correct! The NCERT micro-teaching cycle: Teach (6 min) → Feedback (6 min) → Re-plan (12 min) → Re-teach (6 min) → Re-feedback (6 min) = 36 minutes total.",
      "C": "45 Minutes: Standard school lecture length, not micro-teaching.",
      "D": "60 Minutes: Far too long for a scaled-down micro-teaching encounter."
    },
    summaryExplanation: "NCERT Micro-teaching format = 6 + 6 + 12 + 6 + 6 = 36 minutes."
  },
  {
    id: "p1-u2-q4",
    paper: "paper1",
    unitId: "p1-u2",
    unitNumber: 2,
    unitName: "Research Aptitude",
    examSource: "UGC NET Dec 2023",
    question: "Which of the following represents the correct sequential order of phases in Kurt Lewin's Action Research cycle?",
    options: [
      { id: "A", text: "Act → Plan → Observe → Reflect" },
      { id: "B", text: "Plan → Act → Observe → Reflect" },
      { id: "C", text: "Observe → Plan → Act → Reflect" },
      { id: "D", text: "Reflect → Observe → Plan → Act" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Act → Plan: You cannot act effectively before planning.",
      "B": "Plan → Act → Observe → Reflect: Correct! The cyclical spiral of action research: 1. Plan, 2. Act, 3. Observe, 4. Reflect (P-A-O-R).",
      "C": "Observe → Plan: Observation comes during and after the action intervention.",
      "D": "Reflect → Observe: Reflection is the final synthesis step of the cycle."
    },
    summaryExplanation: "Action Research Spiral: Plan → Act → Observe → Reflect (P-A-O-R)."
  },
  {
    id: "p1-u2-q5",
    paper: "paper1",
    unitId: "p1-u2",
    unitNumber: 2,
    unitName: "Research Aptitude",
    examSource: "MH-SET 2023",
    question: "When a researcher locates participants in a hard-to-reach or hidden population (e.g., rare disease patients or drug addicts) by asking early respondents to identify other acquaintances, which non-probability sampling technique is being used?",
    options: [
      { id: "A", text: "Quota Sampling" },
      { id: "B", text: "Snowball (Chain-Referral) Sampling" },
      { id: "C", text: "Stratified Random Sampling" },
      { id: "D", text: "Systematic Sampling" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Quota Sampling: Selecting respondents until specified demographic quotas (e.g. 50 males, 50 females) are filled.",
      "B": "Snowball Sampling: Correct! Chain-referral sampling where initial informants nominate additional members of the target group.",
      "C": "Stratified Random: Probability sampling dividing population into homogeneous strata and sampling proportionally.",
      "D": "Systematic Sampling: Probability sampling selecting every kth element from an ordered list."
    },
    summaryExplanation: "Snowball sampling relies on chain referrals to access hidden or hard-to-reach populations."
  },
  {
    id: "p1-u4-q4",
    paper: "paper1",
    unitId: "p1-u4",
    unitNumber: 4,
    unitName: "Communication",
    examSource: "UGC NET June 2024",
    question: "In non-verbal communication studies, the study of interpersonal physical distance, personal space, and territorial boundaries is known as:",
    options: [
      { id: "A", text: "Kinesics" },
      { id: "B", text: "Proxemics" },
      { id: "C", text: "Haptics" },
      { id: "D", text: "Chronemics" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Kinesics: The study of body movements, gestures, facial expressions, and posture (Ray Birdwhistell).",
      "B": "Proxemics: Correct! The study of spatial separation, personal space, and environmental distance in communication (Edward T. Hall).",
      "C": "Haptics: The study of communication through touch (handshakes, pats on the back).",
      "D": "Chronemics: The study of the use and perception of time in non-verbal communication."
    },
    summaryExplanation: "Proxemics = Space; Kinesics = Body Language; Haptics = Touch; Chronemics = Time."
  },
  {
    id: "p1-u6-q3",
    paper: "paper1",
    unitId: "p1-u6",
    unitNumber: 6,
    unitName: "Logical Reasoning",
    examSource: "MH-SET 2024",
    question: "In classical Nyaya Indian logic, what type of fallacy of the middle term (Hetvabhasa) occurs when the reason (Hetu) is irregular, erratic, or not unexceptionally related to the major term (Sadhya)?",
    options: [
      { id: "A", text: "Savyabhichara (Inconstant Reason)" },
      { id: "B", text: "Viruddha (Contradictory Reason)" },
      { id: "C", text: "Satpratipaksha (Inferentially Counterbalanced)" },
      { id: "D", text: "Asiddha (Unproved Reason)" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Savyabhichara: Correct! Fallacy of irregular/inconstant middle term (e.g., 'All bipeds are rational; swans are bipeds; therefore swans are rational'). The middle term wanders and leads to wrong conclusions.",
      "B": "Viruddha: The middle term directly disproves the very major term it was supposed to prove (e.g. 'Sound is eternal, because it is produced').",
      "C": "Satpratipaksha: The middle term is countered by another equally strong valid reason establishing the opposite conclusion.",
      "D": "Asiddha: The reason is unproved, unestablished, or non-existent in the subject (e.g., 'Sky-lotus is fragrant')."
    },
    summaryExplanation: "Savyabhichara = Inconstant/Irregular middle; Viruddha = Contradictory middle; Asiddha = Unproven middle."
  },
  {
    id: "p1-u8-q3",
    paper: "paper1",
    unitId: "p1-u8",
    unitNumber: 8,
    unitName: "Information and Communication Technology (ICT)",
    examSource: "UGC NET Dec 2023",
    question: "How many bits are used in an IPv6 (Internet Protocol Version 6) address compared to an IPv4 address?",
    options: [
      { id: "A", text: "IPv4 uses 16 bits; IPv6 uses 64 bits" },
      { id: "B", text: "IPv4 uses 32 bits; IPv6 uses 128 bits" },
      { id: "C", text: "IPv4 uses 64 bits; IPv6 uses 256 bits" },
      { id: "D", text: "IPv4 uses 128 bits; IPv6 uses 512 bits" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "16 and 64 bits: Incorrect bit lengths.",
      "B": "32 bits and 128 bits: Correct! IPv4 addresses are 32-bit binary numbers (4 octets in dotted decimal format: 192.168.1.1). IPv6 addresses are 128-bit hexadecimal numbers (8 groups of 16-bit hex values separated by colons).",
      "C": "64 and 256: Incorrect.",
      "D": "128 and 512: Incorrect."
    },
    summaryExplanation: "IPv4 = 32 bits (approx 4.3 billion addresses); IPv6 = 128 bits (3.4 × 10^38 addresses)."
  },
  {
    id: "p1-u9-q3",
    paper: "paper1",
    unitId: "p1-u9",
    unitNumber: 9,
    unitName: "People, Development and Environment",
    examSource: "UGC NET June 2024",
    question: "Where is the permanent global headquarters of the International Solar Alliance (ISA), an intergovernmental treaty-based organization initiated by India and France, located?",
    options: [
      { id: "A", text: "Paris, France" },
      { id: "B", text: "Gurugram (Haryana), India" },
      { id: "C", text: "Geneva, Switzerland" },
      { id: "D", text: "Nairobi, Kenya" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Paris: ISA was unveiled at COP21 in Paris, but its permanent headquarters is in India.",
      "B": "Gurugram, India: Correct! The National Institute of Solar Energy (NISE) campus in Gurugram, Haryana hosts the global headquarters of ISA.",
      "C": "Geneva: Hosts WHO and WTO, not ISA.",
      "D": "Nairobi: Hosts UNEP (United Nations Environment Programme)."
    },
    summaryExplanation: "International Solar Alliance (ISA) is the first treaty-based international intergovernmental organization headquartered in India (Gurugram)."
  },
  {
    id: "p1-u10-q3",
    paper: "paper1",
    unitId: "p1-u10",
    unitNumber: 10,
    unitName: "Higher Education System",
    examSource: "MH-SET 2024",
    question: "Which historic Indian Education Commission (1964-66), headed by Dr. D.S. Kothari, famously stated that 'The destiny of India is now being shaped in her classrooms' and recommended the 10+2+3 educational structure?",
    options: [
      { id: "A", text: "Radhakrishnan University Education Commission (1948-49)" },
      { id: "B", text: "Mudaliar Secondary Education Commission (1952-53)" },
      { id: "C", text: "Kothari Education Commission (1964-66)" },
      { id: "D", text: "National Knowledge Commission (2005)" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "Radhakrishnan Commission: First post-independence commission on higher education; recommended establishing UGC and rural universities.",
      "B": "Mudaliar Commission: Focused specifically on reforming Secondary Education and introducing diversified streams.",
      "C": "Kothari Commission: Correct! Appointed in 1964 under Dr. D.S. Kothari; formulated the 10+2+3 pattern, recommended spending 6% of GDP on education, and common school system.",
      "D": "National Knowledge Commission: Headed by Sam Pitroda in 2005 to transform India into a knowledge-based society."
    },
    summaryExplanation: "Kothari Commission (1964-66) established the 10+2+3 structure and the landmark quote on classrooms shaping national destiny."
  }
];

