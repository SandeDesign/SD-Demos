export const saasDashboardConfig = {
  id: 'saas-dashboard',
  name: 'CloudMetrics Pro',
  tagline: 'Analytics & Monitoring Platform',
  description: 'Modern SaaS dashboard met analytics, team management, API beheer en billing',
  type: 'multi-page' as const,

  // Branding
  colors: {
    primary: '#6366F1',
    primaryHover: '#4F46E5',
    accent: '#8B5CF6',
    success: '#10B981',
    warning: '#F59E0B',
    danger: '#EF4444',
  },

  // Stats
  stats: [
    { label: 'Total Users', value: '24,583', change: '+12.5%', trend: 'up' },
    { label: 'Active Sessions', value: '1,847', change: '+5.2%', trend: 'up' },
    { label: 'API Requests', value: '2.4M', change: '+18.3%', trend: 'up' },
    { label: 'Revenue (MRR)', value: '€45,892', change: '+23.1%', trend: 'up' },
  ],

  // Analytics Data
  analyticsData: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    users: [1200, 1900, 3000, 5000, 8200, 12000],
    revenue: [12000, 19000, 27000, 35000, 42000, 51000],
  },

  // Team Members
  team: [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah@cloudmetrics.io',
      role: 'Admin',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      status: 'active',
      lastActive: '2 min ago',
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael@cloudmetrics.io',
      role: 'Developer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      status: 'active',
      lastActive: '5 min ago',
    },
    {
      id: 3,
      name: 'Emma Wilson',
      email: 'emma@cloudmetrics.io',
      role: 'Designer',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
      status: 'away',
      lastActive: '1 hour ago',
    },
    {
      id: 4,
      name: 'James Rodriguez',
      email: 'james@cloudmetrics.io',
      role: 'Developer',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
      status: 'offline',
      lastActive: '2 days ago',
    },
  ],

  // API Keys
  apiKeys: [
    {
      id: 1,
      name: 'Production API',
      key: 'pk_live_51H7xKC2e...vW8g',
      created: '2024-01-15',
      lastUsed: '2 hours ago',
      requests: '1.2M',
    },
    {
      id: 2,
      name: 'Development API',
      key: 'pk_test_51H7xKC2e...aB3c',
      created: '2024-01-10',
      lastUsed: '5 min ago',
      requests: '45K',
    },
  ],

  // Billing Plans
  plans: [
    {
      id: 'starter',
      name: 'Starter',
      price: 29,
      features: [
        '10,000 API requests/month',
        '2 team members',
        'Basic analytics',
        'Email support',
        '99.9% uptime SLA',
      ],
    },
    {
      id: 'professional',
      name: 'Professional',
      price: 99,
      features: [
        '100,000 API requests/month',
        '10 team members',
        'Advanced analytics',
        'Priority support',
        '99.99% uptime SLA',
        'Custom integrations',
      ],
      popular: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 299,
      features: [
        'Unlimited API requests',
        'Unlimited team members',
        'Real-time analytics',
        '24/7 dedicated support',
        '99.999% uptime SLA',
        'White-label options',
        'Advanced security',
      ],
    },
  ],

  // Recent Activity
  activities: [
    {
      id: 1,
      type: 'user',
      message: 'New user registered: john@example.com',
      timestamp: '2 minutes ago',
      icon: '👤',
    },
    {
      id: 2,
      type: 'api',
      message: 'API rate limit reached for key: pk_live_51...',
      timestamp: '15 minutes ago',
      icon: '⚠️',
    },
    {
      id: 3,
      type: 'payment',
      message: 'Payment received: €99.00',
      timestamp: '1 hour ago',
      icon: '💳',
    },
    {
      id: 4,
      type: 'team',
      message: 'Sarah Johnson joined the team',
      timestamp: '3 hours ago',
      icon: '✨',
    },
  ],

  // Features
  features: [
    { icon: '📊', title: 'Real-time Analytics', description: 'Monitor your data in real-time' },
    { icon: '🔒', title: 'Enterprise Security', description: 'Bank-level encryption' },
    { icon: '⚡', title: 'Lightning Fast', description: '< 100ms response time' },
    { icon: '🌍', title: 'Global CDN', description: 'Servers worldwide' },
    { icon: '📈', title: 'Scalable', description: 'Grows with your business' },
    { icon: '🛠️', title: 'Easy Integration', description: 'RESTful API' },
  ],
};

export type SaasDashboardConfig = typeof saasDashboardConfig;
