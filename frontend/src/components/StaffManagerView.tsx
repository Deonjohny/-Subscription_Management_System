import React, { useState, useEffect } from 'react';
import { api } from '../api';
import { User } from '../types';
import { ShieldCheck, Plus, UserPlus, CheckCircle2, Lock, Mail, Phone } from 'lucide-react';

interface StaffManagerViewProps {
  currentUser: User | null;
}

export const StaffManagerView: React.FC<StaffManagerViewProps> = ({ currentUser }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const isAdmin = currentUser?.role === 'admin';

  const loadUsers = async () => {
    setLoading(true);
    try {
      const data = await api.getUsers();
      setUsers(data);
    } catch (err) {
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleCreateStaff = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAdmin) {
      alert('Only the admin can add a new member of staff.');
      return;
    }

    setSubmitting(true);
    try {
      await api.createStaff({
        email: email.trim().toLowerCase(),
        name: name.trim(),
        phone: phone.trim() || undefined,
        password: password
      });
      setShowModal(false);
      setEmail('');
      setName('');
      setPhone('');
      setPassword('');
      await loadUsers();
      alert('New staff member added successfully!');
    } catch (err: any) {
      alert(err.response?.data?.detail || 'Failed to create staff member');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight flex items-center space-x-2">
            <ShieldCheck className="w-7 h-7 text-purple-700" />
            <span>Staff & Team Access Management</span>
          </h1>
          <p className="text-slate-500 text-sm">
            Strict role-based access control. "Only the admin can add a new member of staff."
          </p>
        </div>

        {isAdmin && (
          <button
            onClick={() => setShowModal(true)}
            className="bg-purple-700 hover:bg-purple-800 text-white font-bold text-sm px-4 py-2.5 rounded-lg shadow flex items-center space-x-2 transition"
          >
            <UserPlus className="w-4 h-4" />
            <span>Add New Staff Member</span>
          </button>
        )}
      </div>

      {/* Role permission matrix explanation banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
          <span className="font-bold text-purple-900 block text-sm">Admin Role</span>
          <p className="text-purple-700 mt-1">
            Controls the whole system: products, plans, tax rules, discount rules, staff member onboarding, and executive finance ledger.
          </p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <span className="font-bold text-blue-900 block text-sm">Internal Staff Role</span>
          <p className="text-blue-700 mt-1">
            Handles day-to-day work: creates quotes & subscriptions from templates, bills invoices, and registers payments with limited system config access.
          </p>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
          <span className="font-bold text-emerald-900 block text-sm">Customer Portal Role</span>
          <p className="text-emerald-700 mt-1">
            Self-service portal: sees only their own subscriptions and invoices without having to email anyone. Can pause/renew as plan rules permit.
          </p>
        </div>
      </div>

      {/* Team table */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700">All Registered Accounts & Team Roster</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-600 border-b border-slate-200 uppercase font-semibold">
              <tr>
                <th className="py-3 px-4">User</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Company / Organization</th>
                <th className="py-3 px-4">Role</th>
                <th className="py-3 px-4">Phone</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {users.map((u) => (
                <tr key={u.id} className="hover:bg-slate-50/50">
                  <td className="py-3.5 px-4 font-bold text-slate-900">
                    {u.name}
                  </td>
                  <td className="py-3.5 px-4 font-mono text-slate-600">
                    {u.email}
                  </td>
                  <td className="py-3.5 px-4 text-slate-600">
                    {u.company_name || 'Brightloop Internal'}
                  </td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      u.role === 'admin' ? 'bg-purple-100 text-purple-800 border border-purple-200' :
                      u.role === 'staff' ? 'bg-blue-100 text-blue-800 border border-blue-200' :
                      'bg-emerald-100 text-emerald-800 border border-emerald-200'
                    }`}>
                      {u.role}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-500">
                    {u.phone || '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Staff Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 space-y-4">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <h3 className="text-lg font-black text-slate-900">Add Internal Staff Member</h3>
              <button onClick={() => setShowModal(false)} className="text-slate-400 font-bold">✕</button>
            </div>

            <form onSubmit={handleCreateStaff} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  placeholder="e.g. David Miller"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-slate-300 rounded px-3 py-2 text-slate-900"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Staff Email Address *</label>
                <input
                  type="email"
                  placeholder="e.g. david.sales@brightloop.io"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-slate-300 rounded px-3 py-2 text-slate-900"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Direct Phone</label>
                <input
                  type="text"
                  placeholder="+1 (800) 555-0188"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-slate-300 rounded px-3 py-2 text-slate-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Initial Password * (&gt;8 chars, 1 uppercase, 1 lowercase, 1 special char)
                </label>
                <input
                  type="password"
                  placeholder="e.g. StaffPassword!2026"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-slate-300 rounded px-3 py-2 text-slate-900 font-mono"
                  required
                />
              </div>

              <div className="flex justify-end space-x-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-3.5 py-2 border border-slate-300 rounded font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-4 py-2 bg-purple-700 hover:bg-purple-800 text-white rounded font-bold shadow-sm"
                >
                  Create Staff Account
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
