import { useState } from 'react';
import {
  BarChart3, Users, Key, CreditCard, Settings, TrendingUp,
  Activity, Bell, Search, Plus, Copy, Check, X
} from 'lucide-react';
import { saasDashboardConfig } from './config';

export const SaasDashboardDemo = () => {
  const config = saasDashboardConfig;
  const [activeTab, setActiveTab] = useState('dashboard');
  const [copiedKey, setCopiedKey] = useState<number | null>(null);

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(id);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Top Navigation */}
      <nav className="bg-white/10 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">{config.name}</h1>
                <p className="text-xs text-gray-300">{config.tagline}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <button className="relative p-2 hover:bg-white/10 rounded-lg transition">
                <Bell className="w-5 h-5 text-gray-300" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                SJ
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Tab Navigation */}
      <div className="bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto">
            {[
              { id: 'dashboard', icon: BarChart3, label: 'Dashboard' },
              { id: 'team', icon: Users, label: 'Team' },
              { id: 'api', icon: Key, label: 'API Keys' },
              { id: 'billing', icon: CreditCard, label: 'Billing' },
              { id: 'settings', icon: Settings, label: 'Settings' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 font-semibold transition border-b-2 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-indigo-400 border-indigo-500'
                    : 'text-gray-400 border-transparent hover:text-gray-300'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'dashboard' && (
          <div>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {config.stats.map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                  <div className="flex justify-between items-start mb-4">
                    <p className="text-gray-300 text-sm">{stat.label}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      stat.trend === 'up' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Analytics Chart Mock */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-white">User Growth</h3>
                  <TrendingUp className="w-5 h-5 text-green-400" />
                </div>
                <div className="h-64 flex items-end gap-2">
                  {config.analyticsData.users.map((value, idx) => (
                    <div key={idx} className="flex-1 bg-gradient-to-t from-indigo-600 to-purple-600 rounded-t-lg hover:from-indigo-500 hover:to-purple-500 transition" style={{ height: `${(value / 12000) * 100}%` }}>
                      <div className="text-white text-xs text-center mt-2">{(value / 1000).toFixed(1)}k</div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-4 text-xs text-gray-400">
                  {config.analyticsData.labels.map((label, idx) => (
                    <span key={idx}>{label}</span>
                  ))}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-white">Recent Activity</h3>
                  <Activity className="w-5 h-5 text-indigo-400" />
                </div>
                <div className="space-y-4">
                  {config.activities.map((activity) => (
                    <div key={activity.id} className="flex items-start gap-3">
                      <div className="text-2xl">{activity.icon}</div>
                      <div className="flex-1">
                        <p className="text-white text-sm">{activity.message}</p>
                        <p className="text-gray-400 text-xs mt-1">{activity.timestamp}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'team' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Team Members</h2>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-semibold transition flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Invite Member
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden">
              <table className="w-full">
                <thead className="bg-white/5">
                  <tr>
                    <th className="text-left p-4 text-gray-300 font-semibold">Member</th>
                    <th className="text-left p-4 text-gray-300 font-semibold">Role</th>
                    <th className="text-left p-4 text-gray-300 font-semibold">Status</th>
                    <th className="text-left p-4 text-gray-300 font-semibold">Last Active</th>
                    <th className="text-left p-4 text-gray-300 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {config.team.map((member) => (
                    <tr key={member.id} className="border-t border-white/10 hover:bg-white/5 transition">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full" />
                          <div>
                            <p className="text-white font-semibold">{member.name}</p>
                            <p className="text-gray-400 text-sm">{member.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-semibold">
                          {member.role}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          member.status === 'active' ? 'bg-green-500/20 text-green-300' :
                          member.status === 'away' ? 'bg-yellow-500/20 text-yellow-300' :
                          'bg-gray-500/20 text-gray-300'
                        }`}>
                          {member.status}
                        </span>
                      </td>
                      <td className="p-4 text-gray-300">{member.lastActive}</td>
                      <td className="p-4">
                        <button className="text-indigo-400 hover:text-indigo-300 font-semibold text-sm">
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'api' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">API Keys</h2>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-semibold transition flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Create Key
              </button>
            </div>

            <div className="space-y-4">
              {config.apiKeys.map((key) => (
                <div key={key.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{key.name}</h3>
                      <div className="flex items-center gap-3 bg-black/30 rounded-lg p-3 font-mono text-sm">
                        <span className="text-gray-300">{key.key}</span>
                        <button
                          onClick={() => copyToClipboard(key.key, key.id)}
                          className="text-indigo-400 hover:text-indigo-300 transition"
                        >
                          {copiedKey === key.id ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                    <button className="text-red-400 hover:text-red-300 transition">
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-400">Created</p>
                      <p className="text-white font-semibold">{key.created}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Last Used</p>
                      <p className="text-white font-semibold">{key.lastUsed}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Requests</p>
                      <p className="text-white font-semibold">{key.requests}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'billing' && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Choose Your Plan</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {config.plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border-2 transition ${
                    plan.popular
                      ? 'border-indigo-500 transform scale-105'
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
                      MOST POPULAR
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-white">€{plan.price}</span>
                    <span className="text-gray-300 ml-2">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition ${
                    plan.popular
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Settings</h2>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10 space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">Company Name</label>
                <input
                  type="text"
                  defaultValue={config.name}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Email Notifications</label>
                <div className="space-y-2">
                  {['New user signups', 'API rate limits', 'Payment updates', 'Weekly reports'].map((item) => (
                    <label key={item} className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-4 h-4 rounded" />
                      <span className="text-gray-300">{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Timezone</label>
                <select className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>Europe/Amsterdam (UTC+1)</option>
                  <option>America/New_York (UTC-5)</option>
                  <option>Asia/Tokyo (UTC+9)</option>
                </select>
              </div>

              <div className="pt-4 border-t border-white/10">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-semibold transition">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Note */}
      <div className="max-w-7xl mx-auto px-6 py-8 text-center">
        <p className="text-gray-400 text-sm">
          © 2024 {config.name}. Modern SaaS Dashboard Demo met Analytics, Team & API Management.
        </p>
      </div>
    </div>
  );
};

export { saasDashboardConfig } from './config';
