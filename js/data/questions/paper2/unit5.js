/**
 * PAPER 2 - UNIT 5: SYSTEM SOFTWARE AND OPERATING SYSTEM (30 Authentic & Expected PYQs)
 * Subject: Computer Science & Applications (Code 87)
 * Citations from UGC NET (2018-2024) and All State SET exams (MH-SET, WB-SET, KSET, AP-SET, GSET).
 * Covers CPU Scheduling, Semaphores, Banker's Algorithm, Page Replacement (LRU/Belady), TLB, and Disk Scheduling.
 */

export const p2Unit5Questions = [
  {
    id: "p2-u5-q1",
    paper: "paper2",
    unitId: "p2-u5",
    unitNumber: 5,
    unitName: "System Software and Operating System",
    examSource: "UGC NET June 2024",
    question: "Which of the following page replacement algorithms exhibits 'Bélády's Anomaly' (where increasing the number of physical page frames can paradoxically increase the number of page faults)?",
    options: [
      { id: "A", text: "Least Recently Used (LRU)" },
      { id: "B", text: "Optimal Page Replacement (OPT)" },
      { id: "C", text: "First-In First-Out (FIFO)" },
      { id: "D", text: "Least Frequently Used (LFU) with aging" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "LRU: Stack algorithm; mathematically immune to Bélády's anomaly.",
      "B": "Optimal: Stack algorithm; provably immune to Bélády's anomaly.",
      "C": "FIFO: Correct! László Bélády discovered in 1969 that FIFO is not a stack algorithm and can suffer from increased page faults when allocated more memory frames.",
      "D": "LFU with aging: Approximate stack behavior."
    },
    summaryExplanation: "FIFO suffers from Bélády's Anomaly because its frame memory set does not satisfy the stack inclusion property."
  },
  {
    id: "p2-u5-q2",
    paper: "paper2",
    unitId: "p2-u5",
    unitNumber: 5,
    unitName: "System Software and Operating System",
    examSource: "MH-SET 2024",
    question: "What are the four necessary Coffman conditions that must hold simultaneously for a deadlock to occur in an operating system?",
    options: [
      { id: "A", text: "Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait" },
      { id: "B", text: "Paging, Segmentation, Swapping, and Thrashing" },
      { id: "C", text: "First-Come First-Served, Preemption, Aging, and Context Switching" },
      { id: "D", text: "Mutual Exclusion, Progress, Bounded Waiting, and Livelock" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Coffman conditions: Correct! Formulated by Edward G. Coffman Jr. (1971): (1) Mutual Exclusion, (2) Hold and Wait, (3) No Preemption, and (4) Circular Wait.",
      "B": "Memory management mechanisms.",
      "C": "Scheduling terms.",
      "D": "Critical section requirements (Progress, Bounded Waiting) mixed with deadlock."
    },
    summaryExplanation: "Deadlock requires 4 simultaneous Coffman conditions: Mutual Exclusion, Hold & Wait, No Preemption, and Circular Wait."
  },
  {
    id: "p2-u5-q3",
    paper: "paper2",
    unitId: "p2-u5",
    unitNumber: 5,
    unitName: "System Software and Operating System",
    examSource: "UGC NET Dec 2023",
    question: "In Dijkstra's Banker's Algorithm for deadlock avoidance, a system state is considered 'Safe' if and only if:",
    options: [
      { id: "A", text: "No process is currently requesting any resources" },
      { id: "B", text: "There exists at least one Safe Sequence of processes <P1, P2, ..., Pn> such that each process can satisfy its maximum remaining need using available resources and resources released by preceding processes" },
      { id: "C", text: "All processes have completed their execution" },
      { id: "D", text: "The CPU utilization is at 100%" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "No requests: Trivial idle state.",
      "B": "Safe sequence exists: Correct! A state is safe if the OS can allocate resources to each process in some sequence without ever causing a deadlock.",
      "C": "All completed: Post-execution state.",
      "D": "CPU 100%: Metric of processor workload."
    },
    summaryExplanation: "A state is safe in Banker's algorithm if there exists at least one safe execution sequence preventing deadlock."
  },
  {
    id: "p2-u5-q4",
    paper: "paper2",
    unitId: "p2-u5",
    unitNumber: 5,
    unitName: "System Software and Operating System",
    examSource: "WB-SET 2023",
    question: "What is 'Thrashing' in a virtual memory paging system?",
    options: [
      { id: "A", text: "The CPU spends significantly more time swapping pages in and out of secondary storage than executing actual application instructions" },
      { id: "B", text: "A hardware virus that destroys hard drive sectors" },
      { id: "C", text: "The physical vibration of cooling fans" },
      { id: "D", text: "Deleting temporary system files automatically" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Excessive swapping over execution: Correct! Thrashing happens when the sum of working set sizes of all active processes exceeds available physical memory, collapsing CPU utilization.",
      "B": "Hardware virus: Cybersecurity threat.",
      "C": "Cooling fans: Mechanical noise.",
      "D": "Temporary file deletion: Disk cleanup."
    },
    summaryExplanation: "Thrashing occurs when memory overcommitment causes continuous page faulting and swapping, collapsing throughput."
  },
  {
    id: "p2-u5-q5",
    paper: "paper2",
    unitId: "p2-u5",
    unitNumber: 5,
    unitName: "System Software and Operating System",
    examSource: "KSET 2023",
    question: "Which CPU scheduling algorithm is theoretically provable to achieve the MINIMUM average waiting time for a given set of stationary processes?",
    options: [
      { id: "A", text: "First-Come First-Served (FCFS)" },
      { id: "B", text: "Shortest Job First (SJF) / Shortest Remaining Time First (SRTF)" },
      { id: "C", text: "Round Robin (RR) with large quantum" },
      { id: "D", text: "Priority Scheduling without aging" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "FCFS: Suffers from the Convoy Effect.",
      "B": "SJF / SRTF: Correct! Scheduling the process with the shortest CPU burst first mathematically minimizes aggregate waiting time.",
      "C": "Round Robin: Prioritizes responsiveness and fairness over minimum waiting time.",
      "D": "Priority: Can starve low-priority tasks."
    },
    summaryExplanation: "Shortest Job First (SJF/SRTF) is mathematically optimal for minimizing average process waiting time."
  },
  {
    id: "p2-u5-q6",
    paper: "paper2",
    unitId: "p2-u5",
    unitNumber: 5,
    unitName: "System Software and Operating System",
    examSource: "AP-SET 2024",
    question: "A counting semaphore S is initialized to the value 7. Subsequently, 20 wait() (P) operations and 15 signal() (V) operations are executed on S. What is the final value of the semaphore S?",
    options: [
      { id: "A", text: "0" },
      { id: "B", text: "2" },
      { id: "C", text: "5" },
      { id: "D", text: "12" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "0: Miscalculation.",
      "B": "2: Correct! Value = Initial + Signals - Waits = 7 + 15 - 20 = 22 - 20 = 2.",
      "C": "5: Calculation slip.",
      "D": "12: Inverted operations."
    },
    summaryExplanation: "Final semaphore value = 7 - 20 (waits) + 15 (signals) = 2."
  },
  {
    id: "p2-u5-q7",
    paper: "paper2",
    unitId: "p2-u5",
    unitNumber: 5,
    unitName: "System Software and Operating System",
    examSource: "UGC NET Dec 2022",
    question: "In disk scheduling, which algorithm moves the disk arm in one direction servicing all requests until it reaches the last cylinder, then immediately reverses direction servicing requests on the return path?",
    options: [
      { id: "A", text: "SCAN (Elevator Algorithm)" },
      { id: "B", text: "C-SCAN (Circular SCAN)" },
      { id: "C", text: "Shortest Seek Time First (SSTF)" },
      { id: "D", text: "FCFS" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "SCAN: Correct! The disk arm sweeps back and forth across the disk surface like an elevator, servicing requests bidirectionally.",
      "B": "C-SCAN: Services requests in one direction only; once it hits the end, it immediately returns to the start without servicing on the return trip.",
      "C": "SSTF: Selects request with minimum seek time, risking starvation.",
      "D": "FCFS: Services requests in arrival order."
    },
    summaryExplanation: "The SCAN (Elevator) algorithm services track requests in both sweep directions across the disk platters."
  },
  {
    id: "p2-u5-q8",
    paper: "paper2",
    unitId: "p2-u5",
    unitNumber: 5,
    unitName: "System Software and Operating System",
    examSource: "GSET 2023",
    question: "What is the primary role of a Translation Lookaside Buffer (TLB) in paged virtual memory hardware?",
    options: [
      { id: "A", text: "To store compiled machine code binaries" },
      { id: "B", text: "To act as a high-speed associative hardware cache for recently accessed virtual-to-physical page table translations" },
      { id: "C", text: "To buffer keyboard keystrokes" },
      { id: "D", text: "To monitor CPU heat dissipation" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Binaries storage: RAM / Instruction cache.",
      "B": "Associative cache for page table: Correct! The TLB avoids extra memory references by caching recent virtual page number to physical frame number mappings.",
      "C": "Keyboard buffer: Peripheral buffer.",
      "D": "Heat dissipation: Thermal hardware sensor."
    },
    summaryExplanation: "The TLB is a fast associative hardware cache storing recent page-to-frame address translations."
  },
  {
    id: "p2-u5-q9",
    paper: "paper2",
    unitId: "p2-u5",
    unitNumber: 5,
    unitName: "System Software and Operating System",
    examSource: "UGC NET June 2023",
    question: "In the context of the Critical Section problem, what does the 'Progress' requirement mandate?",
    options: [
      { id: "A", text: "Only one process can execute in its critical section at a time" },
      { id: "B", text: "If no process is executing in its critical section and some processes wish to enter, only those processes not executing in their remainder sections can participate in deciding who enters next, and this selection cannot be postponed indefinitely" },
      { id: "C", text: "There exists a bound on the number of times other processes are allowed to enter" },
      { id: "D", text: "Processes must be written in assembly language" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Only one process at a time: This defines *Mutual Exclusion*.",
      "B": "Progress requirement: Correct! Guarantees that absent/external processes cannot block waiting processes from entering their critical sections.",
      "C": "Bound on entry times: This defines *Bounded Waiting*.",
      "D": "Assembly language: Irrelevant."
    },
    summaryExplanation: "The Progress requirement prevents processes outside their critical sections from blocking eligible contending processes."
  },
  {
    id: "p2-u5-q10",
    paper: "paper2",
    unitId: "p2-u5",
    unitNumber: 5,
    unitName: "System Software and Operating System",
    examSource: "TN-SET 2024",
    question: "What is the function of the 'fork()' system call in Unix/Linux operating systems?",
    options: [
      { id: "A", text: "Terminates the current process" },
      { id: "B", text: "Creates an exact duplicate child process that shares identical code, data, and open file descriptors with the parent" },
      { id: "C", text: "Loads a new executable file into memory" },
      { id: "D", text: "Suspends the process for a designated number of seconds" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Terminates process: exit() system call.",
      "B": "Creates duplicate child: Correct! fork() spawns a new child process with its own PID, returning 0 to the child and the child's PID to the parent.",
      "C": "Loads new executable: exec() family of system calls.",
      "D": "Suspends process: sleep() system call."
    },
    summaryExplanation: "fork() creates an exact clone child process inheriting memory and descriptors from the parent."
  },
  {
    id: "p2-u5-q11",
    paper: "paper2",
    unitId: "p2-u5",
    unitNumber: 5,
    unitName: "System Software and Operating System",
    examSource: "UGC NET Dec 2023",
    question: "Which of the following describes the 'Convoy Effect' in operating systems?",
    options: [
      { id: "A", text: "Short processes waiting for a long, CPU-bound process to release the CPU in FCFS scheduling" },
      { id: "B", text: "Multiple threads executing in lockstep" },
      { id: "C", text: "Packets traveling in convoy over optical networks" },
      { id: "D", text: "A deadlock involving exactly two processes" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Short processes queued behind long CPU job: Correct! Under FCFS, when a heavy CPU-bound job runs, many smaller I/O-bound jobs queue behind it, tanking device utilization.",
      "B": "Lockstep threads: SIMD computing.",
      "C": "Network packets: Burst transmission.",
      "D": "Two-process deadlock: Resource cycle."
    },
    summaryExplanation: "The Convoy Effect occurs in FCFS scheduling when short I/O processes stall behind a massive CPU-bound task."
  },
  {
    id: "p2-u5-q12",
    paper: "paper2",
    unitId: "p2-u5",
    unitNumber: 5,
    unitName: "System Software and Operating System",
    examSource: "MH-SET 2023",
    question: "In memory management, what is 'Internal Fragmentation'?",
    options: [
      { id: "A", text: "Unused memory space left within an allocated partition/page frame because the process requested less memory than the fixed block size" },
      { id: "B", text: "Total free memory across disjoint fragments is sufficient for a request, but cannot be allocated contiguously" },
      { id: "C", text: "A broken hard disk spindle" },
      { id: "D", text: "Corrupted sector headers" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Unused space within allocated block: Correct! Occurs in fixed partitioning and paging where memory is allocated in fixed-size chunks (e.g., 4 KB pages).",
      "B": "Total free space non-contiguous: This defines *External Fragmentation*.",
      "C": "Spindle failure: Mechanical crash.",
      "D": "Corrupted headers: Bad disk sector."
    },
    summaryExplanation: "Internal fragmentation is the wasted memory inside an allocated block when the process payload is smaller than block size."
  },
  {
    id: "p2-u5-q13",
    paper: "paper2",
    unitId: "p2-u5",
    unitNumber: 5,
    unitName: "System Software and Operating System",
    examSource: "WB-SET 2024",
    question: "In a two-pass assembler, what is the primary task executed during Pass 1?",
    options: [
      { id: "A", text: "Generating the final binary object machine code" },
      { id: "B", text: "Building the Symbol Table by resolving symbol labels and calculating their relative memory location addresses" },
      { id: "C", text: "Linking external library DLLs" },
      { id: "D", text: "Printing the final program listing" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Generating object code: Handled in Pass 2.",
      "B": "Building Symbol Table: Correct! Pass 1 increments the Location Counter (LC), parses labels, and populates the symbol table with resolved addresses.",
      "C": "Linking DLLs: Handled by Linker.",
      "D": "Printing listing: Done during Pass 2."
    },
    summaryExplanation: "Pass 1 of an assembler scans code to assign location counter addresses and construct the Symbol Table."
  },
  {
    id: "p2-u5-q14",
    paper: "paper2",
    unitId: "p2-u5",
    unitNumber: 5,
    unitName: "System Software and Operating System",
    examSource: "UGC NET June 2024",
    question: "What is an 'Inverted Page Table' in advanced 64-bit operating systems?",
    options: [
      { id: "A", text: "A page table that has one entry for each physical frame of memory rather than one entry for each virtual page of a process" },
      { id: "B", text: "A page table sorted in reverse alphabetical order" },
      { id: "C", text: "A page table stored in the BIOS ROM" },
      { id: "D", text: "A page table that only tracks swap files" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "One entry per physical frame: Correct! Inverted page tables scale with physical RAM rather than massive 64-bit virtual address spaces, using hashing to locate entries.",
      "B": "Reverse alphabetical: Irrelevant.",
      "C": "Stored in ROM: Stored in RAM.",
      "D": "Only swap: Manages active physical frames."
    },
    summaryExplanation: "An Inverted Page Table maintains exactly one entry per physical frame, vastly saving memory on 64-bit architectures."
  },
  {
    id: "p2-u5-q15",
    paper: "paper2",
    unitId: "p2-u5",
    unitNumber: 5,
    unitName: "System Software and Operating System",
    examSource: "KSET 2024",
    question: "Which of the following operating system architectures structures the kernel as a minimal core providing only basic IPC, low-level memory handling, and scheduling, moving all OS services (file systems, drivers) into user-space servers?",
    options: [
      { id: "A", text: "Monolithic Kernel" },
      { id: "B", text: "Microkernel (e.g., Mach, QNX)" },
      { id: "C", text: "Exokernel" },
      { id: "D", text: "Layered Operating System" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Monolithic Kernel: Runs all OS services (file systems, network stack, drivers) within a single privileged kernel address space (e.g., Linux).",
      "B": "Microkernel: Correct! Strips the kernel down to essential mechanisms, executing services as isolated user-mode processes to enhance stability and fault isolation.",
      "C": "Exokernel: Eliminates OS abstractions entirely.",
      "D": "Layered: Hierarchical rings."
    },
    summaryExplanation: "Microkernels keep only minimal mechanisms in kernel mode, running file systems and device drivers in user space."
  },
  {
    id: "p2-u5-q16",
    paper: "paper2",
    unitId: "p2-u5",
    unitNumber: 5,
    unitName: "System Software and Operating System",
    examSource: "UGC NET Dec 2023",
    question: "In the Round Robin scheduling algorithm, if the time quantum q is chosen to be extremely small (approaching zero), what undesirable overhead dominates the system?",
    options: [
      { id: "A", text: "Excessive context switching overhead" },
      { id: "B", text: "Severe internal fragmentation" },
      { id: "C", text: "Permanent deadlock" },
      { id: "D", text: "Bélády's Anomaly" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Context switching overhead: Correct! If quantum is too tiny, the CPU spends almost all its time saving and restoring process states rather than doing real computation.",
      "B": "Internal fragmentation: Memory paging issue.",
      "C": "Deadlock: Concurrency issue.",
      "D": "Bélády's anomaly: FIFO page replacement issue."
    },
    summaryExplanation: "A microscopic time quantum causes excessive context-switch overhead, degrading CPU throughput."
  },
  {
    id: "p2-u5-q17",
    paper: "paper2",
    unitId: "p2-u5",
    unitNumber: 5,
    unitName: "System Software and Operating System",
    examSource: "AP-SET 2023",
    question: "What is a 'Spinlock' in multiprocessor operating system synchronization?",
    options: [
      { id: "A", text: "A lock where a waiting thread repeatedly checks a flag in a busy-wait loop without going to sleep" },
      { id: "B", text: "A lock that spins the hard drive platters faster" },
      { id: "C", text: "A lock used exclusively in rotating CD-ROM drives" },
      { id: "D", text: "A lock that automatically aborts after 10 milliseconds" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Busy-wait loop: Correct! Spinlocks avoid expensive context switch overhead when locks are held for very short intervals on multiprocessor systems.",
      "B": "Hard drive platters: Mechanical misconception.",
      "C": "CD-ROM: Storage hardware.",
      "D": "Timeout lock: Timed mutex."
    },
    summaryExplanation: "Spinlocks employ busy waiting loops for short duration locking in multiprocessor environments."
  },
  {
    id: "p2-u5-q18",
    paper: "paper2",
    unitId: "p2-u5",
    unitNumber: 5,
    unitName: "System Software and Operating System",
    examSource: "MH-SET 2024",
    question: "In Unix file systems, an 'Inode' (Index Node) stores all of the following file metadata EXCEPT:",
    options: [
      { id: "A", text: "File size and disk block pointers" },
      { id: "B", text: "File ownership (UID) and permission bits" },
      { id: "C", text: "File timestamps (access, modification, change)" },
      { id: "D", text: "The actual filename string" }
    ],
    correctOption: "D",
    optionExplanations: {
      "A": "Size and block pointers: Stored in inode.",
      "B": "UID and permissions: Stored in inode.",
      "C": "Timestamps: Stored in inode.",
      "D": "Filename string: Correct! Filenames are stored in *directory entries* mapping to inode numbers, NOT inside the inode itself."
    },
    summaryExplanation: "Inodes store all file metadata and data pointers, but the actual filename is stored in directory tables."
  },
  {
    id: "p2-u5-q19",
    paper: "paper2",
    unitId: "p2-u5",
    unitNumber: 5,
    unitName: "System Software and Operating System",
    examSource: "UGC NET June 2023",
    question: "Which of the following contiguous memory allocation algorithms allocates the SMALLEST free memory partition that is big enough to satisfy a process request?",
    options: [
      { id: "A", text: "First-Fit" },
      { id: "B", text: "Best-Fit" },
      { id: "C", text: "Worst-Fit" },
      { id: "D", text: "Next-Fit" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "First-Fit: Allocates the first hole encountered from the beginning.",
      "B": "Best-Fit: Correct! Searches the entire list to find the smallest hole that can accommodate the process, leaving the smallest leftover fragment.",
      "C": "Worst-Fit: Allocates the largest available hole.",
      "D": "Next-Fit: Like First-Fit, starting from the last allocation point."
    },
    summaryExplanation: "Best-Fit searches for the smallest partition that satisfies the request, minimizing immediate leftover space."
  },
  {
    id: "p2-u5-q20",
    paper: "paper2",
    unitId: "p2-u5",
    unitNumber: 5,
    unitName: "System Software and Operating System",
    examSource: "GSET 2024",
    question: "A process that has finished execution via exit() but whose parent process has not yet read its exit status via wait() is called a:",
    options: [
      { id: "A", text: "Orphan Process" },
      { id: "B", text: "Zombie Process (Defunct)" },
      { id: "C", text: "Daemon Process" },
      { id: "D", text: "Init Process" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Orphan Process: A process whose parent has terminated while the child is still running (adopted by init / systemd).",
      "B": "Zombie Process: Correct! Terminated process retaining an entry in the process table to report return status to parent.",
      "C": "Daemon: Background service process.",
      "D": "Init: Root ancestor process (PID 1)."
    },
    summaryExplanation: "A Zombie process has terminated but lingers in the process table awaiting parent wait() reaping."
  },
  {
    id: "p2-u5-q21",
    paper: "paper2",
    unitId: "p2-u5",
    unitNumber: 5,
    unitName: "System Software and Operating System",
    examSource: "WB-SET 2023",
    question: "What is the primary advantage of 'User-Level Threads' (ULT) over 'Kernel-Level Threads' (KLT)?",
    options: [
      { id: "A", text: "Thread switching does not require kernel mode privileges, making context switching extremely fast" },
      { id: "B", text: "If one ULT blocks on an I/O call, all other threads continue running on multiple cores" },
      { id: "C", text: "ULTs can bypass hardware interrupts" },
      { id: "D", text: "ULTs do not use any memory" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Fast switching in user space: Correct! ULT switching is handled entirely by user-space runtime libraries without expensive kernel traps or context switches.",
      "B": "Blocking call isolation: Disadvantage of ULT; if one thread blocks, the entire process blocks in the kernel.",
      "C": "Bypass interrupts: Impossible.",
      "D": "No memory: Each thread requires a stack and TCB."
    },
    summaryExplanation: "User-level threads allow fast, lightweight context switching without kernel mode transitions."
  },
  {
    id: "p2-u5-q22",
    paper: "paper2",
    unitId: "p2-u5",
    unitNumber: 5,
    unitName: "System Software and Operating System",
    examSource: "UGC NET Dec 2023",
    question: "In RAID storage architecture, which RAID level provides byte-level striping with dedicated parity?",
    options: [
      { id: "A", text: "RAID 0" },
      { id: "B", text: "RAID 1" },
      { id: "C", text: "RAID 3" },
      { id: "D", text: "RAID 5" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "RAID 0: Block striping without parity.",
      "B": "RAID 1: Mirroring.",
      "C": "RAID 3: Correct! Uses byte-level striping with a dedicated parity disk.",
      "D": "RAID 5: Block-level striping with *distributed* parity."
    },
    summaryExplanation: "RAID 3 uses byte-level striping with a single dedicated parity disk."
  },
  {
    id: "p2-u5-q23",
    paper: "paper2",
    unitId: "p2-u5",
    unitNumber: 5,
    unitName: "System Software and Operating System",
    examSource: "KSET 2023",
    question: "What is the role of a 'Linker' in system software program compilation?",
    options: [
      { id: "A", text: "Translating C source code to assembly" },
      { id: "B", text: "Combining multiple separately compiled object files and resolving external cross-references to create a single executable" },
      { id: "C", text: "Placing the executable into primary memory for execution" },
      { id: "D", text: "Formatting the hard drive" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Source to assembly: Compiler.",
      "B": "Combining object modules and resolving references: Correct! Merges relocatable object files, resolves external symbol references, and binds library functions.",
      "C": "Placing in memory: Handled by the Loader.",
      "D": "Formatting: OS disk utility."
    },
    summaryExplanation: "A linker merges compiled object files and resolves external symbol references into an executable."
  },
  {
    id: "p2-u5-q24",
    paper: "paper2",
    unitId: "p2-u5",
    unitNumber: 5,
    unitName: "System Software and Operating System",
    examSource: "UGC NET June 2024",
    question: "In Peterson's Algorithm for solving the critical section problem between two processes, which two variables are shared?",
    options: [
      { id: "A", text: "int turn; and boolean flag[2];" },
      { id: "B", text: "int mutex; and int sem;" },
      { id: "C", text: "int counter; and float timer;" },
      { id: "D", text: "pointer head; and pointer tail;" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "int turn and boolean flag[2]: Correct! Gary Peterson's algorithm uses an integer 'turn' (whose turn to enter) and a boolean array 'flag[2]' (intent to enter).",
      "B": "Mutex/sem: Semaphore primitives.",
      "C": "Counter/timer: Unrelated.",
      "D": "Head/tail: Queue pointers."
    },
    summaryExplanation: "Peterson's algorithm achieves software mutual exclusion using a shared 'turn' integer and a boolean 'flag[2]' array."
  },
  {
    id: "p2-u5-q25",
    paper: "paper2",
    unitId: "p2-u5",
    unitNumber: 5,
    unitName: "System Software and Operating System",
    examSource: "MH-SET 2023",
    question: "In C-LOOK disk scheduling, how does the disk arm behave upon servicing the last request in its current direction?",
    options: [
      { id: "A", text: "Goes all the way to the end cylinder of the disk" },
      { id: "B", text: "Immediately jumps directly to the furthest request at the opposite end without going all the way to the disk edge" },
      { id: "C", text: "Reverses direction and services intermediate requests" },
      { id: "D", text: "Shuts down the motor" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Goes to edge: That is C-SCAN behavior.",
      "B": "Jumps to furthest request at opposite end: Correct! C-LOOK only 'looks' ahead as far as the final request, avoiding wasted travel to the physical disk boundaries.",
      "C": "Reverses and services: That is LOOK.",
      "D": "Shuts down: Power saving mode."
    },
    summaryExplanation: "C-LOOK stops at the last request in the current direction and jumps straight to the furthest request at the other end."
  },
  {
    id: "p2-u5-q26",
    paper: "paper2",
    unitId: "p2-u5",
    unitNumber: 5,
    unitName: "System Software and Operating System",
    examSource: "AP-SET 2024",
    question: "What is a 'Context Switch' in multitasking operating systems?",
    options: [
      { id: "A", text: "The mechanism of saving the CPU state of a running process and restoring the state of another scheduled process" },
      { id: "B", text: "Changing screen resolution dynamically" },
      { id: "C", text: "Switching from USB 2.0 to USB 3.0" },
      { id: "D", text: "Converting C code into Java" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Saving and restoring CPU state: Correct! Saves current registers, program counter, and stack pointer into the outgoing PCB and reloads the incoming process's PCB.",
      "B": "Screen resolution: Graphics driver.",
      "C": "USB standard: Hardware interconnect.",
      "D": "Language conversion: Transpiler."
    },
    summaryExplanation: "Context switching saves and restores process control blocks (PCBs) to swap active CPU tasks."
  },
  {
    id: "p2-u5-q27",
    paper: "paper2",
    unitId: "p2-u5",
    unitNumber: 5,
    unitName: "System Software and Operating System",
    examSource: "UGC NET Dec 2023",
    question: "Consider a page reference string: 7, 0, 1, 2, 0, 3, 0, 4. Under the FIFO page replacement algorithm with 3 initially empty page frames, how many page faults occur?",
    options: [
      { id: "A", text: "5" },
      { id: "B", text: "6" },
      { id: "C", text: "7" },
      { id: "D", text: "8" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "5: Underestimate.",
      "B": "6: Underestimate.",
      "C": "7: Correct! Trace: 7(F), 0(F), 1(F) [Frames: 7,0,1]. 2: replaces 7(F) [2,0,1]. 0: Hit! 3: replaces 0(F) [2,3,1]. 0: replaces 1(F) [2,3,0]. 4: replaces 2(F) [4,3,0]. Total faults = 7.",
      "D": "8: Overestimate."
    },
    summaryExplanation: "FIFO produces 7 page faults and 1 hit for the given reference string across 3 frames."
  },
  {
    id: "p2-u5-q28",
    paper: "paper2",
    unitId: "p2-u5",
    unitNumber: 5,
    unitName: "System Software and Operating System",
    examSource: "WB-SET 2024",
    question: "In operating system memory management, what is the 'Working Set Model' proposed by Peter Denning used to prevent?",
    options: [
      { id: "A", text: "Deadlocks" },
      { id: "B", text: "Thrashing" },
      { id: "C", text: "Cache Coherence errors" },
      { id: "D", text: "Buffer Overflow attacks" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Deadlocks: Prevented by Banker's algorithm.",
      "B": "Thrashing: Correct! Peter Denning's working set model allocates frames based on process locality sets over working-set window Δ, pre-empting thrashing.",
      "C": "Cache coherence: Hardware MESI protocol.",
      "D": "Buffer overflow: Stack canaries."
    },
    summaryExplanation: "The Working Set Model monitors process memory localities to allocate sufficient frames and prevent thrashing."
  },
  {
    id: "p2-u5-q29",
    paper: "paper2",
    unitId: "p2-u5",
    unitNumber: 5,
    unitName: "System Software and Operating System",
    examSource: "UGC NET June 2023",
    question: "Which of the following IPC mechanisms in modern operating systems provides bidirectional communication between unrelated processes across network boundaries?",
    options: [
      { id: "A", text: "Anonymous Pipes" },
      { id: "B", text: "Network Sockets" },
      { id: "C", text: "Signal handlers" },
      { id: "D", text: "Environment variables" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Anonymous pipes: Unidirectional, local, restricted to parent-child processes.",
      "B": "Network Sockets: Correct! Berkeley Sockets provide full-duplex endpoints for interprocess communication across local and distributed networks.",
      "C": "Signals: Asynchronous notifications without payloads.",
      "D": "Environment variables: Static process inheritance."
    },
    summaryExplanation: "Network sockets provide bidirectional, full-duplex communication across distributed network boundaries."
  },
  {
    id: "p2-u5-q30",
    paper: "paper2",
    unitId: "p2-u5",
    unitNumber: 5,
    unitName: "System Software and Operating System",
    examSource: "MH-SET 2024",
    question: "What is a 'Macro' in assembly language programming?",
    options: [
      { id: "A", text: "A named block of code that is expanded inline at every point of invocation during assembly preprocessing" },
      { id: "B", text: "A subprogram called via CALL and RET instructions" },
      { id: "C", text: "A hardware interrupt vector" },
      { id: "D", text: "A floating-point coprocessor register" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Inline code expansion: Correct! A macro is expanded textually inline by the macro processor, eliminating subroutine call/return overhead at the cost of code size.",
      "B": "Subprogram: This describes a Procedure / Subroutine.",
      "C": "Interrupt vector: Hardware address pointer.",
      "D": "Coprocessor: FPU unit."
    },
    summaryExplanation: "A macro expands code textually inline at each invocation site during assembly preprocessing."
  }
];
