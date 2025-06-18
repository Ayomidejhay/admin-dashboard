import React from "react";
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  FileText,
  ShoppingCart,
  MessageSquare,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isCollapsed,
  onToggle,
  activeTab,
  onTabChange,
}) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "users", label: "Users", icon: Users },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "orders", label: "Orders", icon: ShoppingCart },
    { id: "messages", label: "Messages", icon: MessageSquare },
    { id: "calendar", label: "Calendar", icon: Calendar },
    { id: "reports", label: "Reports", icon: FileText },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div
      className={`bg-slate-900 text-white transition-all duration-300 flex flex-col ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Header */}
      <div className="p-4 border-b border-slate-700">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Admin
            </h1>
          )}
          <button
            onClick={onToggle}
            className="p-1.5 rounded-lg hover:bg-slate-700 transition-colors"
          >
            {isCollapsed ? (
              <ChevronRight size={20} />
            ) : (
              <ChevronLeft size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                  : "text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              <Icon size={20} className="flex-shrink-0" />
              {!isCollapsed && (
                <span className="font-medium">{item.label}</span>
              )}
            </button>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-slate-700">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold">JD</span>
          </div>
          {!isCollapsed && (
            <div className="flex-1">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-slate-400">Administrator</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
