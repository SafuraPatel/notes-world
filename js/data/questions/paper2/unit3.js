/**
 * PAPER 2 - UNIT 3: PROGRAMMING LANGUAGES AND COMPUTER GRAPHICS (30 Authentic & Expected PYQs)
 * Subject: Computer Science & Applications (Code 87)
 * Citations from UGC NET (2018-2024) and All State SET exams (MH-SET, WB-SET, KSET, AP-SET, GSET).
 * Covers OOPs Concepts, Pointers, Bresenham Line/Circle, Cohen-Sutherland Clipping, Z-Buffer, and Shading.
 */

export const p2Unit3Questions = [
  {
    id: "p2-u3-q1",
    paper: "paper2",
    unitId: "p2-u3",
    unitNumber: 3,
    unitName: "Programming Languages and Computer Graphics",
    examSource: "UGC NET June 2024",
    question: "In C++, what makes a class an 'Abstract Base Class'?",
    options: [
      { id: "A", text: "Declaring all member variables private" },
      { id: "B", text: "Containing at least one Pure Virtual Function (e.g., virtual void draw() = 0;)" },
      { id: "C", text: "Inheriting from multiple base classes simultaneously" },
      { id: "D", text: "Having no constructor defined" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Private members: Standard encapsulation, does not prevent instantiation.",
      "B": "Pure virtual function: Correct! Any class containing at least one pure virtual function (= 0) becomes abstract and cannot be directly instantiated.",
      "C": "Multiple inheritance: Creates a derived class, not inherently abstract.",
      "D": "No constructor: Compiler provides default constructor."
    },
    summaryExplanation: "In C++, a class with at least one pure virtual function (= 0) is an Abstract Base Class."
  },
  {
    id: "p2-u3-q2",
    paper: "paper2",
    unitId: "p2-u3",
    unitNumber: 3,
    unitName: "Programming Languages and Computer Graphics",
    examSource: "MH-SET 2024",
    question: "In the Cohen-Sutherland 2D line clipping algorithm, what can be immediately concluded if the bitwise logical AND of the 4-bit region outcodes of both endpoints of a line is NON-ZERO?",
    options: [
      { id: "A", text: "The line lies completely inside the clipping window and is accepted" },
      { id: "B", text: "The line lies completely outside the clipping window and is rejected (trivially invisible)" },
      { id: "C", text: "The line intersects all four window edges" },
      { id: "D", text: "The line must be clipped at a 45-degree angle" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Accepted: Both outcodes must be 0000 (bitwise OR is zero).",
      "B": "Trivially rejected: Correct! If (Outcode1 AND Outcode2) ≠ 0, both endpoints share an external half-plane (e.g., both to the left, or both above), proving total invisibility.",
      "C": "Intersects all edges: Geometrically impossible for straight lines.",
      "D": "45-degree angle: Clip boundary depends on line equation."
    },
    summaryExplanation: "Bitwise AND ≠ 0 in Cohen-Sutherland indicates both endpoints lie on the same outside side, allowing trivial rejection."
  },
  {
    id: "p2-u3-q3",
    paper: "paper2",
    unitId: "p2-u3",
    unitNumber: 3,
    unitName: "Programming Languages and Computer Graphics",
    examSource: "UGC NET Dec 2023",
    question: "What is the primary computational advantage of Bresenham's Line Drawing Algorithm over the DDA (Digital Differential Analyzer) algorithm?",
    options: [
      { id: "A", text: "Bresenham uses floating-point divisions exclusively" },
      { id: "B", text: "Bresenham uses only fast incremental integer addition and subtraction, avoiding floating-point multiplication and division" },
      { id: "C", text: "Bresenham draws lines only horizontally" },
      { id: "D", text: "Bresenham does not require a frame buffer" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Floating-point: DDA uses floating-point rounding.",
      "B": "Fast integer arithmetic: Correct! Jack Bresenham's formulation uses a decision parameter d_k evaluated strictly using integer additions/shifts.",
      "C": "Horizontal only: Handles any line slope.",
      "D": "Frame buffer: All rasterization outputs to a frame buffer."
    },
    summaryExplanation: "Bresenham's algorithm replaces floating-point calculations with pure incremental integer arithmetic."
  },
  {
    id: "p2-u3-q4",
    paper: "paper2",
    unitId: "p2-u3",
    unitNumber: 3,
    unitName: "Programming Languages and Computer Graphics",
    examSource: "WB-SET 2023",
    question: "In C++, which keyword is used in a derived class inheritance list to prevent multiple inherited copies of a common ancestor base class in a diamond inheritance hierarchy?",
    options: [
      { id: "A", text: "static" },
      { id: "B", text: "virtual" },
      { id: "C", text: "friend" },
      { id: "D", text: "inline" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "static: Shared class variable.",
      "B": "virtual: Correct! Virtual base classes (e.g., class B : virtual public A) ensure only a single shared instance of the base subobject exists in the most derived class.",
      "C": "friend: Grants non-member access to private members.",
      "D": "inline: Suggests compiler inlines function expansion."
    },
    summaryExplanation: "Virtual base classes resolve the diamond problem by ensuring a single shared base subobject."
  },
  {
    id: "p2-u3-q5",
    paper: "paper2",
    unitId: "p2-u3",
    unitNumber: 3,
    unitName: "Programming Languages and Computer Graphics",
    examSource: "KSET 2023",
    question: "In computer graphics, 2D affine transformations (translation, rotation, scaling) are represented using homogeneous coordinate matrices of size:",
    options: [
      { id: "A", text: "2 × 2" },
      { id: "B", text: "3 × 3" },
      { id: "C", text: "4 × 4" },
      { id: "D", text: "3 × 2" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "2 × 2: Cannot represent translation as a matrix multiplication.",
      "B": "3 × 3: Correct! Homogeneous coordinates represent 2D points as [x, y, 1]^T, enabling translation, rotation, and scaling to be multiplied uniformly as 3 × 3 matrices.",
      "C": "4 × 4: Used for 3D graphics.",
      "D": "3 × 2: Non-square transformation."
    },
    summaryExplanation: "Homogeneous coordinates utilize 3 × 3 matrices for uniform composite 2D transformations."
  },
  {
    id: "p2-u3-q6",
    paper: "paper2",
    unitId: "p2-u3",
    unitNumber: 3,
    unitName: "Programming Languages and Computer Graphics",
    examSource: "AP-SET 2024",
    question: "Which of the following surface shading algorithms interpolates surface normal vectors across polygon surfaces rather than interpolating vertex color intensities?",
    options: [
      { id: "A", text: "Flat Shading" },
      { id: "B", text: "Gouraud Shading" },
      { id: "C", text: "Phong Shading" },
      { id: "D", text: "Ray Casting" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "Flat Shading: Computes one single color per polygon face.",
      "B": "Gouraud Shading: Interpolates vertex *color intensities* across the polygon; misses sharp specular highlights.",
      "C": "Phong Shading: Correct! Interpolates surface *normal vectors* across rasterized scanlines and evaluates illumination per pixel, rendering specular highlights accurately.",
      "D": "Ray Casting: Ray intersection algorithm."
    },
    summaryExplanation: "Phong shading interpolates normal vectors per pixel, while Gouraud shading interpolates vertex colors."
  },
  {
    id: "p2-u3-q7",
    paper: "paper2",
    unitId: "p2-u3",
    unitNumber: 3,
    unitName: "Programming Languages and Computer Graphics",
    examSource: "UGC NET Dec 2022",
    question: "What is the output of the following C code snippet?\nint a = 10, *p = &a, **pp = &p;\nprintf(\"%d\", **pp + 5);",
    options: [
      { id: "A", text: "10" },
      { id: "B", text: "15" },
      { id: "C", text: "Garbage memory address" },
      { id: "D", text: "Compilation Error" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "10: Value of a without +5.",
      "B": "15: Correct! p points to a, pp points to p. Dereferencing **pp retrieves the value of a (10). Then 10 + 5 = 15.",
      "C": "Garbage address: Dereferencing is valid.",
      "D": "Compilation error: Standard valid pointer-to-pointer syntax."
    },
    summaryExplanation: "**pp evaluates to 10; adding 5 produces 15."
  },
  {
    id: "p2-u3-q8",
    paper: "paper2",
    unitId: "p2-u3",
    unitNumber: 3,
    unitName: "Programming Languages and Computer Graphics",
    examSource: "GSET 2023",
    question: "The Z-Buffer (Depth-Buffer) visible surface detection algorithm operates in which domain?",
    options: [
      { id: "A", text: "Object Space" },
      { id: "B", text: "Image Space (Screen / Pixel Space)" },
      { id: "C", text: "Frequency Fourier Space" },
      { id: "D", text: "Vector Space" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Object space: Compares objects directly with each other (e.g., Back-face detection, Roberts algorithm).",
      "B": "Image space: Correct! Resolves visibility pixel by pixel on the projection screen plane using two 2D arrays: Color Buffer and Depth (Z) Buffer.",
      "C": "Fourier space: Image processing transform.",
      "D": "Vector space: Pure geometry."
    },
    summaryExplanation: "Z-Buffer algorithm is an Image-Space method operating at individual pixel resolution."
  },
  {
    id: "p2-u3-q9",
    paper: "paper2",
    unitId: "p2-u3",
    unitNumber: 3,
    unitName: "Programming Languages and Computer Graphics",
    examSource: "UGC NET June 2023",
    question: "In C++, which of the following operators CANNOT be overloaded by user code?",
    options: [
      { id: "A", text: "Plus operator (+)" },
      { id: "B", text: "Scope Resolution Operator (::)" },
      { id: "C", text: "Subscript operator ([])" },
      { id: "D", text: "Function call operator (())" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Plus: Readily overloaded.",
      "B": "Scope Resolution (::): Correct! C++ explicitly forbids overloading: :: (scope resolution), . (member access), .* (pointer-to-member), and ?: (ternary conditional).",
      "C": "Subscript: Overloadable as member function.",
      "D": "Function call (): Overloadable for functors."
    },
    summaryExplanation: "The scope resolution operator (::), member access (.), and ternary (?:) cannot be overloaded in C++."
  },
  {
    id: "p2-u3-q10",
    paper: "paper2",
    unitId: "p2-u3",
    unitNumber: 3,
    unitName: "Programming Languages and Computer Graphics",
    examSource: "TN-SET 2024",
    question: "A perspective projection is characterized by the convergence of parallel projection lines at a point called the:",
    options: [
      { id: "A", text: "Principal axis" },
      { id: "B", text: "Center of Projection (Vanishing Point)" },
      { id: "C", text: "Orthographic origin" },
      { id: "D", text: "Viewport centroid" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Principal axis: Optical axis.",
      "B": "Vanishing Point: Correct! In perspective projection, parallel lines not parallel to the projection plane converge at a Vanishing Point on the horizon.",
      "C": "Orthographic origin: Parallel projection lines never converge.",
      "D": "Viewport centroid: Center of display rectangle."
    },
    summaryExplanation: "Parallel lines in perspective projection converge toward vanishing points."
  },
  {
    id: "p2-u3-q11",
    paper: "paper2",
    unitId: "p2-u3",
    unitNumber: 3,
    unitName: "Programming Languages and Computer Graphics",
    examSource: "UGC NET Dec 2023",
    question: "In C, which storage class retains its value across multiple function calls and persists throughout program execution while maintaining local block scope?",
    options: [
      { id: "A", text: "auto" },
      { id: "B", text: "register" },
      { id: "C", text: "static" },
      { id: "D", text: "extern" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "auto: Stack variable destroyed upon function exit.",
      "B": "register: CPU register variable with local lifetime.",
      "C": "static: Correct! Static local variables are allocated in data segment, preserving value between invocations while accessible only within the enclosing block.",
      "D": "extern: Global variable with file/program scope."
    },
    summaryExplanation: "A static local variable maintains its value across function calls with localized scope visibility."
  },
  {
    id: "p2-u3-q12",
    paper: "paper2",
    unitId: "p2-u3",
    unitNumber: 3,
    unitName: "Programming Languages and Computer Graphics",
    examSource: "MH-SET 2023",
    question: "What is the aspect ratio of an image with a raster resolution of 1920 × 1080 pixels?",
    options: [
      { id: "A", text: "4:3" },
      { id: "B", text: "16:9" },
      { id: "C", text: "16:10" },
      { id: "D", text: "21:9" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "4:3: Standard definition (1024 × 768).",
      "B": "16:9: Correct! Dividing both dimensions by their greatest common divisor (120): 1920 / 120 = 16, and 1080 / 120 = 9. Ratio = 16:9.",
      "C": "16:10: 1920 × 1200.",
      "D": "21:9: Ultra-wide (2560 × 1080)."
    },
    summaryExplanation: "1920 / 1080 simplifies to 16:9, the standard widescreen display aspect ratio."
  },
  {
    id: "p2-u3-q13",
    paper: "paper2",
    unitId: "p2-u3",
    unitNumber: 3,
    unitName: "Programming Languages and Computer Graphics",
    examSource: "WB-SET 2024",
    question: "In C++, dynamic polymorphism (runtime method binding) is achieved using:",
    options: [
      { id: "A", text: "Function Overloading" },
      { id: "B", text: "Operator Overloading" },
      { id: "C", text: "Virtual Functions and Base Class Pointers" },
      { id: "D", text: "Templates" }
    ],
    correctOption: "C",
    optionExplanations: {
      "A": "Function Overloading: Compile-time (static) polymorphism.",
      "B": "Operator Overloading: Compile-time polymorphism.",
      "C": "Virtual Functions: Correct! Runtime polymorphism uses a virtual table (vtable) and virtual table pointer (vptr) through base class pointers/references.",
      "D": "Templates: Compile-time parametric polymorphism."
    },
    summaryExplanation: "Runtime polymorphism in C++ is implemented via virtual functions and vtables."
  },
  {
    id: "p2-u3-q14",
    paper: "paper2",
    unitId: "p2-u3",
    unitNumber: 3,
    unitName: "Programming Languages and Computer Graphics",
    examSource: "UGC NET June 2024",
    question: "The Sutherland-Hodgman algorithm is used in computer graphics for:",
    options: [
      { id: "A", text: "Line clipping against an irregular curve" },
      { id: "B", text: "Polygon clipping against a convex clipping window" },
      { id: "C", text: "Character font anti-aliasing" },
      { id: "D", text: "Circle scan-conversion" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Line clipping: Cohen-Sutherland / Liang-Barsky.",
      "B": "Polygon clipping: Correct! Iteratively clips a polygon against each infinite window boundary edge (Left, Right, Bottom, Top).",
      "C": "Anti-aliasing: Supersampling / filtering.",
      "D": "Circle rasterization: Midpoint circle algorithm."
    },
    summaryExplanation: "Sutherland-Hodgman clips arbitrary polygons against convex clip boundaries."
  },
  {
    id: "p2-u3-q15",
    paper: "paper2",
    unitId: "p2-u3",
    unitNumber: 3,
    unitName: "Programming Languages and Computer Graphics",
    examSource: "KSET 2024",
    question: "What does the 'malloc()' function in C return if the operating system fails to allocate the requested heap memory block?",
    options: [
      { id: "A", text: "-1" },
      { id: "B", text: "NULL pointer" },
      { id: "C", text: "0" },
      { id: "D", text: "Throws a bad_alloc runtime exception" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "-1: Unix system call error indicator, not malloc pointer.",
      "B": "NULL pointer: Correct! Upon memory allocation failure, malloc returns a NULL pointer (void *0).",
      "C": "0: NULL is defined as ((void *)0).",
      "D": "bad_alloc: Thrown by C++ 'new' operator, not C malloc."
    },
    summaryExplanation: "In C, malloc() returns NULL when dynamic memory allocation fails."
  },
  {
    id: "p2-u3-q16",
    paper: "paper2",
    unitId: "p2-u3",
    unitNumber: 3,
    unitName: "Programming Languages and Computer Graphics",
    examSource: "UGC NET Dec 2023",
    question: "In raster graphics displays, the jagged stair-step appearance of rasterized diagonal lines and curves is called:",
    options: [
      { id: "A", text: "Aliasing" },
      { id: "B", text: "Dithering" },
      { id: "C", text: "Morphing" },
      { id: "D", text: "Halftoning" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Aliasing: Correct! Caused by undersampling high-frequency continuous geometric boundaries onto a discrete pixel grid, creating 'jaggies'.",
      "B": "Dithering: Technique creating illusion of color depth with limited palettes.",
      "C": "Morphing: Smooth transformation of one image into another.",
      "D": "Halftoning: Simulating continuous tones with dots of varying sizes."
    },
    summaryExplanation: "Aliasing produces staircase artifacts ('jaggies') on discrete raster grids."
  },
  {
    id: "p2-u3-q17",
    paper: "paper2",
    unitId: "p2-u3",
    unitNumber: 3,
    unitName: "Programming Languages and Computer Graphics",
    examSource: "AP-SET 2023",
    question: "What is a 'Memory Leak' in C/C++ programming?",
    options: [
      { id: "A", text: "Electrons leaking from memory capacitors" },
      { id: "B", text: "Dynamically allocated heap memory that is no longer accessible because its pointer was lost without being freed" },
      { id: "C", text: "Writing beyond the allocated bounds of an array" },
      { id: "D", text: "Stack overflow due to infinite recursion" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Hardware capacitor leakage: DRAM refresh necessity.",
      "B": "Unfreed unreachable heap memory: Correct! Occurs when heap memory (via malloc/new) is not deallocated (via free/delete), consuming RAM permanently until process termination.",
      "C": "Writing beyond array bounds: Buffer overflow.",
      "D": "Infinite recursion: Stack overflow."
    },
    summaryExplanation: "Memory leaks occur when dynamically allocated heap blocks are never freed."
  },
  {
    id: "p2-u3-q18",
    paper: "paper2",
    unitId: "p2-u3",
    unitNumber: 3,
    unitName: "Programming Languages and Computer Graphics",
    examSource: "MH-SET 2024",
    question: "Lambert's Cosine Law governs which component of illumination on an ideal matte surface?",
    options: [
      { id: "A", text: "Diffuse Reflection" },
      { id: "B", text: "Specular Reflection" },
      { id: "C", text: "Ambient Reflection" },
      { id: "D", text: "Refraction" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Diffuse Reflection: Correct! Lambert's law states reflected luminous intensity is directly proportional to the cosine of the angle between incident light vector and surface normal (I = I_p * K_d * cos θ).",
      "B": "Specular: Governed by Phong model (cos^n α).",
      "C": "Ambient: Constant uniform background illumination.",
      "D": "Refraction: Governed by Snell's Law."
    },
    summaryExplanation: "Lambert's Cosine Law models diffuse reflection on rough matte surfaces."
  },
  {
    id: "p2-u3-q19",
    paper: "paper2",
    unitId: "p2-u3",
    unitNumber: 3,
    unitName: "Programming Languages and Computer Graphics",
    examSource: "UGC NET June 2023",
    question: "What is the return type of the evaluation of expression `sizeof('a')` in standard C language?",
    options: [
      { id: "A", text: "1 (char size)" },
      { id: "B", text: "Size of int (typically 4 bytes)" },
      { id: "C", text: "2" },
      { id: "D", text: "0" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "1: In C++, character literals are of type char (sizeof('a') == 1).",
      "B": "Size of int (4 bytes): Correct! In C (unlike C++), character constants like 'a' are integer literals of type int; hence sizeof('a') == sizeof(int) (typically 4 bytes).",
      "C": "2: 16-bit systems.",
      "D": "0: Spurious."
    },
    summaryExplanation: "In C, character literals are promoted to int, making sizeof('a') equal to sizeof(int)."
  },
  {
    id: "p2-u3-q20",
    paper: "paper2",
    unitId: "p2-u3",
    unitNumber: 3,
    unitName: "Programming Languages and Computer Graphics",
    examSource: "GSET 2024",
    question: "In 2D computer graphics, scaling an object with scale factors S_x = -1 and S_y = -1 corresponds to which transformation?",
    options: [
      { id: "A", text: "Pure translation by 1 unit" },
      { id: "B", text: "Reflection through the origin (or 180° rotation around origin)" },
      { id: "C", text: "Horizontal shear" },
      { id: "D", text: "Orthographic projection on Y-axis" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Translation requires addition.",
      "B": "Reflection through origin / 180° rotation: Correct! x' = -x, y' = -y maps (x, y) to (-x, -y), which is reflection about origin or rotation by 180°.",
      "C": "Shear modifies one coordinate by a factor of the other.",
      "D": "Projection zeroes out one coordinate."
    },
    summaryExplanation: "Scaling with factors (-1, -1) produces point reflection through the origin (180° rotation)."
  },
  {
    id: "p2-u3-q21",
    paper: "paper2",
    unitId: "p2-u3",
    unitNumber: 3,
    unitName: "Programming Languages and Computer Graphics",
    examSource: "WB-SET 2023",
    question: "In C++, what is a 'Destructor' and what prefix symbol precedes its class name?",
    options: [
      { id: "A", text: "Special member function invoked upon object destruction, prefixed with tilde (~)" },
      { id: "B", text: "A function that deletes source code, prefixed with exclamation mark (!)" },
      { id: "C", text: "A constructor taking three arguments, prefixed with hash (#)" },
      { id: "D", text: "A global friend function, prefixed with asterisk (*)" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Tilde prefix: Correct! Destructors (e.g., ~MyClass()) automatically release acquired resources when objects leave scope.",
      "B": "Delete source: Misconception.",
      "C": "Parameterized constructor.",
      "D": "Friend function."
    },
    summaryExplanation: "Destructors clean up resources when objects are destroyed, identified by the tilde (~) prefix."
  },
  {
    id: "p2-u3-q22",
    paper: "paper2",
    unitId: "p2-u3",
    unitNumber: 3,
    unitName: "Programming Languages and Computer Graphics",
    examSource: "UGC NET Dec 2023",
    question: "What is the primary visual difference between Raster-Scan displays and Vector (Random-Scan) displays?",
    options: [
      { id: "A", text: "Raster displays scan line-by-line across the whole screen; Vector displays draw lines directly from point to point like a pen plotter" },
      { id: "B", text: "Raster uses green phosphors only; Vector uses RGB" },
      { id: "C", text: "Vector displays cannot draw straight lines" },
      { id: "D", text: "Raster displays do not use electricity" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Line-by-line scan vs direct beam vector: Correct! Raster sweeps top-to-bottom row-by-row refreshing pixels; Vector directs electron beam strictly along component line strokes.",
      "B": "Color limitation: Both can support colors.",
      "C": "Straight lines: Vector specializes in smooth lines.",
      "D": "Electricity: Humorous distractor."
    },
    summaryExplanation: "Raster sweeps all scanlines continuously; Vector directs the beam specifically along line vectors."
  },
  {
    id: "p2-u3-q23",
    paper: "paper2",
    unitId: "p2-u3",
    unitNumber: 3,
    unitName: "Programming Languages and Computer Graphics",
    examSource: "KSET 2023",
    question: "In C++, what is the purpose of the 'explicit' keyword before a single-parameter constructor?",
    options: [
      { id: "A", text: "To make the constructor accessible to child classes" },
      { id: "B", text: "To prevent the compiler from using the constructor for implicit type conversions" },
      { id: "C", text: "To force the constructor to execute in parallel" },
      { id: "D", text: "To make the constructor virtual" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Access: Handled by public/protected access specifiers.",
      "B": "Prevent implicit conversions: Correct! Forbids implicit copy-initialization conversions like `MyClass obj = 5;`, requiring explicit syntax `MyClass obj(5);`.",
      "C": "Parallel execution: Unrelated.",
      "D": "Virtual constructor: Constructors cannot be virtual in C++."
    },
    summaryExplanation: "The 'explicit' keyword prevents unintended implicit type conversions through single-argument constructors."
  },
  {
    id: "p2-u3-q24",
    paper: "paper2",
    unitId: "p2-u3",
    unitNumber: 3,
    unitName: "Programming Languages and Computer Graphics",
    examSource: "UGC NET June 2024",
    question: "Which visible surface detection algorithm is also known as the 'Painter's Algorithm'?",
    options: [
      { id: "A", text: "Depth-Sort Algorithm" },
      { id: "B", text: "Z-Buffer Algorithm" },
      { id: "C", text: "Scan-Line Method" },
      { id: "D", text: "Octree Method" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Depth-Sort Algorithm: Correct! Sorts polygons in order of decreasing depth (farthest first) and paints them onto the frame buffer from back to front, overpainting hidden parts.",
      "B": "Z-Buffer: Image-space pixel depth test.",
      "C": "Scan-line: Scanline polygon intersection.",
      "D": "Octree: Hierarchical space partitioning."
    },
    summaryExplanation: "The Painter's algorithm sorts polygons by depth, painting back-to-front like an artist on canvas."
  },
  {
    id: "p2-u3-q25",
    paper: "paper2",
    unitId: "p2-u3",
    unitNumber: 3,
    unitName: "Programming Languages and Computer Graphics",
    examSource: "MH-SET 2023",
    question: "In C, what is the effect of applying the 'const' qualifier to a pointer declaration: `const int *ptr;` ?",
    options: [
      { id: "A", text: "The pointer itself cannot point to any other memory location" },
      { id: "B", text: "The integer value being pointed to is read-only and cannot be modified through ptr" },
      { id: "C", text: "Both pointer and value are constant" },
      { id: "D", text: "Compilation syntax error" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Constant pointer: Declared as `int * const ptr;`.",
      "B": "Value pointed to is read-only: Correct! Pointer to a constant int; `*ptr = 20;` is disallowed, but `ptr = &other;` is valid.",
      "C": "Both constant: Declared as `const int * const ptr;`.",
      "D": "Syntax error: Standard C construct."
    },
    summaryExplanation: "const int *ptr declares a pointer to a constant integer whose value cannot be modified through ptr."
  },
  {
    id: "p2-u3-q26",
    paper: "paper2",
    unitId: "p2-u3",
    unitNumber: 3,
    unitName: "Programming Languages and Computer Graphics",
    examSource: "AP-SET 2024",
    question: "A Bézier curve with n control points is represented by a polynomial curve of degree:",
    options: [
      { id: "A", text: "n" },
      { id: "B", text: "n - 1" },
      { id: "C", text: "n + 1" },
      { id: "D", text: "2n" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "n: Overestimates degree.",
      "B": "n - 1: Correct! A Bézier curve constructed using n control points (P_0 to P_{n-1}) uses Bernstein basis polynomials of degree n - 1 (e.g., 4 control points produce a cubic degree 3 curve).",
      "C": "n + 1: Incorrect.",
      "D": "2n: Incorrect."
    },
    summaryExplanation: "Bézier curves defined by n control points possess polynomial degree n - 1."
  },
  {
    id: "p2-u3-q27",
    paper: "paper2",
    unitId: "p2-u3",
    unitNumber: 3,
    unitName: "Programming Languages and Computer Graphics",
    examSource: "UGC NET Dec 2023",
    question: "What is a 'Dangling Pointer' in systems programming?",
    options: [
      { id: "A", text: "A pointer initialized to NULL" },
      { id: "B", text: "A pointer pointing to a memory location that has already been deallocated or freed" },
      { id: "C", text: "A pointer stored in an array" },
      { id: "D", text: "A function pointer" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Null pointer.",
      "B": "Deallocated target: Correct! Arises when dynamic memory pointed to by a pointer is released with free() without setting pointer to NULL, risking undefined behavior upon dereference.",
      "C": "Pointer array: Array of pointers.",
      "D": "Function pointer: Points to executable code."
    },
    summaryExplanation: "A dangling pointer references memory that has been deallocated, causing undefined behavior."
  },
  {
    id: "p2-u3-q28",
    paper: "paper2",
    unitId: "p2-u3",
    unitNumber: 3,
    unitName: "Programming Languages and Computer Graphics",
    examSource: "WB-SET 2024",
    question: "In the Liang-Barsky parametric line clipping algorithm, line equations are represented in parametric form using parameter t in the interval:",
    options: [
      { id: "A", text: "[-1, 1]" },
      { id: "B", text: "[0, 1]" },
      { id: "C", text: "[0, ∞)" },
      { id: "D", text: "(-∞, ∞)" }
    ],
    correctOption: "B",
    optionExplanations: {
      "A": "Normalized interval [-1, 1] used in canonical view volumes.",
      "B": "[0, 1]: Correct! A line segment from (x1, y1) to (x2, y2) is parameterized as P(t) = P1 + t(P2 - P1) with parameter t ∈ [0, 1].",
      "C": "Ray parameter.",
      "D": "Infinite line."
    },
    summaryExplanation: "Liang-Barsky parameterizes finite line segments over t ∈ [0, 1]."
  },
  {
    id: "p2-u3-q29",
    paper: "paper2",
    unitId: "p2-u3",
    unitNumber: 3,
    unitName: "Programming Languages and Computer Graphics",
    examSource: "UGC NET June 2023",
    question: "What is the mechanism by which a C++ subclass overrides a base class method while ensuring the destructor of the derived class is correctly called when deleted via a base pointer?",
    options: [
      { id: "A", text: "Declaring the base class destructor as 'virtual'" },
      { id: "B", text: "Making the base class constructor private" },
      { id: "C", text: "Using static binding" },
      { id: "D", text: "Declaring the derived class final" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Virtual destructor: Correct! Virtual base destructors guarantee derived class destructors execute before base destructors when deleting through base pointers, preventing resource leaks.",
      "B": "Private constructor: Prevents subclassing.",
      "C": "Static binding: Causes only base destructor to execute, leaking derived resources.",
      "D": "Final class: Prevents inheritance."
    },
    summaryExplanation: "Base class destructors must be declared virtual to ensure proper polymorphic cleanup."
  },
  {
    id: "p2-u3-q30",
    paper: "paper2",
    unitId: "p2-u3",
    unitNumber: 3,
    unitName: "Programming Languages and Computer Graphics",
    examSource: "MH-SET 2024",
    question: "In computer graphics, the transformation that maps coordinates from Normalized Device Coordinates (NDC) to actual physical screen coordinates is called:",
    options: [
      { id: "A", text: "Viewing Transformation (Window-to-Viewport Mapping)" },
      { id: "B", text: "Modeling Transformation" },
      { id: "C", text: "Projection Transformation" },
      { id: "D", text: "Back-face culling" }
    ],
    correctOption: "A",
    optionExplanations: {
      "A": "Window-to-Viewport: Correct! Maps normalized clipping coordinates into physical device pixel viewport coordinates.",
      "B": "Modeling: Maps local object coordinates to world coordinates.",
      "C": "Projection: Converts 3D camera coordinates to 2D view plane.",
      "D": "Back-face culling: Discards non-visible triangles."
    },
    summaryExplanation: "Window-to-Viewport transformation maps normalized device coordinates onto physical screen pixel coordinates."
  }
];
