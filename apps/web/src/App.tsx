import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import IncidentDashboard from './pages/IncidentDashboard';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400">The incident automation engine is currently parsing high-volume alert streams. This module will be synchronized shortly following the next triage cycle.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<IncidentDashboard />} />
          <Route path="/active" element={<Placeholder name="Active Crisis Board" />} />
          <Route path="/playbooks" element={<Placeholder name="Automated Response Playbooks" />} />
          <Route path="/reliability" element={<Placeholder name="SRE Reliability & SLO Metrics" />} />
          <Route path="/timeline" element={<Placeholder name="Interactive Incident Timeline" />} />
          <Route path="/on-call" element={<Placeholder name="On-Call Escalation Management" />} />
          <Route path="/war-room" element={<Placeholder name="War Room & ChatOps Integration" />} />
          <Route path="/reports" element={<Placeholder name="Post-Mortem & Incident Analytics" />} />
          <Route path="/performance" element={<Placeholder name="System Performance & SLOs" />} />
          <Route path="/settings" element={<Placeholder name="Platform & Integration Settings" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
