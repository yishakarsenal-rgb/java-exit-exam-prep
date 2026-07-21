"use client";

import { chapters } from "@/lib/chapters";
import { cn } from "@/lib/utils";
import {
  ArrowLeftRight,
  BrainCircuit,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Database,
  FileCog,
  Globe,
  GraduationCap,
  Layers,
  LayoutDashboard,
  Monitor,
  Server,
  ShieldAlert,
} from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  ShieldAlert: <ShieldAlert size={14} />,
  ArrowLeftRight: <ArrowLeftRight size={14} />,
  Database: <Database size={14} />,
  FileCog: <FileCog size={14} />,
  Server: <Server size={14} />,
  Monitor: <Monitor size={14} />,
  Cpu: <Cpu size={14} />,
  Globe: <Globe size={14} />,
  Layers: <Layers size={14} />,
};

const ACTIVE_COLOR: Record<string, string> = {
  "neon-text-blue": "bg-blue-500/15 text-blue-300 border-blue-500/20",
  "neon-text-cyan": "bg-cyan-500/15 text-cyan-300 border-cyan-500/20",
  "neon-text-violet": "bg-violet-500/15 text-violet-300 border-violet-500/20",
  "neon-text-green": "bg-green-500/15 text-green-300 border-green-500/20",
};

interface SidebarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export default function Sidebar({
  activeSection,
  onNavigate,
  collapsed,
  onToggleCollapse,
}: SidebarProps) {
  return (
    <aside
      className={cn(
        "relative flex flex-col h-full transition-all duration-300 glass-strong border-r border-white/10 flex-shrink-0",
        collapsed ? "w-14" : "w-60",
      )}
      style={{ zIndex: 20 }}
    >
      {/* logo */}
      <div
        className={cn(
          "flex items-center gap-3 p-4 border-b border-white/10",
          collapsed && "justify-center",
        )}
      >
        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
          <GraduationCap size={16} className="text-blue-400" />
        </div>
        {!collapsed && (
          <div className="overflow-hidden">
            <p className="text-xs font-bold tracking-widest text-blue-400 uppercase leading-none">
              AOOP
            </p>
            <p className="text-[10px] text-white/40 mt-0.5">Exam Prep</p>
          </div>
        )}
      </div>

      {/* nav */}
      <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-0.5">
        <NavBtn
          icon={<LayoutDashboard size={14} />}
          label="Dashboard"
          active={activeSection === "dashboard"}
          activeClass="bg-blue-500/15 text-blue-300 border-blue-500/20"
          collapsed={collapsed}
          onClick={() => onNavigate("dashboard")}
        />
        <NavBtn
          icon={<BrainCircuit size={14} />}
          label="Mock Exam"
          active={activeSection === "exam"}
          activeClass="bg-violet-500/15 text-violet-300 border-violet-500/20"
          collapsed={collapsed}
          onClick={() => onNavigate("exam")}
          badge="100 Q"
        />
        {!collapsed && (
          <div className="px-2 pt-4 pb-1">
            <p className="text-[10px] text-white/25 uppercase tracking-widest font-semibold">
              Chapters
            </p>
          </div>
        )}
        {collapsed && <div className="my-2 border-t border-white/10" />}

        {chapters.map((ch) => (
          <button
            key={ch.id}
            onClick={() => onNavigate(`chapter-${ch.id}`)}
            title={collapsed ? `Ch${ch.number}: ${ch.title}` : undefined}
            className={cn(
              "w-full flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-xs transition-all duration-150",
              activeSection === `chapter-${ch.id}`
                ? cn(
                    "border",
                    ACTIVE_COLOR[ch.color] ??
                      "bg-blue-500/15 text-blue-300 border-blue-500/20",
                  )
                : "text-white/45 hover:text-white/75 hover:bg-white/5",
              collapsed && "justify-center",
            )}
          >
            <span className="flex-shrink-0">{ICON_MAP[ch.icon]}</span>
            {!collapsed && (
              <span className="truncate text-left leading-snug">
                <span className="text-white/30 mr-1">Ch{ch.number}</span>
                {ch.title}
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* collapse toggle */}
      <button
        onClick={onToggleCollapse}
        className="absolute -right-3 top-20 w-6 h-6 rounded-full glass-strong border border-white/10 flex items-center justify-center text-white/40 hover:text-white/70 transition-colors"
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {collapsed ? <ChevronRight size={11} /> : <ChevronLeft size={11} />}
      </button>
    </aside>
  );
}

function NavBtn({
  icon,
  label,
  active,
  activeClass,
  collapsed,
  onClick,
  badge,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  activeClass: string;
  collapsed: boolean;
  onClick: () => void;
  badge?: string;
}) {
  return (
    <button
      onClick={onClick}
      title={collapsed ? label : undefined}
      className={cn(
        "w-full flex items-center gap-2.5 px-2 py-2 rounded-lg text-sm transition-all duration-150",
        active
          ? cn("border", activeClass)
          : "text-white/50 hover:text-white/80 hover:bg-white/5",
        collapsed && "justify-center",
      )}
    >
      <span className="flex-shrink-0">{icon}</span>
      {!collapsed && (
        <span className="flex items-center gap-2 truncate">
          {label}
          {badge && (
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-white/40 font-mono">
              {badge}
            </span>
          )}
        </span>
      )}
    </button>
  );
}
