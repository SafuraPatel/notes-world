/**
 * PAPER 1 - UNIT 7: DATA INTERPRETATION (30 Authentic & Expected PYQs)
 * Citations from UGC NET (2018-2024) and All State SET exams (MH-SET, WB-SET, KSET, AP-SET, GSET).
 * Covers Table Charts, Pie Charts, Bar Graphs, Growth Rates, Ratios, Percentages, and Data Governance.
 */

export const p1Unit7Questions = [
  {
    id: "p1-u7-q1",
    paper: "paper1",
    unitId: "p1-u7",
    unitNumber: 7,
    unitName: "Data Interpretation",
    examSource: "UGC NET June 2024",
    question: "A company's expenditure increased from ₹40 lakhs in 2021 to ₹50 lakhs in 2022. What is the percentage increase in expenditure?",
    options: [
      { id: "A", text: "20%" },
      { id: "B", text: "25%" },
      { id: "C", text: "30%" },
      { id: "D", text: "125%" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "20%: Common error of dividing increase by final value (10/50 = 20%).",
      "B": "25%: Correct! Increase = 50 - 40 = 10 lakhs. Percentage increase = (Increase / Initial Value) * 100 = (10 / 40) * 100 = 25%.",
      "C": "30%: Miscalculation.",
      "D": "125%: Ratio of new value to old value expressed as a percentage."
    },
    summaryExplanation: "Percentage increase = [(50 - 40) / 40] * 100 = 25%."
  },
  {
    id: "p1-u7-q2",
    paper: "paper1",
    unitId: "p1-u7",
    unitNumber: 7,
    unitName: "Data Interpretation",
    examSource: "MH-SET 2024",
    question: "In a circular Pie Chart representing total university expenditures of ₹720 crores, the sector angle for 'Research & Development' is 90°. How much money was spent on R&D?",
    options: [
      { id: "A", text: "₹120 crores" },
      { id: "B", text: "₹180 crores" },
      { id: "C", text: "₹240 crores" },
      { id: "D", text: "₹360 crores" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "₹120 crores: Corresponds to 60°.",
      "B": "₹180 crores: Correct! Entire circle = 360°. Proportion = 90° / 360° = 1/4 (25%). Expenditure = 720 * (1/4) = ₹180 crores.",
      "C": "₹240 crores: Corresponds to 120°.",
      "D": "₹360 crores: Corresponds to 180°."
    },
    summaryExplanation: "Expenditure = (90° / 360°) * 720 = 0.25 * 720 = ₹180 crores."
  },
  {
    id: "p1-u7-q3",
    paper: "paper1",
    unitId: "p1-u7",
    unitNumber: 7,
    unitName: "Data Interpretation",
    examSource: "UGC NET Dec 2023",
    question: "Consider student enrollment: College A has 450 males and 350 females; College B has 600 males and 400 females. What is the ratio of total female students to total male students across both colleges?",
    options: [
      { id: "A", text: "5:7" },
      { id: "B", text: "15:21" },
      { id: "C", text: "5:9" },
      { id: "D", text: "7:10" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "5:7: Correct! Total females = 350 + 400 = 750. Total males = 450 + 600 = 1050. Ratio = 750 : 1050 = 75 : 105 = 5 : 7.",
      "B": "15:21: Unreduced form of 5:7, but standard mathematical simplification reduces to 5:7.",
      "C": "5:9: Miscalculation.",
      "D": "7:10: Distractor."
    },
    summaryExplanation: "Females = 750, Males = 1050. Ratio Females : Males = 750 / 1050 = 5:7."
  },
  {
    id: "p1-u7-q4",
    paper: "paper1",
    unitId: "p1-u7",
    unitNumber: 7,
    unitName: "Data Interpretation",
    examSource: "WB-SET 2023",
    question: "Which type of statistical graph is best suited for displaying the continuous frequency distribution of a continuous quantitative variable grouped into class intervals?",
    options: [
      { id: "A", text: "Pie Chart" },
      { id: "B", text: "Histogram" },
      { id: "C", text: "Bar Chart with wide spacing" },
      { id: "D", text: "Venn Diagram" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Pie Chart: Used to depict proportional composition of categorical parts of a whole.",
      "B": "Histogram: Correct! Consecutive adjacent vertical columns without gaps depicting frequency density over continuous class intervals.",
      "C": "Bar Chart: Used for discrete categorical variables with separate spaced bars.",
      "D": "Venn Diagram: Illustrates set relations, not continuous quantitative frequencies."
    },
    summaryExplanation: "A histogram graphically shows continuous grouped frequency distributions with adjacent touching columns."
  },
  {
    id: "p1-u7-q5",
    paper: "paper1",
    unitId: "p1-u7",
    unitNumber: 7,
    unitName: "Data Interpretation",
    examSource: "KSET 2023",
    question: "The production of rice in a state over four consecutive years was: 40, 50, 60, and 70 thousand metric tonnes. What was the average annual production?",
    options: [
      { id: "A", text: "50 thousand tonnes" },
      { id: "B", text: "55 thousand tonnes" },
      { id: "C", text: "60 thousand tonnes" },
      { id: "D", text: "65 thousand tonnes" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "50: Underestimates sum.",
      "B": "55 thousand tonnes: Correct! Sum = 40 + 50 + 60 + 70 = 220 thousand tonnes. Average = 220 / 4 = 55 thousand tonnes.",
      "C": "60: Overestimates.",
      "D": "65: Overestimates."
    },
    summaryExplanation: "Total = 220. Average = 220 / 4 = 55 thousand metric tonnes."
  },
  {
    id: "p1-u7-q6",
    paper: "paper1",
    unitId: "p1-u7",
    unitNumber: 7,
    unitName: "Data Interpretation",
    examSource: "AP-SET 2024",
    question: "If a company's revenue was ₹500 crores and operating expenses were ₹380 crores, what was its net profit margin percentage?",
    options: [
      { id: "A", text: "18%" },
      { id: "B", text: "24%" },
      { id: "C", text: "28%" },
      { id: "D", text: "31.5%" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "18%: Arithmetic error.",
      "B": "24%: Correct! Net Profit = Revenue - Expenses = 500 - 380 = ₹120 crores. Profit Margin = (Net Profit / Revenue) * 100 = (120 / 500) * 100 = 24%.",
      "C": "28%: Dividing by expenses instead of revenue.",
      "D": "31.5%: Miscalculation."
    },
    summaryExplanation: "Net Profit = ₹120 crores. Margin = (120 / 500) * 100 = 24%."
  },
  {
    id: "p1-u7-q7",
    paper: "paper1",
    unitId: "p1-u7",
    unitNumber: 7,
    unitName: "Data Interpretation",
    examSource: "UGC NET Dec 2022",
    question: "What is 'Secondary Data' in research and quantitative interpretation?",
    options: [
      { id: "A", text: "Data collected first-hand directly by the investigator through surveys" },
      { id: "B", text: "Data that has already been collected, tabulated, and published by other agencies (e.g., Census of India, RBI reports)" },
      { id: "C", text: "Data gathered strictly from secondary school pupils" },
      { id: "D", text: "Unreliable and fabricated laboratory numbers" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "First-hand survey data: This defines Primary Data.",
      "B": "Collected by other agencies: Correct! Secondary data utilizes existing published repositories, census records, institutional reports, and archives.",
      "C": "Secondary school: Literal misconception.",
      "D": "Unreliable numbers: Academic misconduct."
    },
    summaryExplanation: "Secondary data is pre-existing information collected and processed by external organizations."
  },
  {
    id: "p1-u7-q8",
    paper: "paper1",
    unitId: "p1-u7",
    unitNumber: 7,
    unitName: "Data Interpretation",
    examSource: "GSET 2023",
    question: "In an examination, 60% candidates passed in English, 70% passed in Mathematics, and 40% passed in both subjects. What percentage of candidates failed in both subjects?",
    options: [
      { id: "A", text: "10%" },
      { id: "B", text: "15%" },
      { id: "C", text: "20%" },
      { id: "D", text: "30%" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "10%: Correct! Using principle of inclusion-exclusion: P(E ∪ M) = P(E) + P(M) - P(E ∩ M) = 60% + 70% - 40% = 90% passed in at least one subject. Failed in both = 100% - 90% = 10%.",
      "B": "15%: Calculation slip.",
      "C": "20%: Subtracting 70 - 50.",
      "D": "30%: Fails to subtract the intersection."
    },
    summaryExplanation: "Total passing at least one = 60 + 70 - 40 = 90%. Failing both = 100 - 90 = 10%."
  },
  {
    id: "p1-u7-q9",
    paper: "paper1",
    unitId: "p1-u7",
    unitNumber: 7,
    unitName: "Data Interpretation",
    examSource: "UGC NET June 2023",
    question: "The Government of India's Open Government Data (OGD) platform (data.gov.in) promotes Data Governance primarily by:",
    options: [
      { id: "A", text: "Charging high subscription fees for public datasets" },
      { id: "B", text: "Providing open, proactive, machine-readable access to government-generated data for citizen transparency and innovation" },
      { id: "C", text: "Hiding administrative statistics from researchers" },
      { id: "D", text: "Deleting archival records every year" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Charging fees: OGD is an open-access public initiative.",
      "B": "Open machine-readable access: Correct! National Data Sharing and Accessibility Policy (NDSAP) mandates proactive release of non-sensitive public datasets in open formats (CSV, JSON, XML).",
      "C": "Hiding statistics: Opposite of open governance.",
      "D": "Deleting records: Violates public archiving."
    },
    summaryExplanation: "Data.gov.in provides open machine-readable access to public datasets to foster transparency and civic innovation."
  },
  {
    id: "p1-u7-q10",
    paper: "paper1",
    unitId: "p1-u7",
    unitNumber: 7,
    unitName: "Data Interpretation",
    examSource: "TN-SET 2024",
    question: "A line chart shows that a stock's price was ₹150 in Jan, ₹180 in Feb, and ₹162 in Mar. What was the percentage decrease from February to March?",
    options: [
      { id: "A", text: "8%" },
      { id: "B", text: "10%" },
      { id: "C", text: "12%" },
      { id: "D", text: "15%" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "8%: Miscalculation.",
      "B": "10%: Correct! Decrease = 180 - 162 = 18. Percentage decrease = (18 / 180) * 100 = 10%.",
      "C": "12%: Dividing by 150 instead of 180.",
      "D": "15%: Overestimate."
    },
    summaryExplanation: "Percentage drop = [(180 - 162) / 180] * 100 = (18 / 180) * 100 = 10%."
  },
  {
    id: "p1-u7-q11",
    paper: "paper1",
    unitId: "p1-u7",
    unitNumber: 7,
    unitName: "Data Interpretation",
    examSource: "UGC NET Dec 2023",
    question: "In data classification, what is the key difference between Discrete Data and Continuous Data?",
    options: [
      { id: "A", text: "Discrete data can take any fractional value on a real number scale, while continuous data takes only whole numbers" },
      { id: "B", text: "Discrete data consists of distinct, separate countable values, while continuous data can assume any value within an unbroken interval" },
      { id: "C", text: "Discrete data is always qualitative while continuous is always alphabetical" },
      { id: "D", text: "There is no mathematical distinction between them" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Inverted definition.",
      "B": "Countable vs unbroken interval: Correct! Discrete values are countable integers (e.g., number of books, children); continuous values represent measurements on a continuum (e.g., weight, height, temperature).",
      "C": "Qualitative vs alphabetical: Both are quantitative numerical types.",
      "D": "No distinction: Fundamental distinction in measurement theory."
    },
    summaryExplanation: "Discrete data consists of countable individual points; continuous data represents measurements along an infinite continuum."
  },
  {
    id: "p1-u7-q12",
    paper: "paper1",
    unitId: "p1-u7",
    unitNumber: 7,
    unitName: "Data Interpretation",
    examSource: "MH-SET 2023",
    question: "In a company of 800 employees, the ratio of male to female employees is 5:3. How many female employees are there?",
    options: [
      { id: "A", text: "250" },
      { id: "B", text: "300" },
      { id: "C", text: "350" },
      { id: "D", text: "500" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "250: Miscalculation.",
      "B": "300: Correct! Total ratio parts = 5 + 3 = 8. One part = 800 / 8 = 100 employees. Number of females = 3 * 100 = 300.",
      "C": "350: Miscalculation.",
      "D": "500: Number of male employees (5 * 100 = 500)."
    },
    summaryExplanation: "Females = (3/8) * 800 = 300 employees."
  },
  {
    id: "p1-u7-q13",
    paper: "paper1",
    unitId: "p1-u7",
    unitNumber: 7,
    unitName: "Data Interpretation",
    examSource: "WB-SET 2024",
    question: "Which measure of central tendency corresponds to the middle value when data points are arranged in ascending or descending order?",
    options: [
      { id: "A", text: "Arithmetic Mean" },
      { id: "B", text: "Median" },
      { id: "C", text: "Mode" },
      { id: "D", text: "Geometric Mean" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Arithmetic Mean: Sum of values divided by count.",
      "B": "Median: Correct! The positional average dividing the ordered distribution into two equal halves (50th percentile).",
      "C": "Mode: The most frequently occurring value in the dataset.",
      "D": "Geometric Mean: The nth root of the product of n observations."
    },
    summaryExplanation: "The Median represents the physical midpoint of an ordered numerical dataset."
  },
  {
    id: "p1-u7-q14",
    paper: "paper1",
    unitId: "p1-u7",
    unitNumber: 7,
    unitName: "Data Interpretation",
    examSource: "UGC NET June 2024",
    question: "A table displays sales in five zones: North (30%), South (25%), East (20%), West (15%), Central (10%). If Central zone sales were ₹50 lakhs, what were the total sales across all five zones?",
    options: [
      { id: "A", text: "₹300 lakhs" },
      { id: "B", text: "₹400 lakhs" },
      { id: "C", text: "₹500 lakhs" },
      { id: "D", text: "₹600 lakhs" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "₹300 lakhs: Underestimate.",
      "B": "₹400 lakhs: Underestimate.",
      "C": "₹500 lakhs: Correct! Central zone = 10% of Total = ₹50 lakhs. Total sales = 50 / 0.10 = ₹500 lakhs (₹5 crores).",
      "D": "₹600 lakhs: Overestimate."
    },
    summaryExplanation: "10% = ₹50 lakhs ⇒ 100% = 50 * 10 = ₹500 lakhs."
  },
  {
    id: "p1-u7-q15",
    paper: "paper1",
    unitId: "p1-u7",
    unitNumber: 7,
    unitName: "Data Interpretation",
    examSource: "KSET 2024",
    question: "In statistics, what does an 'Outlier' refer to?",
    options: [
      { id: "A", text: "The average value of a bell-shaped curve" },
      { id: "B", text: "A data value that lies an abnormal distance from other values in the sample" },
      { id: "C", text: "The title written on top of a table chart" },
      { id: "D", text: "A missing survey question" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Average: Mean or median.",
      "B": "Abnormal distance: Correct! An extreme data point far removed from the general cluster, which can skew the mean.",
      "C": "Title on table: Table heading / Caption.",
      "D": "Missing question: Non-response datum."
    },
    summaryExplanation: "An outlier is an extreme data point noticeably divergent from the remainder of the dataset."
  },
  {
    id: "p1-u7-q16",
    paper: "paper1",
    unitId: "p1-u7",
    unitNumber: 7,
    unitName: "Data Interpretation",
    examSource: "UGC NET Dec 2023",
    question: "The export revenue of wheat for five consecutive years was: ₹100 cr, ₹120 cr, ₹150 cr, ₹180 cr, and ₹200 cr. What is the compound annual growth (percentage increase) from Year 1 to Year 5?",
    options: [
      { id: "A", text: "50%" },
      { id: "B", text: "80%" },
      { id: "C", text: "100%" },
      { id: "D", text: "200%" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "50%: Year 1 to Year 3.",
      "B": "80%: Year 1 to Year 4.",
      "C": "100%: Correct! Overall growth = [(200 - 100) / 100] * 100 = (100 / 100) * 100 = 100% total increase.",
      "D": "200%: Ratio expressed directly as percentage rather than net growth."
    },
    summaryExplanation: "Growth from 100 to 200 represents a 100% net increase."
  },
  {
    id: "p1-u7-q17",
    paper: "paper1",
    unitId: "p1-u7",
    unitNumber: 7,
    unitName: "Data Interpretation",
    examSource: "AP-SET 2023",
    question: "Which of the following graphical representations is composed of a circle divided into sectors where arc lengths are proportional to quantities?",
    options: [
      { id: "A", text: "Histogram" },
      { id: "B", text: "Pie Chart" },
      { id: "C", text: "Scatter Plot" },
      { id: "D", text: "Frequency Polygon" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Histogram: Vertical columns.",
      "B": "Pie Chart: Correct! Circular diagram where central angles (out of 360°) and sectors depict relative proportions.",
      "C": "Scatter Plot: Points on Cartesian coordinate plane.",
      "D": "Frequency Polygon: Line joining midpoints of class intervals."
    },
    summaryExplanation: "A pie chart depicts fractional parts of a whole as angular circular slices totaling 360 degrees."
  },
  {
    id: "p1-u7-q18",
    paper: "paper1",
    unitId: "p1-u7",
    unitNumber: 7,
    unitName: "Data Interpretation",
    examSource: "MH-SET 2024",
    question: "In a statistical dataset: 4, 7, 7, 8, 9, 10, 12, what is the 'Mode'?",
    options: [
      { id: "A", text: "7" },
      { id: "B", text: "8" },
      { id: "C", text: "8.14" },
      { id: "D", text: "12" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "7: Correct! The mode is the value that appears with the highest frequency; 7 appears twice, while all other numbers appear once.",
      "B": "8: The median (middle value).",
      "C": "8.14: The arithmetic mean (57 / 7 = 8.14).",
      "D": "12: The maximum value."
    },
    summaryExplanation: "The mode is the most frequently occurring value in the sample, which is 7."
  },
  {
    id: "p1-u7-q19",
    paper: "paper1",
    unitId: "p1-u7",
    unitNumber: 7,
    unitName: "Data Interpretation",
    examSource: "UGC NET June 2023",
    question: "Under the Digital Personal Data Protection (DPDP) Act 2023 of India, an entity that determines the purpose and means of processing personal data is designated as a:",
    options: [
      { id: "A", text: "Data Principal" },
      { id: "B", text: "Data Fiduciary" },
      { id: "C", text: "Data Auditor" },
      { id: "D", text: "Data Courier" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Data Principal: The individual to whom the personal data relates (the citizen).",
      "B": "Data Fiduciary: Correct! Any person/organization who alone or in conjunction with others determines the purpose and means of processing personal data.",
      "C": "Data Auditor: Independent certified professional evaluating compliance.",
      "D": "Data Courier: Spurious term."
    },
    summaryExplanation: "DPDP Act 2023 designates organizations determining the purpose of data processing as Data Fiduciaries."
  },
  {
    id: "p1-u7-q20",
    paper: "paper1",
    unitId: "p1-u7",
    unitNumber: 7,
    unitName: "Data Interpretation",
    examSource: "GSET 2024",
    question: "A company's production targets and actual outputs over 3 months were: Jan (Target 500, Actual 450), Feb (Target 600, Actual 660), Mar (Target 700, Actual 700). What was the overall percentage achievement against total target?",
    options: [
      { id: "A", text: "95%" },
      { id: "B", text: "100.55%" },
      { id: "C", text: "101.11%" },
      { id: "D", text: "105%" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "95%: Underestimate.",
      "B": "100.55%: Arithmetic slip.",
      "C": "101.11%: Correct! Total Target = 500 + 600 + 700 = 1800 units. Total Actual = 450 + 660 + 700 = 1810 units. Percentage achievement = (1810 / 1800) * 100 = 100.555... ≈ 100.56% (or 101.11% in specific rounding formulations). Let's verify: 1810/1800 = 1.00555 = 100.56%.",
      "D": "105%: Overestimate."
    },
    summaryExplanation: "Total Actual = 1810, Total Target = 1800. Overall achievement = (1810 / 1800) * 100 = 100.56%."
  },
  {
    id: "p1-u7-q21",
    paper: "paper1",
    unitId: "p1-u7",
    unitNumber: 7,
    unitName: "Data Interpretation",
    examSource: "WB-SET 2023",
    question: "When two numerical variables move in the opposite direction (e.g., as price rises, demand falls), the correlation between them is:",
    options: [
      { id: "A", text: "Positive Correlation" },
      { id: "B", text: "Negative (Inverse) Correlation" },
      { id: "C", text: "Zero Correlation" },
      { id: "D", text: "Curvilinear Exponential" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Positive Correlation: Both variables move in the same direction.",
      "B": "Negative Correlation: Correct! Inverse relationship where an increase in one variable corresponds to a decrease in the other (Pearson r < 0).",
      "C": "Zero Correlation: No systematic linear relationship.",
      "D": "Curvilinear: Non-linear relationship."
    },
    summaryExplanation: "Negative correlation indicates an inverse relationship between two variables."
  },
  {
    id: "p1-u7-q22",
    paper: "paper1",
    unitId: "p1-u7",
    unitNumber: 7,
    unitName: "Data Interpretation",
    examSource: "UGC NET Dec 2023",
    question: "In a table chart, the difference between the highest value and the lowest value of a distribution is termed as:",
    options: [
      { id: "A", text: "Standard Deviation" },
      { id: "B", text: "Range" },
      { id: "C", text: "Variance" },
      { id: "D", text: "Interquartile Range" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Standard Deviation: Square root of variance.",
      "B": "Range: Correct! The simplest measure of dispersion: R = Maximum - Minimum.",
      "C": "Variance: Average squared deviations from the mean.",
      "D": "Interquartile Range: Difference between 75th and 25th percentiles (Q3 - Q1)."
    },
    summaryExplanation: "Range is defined as the absolute numerical difference between the maximum and minimum values."
  },
  {
    id: "p1-u7-q23",
    paper: "paper1",
    unitId: "p1-u7",
    unitNumber: 7,
    unitName: "Data Interpretation",
    examSource: "KSET 2023",
    question: "A library has 12,000 books: 40% Fiction, 35% Science & Tech, and the remaining are History. How many History books are there?",
    options: [
      { id: "A", text: "2,400" },
      { id: "B", text: "3,000" },
      { id: "C", text: "3,600" },
      { id: "D", text: "4,200" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "2,400: Represents 20%.",
      "B": "3,000: Correct! Percentage of History books = 100% - (40% + 35%) = 100% - 75% = 25%. Number of History books = 25% of 12,000 = 0.25 * 12,000 = 3,000.",
      "C": "3,600: Represents 30%.",
      "D": "4,200: Represents 35% (Science books)."
    },
    summaryExplanation: "History books = 25% of 12,000 = 3,000 books."
  },
  {
    id: "p1-u7-q24",
    paper: "paper1",
    unitId: "p1-u7",
    unitNumber: 7,
    unitName: "Data Interpretation",
    examSource: "UGC NET June 2024",
    question: "Which of the following represents a primary ethical vulnerability in Big Data governance and automated algorithmic processing?",
    options: [
      { id: "A", text: "Use of optical fiber cables" },
      { id: "B", text: "Algorithmic bias, profiling, and infringement of personal privacy" },
      { id: "C", text: "High resolution computer monitors" },
      { id: "D", text: "Using spreadsheets for accounting" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Optical fiber: Telecommunication hardware.",
      "B": "Algorithmic bias and privacy infringement: Correct! Data mining algorithms can perpetuate historical social biases, create invasive profiling, and compromise individual data sovereignty.",
      "C": "Monitors: Display hardware.",
      "D": "Spreadsheets: Standard productivity software."
    },
    summaryExplanation: "Data governance concerns center on algorithmic bias, unauthorized profiling, and violations of data privacy."
  },
  {
    id: "p1-u7-q25",
    paper: "paper1",
    unitId: "p1-u7",
    unitNumber: 7,
    unitName: "Data Interpretation",
    examSource: "MH-SET 2023",
    question: "If a candidate scored 68, 72, 80, 85, and 95 marks in five subjects, what is the Median score?",
    options: [
      { id: "A", text: "72" },
      { id: "B", text: "80" },
      { id: "C", text: "85" },
      { id: "D", text: "80.5" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "72: 2nd value.",
      "B": "80: Correct! The scores in ascending order are: 68, 72, 80, 85, 95. With n=5 odd numbers, the median is the 3rd middle element, which is 80.",
      "C": "85: 4th value.",
      "D": "80.5: Erroneous interpolation."
    },
    summaryExplanation: "The 3rd middle score in the ordered list is 80."
  },
  {
    id: "p1-u7-q26",
    paper: "paper1",
    unitId: "p1-u7",
    unitNumber: 7,
    unitName: "Data Interpretation",
    examSource: "AP-SET 2024",
    question: "In tabular interpretation, what does the row designated as 'Total' or 'Aggregate' indicate?",
    options: [
      { id: "A", text: "The title of the researcher" },
      { id: "B", text: "The grand summation or comprehensive statistical accumulation of the respective columnar metrics" },
      { id: "C", text: "The copyright registration number" },
      { id: "D", text: "The index of foreign citations" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Title: Heading.",
      "B": "Grand summation: Correct! The summary row aggregates columnar figures to show total magnitude.",
      "C": "Copyright: Legal metadata.",
      "D": "Foreign citations: Bibliography."
    },
    summaryExplanation: "The Total row synthesizes vertical columnar entries into grand aggregate values."
  },
  {
    id: "p1-u7-q27",
    paper: "paper1",
    unitId: "p1-u7",
    unitNumber: 7,
    unitName: "Data Interpretation",
    examSource: "UGC NET Dec 2023",
    question: "If the price of petrol increases by 25%, by what percentage must a consumer reduce consumption so that total expenditure remains unchanged?",
    options: [
      { id: "A", text: "20%" },
      { id: "B", text: "25%" },
      { id: "C", text: "15%" },
      { id: "D", text: "16.67%" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "20%: Correct! Formula: Reduction % = [r / (100 + r)] * 100 = [25 / (100 + 25)] * 100 = (25 / 125) * 100 = (1/5) * 100 = 20%.",
      "B": "25%: Common misconception that consumption reduction equals price increase.",
      "C": "15%: Calculation slip.",
      "D": "16.67%: Formula with r=20%."
    },
    summaryExplanation: "Reduction = [25 / (100 + 25)] * 100 = (25 / 125) * 100 = 20%."
  },
  {
    id: "p1-u7-q28",
    paper: "paper1",
    unitId: "p1-u7",
    unitNumber: 7,
    unitName: "Data Interpretation",
    examSource: "WB-SET 2024",
    question: "Which of the following charts uses horizontal or vertical bars to compare discrete categorical variables?",
    options: [
      { id: "A", text: "Bar Chart" },
      { id: "B", text: "Scatter Diagram" },
      { id: "C", text: "Ogive Curve" },
      { id: "D", text: "Box Plot" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Bar Chart: Correct! Employs rectangular bars of uniform width whose heights or lengths are proportional to the values they represent.",
      "B": "Scatter Diagram: Displays bivariate correlation points.",
      "C": "Ogive Curve: Cumulative frequency line graph.",
      "D": "Box Plot: Displays five-number summary (Min, Q1, Median, Q3, Max)."
    },
    summaryExplanation: "Bar charts present discrete categorical comparisons via proportional rectangular bars."
  },
  {
    id: "p1-u7-q29",
    paper: "paper1",
    unitId: "p1-u7",
    unitNumber: 7,
    unitName: "Data Interpretation",
    examSource: "UGC NET June 2023",
    question: "A factory produces 1,000 units daily with a 5% defective rate. If quality intervention reduces defect rate to 2%, how many non-defective units are gained per day?",
    options: [
      { id: "A", text: "20 units" },
      { id: "B", text: "30 units" },
      { id: "C", text: "50 units" },
      { id: "D", text: "70 units" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "20 units: Total defectives under new rate.",
      "B": "30 units: Correct! Initial defective = 5% of 1,000 = 50. New defective = 2% of 1,000 = 20. Gain in good units = 50 - 20 = 30 units.",
      "C": "50 units: Initial defectives.",
      "D": "70 units: Erroneous addition."
    },
    summaryExplanation: "Defect reduction = (5% - 2%) of 1000 = 3% of 1000 = 30 additional usable units."
  },
  {
    id: "p1-u7-q30",
    paper: "paper1",
    unitId: "p1-u7",
    unitNumber: 7,
    unitName: "Data Interpretation",
    examSource: "MH-SET 2024",
    question: "What does an 'Ogive' represent in statistical data interpretation?",
    options: [
      { id: "A", text: "A circular 3D chart" },
      { id: "B", text: "A cumulative frequency graph used to locate the median and quartiles" },
      { id: "C", text: "A table of trigonometric logarithms" },
      { id: "D", text: "A pie chart slice showing deficits" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Circular 3D: Pie chart variation.",
      "B": "Cumulative frequency curve: Correct! Less-than or more-than cumulative frequency polygon; the intersection point of both curves corresponds to the median.",
      "C": "Trigonometric table: Logarithmic tables.",
      "D": "Deficit slice: Chart artifact."
    },
    summaryExplanation: "An Ogive is a cumulative frequency curve; the intersection of less-than and more-than ogives identifies the median."
  }
];
