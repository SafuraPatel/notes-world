/**
 * PAPER 1 QUESTIONS AGGREGATOR - Notes World
 * Aggregates 300 Authentic & Expected PYQs across all 10 Units of General Paper 1.
 * Each unit contains exactly 30 questions with 4-option explanations and citations.
 */

import { p1Unit1Questions } from "./unit1.js";
import { p1Unit2Questions } from "./unit2.js";
import { p1Unit3Questions } from "./unit3.js";
import { p1Unit4Questions } from "./unit4.js";
import { p1Unit5Questions } from "./unit5.js";
import { p1Unit6Questions } from "./unit6.js";
import { p1Unit7Questions } from "./unit7.js";
import { p1Unit8Questions } from "./unit8.js";
import { p1Unit9Questions } from "./unit9.js";
import { p1Unit10Questions } from "./unit10.js";

export const paper1Questions = [
  ...p1Unit1Questions,
  ...p1Unit2Questions,
  ...p1Unit3Questions,
  ...p1Unit4Questions,
  ...p1Unit5Questions,
  ...p1Unit6Questions,
  ...p1Unit7Questions,
  ...p1Unit8Questions,
  ...p1Unit9Questions,
  ...p1Unit10Questions
];
