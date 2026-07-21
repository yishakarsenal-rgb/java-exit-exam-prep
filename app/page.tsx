"use client";

import ChapterView from "@/components/chapter-view";
import Dashboard from "@/components/dashboard";
import MockExam from "@/components/mock-exam";
import NodeCanvas from "@/components/node-canvas";
import Sidebar from "@/components/sidebar";
import { useState } from "react";

export default function Page() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);

  const navigate = (section: string) => {
    setActiveSection(section);
  };

  const renderMain = () => {
    if (activeSection === "dashboard") {
      return <Dashboard onNavigate={navigate} />;
    }
    if (activeSection === "exam") {
      return <MockExam onNavigate={navigate} />;
    }
    if (activeSection.startsWith("chapter-")) {
      const chapterId = activeSection.replace("chapter-", "");
      return <ChapterView chapterId={chapterId} onNavigate={navigate} />;
    }
    return <Dashboard onNavigate={navigate} />;
  };

  return (
    <main className="relative flex h-screen overflow-hidden bg-background">
      {/* animated node graph background */}
      <NodeCanvas />

      {/* sidebar */}
      <Sidebar
        activeSection={activeSection}
        onNavigate={navigate}
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed((v) => !v)}
      />

      {/* main content */}
      <div className="relative flex-1 overflow-hidden" style={{ zIndex: 10 }}>
        {renderMain()}
      </div>
    </main>
  );
}
