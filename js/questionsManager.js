/**
 * QUESTIONS MANAGER - Notes World
 * Manages unit-wise PYQs from UGC NET and All State SET exams.
 * Tracks user answers, correctness, score stats, and local persistence.
 */

import { paper1Questions } from "./data/questions/paper1/index.js";
import { paper2Questions } from "./data/questions/paper2/index.js";

const ANSWERS_STORAGE_KEY = "notes_world_pyq_answers_v1";
const DISMISSED_STORAGE_KEY = "notes_world_pyq_dismissed_v1";

export class QuestionsManager {
  constructor() {
    this.questions = {
      paper1: paper1Questions,
      paper2: paper2Questions
    };
    this.userAnswers = this.loadAnswers();
    this.dismissedQuestions = this.loadDismissed();
    this.listeners = [];
  }

  loadAnswers() {
    try {
      const saved = localStorage.getItem(ANSWERS_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error("Failed to load user answers from storage:", e);
    }
    return {};
  }

  loadDismissed() {
    try {
      const saved = localStorage.getItem(DISMISSED_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error("Failed to load dismissed questions:", e);
    }
    return {};
  }

  saveAnswers() {
    try {
      localStorage.setItem(ANSWERS_STORAGE_KEY, JSON.stringify(this.userAnswers));
      this.notifyListeners();
    } catch (e) {
      console.error("Failed to save user answers:", e);
    }
  }

  saveDismissed() {
    try {
      localStorage.setItem(DISMISSED_STORAGE_KEY, JSON.stringify(this.dismissedQuestions));
      this.notifyListeners();
    } catch (e) {
      console.error("Failed to save dismissed questions:", e);
    }
  }

  subscribe(callback) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(cb => cb !== callback);
    };
  }

  notifyListeners() {
    this.listeners.forEach(cb => cb());
  }

  isDismissed(questionId) {
    return !!this.dismissedQuestions[questionId];
  }

  sendToBottom(questionId) {
    this.dismissedQuestions[questionId] = new Date().toISOString();
    this.saveDismissed();
  }

  getQuestions(paperId, unitId = "all", searchQuery = "") {
    let list = this.questions[paperId] || [];

    if (unitId && unitId !== "all") {
      list = list.filter(q => q.unitId === unitId);
    }

    if (searchQuery && searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      list = list.filter(q => {
        return (
          q.question.toLowerCase().includes(query) ||
          q.examSource.toLowerCase().includes(query) ||
          q.unitName.toLowerCase().includes(query) ||
          q.options.some(opt => opt.text.toLowerCase().includes(query))
        );
      });
    }

    // Sort:
    // 1. Unsolved questions or questions not yet dismissed stay on top.
    // 2. Dismissed questions (after user clicks "Next Question") sink to the bottom.
    list = [...list].sort((a, b) => {
      const aDismissed = !!this.dismissedQuestions[a.id];
      const bDismissed = !!this.dismissedQuestions[b.id];

      if (!aDismissed && bDismissed) return -1; // a stays on top
      if (aDismissed && !bDismissed) return 1;  // b stays on top

      // If both dismissed to bottom, sort by dismissed timestamp ascending
      if (aDismissed && bDismissed) {
        const timeA = new Date(this.dismissedQuestions[a.id] || 0).getTime();
        const timeB = new Date(this.dismissedQuestions[b.id] || 0).getTime();
        return timeA - timeB;
      }

      return 0;
    });

    return list;
  }

  getUnitQuestionCount(paperId, unitId) {
    const list = this.questions[paperId] || [];
    if (!unitId || unitId === "all") return list.length;
    return list.filter(q => q.unitId === unitId).length;
  }

  getQuestionById(questionId) {
    const all = [...this.questions.paper1, ...this.questions.paper2];
    return all.find(q => q.id === questionId);
  }

  getAnswer(questionId) {
    return this.userAnswers[questionId] || null;
  }

  submitAnswer(questionId, selectedOption) {
    const question = this.getQuestionById(questionId);
    if (!question) return null;

    const isCorrect = question.correctOption === selectedOption;
    this.userAnswers[questionId] = {
      selectedOption,
      isCorrect,
      answeredAt: new Date().toISOString()
    };

    this.saveAnswers();
    return {
      isCorrect,
      correctOption: question.correctOption,
      optionExplanations: question.optionExplanations,
      summaryExplanation: question.summaryExplanation
    };
  }

  resetQuestion(questionId) {
    let changed = false;
    if (this.userAnswers[questionId]) {
      delete this.userAnswers[questionId];
      changed = true;
    }
    if (this.dismissedQuestions[questionId]) {
      delete this.dismissedQuestions[questionId];
      changed = true;
    }
    if (changed) {
      try {
        localStorage.setItem(ANSWERS_STORAGE_KEY, JSON.stringify(this.userAnswers));
        localStorage.setItem(DISMISSED_STORAGE_KEY, JSON.stringify(this.dismissedQuestions));
        this.notifyListeners();
      } catch (e) {
        console.error("Failed to reset question:", e);
      }
    }
  }

  resetAll(paperId) {
    const paperQuestions = this.questions[paperId] || [];
    paperQuestions.forEach(q => {
      delete this.userAnswers[q.id];
      delete this.dismissedQuestions[q.id];
    });
    try {
      localStorage.setItem(ANSWERS_STORAGE_KEY, JSON.stringify(this.userAnswers));
      localStorage.setItem(DISMISSED_STORAGE_KEY, JSON.stringify(this.dismissedQuestions));
      this.notifyListeners();
    } catch (e) {
      console.error("Failed to reset all:", e);
    }
  }

  getStats(paperId, unitId = "all") {
    const list = this.getQuestions(paperId, unitId);
    const total = list.length;
    let attempted = 0;
    let correct = 0;

    list.forEach(q => {
      const ans = this.userAnswers[q.id];
      if (ans) {
        attempted++;
        if (ans.isCorrect) correct++;
      }
    });

    const wrong = attempted - correct;
    const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;

    return { total, attempted, correct, wrong, accuracy };
  }
}

export const questionsManager = new QuestionsManager();
