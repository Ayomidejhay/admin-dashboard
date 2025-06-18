import React from 'react'
import { Search, Bell, Settings, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-slate-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </button>
          
          <button className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
            <Settings size={20} />
          </button>
          
          <div className="flex items-center gap-3 ml-4 pl-4 border-l border-slate-200">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-slate-900">John Doe</p>
              <p className="text-xs text-slate-500">Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header