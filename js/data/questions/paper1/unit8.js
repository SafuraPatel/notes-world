/**
 * PAPER 1 - UNIT 8: INFORMATION AND COMMUNICATION TECHNOLOGY (ICT) (30 Authentic & Expected PYQs)
 * Citations from UGC NET (2018-2024) and All State SET exams (MH-SET, WB-SET, KSET, AP-SET, GSET).
 * Covers Memory Hierarchy, Number Systems, Cybersecurity, Digital Initiatives, and Networking Protocols.
 */

export const p1Unit8Questions = [
  {
    id: "p1-u8-q1",
    paper: "paper1",
    unitId: "p1-u8",
    unitNumber: 8,
    unitName: "Information and Communication Technology (ICT)",
    examSource: "UGC NET June 2024",
    question: "Which of the following represents the correct sequence of computer memory storage types from FASTEST to SLOWEST access speed?",
    options: [
      { id: "A", text: "Hard Disk → RAM → Cache Memory → CPU Registers" },
      { id: "B", text: "CPU Registers → Cache Memory → RAM → Solid State Drive (SSD)" },
      { id: "C", text: "RAM → CPU Registers → SSD → Cache Memory" },
      { id: "D", text: "Cache Memory → RAM → CPU Registers → Magnetic Tape" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Reverses hierarchy from slowest to fastest.",
      "B": "CPU Registers → Cache → RAM → SSD: Correct! CPU Registers (nanoseconds/sub-nanosecond) > L1/L2/L3 Cache > Main Memory (RAM) > Secondary storage (SSD/HDD).",
      "C": "RAM is slower than registers and cache.",
      "D": "Registers are faster than cache."
    },
    summaryExplanation: "Memory hierarchy by speed: Registers (fastest) > Cache > RAM > Secondary Storage (SSD/HDD)."
  },
  {
    id: "p1-u8-q2",
    paper: "paper1",
    unitId: "p1-u8",
    unitNumber: 8,
    unitName: "Information and Communication Technology (ICT)",
    examSource: "MH-SET 2024",
    question: "Convert the decimal number (25)₁₀ into its equivalent binary representation:",
    options: [
      { id: "A", text: "(11001)₂" },
      { id: "B", text: "(10101)₂" },
      { id: "C", text: "(11010)₂" },
      { id: "D", text: "(11100)₂" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "(11001)₂: Correct! 25 / 2 = 12 rem 1; 12 / 2 = 6 rem 0; 6 / 2 = 3 rem 0; 3 / 2 = 1 rem 1; 1 / 2 = 0 rem 1. Reading remainders bottom-up: 11001. Check: 16 + 8 + 0 + 0 + 1 = 25.",
      "B": "(10101)₂: Equals 16 + 4 + 1 = 21.",
      "C": "(11010)₂: Equals 16 + 8 + 2 = 26.",
      "D": "(11100)₂: Equals 16 + 8 + 4 = 28."
    },
    summaryExplanation: "25 = 16 + 8 + 1 = 2⁴ + 2³ + 2⁰ = (11001)₂."
  },
  {
    id: "p1-u8-q3",
    paper: "paper1",
    unitId: "p1-u8",
    unitNumber: 8,
    unitName: "Information and Communication Technology (ICT)",
    examSource: "UGC NET Dec 2023",
    question: "Which Indian digital initiative provides high-quality educational television channels broadcasting 24x7 using GSAT-15 satellite transponders?",
    options: [
      { id: "A", text: "SWAYAM" },
      { id: "B", text: "SWAYAM PRABHA" },
      { id: "C", text: "National Digital Library (NDLI)" },
      { id: "D", text: "e-Yantra" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "SWAYAM: Online MOOCs web portal offering interactive courses.",
      "B": "SWAYAM PRABHA: Correct! DTH initiative broadcasting 24x7 educational television channels (expanded to 80+ DTH channels) uplinked by BISAG-N via GSAT-15.",
      "C": "NDLI: Digital repository of academic books and manuscripts hosted by IIT Kharagpur.",
      "D": "e-Yantra: Robotics outreach initiative by IIT Bombay."
    },
    summaryExplanation: "SWAYAM PRABHA broadcasts 24x7 educational DTH TV channels via GSAT-15 satellite."
  },
  {
    id: "p1-u8-q4",
    paper: "paper1",
    unitId: "p1-u8",
    unitNumber: 8,
    unitName: "Information and Communication Technology (ICT)",
    examSource: "WB-SET 2023",
    question: "In computer networks, what is the primary function of the Domain Name System (DNS)?",
    options: [
      { id: "A", text: "Encrypting banking credit card transactions" },
      { id: "B", text: "Translating human-readable domain names (e.g., www.ugc.gov.in) into machine-readable numerical IP addresses" },
      { id: "C", text: "Compressing video files for email transmission" },
      { id: "D", text: "Formatting hard drives" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Encrypting transactions: Handled by SSL/TLS and HTTPS protocols.",
      "B": "Translating domain names to IP: Correct! DNS acts as the 'phonebook' of the internet, resolving hostnames to IP addresses.",
      "C": "Compressing video: Video codecs (H.264, MP4).",
      "D": "Formatting: File system utility."
    },
    summaryExplanation: "DNS resolves human-friendly hostnames into machine-routable IP addresses."
  },
  {
    id: "p1-u8-q5",
    paper: "paper1",
    unitId: "p1-u8",
    unitNumber: 8,
    unitName: "Information and Communication Technology (ICT)",
    examSource: "KSET 2023",
    question: "Which of the following forms of computer memory is 'Volatile' (loses stored information when computer power is switched off)?",
    options: [
      { id: "A", text: "ROM (Read Only Memory)" },
      { id: "B", text: "RAM (Random Access Memory)" },
      { id: "C", text: "Flash Memory Pen Drive" },
      { id: "D", text: "Solid State Drive (SSD)" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "ROM: Non-volatile; retains firmware (BIOS/UEFI) permanently.",
      "B": "RAM: Correct! Volatile memory; requires continuous electrical power to sustain stored bits.",
      "C": "Flash drive: Non-volatile secondary storage using floating-gate transistors.",
      "D": "SSD: Non-volatile solid-state storage."
    },
    summaryExplanation: "RAM is volatile memory whose data is cleared immediately upon power loss."
  },
  {
    id: "p1-u8-q6",
    paper: "paper1",
    unitId: "p1-u8",
    unitNumber: 8,
    unitName: "Information and Communication Technology (ICT)",
    examSource: "AP-SET 2024",
    question: "A cyber-attack in which the attacker tricks individuals into revealing sensitive credentials (such as passwords, OTPs, or bank details) through fraudulent emails mimicking trusted entities is known as:",
    options: [
      { id: "A", text: "Phishing" },
      { id: "B", text: "Denial of Service (DoS)" },
      { id: "C", text: "Trojan Horse" },
      { id: "D", text: "SQL Injection" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Phishing: Correct! Social engineering attack using spoofed communications to lure victims into surrendering confidential credentials.",
      "B": "DoS: Flooding network traffic to render a server unavailable.",
      "C": "Trojan Horse: Malicious software disguised as legitimate utilities.",
      "D": "SQL Injection: Inserting malicious database queries via input fields."
    },
    summaryExplanation: "Phishing employs deceptive emails or fake websites to steal passwords and financial information."
  },
  {
    id: "p1-u8-q7",
    paper: "paper1",
    unitId: "p1-u8",
    unitNumber: 2,
    unitName: "Information and Communication Technology (ICT)",
    examSource: "UGC NET Dec 2022",
    question: "How many bits are there in a single 'Nibble'?",
    options: [
      { id: "A", text: "2 bits" },
      { id: "B", text: "4 bits" },
      { id: "C", text: "8 bits" },
      { id: "D", text: "16 bits" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "2 bits: Dibit.",
      "B": "4 bits: Correct! A nibble (or nybble) consists of exactly 4 bits, which corresponds to one hexadecimal digit.",
      "C": "8 bits: One Byte.",
      "D": "16 bits: One Word (in 16-bit architectures) or 2 bytes."
    },
    summaryExplanation: "1 Byte = 8 bits. 1 Nibble = half a byte = 4 bits."
  },
  {
    id: "p1-u8-q8",
    paper: "paper1",
    unitId: "p1-u8",
    unitNumber: 8,
    unitName: "Information and Communication Technology (ICT)",
    examSource: "GSET 2023",
    question: "Which of the following email protocol fields should be used when you want to send an email copy to multiple recipients without allowing any of them to see each other's email addresses?",
    options: [
      { id: "A", text: "To" },
      { id: "B", text: "Cc (Carbon Copy)" },
      { id: "C", text: "Bcc (Blind Carbon Copy)" },
      { id: "D", text: "Subject" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "To: Primary recipient; email addresses are visible to everyone.",
      "B": "Cc: Carbon copy; addresses are publicly visible to all recipients.",
      "C": "Bcc: Correct! Blind Carbon Copy conceals the recipient addresses from all other recipients for privacy.",
      "D": "Subject: Summary line of the email."
    },
    summaryExplanation: "Bcc (Blind Carbon Copy) conceals recipient email addresses from other message recipients."
  },
  {
    id: "p1-u8-q9",
    paper: "paper1",
    unitId: "p1-u8",
    unitNumber: 8,
    unitName: "Information and Communication Technology (ICT)",
    examSource: "UGC NET June 2023",
    question: "Malicious software that encrypts user data files and demands a ransom payment (often in cryptocurrency) to restore access is called:",
    options: [
      { id: "A", text: "Adware" },
      { id: "B", text: "Ransomware" },
      { id: "C", text: "Spyware" },
      { id: "D", text: "Rootkit" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Adware: Automatically displays unsolicited advertisements.",
      "B": "Ransomware: Correct! Extortion malware (e.g., WannaCry) that encrypts files and demands payment for the decryption key.",
      "C": "Spyware: Secretly monitors user activity and keystrokes.",
      "D": "Rootkit: Grants privileged root access while concealing its presence."
    },
    summaryExplanation: "Ransomware encrypts victim systems and demands financial ransom for data decryption."
  },
  {
    id: "p1-u8-q10",
    paper: "paper1",
    unitId: "p1-u8",
    unitNumber: 8,
    unitName: "Information and Communication Technology (ICT)",
    examSource: "TN-SET 2024",
    question: "What is the primary difference between IPv4 and IPv6 addressing schemes?",
    options: [
      { id: "A", text: "IPv4 is 16-bit while IPv6 is 32-bit" },
      { id: "B", text: "IPv4 is 32-bit (4 bytes) while IPv6 is 128-bit (16 bytes)" },
      { id: "C", text: "IPv4 uses letters while IPv6 uses only binary numbers" },
      { id: "D", text: "IPv4 is wireless while IPv6 requires optical cables" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Incorrect bit lengths.",
      "B": "IPv4 32-bit vs IPv6 128-bit: Correct! IPv4 uses 32 bits (~4.3 billion addresses, dot-decimal); IPv6 uses 128 bits (3.4×10³⁸ addresses, hexadecimal).",
      "C": "IPv4 is numeric; IPv6 contains hexadecimal letters (A-F).",
      "D": "Addressing protocols are independent of physical transmission media."
    },
    summaryExplanation: "IPv4 provides 32-bit addressing, whereas IPv6 expands to 128-bit hexadecimal addressing."
  },
  {
    id: "p1-u8-q11",
    paper: "paper1",
    unitId: "p1-u8",
    unitNumber: 8,
    unitName: "Information and Communication Technology (ICT)",
    examSource: "UGC NET Dec 2023",
    question: "Which of the following optical disc formats offers the HIGHEST data storage capacity for a standard single-layer commercial disc?",
    options: [
      { id: "A", text: "CD-ROM (~700 MB)" },
      { id: "B", text: "DVD-ROM (~4.7 GB)" },
      { id: "C", text: "Blu-ray Disc (~25 GB)" },
      { id: "D", text: "Floppy Disk (~1.44 MB)" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "CD-ROM: ~700 MB capacity.",
      "B": "DVD-ROM: ~4.7 GB capacity.",
      "C": "Blu-ray Disc: Correct! Uses blue-violet laser (405 nm) providing ~25 GB on a single layer (50 GB dual-layer).",
      "D": "Floppy Disk: Magnetic legacy medium (~1.44 MB)."
    },
    summaryExplanation: "Capacity progression: Floppy (1.44 MB) < CD (700 MB) < DVD (4.7 GB) < Blu-ray (25 GB)."
  },
  {
    id: "p1-u8-q12",
    paper: "paper1",
    unitId: "p1-u8",
    unitNumber: 8,
    unitName: "Information and Communication Technology (ICT)",
    examSource: "MH-SET 2023",
    question: "What does the abbreviation 'GUI' stand for in computer operating systems?",
    options: [
      { id: "A", text: "General User Instruction" },
      { id: "B", text: "Graphical User Interface" },
      { id: "C", text: "Global Unified Internet" },
      { id: "D", text: "Graphics Unit Integration" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Incorrect expansion.",
      "B": "Graphical User Interface: Correct! Visual interface with windows, icons, menus, and pointers (WIMP) replacing command-line text terminals.",
      "C": "Incorrect expansion.",
      "D": "Incorrect expansion."
    },
    summaryExplanation: "GUI stands for Graphical User Interface, enabling visual interaction through windows and icons."
  },
  {
    id: "p1-u8-q13",
    paper: "paper1",
    unitId: "p1-u8",
    unitNumber: 8,
    unitName: "Information and Communication Technology (ICT)",
    examSource: "WB-SET 2024",
    question: "Which digital platform launched by the Ministry of Education serves as the National Academic Depository (NAD) allowing citizens to access authenticated digital educational degrees via DigiLocker?",
    options: [
      { id: "A", text: "e-ShodhSindhu" },
      { id: "B", text: "NAD DigiLocker" },
      { id: "C", text: "FOSSEE" },
      { id: "D", text: "Virtual Labs" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "e-ShodhSindhu: E-journal consortium.",
      "B": "NAD DigiLocker: Correct! 24x7 online storehouse of academic awards, diplomas, and degrees verified digitally.",
      "C": "FOSSEE: Free and Open Source Software for Education.",
      "D": "Virtual Labs: Online science and engineering simulations."
    },
    summaryExplanation: "NAD (National Academic Depository) integrated with DigiLocker provides authentic digital certificates and degrees."
  },
  {
    id: "p1-u8-q14",
    paper: "paper1",
    unitId: "p1-u8",
    unitNumber: 8,
    unitName: "Information and Communication Technology (ICT)",
    examSource: "UGC NET June 2024",
    question: "What is the binary addition of: (1011)₂ + (0101)₂ ?",
    options: [
      { id: "A", text: "(10000)₂" },
      { id: "B", text: "(11110)₂" },
      { id: "C", text: "(10001)₂" },
      { id: "D", text: "(11000)₂" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "(10000)₂: Correct! (1011)₂ in decimal is 8+2+1 = 11. (0101)₂ in decimal is 4+1 = 5. Sum = 11 + 5 = 16. In binary, 16 is 2⁴ = (10000)₂.",
      "B": "(11110)₂: Equals 30 in decimal.",
      "C": "(10001)₂: Equals 17 in decimal.",
      "D": "(11000)₂: Equals 24 in decimal."
    },
    summaryExplanation: "11 + 5 = 16 = (10000)₂."
  },
  {
    id: "p1-u8-q15",
    paper: "paper1",
    unitId: "p1-u8",
    unitNumber: 8,
    unitName: "Information and Communication Technology (ICT)",
    examSource: "KSET 2024",
    question: "Which of the following communication protocols is specifically used to retrieve incoming emails from a remote mail server to a local client computer?",
    options: [
      { id: "A", text: "SMTP" },
      { id: "B", text: "POP3 / IMAP" },
      { id: "C", text: "HTTP" },
      { id: "D", text: "FTP" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "SMTP: Simple Mail Transfer Protocol; used for *sending* / transmitting outgoing emails.",
      "B": "POP3 / IMAP: Correct! Post Office Protocol 3 and Internet Message Access Protocol are used to retrieve emails from the mail server.",
      "C": "HTTP: Web hyper-text transfer.",
      "D": "FTP: File transfer protocol."
    },
    summaryExplanation: "SMTP sends email; POP3 and IMAP receive and download email from mail servers."
  },
  {
    id: "p1-u8-q16",
    paper: "paper1",
    unitId: "p1-u8",
    unitNumber: 8,
    unitName: "Information and Communication Technology (ICT)",
    examSource: "UGC NET Dec 2023",
    question: "What is 'Phishing' via SMS (short message service) on mobile phones termed as in cybersecurity?",
    options: [
      { id: "A", text: "Smishing" },
      { id: "B", text: "Vishing" },
      { id: "C", text: "Spoofing" },
      { id: "D", text: "Pharming" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Smishing: Correct! Portmanteau of SMS + Phishing; fraudulent text messages designed to trick victims into sharing private credentials.",
      "B": "Vishing: Voice phishing via telephone calls.",
      "C": "Spoofing: Faking email headers or IP origins.",
      "D": "Pharming: Redirecting web traffic to a fake website by poisoning DNS caches."
    },
    summaryExplanation: "Smishing is social engineering phishing executed through deceptive SMS text messaging."
  },
  {
    id: "p1-u8-q17",
    paper: "paper1",
    unitId: "p1-u8",
    unitNumber: 8,
    unitName: "Information and Communication Technology (ICT)",
    examSource: "AP-SET 2023",
    question: "Which Indian digital initiative provides free, online, interactive laboratory simulations in Science and Engineering for students without physical access to costly equipment?",
    options: [
      { id: "A", text: "Virtual Labs" },
      { id: "B", text: "TALK to a Teacher" },
      { id: "C", text: "Spoken Tutorial" },
      { id: "D", text: "e-Kalpa" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Virtual Labs: Correct! Under NMEICT; provides remote-access simulation experiments across engineering and science disciplines.",
      "B": "Talk to a Teacher: Video lecture repository.",
      "C": "Spoken Tutorial: Self-paced IT and programming software training.",
      "D": "e-Kalpa: Digital design education initiative."
    },
    summaryExplanation: "Virtual Labs provides remote laboratory simulations across engineering and scientific curricula."
  },
  {
    id: "p1-u8-q18",
    paper: "paper1",
    unitId: "p1-u8",
    unitNumber: 8,
    unitName: "Information and Communication Technology (ICT)",
    examSource: "MH-SET 2024",
    question: "In computer character encoding, standard 7-bit ASCII can uniquely represent how many distinct characters?",
    options: [
      { id: "A", text: "64" },
      { id: "B", text: "128" },
      { id: "C", text: "256" },
      { id: "D", text: "512" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "64: 2⁶.",
      "B": "128: Correct! Standard ASCII uses 7 bits, providing 2⁷ = 128 unique character codes (0 to 127).",
      "C": "256: 8-bit Extended ASCII (2⁸ = 256).",
      "D": "512: 2⁹."
    },
    summaryExplanation: "Standard 7-bit ASCII represents 2⁷ = 128 distinct alphanumeric and control characters."
  },
  {
    id: "p1-u8-q19",
    paper: "paper1",
    unitId: "p1-u8",
    unitNumber: 8,
    unitName: "Information and Communication Technology (ICT)",
    examSource: "UGC NET June 2023",
    question: "What is a 'Firewall' primarily used for in computer network security?",
    options: [
      { id: "A", text: "Extinguishing electrical flames in computer server rooms" },
      { id: "B", text: "Monitoring and filtering incoming and outgoing network traffic based on predetermined security rules" },
      { id: "C", text: "Increasing CPU clock speed" },
      { id: "D", text: "Defragmenting secondary storage sectors" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Extinguishing flames: Literal pun.",
      "B": "Filtering network traffic: Correct! A network security device/software that blocks unauthorized access while permitting legitimate traffic.",
      "C": "CPU speed: Overclocking function.",
      "D": "Defragmenting: Disk maintenance utility."
    },
    summaryExplanation: "A firewall filters unauthorized external connections based on defined security rules."
  },
  {
    id: "p1-u8-q20",
    paper: "paper1",
    unitId: "p1-u8",
    unitNumber: 8,
    unitName: "Information and Communication Technology (ICT)",
    examSource: "GSET 2024",
    question: "How many Kilobytes (KB) are there in exactly 1 Gigabyte (GB) in standard binary computing (base-2)?",
    options: [
      { id: "A", text: "1,000 KB" },
      { id: "B", text: "1,024 KB" },
      { id: "C", text: "1,048,576 KB (1024 × 1024)" },
      { id: "D", text: "1,000,000,000 KB" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "1,000 KB: That is 1 Megabyte in decimal.",
      "B": "1,024 KB: That is 1 Megabyte (MB) in binary.",
      "C": "1,048,576 KB: Correct! 1 GB = 1024 MB. 1 MB = 1024 KB. Thus, 1 GB = 1024 * 1024 = 1,048,576 KB.",
      "D": "Decimal billion."
    },
    summaryExplanation: "1 GB = 1024 MB = 1024 * 1024 KB = 1,048,576 KB."
  },
  {
    id: "p1-u8-q21",
    paper: "paper1",
    unitId: "p1-u8",
    unitNumber: 8,
    unitName: "Information and Communication Technology (ICT)",
    examSource: "WB-SET 2023",
    question: "Which of the following is an open-source Learning Management System (LMS) widely adopted in Indian and international universities?",
    options: [
      { id: "A", text: "Moodle" },
      { id: "B", text: "Microsoft Windows" },
      { id: "C", text: "Adobe Photoshop" },
      { id: "D", text: "AutoCAD" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Moodle: Correct! Modular Object-Oriented Dynamic Learning Environment; free, open-source LMS for course delivery, quizzes, and gradebooks.",
      "B": "Windows: Proprietary OS.",
      "C": "Photoshop: Raster graphics software.",
      "D": "AutoCAD: Computer-aided design software."
    },
    summaryExplanation: "Moodle is the premier global open-source Learning Management System for e-learning."
  },
  {
    id: "p1-u8-q22",
    paper: "paper1",
    unitId: "p1-u8",
    unitNumber: 8,
    unitName: "Information and Communication Technology (ICT)",
    examSource: "UGC NET Dec 2023",
    question: "What is the hexadecimal representation of the binary number: (1111 0000)₂ ?",
    options: [
      { id: "A", text: "(F0)₁₆" },
      { id: "B", text: "(0F)₁₆" },
      { id: "C", text: "(E0)₁₆" },
      { id: "D", text: "(FF)₁₆" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "(F0)₁₆: Correct! Split into 4-bit nibbles: (1111)₂ = 15 = F in hex; (0000)₂ = 0. Combined = (F0)₁₆.",
      "B": "(0F)₁₆: Inverted nibbles.",
      "C": "(E0)₁₆: (1110 0000)₂.",
      "D": "(FF)₁₆: (1111 1111)₂."
    },
    summaryExplanation: "1111₂ = F₁₆ and 0000₂ = 0₁₆ ⇒ (F0)₁₆."
  },
  {
    id: "p1-u8-q23",
    paper: "paper1",
    unitId: "p1-u8",
    unitNumber: 8,
    unitName: "Information and Communication Technology (ICT)",
    examSource: "KSET 2023",
    question: "What does the 'S' stand for in the web protocol 'HTTPS'?",
    options: [
      { id: "A", text: "Standard" },
      { id: "B", text: "Secure" },
      { id: "C", text: "Speed" },
      { id: "D", text: "System" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Standard: Incorrect.",
      "B": "Secure: Correct! Hypertext Transfer Protocol Secure; encrypts HTTP traffic using TLS/SSL cryptographic protocols.",
      "C": "Speed: Incorrect.",
      "D": "System: Incorrect."
    },
    summaryExplanation: "HTTPS = Hypertext Transfer Protocol Secure, protecting data confidentiality via SSL/TLS encryption."
  },
  {
    id: "p1-u8-q24",
    paper: "paper1",
    unitId: "p1-u8",
    unitNumber: 8,
    unitName: "Information and Communication Technology (ICT)",
    examSource: "UGC NET June 2024",
    question: "A self-replicating malicious computer program that spreads across networks without needing any human intervention or host file to attach to is known as a:",
    options: [
      { id: "A", text: "Computer Virus" },
      { id: "B", text: "Computer Worm" },
      { id: "C", text: "Macro virus" },
      { id: "D", text: "Cookie" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Virus: Requires a human action (executing an infected file) and a host program to attach and replicate.",
      "B": "Worm: Correct! Standalone malware that actively exploits network vulnerabilities to spread autonomously without human intervention.",
      "C": "Macro virus: Embedded within documents/spreadsheets requiring file execution.",
      "D": "Cookie: Harmless browser state tracking text file."
    },
    summaryExplanation: "Worms replicate autonomously over computer networks without host programs or user execution."
  },
  {
    id: "p1-u8-q25",
    paper: "paper1",
    unitId: "p1-u8",
    unitNumber: 8,
    unitName: "Information and Communication Technology (ICT)",
    examSource: "MH-SET 2023",
    question: "Which of the following describes 'Cloud Computing'?",
    options: [
      { id: "A", text: "Forecasting weather patterns using radar satellites" },
      { id: "B", text: "On-demand availability of computer system resources (especially data storage and computing power) over the internet without direct active management by the user" },
      { id: "C", text: "Running programs only during rainy seasons" },
      { id: "D", text: "Hard drives built out of vaporized silicon" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Weather forecasting: Meteorology.",
      "B": "On-demand resources over internet: Correct! Delivery of computing services (servers, storage, databases, networking, software) over the cloud (AWS, Azure, Google Cloud).",
      "C": "Rainy season: Literal humorous distractor.",
      "D": "Vaporized silicon: Spurious."
    },
    summaryExplanation: "Cloud computing delivers elastic, on-demand compute and storage resources across the internet."
  },
  {
    id: "p1-u8-q26",
    paper: "paper1",
    unitId: "p1-u8",
    unitNumber: 8,
    unitName: "Information and Communication Technology (ICT)",
    examSource: "AP-SET 2024",
    question: "What is the four-quadrant approach mandated under the SWAYAM MOOCs platform?",
    options: [
      { id: "A", text: "Video lecture, Specially prepared reading material, Self-assessment tests, and Online discussion forum" },
      { id: "B", text: "Audio CD, Textbook, Pen drive, and Written examination" },
      { id: "C", text: "Lecture, Homework, Term paper, and Viva" },
      { id: "D", text: "Classroom, Blackboard, Teacher, and Student" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Four quadrants: Correct! Quadrant 1: e-Tutorial (video); Quadrant 2: e-Content (reading text); Quadrant 3: Assessment (quizzes); Quadrant 4: Discussion Forum (clearing doubts).",
      "B": "Physical media.",
      "C": "Traditional evaluation.",
      "D": "Traditional classroom elements."
    },
    summaryExplanation: "SWAYAM 4 quadrants: Video tutorial, Reading text, Assessment/quizzes, and Discussion forum."
  },
  {
    id: "p1-u8-q27",
    paper: "paper1",
    unitId: "p1-u8",
    unitNumber: 8,
    unitName: "Information and Communication Technology (ICT)",
    examSource: "UGC NET Dec 2023",
    question: "What type of port is 'HDMI' used for in modern computers and audiovisual equipment?",
    options: [
      { id: "A", text: "High-Definition Multimedia Interface (transmits uncompressed video and multichannel audio)" },
      { id: "B", text: "High Data Memory Internet" },
      { id: "C", text: "Host Diagnostic Module Interconnect" },
      { id: "D", text: "Hard Disk Magnetic Interface" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "High-Definition Multimedia Interface: Correct! Proprietary audio/video interface transmitting uncompressed digital video and compressed/uncompressed digital audio.",
      "B": "Incorrect expansion.",
      "C": "Incorrect expansion.",
      "D": "Incorrect expansion."
    },
    summaryExplanation: "HDMI transmits high-definition digital audio and video signals through a single cable."
  },
  {
    id: "p1-u8-q28",
    paper: "paper1",
    unitId: "p1-u8",
    unitNumber: 8,
    unitName: "Information and Communication Technology (ICT)",
    examSource: "WB-SET 2024",
    question: "Which of the following is NOT an open-source operating system?",
    options: [
      { id: "A", text: "Ubuntu Linux" },
      { id: "B", text: "Microsoft Windows 11" },
      { id: "C", text: "Fedora" },
      { id: "D", text: "Debian" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Ubuntu Linux: Open-source (GPL licensed).",
      "B": "Windows 11: Correct! Proprietary, closed-source commercial operating system owned by Microsoft Corporation.",
      "C": "Fedora: Community-driven open-source Linux distribution.",
      "D": "Debian: Universal open-source Linux OS."
    },
    summaryExplanation: "Microsoft Windows is closed-source proprietary software, unlike open-source Linux distributions."
  },
  {
    id: "p1-u8-q29",
    paper: "paper1",
    unitId: "p1-u8",
    unitNumber: 8,
    unitName: "Information and Communication Technology (ICT)",
    examSource: "UGC NET June 2023",
    question: "What is the function of the 'MAC Address' (Media Access Control) of a network device?",
    options: [
      { id: "A", text: "It is a dynamic logical address assigned by an ISP that changes with each login" },
      { id: "B", text: "It is a unique 48-bit physical hardware identifier permanently burned into the Network Interface Card (NIC)" },
      { id: "C", text: "It indicates the postal address of Apple Computer headquarters" },
      { id: "D", text: "It measures the internet download speed" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Dynamic logical address: That describes a dynamic IP address.",
      "B": "48-bit hardware identifier: Correct! MAC address is a 48-bit (6-byte) unique hardware identifier engraved by the manufacturer in hex (e.g., 00:1A:2B:3C:4D:5E).",
      "C": "Apple address: Pun on Mac computers.",
      "D": "Download speed: Bandwidth metric."
    },
    summaryExplanation: "A MAC address is a unique 48-bit physical hardware identifier assigned to network interface cards."
  },
  {
    id: "p1-u8-q30",
    paper: "paper1",
    unitId: "p1-u8",
    unitNumber: 8,
    unitName: "Information and Communication Technology (ICT)",
    examSource: "MH-SET 2024",
    question: "Which of the following file extensions represents a lossless compressed audio format?",
    options: [
      { id: "A", text: ".FLAC" },
      { id: "B", text: ".MP3" },
      { id: "C", text: ".JPG" },
      { id: "D", text: ".AVI" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": ".FLAC: Correct! Free Lossless Audio Codec; compresses audio without discarding any acoustic data or audio quality.",
      "B": ".MP3: Lossy audio compression format that discards psychoacoustic frequencies.",
      "C": ".JPG: Lossy image format.",
      "D": ".AVI: Video container format."
    },
    summaryExplanation: "FLAC provides bit-perfect lossless audio compression, unlike lossy MP3 compression."
  }
];
