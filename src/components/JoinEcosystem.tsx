import { useState } from 'react';
import { ShieldCheck } from 'lucide-react';

interface FormState {
  name: string;
  location: string;
  email: string;
}

export default function JoinEcosystem() {
  const [judgeForm, setJudgeForm] = useState<FormState>({ name: '', location: '', email: '' });
  const [volunteerForm, setVolunteerForm] = useState<FormState>({ name: '', location: '', email: '' });
  const [memberForm, setMemberForm] = useState<FormState>({ name: '', location: '', email: '' });

  const [submittedRole, setSubmittedRole] = useState<{ [key: string]: boolean }>({
    judge: false,
    volunteer: false,
    member: false
  });

  const handleSubmit = (e: React.FormEvent, role: 'judge' | 'volunteer' | 'member') => {
    e.preventDefault();
    
    // Simple verification check
    let form: FormState;
    if (role === 'judge') form = judgeForm;
    else if (role === 'volunteer') form = volunteerForm;
    else form = memberForm;

    if (!form.name || !form.location || !form.email) {
      alert("Please fill in all the details.");
      return;
    }

    // Trigger success overlay
    setSubmittedRole(prev => ({ ...prev, [role]: true }));

    // Reset after delay
    setTimeout(() => {
      if (role === 'judge') setJudgeForm({ name: '', location: '', email: '' });
      else if (role === 'volunteer') setVolunteerForm({ name: '', location: '', email: '' });
      else setMemberForm({ name: '', location: '', email: '' });
      setSubmittedRole(prev => ({ ...prev, [role]: false }));
    }, 5000);
  };

  const renderFormCard = (
    title: string,
    role: 'judge' | 'volunteer' | 'member',
    form: FormState,
    setForm: React.Dispatch<React.SetStateAction<FormState>>,
    accentColor: string,
    borderGlow: string
  ) => {
    const isSubmitted = submittedRole[role];

    return (
      <div className={`bg-[#0d0d12] border border-white/5 p-6 rounded-xl relative overflow-hidden transition-all duration-300 ${borderGlow}`}>
        
        {/* Decorative corner tag */}
        <div className={`absolute top-0 right-0 w-16 h-16 pointer-events-none overflow-hidden`}>
          <div className={`absolute top-2 -right-8 w-24 text-[7px] font-orbitron font-bold text-center text-white py-1 uppercase rotate-45 ${accentColor}`}>
            Active
          </div>
        </div>

        <h3 className="font-orbitron font-extrabold text-sm sm:text-base text-white tracking-widest text-center mb-6 uppercase">
          {title}
        </h3>

        {isSubmitted ? (
          <div className="min-h-[220px] flex flex-col items-center justify-center text-center animate-in fade-in zoom-in-95 duration-300">
            <div className="w-12 h-12 rounded-full bg-neon-green/10 border border-neon-green/30 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-neon-green animate-pulse" />
            </div>
            <h4 className="font-orbitron font-bold text-sm text-white uppercase tracking-wider">
              Application Filed!
            </h4>
            <p className="font-outfit text-xs text-gray-400 mt-2 max-w-[200px] leading-relaxed">
              Thank you for applying. Our operations team will reach out to verify your credentials.
            </p>
          </div>
        ) : (
          <form onSubmit={(e) => handleSubmit(e, role)} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))}
                required
                className="w-full bg-[#15151e] border border-white/5 focus:border-neon-blue focus:shadow-[0_0_8px_rgba(0,240,255,0.2)] rounded px-4 py-2.5 text-xs text-white placeholder-gray-500 font-outfit outline-none transition-all duration-200"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Location"
                value={form.location}
                onChange={(e) => setForm(prev => ({ ...prev, location: e.target.value }))}
                required
                className="w-full bg-[#15151e] border border-white/5 focus:border-neon-blue focus:shadow-[0_0_8px_rgba(0,240,255,0.2)] rounded px-4 py-2.5 text-xs text-white placeholder-gray-500 font-outfit outline-none transition-all duration-200"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
                required
                className="w-full bg-[#15151e] border border-white/5 focus:border-neon-blue focus:shadow-[0_0_8px_rgba(0,240,255,0.2)] rounded px-4 py-2.5 text-xs text-white placeholder-gray-500 font-outfit outline-none transition-all duration-200"
              />
            </div>

            <button
              type="submit"
              className="w-full font-orbitron text-xs font-bold py-3.5 mt-2 rounded bg-gradient-to-r from-neon-red to-orange-600 text-white shadow-[0_0_15px_rgba(255,59,48,0.25)] hover:shadow-[0_0_25px_rgba(255,59,48,0.5)] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              SIGN UP
            </button>
          </form>
        )}
      </div>
    );
  };

  return (
    <section className="py-20 px-6 border-b border-white/5 bg-[#08080d]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="font-orbitron font-bold text-xs uppercase tracking-widest text-neon-blue">
            GET INVOLVED
          </span>
          <h2 className="font-orbitron font-extrabold text-3xl sm:text-5xl mt-2 text-white">
            JOIN THE ECOSYSTEM
          </h2>
          <div className="w-20 h-1 bg-neon-blue mt-4 mx-auto" />
        </div>

        {/* 3 Forms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {renderFormCard(
            'Become a Judge',
            'judge',
            judgeForm,
            setJudgeForm,
            'bg-neon-blue',
            'hover:border-neon-blue/30 hover:shadow-[0_0_20px_rgba(0,240,255,0.1)]'
          )}
          {renderFormCard(
            'Volunteer',
            'volunteer',
            volunteerForm,
            setVolunteerForm,
            'bg-neon-red',
            'hover:border-neon-red/30 hover:shadow-[0_0_20px_rgba(255,59,48,0.1)]'
          )}
          {renderFormCard(
            'Community Member',
            'member',
            memberForm,
            setMemberForm,
            'bg-neon-orange',
            'hover:border-neon-orange/30 hover:shadow-[0_0_20px_rgba(255,159,10,0.1)]'
          )}
        </div>

      </div>
    </section>
  );
}
