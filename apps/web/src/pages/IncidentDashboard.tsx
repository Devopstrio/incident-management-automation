import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Cell, PieChart, Pie, LineChart, Line
} from 'recharts';
import { 
  ShieldAlert, 
  PlayCircle, 
  Activity, 
  Clock,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  Users,
  ArrowUpRight,
  ArrowDownRight,
  Zap
} from 'lucide-react';

const mttrData = [
  { month: 'Jan', mttr: 120, mttd: 15 },
  { month: 'Feb', mttr: 105, mttd: 12 },
  { month: 'Mar', mttr: 85, mttd: 8 },
  { month: 'Apr', mttr: 60, mttd: 5 },
  { month: 'May', mttr: 42, mttd: 3 },
  { month: 'Jun', mttr: 35, mttd: 2 },
];

const incidentSeverity = [
  { name: 'SEV1', value: 2, color: '#e11d48' },
  { name: 'SEV2', value: 8, color: '#f59e0b' },
  { name: 'SEV3', value: 24, color: '#3b82f6' },
  { name: 'SEV4', value: 45, color: '#10b981' },
];

const KPI_CARDS = [
  { title: 'MTTR (Avg)', value: '42m', trend: '-22% MoM', color: 'alert', icon: Clock },
  { title: 'Auto-Remediated', value: '68%', trend: '+15% MoM', color: 'alert', icon: Zap },
  { title: 'On-Call Burnout', value: 'Low', trend: 'Healthy Shift', color: 'alert', icon: Users },
  { title: 'SLA Compliance', value: '99.9%', trend: 'Target Met', color: 'alert', icon: CheckCircle2 },
];

const IncidentDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Incident Response & Automation</h1>
          <p className="text-slate-400">Institutional SRE operations for multi-cloud service reliability.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Archive Report
          </button>
          <button className="bg-alert-600 hover:bg-alert-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            New Incident Entry
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-alert-600/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-alert-400`} />
              </div>
              <div className="text-xs font-medium text-emerald-400">
                {card.trend}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 font-medium">{card.title}</p>
              <p className="text-3xl font-bold text-white mt-1">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* MTTR/MTTD Trend */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Efficiency Trends (MTTR vs MTTD)</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mttrData}>
                <defs>
                  <linearGradient id="colorMttr" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#e11d48" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#e11d48" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Area type="monotone" dataKey="mttr" stroke="#e11d48" strokeWidth={3} fillOpacity={1} fill="url(#colorMttr)" name="MTTR (min)" />
                <Area type="monotone" dataKey="mttd" stroke="#f59e0b" strokeWidth={3} fillOpacity={0} name="MTTD (min)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Severity Breakdown */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Incident Volume by Severity</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={incidentSeverity}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {incidentSeverity.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {incidentSeverity.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-xs text-slate-400">{item.name}: {item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Active Incidents Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Active High-Priority Incidents</h3>
          <button className="text-alert-400 hover:text-alert-300 text-sm font-medium">View Crisis Board</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Incident / ID</th>
                <th className="px-6 py-4 font-semibold">Severity</th>
                <th className="px-6 py-4 font-semibold">Service</th>
                <th className="px-6 py-4 font-semibold">Playbook Status</th>
                <th className="px-6 py-4 font-semibold">Time Elapsed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { id: 'INC-742', title: 'Global Auth Gateway Timeout', sev: 'SEV1', service: 'IAM-Gateway', playbook: 'Executing (Phase 2)', time: '12m', color: 'alert-600' },
                { id: 'INC-739', title: 'Payment DB Master Latency', sev: 'SEV2', service: 'Billing-DB', playbook: 'Waiting (Manual Gate)', time: '45m', color: 'amber-500' },
                { id: 'INC-735', title: 'Search Index lag > 500ms', sev: 'SEV3', service: 'Search-Engine', playbook: 'Remediated (Auto)', time: '2h', color: 'blue-500' },
              ].map((incident) => (
                <tr key={incident.id} className="hover:bg-slate-800/50 transition-all group">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white group-hover:text-alert-400 transition-colors">{incident.title}</span>
                      <span className="text-xs text-slate-500 font-mono">{incident.id}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      incident.sev === 'SEV1' ? 'bg-red-500/10 text-red-500' : 'bg-amber-500/10 text-amber-500'
                    }`}>
                      {incident.sev}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300">{incident.service}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                      <span className="text-sm text-slate-300">{incident.playbook}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400 font-mono italic">{incident.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IncidentDashboard;
