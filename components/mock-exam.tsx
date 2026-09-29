"use client";

import {
  ALL_QUESTIONS,
  CHAPTERS,
  getRandomQuestions,
  type Question,
} from "@/lib/exam-questions";
import { cn } from "@/lib/utils";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  Filter,
  RotateCcw,
  Trophy,
  XCircle,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

type ExamState = "config" | "running" | "results";

const CHAPTER_COLORS: Record<
  string,
  { bg: string; text: string; border: string }
> = {
  blue: {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    border: "border-blue-500/20",
  },
  violet: {
    bg: "bg-violet-500/10",
    text: "text-violet-400",
    border: "border-violet-500/20",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    border: "border-cyan-500/20",
  },
  green: {
    bg: "bg-green-500/10",
    text: "text-green-400",
    border: "border-green-500/20",
  },
};

// config screen
function ExamConfig({
  onStart,
}: {
  onStart: (questions: Question[], timeLimit: number) => void;
}) {
  const [selectedChapters, setSelectedChapters] = useState<string[]>(
    CHAPTERS.map((c) => c.id),
  );
  const [questionCount, setQuestionCount] = useState(20);
  const [timeLimit, setTimeLimit] = useState(30);
  const [showChapters, setShowChapters] = useState(false);

  const toggleChapter = (id: string) => {
    setSelectedChapters((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id],
    );
  };

  const availableCount = ALL_QUESTIONS.filter((q) =>
    selectedChapters.includes(q.chapter),
  ).length;

  const handleStart = () => {
    const questions = getRandomQuestions(questionCount, selectedChapters);
    onStart(questions, timeLimit * 60);
  };

  return (
    <div className="h-full overflow-y-auto px-6 py-8 max-w-2xl mx-auto">
      {/* header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <BrainCircuit size={20} className="text-violet-400" />
          <span className="text-violet-400 text-xs font-mono uppercase tracking-wider">
            Mock Exam
          </span>
        </div>
        <h1 className="text-2xl font-bold text-white">Configure Your Exam</h1>
        <p className="text-white/45 text-sm mt-1.5">
          Select chapters, question count, and time limit to customise your mock
          exam.
        </p>
      </div>

      {/* chapter selection */}
      <div className="glass border border-white/10 rounded-xl mb-4 overflow-hidden">
        <button
          onClick={() => setShowChapters((v) => !v)}
          className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/3 transition-colors"
        >
          <div className="flex items-center gap-2.5">
            <Filter size={15} className="text-white/50" />
            <span className="text-white/80 font-medium text-sm">
              Chapter Filter
            </span>
            <span className="text-xs px-2 py-0.5 rounded bg-violet-500/15 text-violet-400 border border-violet-500/20 font-mono">
              {selectedChapters.length}/{CHAPTERS.length}
            </span>
          </div>
          {showChapters ? (
            <ChevronUp size={15} className="text-white/40" />
          ) : (
            <ChevronDown size={15} className="text-white/40" />
          )}
        </button>

        {showChapters && (
          <div className="px-5 pb-4 grid grid-cols-2 gap-2 border-t border-white/8">
            <div className="col-span-2 flex gap-2 pt-3 pb-1">
              <button
                onClick={() => setSelectedChapters(CHAPTERS.map((c) => c.id))}
                className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
              >
                Select all
              </button>
              <span className="text-white/20">·</span>
              <button
                onClick={() => setSelectedChapters([])}
                className="text-xs text-white/40 hover:text-white/60 transition-colors"
              >
                Clear
              </button>
            </div>
            {CHAPTERS.map((ch) => {
              const c = CHAPTER_COLORS[ch.color] ?? CHAPTER_COLORS.blue;
              const checked = selectedChapters.includes(ch.id);
              const qCount = ALL_QUESTIONS.filter(
                (q) => q.chapter === ch.id,
              ).length;
              return (
                <button
                  key={ch.id}
                  onClick={() => toggleChapter(ch.id)}
                  className={cn(
                    "flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs border transition-all text-left",
                    checked
                      ? cn(c.bg, c.text, c.border)
                      : "border-white/8 text-white/35 hover:border-white/15 hover:text-white/55",
                  )}
                >
                  <div
                    className={cn(
                      "w-3.5 h-3.5 rounded border flex items-center justify-center flex-shrink-0",
                      checked ? cn(c.border, c.bg) : "border-white/25",
                    )}
                  >
                    {checked && <CheckCircle2 size={9} className={c.text} />}
                  </div>
                  <span className="truncate flex-1">{ch.title}</span>
                  <span className="opacity-50 font-mono flex-shrink-0">
                    {qCount}q
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* question count */}
      <div className="glass border border-white/10 rounded-xl px-5 py-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-white/70 text-sm font-medium">Questions</span>
          <span className="text-violet-400 font-bold font-mono">
            {questionCount}
          </span>
        </div>
        <input
          type="range"
          min={5}
          max={Math.min(100, availableCount)}
          step={5}
          value={questionCount}
          onChange={(e) => setQuestionCount(Number(e.target.value))}
          className="w-full accent-violet-500 cursor-pointer"
        />
        <div className="flex justify-between text-xs text-white/25 mt-1.5 font-mono">
          <span>5</span>
          <span className="text-white/40">{availableCount} available</span>
          <span>{Math.min(100, availableCount)}</span>
        </div>
      </div>

      {/* time limit */}
      <div className="glass border border-white/10 rounded-xl px-5 py-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-white/50" />
            <span className="text-white/70 text-sm font-medium">
              Time Limit
            </span>
          </div>
          <span className="text-cyan-400 font-bold font-mono">
            {timeLimit === 0 ? "Unlimited" : `${timeLimit} min`}
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={120}
          step={5}
          value={timeLimit}
          onChange={(e) => setTimeLimit(Number(e.target.value))}
          className="w-full accent-cyan-500 cursor-pointer"
        />
        <div className="flex justify-between text-xs text-white/25 mt-1.5 font-mono">
          <span>Off</span>
          <span>120 min</span>
        </div>
      </div>

      {/* summary start */}
      <div className="glass-strong border border-violet-500/20 rounded-xl px-5 py-4 flex items-center justify-between">
        <div className="text-sm text-white/50">
          <span className="text-white/80 font-semibold">
            {Math.min(questionCount, availableCount)}
          </span>{" "}
          questions ·{" "}
          <span className="text-white/80 font-semibold">
            {selectedChapters.length}
          </span>{" "}
          chapters ·{" "}
          <span className="text-white/80 font-semibold">
            {timeLimit === 0 ? "No limit" : `${timeLimit} min`}
          </span>
        </div>
        <button
          disabled={selectedChapters.length === 0 || availableCount === 0}
          onClick={handleStart}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-500/20 border border-violet-500/40 text-violet-300 font-semibold text-sm hover:bg-violet-500/30 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <BrainCircuit size={15} />
          Start Exam
        </button>
      </div>
    </div>
  );
}

// running exam screen
function ExamRunner({
  questions,
  timeLimit,
  onFinish,
}: {
  questions: Question[];
  timeLimit: number;
  onFinish: (answers: (number | null)[]) => void;
}) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null),
  );
  const [flagged, setFlagged] = useState<Set<number>>(new Set());
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [showOverview, setShowOverview] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (timeLimit === 0) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current!);
          onFinish(answers);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current!);
  }, []);

  const q = questions[current];

  const select = (optIdx: number) => {
    const next = [...answers];
    next[current] = optIdx;
    setAnswers(next);
  };

  const toggleFlag = () => {
    setFlagged((prev) => {
      const next = new Set(prev);
      if (next.has(current)) next.delete(current);
      else next.add(current);
      return next;
    });
  };

  const answered = answers.filter((a) => a !== null).length;
  const pct = Math.round((answered / questions.length) * 100);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60)
      .toString()
      .padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const diffColor: Record<string, string> = {
    easy: "text-green-400 bg-green-400/10 border-green-400/20",
    medium: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
    hard: "text-red-400 bg-red-400/10 border-red-400/20",
  };

  return (
    <div className="h-full flex flex-col overflow-hidden">
      {/* top bar */}
      <div className="flex-shrink-0 flex items-center gap-4 px-5 py-3 border-b border-white/8">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-white/40">Q</span>
          <span className="font-bold text-white">{current + 1}</span>
          <span className="text-white/25">/</span>
          <span className="text-white/50">{questions.length}</span>
        </div>

        <div className="flex-1 h-1.5 bg-white/8 rounded-full overflow-hidden">
          <div
            className="h-full bg-violet-500/70 rounded-full transition-all duration-300"
            style={{ width: `${pct}%` }}
          />
        </div>

        <div className="text-xs text-white/40 font-mono">
          {answered}/{questions.length} answered
        </div>

        {timeLimit > 0 && (
          <div
            className={cn(
              "flex items-center gap-1.5 font-mono text-sm font-bold",
              timeLeft < 300 ? "text-red-400 animate-pulse" : "text-cyan-400",
            )}
          >
            <Clock size={13} />
            {formatTime(timeLeft)}
          </div>
        )}

        <button
          onClick={() => setShowOverview((v) => !v)}
          className="text-xs px-2.5 py-1 rounded border border-white/10 text-white/40 hover:text-white/60 hover:border-white/20 transition-all"
        >
          Overview
        </button>
      </div>

      <div className="flex-1 overflow-hidden flex">
        {/* question area */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {/* question meta */}
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span
              className={cn(
                "text-[10px] border rounded px-1.5 py-0.5 font-mono",
                diffColor[q.difficulty] ?? diffColor.medium,
              )}
            >
              {q.difficulty}
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded border border-white/10 text-white/35 font-mono">
              {CHAPTERS.find((c) => c.id === q.chapter)?.title ?? q.chapter}
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded border border-white/8 text-white/25">
              {q.topic}
            </span>
            <button
              onClick={toggleFlag}
              className={cn(
                "ml-auto text-xs px-2 py-0.5 rounded border transition-all",
                flagged.has(current)
                  ? "border-yellow-500/40 text-yellow-400 bg-yellow-500/10"
                  : "border-white/10 text-white/30 hover:border-white/20",
              )}
            >
              {flagged.has(current) ? "Flagged" : "Flag"}
            </button>
          </div>

          {/* question text */}
          <p className="text-white/90 text-base leading-relaxed mb-5 font-medium">
            {q.question}
          </p>

          {/* code snippet */}
          {q.code && (
            <div className="code-block text-[0.78rem] mb-5 rounded-xl border border-blue-500/15">
              <pre className="font-mono leading-relaxed text-white/75">
                {q.code}
              </pre>
            </div>
          )}

          {/* options */}
          <div className="space-y-2.5">
            {q.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => select(i)}
                className={cn(
                  "w-full text-left px-4 py-3 rounded-xl border transition-all flex items-start gap-3",
                  answers[current] === i
                    ? "border-violet-500/40 bg-violet-500/12 text-white"
                    : "border-white/8 text-white/60 hover:border-white/20 hover:text-white/85 hover:bg-white/3",
                )}
              >
                <span
                  className={cn(
                    "font-mono text-xs mt-0.5 flex-shrink-0 w-5 h-5 rounded border flex items-center justify-center",
                    answers[current] === i
                      ? "border-violet-500/60 text-violet-400 bg-violet-500/15"
                      : "border-white/20 text-white/30",
                  )}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="text-sm leading-relaxed">{opt}</span>
              </button>
            ))}
          </div>
        </div>

        {/* overview panel */}
        {showOverview && (
          <div className="w-52 flex-shrink-0 border-l border-white/8 py-4 px-3 overflow-y-auto">
            <p className="text-xs text-white/35 uppercase tracking-wider font-semibold mb-3 px-1">
              Question Map
            </p>
            <div className="grid grid-cols-5 gap-1.5">
              {questions.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={cn(
                    "w-full aspect-square rounded text-[10px] font-mono border transition-all flex items-center justify-center",
                    idx === current
                      ? "border-violet-500/60 bg-violet-500/20 text-violet-300"
                      : answers[idx] !== null && flagged.has(idx)
                        ? "border-yellow-500/40 bg-yellow-500/10 text-yellow-400"
                        : answers[idx] !== null
                          ? "border-green-500/30 bg-green-500/10 text-green-400"
                          : flagged.has(idx)
                            ? "border-yellow-500/20 text-yellow-500/60"
                            : "border-white/10 text-white/30 hover:border-white/20",
                  )}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
            <div className="mt-4 space-y-1.5 px-1">
              {[
                {
                  color: "bg-green-500/20 border-green-500/30",
                  label: "Answered",
                },
                {
                  color: "bg-yellow-500/10 border-yellow-500/30",
                  label: "Flagged",
                },
                { color: "bg-white/5 border-white/10", label: "Unanswered" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <div className={cn("w-3 h-3 rounded border", item.color)} />
                  <span className="text-[10px] text-white/30">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* bottom nav */}
      <div className="flex-shrink-0 flex items-center gap-3 px-5 py-3 border-t border-white/8">
        <button
          onClick={() => setCurrent((c) => Math.max(0, c - 1))}
          disabled={current === 0}
          className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-white/10 text-white/40 text-sm hover:text-white/70 hover:border-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <ArrowLeft size={14} /> Prev
        </button>

        <div className="flex-1" />

        {current < questions.length - 1 ? (
          <button
            onClick={() =>
              setCurrent((c) => Math.min(questions.length - 1, c + 1))
            }
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-white/10 text-white/40 text-sm hover:text-white/70 hover:border-white/20 transition-all"
          >
            Next <ArrowRight size={14} />
          </button>
        ) : null}

        <button
          onClick={() => onFinish(answers)}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-violet-500/40 bg-violet-500/15 text-violet-300 text-sm font-semibold hover:bg-violet-500/25 transition-all"
        >
          Submit Exam
        </button>
      </div>
    </div>
  );
}

// results screen
function ExamResults({
  questions,
  answers,
  onRetake,
  onNavigate,
}: {
  questions: Question[];
  answers: (number | null)[];
  onRetake: () => void;
  onNavigate: (section: string) => void;
}) {
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState<"all" | "wrong" | "correct">("all");

  const correct = answers.filter((a, i) => a === questions[i].answer).length;
  const wrong = answers.filter(
    (a, i) => a !== null && a !== questions[i].answer,
  ).length;
  const skipped = answers.filter((a) => a === null).length;
  const pct = Math.round((correct / questions.length) * 100);

  const grade =
    pct >= 90
      ? { label: "Excellent", color: "text-green-400" }
      : pct >= 75
        ? { label: "Good", color: "text-blue-400" }
        : pct >= 60
          ? { label: "Pass", color: "text-yellow-400" }
          : { label: "Fail", color: "text-red-400" };

  const byChapter = CHAPTERS.map((ch) => {
    const chQ = questions.filter((q, i) => q.chapter === ch.id);
    const chA = chQ.map((q) => {
      const idx = questions.indexOf(q);
      return answers[idx];
    });
    const chCorrect = chQ.filter((q, i) => chA[i] === q.answer).length;
    return { ...ch, total: chQ.length, correct: chCorrect };
  }).filter((c) => c.total > 0);

  const filteredQ = questions.filter((q, i) => {
    if (filter === "correct") return answers[i] === q.answer;
    if (filter === "wrong") return answers[i] !== q.answer;
    return true;
  });

  return (
    <div className="h-full overflow-y-auto px-6 py-8">
      {/* score hero */}
      <div className="glass-strong border border-violet-500/20 rounded-2xl p-6 mb-6 text-center">
        <Trophy size={32} className={cn("mx-auto mb-3", grade.color)} />
        <div className={cn("text-5xl font-bold mb-1", grade.color)}>{pct}%</div>
        <div className={cn("text-lg font-semibold mb-4", grade.color)}>
          {grade.label}
        </div>
        <div className="flex items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-1.5 text-green-400">
            <CheckCircle2 size={15} />
            <span>
              <strong>{correct}</strong> correct
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-red-400">
            <XCircle size={15} />
            <span>
              <strong>{wrong}</strong> wrong
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-white/40">
            <AlertCircle size={15} />
            <span>
              <strong>{skipped}</strong> skipped
            </span>
          </div>
        </div>
      </div>

      {/* chapter breakdown */}
      <div className="mb-6">
        <h2 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">
          Chapter Breakdown
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
          {byChapter.map((ch) => {
            const chPct =
              ch.total > 0 ? Math.round((ch.correct / ch.total) * 100) : 0;
            const c = CHAPTER_COLORS[ch.color] ?? CHAPTER_COLORS.blue;
            return (
              <div
                key={ch.id}
                className={cn("glass rounded-xl p-3 border", c.border)}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={cn("text-xs font-mono", c.text)}>
                    {ch.id.toUpperCase()}
                  </span>
                  <span
                    className={cn(
                      "text-xs font-bold",
                      chPct >= 70 ? "text-green-400" : "text-red-400",
                    )}
                  >
                    {chPct}%
                  </span>
                </div>
                <p className="text-xs text-white/55 truncate">{ch.title}</p>
                <div className="mt-2 h-1 bg-white/8 rounded-full overflow-hidden">
                  <div
                    className={cn(
                      "h-full rounded-full",
                      chPct >= 70 ? "bg-green-500/60" : "bg-red-500/60",
                    )}
                    style={{ width: `${chPct}%` }}
                  />
                </div>
                <p className="text-[10px] text-white/25 mt-1 font-mono">
                  {ch.correct}/{ch.total}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-3">
          <h2 className="text-sm font-semibold text-white/60 uppercase tracking-wider">
            Review
          </h2>
          <div className="flex gap-1 ml-auto">
            {(["all", "correct", "wrong"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "text-xs px-2.5 py-1 rounded border transition-all",
                  filter === f
                    ? "border-violet-500/40 bg-violet-500/15 text-violet-300"
                    : "border-white/10 text-white/35 hover:border-white/20",
                )}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {(showAll ? filteredQ : filteredQ.slice(0, 10)).map((q) => {
            const idx = questions.indexOf(q);
            const userAns = answers[idx];
            const isCorrect = userAns === q.answer;
            const isSkipped = userAns === null;
            return (
              <div
                key={q.id}
                className={cn(
                  "glass border rounded-xl p-4",
                  isCorrect
                    ? "border-green-500/20"
                    : isSkipped
                      ? "border-white/8"
                      : "border-red-500/20",
                )}
              >
                <div className="flex items-start gap-3">
                  {isCorrect ? (
                    <CheckCircle2
                      size={15}
                      className="text-green-400 mt-0.5 flex-shrink-0"
                    />
                  ) : isSkipped ? (
                    <AlertCircle
                      size={15}
                      className="text-white/30 mt-0.5 flex-shrink-0"
                    />
                  ) : (
                    <XCircle
                      size={15}
                      className="text-red-400 mt-0.5 flex-shrink-0"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-white/80 text-sm leading-relaxed mb-2">
                      {q.question}
                    </p>
                    {!isCorrect && userAns !== null && (
                      <p className="text-xs text-red-400 mb-1">
                        Your answer:{" "}
                        <span className="font-medium">
                          {q.options[userAns]}
                        </span>
                      </p>
                    )}
                    <p className="text-xs text-green-400 mb-2">
                      Correct:{" "}
                      <span className="font-medium">{q.options[q.answer]}</span>
                    </p>
                    <p className="text-xs text-white/40 leading-relaxed">
                      {q.explanation}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          {filteredQ.length > 10 && !showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="w-full py-3 rounded-xl border border-white/10 text-white/40 text-sm hover:border-white/20 hover:text-white/60 transition-all"
            >
              Show all {filteredQ.length} questions
            </button>
          )}
        </div>
      </div>

      <div className="flex gap-3 mt-6">
        <button
          onClick={onRetake}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium hover:bg-violet-500/20 transition-all"
        >
          <RotateCcw size={14} />
          New Exam
        </button>
        <button
          onClick={() => onNavigate("copilot")}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-medium hover:bg-cyan-500/20 transition-all"
        >
          Review with AI Copilot
        </button>
      </div>
    </div>
  );
}

export default function MockExam({
  onNavigate,
}: {
  onNavigate: (section: string) => void;
}) {
  const [state, setState] = useState<ExamState>("config");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [timeLimit, setTimeLimit] = useState(0);

  const handleStart = (qs: Question[], tl: number) => {
    setQuestions(qs);
    setAnswers(Array(qs.length).fill(null));
    setTimeLimit(tl);
    setState("running");
  };

  const handleFinish = (ans: (number | null)[]) => {
    setAnswers(ans);
    setState("results");
  };

  const handleRetake = () => {
    setState("config");
    setQuestions([]);
    setAnswers([]);
  };

  if (state === "running") {
    return (
      <ExamRunner
        questions={questions}
        timeLimit={timeLimit}
        onFinish={handleFinish}
      />
    );
  }

  if (state === "results") {
    return (
      <ExamResults
        questions={questions}
        answers={answers}
        onRetake={handleRetake}
        onNavigate={onNavigate}
      />
    );
  }

  return <ExamConfig onStart={handleStart} />;
}
