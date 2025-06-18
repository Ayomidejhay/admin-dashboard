'use client'

import React, { useState } from 'react'
import { Search, Bell, Settings, User, Check, Palette } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const Header = () => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const { colorScheme, setColorScheme } = useTheme();

   const colorSchemes = [
    { id: 'blue', name: 'Blue', color: 'bg-blue-500', ring: 'ring-blue-500' },
    { id: 'purple', name: 'Purple', color: 'bg-purple-500', ring: 'ring-purple-500' },
    { id: 'green', name: 'Green', color: 'bg-green-500', ring: 'ring-green-500' },
    { id: 'red', name: 'Red', color: 'bg-red-500', ring: 'ring-red-500' },
    { id: 'orange', name: 'Orange', color: 'bg-orange-500', ring: 'ring-orange-500' }
  ];

  return (
    <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-6 py-2.5 transition-colors">
      <div className="flex items-center justify-between">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-slate-500" size={20} />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Color Scheme Picker */}
          <div className="relative">
            <button
              onClick={() => setShowColorPicker(!showColorPicker)}
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
              title="Change color scheme"
            >
              <Palette size={20} />
            </button>
            
            {showColorPicker && (
              <>
                <div 
                  className="fixed inset-0 z-10" 
                  onClick={() => setShowColorPicker(false)}
                />
                <div className="absolute right-0 top-12 z-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg p-4 min-w-[200px]">
                  <h3 className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-3">Color Scheme</h3>
                  <div className="space-y-2">
                    {colorSchemes.map((scheme) => (
                      <button
                        key={scheme.id}
                        onClick={() => {
                          setColorScheme(scheme.id as any);
                          setShowColorPicker(false);
                        }}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                      >
                        <div className={`w-5 h-5 rounded-full ${scheme.color} flex items-center justify-center`}>
                          {colorScheme === scheme.id && (
                            <Check size={12} className="text-white" />
                          )}
                        </div>
                        <span className="text-sm text-slate-700 dark:text-slate-300">{scheme.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          <button className="relative p-2 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </button>
          
          <button className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
            <Settings size={20} />
          </button>
          
          <div className="flex items-center gap-3 ml-4 pl-4 border-l border-slate-200 dark:border-slate-700">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-slate-900 dark:text-slate-100">John Doe</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header