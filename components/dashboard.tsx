"use client";

import { ALL_QUESTIONS, CHAPTERS } from "@/lib/exam-questions";
import { cn } from "@/lib/utils";
import {
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  Target,
  Zap,
} from "lucide-react";

const COLOR_GLOW: Record<string, string> = {
  blue: "text-blue-400",
  violet: "text-violet-400",
  cyan: "text-cyan-400",
  green: "text-green-400",
};
const COLOR_BADGE: Record<string, string> = {
  blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  violet: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  green: "bg-green-500/10 text-green-400 border-green-500/20",
};

const COLOR_BORDER_HOVER: Record<string, string> = {
  blue: "border-blue-500/10 hover:border-blue-500/30",
  violet: "border-violet-500/10 hover:border-violet-500/30",
  cyan: "border-cyan-500/10 hover:border-cyan-500/30",
  green: "border-green-500/10 hover:border-green-500/30",
};

interface DashboardProps {
  onNavigate: (section: string) => void;
}

export default function Dashboard({ onNavigate }: DashboardProps) {
  const totalQ = ALL_QUESTIONS.length;
  const qByChapter = CHAPTERS.map((ch) => ({
    ...ch,
    count: ALL_QUESTIONS.filter((q) => q.chapter === ch.id).length,
  }));

  const stats = [
    {
      label: "Total Questions",
      value: totalQ,
      icon: <Target size={18} />,
      color: "blue",
    },
    {
      label: "Chapters",
      value: CHAPTERS.length,
      icon: <Zap size={18} />,
      color: "violet",
    },
    {
      label: "Mock Exam",
      value: "100 Q",
      icon: <BrainCircuit size={18} />,
      color: "cyan",
    },
  ];

  return (
    <div className="h-full overflow-y-auto px-6 py-8">
      {/* header */}
      <div className="mb-8">
        <p className="text-xs text-blue-400/70 font-mono tracking-widest uppercase mb-2">
          AOOP EXAM PREP
        </p>
        <h1 className="text-3xl font-bold text-white text-balance leading-tight">
          Advanced OOP <span className="neon-text-blue">Study System</span>
        </h1>
        <p className="mt-2 text-white/50 text-sm leading-relaxed max-w-2xl">
          Comprehensive exam preparation for Advanced Object-Oriented
          Programming in Java. Master exception handling, I/O streams, JDBC, GUI
          programming, threads, networking, and more.
        </p>
      </div>

      {/* stats row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={cn(
              "glass rounded-xl p-4 border flex items-center gap-3",
              stat.color === "blue" && "border-blue-500/15",
              stat.color === "violet" && "border-violet-500/15",
              stat.color === "cyan" && "border-cyan-500/15",
            )}
          >
            <div className={cn("opacity-70", COLOR_GLOW[stat.color])}>
              {stat.icon}
            </div>
            <div>
              <p className={cn("text-xl font-bold", COLOR_GLOW[stat.color])}>
                {stat.value}
              </p>
              <p className="text-[11px] text-white/40">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* quick actions */}
      <div className="grid grid-cols-1 gap-4 mb-8">
        <button
          onClick={() => onNavigate("exam")}
          className="glass-strong border border-blue-500/20 rounded-xl p-5 text-left hover:border-blue-500/40 transition-all group w-full"
        >
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <BrainCircuit size={20} className="text-blue-400" />
                <span className="text-blue-400 text-xs font-mono uppercase tracking-wider">
                  Quick Launch
                </span>
              </div>
              <h3 className="text-white font-semibold text-lg">Mock Exam</h3>
              <p className="text-white/40 text-sm mt-1">
                {totalQ}+ questions · all chapters · randomized
              </p>
            </div>
            <ChevronRight
              size={18}
              className="text-blue-400/50 group-hover:text-blue-400 transition-colors mt-1"
            />
          </div>
        </button>
      </div>

      {/* chapter grid */}
      <div className="mb-4 flex items-center gap-2">
        <h2 className="text-white/80 font-semibold text-sm uppercase tracking-wider">
          Chapter Index
        </h2>
        <div className="flex-1 h-px bg-white/10" />
        <span className="text-white/30 text-xs">
          {CHAPTERS.length} chapters
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        {qByChapter.map((ch) => (
          <button
            key={ch.id}
            onClick={() => onNavigate(`chapter-${ch.id}`)}
            className={cn(
              "glass border rounded-xl p-4 text-left hover:bg-white/5 transition-all group",
              COLOR_BORDER_HOVER[ch.color],
            )}
          >
            <div className="flex items-center justify-between mb-2">
              <span
                className={cn(
                  "text-xs font-mono uppercase tracking-wider border rounded px-1.5 py-0.5",
                  COLOR_BADGE[ch.color],
                )}
              >
                {ch.id.toUpperCase()}
              </span>
              <span className={cn("text-xs opacity-60", COLOR_GLOW[ch.color])}>
                {ch.count}q
              </span>
            </div>
            <h3 className="text-white/90 font-medium text-sm group-hover:text-white transition-colors">
              {ch.title}
            </h3>
            <p className="text-white/35 text-xs mt-0.5 truncate">
              {ch.subtitle}
            </p>
          </button>
        ))}
      </div>

      <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-white/20 text-xs">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={12} />
          <span>
            Based on Liang — Introduction to Java Programming, 9th Ed. + AOOP
            course materials
          </span>
        </div>
        <span className="text-white/25 font-mono">Made by Yishak</span>
      </div>
    </div>
  );
}
