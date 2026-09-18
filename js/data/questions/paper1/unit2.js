/**
 * PAPER 1 - UNIT 2: RESEARCH APTITUDE (30 Authentic & Expected PYQs)
 * Citations from UGC NET (2018-2024) and All State SET exams (MH-SET, WB-SET, KSET, AP-SET, GSET).
 * Every question has complete 4-option explanations.
 */

export const p1Unit2Questions = [
  {
    id: "p1-u2-q1",
    paper: "paper1",
    unitId: "p1-u2",
    unitNumber: 2,
    unitName: "Research Aptitude",
    examSource: "UGC NET June 2024",
    question: "Which type of research is primarily directed towards the immediate improvement of an existing classroom or institutional practice by the practitioner?",
    options: [
      { id: "A", text: "Fundamental Research" },
      { id: "B", text: "Applied Research" },
      { id: "C", text: "Action Research" },
      { id: "D", text: "Conceptual Research" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "Fundamental Research: Aims at theory formulation and pure expansion of knowledge without immediate localized application.",
      "B": "Applied Research: Aims at finding solutions for practical societal or industrial problems on a broader scale, not necessarily cyclical practitioner interventions.",
      "C": "Action Research: Correct! Propounded by Kurt Lewin; cyclical (Plan → Act → Observe → Reflect) aimed at immediate local problem-solving by practitioners.",
      "D": "Conceptual Research: Involves abstract concepts, philosophical ideas, or reinterpreting existing theories rather than field interventions."
    },
    summaryExplanation: "Action research is characterized by practitioner-led, situational, and cyclical intervention to solve immediate localized problems."
  },
  {
    id: "p1-u2-q2",
    paper: "paper1",
    unitId: "p1-u2",
    unitNumber: 2,
    unitName: "Research Aptitude",
    examSource: "MH-SET 2024",
    question: "What is the correct sequential cycle of steps in Action Research as formulated by Kurt Lewin?",
    options: [
      { id: "A", text: "Act → Plan → Observe → Reflect" },
      { id: "B", text: "Plan → Act → Observe → Reflect" },
      { id: "C", text: "Observe → Plan → Act → Reflect" },
      { id: "D", text: "Reflect → Act → Plan → Observe" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Act → Plan → Observe → Reflect: Incorrect; planning must always precede acting.",
      "B": "Plan → Act → Observe → Reflect: Correct! The famous spiral starts with Planning an intervention, Acting (implementation), Observing outcomes, and Reflecting on results.",
      "C": "Observe → Plan → Act → Reflect: Incorrect; while initial reconnaissance occurs, the standard Lewinian cycle is PAOR.",
      "D": "Reflect → Act → Plan → Observe: Incorrect sequence."
    },
    summaryExplanation: "Kurt Lewin's classic action research spiral consists of: Plan → Act → Observe → Reflect."
  },
  {
    id: "p1-u2-q3",
    paper: "paper1",
    unitId: "p1-u2",
    unitNumber: 2,
    unitName: "Research Aptitude",
    examSource: "UGC NET Dec 2023",
    question: "In hypothesis testing, committing a 'Type I Error' (Alpha Error) corresponds to which of the following decisions?",
    options: [
      { id: "A", text: "Rejecting the Null Hypothesis (H0) when it is actually true" },
      { id: "B", text: "Accepting the Null Hypothesis (H0) when it is actually false" },
      { id: "C", text: "Accepting the Alternative Hypothesis (H1) when it is true" },
      { id: "D", text: "Failing to reject the Null Hypothesis (H0) when it is true" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Rejecting H0 when true: Correct! Type I error (α error) is the false positive of rejecting a valid, true null hypothesis.",
      "B": "Accepting H0 when false: This defines a Type II error (Beta error), which is a false negative.",
      "C": "Accepting H1 when true: This is a correct scientific decision, not an error.",
      "D": "Failing to reject H0 when true: This is a correct decision (Confidence level = 1 - α)."
    },
    summaryExplanation: "Type I error (α) = Rejecting true H0. Type II error (β) = Failing to reject false H0."
  },
  {
    id: "p1-u2-q4",
    paper: "paper1",
    unitId: "p1-u2",
    unitNumber: 2,
    unitName: "Research Aptitude",
    examSource: "WB-SET 2023",
    question: "Which of the following epistemological paradigms argues that reality is socially constructed, subjective, and best understood through qualitative interpretations?",
    options: [
      { id: "A", text: "Positivism" },
      { id: "B", text: "Post-Positivism / Interpretivism" },
      { id: "C", text: "Logical Empiricism" },
      { id: "D", text: "Behaviorism" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Positivism: Founded by Auguste Comte; insists on objective reality, scientific determinism, quantitative metrics, and value-free observations.",
      "B": "Post-Positivism / Interpretivism: Correct! Emphasizes multiple constructed realities, subjectivism, researcher reflexivity, and qualitative depth.",
      "C": "Logical Empiricism: Aligns with positivism, prioritizing strict sensory verification and mathematical logic.",
      "D": "Behaviorism: Psychological school focusing strictly on observable stimulus-response behavior."
    },
    summaryExplanation: "Positivism is objective/quantitative; Post-positivism/Interpretivism embraces subjective interpretation and qualitative research."
  },
  {
    id: "p1-u2-q5",
    paper: "paper1",
    unitId: "p1-u2",
    unitNumber: 2,
    unitName: "Research Aptitude",
    examSource: "KSET 2023",
    question: "A researcher divides a heterogeneous population into homogeneous subgroups based on specific characteristics (e.g., gender, income) and then selects samples randomly from each subgroup. Which sampling technique is this?",
    options: [
      { id: "A", text: "Cluster Sampling" },
      { id: "B", text: "Stratified Random Sampling" },
      { id: "C", text: "Quota Sampling" },
      { id: "D", text: "Purposive Sampling" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Cluster Sampling: Population is divided into naturally occurring heterogeneous clusters, and whole clusters are randomly chosen.",
      "B": "Stratified Random Sampling: Correct! Strata are homogeneous within and heterogeneous between; random sampling is done within each stratum.",
      "C": "Quota Sampling: Similar division into strata, but selection is non-random (convenience/purposive).",
      "D": "Purposive Sampling: Non-probability sampling where items are hand-picked based on researcher judgment."
    },
    summaryExplanation: "Stratified random sampling ensures proportional representation of homogeneous subgroups within a heterogeneous population."
  },
  {
    id: "p1-u2-q6",
    paper: "paper1",
    unitId: "p1-u2",
    unitNumber: 2,
    unitName: "Research Aptitude",
    examSource: "AP-SET 2024",
    question: "In an experimental study investigating the effect of teaching methods on student academic achievement, which variable is the independent variable?",
    options: [
      { id: "A", text: "Academic achievement of students" },
      { id: "B", text: "Teaching methods" },
      { id: "C", text: "Intelligence quotient (IQ) of students" },
      { id: "D", text: "School infrastructure" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Academic achievement: This is the dependent variable (the outcome measured).",
      "B": "Teaching methods: Correct! The variable manipulated or controlled by the researcher is the independent variable.",
      "C": "IQ of students: An extraneous or moderator variable that needs to be controlled.",
      "D": "School infrastructure: An extraneous environmental variable."
    },
    summaryExplanation: "The Independent Variable is the cause manipulated by the researcher; the Dependent Variable is the observed effect."
  },
  {
    id: "p1-u2-q7",
    paper: "paper1",
    unitId: "p1-u2",
    unitNumber: 2,
    unitName: "Research Aptitude",
    examSource: "UGC NET Dec 2022",
    question: "Which research design is employed when the researcher attempts to trace back possible antecedents or causal factors after an event or phenomenon has already occurred without manipulation?",
    options: [
      { id: "A", text: "True Experimental Design" },
      { id: "B", text: "Ex-Post Facto Research" },
      { id: "C", text: "Action Research" },
      { id: "D", text: "Grounded Theory Research" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "True Experimental Design: Requires active manipulation of independent variables and random assignment, which is impossible post-event.",
      "B": "Ex-Post Facto Research: Correct! Conducted 'after the fact' where independent variables have already occurred naturally and cannot be manipulated.",
      "C": "Action Research: Active participatory intervention for classroom/workplace improvement.",
      "D": "Grounded Theory Research: Inductive generation of theories from qualitative data."
    },
    summaryExplanation: "Ex-Post Facto (causal-comparative) studies retrospectively investigate causes of existing differences without variable manipulation."
  },
  {
    id: "p1-u2-q8",
    paper: "paper1",
    unitId: "p1-u2",
    unitNumber: 2,
    unitName: "Research Aptitude",
    examSource: "GSET 2023",
    question: "Which of the following is a non-probability sampling method where existing study participants recruit future participants from among their acquaintances?",
    options: [
      { id: "A", text: "Systematic Sampling" },
      { id: "B", text: "Stratified Sampling" },
      { id: "C", text: "Snowball Sampling" },
      { id: "D", text: "Multi-stage Sampling" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "Systematic Sampling: Probability sampling selecting every kth element from a sampling frame.",
      "B": "Stratified Sampling: Probability sampling dividing into homogeneous strata.",
      "C": "Snowball Sampling: Correct! Also called chain-referral sampling, ideal for hidden, marginalized, or hard-to-reach populations.",
      "D": "Multi-stage Sampling: Probability sampling involving successive stages of random sampling."
    },
    summaryExplanation: "Snowball (chain-referral) sampling relies on participant networks to access elusive demographic groups."
  },
  {
    id: "p1-u2-q9",
    paper: "paper1",
    unitId: "p1-u2",
    unitNumber: 2,
    unitName: "Research Aptitude",
    examSource: "UGC NET June 2023",
    question: "According to UGC (Promotion of Academic Integrity and Prevention of Plagiarism in Higher Educational Institutions) Regulations 2018, Level 2 Plagiarism refers to similarities:",
    options: [
      { id: "A", text: "Up to 10%" },
      { id: "B", text: "Above 10% to 40%" },
      { id: "C", text: "Above 40% to 60%" },
      { id: "D", text: "Above 60%" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "Up to 10%: Level 0 (Minor similarities, no penalty).",
      "B": "Above 10% to 40%: Level 1 (Penalty: submit revised script within 6 months).",
      "C": "Above 40% to 60%: Correct! Level 2 Plagiarism results in debarment from submitting revised script for one year.",
      "D": "Above 60%: Level 3 Plagiarism (Registration cancelled / termination)."
    },
    summaryExplanation: "UGC Plagiarism Tiers: Level 0 (≤10%), Level 1 (>10%–40%), Level 2 (>40%–60%), Level 3 (>60%)."
  },
  {
    id: "p1-u2-q10",
    paper: "paper1",
    unitId: "p1-u2",
    unitNumber: 2,
    unitName: "Research Aptitude",
    examSource: "TN-SET 2024",
    question: "Which citation format uses the author-date system inside parenthetical text citations (e.g., Smith, 2020) and is most widely used in Social Sciences and Education?",
    options: [
      { id: "A", text: "MLA Handbook (9th edition)" },
      { id: "B", text: "APA Style (7th edition)" },
      { id: "C", text: "Chicago Notes and Bibliography" },
      { id: "D", text: "IEEE Style" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "MLA Handbook: Uses Author-Page format (e.g., Smith 45) primarily in Humanities and Literature.",
      "B": "APA Style: Correct! American Psychological Association uses Author-Year format (Smith, 2020) in Social and Behavioral Sciences.",
      "C": "Chicago Notes: Uses footnotes/endnotes and superscripts.",
      "D": "IEEE Style: Uses bracketed numbers [1] for citations in Engineering and Computer Science."
    },
    summaryExplanation: "APA format is characterized by the Author-Date in-text citation style commonly mandated in educational research."
  },
  {
    id: "p1-u2-q11",
    paper: "paper1",
    unitId: "p1-u2",
    unitNumber: 2,
    unitName: "Research Aptitude",
    examSource: "UGC NET Dec 2023",
    question: "A metric that reflects both the productivity (number of publications) and citation impact of a researcher's publications is termed as:",
    options: [
      { id: "A", text: "Impact Factor" },
      { id: "B", text: "h-index" },
      { id: "C", text: "i10-index" },
      { id: "D", text: "Eigenfactor score" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Impact Factor: Measures the average frequency with which peer-reviewed articles in a journal are cited in a particular year (measures journal quality, not individual author).",
      "B": "h-index: Correct! Formulated by Jorge Hirsch; an author has index h if h of their N papers have at least h citations each.",
      "C": "i10-index: Created by Google Scholar; indicates the number of publications with at least 10 citations.",
      "D": "Eigenfactor score: Rates the overall influence and importance of a journal."
    },
    summaryExplanation: "The Hirsch index (h-index) quantifies an individual scientist's cumulative research output and citation impact."
  },
  {
    id: "p1-u2-q12",
    paper: "paper1",
    unitId: "p1-u2",
    unitNumber: 2,
    unitName: "Research Aptitude",
    examSource: "MH-SET 2023",
    question: "In qualitative research, what is the process of collecting data until no new information, themes, or perspectives emerge called?",
    options: [
      { id: "A", text: "Theoretical Saturation" },
      { id: "B", text: "Data Triangulation" },
      { id: "C", text: "Quota Exhaustion" },
      { id: "D", text: "Member Checking" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Theoretical Saturation: Correct! In grounded theory and qualitative inquiries, sampling continues until redundancy is achieved.",
      "B": "Data Triangulation: Using multiple data sources or methods to cross-validate findings.",
      "C": "Quota Exhaustion: Simply completing the predefined number of sample units in quota sampling.",
      "D": "Member Checking: Returning results to participants to confirm the accuracy of interpretations."
    },
    summaryExplanation: "Saturation denotes the point in qualitative inquiry where gathering fresh data yields no novel conceptual insights."
  },
  {
    id: "p1-u2-q13",
    paper: "paper1",
    unitId: "p1-u2",
    unitNumber: 2,
    unitName: "Research Aptitude",
    examSource: "WB-SET 2024",
    question: "Which of the following scales of measurement possesses a true, absolute zero point allowing meaningful calculation of ratios?",
    options: [
      { id: "A", text: "Nominal Scale" },
      { id: "B", text: "Ordinal Scale" },
      { id: "C", text: "Interval Scale" },
      { id: "D", text: "Ratio Scale" }
    ],
    correctOption: "D",
    optionExplanations: {
      "A": "Nominal Scale: Purely categorical classification (e.g., gender, religion, roll numbers) with no order or magnitude.",
      "B": "Ordinal Scale: Ranks objects in relative order (e.g., 1st, 2nd, 3rd) but intervals between ranks are not equal.",
      "C": "Interval Scale: Equal numerical distance between intervals, but lacks absolute zero (e.g., Celsius temperature, IQ scores).",
      "D": "Ratio Scale: Correct! Possesses classification, order, equal intervals, and a true absolute zero point (e.g., height, weight, Kelvin temperature)."
    },
    summaryExplanation: "Stevens' 4 measurement levels: Nominal (labels) < Ordinal (ranks) < Interval (equal spacing) < Ratio (true zero)."
  },
  {
    id: "p1-u2-q14",
    paper: "paper1",
    unitId: "p1-u2",
    unitNumber: 2,
    unitName: "Research Aptitude",
    examSource: "UGC NET June 2024",
    question: "When a test consistently yields the same results upon repeated administration under identical conditions, the test is said to have high:",
    options: [
      { id: "A", text: "Validity" },
      { id: "B", text: "Reliability" },
      { id: "C", text: "Objectivity" },
      { id: "D", text: "Usability" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Validity: Degree to which an instrument actually measures what it purports to measure.",
      "B": "Reliability: Correct! Consistency, repeatability, and stability of test scores across repeated administrations.",
      "C": "Objectivity: Freedom from subjective bias of the examiner during scoring.",
      "D": "Usability: Practical ease of administration, scoring, and economic feasibility."
    },
    summaryExplanation: "Reliability = Consistency of results; Validity = Truthfulness/accuracy of measurement."
  },
  {
    id: "p1-u2-q15",
    paper: "paper1",
    unitId: "p1-u2",
    unitNumber: 2,
    unitName: "Research Aptitude",
    examSource: "KSET 2024",
    question: "Which of the following software packages is specifically designed for Qualitative Data Analysis (QDA)?",
    options: [
      { id: "A", text: "SPSS" },
      { id: "B", text: "NVivo" },
      { id: "C", text: "STATA" },
      { id: "D", text: "SAS" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "SPSS: Statistical Package for the Social Sciences, used predominantly for quantitative statistics.",
      "B": "NVivo: Correct! Widely used computer-assisted qualitative data analysis software (CAQDAS) for text, audio, and video coding.",
      "C": "STATA: General-purpose statistical software package for quantitative econometric analysis.",
      "D": "SAS: Advanced enterprise analytics software for quantitative big data modeling."
    },
    summaryExplanation: "NVivo, ATLAS.ti, and MAXQDA are leading tools for coding and thematic qualitative data analysis."
  },
  {
    id: "p1-u2-q16",
    paper: "paper1",
    unitId: "p1-u2",
    unitNumber: 2,
    unitName: "Research Aptitude",
    examSource: "UGC NET Dec 2023",
    question: "Which Indian digital initiative serves as the national digital repository of Indian electronic theses and dissertations (ETD) submitted to universities?",
    options: [
      { id: "A", text: "Shodhganga" },
      { id: "B", text: "ShodhGangotri" },
      { id: "C", text: "Shodh Shuddh" },
      { id: "D", text: "e-ShodhSindhu" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Shodhganga: Correct! INFLIBNET repository hosting full-text Indian PhD theses in open access.",
      "B": "ShodhGangotri: Repository for approved PhD research synopses and research proposals.",
      "C": "Shodh Shuddh: National plagiarism detection service (PDS) providing tools like DrillBit/Ouriginal to institutions.",
      "D": "e-ShodhSindhu: Consortia providing access to peer-reviewed e-journals and bibliographic databases."
    },
    summaryExplanation: "Shodhganga stores completed PhD theses, while ShodhGangotri stores research synopses."
  },
  {
    id: "p1-u2-q17",
    paper: "paper1",
    unitId: "p1-u2",
    unitNumber: 2,
    unitName: "Research Aptitude",
    examSource: "AP-SET 2023",
    question: "What is the primary characteristic of an open-ended questionnaire item compared to a closed-ended item?",
    options: [
      { id: "A", text: "It restricts responses to pre-determined categorical options" },
      { id: "B", text: "It allows respondents to express their views freely in their own words" },
      { id: "C", text: "It can be scored with complete automated objectivity" },
      { id: "D", text: "It is strictly suitable only for large-scale parametric statistics" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Restricts responses: This describes closed-ended or structured multiple-choice questions.",
      "B": "Express freely: Correct! Open-ended items do not impose choices, generating rich, descriptive qualitative insights.",
      "C": "Automated scoring: Closed-ended items are scored automatically, not open-ended text.",
      "D": "Parametric statistics: Open-ended responses require qualitative coding and content analysis."
    },
    summaryExplanation: "Open-ended questions provide unfiltered qualitative perspectives at the expense of standardized quantification."
  },
  {
    id: "p1-u2-q18",
    paper: "paper1",
    unitId: "p1-u2",
    unitNumber: 2,
    unitName: "Research Aptitude",
    examSource: "MH-SET 2024",
    question: "Which of the following is considered an unethical practice in academic research known as 'Falsification'?",
    options: [
      { id: "A", text: "Making up data or results and recording or reporting them" },
      { id: "B", text: "Manipulating research materials, equipment, or changing/omitting data results" },
      { id: "C", text: "The appropriation of another person's ideas, processes, or words without credit" },
      { id: "D", text: "Publishing the exact same research paper in two different journals" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Making up data: This is 'Fabrication'.",
      "B": "Manipulating research/omitting data: Correct! 'Falsification' is altering or misrepresenting actual empirical findings.",
      "C": "Appropriating ideas without credit: This is 'Plagiarism'.",
      "D": "Duplicate publishing: This is redundant publication or 'Self-Plagiarism'."
    },
    summaryExplanation: "FFP represents academic misconduct: Fabrication (creating fake data), Falsification (altering data), Plagiarism (theft of text/ideas)."
  },
  {
    id: "p1-u2-q19",
    paper: "paper1",
    unitId: "p1-u2",
    unitNumber: 2,
    unitName: "Research Aptitude",
    examSource: "UGC NET June 2023",
    question: "A directional research hypothesis (one-tailed) is formulated when:",
    options: [
      { id: "A", text: "The researcher predicts that a difference exists without specifying its direction" },
      { id: "B", text: "The researcher specifies the exact nature or direction of the relationship (e.g., greater than or less than)" },
      { id: "C", text: "The researcher states that no relationship exists between variables" },
      { id: "D", text: "The researcher cannot find any existing literature on the subject" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Difference without direction: This is a Non-Directional hypothesis (tested using a two-tailed test).",
      "B": "Specifies direction: Correct! Directional hypotheses state that one group will perform better, higher, or faster, requiring a one-tailed test.",
      "C": "No relationship: This is a Null Hypothesis (H0).",
      "D": "No existing literature: Typically leads to exploratory or non-directional inquiries."
    },
    summaryExplanation: "Directional hypotheses predict an explicit positive or negative trajectory based on prior theoretical backing."
  },
  {
    id: "p1-u2-q20",
    paper: "paper1",
    unitId: "p1-u2",
    unitNumber: 2,
    unitName: "Research Aptitude",
    examSource: "GSET 2024",
    question: "What is the primary function of the 'Literature Review' section in a research proposal?",
    options: [
      { id: "A", text: "To list all published books in the library alphabetically" },
      { id: "B", text: "To identify research gaps, justify the study, and contextualize current findings" },
      { id: "C", text: "To replace original field data collection with existing findings" },
      { id: "D", text: "To provide autobiographical accounts of prominent scholars" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Alphabetical listing: A bibliography lists references, but a review requires critical synthesis.",
      "B": "Identify gaps: Correct! A literature review evaluates existing knowledge to establish rationale, avoid duplication, and identify theoretical gaps.",
      "C": "Replace field data: Review informs methodology, it does not substitute primary empirical collection.",
      "D": "Autobiographical accounts: Historical trivia is irrelevant to theoretical grounding."
    },
    summaryExplanation: "Literature reviews synthesize prior research to identify knowledge voids and substantiate research problems."
  },
  {
    id: "p1-u2-q21",
    paper: "paper1",
    unitId: "p1-u2",
    unitNumber: 2,
    unitName: "Research Aptitude",
    examSource: "WB-SET 2023",
    question: "Which of the following is a parametric statistical test used to compare the means of two independent groups?",
    options: [
      { id: "A", text: "Mann-Whitney U Test" },
      { id: "B", text: "Independent Samples Student's t-test" },
      { id: "C", text: "Kruskal-Wallis H Test" },
      { id: "D", text: "Chi-Square Test of Independence" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Mann-Whitney U Test: Non-parametric alternative to independent two-sample t-test.",
      "B": "Student's t-test: Correct! A classic parametric test assuming normal distribution to compare means of two independent samples.",
      "C": "Kruskal-Wallis H Test: Non-parametric alternative to one-way ANOVA (compares 3+ groups).",
      "D": "Chi-Square Test: Non-parametric test for categorical association."
    },
    summaryExplanation: "Student's t-test compares two group means under assumptions of normality and homogeneity of variance."
  },
  {
    id: "p1-u2-q22",
    paper: "paper1",
    unitId: "p1-u2",
    unitNumber: 2,
    unitName: "Research Aptitude",
    examSource: "UGC NET Dec 2023",
    question: "Which of the following describes the 'Hawthorne Effect' in social and educational research?",
    options: [
      { id: "A", text: "Participants alter their natural behavior simply because they know they are being observed" },
      { id: "B", text: "The researcher unconsciously conveys expectations to the subjects" },
      { id: "C", text: "Participants drop out of a longitudinal study over time" },
      { id: "D", text: "Earlier questions in a questionnaire bias responses to later items" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Altered behavior due to observation: Correct! Discovered at the Western Electric Hawthorne plant; reactivity leads to artificial performance gains.",
      "B": "Conveying expectations: This is the Pygmalion Effect or Rosenthal Experimenter Bias.",
      "C": "Dropping out: This is Experimental Attrition or Subject Mortality.",
      "D": "Question order bias: This is an Order Effect or Context Effect in survey design."
    },
    summaryExplanation: "The Hawthorne Effect refers to subjects' behavioral modification induced by the awareness of being observed."
  },
  {
    id: "p1-u2-q23",
    paper: "paper1",
    unitId: "p1-u2",
    unitNumber: 2,
    unitName: "Research Aptitude",
    examSource: "KSET 2023",
    question: "A variable that cannot be directly observed or manipulated but mediates the relationship between the independent and dependent variable is known as an:",
    options: [
      { id: "A", text: "Extraneous Variable" },
      { id: "B", text: "Intervening Variable" },
      { id: "C", text: "Confounding Variable" },
      { id: "D", text: "Dichotomous Variable" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Extraneous Variable: Any undesired variable other than IV that might influence DV.",
      "B": "Intervening Variable: Correct! Internal mental or psychological process (e.g., motivation, fatigue, anxiety) explaining the causal link.",
      "C": "Confounding Variable: An uncontrolled extraneous variable that actually covaries with the IV and corrupts internal validity.",
      "D": "Dichotomous Variable: A categorical variable with exactly two categories (e.g., Yes/No)."
    },
    summaryExplanation: "Intervening variables conceptually mediate the transmission of effect from the independent to dependent variable."
  },
  {
    id: "p1-u2-q24",
    paper: "paper1",
    unitId: "p1-u2",
    unitNumber: 2,
    unitName: "Research Aptitude",
    examSource: "UGC NET June 2024",
    question: "What is the standard purpose of the 'DOI' (Digital Object Identifier) assigned to academic articles?",
    options: [
      { id: "A", text: "To indicate the plagiarism percentage score" },
      { id: "B", text: "To provide a permanent, persistent alphanumeric link to an article on the internet" },
      { id: "C", text: "To calculate the author's h-index automatically" },
      { id: "D", text: "To register copyright in the national patent office" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Plagiarism score: Reported by similarity check engines like Turnitin, not DOI.",
      "B": "Persistent link: Correct! Administered by the International DOI Foundation (IDF) to guarantee long-term web resolution regardless of URL migrations.",
      "C": "Calculate h-index: Performed by indexing engines (Scopus, Web of Science, Google Scholar).",
      "D": "Register copyright: Done through government intellectual property offices."
    },
    summaryExplanation: "A DOI provides a stable, persistent hyperlink identifier ensuring reliable citation tracking over time."
  },
  {
    id: "p1-u2-q25",
    paper: "paper1",
    unitId: "p1-u2",
    unitNumber: 2,
    unitName: "Research Aptitude",
    examSource: "MH-SET 2023",
    question: "Which of the following constitutes an essential feature of a 'True Experimental' research design?",
    options: [
      { id: "A", text: "Convenience sampling without control group" },
      { id: "B", text: "Manipulation of independent variable, control group, and random assignment" },
      { id: "C", text: "Retrospective examination of natural records" },
      { id: "D", text: "Unstructured participant observation" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Convenience sampling: Violates foundational rules of experimental control and randomization.",
      "B": "Manipulation, control, randomization: Correct! These three pillars define true experimental inquiry.",
      "C": "Retrospective examination: Characteristic of historical or ex-post facto research.",
      "D": "Participant observation: Characteristic of ethnographic qualitative study."
    },
    summaryExplanation: "True experiments require: (1) Random assignment, (2) Control group, and (3) Active manipulation of the IV."
  },
  {
    id: "p1-u2-q26",
    paper: "paper1",
    unitId: "p1-u2",
    unitNumber: 2,
    unitName: "Research Aptitude",
    examSource: "AP-SET 2024",
    question: "A Likert scale typically employs how many balanced response anchors to assess attitudes or degrees of agreement?",
    options: [
      { id: "A", text: "Only 2 (Yes / No)" },
      { id: "B", text: "Typically 5 or 7 points (e.g., Strongly Agree to Strongly Disagree)" },
      { id: "C", text: "Continuous range from 0 to 100" },
      { id: "D", text: "Exactly 10 points with no neutral midpoint" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Only 2: That is a binary/dichotomous scale.",
      "B": "5 or 7 points: Correct! Rensis Likert's summated rating scale typically spans 5 options (Strongly Disagree to Strongly Agree) with a neutral midpoint.",
      "C": "0 to 100: That is a Visual Analog Scale (VAS) or percentage slider.",
      "D": "10 points without midpoint: That is a forced-choice Semantic Differential variation."
    },
    summaryExplanation: "Likert scales traditionally use 5 or 7 symmetrical response levels to gauge agreement intensity."
  },
  {
    id: "p1-u2-q27",
    paper: "paper1",
    unitId: "p1-u2",
    unitNumber: 2,
    unitName: "Research Aptitude",
    examSource: "UGC NET Dec 2023",
    question: "Which research approach relies primarily on inductive reasoning to develop conceptual models and grounded theories directly from collected empirical data?",
    options: [
      { id: "A", text: "Hypothetico-Deductive Method" },
      { id: "B", text: "Grounded Theory (Glaser & Strauss)" },
      { id: "C", text: "Quasi-Experimental Design" },
      { id: "D", text: "Survey Cross-Sectional Method" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Hypothetico-Deductive: Top-down deductive approach testing existing hypotheses against empirical data.",
      "B": "Grounded Theory: Correct! Formulated by Barney Glaser and Anselm Strauss; bottom-up inductive method generating theory directly from data.",
      "C": "Quasi-Experimental: Deductive quantitative test without random assignment.",
      "D": "Survey Cross-Sectional: Descriptive quantitative snapshot of a population at one time."
    },
    summaryExplanation: "Grounded theory constructs theoretical frameworks inductively from iterative observation and coding."
  },
  {
    id: "p1-u2-q28",
    paper: "paper1",
    unitId: "p1-u2",
    unitNumber: 2,
    unitName: "Research Aptitude",
    examSource: "WB-SET 2024",
    question: "In research reporting, what does the Latin abbreviation 'et al.' stand for when citing multi-authored works?",
    options: [
      { id: "A", text: "Et alia (and others)" },
      { id: "B", text: "Et altera (and alternate)" },
      { id: "C", text: "Et all (and all)" },
      { id: "D", text: "Et allow (and allowed)" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Et alia: Correct! Latin phrase meaning 'and others', used to abbreviate long lists of co-authors.",
      "B": "Et altera: Incorrect Latin declension.",
      "C": "Et all: Incorrect english-latin corruption.",
      "D": "Et allow: Spurious option."
    },
    summaryExplanation: "'Et al.' is an abbreviation for 'et alia' (neuter) or 'et alii' (masculine), signifying 'and other authors'."
  },
  {
    id: "p1-u2-q29",
    paper: "paper1",
    unitId: "p1-u2",
    unitNumber: 2,
    unitName: "Research Aptitude",
    examSource: "UGC NET June 2023",
    question: "When a researcher studies the cultural patterns, shared behaviors, and values of an intact cultural group in its natural setting over a prolonged duration, the research is:",
    options: [
      { id: "A", text: "Phenomenology" },
      { id: "B", text: "Ethnography" },
      { id: "C", text: "Case Study" },
      { id: "D", text: "Historical Research" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Phenomenology: Focuses on describing the lived essence of a phenomenon experienced by individuals.",
      "B": "Ethnography: Correct! Anthropological method involving prolonged participant observation to understand cultural groups.",
      "C": "Case Study: In-depth examination of a single bounded case, system, or entity.",
      "D": "Historical Research: Reconstruction of the past using archival records and artifacts."
    },
    summaryExplanation: "Ethnography uses participant observation in naturalistic settings to understand cultural norms and traditions."
  },
  {
    id: "p1-u2-q30",
    paper: "paper1",
    unitId: "p1-u2",
    unitNumber: 2,
    unitName: "Research Aptitude",
    examSource: "MH-SET 2024",
    question: "The power of a statistical test (1 - β) is defined as the probability of:",
    options: [
      { id: "A", text: "Rejecting the Null Hypothesis when it is false (correct decision)" },
      { id: "B", text: "Rejecting the Null Hypothesis when it is true (Type I error)" },
      { id: "C", text: "Accepting the Null Hypothesis when it is false (Type II error)" },
      { id: "D", text: "Setting the significance level at 0.05" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Rejecting H0 when false: Correct! Statistical power (1 - β) is the sensitivity of a test to detect a genuine effect when one exists.",
      "B": "Rejecting H0 when true: That is the significance level (α or Type I error rate).",
      "C": "Accepting H0 when false: That is β (Type II error rate).",
      "D": "Setting alpha at 0.05: That is simply choosing the significance threshold."
    },
    summaryExplanation: "Statistical power (1 - β) measures the probability of correctly rejecting a false null hypothesis."
  }
];
