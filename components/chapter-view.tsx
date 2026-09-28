"use client";

import { ALL_QUESTIONS, CHAPTERS } from "@/lib/exam-questions";
import { chapters } from "@/lib/chapters";
import { cn } from "@/lib/utils";
import { BookOpen, ChevronRight, Code2, Lightbulb, Zap } from "lucide-react";
import { useState } from "react";

// syntax highlighted code block
function CodeBlock({ code, title }: { code: string; title?: string }) {
  const highlighted = code
    .replace(
      /\b(public|private|protected|class|interface|extends|implements|new|return|void|static|final|abstract|import|package|try|catch|finally|throw|throws|if|else|while|for|do|switch|case|break|continue|instanceof|this|super|null|true|false|enum|default)\b/g,
      '<span class="kw">$1</span>',
    )
    .replace(
      /\b(String|Integer|Double|Boolean|List|Map|Set|ArrayList|HashMap|HashSet|Connection|Statement|PreparedStatement|ResultSet|Exception|IOException|SQLException|Thread|Runnable|Override|System|Math|Object|Class|DataInputStream|DataOutputStream|FileInputStream|FileOutputStream|FileReader|FileWriter|BufferedReader|BufferedWriter|BufferedInputStream|BufferedOutputStream|SequenceInputStream|RandomAccessFile|DriverManager|DatabaseMetaData|ResultSetMetaData)\b/g,
      '<span class="cls">$1</span>',
    )
    .replace(/"([^"\\]*(\\.[^"\\]*)*)"/g, '<span class="str">"$1"</span>')
    .replace(/(\/\/[^\n]*)/g, '<span class="cmt">$1</span>')
    .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="cmt">$1</span>')
    .replace(/\b(\d+\.?\d*[LlFfDd]?)\b/g, '<span class="num">$1</span>')
    .replace(/(@\w+)/g, '<span class="ann">$1</span>');

  return (
    <div className="rounded-xl overflow-hidden border border-blue-500/15">
      {title && (
        <div className="flex items-center gap-2 px-4 py-2 bg-white/3 border-b border-white/10">
          <Code2 size={13} className="text-blue-400" />
          <span className="text-xs text-white/50 font-mono">{title}</span>
          <div className="ml-auto flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
          </div>
        </div>
      )}
      <div className="code-block overflow-x-auto">
        <pre
          className="font-mono text-[0.78rem] leading-relaxed text-white/85"
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
      </div>
    </div>
  );
}

// mini practice question card
function MiniQuestion({ question, color }: { question: any; color: string }) {
  const [revealed, setRevealed] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  const colorGlow: Record<string, string> = {
    blue: "text-blue-400",
    violet: "text-violet-400",
    cyan: "text-cyan-400",
    green: "text-green-400",
  };
  const diffColor: Record<string, string> = {
    easy: "text-green-400 bg-green-400/10 border-green-400/20",
    medium: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
    hard: "text-red-400 bg-red-400/10 border-red-400/20",
  };

  return (
    <div className="glass border border-white/8 rounded-xl p-4">
      <div className="flex items-start justify-between gap-3 mb-3">
        <p className="text-white/80 text-sm leading-relaxed">
          {question.question}
        </p>
        <span
          className={cn(
            "flex-shrink-0 text-[10px] border rounded px-1.5 py-0.5 font-mono",
            diffColor[question.difficulty] ?? diffColor.medium,
          )}
        >
          {question.difficulty}
        </span>
      </div>
      {question.code && (
        <div className="code-block text-[0.72rem] mb-3 leading-relaxed">
          <pre className="text-white/70 font-mono">{question.code}</pre>
        </div>
      )}
      <div className="grid grid-cols-2 gap-1.5 mb-3">
        {question.options.map((opt: string, i: number) => (
          <button
            key={i}
            onClick={() => {
              setSelected(i);
              setRevealed(true);
            }}
            disabled={revealed}
            className={cn(
              "text-left px-3 py-2 rounded-lg text-xs transition-all border",
              !revealed
                ? "border-white/10 text-white/55 hover:border-white/20 hover:text-white/75"
                : i === question.answer
                  ? "border-green-500/40 bg-green-500/10 text-green-300"
                  : i === selected && i !== question.answer
                    ? "border-red-500/40 bg-red-500/10 text-red-300"
                    : "border-white/5 text-white/25 opacity-50",
            )}
          >
            <span className="font-mono opacity-50 mr-1">
              {String.fromCharCode(65 + i)}.
            </span>
            {opt}
          </button>
        ))}
      </div>
      {revealed && (
        <div className="text-xs text-white/45 bg-white/3 rounded-lg p-3 leading-relaxed border border-white/5">
          <span className={cn("font-semibold", colorGlow[color])}>
            Explanation:{" "}
          </span>
          {question.explanation}
        </div>
      )}
    </div>
  );
}

// main chapter view
interface ChapterViewProps {
  chapterId: string;
  onNavigate: (section: string) => void;
}

export default function ChapterView({
  chapterId,
  onNavigate,
}: ChapterViewProps) {
  const chapter = CHAPTERS.find((c) => c.id === chapterId);
  const richChapter = chapters.find((c) => c.id === chapterId);
  const questions = ALL_QUESTIONS.filter((q) => q.chapter === chapterId);
  const [activeTopicIdx, setActiveTopicIdx] = useState(0);

  const COLOR_MAP: Record<string, string> = {
    ch1: "blue",
    ch2: "cyan",
    ch3: "violet",
    ch4: "green",
    ch5: "blue",
    ch6: "cyan",
    ch7: "blue",
    jdbc: "violet",
    javafx: "cyan",
    network: "green",
    applets: "blue",
    servlets: "violet",
  };
  const color =
    chapter?.color?.replace("neon-text-", "") ?? COLOR_MAP[chapterId] ?? "blue";

  const colorGlow: Record<string, string> = {
    blue: "text-blue-400",
    violet: "text-violet-400",
    cyan: "text-cyan-400",
    green: "text-green-400",
  };
  const colorBorder: Record<string, string> = {
    blue: "border-blue-500/20",
    violet: "border-violet-500/20",
    cyan: "border-cyan-500/20",
    green: "border-green-500/20",
  };
  const colorBg: Record<string, string> = {
    blue: "bg-blue-500/10",
    violet: "bg-violet-500/10",
    cyan: "bg-cyan-500/10",
    green: "bg-green-500/10",
  };

  const topics = richChapter?.topics ?? [];
  const activeTopic = topics[activeTopicIdx];

  const title = chapter?.title ?? richChapter?.title ?? chapterId;
  const subtitle = chapter?.subtitle ?? richChapter?.subtitle ?? "";

  if (!chapter && !richChapter) {
    return (
      <div className="h-full flex items-center justify-center text-white/30 text-sm">
        Chapter not found.
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <div className="px-6 pt-6 pb-4 border-b border-white/8 flex-shrink-0">
        <nav className="flex items-center gap-2 text-white/30 text-xs mb-3">
          <button
            onClick={() => onNavigate("dashboard")}
            className="hover:text-white/60 transition-colors"
          >
            Home
          </button>
          <ChevronRight size={12} />
          <span className={colorGlow[color]}>{title}</span>
        </nav>

        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <p className="text-white/40 text-sm mt-1">{subtitle}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          <span
            className={cn(
              "text-xs px-2.5 py-1 rounded-full border",
              colorBg[color],
              colorBorder[color],
              colorGlow[color],
            )}
          >
            {questions.length} practice questions
          </span>
          {topics.length > 0 && (
            <span className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-white/40">
              {topics.length} topics
            </span>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-hidden flex">
        {topics.length > 0 ? (
          <>
            <div className="w-44 flex-shrink-0 border-r border-white/8 py-4 px-2 space-y-0.5 overflow-y-auto">
              {topics.map((topic, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTopicIdx(idx)}
                  className={cn(
                    "w-full text-left px-2.5 py-2 rounded-lg text-xs transition-all leading-snug",
                    activeTopicIdx === idx
                      ? cn("font-medium", colorGlow[color], colorBg[color])
                      : "text-white/40 hover:text-white/70 hover:bg-white/5",
                  )}
                >
                  {topic.title}
                </button>
              ))}
              {questions.length > 0 && (
                <>
                  <div className="mx-2 my-2 border-t border-white/8" />
                  <button
                    onClick={() => setActiveTopicIdx(topics.length)}
                    className={cn(
                      "w-full text-left px-2.5 py-2 rounded-lg text-xs transition-all",
                      activeTopicIdx === topics.length
                        ? cn("font-medium", colorGlow[color], colorBg[color])
                        : "text-white/40 hover:text-white/70 hover:bg-white/5",
                    )}
                  >
                    Practice Questions
                  </button>
                </>
              )}
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {activeTopicIdx < topics.length && activeTopic ? (
                <TopicContent topic={activeTopic} color={color} />
              ) : (
                <PracticeQuestionsSection questions={questions} color={color} />
              )}
            </div>
          </>
        ) : (
          <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6">
            <div className="glass-strong border border-white/10 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen size={16} className={colorGlow[color]} />
                <h3 className="text-white/80 font-semibold">Study Content</h3>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                Use the AI Copilot to get detailed explanations for this
                chapter, or take the Mock Exam to test your knowledge.
              </p>
              <button
                onClick={() => onNavigate("copilot")}
                className={cn(
                  "mt-4 text-sm px-4 py-2 rounded-lg border transition-all",
                  colorBg[color],
                  colorBorder[color],
                  colorGlow[color],
                  "hover:brightness-110",
                )}
              >
                Ask AI Copilot →
              </button>
            </div>
            <PracticeQuestionsSection questions={questions} color={color} />
          </div>
        )}
      </div>
    </div>
  );
}

function TopicContent({ topic, color }: { topic: any; color: string }) {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-lg font-bold text-white mb-2">{topic.title}</h2>
        <div className="text-white/60 text-sm leading-relaxed whitespace-pre-line">
          {topic.content}
        </div>
      </div>
      {topic.code && (
        <div>
          <CodeBlock code={topic.code} title="Example" />
        </div>
      )}
    </div>
  );
}

function PracticeQuestionsSection({
  questions,
  color,
}: {
  questions: any[];
  color: string;
}) {
  const colorGlow: Record<string, string> = {
    blue: "text-blue-400",
    violet: "text-violet-400",
    cyan: "text-cyan-400",
    green: "text-green-400",
  };

  if (questions.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Zap size={14} className={colorGlow[color]} />
        <h3 className="text-white/70 font-semibold text-sm">
          Practice Questions
        </h3>
        <div className="flex-1 h-px bg-white/10" />
        <span className="text-white/30 text-xs">
          {questions.length} questions
        </span>
      </div>
      <div className="space-y-3">
        {questions.map((q) => (
          <MiniQuestion key={q.id} question={q} color={color} />
        ))}
      </div>
    </div>
  );
}
