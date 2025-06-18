"use client";

import React, { useState } from "react";
import {
  BarChart3,
  TrendingUp,
  Users,
  Eye,
  Clock,
  Globe,
  Calendar,
} from "lucide-react";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { analyticsData, deviceData, trafficSources } from "@/data/mockData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Analytics = () => {
  const [timeRange, setTimeRange] = useState("30");

  const metrics = [
    {
      title: "Page Views",
      value: "1.2M",
      change: "+15.3%",
      trend: "up",
      icon: Eye,
      color: "bg-blue-500",
    },
    {
      title: "Unique Visitors",
      value: "248K",
      change: "+8.7%",
      trend: "up",
      icon: Users,
      color: "bg-green-500",
    },
    {
      title: "Avg. Session",
      value: "3m 24s",
      change: "+12.1%",
      trend: "up",
      icon: Clock,
      color: "bg-purple-500",
    },
    {
      title: "Bounce Rate",
      value: "42.8%",
      change: "-2.4%",
      trend: "down",
      icon: Globe,
      color: "bg-orange-500",
    },
  ];

  const topPages = [
    { page: "/dashboard", views: "45,123", percentage: 35 },
    { page: "/products", views: "32,891", percentage: 25 },
    { page: "/users", views: "28,456", percentage: 22 },
    { page: "/analytics", views: "15,234", percentage: 12 },
    { page: "/settings", views: "8,901", percentage: 6 },
  ];

  // Chart data
  const pageViewsData = {
    labels: analyticsData.map((item) => {
      const date = new Date(item.date);
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    }),
    datasets: [
      {
        label: "Page Views",
        data: analyticsData.map((item) => item.pageViews),
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "#3B82F6",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: "Unique Visitors",
        data: analyticsData.map((item) => item.uniqueVisitors),
        borderColor: "#10B981",
        backgroundColor: "rgba(16, 185, 129, 0.1)",
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "#10B981",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const bounceRateData = {
    labels: analyticsData.map((item) => {
      const date = new Date(item.date);
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
    }),
    datasets: [
      {
        label: "Bounce Rate (%)",
        data: analyticsData.map((item) => item.bounceRate),
        backgroundColor: "rgba(239, 68, 68, 0.8)",
        borderColor: "#EF4444",
        borderWidth: 2,
        borderRadius: 4,
        borderSkipped: false,
      },
    ],
  };

  const deviceChartData = {
    labels: deviceData.map((item) => item.device),
    datasets: [
      {
        data: deviceData.map((item) => item.percentage),
        backgroundColor: deviceData.map((item) => item.color),
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12,
          },
          color: "#64748B",
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        borderColor: "rgba(255, 255, 255, 0.1)",
        borderWidth: 1,
        cornerRadius: 8,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: "#64748B",
          font: {
            size: 11,
          },
          maxTicksLimit: 8,
        },
      },
      y: {
        grid: {
          color: "rgba(148, 163, 184, 0.1)",
        },
        border: {
          display: false,
        },
        ticks: {
          color: "#64748B",
          font: {
            size: 11,
          },
        },
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        borderColor: "rgba(255, 255, 255, 0.1)",
        borderWidth: 1,
        cornerRadius: 8,
        callbacks: {
          label: function (context: any) {
            return `${context.label}: ${context.parsed}%`;
          },
        },
      },
    },
    cutout: "70%",
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Analytics</h1>
          <p className="text-slate-600 mt-1">
            Track your website performance and user behavior
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Calendar size={16} className="text-slate-500" />
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="7">Last 7 days</option>
            <option value="30">Last 30 days</option>
            <option value="90">Last 90 days</option>
          </select>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">
                    {metric.title}
                  </p>
                  <p className="text-2xl font-bold text-slate-900 mt-2">
                    {metric.value}
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${metric.color}`}>
                  <Icon size={20} className="text-white" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <TrendingUp
                  size={16}
                  className={`${
                    metric.trend === "up" ? "text-green-500" : "text-red-500"
                  }`}
                />
                <span
                  className={`text-sm font-medium ml-1 ${
                    metric.trend === "up" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {metric.change}
                </span>
                <span className="text-sm text-slate-500 ml-1">
                  vs last period
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Analytics Chart */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-slate-900">Traffic Overview</h3>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-slate-600">Page Views</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-slate-600">Unique Visitors</span>
            </div>
          </div>
        </div>
        <div className="h-80">
          <Line data={pageViewsData} options={chartOptions} />
        </div>
      </div>

      {/* Secondary Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bounce Rate Chart */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-6">
            Bounce Rate Trend
          </h3>
          <div className="h-64">
            <Bar
              data={bounceRateData}
              options={{
                ...chartOptions,
                plugins: {
                  ...chartOptions.plugins,
                  legend: {
                    display: false,
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Device Breakdown */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-6">
            Device Breakdown
          </h3>
          <div className="h-48 mb-4">
            <Doughnut data={deviceChartData} options={doughnutOptions} />
          </div>
          <div className="space-y-3">
            {deviceData.map((device, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: device.color }}
                  ></div>
                  <span className="text-sm text-slate-600">
                    {device.device}
                  </span>
                </div>
                <span className="text-sm font-medium text-slate-900">
                  {device.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Data Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Pages */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Top Pages</h3>
          <div className="space-y-4">
            {topPages.map((page, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="font-medium text-slate-900">{page.page}</p>
                  <p className="text-sm text-slate-500">{page.views} views</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-24 bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${page.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-slate-600 w-8">
                    {page.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">
            Traffic Sources
          </h3>
          <div className="space-y-4">
            {trafficSources.map((source, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="font-medium text-slate-900">{source.source}</p>
                  <p className="text-sm text-slate-500">
                    {source.visitors.toLocaleString()} visitors
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-24 bg-slate-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all duration-500"
                      style={{
                        width: `${source.percentage}%`,
                        backgroundColor: source.color,
                      }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-slate-600 w-8">
                    {source.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
