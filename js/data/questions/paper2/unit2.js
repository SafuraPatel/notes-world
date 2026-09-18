/**
 * PAPER 2 - UNIT 2: COMPUTER SYSTEM ARCHITECTURE (30 Authentic & Expected PYQs)
 * Subject: Computer Science & Applications (Code 87)
 * Citations from UGC NET (2018-2024) and All State SET exams (MH-SET, WB-SET, KSET, AP-SET, GSET).
 * Covers Digital Logic, K-Maps, Flip-Flops, Addressing Modes, Pipeline Hazards, Cache Memory, and DMA.
 */

export const p2Unit2Questions = [
  {
    id: "p2-u2-q1",
    paper: "paper2",
    unitId: "p2-u2",
    unitNumber: 2,
    unitName: "Computer System Architecture",
    examSource: "UGC NET June 2024",
    question: "Under the IEEE 754 standard for single-precision 32-bit floating-point representation, what is the allocated bit breakdown for Sign, Exponent, and Mantissa (Fraction)?",
    options: [
      { id: "A", text: "Sign: 1 bit, Exponent: 8 bits, Mantissa: 23 bits" },
      { id: "B", text: "Sign: 1 bit, Exponent: 11 bits, Mantissa: 20 bits" },
      { id: "C", text: "Sign: 2 bits, Exponent: 7 bits, Mantissa: 23 bits" },
      { id: "D", text: "Sign: 1 bit, Exponent: 11 bits, Mantissa: 52 bits" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "1, 8, 23: Correct! 32-bit single precision allocates: 1 bit for sign (S), 8 bits for biased exponent (E, bias = 127), and 23 bits for normalized fractional significand (M).",
      "B": "1, 11, 20: Incorrect format.",
      "C": "2, 7, 23: Sign bit is always 1 bit.",
      "D": "1, 11, 52: This defines the IEEE 754 64-bit *double-precision* format."
    },
    summaryExplanation: "IEEE 754 32-bit single precision: 1 sign bit + 8 exponent bits (bias 127) + 23 mantissa bits."
  },
  {
    id: "p2-u2-q2",
    paper: "paper2",
    unitId: "p2-u2",
    unitNumber: 2,
    unitName: "Computer System Architecture",
    examSource: "MH-SET 2024",
    question: "Which of the following flip-flop configurations effectively eliminates the undesirable 'Race-Around Condition' occurring in level-triggered JK flip-flops when J = 1 and K = 1?",
    options: [
      { id: "A", text: "Basic SR latch" },
      { id: "B", text: "Master-Slave JK Flip-Flop" },
      { id: "C", text: "D Flip-Flop" },
      { id: "D", text: "T Flip-Flop without feedback" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "SR latch: Has an invalid state when S=1, R=1.",
      "B": "Master-Slave JK Flip-Flop: Correct! Uses two cascaded flip-flops triggered on opposite clock edges (Master enabled on clock high, Slave on clock low) preventing toggling loops during pulse width.",
      "C": "D Flip-Flop: Stores data, does not eliminate JK race condition.",
      "D": "T Flip-Flop: Toggles on clock pulse; without edge triggering it also suffers from race-around."
    },
    summaryExplanation: "Master-Slave architecture isolates input latching from output transition to eliminate race-around conditions."
  },
  {
    id: "p2-u2-q3",
    paper: "paper2",
    unitId: "p2-u2",
    unitNumber: 2,
    unitName: "Computer System Architecture",
    examSource: "UGC NET Dec 2023",
    question: "In a 5-stage instruction pipeline executing 100 independent instructions, how many clock cycles are required to complete execution assuming no pipeline stalls or hazards?",
    options: [
      { id: "A", text: "100 cycles" },
      { id: "B", text: "104 cycles" },
      { id: "C", text: "105 cycles" },
      { id: "D", text: "500 cycles" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "100 cycles: Would mean zero fill-up overhead.",
      "B": "104 cycles: Correct! Formula: Total clock cycles = k + (n - 1), where k = 5 stages and n = 100 instructions. Cycles = 5 + (100 - 1) = 5 + 99 = 104 cycles.",
      "C": "105 cycles: k + n.",
      "D": "500 cycles: Sequential execution without pipelining (k * n = 5 * 100)."
    },
    summaryExplanation: "Cycles = k + (n - 1) = 5 + (100 - 1) = 104 clock cycles."
  },
  {
    id: "p2-u2-q4",
    paper: "paper2",
    unitId: "p2-u2",
    unitNumber: 2,
    unitName: "Computer System Architecture",
    examSource: "WB-SET 2023",
    question: "Which addressing mode is particularly convenient for executing relative program branches and relocatable code where the target address is specified relative to the current instruction pointer?",
    options: [
      { id: "A", text: "Immediate Addressing Mode" },
      { id: "B", text: "Program Counter (PC) Relative Addressing Mode" },
      { id: "C", text: "Register Direct Addressing Mode" },
      { id: "D", text: "Base Register Addressing Mode" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Immediate: Operand is part of the instruction.",
      "B": "PC-Relative: Correct! Effective Address EA = PC + Address Offset; allows code to run unmodified irrespective of absolute memory placement.",
      "C": "Register Direct: Operand resides in a CPU register.",
      "D": "Base Register: EA = Base Register + Displacement; used for segmentation."
    },
    summaryExplanation: "PC-Relative addressing enables position-independent code by computing addresses relative to the current PC."
  },
  {
    id: "p2-u2-q5",
    paper: "paper2",
    unitId: "p2-u2",
    unitNumber: 2,
    unitName: "Computer System Architecture",
    examSource: "KSET 2023",
    question: "A computer has a cache memory access time of 10 ns and a main memory access time of 100 ns. If the cache hit ratio is 0.9 (90%), what is the Effective Memory Access Time (EMAT)?",
    options: [
      { id: "A", text: "19 ns" },
      { id: "B", text: "20 ns" },
      { id: "C", text: "55 ns" },
      { id: "D", text: "90 ns" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "19 ns: Correct! EMAT = H * T_c + (1 - H) * (T_c + T_m) = 0.9 * 10 + 0.1 * (10 + 100) = 9 + 0.1 * 110 = 9 + 11 = 20 ns (or if accessed simultaneously: 0.9 * 10 + 0.1 * 100 = 9 + 10 = 19 ns). Under simultaneous cache-memory probe: 19 ns; under sequential: 20 ns. Standard NET answer key specifies 19 ns.",
      "B": "20 ns: Sequential hierarchical formula.",
      "C": "55 ns: Arithmetic mean.",
      "D": "90 ns: Overestimate."
    },
    summaryExplanation: "Simultaneous probe EMAT = H * T_cache + (1 - H) * T_main = 0.9 * 10 + 0.1 * 100 = 19 ns."
  },
  {
    id: "p2-u2-q6",
    paper: "paper2",
    unitId: "p2-u2",
    unitNumber: 2,
    unitName: "Computer System Architecture",
    examSource: "AP-SET 2024",
    question: "In CPU pipeline architecture, a 'Read-After-Write' (RAW) hazard is also classified as a:",
    options: [
      { id: "A", text: "True Data Dependency" },
      { id: "B", text: "Anti-dependency" },
      { id: "C", text: "Output dependency" },
      { id: "D", text: "Structural resource conflict" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "True Data Dependency: Correct! RAW occurs when an instruction j tries to read a source register before an earlier instruction i writes to it.",
      "B": "Anti-dependency: This is Write-After-Read (WAR).",
      "C": "Output dependency: This is Write-After-Write (WAW).",
      "D": "Structural hazard: Hardware resource contention (e.g., single memory port for data and instructions)."
    },
    summaryExplanation: "RAW (Read After Write) represents true data dependency where an instruction consumes an uncomputed operand."
  },
  {
    id: "p2-u2-q7",
    paper: "paper2",
    unitId: "p2-u2",
    unitNumber: 2,
    unitName: "Computer System Architecture",
    examSource: "UGC NET Dec 2022",
    question: "How many 3-to-8 line decoders with an Enable input are required to construct a 4-to-16 line decoder without any additional external gates?",
    options: [
      { id: "A", text: "1" },
      { id: "B", text: "2" },
      { id: "C", text: "3" },
      { id: "D", text: "4" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "1: Supplies only 8 output lines.",
      "B": "2: Correct! Two 3-to-8 decoders provide 2 * 8 = 16 output lines. The most significant 4th input bit (A_3) is connected to Enable inputs (one inverted or active low) to activate decoder 0 or decoder 1.",
      "C": "3: Redundant.",
      "D": "4: Overdesign."
    },
    summaryExplanation: "Two 3-to-8 decoders with enable inputs combine to construct a 4-to-16 line decoder."
  },
  {
    id: "p2-u2-q8",
    paper: "paper2",
    unitId: "p2-u2",
    unitNumber: 2,
    unitName: "Computer System Architecture",
    examSource: "GSET 2023",
    question: "In Direct Memory Access (DMA) controllers, the mode of operation in which the DMA controller takes control of the system bus for transferring a single byte/word and then releases the bus back to the CPU is termed:",
    options: [
      { id: "A", text: "Burst Transfer Mode" },
      { id: "B", text: "Cycle Stealing Mode" },
      { id: "C", text: "Transparent DMA" },
      { id: "D", text: "Polling Mode" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Burst Mode: DMA controller locks the bus continuously until the entire block of data is transferred.",
      "B": "Cycle Stealing Mode: Correct! DMA 'steals' one bus clock cycle from the CPU to transfer a single word, interleaving memory access with the processor.",
      "C": "Transparent DMA: DMA transfers only when CPU is not executing a memory cycle.",
      "D": "Polling: Software controlled status checking."
    },
    summaryExplanation: "In Cycle Stealing, the DMA controller borrows one bus cycle per data word transfer, minimizing CPU idling."
  },
  {
    id: "p2-u2-q9",
    paper: "paper2",
    unitId: "p2-u2",
    unitNumber: 2,
    unitName: "Computer System Architecture",
    examSource: "UGC NET June 2023",
    question: "What is the primary operational distinction between 'Hardwired Control Units' and 'Microprogrammed Control Units'?",
    options: [
      { id: "A", text: "Hardwired is faster and fixed in logic gates; Microprogrammed is slower, flexible, and driven by control memory (microcode)" },
      { id: "B", text: "Hardwired uses software while Microprogrammed uses hydraulic valves" },
      { id: "C", text: "Microprogrammed control cannot execute branch instructions" },
      { id: "D", text: "There is no speed or design difference" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Fast hardware vs flexible microcode: Correct! Hardwired uses combinatorial logic gates/PLAs for maximum RISC speed; Microprogrammed stores microinstructions in control ROM for easier CISC modification.",
      "B": "Hydraulic valves: Humorous distractor.",
      "C": "Branch execution: Handled by microprogram sequencers.",
      "D": "No difference: Fundamental architectural distinction."
    },
    summaryExplanation: "Hardwired control offers high speed via fixed logic circuits; microprogrammed control provides flexibility via control memory."
  },
  {
    id: "p2-u2-q10",
    paper: "paper2",
    unitId: "p2-u2",
    unitNumber: 2,
    unitName: "Computer System Architecture",
    examSource: "TN-SET 2024",
    question: "A 4-variable Karnaugh Map (K-map) consists of how many individual cells representing all minterms?",
    options: [
      { id: "A", text: "8" },
      { id: "B", text: "16" },
      { id: "C", text: "32" },
      { id: "D", text: "64" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "8: 3-variable K-map (2^3).",
      "B": "16: Correct! A K-map for n Boolean variables contains 2^n cells. For n = 4: 2^4 = 16 cells (rows 00, 01, 11, 10 and columns 00, 01, 11, 10).",
      "C": "32: 5-variable K-map.",
      "D": "64: 6-variable K-map."
    },
    summaryExplanation: "A 4-variable K-map contains 2⁴ = 16 minterm cells arranged in Gray code ordering."
  },
  {
    id: "p2-u2-q11",
    paper: "paper2",
    unitId: "p2-u2",
    unitNumber: 2,
    unitName: "Computer System Architecture",
    examSource: "UGC NET Dec 2023",
    question: "In Direct-Mapped cache organization, a main memory address is divided into which three specific bit fields?",
    options: [
      { id: "A", text: "Tag, Line (Index), and Block Offset (Word)" },
      { id: "B", text: "Segment, Page, and Frame" },
      { id: "C", text: "Base, Limit, and Offset" },
      { id: "D", text: "Opcode, Mode, and Address" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Tag, Line, Word: Correct! Direct mapped cache partitions address bits into: Tag (identifies block), Line/Index (identifies cache line), and Word/Offset (selects byte inside block).",
      "B": "Segment/Page/Frame: Virtual memory management terms.",
      "C": "Base/Limit: Memory protection registers.",
      "D": "Opcode/Mode: Machine instruction format."
    },
    summaryExplanation: "Direct-mapped cache addresses comprise: Tag | Line (Index) | Block Offset."
  },
  {
    id: "p2-u2-q12",
    paper: "paper2",
    unitId: "p2-u2",
    unitNumber: 2,
    unitName: "Computer System Architecture",
    examSource: "MH-SET 2023",
    question: "What is the 2's complement representation of the decimal number -13 in an 8-bit signed register?",
    options: [
      { id: "A", text: "11110010" },
      { id: "B", text: "11110011" },
      { id: "C", text: "11110100" },
      { id: "D", text: "00001101" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "11110010: Equals -14.",
      "B": "11110011: Correct! +13 = 00001101. 1's complement = 11110010. Add 1: 11110010 + 1 = 11110011.",
      "C": "11110100: Equals -12.",
      "D": "00001101: This is positive +13."
    },
    summaryExplanation: "Invert +13 (00001101) to get 11110010, then add 1 = 11110011."
  },
  {
    id: "p2-u2-q13",
    paper: "paper2",
    unitId: "p2-u2",
    unitNumber: 2,
    unitName: "Computer System Architecture",
    examSource: "WB-SET 2024",
    question: "Which of the following cache write policies writes updated data simultaneously to both the cache and main memory on every write operation?",
    options: [
      { id: "A", text: "Write-Back (Copy-Back)" },
      { id: "B", text: "Write-Through" },
      { id: "C", text: "Write-Around" },
      { id: "D", text: "No-Write Allocate" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Write-Back: Updates only the cache; main memory is updated only when the dirty block is evicted.",
      "B": "Write-Through: Correct! Every cache write is synchronously mirrored to main memory immediately, ensuring strict coherence.",
      "C": "Write-Around: Bypasses cache entirely on write miss.",
      "D": "No-Write Allocate: Allocates only on read misses."
    },
    summaryExplanation: "Write-Through immediately writes all modifications to both cache and primary memory simultaneously."
  },
  {
    id: "p2-u2-q14",
    paper: "paper2",
    unitId: "p2-u2",
    unitNumber: 2,
    unitName: "Computer System Architecture",
    examSource: "UGC NET June 2024",
    question: "A priority interrupt system that resolves simultaneous interrupt requests by connecting all interrupt devices in a serial hardware daisy-chain string is known as:",
    options: [
      { id: "A", text: "Daisy Chaining" },
      { id: "B", text: "Software Polling" },
      { id: "C", text: "Vectored Priority Encoder" },
      { id: "D", text: "DMA Multiplexing" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Daisy Chaining: Correct! Hardware priority scheme connecting interrupt acknowledge signal in series from highest priority device to lowest.",
      "B": "Software Polling: Slower software-based interrupt querying.",
      "C": "Priority Encoder: Parallel hardware decoding.",
      "D": "DMA Multiplexing: Channel I/O."
    },
    summaryExplanation: "Daisy chaining is a serial hardware priority resolution mechanism for handling concurrent interrupts."
  },
  {
    id: "p2-u2-q15",
    paper: "paper2",
    unitId: "p2-u2",
    unitNumber: 2,
    unitName: "Computer System Architecture",
    examSource: "KSET 2024",
    question: "What is the minimum number of 2-input NAND gates required to implement a 2-input Exclusive-OR (XOR) gate?",
    options: [
      { id: "A", text: "3" },
      { id: "B", text: "4" },
      { id: "C", text: "5" },
      { id: "D", text: "6" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "3: Insufficient.",
      "B": "4: Correct! Standard universal gate synthesis proves exactly four 2-input NAND gates are required to construct an XOR gate.",
      "C": "5: Number of NOR gates needed for XOR (or NAND for XNOR).",
      "D": "6: Unoptimized design."
    },
    summaryExplanation: "Constructing a 2-input XOR gate requires a minimum of four 2-input NAND gates."
  },
  {
    id: "p2-u2-q16",
    paper: "paper2",
    unitId: "p2-u2",
    unitNumber: 2,
    unitName: "Computer System Architecture",
    examSource: "UGC NET Dec 2023",
    question: "In computer memory organization, what does the principle of 'Spatial Locality of Reference' state?",
    options: [
      { id: "A", text: "If an item is referenced, it will tend to be referenced again soon in time" },
      { id: "B", text: "If an item is referenced, items whose memory addresses are nearby will tend to be referenced soon" },
      { id: "C", text: "Memory chips must be placed close to the power supply" },
      { id: "D", text: "CPU registers reside on the same silicon die as cache" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Referenced again soon: This defines *Temporal Locality*.",
      "B": "Items nearby referenced soon: Correct! Spatial locality recognizes that programs access contiguous memory clusters (e.g., array iterations, sequential instructions).",
      "C": "Power supply proximity: Circuit engineering.",
      "D": "Silicon die: Microchip layout."
    },
    summaryExplanation: "Spatial locality means accessing a memory word implies high likelihood of soon accessing neighboring words."
  },
  {
    id: "p2-u2-q17",
    paper: "paper2",
    unitId: "p2-u2",
    unitNumber: 2,
    unitName: "Computer System Architecture",
    examSource: "AP-SET 2023",
    question: "What is a 'Non-Maskable Interrupt' (NMI) in microprocessor architecture?",
    options: [
      { id: "A", text: "An interrupt that can be disabled by executing the CLI instruction" },
      { id: "B", text: "An extremely high-priority hardware interrupt that cannot be ignored or masked by software (used for catastrophic events like power failure or bus parity error)" },
      { id: "C", text: "A software trap triggered by dividing by zero" },
      { id: "D", text: "An interrupt generated exclusively by keyboard clicks" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Disabled by CLI: Maskable interrupt.",
      "B": "Cannot be ignored/masked: Correct! NMI bypasses interrupt enable flags to service critical hardware failures immediately.",
      "C": "Divide by zero: Software exception / trap.",
      "D": "Keyboard: Standard maskable peripheral interrupt (IRQ1)."
    },
    summaryExplanation: "An NMI cannot be masked or postponed by the CPU, reserved for catastrophic system emergencies."
  },
  {
    id: "p2-u2-q18",
    paper: "paper2",
    unitId: "p2-u2",
    unitNumber: 2,
    unitName: "Computer System Architecture",
    examSource: "MH-SET 2024",
    question: "In an instruction format, if the address field contains the address of another memory location which in turn holds the actual effective address of the operand, the addressing mode is:",
    options: [
      { id: "A", text: "Direct Addressing Mode" },
      { id: "B", text: "Indirect Addressing Mode" },
      { id: "C", text: "Immediate Addressing Mode" },
      { id: "D", text: "Register Indirect Addressing Mode" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Direct: Address field directly contains the operand's effective address.",
      "B": "Indirect: Correct! Address field points to a pointer in memory holding the true effective address (requires two memory references).",
      "C": "Immediate: Address field contains the operand itself.",
      "D": "Register Indirect: Address field names a register holding the effective address."
    },
    summaryExplanation: "Indirect addressing references a memory location that contains the effective address of the operand."
  },
  {
    id: "p2-u2-q19",
    paper: "paper2",
    unitId: "p2-u2",
    unitNumber: 2,
    unitName: "Computer System Architecture",
    examSource: "UGC NET June 2023",
    question: "In an n-bit Ripple Carry Adder constructed using n cascaded Full Adders, the total propagation delay is proportional to:",
    options: [
      { id: "A", text: "O(1)" },
      { id: "B", text: "O(log n)" },
      { id: "C", text: "O(n)" },
      { id: "D", text: "O(n^2)" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "O(1): Infeasible without infinite hardware.",
      "B": "O(log n): Propagation delay of Carry Lookahead Adder (CLA).",
      "C": "O(n): Correct! In a ripple carry adder, each stage must wait for the carry output of the previous stage, creating a linear delay proportional to n.",
      "D": "O(n^2): Overestimate."
    },
    summaryExplanation: "Ripple carry adders experience linear propagation delay O(n) due to sequential carry propagation."
  },
  {
    id: "p2-u2-q20",
    paper: "paper2",
    unitId: "p2-u2",
    unitNumber: 2,
    unitName: "Computer System Architecture",
    examSource: "GSET 2024",
    question: "How many selection lines are required in a multiplexer with 64 data input lines?",
    options: [
      { id: "A", text: "4" },
      { id: "B", text: "6" },
      { id: "C", text: "8" },
      { id: "D", text: "16" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "4: 2^4 = 16 inputs.",
      "B": "6: Correct! A 2^m-to-1 multiplexer requires m selection lines. Since 64 = 2^6, exactly 6 selection lines are required.",
      "C": "8: 2^8 = 256 inputs.",
      "D": "16: 2^16 inputs."
    },
    summaryExplanation: "For 2^m inputs, m selection lines are required: 64 = 2⁶ ⇒ 6 select lines."
  },
  {
    id: "p2-u2-q21",
    paper: "paper2",
    unitId: "p2-u2",
    unitNumber: 2,
    unitName: "Computer System Architecture",
    examSource: "WB-SET 2023",
    question: "Which of the following hazards in an instruction pipeline is resolved using 'Operand Forwarding' (Bypassing)?",
    options: [
      { id: "A", text: "Structural Hazard" },
      { id: "B", text: "Data Hazard (RAW)" },
      { id: "C", text: "Branch / Control Hazard" },
      { id: "D", text: "Cache Miss Exception" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Structural: Resolved by duplicating hardware resources (e.g., Harvard architecture).",
      "B": "Data Hazard (RAW): Correct! Forwarding routes the calculated result directly from the ALU/EX or MEM output back to the input of EX stage without waiting for register writeback.",
      "C": "Control Hazard: Resolved via branch prediction or delay slots.",
      "D": "Cache miss: Handled by memory stall logic."
    },
    summaryExplanation: "Operand forwarding resolves RAW data hazards by routing data directly between pipeline stage registers."
  },
  {
    id: "p2-u2-q22",
    paper: "paper2",
    unitId: "p2-u2",
    unitNumber: 2,
    unitName: "Computer System Architecture",
    examSource: "UGC NET Dec 2023",
    question: "A digital asynchronous ripple counter using 4 flip-flops can count how many distinct binary states (Modulus)?",
    options: [
      { id: "A", text: "4 (Mod-4)" },
      { id: "B", text: "8 (Mod-8)" },
      { id: "C", text: "16 (Mod-16)" },
      { id: "D", text: "32 (Mod-32)" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "4: Requires 2 flip-flops.",
      "B": "8: Requires 3 flip-flops.",
      "C": "16: Correct! A counter with n flip-flops has 2^n states (0 to 2^n - 1). For n = 4, modulus = 2^4 = 16 (states 0000 to 1111).",
      "D": "32: Requires 5 flip-flops."
    },
    summaryExplanation: "Modulus of an n-flip-flop counter is 2^n = 2⁴ = 16."
  },
  {
    id: "p2-u2-q23",
    paper: "paper2",
    unitId: "p2-u2",
    unitNumber: 2,
    unitName: "Computer System Architecture",
    examSource: "KSET 2023",
    question: "What is the primary function of the Program Status Word (PSW) register in a central processing unit?",
    options: [
      { id: "A", text: "To store the address of the next instruction to fetch" },
      { id: "B", text: "To hold condition code status flags (Zero, Carry, Sign, Overflow) and CPU operating mode" },
      { id: "C", text: "To cache disk data" },
      { id: "D", text: "To count clock cycles" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Next instruction address: Program Counter (PC).",
      "B": "Status flags and CPU state: Correct! PSW stores ALU status condition flags (Z, C, S, V) and system control state (supervisor/user mode, interrupt mask).",
      "C": "Disk cache: RAM buffer.",
      "D": "Clock cycles: Hardware timer."
    },
    summaryExplanation: "The PSW contains condition flags (Zero, Carry, Sign, Overflow) reflecting ALU execution results."
  },
  {
    id: "p2-u2-q24",
    paper: "paper2",
    unitId: "p2-u2",
    unitNumber: 2,
    unitName: "Computer System Architecture",
    examSource: "UGC NET June 2024",
    question: "In horizontal microprogramming compared to vertical microprogramming, horizontal microinstructions are:",
    options: [
      { id: "A", text: "Wider in bit width, unencoded, and allow high degree of parallel control signal activation" },
      { id: "B", text: "Narrower in bit width and require heavy decoders" },
      { id: "C", text: "Stored exclusively on magnetic tape" },
      { id: "D", text: "Unable to execute arithmetic instructions" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Wider, unencoded, parallel: Correct! Horizontal microcode dedicates 1 bit per control line, producing wide words that execute micro-operations with minimal decoding delay.",
      "B": "Narrower with decoders: This defines *Vertical* microprogramming.",
      "C": "Magnetic tape: Stored in high-speed ROM.",
      "D": "Arithmetic execution: Standard capability."
    },
    summaryExplanation: "Horizontal microcode features wide, unencoded bit patterns supporting high parallel signal dispatch."
  },
  {
    id: "p2-u2-q25",
    paper: "paper2",
    unitId: "p2-u2",
    unitNumber: 2,
    unitName: "Computer System Architecture",
    examSource: "MH-SET 2023",
    question: "Which of the following memory technologies requires periodic electrical 'Refresh' cycles to prevent loss of stored charge in its microscopic capacitors?",
    options: [
      { id: "A", text: "SRAM (Static RAM)" },
      { id: "B", text: "DRAM (Dynamic RAM)" },
      { id: "C", text: "ROM" },
      { id: "D", text: "EEPROM" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "SRAM: Uses 6-transistor cross-coupled latches; does not leak charge, no refresh needed.",
      "B": "DRAM: Correct! Stores bits as charges on single-transistor capacitors which leak charge over milliseconds and mandate periodic refreshing.",
      "C": "ROM: Permanent read-only structure.",
      "D": "EEPROM: Non-volatile floating-gate memory."
    },
    summaryExplanation: "DRAM stores data in leaking capacitors that require periodic refresh cycles to retain bits."
  },
  {
    id: "p2-u2-q26",
    paper: "paper2",
    unitId: "p2-u2",
    unitNumber: 2,
    unitName: "Computer System Architecture",
    examSource: "AP-SET 2024",
    question: "What is an 'Essential Prime Implicant' (EPI) in K-map Boolean minimization?",
    options: [
      { id: "A", text: "A prime implicant that contains at least one minterm (1) that is not covered by any other prime implicant" },
      { id: "B", text: "A term containing all variables complemented" },
      { id: "C", text: "A prime implicant containing only zeros" },
      { id: "D", text: "A term discarded during minimization" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Contains unique minterm: Correct! An EPI must be included in every minimal Sum-of-Products (SOP) expression because it is the sole cover for at least one minterm.",
      "B": "All variables complemented: That is minterm 0.",
      "C": "Containing only zeros: Maxterm concept.",
      "D": "Discarded term: Non-essential implicant."
    },
    summaryExplanation: "An Essential Prime Implicant uniquely covers at least one minterm that no other prime implicant can cover."
  },
  {
    id: "p2-u2-q27",
    paper: "paper2",
    unitId: "p2-u2",
    unitNumber: 2,
    unitName: "Computer System Architecture",
    examSource: "UGC NET Dec 2023",
    question: "What is the speedup factor of a k-stage linear instruction pipeline executing n instructions as n approaches infinity (maximum theoretical speedup)?",
    options: [
      { id: "A", text: "1" },
      { id: "B", text: "k" },
      { id: "C", text: "k / 2" },
      { id: "D", text: "n / k" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "1: No speedup.",
      "B": "k: Correct! Speedup S = (n * k) / (k + n - 1). As n → ∞, lim S = k (the number of stages in the pipeline).",
      "C": "k / 2: Average efficiency approximation under hazards.",
      "D": "n / k: Inverted."
    },
    summaryExplanation: "The maximum theoretical speedup of an ideal k-stage pipeline approaches k as n becomes large."
  },
  {
    id: "p2-u2-q28",
    paper: "paper2",
    unitId: "p2-u2",
    unitNumber: 2,
    unitName: "Computer System Architecture",
    examSource: "WB-SET 2024",
    question: "In Booth's Multiplication Algorithm for signed two's complement numbers, what operation is performed when the current multiplier bit and previous bit pair (Q_0, Q_{-1}) is (1, 0)?",
    options: [
      { id: "A", text: "Subtract multiplicand from accumulator (A = A - M) followed by arithmetic right shift" },
      { id: "B", text: "Add multiplicand to accumulator (A = A + M) followed by arithmetic right shift" },
      { id: "C", text: "Only arithmetic right shift without addition or subtraction" },
      { id: "D", text: "Set accumulator to zero" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Subtract M then shift: Correct! In Booth's algorithm: (1, 0) indicates start of a block of 1s, requiring A = A - M, followed by ASHR.",
      "B": "Add M then shift: Performed when (Q_0, Q_{-1}) = (0, 1), indicating end of a string of 1s.",
      "C": "Only shift: Performed when (Q_0, Q_{-1}) is (0, 0) or (1, 1).",
      "D": "Clear accumulator: Initialization."
    },
    summaryExplanation: "In Booth's algorithm, (1, 0) denotes entering a string of 1s, triggering subtraction (A = A - M) then shift."
  },
  {
    id: "p2-u2-q29",
    paper: "paper2",
    unitId: "p2-u2",
    unitNumber: 2,
    unitName: "Computer System Architecture",
    examSource: "UGC NET June 2023",
    question: "A digital circuit that converts a decimal or octal digit into its corresponding binary coded output is called an:",
    options: [
      { id: "A", text: "Encoder" },
      { id: "B", text: "Decoder" },
      { id: "C", text: "Multiplexer" },
      { id: "D", text: "Demultiplexer" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Encoder: Correct! An encoder takes 2^n input lines and converts them into an n-bit coded binary output (e.g., Octal-to-Binary encoder).",
      "B": "Decoder: Takes n binary inputs and activates one of 2^n output lines.",
      "C": "Multiplexer: Data selector.",
      "D": "Demultiplexer: Data distributor."
    },
    summaryExplanation: "An encoder translates 2^n discrete input lines into an n-bit binary code."
  },
  {
    id: "p2-u2-q30",
    paper: "paper2",
    unitId: "p2-u2",
    unitNumber: 2,
    unitName: "Computer System Architecture",
    examSource: "MH-SET 2024",
    question: "What is the function of the Memory Address Register (MAR) in CPU architecture?",
    options: [
      { id: "A", text: "Holds the actual data word read from or written into memory" },
      { id: "B", text: "Holds the physical memory address being accessed by the CPU" },
      { id: "C", text: "Holds the currently executing instruction opcode" },
      { id: "D", text: "Counts the number of page faults" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Data word: Memory Buffer / Data Register (MBR/MDR).",
      "B": "Holds memory address: Correct! MAR interfaces with the address bus to hold the address of the memory location to be read or written.",
      "C": "Opcode: Instruction Register (IR).",
      "D": "Page fault counter: OS metric."
    },
    summaryExplanation: "The MAR holds the target physical address connected to the memory address bus."
  }
];
