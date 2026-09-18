/**
 * PAPER 2 QUESTIONS AGGREGATOR - Notes World
 * Aggregates 300 Authentic & Expected PYQs across all 10 Units of Computer Science & Applications (Paper 2).
 * Each unit contains exactly 30 questions with 4-option explanations and citations.
 */

import { p2Unit1Questions } from "./unit1.js";
import { p2Unit2Questions } from "./unit2.js";
import { p2Unit3Questions } from "./unit3.js";
import { p2Unit4Questions } from "./unit4.js";
import { p2Unit5Questions } from "./unit5.js";
import { p2Unit6Questions } from "./unit6.js";
import { p2Unit7Questions } from "./unit7.js";
import { p2Unit8Questions } from "./unit8.js";
import { p2Unit9Questions } from "./unit9.js";
import { p2Unit10Questions } from "./unit10.js";

export const paper2Questions = [
  ...p2Unit1Questions,
  ...p2Unit2Questions,
  ...p2Unit3Questions,
  ...p2Unit4Questions,
  ...p2Unit5Questions,
  ...p2Unit6Questions,
  ...p2Unit7Questions,
  ...p2Unit8Questions,
  ...p2Unit9Questions,
  ...p2Unit10Questions
];
