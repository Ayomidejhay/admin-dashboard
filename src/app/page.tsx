"use client";

import Analytics from "@/components/Analytics";
import Dashboard from "@/components/Dashboard";
import Header from "@/components/Header";
import Settings from "@/components/Settings";
import Sidebar from "@/components/Sidebar";
import Users from "@/components/Users";
import { ThemeProvider } from "@/context/ThemeContext";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "users":
        return <Users />;
      case "analytics":
        return <Analytics />;
      case "settings":
        return <Settings />;
      case "orders":
        return (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-400">Orders management coming soon</p>
          </div>
        );
      case "messages":
        return (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-400">Messages interface coming soon</p>
          </div>
        );
      case "calendar":
        return (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-400">Calendar view coming soon</p>
          </div>
        );
      case "reports":
        return (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-400">Reports section coming soon</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };
  return (
    <ThemeProvider>
    <div className="flex h-screen bg-slate-100 dark:bg-slate-900 transition-colors">
      {/* Sidebar */}
      <Sidebar
        isCollapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">{renderContent()}</main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {!sidebarCollapsed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarCollapsed(true)}
        />
      )}
    </div>
    </ThemeProvider>
  );
}
