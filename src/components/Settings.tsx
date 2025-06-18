'use client'

import React, { useState } from 'react';
import { Save, User, Bell, Shield, Palette, Globe, Database, X, Menu, Check } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const Settings: React.FC = () => {
      const [activeTab, setActiveTab] = useState('profile');
      const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme, colorScheme, setTheme, setColorScheme, isDark } = useTheme();

   const colorSchemes = [
    { id: 'blue', name: 'Blue', color: 'bg-blue-500', ring: 'ring-blue-500' },
    { id: 'purple', name: 'Purple', color: 'bg-purple-500', ring: 'ring-purple-500' },
    { id: 'green', name: 'Green', color: 'bg-green-500', ring: 'ring-green-500' },
    { id: 'red', name: 'Red', color: 'bg-red-500', ring: 'ring-red-500' },
    { id: 'orange', name: 'Orange', color: 'bg-orange-500', ring: 'ring-orange-500' }
  ];

      const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'general', label: 'General', icon: Globe },
    { id: 'data', label: 'Data', icon: Database }
  ];

   const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Profile Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  defaultValue="John"
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  defaultValue="Doe"
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue="john.doe@example.com"
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Bio
                </label>
                <textarea
                  rows={4}
                  defaultValue="Administrator with 5+ years of experience in system management and team leadership."
                  className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                ></textarea>
              </div>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Notification Preferences</h3>
            <div className="space-y-4">
              {[
                { label: 'Email notifications', description: 'Receive email updates about your account' },
                { label: 'Push notifications', description: 'Get push notifications on your devices' },
                { label: 'SMS notifications', description: 'Receive important updates via SMS' },
                { label: 'Marketing emails', description: 'Get updates about new features and promotions' }
              ].map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 gap-4">
                  <div className="flex-1">
                    <p className="font-medium text-slate-900 dark:text-slate-100">{item.label}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked={index < 2} />
                    <div className="w-11 h-6 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Security Settings</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-3">Change Password</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Current Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                    />
                  </div>
                </div>
              </div>
              
              <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
                <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-3">Two-Factor Authentication</h4>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 gap-4">
                  <div className="flex-1">
                    <p className="font-medium text-slate-900 dark:text-slate-100">Enable 2FA</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Add an extra layer of security to your account</p>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
                    Enable
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'appearance':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Appearance Settings</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-3">Theme</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { id: 'light', name: 'Light', preview: 'bg-white border-2 border-slate-200' },
                    { id: 'dark', name: 'Dark', preview: 'bg-slate-800 border-2 border-slate-600' },
                    { id: 'system', name: 'System', preview: 'bg-gradient-to-r from-white via-slate-200 to-slate-800 border-2 border-slate-300' }
                  ].map((themeOption) => (
                    <button
                      key={themeOption.id}
                      onClick={() => setTheme(themeOption.id as any)}
                      className={`relative border-2 rounded-lg p-4 cursor-pointer hover:border-blue-500 transition-colors ${
                        theme === themeOption.id ? 'border-blue-500 ring-2 ring-blue-500 ring-opacity-20' : 'border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      <div className={`w-full h-16 rounded mb-3 ${themeOption.preview}`}></div>
                      <p className="text-sm font-medium text-center text-slate-900 dark:text-slate-100">{themeOption.name}</p>
                      {theme === themeOption.id && (
                        <div className="absolute top-2 right-2 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                          <Check size={12} className="text-white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-3">Color Scheme</h4>
                <div className="flex flex-wrap gap-3">
                  {colorSchemes.map((scheme) => (
                    <button
                      key={scheme.id}
                      onClick={() => setColorScheme(scheme.id as any)}
                      className={`relative w-12 h-12 rounded-full ${scheme.color} ring-2 ring-offset-2 ring-offset-white dark:ring-offset-slate-800 transition-all ${
                        colorScheme === scheme.id ? `ring-2 ${scheme.ring}` : 'ring-transparent hover:ring-slate-300'
                      }`}
                      title={scheme.name}
                    >
                      {colorScheme === scheme.id && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Check size={16} className="text-white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                  Selected: {colorSchemes.find(s => s.id === colorScheme)?.name}
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-400">Settings content for {activeTab} tab</p>
          </div>
        );
    }
  };
  return (
      <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Settings</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">Manage your account settings and preferences</p>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden p-2 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Settings Container */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Mobile Sidebar Overlay */}
          {sidebarOpen && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Sidebar */}
          <div className={`
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
            lg:translate-x-0 
            fixed lg:relative 
            top-0 left-0 
            z-50 lg:z-auto
            w-64 lg:w-64 
            h-full lg:h-auto
            bg-slate-50 dark:bg-slate-900 
            border-r border-slate-200 dark:border-slate-700
            transition-transform duration-300 ease-in-out
            lg:transition-none
          `}>
            <nav className="p-4 space-y-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setSidebarOpen(false); // Close mobile sidebar when tab is selected
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                    }`}
                  >
                    <Icon size={18} />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Content */}
          <div className="flex-1 p-4 lg:p-6">
            {renderTabContent()}
            
            {/* Save Button */}
            <div className="flex flex-col sm:flex-row justify-end pt-6 border-t border-slate-200 dark:border-slate-700 mt-8 gap-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                <Save size={16} />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings