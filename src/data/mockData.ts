// Mock data for the admin dashboard
export interface User {
  id: number;
  name: string;
  email: string;
  role: 'Admin' | 'Editor' | 'User' | 'Manager';
  status: 'Active' | 'Inactive' | 'Pending';
  avatar: string;
  phone: string;
  joinDate: string;
  lastLogin: string;
  department: string;
  location: string;
}

export interface Order {
  id: string;
  customer: string;
  product: string;
  amount: number;
  status: 'Completed' | 'Pending' | 'Cancelled' | 'Processing';
  date: string;
}

export interface AnalyticsData {
  date: string;
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
}

//mock users
export const mockUsers: User[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice.johnson@company.com',
    role: 'Admin',
    status: 'Active',
    avatar: 'AJ',
    phone: '+1 (555) 123-4567',
    joinDate: '2023-01-15',
    lastLogin: '2024-01-15 09:30',
    department: 'Engineering',
    location: 'San Francisco, CA'
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob.smith@company.com',
    role: 'Manager',
    status: 'Active',
    avatar: 'BS',
    phone: '+1 (555) 234-5678',
    joinDate: '2023-02-20',
    lastLogin: '2024-01-14 16:45',
    department: 'Marketing',
    location: 'New York, NY'
  },
  {
    id: 3,
    name: 'Carol Davis',
    email: 'carol.davis@company.com',
    role: 'Editor',
    status: 'Inactive',
    avatar: 'CD',
    phone: '+1 (555) 345-6789',
    joinDate: '2023-03-10',
    lastLogin: '2024-01-10 11:20',
    department: 'Content',
    location: 'Austin, TX'
  },
  {
    id: 4,
    name: 'David Wilson',
    email: 'david.wilson@company.com',
    role: 'Editor',
    status: 'Active',
    avatar: 'DW',
    phone: '+1 (555) 456-7890',
    joinDate: '2023-04-05',
    lastLogin: '2024-01-15 08:15',
    department: 'Design',
    location: 'Seattle, WA'
  },
  {
    id: 5,
    name: 'Emma Brown',
    email: 'emma.brown@company.com',
    role: 'User',
    status: 'Active',
    avatar: 'EB',
    phone: '+1 (555) 567-8901',
    joinDate: '2023-05-12',
    lastLogin: '2024-01-15 14:30',
    department: 'Sales',
    location: 'Chicago, IL'
  },
  {
    id: 6,
    name: 'Frank Miller',
    email: 'frank.miller@company.com',
    role: 'Manager',
    status: 'Active',
    avatar: 'FM',
    phone: '+1 (555) 678-9012',
    joinDate: '2023-06-18',
    lastLogin: '2024-01-15 10:45',
    department: 'Operations',
    location: 'Denver, CO'
  },
  {
    id: 7,
    name: 'Grace Lee',
    email: 'grace.lee@company.com',
    role: 'User',
    status: 'Pending',
    avatar: 'GL',
    phone: '+1 (555) 789-0123',
    joinDate: '2023-07-22',
    lastLogin: '2024-01-12 13:20',
    department: 'HR',
    location: 'Los Angeles, CA'
  },
  {
    id: 8,
    name: 'Henry Garcia',
    email: 'henry.garcia@company.com',
    role: 'Editor',
    status: 'Active',
    avatar: 'HG',
    phone: '+1 (555) 890-1234',
    joinDate: '2023-08-30',
    lastLogin: '2024-01-15 15:10',
    department: 'Engineering',
    location: 'Miami, FL'
  }
];

//mock orders
export const mockOrders: Order[] = [
  {
    id: 'ORD-001',
    customer: 'Alice Johnson',
    product: 'Premium Subscription',
    amount: 299.99,
    status: 'Completed',
    date: '2024-01-15'
  },
  {
    id: 'ORD-002',
    customer: 'Bob Smith',
    product: 'Basic Plan',
    amount: 99.99,
    status: 'Processing',
    date: '2024-01-14'
  },
  {
    id: 'ORD-003',
    customer: 'Carol Davis',
    product: 'Enterprise License',
    amount: 999.99,
    status: 'Completed',
    date: '2024-01-13'
  },
  {
    id: 'ORD-004',
    customer: 'David Wilson',
    product: 'Pro Subscription',
    amount: 199.99,
    status: 'Pending',
    date: '2024-01-12'
  },
  {
    id: 'ORD-005',
    customer: 'Emma Brown',
    product: 'Basic Plan',
    amount: 99.99,
    status: 'Cancelled',
    date: '2024-01-11'
  }
];

// Generate analytics data for the last 30 days
export const generateAnalyticsData = (): AnalyticsData[] => {
  const data: AnalyticsData[] = [];
  const today = new Date();
  
  for (let i = 29; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    data.push({
      date: date.toISOString().split('T')[0],
      pageViews: Math.floor(Math.random() * 5000) + 2000,
      uniqueVisitors: Math.floor(Math.random() * 2000) + 800,
      bounceRate: Math.floor(Math.random() * 30) + 35,
      avgSessionDuration: Math.floor(Math.random() * 300) + 120
    });
  }
  
  return data;
};

export const analyticsData = generateAnalyticsData();

// Revenue data for charts
export const revenueData = [
  { month: 'Jan', revenue: 45000, orders: 120 },
  { month: 'Feb', revenue: 52000, orders: 145 },
  { month: 'Mar', revenue: 48000, orders: 132 },
  { month: 'Apr', revenue: 61000, orders: 168 },
  { month: 'May', revenue: 55000, orders: 155 },
  { month: 'Jun', revenue: 67000, orders: 189 },
  { month: 'Jul', revenue: 72000, orders: 201 },
  { month: 'Aug', revenue: 69000, orders: 195 },
  { month: 'Sep', revenue: 78000, orders: 220 },
  { month: 'Oct', revenue: 84000, orders: 235 },
  { month: 'Nov', revenue: 91000, orders: 258 },
  { month: 'Dec', revenue: 96000, orders: 275 }
];

// User growth data
export const userGrowthData = [
  { month: 'Jan', users: 1200 },
  { month: 'Feb', users: 1450 },
  { month: 'Mar', users: 1680 },
  { month: 'Apr', users: 1920 },
  { month: 'May', users: 2150 },
  { month: 'Jun', users: 2380 },
  { month: 'Jul', users: 2650 },
  { month: 'Aug', users: 2890 },
  { month: 'Sep', users: 3120 },
  { month: 'Oct', users: 3400 },
  { month: 'Nov', users: 3680 },
  { month: 'Dec', users: 3950 }
];

// Traffic sources
export const trafficSources = [
  { source: 'Direct', visitors: 89234, percentage: 42, color: '#3B82F6' },
  { source: 'Search Engines', visitors: 67891, percentage: 32, color: '#10B981' },
  { source: 'Social Media', visitors: 34567, percentage: 16, color: '#F59E0B' },
  { source: 'Referrals', visitors: 21345, percentage: 10, color: '#EF4444' }
];

// Device breakdown
export const deviceData = [
  { device: 'Desktop', percentage: 65, color: '#3B82F6' },
  { device: 'Mobile', percentage: 28, color: '#10B981' },
  { device: 'Tablet', percentage: 7, color: '#F59E0B' }
];