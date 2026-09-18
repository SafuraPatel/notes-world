/**
 * PAPER 2 - UNIT 7: DATA COMMUNICATION AND COMPUTER NETWORKS (30 Authentic & Expected PYQs)
 * Subject: Computer Science & Applications (Code 87)
 * Citations from UGC NET (2018-2024) and All State SET exams (MH-SET, WB-SET, KSET, AP-SET, GSET).
 * Covers OSI Layers, CRC, Sliding Window (GBN/SR), CSMA/CD, Subnetting, Distance Vector/OSPF, and TCP/UDP.
 */

export const p2Unit7Questions = [
  {
    id: "p2-u7-q1",
    paper: "paper2",
    unitId: "p2-u7",
    unitNumber: 7,
    unitName: "Data Communication and Computer Networks",
    examSource: "UGC NET June 2024",
    question: "In CSMA/CD (Carrier Sense Multiple Access with Collision Detection), what is the minimum frame size required to ensure that collision detection is guaranteed across a network with bandwidth B and one-way propagation delay T_p?",
    options: [
      { id: "A", text: "Frame Size ≥ B * T_p" },
      { id: "B", text: "Frame Size ≥ 2 * B * T_p" },
      { id: "C", text: "Frame Size ≥ B / T_p" },
      { id: "D", text: "Frame Size ≥ 4 * B * T_p" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "B * T_p: Corresponds to one-way latency, insufficient to detect worst-case collision occurring right before reaching destination.",
      "B": "2 * B * T_p: Correct! Transmission time T_t must be at least twice the propagation delay (T_t ≥ 2 * T_p) to ensure collision detection before transmission finishes. Since T_t = L / B, L ≥ 2 * B * T_p.",
      "C": "B / T_p: Inverted dimension.",
      "D": "4 * B * T_p: Unnecessarily oversized."
    },
    summaryExplanation: "To guarantee collision detection in CSMA/CD, transmission time must cover round-trip propagation: L ≥ 2 * B * T_p."
  },
  {
    id: "p2-u7-q2",
    paper: "paper2",
    unitId: "p2-u7",
    unitNumber: 7,
    unitName: "Data Communication and Computer Networks",
    examSource: "MH-SET 2024",
    question: "What is the maximum theoretical channel utilization (efficiency) of Pure ALOHA and Slotted ALOHA respectively?",
    options: [
      { id: "A", text: "Pure ALOHA: 18.4% (1/2e); Slotted ALOHA: 36.8% (1/e)" },
      { id: "B", text: "Pure ALOHA: 50%; Slotted ALOHA: 100%" },
      { id: "C", text: "Pure ALOHA: 36.8%; Slotted ALOHA: 18.4%" },
      { id: "D", text: "Pure ALOHA: 25%; Slotted ALOHA: 75%" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "18.4% and 36.8%: Correct! Pure ALOHA vulnerable time is 2T, giving maximum throughput S = G * e^(-2G) = 1/(2e) ≈ 18.4% at G = 0.5. Slotted ALOHA vulnerable time is T, giving S = G * e^(-G) = 1/e ≈ 36.8% at G = 1.",
      "B": "50% and 100%: Unrealistic ideal limits.",
      "C": "Inverted values.",
      "D": "Arbitrary numbers."
    },
    summaryExplanation: "Maximum throughput is 18.4% for Pure ALOHA and 36.8% for Slotted ALOHA."
  },
  {
    id: "p2-u7-q3",
    paper: "paper2",
    unitId: "p2-u7",
    unitNumber: 7,
    unitName: "Data Communication and Computer Networks",
    examSource: "UGC NET Dec 2023",
    question: "An IPv4 address block has the CIDR notation 192.168.10.0/26. How many usable host IP addresses are available in this subnet?",
    options: [
      { id: "A", text: "30" },
      { id: "B", text: "62" },
      { id: "C", text: "64" },
      { id: "D", text: "126" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "30: Subnet /27.",
      "B": "62: Correct! A /26 prefix leaves 32 - 26 = 6 host bits. Total IP addresses = 2^6 = 64. Subtracting 2 reserved addresses (network ID and directed broadcast address): Usable hosts = 64 - 2 = 62.",
      "C": "64: Total addresses, including network and broadcast.",
      "D": "126: Subnet /25."
    },
    summaryExplanation: "Host bits = 32 - 26 = 6. Usable host addresses = 2⁶ - 2 = 64 - 2 = 62."
  },
  {
    id: "p2-u7-q4",
    paper: "paper2",
    unitId: "p2-u7",
    unitNumber: 7,
    unitName: "Data Communication and Computer Networks",
    examSource: "WB-SET 2023",
    question: "In the OSI 7-layer reference model, which layer is responsible for dialog control, token management, and synchronization through checkpoints?",
    options: [
      { id: "A", text: "Transport Layer" },
      { id: "B", text: "Session Layer" },
      { id: "C", text: "Presentation Layer" },
      { id: "D", text: "Data Link Layer" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Transport Layer: End-to-end process communication, flow control, and error recovery.",
      "B": "Session Layer: Correct! Layer 5 establishes, manages, and terminates sessions between applications, handling token control and synchronization checkpoints.",
      "C": "Presentation Layer: Translation, compression, and encryption.",
      "D": "Data Link Layer: Framing, node-to-node error and flow control."
    },
    summaryExplanation: "The Session Layer (Layer 5) manages dialog synchronization, checkpoints, and token coordination."
  },
  {
    id: "p2-u7-q5",
    paper: "paper2",
    unitId: "p2-u7",
    unitNumber: 7,
    unitName: "Data Communication and Computer Networks",
    examSource: "KSET 2023",
    question: "In the Selective Repeat (SR) sliding window protocol using n-bit sequence numbers, what is the MAXIMUM allowable sender and receiver window size to prevent sequence number ambiguity?",
    options: [
      { id: "A", text: "2^n - 1" },
      { id: "B", text: "2^(n - 1)" },
      { id: "C", text: "2^n" },
      { id: "D", text: "n" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "2^n - 1: Maximum sender window size in Go-Back-N (GBN).",
      "B": "2^(n - 1): Correct! In Selective Repeat, W_s + W_r ≤ 2^n. Since W_s = W_r, 2 * W_s ≤ 2^n ⇒ W_s ≤ 2^(n - 1).",
      "C": "2^n: Causes complete overlap of current and duplicate sequences.",
      "D": "n: Severe underutilization."
    },
    summaryExplanation: "Selective Repeat requires window size W ≤ 2^(n - 1) to avoid sequence number overlap."
  },
  {
    id: "p2-u7-q6",
    paper: "paper2",
    unitId: "p2-u7",
    unitNumber: 7,
    unitName: "Data Communication and Computer Networks",
    examSource: "AP-SET 2024",
    question: "What is the primary vulnerability in Distance Vector Routing protocols that causes routing loops, and what technique is commonly used to mitigate it?",
    options: [
      { id: "A", text: "Count-to-Infinity Problem; mitigated using Split Horizon and Poison Reverse" },
      { id: "B", text: "Flooding overload; mitigated using Dijkstra's algorithm" },
      { id: "C", text: "Buffer overflow; mitigated by Leaky Bucket" },
      { id: "D", text: "Hardware collisions; mitigated by Token Ring" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Count-to-Infinity and Split Horizon: Correct! In Bellman-Ford distance vector routing, bad news travels slowly, causing metric count-to-infinity loops; Split Horizon stops routing back information to its source.",
      "B": "Flooding: Link-state routing mechanism.",
      "C": "Leaky Bucket: Traffic policing algorithm.",
      "D": "Token Ring: MAC layer protocol."
    },
    summaryExplanation: "The Count-to-Infinity problem in distance vector routing is mitigated using Split Horizon and Poison Reverse."
  },
  {
    id: "p2-u7-q7",
    paper: "paper2",
    unitId: "p2-u7",
    unitNumber: 7,
    unitName: "Data Communication and Computer Networks",
    examSource: "UGC NET Dec 2022",
    question: "What is the size of the fixed header in a standard User Datagram Protocol (UDP) packet?",
    options: [
      { id: "A", text: "8 bytes (64 bits)" },
      { id: "B", text: "20 bytes (160 bits)" },
      { id: "C", text: "32 bytes (256 bits)" },
      { id: "D", text: "40 bytes (320 bits)" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "8 bytes: Correct! UDP header has exactly four 2-byte fields: Source Port (16 bits), Destination Port (16 bits), Length (16 bits), and Checksum (16 bits), totaling 8 bytes.",
      "B": "20 bytes: Minimum size of standard TCP or IPv4 header.",
      "C": "32 bytes: Inaccurate.",
      "D": "40 bytes: Fixed header of IPv6."
    },
    summaryExplanation: "The lightweight UDP header is fixed at exactly 8 bytes (64 bits)."
  },
  {
    id: "p2-u7-q8",
    paper: "paper2",
    unitId: "p2-u7",
    unitNumber: 7,
    unitName: "Data Communication and Computer Networks",
    examSource: "GSET 2023",
    question: "Which protocol translates a known IP address into a corresponding physical MAC address on a local area network?",
    options: [
      { id: "A", text: "Address Resolution Protocol (ARP)" },
      { id: "B", text: "Reverse Address Resolution Protocol (RARP)" },
      { id: "C", text: "Dynamic Host Configuration Protocol (DHCP)" },
      { id: "D", text: "Internet Control Message Protocol (ICMP)" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "ARP: Correct! Broadcasts an ARP request packet asking 'Who has this IP address?' and receives a unicast reply with the physical MAC address.",
      "B": "RARP: Maps known MAC address to unknown IP address (legacy diskless boots).",
      "C": "DHCP: Dynamically leases IP addresses to client devices.",
      "D": "ICMP: Error reporting protocol (ping, traceroute)."
    },
    summaryExplanation: "ARP maps logical IP addresses to physical MAC hardware addresses."
  },
  {
    id: "p2-u7-q9",
    paper: "paper2",
    unitId: "p2-u7",
    unitNumber: 7,
    unitName: "Data Communication and Computer Networks",
    examSource: "UGC NET June 2023",
    question: "In TCP congestion control, what happens during the 'Slow Start' phase upon receiving an acknowledgment for every delivered segment?",
    options: [
      { id: "A", text: "Congestion window (cwnd) increases exponentially, doubling every Round Trip Time (RTT)" },
      { id: "B", text: "Congestion window increases linearly by 1 MSS per RTT" },
      { id: "C", text: "Congestion window is halved immediately" },
      { id: "D", text: "Transmission rate drops to zero" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Doubles every RTT (exponential): Correct! In slow start, cwnd starts at 1 MSS and increments by 1 MSS for each incoming ACK, resulting in an exponential doubling (1, 2, 4, 8...) each RTT.",
      "B": "Linear increase: Occurs during the *Congestion Avoidance* phase (AIMD).",
      "C": "Halved: Occurs upon packet loss detection.",
      "D": "Zero: Stalling."
    },
    summaryExplanation: "During TCP Slow Start, the congestion window expands exponentially, doubling every round-trip time."
  },
  {
    id: "p2-u7-q10",
    paper: "paper2",
    unitId: "p2-u7",
    unitNumber: 7,
    unitName: "Data Communication and Computer Networks",
    examSource: "TN-SET 2024",
    question: "In Cyclic Redundancy Check (CRC), if the generator polynomial is G(x) = x^4 + x + 1, how many zero bits are appended to the data bit-string before performing modulo-2 binary division?",
    options: [
      { id: "A", text: "3 bits" },
      { id: "B", text: "4 bits" },
      { id: "C", text: "5 bits" },
      { id: "D", text: "16 bits" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "3 bits: Polynomial degree is 4.",
      "B": "4 bits: Correct! The highest degree of G(x) is 4. The number of appended zeroes equals the degree of the divisor polynomial (degree = 4).",
      "C": "5 bits: Length of the polynomial (10011 is 5 bits, but degree is 4).",
      "D": "16 bits: Exaggerated."
    },
    summaryExplanation: "The number of appended zeroes in CRC equals the degree of the generator polynomial (degree 4 = 4 zeroes)."
  },
  {
    id: "p2-u7-q11",
    paper: "paper2",
    unitId: "p2-u7",
    unitNumber: 7,
    unitName: "Data Communication and Computer Networks",
    examSource: "UGC NET Dec 2023",
    question: "Which of the following port numbers is the registered standard default port for secure HTTPS web traffic?",
    options: [
      { id: "A", text: "Port 21" },
      { id: "B", text: "Port 25" },
      { id: "C", text: "Port 80" },
      { id: "D", text: "Port 443" }
    ],
    correctOption: "D",
    optionExplanations: {
      "A": "Port 21: FTP control channel.",
      "B": "Port 25: SMTP mail transfer.",
      "C": "Port 80: Insecure HTTP web traffic.",
      "D": "Port 443: Correct! Standard TCP port assigned by IANA for encrypted HTTPS."
    },
    summaryExplanation: "HTTPS communicates over standard TCP port 443."
  },
  {
    id: "p2-u7-q12",
    paper: "paper2",
    unitId: "p2-u7",
    unitNumber: 7,
    unitName: "Data Communication and Computer Networks",
    examSource: "MH-SET 2023",
    question: "In the RSA public-key cryptographic algorithm, if primes p = 3 and q = 11, what is Euler's totient function φ(n)?",
    options: [
      { id: "A", text: "20" },
      { id: "B", text: "30" },
      { id: "C", text: "33" },
      { id: "D", text: "40" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "20: Correct! Modulus n = p * q = 3 * 11 = 33. Totient φ(n) = (p - 1) * (q - 1) = (3 - 1) * (11 - 1) = 2 * 10 = 20.",
      "B": "30: Arithmetic slip.",
      "C": "33: Modulus n itself.",
      "D": "40: Inaccurate."
    },
    summaryExplanation: "φ(n) = (p - 1)(q - 1) = (3 - 1)(11 - 1) = 2 * 10 = 20."
  },
  {
    id: "p2-u7-q13",
    paper: "paper2",
    unitId: "p2-u7",
    unitNumber: 7,
    unitName: "Data Communication and Computer Networks",
    examSource: "WB-SET 2024",
    question: "What is the primary function of the 'Time-to-Live' (TTL) field in an IPv4 header?",
    options: [
      { id: "A", text: "To synchronize computer clocks across the world" },
      { id: "B", text: "To prevent routing loops by decrementing at each router hop and discarding the packet when TTL reaches zero" },
      { id: "C", text: "To measure internet download bandwidth" },
      { id: "D", text: "To record the date when the packet was created" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Clock synchronization: NTP protocol.",
      "B": "Prevent routing loops: Correct! Decremented by 1 at every router hop; if TTL hits 0, the packet is dropped and an ICMP Time Exceeded message is returned, preventing eternal looping.",
      "C": "Bandwidth: Network metric.",
      "D": "Date created: Timestamp option."
    },
    summaryExplanation: "The TTL field prevents packet looping by decrementing at each hop and dropping packets when it reaches 0."
  },
  {
    id: "p2-u7-q14",
    paper: "paper2",
    unitId: "p2-u7",
    unitNumber: 7,
    unitName: "Data Communication and Computer Networks",
    examSource: "UGC NET June 2024",
    question: "Which of the following transmission media provides the HIGHEST data transmission rate and is completely immune to Electromagnetic Interference (EMI)?",
    options: [
      { id: "A", text: "Unshielded Twisted Pair (UTP)" },
      { id: "B", text: "Shielded Twisted Pair (STP)" },
      { id: "C", text: "Coaxial Cable" },
      { id: "D", text: "Fiber-Optic Cable" }
    ],
    correctOption: "D",
    optionExplanations: {
      "A": "UTP: Copper medium vulnerable to EMI and attenuation.",
      "B": "STP: Shielded copper; reduces EMI but still electrical.",
      "C": "Coaxial: Copper cable with moderate EMI shielding.",
      "D": "Fiber-Optic: Correct! Transmits modulated light pulses via total internal reflection through glass/plastic core; impervious to EMI and radio interference."
    },
    summaryExplanation: "Fiber-optic cables transmit light signals, providing massive bandwidth and total immunity to EMI."
  },
  {
    id: "p2-u7-q15",
    paper: "paper2",
    unitId: "p2-u7",
    unitNumber: 7,
    unitName: "Data Communication and Computer Networks",
    examSource: "KSET 2024",
    question: "In TCP connection establishment, how many messages are exchanged in the standard handshake mechanism?",
    options: [
      { id: "A", text: "Two-way handshake" },
      { id: "B", text: "Three-way handshake (SYN → SYN-ACK → ACK)" },
      { id: "C", text: "Four-way handshake" },
      { id: "D", text: "Five-way handshake" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Two-way: Insufficient to synchronize sequence numbers reliably.",
      "B": "Three-way handshake: Correct! Client sends SYN; Server responds with SYN-ACK; Client sends ACK, establishing synchronized bi-directional communication.",
      "C": "Four-way: Standard handshake for connection *termination* (FIN-ACK-FIN-ACK).",
      "D": "Five-way: Spurious."
    },
    summaryExplanation: "TCP establishes connections through a 3-way handshake: SYN, SYN-ACK, and ACK."
  },
  {
    id: "p2-u7-q16",
    paper: "paper2",
    unitId: "p2-u7",
    unitNumber: 7,
    unitName: "Data Communication and Computer Networks",
    examSource: "UGC NET Dec 2023",
    question: "What is the difference between Go-Back-N (GBN) ARQ and Stop-and-Wait ARQ?",
    options: [
      { id: "A", text: "Stop-and-Wait allows multiple frames in flight, while GBN allows only one" },
      { id: "B", text: "Stop-and-Wait has window size 1; GBN utilizes a sliding window allowing up to N unacknowledged frames in transit simultaneously" },
      { id: "C", text: "GBN cannot detect errors" },
      { id: "D", text: "Stop-and-Wait uses fiber optics only" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Inversion of facts.",
      "B": "Window size 1 vs N: Correct! Stop-and-Wait transmits 1 frame and waits for ACK before sending the next; GBN pipelines up to N frames continuously, dramatically boosting channel utilization.",
      "C": "Error detection: Both use CRC/checksums.",
      "D": "Physical medium: Protocol is independent of medium."
    },
    summaryExplanation: "Stop-and-Wait sends one frame at a time; Go-Back-N pipelines up to N frames concurrently."
  },
  {
    id: "p2-u7-q17",
    paper: "paper2",
    unitId: "p2-u7",
    unitNumber: 7,
    unitName: "Data Communication and Computer Networks",
    examSource: "AP-SET 2023",
    question: "Which traffic shaping algorithm regulates bursty data traffic into a strictly constant-rate, smooth output flow regardless of input bursts?",
    options: [
      { id: "A", text: "Leaky Bucket Algorithm" },
      { id: "B", text: "Token Bucket Algorithm" },
      { id: "C", text: "Dijkstra's Algorithm" },
      { id: "D", text: "Choke Packet Mechanism" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Leaky Bucket: Correct! Enforces rigid constant rate outflow (leaks at fixed rate), discarding bursts that overflow bucket capacity.",
      "B": "Token Bucket: Allows controlled bursty transmissions when idle tokens accumulate in the bucket.",
      "C": "Dijkstra: Routing shortest path.",
      "D": "Choke packet: Congestion feedback notification."
    },
    summaryExplanation: "The Leaky Bucket algorithm outputs data at a strictly uniform, constant rate regardless of burstiness."
  },
  {
    id: "p2-u7-q18",
    paper: "paper2",
    unitId: "p2-u7",
    unitNumber: 7,
    unitName: "Data Communication and Computer Networks",
    examSource: "MH-SET 2024",
    question: "What is the network ID of the IPv4 address 172.16.45.10 with a default Class B subnet mask (255.255.0.0)?",
    options: [
      { id: "A", text: "172.16.0.0" },
      { id: "B", text: "172.16.45.0" },
      { id: "C", text: "172.0.0.0" },
      { id: "D", text: "172.16.45.255" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "172.16.0.0: Correct! In Class B (/16), the first two octets represent Network ID (172.16) and the last two octets represent host bits (zeroed for Network ID).",
      "B": "172.16.45.0: Subnetted /24 network ID.",
      "C": "172.0.0.0: Class A format.",
      "D": "172.16.45.255: Directed broadcast address."
    },
    summaryExplanation: "Applying the /16 Class B mask (255.255.0.0) yields network address 172.16.0.0."
  },
  {
    id: "p2-u7-q19",
    paper: "paper2",
    unitId: "p2-u7",
    unitNumber: 7,
    unitName: "Data Communication and Computer Networks",
    examSource: "UGC NET June 2023",
    question: "In link-state routing protocols like OSPF, which graph algorithm is executed independently by every router to compute the shortest-path routing tree?",
    options: [
      { id: "A", text: "Bellman-Ford Algorithm" },
      { id: "B", text: "Dijkstra's Algorithm" },
      { id: "C", text: "Floyd-Warshall Algorithm" },
      { id: "D", text: "Kruskal's Algorithm" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Bellman-Ford: Used in Distance Vector protocols (RIP).",
      "B": "Dijkstra's Algorithm: Correct! Routers flood Link State Advertisements (LSAs) to construct an identical network topology map, then run Dijkstra's algorithm to compute shortest paths.",
      "C": "Floyd-Warshall: All-pairs shortest path.",
      "D": "Kruskal: Minimum spanning tree."
    },
    summaryExplanation: "OSPF uses Dijkstra's shortest path algorithm over link-state topology databases."
  },
  {
    id: "p2-u7-q20",
    paper: "paper2",
    unitId: "p2-u7",
    unitNumber: 7,
    unitName: "Data Communication and Computer Networks",
    examSource: "GSET 2024",
    question: "In Hamming Error Correcting Code, how many redundant check bits (r) are required to detect and correct single-bit errors in an 8-bit data word (m = 8)?",
    options: [
      { id: "A", text: "3" },
      { id: "B", text: "4" },
      { id: "C", text: "5" },
      { id: "D", text: "8" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "3: 2^3 = 8 < 8 + 3 + 1 (12).",
      "B": "4: Correct! Hamming inequality: 2^r ≥ m + r + 1. For m = 8: If r = 4, 2^4 = 16 ≥ 8 + 4 + 1 = 13 (Satisfied!). Thus, 4 parity bits are required.",
      "C": "5: Redundant.",
      "D": "8: Overkill."
    },
    summaryExplanation: "Hamming formula: 2ʳ ≥ m + r + 1. For m = 8, r = 4 gives 2⁴ = 16 ≥ 13."
  },
  {
    id: "p2-u7-q21",
    paper: "paper2",
    unitId: "p2-u7",
    unitNumber: 7,
    unitName: "Data Communication and Computer Networks",
    examSource: "WB-SET 2023",
    question: "What is 'Silly Window Syndrome' in TCP and which algorithm solves it on the sender side?",
    options: [
      { id: "A", text: "Sender repeatedly transmits tiny 1-byte data segments; solved by Nagle's Algorithm" },
      { id: "B", text: "Routers drop packets randomly" },
      { id: "C", text: "DNS server crashes" },
      { id: "D", text: "WiFi antenna misalignment" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Tiny segment transmission; Nagle's algorithm: Correct! Occurs when either sender creates tiny payloads or receiver advertises tiny buffer openings; Nagle's algorithm buffers small outgoing data until an ACK arrives or a full MSS accumulates.",
      "B": "Packet drop: RED (Random Early Detection).",
      "C": "DNS crash: Server outage.",
      "D": "Antenna: Physical layer."
    },
    summaryExplanation: "Silly Window Syndrome causes wasteful transmission of tiny packets; Nagle's algorithm mitigates it at the sender."
  },
  {
    id: "p2-u7-q22",
    paper: "paper2",
    unitId: "p2-u7",
    unitNumber: 7,
    unitName: "Data Communication and Computer Networks",
    examSource: "UGC NET Dec 2023",
    question: "What is the broadcast address for the standard Class C network 200.100.50.0?",
    options: [
      { id: "A", text: "200.100.50.0" },
      { id: "B", text: "200.100.50.255" },
      { id: "C", text: "255.255.255.255" },
      { id: "D", text: "200.100.50.1" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "200.100.50.0: Network Address.",
      "B": "200.100.50.255: Correct! Directed broadcast address for the subnet, obtained by setting all 8 host bits to 1.",
      "C": "255.255.255.255: Limited broadcast address.",
      "D": "200.100.50.1: First assignable host IP."
    },
    summaryExplanation: "Setting all host bits to binary 1 in Class C yields the broadcast address 200.100.50.255."
  },
  {
    id: "p2-u7-q23",
    paper: "paper2",
    unitId: "p2-u7",
    unitNumber: 7,
    unitName: "Data Communication and Computer Networks",
    examSource: "KSET 2023",
    question: "Which of the following multiplexing techniques divides the wide optical fiber bandwidth into multiple distinct optical wavelengths/colors?",
    options: [
      { id: "A", text: "Time Division Multiplexing (TDM)" },
      { id: "B", text: "Wavelength Division Multiplexing (WDM / DWDM)" },
      { id: "C", text: "Frequency Division Multiplexing (FDM)" },
      { id: "D", text: "Space Division Multiplexing" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "TDM: Allocates discrete time slices on electrical digital channels.",
      "B": "Wavelength Division Multiplexing (WDM): Correct! Optical variation of FDM combining multiple light wavelengths (colors) over a single fiber-optic strand.",
      "C": "FDM: Analog frequency division over copper/radio.",
      "D": "Space Division: Physically separate paths."
    },
    summaryExplanation: "Wavelength Division Multiplexing (WDM) transmits multiple light wavelengths concurrently through a single optical fiber."
  },
  {
    id: "p2-u7-q24",
    paper: "paper2",
    unitId: "p2-u7",
    unitNumber: 7,
    unitName: "Data Communication and Computer Networks",
    examSource: "UGC NET June 2024",
    question: "In symmetric-key cryptography, what is the key block size and standard key length in the original Data Encryption Standard (DES)?",
    options: [
      { id: "A", text: "Block size: 64 bits; Effective key length: 56 bits" },
      { id: "B", text: "Block size: 128 bits; Key length: 128 bits" },
      { id: "C", text: "Block size: 32 bits; Key length: 32 bits" },
      { id: "D", text: "Block size: 256 bits; Key length: 512 bits" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "64-bit block, 56-bit key: Correct! DES processes 64-bit plaintext blocks using a 64-bit key where 8 bits are parity checks, leaving an effective 56-bit cryptographic key.",
      "B": "128 bits: Advanced Encryption Standard (AES) parameters.",
      "C": "32 bits: Too short.",
      "D": "256/512 bits: Modern high-security hashes."
    },
    summaryExplanation: "DES operates on 64-bit plaintext blocks with an effective key length of 56 bits (8 bits parity)."
  },
  {
    id: "p2-u7-q25",
    paper: "paper2",
    unitId: "p2-u7",
    unitNumber: 7,
    unitName: "Data Communication and Computer Networks",
    examSource: "MH-SET 2023",
    question: "What is the primary role of the 'Network Address Translation' (NAT) protocol in edge routers?",
    options: [
      { id: "A", text: "Translating private non-routable IP addresses (RFC 1918) of an internal LAN into one or more public globally routable IP addresses" },
      { id: "B", text: "Converting analog phone signals to digital VoIP" },
      { id: "C", text: "Scanning incoming emails for spam" },
      { id: "D", text: "Formatting DNS cache files" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Private to public IP mapping: Correct! NAT conserves global IPv4 addresses by multiplexing internal private hosts (e.g., 10.0.0.0/8, 192.168.0.0/16) through public WAN IPs.",
      "B": "VoIP conversion: Audio codec.",
      "C": "Spam filtering: Application gateway.",
      "D": "DNS format: DNS caching."
    },
    summaryExplanation: "NAT remaps private internal IP addresses to public routable IP addresses for internet connectivity."
  },
  {
    id: "p2-u7-q26",
    paper: "paper2",
    unitId: "p2-u7",
    unitNumber: 7,
    unitName: "Data Communication and Computer Networks",
    examSource: "AP-SET 2024",
    question: "In the Border Gateway Protocol (BGP) used between Autonomous Systems across the internet backbone, BGP is classified as a:",
    options: [
      { id: "A", text: "Link-State Protocol" },
      { id: "B", text: "Path-Vector Routing Protocol" },
      { id: "C", text: "Pure Distance Vector Protocol" },
      { id: "D", text: "MAC Layer Flooding Protocol" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Link-State: OSPF / IS-IS.",
      "B": "Path-Vector: Correct! BGP explicitly advertises entire Autonomous System sequence paths (AS-PATH attribute) to avoid cross-domain routing loops and enforce policy routing.",
      "C": "Pure Distance Vector: RIP.",
      "D": "MAC Flooding: Layer 2 switch behavior."
    },
    summaryExplanation: "BGP is an inter-domain Path-Vector routing protocol utilizing AS-PATH attributes to prevent loops."
  },
  {
    id: "p2-u7-q27",
    paper: "paper2",
    unitId: "p2-u7",
    unitNumber: 7,
    unitName: "Data Communication and Computer Networks",
    examSource: "UGC NET Dec 2023",
    question: "What is the maximum data rate (channel capacity C) of a noiseless transmission channel with bandwidth B = 4000 Hz carrying 4 discrete signal levels according to the Nyquist Theorem?",
    options: [
      { id: "A", text: "8,000 bps" },
      { id: "B", text: "16,000 bps" },
      { id: "C", text: "32,000 bps" },
      { id: "D", text: "64,000 bps" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "8,000 bps: Binary signaling (M = 2).",
      "B": "16,000 bps: Correct! Nyquist Capacity C = 2 * B * log2(M) = 2 * 4000 * log2(4) = 8000 * 2 = 16,000 bps.",
      "C": "32,000 bps: Overestimate.",
      "D": "64,000 bps: Shannon limit under high SNR."
    },
    summaryExplanation: "Nyquist Capacity = 2 * B * log2(M) = 2 * 4000 * 2 = 16,000 bps."
  },
  {
    id: "p2-u7-q28",
    paper: "paper2",
    unitId: "p2-u7",
    unitNumber: 7,
    unitName: "Data Communication and Computer Networks",
    examSource: "WB-SET 2024",
    question: "Which field in the IPv4 header is used by the receiving host to correctly reassemble fragmented IP packets?",
    options: [
      { id: "A", text: "Identification, Flags (MF, DF), and Fragment Offset" },
      { id: "B", text: "Source IP and Destination IP only" },
      { id: "C", text: "Header Checksum only" },
      { id: "D", text: "Type of Service" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Identification, Flags, Offset: Correct! Identification identifies the parent datagram; More Fragments (MF) flag signals subsequent chunks; Fragment Offset (in 8-byte units) orders the fragments.",
      "B": "IPs only: Identifies endpoints, not byte order.",
      "C": "Checksum: Validates header integrity.",
      "D": "Type of Service: QoS priority."
    },
    summaryExplanation: "Packet reassembly uses Identification, Flags (DF/MF), and the 13-bit Fragment Offset field."
  },
  {
    id: "p2-u7-q29",
    paper: "paper2",
    unitId: "p2-u7",
    unitNumber: 7,
    unitName: "Data Communication and Computer Networks",
    examSource: "UGC NET June 2023",
    question: "In the Diffie-Hellman Key Exchange protocol, what security objective is accomplished between two communicating parties across an insecure channel?",
    options: [
      { id: "A", text: "They securely establish a shared secret symmetric key without transmitting the key itself" },
      { id: "B", text: "They compress video frames" },
      { id: "C", text: "They decrypt passwords on DNS servers" },
      { id: "D", text: "They double network bandwidth" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Establish shared secret key: Correct! Based on the discrete logarithm problem; allows two parties to agree on a shared secret key without ever exposing it to eavesdroppers.",
      "B": "Compress video: Codec task.",
      "C": "Decrypt passwords: Password cracking.",
      "D": "Double bandwidth: Physical layer."
    },
    summaryExplanation: "Diffie-Hellman allows two parties to compute a shared symmetric secret over an untrusted channel."
  },
  {
    id: "p2-u7-q30",
    paper: "paper2",
    unitId: "p2-u7",
    unitNumber: 7,
    unitName: "Data Communication and Computer Networks",
    examSource: "MH-SET 2024",
    question: "Which of the following IEEE 802 wireless standards defines Wireless Local Area Networks (Wi-Fi)?",
    options: [
      { id: "A", text: "IEEE 802.3" },
      { id: "B", text: "IEEE 802.11" },
      { id: "C", text: "IEEE 802.15" },
      { id: "D", text: "IEEE 802.16" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "IEEE 802.3: Wired Ethernet standard.",
      "B": "IEEE 802.11: Correct! Defines MAC and physical layer standards for Wireless Local Area Networks (Wi-Fi: 802.11a/b/g/n/ac/ax).",
      "C": "IEEE 802.15: Wireless Personal Area Networks (Bluetooth, Zigbee).",
      "D": "IEEE 802.16: Broadband Wireless Access (WiMAX)."
    },
    summaryExplanation: "IEEE 802.11 standardizes Wireless LAN (Wi-Fi) communication technologies."
  }
];
