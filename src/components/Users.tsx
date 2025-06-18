"use client";

import React, { useState } from "react";
import {
  Search,
  Filter,
  Plus,
  MoreHorizontal,
  Edit,
  Trash2,
  Mail,
  Phone,
  MapPin,
  Calendar,
} from "lucide-react";
import { mockUsers, User } from "@/data/mockData";
//import { mockUsers, User } from

const Users = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredUsers = mockUsers.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.department.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRole = filterRole === "all" || user.role === filterRole;
    const matchesStatus =
      filterStatus === "all" || user.status === filterStatus;

    return matchesSearch && matchesRole && matchesStatus;
  });

    const getRoleColor = (role: string) => {
    switch (role) {
      case 'Admin':
        return 'bg-red-100 text-red-800';
      case 'Manager':
        return 'bg-purple-100 text-purple-800';
      case 'Editor':
        return 'bg-blue-100 text-blue-800';
      case 'User':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-slate-100 text-slate-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Inactive':
        return 'bg-slate-100 text-slate-600';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-slate-100 text-slate-600';
    }
  };

  const roleStats = {
    total: mockUsers.length,
    admin: mockUsers.filter(u => u.role === 'Admin').length,
    manager: mockUsers.filter(u => u.role === 'Manager').length,
    editor: mockUsers.filter(u => u.role === 'Editor').length,
    user: mockUsers.filter(u => u.role === 'User').length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Users</h1>
          <p className="text-slate-600 mt-1">Manage your team members and their permissions</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
          <Plus size={16} />
          Add User
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
          <p className="text-sm font-medium text-slate-600">Total Users</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">{roleStats.total}</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
          <p className="text-sm font-medium text-slate-600">Admins</p>
          <p className="text-2xl font-bold text-red-600 mt-1">{roleStats.admin}</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
          <p className="text-sm font-medium text-slate-600">Managers</p>
          <p className="text-2xl font-bold text-purple-600 mt-1">{roleStats.manager}</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
          <p className="text-sm font-medium text-slate-600">Editors</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">{roleStats.editor}</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
          <p className="text-sm font-medium text-slate-600">Users</p>
          <p className="text-2xl font-bold text-green-600 mt-1">{roleStats.user}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="text"
                placeholder="Search users by name, email, or department..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-3">
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Roles</option>
              <option value="Admin">Admin</option>
              <option value="Manager">Manager</option>
              <option value="Editor">Editor</option>
              <option value="User">User</option>
            </select>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left py-3 px-6 font-medium text-slate-700">User</th>
                <th className="text-left py-3 px-6 font-medium text-slate-700">Contact & Location</th>
                <th className="text-left py-3 px-6 font-medium text-slate-700">Role & Department</th>
                <th className="text-left py-3 px-6 font-medium text-slate-700">Status</th>
                <th className="text-left py-3 px-6 font-medium text-slate-700">Last Login</th>
                <th className="text-left py-3 px-6 font-medium text-slate-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-white">{user.avatar}</span>
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">{user.name}</p>
                        <p className="text-sm text-slate-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Phone size={14} />
                        {user.phone}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <MapPin size={14} />
                        {user.location}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="space-y-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRoleColor(user.role)}`}>
                        {user.role}
                      </span>
                      <p className="text-sm text-slate-600">{user.department}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Calendar size={14} />
                      {user.lastLogin}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <button className="p-1 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded transition-all">
                        <Edit size={16} />
                      </button>
                      <button className="p-1 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded transition-all">
                        <Trash2 size={16} />
                      </button>
                      <button className="p-1 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded transition-all">
                        <MoreHorizontal size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-600">
          Showing {filteredUsers.length} of {mockUsers.length} users
        </p>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 border border-slate-300 rounded-lg text-sm hover:bg-slate-50 transition-colors">
            Previous
          </button>
          <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">
            1
          </button>
          <button className="px-3 py-1 border border-slate-300 rounded-lg text-sm hover:bg-slate-50 transition-colors">
            2
          </button>
          <button className="px-3 py-1 border border-slate-300 rounded-lg text-sm hover:bg-slate-50 transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Users;
