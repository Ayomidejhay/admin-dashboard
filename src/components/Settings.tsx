'use client'

import React, { useState } from 'react';
import { Save, User, Bell, Shield, Palette, Globe, Database } from 'lucide-react';

const Settings: React.FC = () => {
      const [activeTab, setActiveTab] = useState('profile');

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
            <h3 className="text-lg font-semibold text-slate-900">Profile Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  defaultValue="John"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  defaultValue="Doe"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue="john.doe@example.com"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Bio
                </label>
                <textarea
                  rows={4}
                  defaultValue="Administrator with 5+ years of experience in system management and team leadership."
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-slate-900">Notification Preferences</h3>
            <div className="space-y-4">
              {[
                { label: 'Email notifications', description: 'Receive email updates about your account' },
                { label: 'Push notifications', description: 'Get push notifications on your devices' },
                { label: 'SMS notifications', description: 'Receive important updates via SMS' },
                { label: 'Marketing emails', description: 'Get updates about new features and promotions' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                  <div>
                    <p className="font-medium text-slate-900">{item.label}</p>
                    <p className="text-sm text-slate-500">{item.description}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked={index < 2} />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-slate-900">Security Settings</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-slate-900 mb-3">Change Password</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Current Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-6">
                <h4 className="font-medium text-slate-900 mb-3">Two-Factor Authentication</h4>
                <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                  <div>
                    <p className="font-medium text-slate-900">Enable 2FA</p>
                    <p className="text-sm text-slate-500">Add an extra layer of security to your account</p>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
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
            <h3 className="text-lg font-semibold text-slate-900">Appearance Settings</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-slate-900 mb-3">Theme</h4>
                <div className="grid grid-cols-3 gap-4">
                  {['Light', 'Dark', 'System'].map((theme) => (
                    <div key={theme} className="border border-slate-200 rounded-lg p-4 cursor-pointer hover:border-blue-500 transition-colors">
                      <div className={`w-full h-16 rounded mb-3 ${
                        theme === 'Light' ? 'bg-white border border-slate-200' :
                        theme === 'Dark' ? 'bg-slate-800' : 'bg-gradient-to-r from-white to-slate-800'
                      }`}></div>
                      <p className="text-sm font-medium text-center">{theme}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-slate-900 mb-3">Color Scheme</h4>
                <div className="flex gap-3">
                  {['blue', 'purple', 'green', 'red', 'orange'].map((color) => (
                    <button
                      key={color}
                      className={`w-8 h-8 rounded-full bg-${color}-500 ring-2 ring-offset-2 ring-transparent hover:ring-${color}-500 transition-all`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-12">
            <p className="text-slate-500">Settings content for {activeTab} tab</p>
          </div>
        );
    }
  };
  return (
     <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
        <p className="text-slate-600 mt-1">Manage your account settings and preferences</p>
      </div>

      {/* Settings Container */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 bg-slate-50 border-r border-slate-200">
            <nav className="p-4 space-y-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-700 hover:bg-slate-200'
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
          <div className="flex-1 p-6">
            {renderTabContent()}
            
            {/* Save Button */}
            <div className="flex justify-end pt-6 border-t border-slate-200 mt-8">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
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