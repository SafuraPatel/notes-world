/**
 * SYLLABUS DATASET - Notes World
 * Official UGC NET & MH-SET Syllabus for Paper 1 and Paper 2 (Computer Science)
 * Structured with non-repeating granular subtopics for checkbox progress tracking,
 * plus curated "Must Cover" out-of-syllabus high-yield topics frequently tested in exams.
 */

export const paper1Syllabus = {
  paperTitle: "Paper 1: General Paper on Teaching & Research Aptitude",
  paperCode: "GENERAL-00",
  units: [
    {
      id: "p1-u1",
      unitNumber: 1,
      name: "Teaching Aptitude",
      icon: "🎓",
      subtopics: [
        { id: "p1-u1-s1", title: "Teaching: Nature, Objectives, Characteristics & Basic Requirements", keyConcepts: "Bipolar & triadic process, independent/dependent variables, basic requirements" },
        { id: "p1-u1-s2", title: "Levels of Teaching: Memory, Understanding & Reflective Levels", keyConcepts: "Herbart (Memory), Morrison (Understanding), Hunt (Reflective)" },
        { id: "p1-u1-s3", title: "Learner's Characteristics: Adolescent & Adult Learners", keyConcepts: "Academic, social, emotional & cognitive traits; Andragogy vs Pedagogy" },
        { id: "p1-u1-s4", title: "Factors Affecting Teaching Related to Teacher, Learner, Support & Environment", keyConcepts: "Teacher expectancy (Pygmalion effect), motivation, instructional facilities" },
        { id: "p1-u1-s5", title: "Methods of Teaching in Higher Learning: Teacher-Centred vs Learner-Centred", keyConcepts: "Lecture, demonstration, heuristic, project method, Dalton plan, flipped classroom" },
        { id: "p1-u1-s6", title: "Offline vs Online Methods: SWAYAM, SWAYAM PRABHA, MOOCs", keyConcepts: "4 quadrants of MOOCs, 40 DTH channels, national coordinators" },
        { id: "p1-u1-s7", title: "Teaching Support System: Traditional, Modern & ICT Based", keyConcepts: "Audio-visual aids, interactive whiteboards, LMS platforms" },
        { id: "p1-u1-s8", title: "Evaluation Systems: Types & Innovations in Evaluation", keyConcepts: "Formative, summative, diagnostic, norm-referenced, criterion-referenced" },
        { id: "p1-u1-s9", title: "Choice Based Credit System (CBCS) & Computer Based Testing (CBT)", keyConcepts: "Core, elective, ability enhancement courses; grading scale; CBT security" }
      ]
    },
    {
      id: "p1-u2",
      unitNumber: 2,
      name: "Research Aptitude",
      icon: "🔬",
      subtopics: [
        { id: "p1-u2-s1", title: "Research: Meaning, Types & Characteristics", keyConcepts: "Fundamental, applied, action, empirical, exploratory, longitudinal vs cross-sectional" },
        { id: "p1-u2-s2", title: "Positivism & Post-Positivistic Approach to Research", keyConcepts: "Quantitative empiricism (Auguste Comte) vs Interpretivism / Constructivism" },
        { id: "p1-u2-s3", title: "Methods of Research: Experimental, Descriptive & Historical", keyConcepts: "True vs quasi-experiment, variables control, ex-post facto research" },
        { id: "p1-u2-s4", title: "Qualitative & Quantitative Research Approaches", keyConcepts: "Grounded theory, ethnography, phenomenology, triangulation" },
        { id: "p1-u2-s5", title: "Steps of Research: Problem Formulation to Report Writing", keyConcepts: "Literature review, hypothesis formulation, research design, data collection" },
        { id: "p1-u2-s6", title: "Thesis & Article Writing: Format & Referencing Styles", keyConcepts: "APA 7th, MLA 9th, Chicago, Harvard styles; citation rules" },
        { id: "p1-u2-s7", title: "Application of ICT in Research", keyConcepts: "SPSS, R, NVivo, Zotero, Mendeley, Shodhganga, Shodhgangotri" },
        { id: "p1-u2-s8", title: "Research Ethics & Plagiarism Levels (UGC 2018 Regulations)", keyConcepts: "Level 0 (<10%), Level 1 (10-40%), Level 2 (40-60%), Level 3 (>60%); penalties" }
      ]
    },
    {
      id: "p1-u3",
      unitNumber: 3,
      name: "Comprehension",
      icon: "📖",
      subtopics: [
        { id: "p1-u3-s1", title: "Reading Comprehension Techniques & Speed Reading", keyConcepts: "Skimming, scanning, SQ3R technique (Survey, Question, Read, Recite, Review)" },
        { id: "p1-u3-s2", title: "Identifying Central Theme, Tone & Author's Perspective", keyConcepts: "Objective, critical, satirical, didactic, analytical tones" },
        { id: "p1-u3-s3", title: "Contextual Vocabulary & Inference Drawing", keyConcepts: "Deducing unstated premises, context clues, fact vs opinion differentiation" }
      ]
    },
    {
      id: "p1-u4",
      unitNumber: 4,
      name: "Communication",
      icon: "💬",
      subtopics: [
        { id: "p1-u4-s1", title: "Communication: Meaning, Types & Characteristics", keyConcepts: "Intrapersonal, interpersonal, group, mass communication; 7 Cs of communication" },
        { id: "p1-u4-s2", title: "Effective Communication: Verbal & Non-Verbal", keyConcepts: "Kinesics (body language), Proxemics (space), Chronemics (time), Haptics, Paralanguage" },
        { id: "p1-u4-s3", title: "Inter-Cultural & Group Communications in Classrooms", keyConcepts: "High-context vs low-context cultures, teacher-student communication dynamics" },
        { id: "p1-u4-s4", title: "Barriers to Effective Communication", keyConcepts: "Semantic, psychological, organizational, physical & cultural barriers; entropy" },
        { id: "p1-u4-s5", title: "Mass-Media & Society", keyConcepts: "Agenda-setting theory, hypodermic needle, uses & gratifications, digital media effects" }
      ]
    },
    {
      id: "p1-u5",
      unitNumber: 5,
      name: "Mathematical Reasoning and Aptitude",
      icon: "🔢",
      subtopics: [
        { id: "p1-u5-s1", title: "Types of Reasoning: Number & Letter Series", keyConcepts: "Difference series, geometric series, alphanumeric series, missing terms" },
        { id: "p1-u5-s2", title: "Codes & Relationships (Blood Relations & Direction Sense)", keyConcepts: "Caesar cipher, substitution codes, family tree mapping, 8-point compass" },
        { id: "p1-u5-s3", title: "Fraction, Ratio & Proportion", keyConcepts: "Cross-multiplication, compound ratio, inverse proportion, mixture-alligation" },
        { id: "p1-u5-s4", title: "Percentage & Profit and Loss", keyConcepts: "Successive percentage, markup, discount, marked price vs cost price" },
        { id: "p1-u5-s5", title: "Simple & Compound Interest", keyConcepts: "Annual vs half-yearly compounding, difference between CI and SI for 2 & 3 years" },
        { id: "p1-u5-s6", title: "Time & Distance and Time & Work", keyConcepts: "Relative speed, trains crossing poles/platforms, man-days formula, pipes & cisterns" },
        { id: "p1-u5-s7", title: "Averages & Weighted Means", keyConcepts: "Arithmetic mean, combined mean, deviation method for large datasets" }
      ]
    },
    {
      id: "p1-u6",
      unitNumber: 6,
      name: "Logical Reasoning",
      icon: "🧠",
      subtopics: [
        { id: "p1-u6-s1", title: "Structure of Categorical Propositions & Standard Forms (A, E, I, O)", keyConcepts: "Universal Affirmative (A), Universal Negative (E), Particular (I, O); distribution" },
        { id: "p1-u6-s2", title: "Classical Square of Opposition", keyConcepts: "Contradictory, Contrary, Subcontrary, Subalternation rules and truth valuations" },
        { id: "p1-u6-s3", title: "Mood and Figure of Categorical Syllogisms", keyConcepts: "Major, minor, middle term; 4 figures; valid moods (e.g. Barbara, Celarent)" },
        { id: "p1-u6-s4", title: "Formal & Informal Fallacies", keyConcepts: "Ad Hominem, Straw Man, Slippery Slope, Red Herring, Fallacy of Equivocation" },
        { id: "p1-u6-s5", title: "Deductive vs Inductive Reasoning & Analogies", keyConcepts: "Certainty vs probability, soundness, cogency, structural analogies" },
        { id: "p1-u6-s6", title: "Venn Diagrams for Syllogistic Testing", keyConcepts: "Two and three-circle intersecting Venn testing for validity" },
        { id: "p1-u6-s7", title: "Pramanas (Indian Logic - Means of Knowledge)", keyConcepts: "Pratyaksha (Perception), Anumana (Inference), Upamana (Comparison), Shabda (Verbal)" },
        { id: "p1-u6-s8", title: "Arthapatti (Postulation) & Anupalabdhi (Non-Apprehension)", keyConcepts: "Devadatta fat case (Arthapatti), perception of absence (Anupalabdhi)" },
        { id: "p1-u6-s9", title: "Structure of Anumana: Paksha, Sadhya, Hetu & Vyapti", keyConcepts: "5 steps of Nyaya Syllogism (Pratijna, Hetu, Udaharana, Upanaya, Nigamana)" },
        { id: "p1-u6-s10", title: "Hetvabhasa (Fallacies of Inference)", keyConcepts: "Savyabhichara, Viruddha, Satpratipaksha, Asiddha, Badhita" }
      ]
    },
    {
      id: "p1-u7",
      unitNumber: 7,
      name: "Data Interpretation",
      icon: "📊",
      subtopics: [
        { id: "p1-u7-s1", title: "Sources, Acquisition & Classification of Data", keyConcepts: "Primary vs secondary data, qualitative vs quantitative, discrete vs continuous" },
        { id: "p1-u7-s2", title: "Tabular Charts & Missing Data Interpretation", keyConcepts: "Row-column cross-analysis, percentage change, cumulative totals" },
        { id: "p1-u7-s3", title: "Graphical Representation: Bar Charts & Histograms", keyConcepts: "Single/multiple bar charts, grouped frequencies, comparison across periods" },
        { id: "p1-u7-s4", title: "Pie Charts & Degrees-to-Percentage Conversion", keyConcepts: "360° = 100%, sector angle calculation, multi-layer pie charts" },
        { id: "p1-u7-s5", title: "Line Charts & Trend Analysis", keyConcepts: "Growth rate estimation, fluctuations, projections" },
        { id: "p1-u7-s6", title: "Data Governance & Ethical Handling of Big Data", keyConcepts: "Data privacy, security, statistical misrepresentation avoidance" }
      ]
    },
    {
      id: "p1-u8",
      unitNumber: 8,
      name: "Information and Communication Technology (ICT)",
      icon: "💻",
      subtopics: [
        { id: "p1-u8-s1", title: "ICT: General Abbreviations & Terminology", keyConcepts: "RAM, ROM, SSD, DNS, URL, IP, MAC, VPN, OCR, ASCII, Unicode" },
        { id: "p1-u8-s2", title: "Data Storage & Memory Units Hierarchy", keyConcepts: "Bit, Byte, KB, MB, GB, TB, PB, EB, ZB, YB (Powers of 2: 2^10, 2^20...)" },
        { id: "p1-u8-s3", title: "Basics of Internet, Intranet & Extranet", keyConcepts: "Protocols: HTTP/HTTPS, FTP, SMTP, POP3, IMAP; IPv4 vs IPv6" },
        { id: "p1-u8-s4", title: "Email Systems & Protocols (To, Cc, Bcc, Spam, Phishing)", keyConcepts: "Blind Carbon Copy privacy, phishing vs pharming, ransomware, spyware" },
        { id: "p1-u8-s5", title: "Audio, Video-Conferencing & Cloud Collaboration", keyConcepts: "VoIP, WebRTC, Zoom, Google Meet, synchronous vs asynchronous learning" },
        { id: "p1-u8-s6", title: "Digital Initiatives in Higher Education", keyConcepts: "SWAYAM, SWAYAM PRABHA, NAD, Digilocker, NDL, e-ShodhSindhu, e-Yantra, FOSSEE" },
        { id: "p1-u8-s7", title: "ICT and Governance (e-Governance Initiatives)", keyConcepts: "G2C, G2B, G2G, G2E models; Digital India pillars; UMANG, DigiLocker" }
      ]
    },
    {
      id: "p1-u9",
      unitNumber: 9,
      name: "People, Development and Environment",
      icon: "🌱",
      subtopics: [
        { id: "p1-u9-s1", title: "Development & Environment: MDGs vs SDGs", keyConcepts: "8 MDGs (2000-2015) vs 17 SDGs (2015-2030, 169 targets)" },
        { id: "p1-u9-s2", title: "Human & Environment Interaction: Anthropogenic Impact", keyConcepts: "Deforestation, urbanization, carbon footprint, ecological overshoot" },
        { id: "p1-u9-s3", title: "Environmental Issues: Air, Water, Soil & Noise Pollution", keyConcepts: "Primary vs secondary pollutants (O3, PAN), eutrophication, BOD, COD, decibel limits" },
        { id: "p1-u9-s4", title: "Waste Management: Solid, Liquid, Biomedical, Hazardous & E-Waste", keyConcepts: "E-waste rules 2022, 5 R's (Refuse, Reduce, Reuse, Repurpose, Recycle)" },
        { id: "p1-u9-s5", title: "Climate Change & Greenhouse Gas Emissions", keyConcepts: "CO2, CH4, N2O, CFCs; Global Warming Potential (GWP); Ocean acidification" },
        { id: "p1-u9-s6", title: "Renewable Energy Resources: Solar, Wind, Hydro, Biomass, Geothermal", keyConcepts: "India's targets: 500 GW non-fossil by 2030, ISA (International Solar Alliance)" },
        { id: "p1-u9-s7", title: "Natural Hazards, Disasters & Mitigation Strategies", keyConcepts: "Earthquakes (Richter vs Mercalli), tsunamis, NDMA guidelines, Sendai Framework" },
        { id: "p1-u9-s8", title: "Environmental Protection Act (1986) & National Action Plan on Climate Change", keyConcepts: "EPA 1986 provisions; 8 missions under NAPCC (Solar, Water, Green India, etc.)" },
        { id: "p1-u9-s9", title: "International Agreements: Montreal, Rio, Kyoto, Paris & Kigali", keyConcepts: "Montreal (Ozone), Kyoto (Annex I/II gases), Paris (1.5°C goal), Kigali amendment" }
      ]
    },
    {
      id: "p1-u10",
      unitNumber: 10,
      name: "Higher Education System",
      icon: "🏛️",
      subtopics: [
        { id: "p1-u10-s1", title: "Institutions of Higher Learning in Ancient India", keyConcepts: "Taxila, Nalanda, Vikramashila, Vallabhi, Odantapuri; Gurukul & Buddhist systems" },
        { id: "p1-u10-s2", title: "Evolution of Higher Learning in Pre- & Post-Independence India", keyConcepts: "Macaulay's Minute (1835), Wood's Despatch (1854), Radhakrishnan Commission (1948)" },
        { id: "p1-u10-s3", title: "Key Commissions: Mudaliar, Kothari, Sam Pitroda & Yashpal", keyConcepts: "Kothari (10+2+3, 6% GDP target), National Knowledge Commission (NKC 2005)" },
        { id: "p1-u10-s4", title: "National Education Policy (NEP 2020) Architecture", keyConcepts: "5+3+3+4, GER 50% by 2035, ABC (Academic Bank of Credits), HECI 4 verticals" },
        { id: "p1-u10-s5", title: "Oriental, Conventional & Non-Conventional Learning in India", keyConcepts: "Open and Distance Learning (ODL), IGNOU, state open universities, SWAYAM" },
        { id: "p1-u10-s6", title: "Professional, Technical & Skill-Based Education", keyConcepts: "AICTE, NCTE, ICAR, Bar Council, Medical Commission; NSQF 10 levels" },
        { id: "p1-u10-s7", title: "Value Education & Environmental Education", keyConcepts: "Inculcation of human values, ethics, constitutional values; UNESCO directives" },
        { id: "p1-u10-s8", title: "Governance, Regulatory Bodies & Quality Assurance (UGC, NAAC, NIRF)", keyConcepts: "UGC 2F/12B, NAAC 7 criteria and grading cycles, NIRF 5 parameters" }
      ]
    }
  ],
  mustCover: [
    {
      id: "p1-mc-1",
      title: "NEP 2020 Concrete Numerical Targets & 4 HECI Verticals",
      whyImportant: "Guaranteed question in every recent cycle. Tests exact acronyms and target years.",
      concepts: "GER 50% by 2035; 100% Gross Enrolment in school education by 2030; 4 pillars under HECI: NHERC (regulation), NAC (accreditation), HEGC (funding), GEC (standard-setting); PARAKH national assessment centre."
    },
    {
      id: "p1-mc-2",
      title: "Ancient Universities Specific Strengths & Chinese Travelers",
      whyImportant: "Frequent matching questions linking universities with scholars & Chinese travelers.",
      concepts: "Taxila (Medicine, Chanakya, Panini, Jivaka); Nalanda (Mahayana Buddhism, Xuanzang/Hiuen Tsang, Yijing; destroyed by Bakhtiyar Khilji); Vikramashila (Tantric Buddhism, Atisa Dipankara); Vallabhi (Hinayana Buddhism, administration)."
    },
    {
      id: "p1-mc-3",
      title: "SWAYAM Coordinators & SWAYAM PRABHA DTH Channel Numbers",
      whyImportant: "UGC NET specifically tests which national coordinator manages which level of education.",
      concepts: "NPTEL (Engineering), CEC (Undergraduate), UGC (Non-technical PG), NCERT & NIOS (School), IGNOU (Out of school), IIMB (Management), NITTTR (Teacher training); 40 DTH channels telecasting 24x7 via GSAT-15 satellite."
    },
    {
      id: "p1-mc-4",
      title: "Chronological Sequence of Educational Committees (1948 - 2020)",
      whyImportant: "Chronological ordering questions appear in almost every shift.",
      concepts: "Radhakrishnan (1948-49) → Mudaliar (1952-53) → Kothari (1964-66) → National Policy on Education (1968) → NPE (1986) → Acharya Ramamurti (1990) → Yashpal (1993 'Learning without Burden') → NKC Sam Pitroda (2005) → Yashpal Committee (2009 'Renovation of Higher Education') → TSR Subramanian (2016) → Kasturirangan (2019/2020)."
    },
    {
      id: "p1-mc-5",
      title: "Air Quality Index (AQI) 8 Pollutants & Standard Breakpoints",
      whyImportant: "Environmental science questions regularly ask which pollutant is NOT included in National AQI.",
      concepts: "8 Pollutants: PM10, PM2.5, NO2, SO2, CO (8-hr), O3 (8-hr), NH3, Pb. Note: CO2 is NOT part of AQI! Breakpoints: 0-50 Good, 51-100 Satisfactory, 101-200 Moderate, 201-300 Poor, 301-400 Very Poor, 401-500 Severe."
    },
    {
      id: "p1-mc-6",
      title: "Nyaya Hetvabhasa 5 Fallacies with Real-World Tricky Examples",
      whyImportant: "Paper 1 Logical Reasoning tests distinguishing subtle fallacies with classical Sanskrit examples.",
      concepts: "1. Savyabhichara (Irregular middle - sound is eternal because it is knowable); 2. Viruddha (Contradictory middle - sound is eternal because it is produced); 3. Satpratipaksha (Counterbalanced middle - two opposite inferences with equal force); 4. Asiddha (Unproved middle - Ashrayasiddha: sky-lotus has fragrance); 5. Badhita (Non-inferentially contradicted - fire is cold because it is a substance)."
    },
    {
      id: "p1-mc-7",
      title: "Number Systems: 2's Complement & Fractional Binary Conversion in ICT",
      whyImportant: "Paper 1 Math/ICT regularly features 8-bit two's complement and binary decimal fractions.",
      concepts: "2's complement of negative number = Invert bits (1's complement) + 1. Range of n-bit signed integer = -2^(n-1) to +2^(n-1) - 1. Converting decimal fraction (e.g. 0.625) by successive multiplication by 2."
    },
    {
      id: "p1-mc-8",
      title: "Convention vs Protocol vs Accord in Environmental Law",
      whyImportant: "Examiners test the exact legally binding nature of global treaties.",
      concepts: "Ramsar (1971 - Wetlands of International Importance, Montreux Record); Montreal Protocol (1987 - ONLY universally ratified UN treaty, phased out CFCs); Kyoto Protocol (1997 - legally binding emission cuts, Clean Development Mechanism); Paris Agreement (2015 - NDCs, legally binding overall framework but voluntary national pledges)."
    }
  ]
};

export const paper2Syllabus = {
  paperTitle: "Paper 2: Computer Science and Applications",
  paperCode: "CS-87",
  units: [
    {
      id: "p2-u1",
      unitNumber: 1,
      name: "Discrete Structures and Optimization",
      icon: "📐",
      subtopics: [
        { id: "p2-u1-s1", title: "Mathematical Logic: Propositions, Predicates & Normal Forms", keyConcepts: "CNF, DNF, tautology, contradiction, valid inference rules, resolution principle" },
        { id: "p2-u1-s2", title: "Set Theory, Relations & Functions", keyConcepts: "Equivalence relations, partial ordering, posets, Hasse diagrams, lattices, bijective functions" },
        { id: "p2-u1-s3", title: "Group Theory & Algebraic Structures", keyConcepts: "Semigroups, monoids, groups, abelian groups, cyclic groups, Lagrange's theorem" },
        { id: "p2-u1-s4", title: "Combinatorics & Generating Functions", keyConcepts: "Pigeonhole principle, permutations/combinations, recurrence relations, inclusion-exclusion" },
        { id: "p2-u1-s5", title: "Graph Theory: Paths, Cycles, Trees & Planarity", keyConcepts: "Eulerian vs Hamiltonian graphs, chromatic number, planar graphs (Euler's formula: R = E - V + 2)" },
        { id: "p2-u1-s6", title: "Linear Programming & Optimization", keyConcepts: "Simplex method, dual problem formulation, duality theorem, transportation and assignment models" }
      ]
    },
    {
      id: "p2-u2",
      unitNumber: 2,
      name: "Computer System Architecture",
      icon: "⚙️",
      subtopics: [
        { id: "p2-u2-s1", title: "Digital Logic: Boolean Algebra & Combinational Circuits", keyConcepts: "K-maps, multiplexers, decoders, adders/subtracters, PLA, PAL" },
        { id: "p2-u2-s2", title: "Sequential Circuits: Flip-Flops, Counters & Registers", keyConcepts: "SR, JK, D, T flip-flops, race-around condition, synchronous vs asynchronous counters" },
        { id: "p2-u2-s3", title: "Data Representation: Fixed Point, IEEE 754 Floating Point", keyConcepts: "Single precision (1+8+23) & double precision (1+11+52), biased exponent, denormals" },
        { id: "p2-u2-s4", title: "Basic Computer Organization & Control Unit Design", keyConcepts: "Hardwired vs microprogrammed control, microinstruction sequencing, horizontal vs vertical" },
        { id: "p2-u2-s5", title: "Instruction Formats & Addressing Modes", keyConcepts: "Zero, one, two-address instructions; direct, indirect, register, indexed, base-register modes" },
        { id: "p2-u2-s6", title: "Pipelining, Hazards & Speedup Calculation", keyConcepts: "Structural, data (RAW, WAR, WAW), control hazards; Speedup S = (k * n) / (k + n - 1)" },
        { id: "p2-u2-s7", title: "Memory Hierarchy & Cache Memory Mapping", keyConcepts: "Direct, fully associative, set-associative mapping; hit ratio, write-through vs write-back" },
        { id: "p2-u2-s8", title: "Input-Output Organization & Interrupts", keyConcepts: "Programmed I/O, interrupt-driven I/O, DMA controllers, daisy chaining" }
      ]
    },
    {
      id: "p2-u3",
      unitNumber: 3,
      name: "Programming Languages and Computer Graphics",
      icon: "🎨",
      subtopics: [
        { id: "p2-u3-s1", title: "Language Paradigms & Syntax/Semantics", keyConcepts: "Imperative, functional, logic, object-oriented; parameter passing: call by value, reference, name" },
        { id: "p2-u3-s2", title: "C & C++: Pointers, Memory Management & OOP", keyConcepts: "Pointer arithmetic, dynamic allocation (malloc/free, new/delete), virtual functions, polymorphism" },
        { id: "p2-u3-s3", title: "2D & 3D Affine Transformations", keyConcepts: "Translation, rotation, scaling, reflection, shearing; homogenous coordinate matrices" },
        { id: "p2-u3-s4", title: "Line & Polygon Clipping Algorithms", keyConcepts: "Cohen-Sutherland (outcodes TBRL), Liang-Barsky, Sutherland-Hodgman polygon clipping" },
        { id: "p2-u3-s5", title: "Line Drawing Algorithms (DDA & Bresenham)", keyConcepts: "Bresenham's decision parameter d = 2Δy - Δx; midpoint circle algorithm" },
        { id: "p2-u3-s6", title: "Projections, Hidden Surface Removal & Shading Models", keyConcepts: "Parallel vs perspective projection; Z-buffer, A-buffer; Gouraud vs Phong shading" }
      ]
    },
    {
      id: "p2-u4",
      unitNumber: 4,
      name: "Database Management Systems",
      icon: "🗄️",
      subtopics: [
        { id: "p2-u4-s1", title: "ER Modeling & Relational Model", keyConcepts: "Entities, weak entities, cardinalities, relational algebra operators (Select, Project, Join, Division)" },
        { id: "p2-u4-s2", title: "SQL: DDL, DML, DCL & Complex Queries", keyConcepts: "Nested queries, correlated subqueries, aggregate functions with GROUP BY and HAVING" },
        { id: "p2-u4-s3", title: "Normalization: Functional Dependencies & Normal Forms", keyConcepts: "1NF, 2NF (no partial deps), 3NF (LHS superkey or RHS prime), BCNF (LHS superkey), 4NF, 5NF" },
        { id: "p2-u4-s4", title: "Decomposition: Lossless Join & Dependency Preservation", keyConcepts: "Testing R1 ∩ R2 -> R1 or R2; preserving FDs across schemas" },
        { id: "p2-u4-s5", title: "Transactions & ACID Properties", keyConcepts: "Atomicity, Consistency, Isolation, Durability; schedules, conflict vs view serializability" },
        { id: "p2-u4-s6", title: "Concurrency Control Protocols", keyConcepts: "2PL (Growing/Shrinking phases, strict 2PL), timestamp ordering (Thomas Write Rule)" },
        { id: "p2-u4-s7", title: "Deadlock Handling & Crash Recovery", keyConcepts: "Wait-die vs wound-wait schemes; ARIES, write-ahead logging (WAL), check-pointing" },
        { id: "p2-u4-s8", title: "Indexing & File Structures: B-Trees & B+ Trees", keyConcepts: "Primary, clustered, secondary indices; B+ tree search, insertion, minimum and maximum keys" }
      ]
    },
    {
      id: "p2-u5",
      unitNumber: 5,
      name: "System Software and Operating System",
      icon: "🖥️",
      subtopics: [
        { id: "p2-u5-s1", title: "System Software: Assemblers, Linkers & Loaders", keyConcepts: "One-pass vs two-pass assemblers, relocation, absolute vs relocating loaders, dynamic linking" },
        { id: "p2-u5-s2", title: "Process Management & CPU Scheduling Algorithms", keyConcepts: "FCFS, SJF (optimal waiting time), SRTF, Round Robin, Priority; Gantt charts & turnaround times" },
        { id: "p2-u5-s3", title: "Process Synchronization, Critical Section & Semaphores", keyConcepts: "Peterson's solution, counting vs binary semaphores, producer-consumer, reader-writer, dining philosophers" },
        { id: "p2-u5-s4", title: "Deadlocks: 4 Conditions, Prevention, Avoidance & Recovery", keyConcepts: "Mutual exclusion, hold & wait, no preemption, circular wait; Banker's Safety Algorithm" },
        { id: "p2-u5-s5", title: "Memory Management: Paging & Segmentation", keyConcepts: "Page table, TLB hit ratio, Effective Memory Access Time (EMAT), internal vs external fragmentation" },
        { id: "p2-u5-s6", title: "Virtual Memory & Page Replacement Algorithms", keyConcepts: "Demand paging, FIFO, LRU, Optimal; Belady's Anomaly (FIFO suffers, LRU/Optimal do not)" },
        { id: "p2-u5-s7", title: "Disk Scheduling Algorithms & Storage Structures", keyConcepts: "FCFS, SSTF, SCAN (elevator), C-SCAN, LOOK, C-LOOK; rotational latency calculations" },
        { id: "p2-u5-s8", title: "RAID Architecture Levels", keyConcepts: "RAID 0 (striping), RAID 1 (mirroring), RAID 5 (distributed parity), RAID 6 (dual parity)" }
      ]
    },
    {
      id: "p2-u6",
      unitNumber: 6,
      name: "Software Engineering",
      icon: "🏗️",
      subtopics: [
        { id: "p2-u6-s1", title: "Software Process Models", keyConcepts: "Waterfall, Prototype, Spiral (risk analysis), Agile (Scrum, Sprints), DevOps" },
        { id: "p2-u6-s2", title: "Software Requirements Engineering & SRS", keyConcepts: "Functional vs non-functional requirements, IEEE 830 standard, traceability matrix" },
        { id: "p2-u6-s3", title: "Design Principles: Cohesion and Coupling", keyConcepts: "Cohesion (Coincidental < ... < Functional, highest is best); Coupling (Content > ... > Data, lowest is best)" },
        { id: "p2-u6-s4", title: "Software Metrics & Cost Estimation (COCOMO Model)", keyConcepts: "Basic, intermediate, detailed COCOMO; Organic, Semi-detached, Embedded modes" },
        { id: "p2-u6-s5", title: "Testing Strategies: Black-Box vs White-Box Testing", keyConcepts: "BVA, Equivalence Partitioning; Basis path testing, Cyclomatic Complexity V(G) = E - N + 2P" },
        { id: "p2-u6-s6", title: "Software Quality Assurance & Capability Maturity Model (CMMI)", keyConcepts: "5 CMMI levels: Initial, Managed, Defined, Quantitatively Managed, Optimizing" },
        { id: "p2-u6-s7", title: "Software Maintenance Types", keyConcepts: "Corrective (20%), Adaptive (25%), Perfective (50% - largest effort), Preventive (5%)" }
      ]
    },
    {
      id: "p2-u7",
      unitNumber: 7,
      name: "Data Structures and Algorithms",
      icon: "⚡",
      subtopics: [
        { id: "p2-u7-s1", title: "Asymptotic Analysis & Recurrence Relations", keyConcepts: "Big-O, Omega, Theta; Master Theorem, substitution method, recursion tree method" },
        { id: "p2-u7-s2", title: "Linear Data Structures: Stacks, Queues & Linked Lists", keyConcepts: "Infix to postfix conversion, circular queues, doubly linked lists, priority queues" },
        { id: "p2-u7-s3", title: "Trees: Binary Trees, Binary Search Trees & AVL Trees", keyConcepts: "Traversals (Inorder, Preorder, Postorder); AVL balance factor (-1, 0, 1), rotations (LL, RR, LR, RL)" },
        { id: "p2-u7-s4", title: "Heap Data Structures & Priority Queues", keyConcepts: "Max heap, min heap, heapify procedure O(n), heap sort O(n log n)" },
        { id: "p2-u7-s5", title: "Sorting and Searching Algorithms", keyConcepts: "Quicksort (worst O(n^2), best O(n log n)), Mergesort (stable O(n log n)), Counting sort, Binary search" },
        { id: "p2-u7-s6", title: "Graph Algorithms: BFS, DFS, MST & Shortest Paths", keyConcepts: "Prim's vs Kruskal's MST, Dijkstra's (no negative edges), Bellman-Ford, Floyd-Warshall O(V^3)" },
        { id: "p2-u7-s7", title: "Algorithm Design Paradigms: Greedy & Dynamic Programming", keyConcepts: "Fractional knapsack (greedy), 0/1 knapsack (DP), Matrix chain multiplication, LCS" },
        { id: "p2-u7-s8", title: "NP-Completeness: P, NP, NP-Hard & NP-Complete", keyConcepts: "Deterministic vs non-deterministic polynomial time, Cook's theorem (SAT), polynomial reductions" }
      ]
    },
    {
      id: "p2-u8",
      unitNumber: 8,
      name: "Theory of Computation and Compilers",
      icon: "🔤",
      subtopics: [
        { id: "p2-u8-s1", title: "Finite Automata: DFA, NFA & Regular Expressions", keyConcepts: "Equivalence of DFA and NFA, subset construction, state minimization (Myhill-Nerode)" },
        { id: "p2-u8-s2", title: "Pumping Lemma & Closure Properties of Regular Languages", keyConcepts: "Pumping lemma for regular sets, closed under union, intersection, complement, star" },
        { id: "p2-u8-s3", title: "Context-Free Grammars (CFG) & Pushdown Automata (PDA)", keyConcepts: "Ambiguity, Chomsky Normal Form (CNF), GNF; DPDA vs NPDA (NPDA strictly more powerful)" },
        { id: "p2-u8-s4", title: "Chomsky Hierarchy of Languages & Automata", keyConcepts: "Type 3 (Regular - FA) ⊂ Type 2 (CFL - PDA) ⊂ Type 1 (CSL - LBA) ⊂ Type 0 (RE - TM)" },
        { id: "p2-u8-s5", title: "Turing Machines & Decidability vs Undecidability", keyConcepts: "Halting problem, Post Correspondence Problem (PCP), Rice's Theorem" },
        { id: "p2-u8-s6", title: "Phases of a Compiler", keyConcepts: "Lexical analysis (tokens), Syntax (parse tree), Semantic (type checking), Intermediate code, Code gen" },
        { id: "p2-u8-s7", title: "Parsing Techniques: Top-Down & Bottom-Up Parsers", keyConcepts: "LL(1) FIRST and FOLLOW sets; LR(0) < SLR(1) < LALR(1) < CLR(1); Shift-Reduce conflicts" },
        { id: "p2-u8-s8", title: "Syntax Directed Translation & Code Optimization", keyConcepts: "Synthesized vs inherited attributes; S-attributed vs L-attributed definitions; DAG, loop unrolling" }
      ]
    },
    {
      id: "p2-u9",
      unitNumber: 9,
      name: "Data Communication and Computer Networks",
      icon: "🌐",
      subtopics: [
        { id: "p2-u9-s1", title: "OSI and TCP/IP Reference Models", keyConcepts: "7 OSI layers functions, protocol data units (Bits, Frames, Packets, Segments, Messages)" },
        { id: "p2-u9-s2", title: "Data Link Layer: Framing, Error Detection & Correction", keyConcepts: "CRC polynomial division, Hamming distance, 1-bit parity, checksum" },
        { id: "p2-u9-s3", title: "Flow Control: Stop-and-Wait, Go-Back-N & Selective Repeat", keyConcepts: "Window sizes: Stop-Wait (1,1), GBN (N, 1), SR (N, N); efficiency calculation η = N / (1 + 2a)" },
        { id: "p2-u9-s4", title: "Medium Access Control: ALOHA, CSMA/CD, CSMA/CA", keyConcepts: "Pure ALOHA (18.4%), Slotted ALOHA (36.8%), Minimum frame length L ≥ 2 * B * Tp in CSMA/CD" },
        { id: "p2-u9-s5", title: "Network Layer: IPv4, IPv6, Subnetting & CIDR", keyConcepts: "Classes A, B, C, D, E; subnet masks, host bits, broadcast address, magic number method" },
        { id: "p2-u9-s6", title: "Routing Protocols: Distance Vector vs Link State", keyConcepts: "Bellman-Ford (count-to-infinity problem, split horizon), Dijkstra's OSPF, BGP" },
        { id: "p2-u9-s7", title: "Transport Layer: TCP vs UDP & Congestion Control", keyConcepts: "3-way handshake (SYN, SYN+ACK, ACK), TCP flags, Slow start, Congestion avoidance, AIMD" },
        { id: "p2-u9-s8", title: "Network Security & Cryptography", keyConcepts: "Symmetric (DES, AES) vs Asymmetric (RSA public/private key), Digital signatures, Firewalls" }
      ]
    },
    {
      id: "p2-u10",
      unitNumber: 10,
      name: "Artificial Intelligence (AI)",
      icon: "🤖",
      subtopics: [
        { id: "p2-u10-s1", title: "AI Approaches & Problem Formulations", keyConcepts: "State space representation, 8-puzzle, water jug problem, production systems" },
        { id: "p2-u10-s2", title: "Uninformed vs Heuristic Search Algorithms", keyConcepts: "BFS, DFS, Uniform Cost Search; Hill Climbing (local maxima), Best-First, A* (admissibility h(n) ≤ h*(n)), AO*" },
        { id: "p2-u10-s3", title: "Adversarial Search: Minimax & Alpha-Beta Pruning", keyConcepts: "Game trees, terminal utility, alpha (best choice for MAX), beta (best choice for MIN) pruning rules" },
        { id: "p2-u10-s4", title: "Knowledge Representation: Logic, Semantic Networks & Frames", keyConcepts: "First Order Predicate Logic (FOPL), Skolemization, Unification algorithm, conceptual dependencies" },
        { id: "p2-u10-s5", title: "Reasoning under Uncertainty: Probabilistic Reasoning & Fuzzy Logic", keyConcepts: "Bayes theorem, Bayesian belief networks; Fuzzy sets: membership functions, union/intersection/complement" },
        { id: "p2-u10-s6", title: "Machine Learning Foundations & Neural Networks", keyConcepts: "Supervised vs unsupervised learning, Perceptron, Backpropagation, Activation functions (Sigmoid, ReLU)" }
      ]
    }
  ],
  mustCover: [
    {
      id: "p2-mc-1",
      title: "Catalan Numbers: Binary Search Trees & Parenthesizations",
      whyImportant: "Appears frequently in GATE / UGC NET. Formula: C_n = (2n)! / ((n+1)! * n!).",
      concepts: "Total unlabelled binary trees with n nodes = C_n. Total distinct labelled BSTs = C_n * n!. For n=3: C_3 = 5 trees. For n=4: C_4 = 14 trees. Also gives valid balanced parentheses combinations."
    },
    {
      id: "p2-mc-2",
      title: "Master Theorem Failure Edge Cases & Akra-Bazzi Intuition",
      whyImportant: "Examiners deliberately test recurrences where standard Master Theorem conditions fail.",
      concepts: "Example: T(n) = 2T(n/2) + n log n. Here f(n) = n log n is NOT polynomially larger than n^(log_b a) = n. Case 1 does NOT apply! Correct complexity is Θ(n log^2 n) via extended Master Theorem. Also T(n) = 2T(n/2) + n / log n cannot be solved by standard Master Theorem."
    },
    {
      id: "p2-mc-3",
      title: "IEEE 754 Floating Point Boundary & Special Value Encodings",
      whyImportant: "Guaranteed question on identifying NaN, Infinity, Denormalized numbers.",
      concepts: "Exp = all 0s, Mantissa = 0 ⟹ ±0. Exp = all 0s, Mantissa ≠ 0 ⟹ Denormalized / Subnormal number (implicit leading bit is 0, not 1!). Exp = all 1s, Mantissa = 0 ⟹ ±Infinity. Exp = all 1s, Mantissa ≠ 0 ⟹ NaN (Not a Number)."
    },
    {
      id: "p2-mc-4",
      title: "Complete Decidability Table Across Chomsky Hierarchy",
      whyImportant: "Classic table-matching question testing decidability of Membership, Emptiness, Equivalence.",
      concepts: "Regular Languages: EVERYTHING is Decidable (Membership, Emptiness, Finiteness, Equivalence). CFL: Membership & Emptiness are DECIDABLE; Equivalence, Ambiguity & Intersection=Empty are UNDECIDABLE. CSL & Recursive: Membership is DECIDABLE; Emptiness & Equivalence are UNDECIDABLE. RE (Turing recognizable): ALL non-trivial properties are UNDECIDABLE (Rice's theorem)."
    },
    {
      id: "p2-mc-5",
      title: "C Struct Alignment, Padding & Pointer Arithmetic Intricacies",
      whyImportant: "High-probability code snippet questions on sizeof and array pointer vs pointer to array.",
      concepts: "Structure member alignment: each member aligned to multiple of its size; total struct size padded to multiple of largest member. `int *p[5]` (Array of 5 pointers) vs `int (*p)[5]` (Pointer to array of 5 ints). `&arr + 1` increments by total byte size of entire array."
    },
    {
      id: "p2-mc-6",
      title: "Subnetting Magic Number & Valid Host Address Calculation",
      whyImportant: "Speed calculation without converting the entire 32 bits to binary.",
      concepts: "Magic Number = 256 - interesting octet value. Subnet blocks always increment by the magic number (e.g. 256 - 224 = 32; subnets are .0, .32, .64, .96...). First usable host = Network + 1; Last usable host = Next subnet - 2; Broadcast = Next subnet - 1."
    },
    {
      id: "p2-mc-7",
      title: "SQL NULL Trirary Logic & Correlated Subquery Traps",
      whyImportant: "Tricky MCQs on `NOT IN (subquery with NULL)` returning empty sets.",
      concepts: "3-valued logic: TRUE, FALSE, UNKNOWN. `NULL = NULL` evaluates to UNKNOWN, not TRUE. `COUNT(*)` counts NULL rows, but `COUNT(col)` ignores NULLs! `WHERE id NOT IN (SELECT id FROM t)` returns 0 rows if any row in subquery is NULL!"
    },
    {
      id: "p2-mc-8",
      title: "B-Tree & B+ Tree Exact Node Capacities & Root Exceptions",
      whyImportant: "Examiners test the minimum number of keys in internal nodes vs root node.",
      concepts: "For a B-Tree of order m: Max keys in any node = m - 1; Max children = m. Min keys in internal nodes = ceil(m/2) - 1; Min children = ceil(m/2). EXCEPTION for Root: Min keys in root = 1; Min children in root = 2 (unless tree has only 1 node). In B+ Trees, leaf nodes are linked as a doubly linked list."
    }
  ]
};
