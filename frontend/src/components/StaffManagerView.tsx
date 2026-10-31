import React, { useState, useEffect } from 'react';
import { api } from '../api';
import { User } from '../types';
import { ShieldCheck, UserPlus } from 'lucide-react';

interface StaffManagerViewProps {
  currentUser: User | null;
}

export const StaffManagerView: React.FC<StaffManagerViewProps> = ({ currentUser }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [showModal, setShowModal] = useState(false);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const isAdmin = currentUser?.role === 'admin';

  const loadUsers = async () => {
    try {
      const data = await api.getUsers();
      setUsers(data);
    } catch (err) {
      console.error('Error fetching users:', err);
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
      alert('New staff member onboarded successfully!');
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
          <h1 className="text-2xl font-serif font-black text-burgundy-950 tracking-tight flex items-center space-x-2">
            <ShieldCheck className="w-7 h-7 text-gold-600" />
            <span>Staff & Team Access Governance</span>
          </h1>
          <p className="text-cream-700 text-sm">
            Strict role-based access control. "Only the admin can add a new member of staff."
          </p>
        </div>

        {isAdmin && (
          <button
            onClick={() => setShowModal(true)}
            className="bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-gold-300 border border-gold-400/60 font-serif font-bold text-sm px-4 py-2.5 rounded-xl shadow-gold-subtle flex items-center space-x-2 transition duration-200"
          >
            <UserPlus className="w-4 h-4 text-gold-400" />
            <span>Onboard New Staff Member</span>
          </button>
        )}
      </div>

      {/* Role permission matrix cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
        <div className="cream-card rounded-2xl p-5 shadow-sm border border-gold-400/50">
          <span className="font-serif font-black text-burgundy-950 block text-sm">Executive Admin</span>
          <p className="text-cream-800 mt-1.5 leading-relaxed">
            Full governance across the system: products, pricing plans, automated tax rules, discount rules, staff invitations, and executive financial ledgers.
          </p>
        </div>
        <div className="cream-card rounded-2xl p-5 shadow-sm border border-gold-400/30">
          <span className="font-serif font-black text-burgundy-950 block text-sm">Internal Staff Team</span>
          <p className="text-cream-800 mt-1.5 leading-relaxed">
            Handles day-to-day work: builds quotes from templates, manages subscriptions, bills recurring cycles, and registers payments with limited system config access.
          </p>
        </div>
        <div className="cream-card rounded-2xl p-5 shadow-sm border border-gold-400/30">
          <span className="font-serif font-black text-burgundy-950 block text-sm">Customer Self-Service</span>
          <p className="text-cream-800 mt-1.5 leading-relaxed">
            Direct portal: customers see only their own subscriptions and invoices without emailing anyone. Can pause/renew as plan lifecycle rules permit.
          </p>
        </div>
      </div>

      {/* Team table */}
      <div className="cream-card rounded-2xl overflow-hidden shadow-cinematic">
        <div className="px-6 py-4.5 bg-gradient-to-r from-cream-100 to-cream-50 border-b border-gold-500/20 flex justify-between items-center">
          <h2 className="text-sm font-serif font-bold uppercase tracking-wider text-burgundy-950">
            Registered Accounts & Personnel Roster
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-cream-100/70 text-burgundy-950 border-b border-gold-500/20 uppercase font-serif tracking-wider font-bold">
              <tr>
                <th className="py-3.5 px-5">Personnel Name</th>
                <th className="py-3.5 px-5">Email Identifier</th>
                <th className="py-3.5 px-5">Organization / Unit</th>
                <th className="py-3.5 px-5">Role Badge</th>
                <th className="py-3.5 px-5">Phone Contact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold-500/10">
              {users.map((u) => (
                <tr key={u.id} className="hover:bg-gold-50/40 transition">
                  <td className="py-4 px-5 font-serif font-bold text-burgundy-950">
                    {u.name}
                  </td>
                  <td className="py-4 px-5 font-mono text-cream-800">
                    {u.email}
                  </td>
                  <td className="py-4 px-5 text-cream-700">
                    {u.company_name || 'Brightloop Internal Staff'}
                  </td>
                  <td className="py-4 px-5">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                      u.role === 'admin' ? 'bg-gold-100 text-burgundy-950 border-gold-400 font-serif' :
                      u.role === 'staff' ? 'bg-burgundy-100 text-burgundy-900 border-burgundy-300 font-serif' :
                      'bg-cream-200 text-cream-800 border-cream-300'
                    }`}>
                      {u.role}
                    </span>
                  </td>
                  <td className="py-4 px-5 text-cream-600">
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
        <div className="fixed inset-0 bg-burgundy-950/75 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="cream-card rounded-2xl shadow-cinematic-lg max-w-md w-full p-6 space-y-4 border border-gold-400">
            <div className="flex justify-between items-center border-b border-gold-500/20 pb-3">
              <h3 className="text-xl font-serif font-black text-burgundy-950">Onboard Internal Staff</h3>
              <button onClick={() => setShowModal(false)} className="text-burgundy-800 font-bold text-lg">✕</button>
            </div>

            <form onSubmit={handleCreateStaff} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-serif font-bold text-burgundy-950 mb-1">Full Name *</label>
                <input
                  type="text"
                  placeholder="e.g. David Miller"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gold-500/30 rounded-lg px-3 py-2 text-burgundy-950 bg-white"
                  required
                />
              </div>

              <div>
                <label className="block font-serif font-bold text-burgundy-950 mb-1">Staff Email Address *</label>
                <input
                  type="email"
                  placeholder="e.g. david.sales@brightloop.io"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gold-500/30 rounded-lg px-3 py-2 text-burgundy-950 bg-white"
                  required
                />
              </div>

              <div>
                <label className="block font-serif font-bold text-burgundy-950 mb-1">Direct Phone</label>
                <input
                  type="text"
                  placeholder="+1 (800) 555-0188"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-gold-500/30 rounded-lg px-3 py-2 text-burgundy-950 bg-white"
                />
              </div>

              <div>
                <label className="block font-serif font-bold text-burgundy-950 mb-1">
                  Initial Password * (&gt;8 chars, 1 uppercase, 1 lowercase, 1 special char)
                </label>
                <input
                  type="password"
                  placeholder="StaffPassword!2026"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gold-500/30 rounded-lg px-3 py-2 text-burgundy-950 font-mono bg-white"
                  required
                />
              </div>

              <div className="flex justify-end space-x-2 pt-3 border-t border-gold-500/20">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border border-gold-500/30 rounded-xl font-serif font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-4 py-2 bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-gold-300 border border-gold-400 rounded-xl font-serif font-bold shadow-sm"
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
