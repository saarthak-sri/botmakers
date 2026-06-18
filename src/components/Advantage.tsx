import { useState, useEffect } from 'react';
import { Award, ShieldCheck, Briefcase, Zap, Trophy } from 'lucide-react';

interface LeaderboardEntry {
  rank: number;
  name: string;
  team: string;
  xp: number;
  status: 'up' | 'down' | 'same';
}

export default function Advantage() {
  const benefits = [
    {
      id: 1,
      title: 'NATIONAL RECOGNITION',
      description: 'Your profile and stats are globally indexed. Earn certified digital badges and titles endorsed by major technical institutions.',
      icon: Award,
      color: 'text-neon-blue',
      bgColor: 'bg-neon-blue/10'
    },
    {
      id: 2,
      title: 'FAIR JUDGING',
      description: 'Transparent computerized refereeing, automatic impact telemetry tracking sensors, and a veteran independent panel of judges.',
      icon: ShieldCheck,
      color: 'text-neon-red',
      bgColor: 'bg-neon-red/10'
    },
    {
      id: 3,
      title: 'CAREER OPPORTUNITIES',
      description: 'Direct recruitment pipeline. Major automation, aeronautics, and automotive conglomerates search our active talent profiles.',
      icon: Briefcase,
      color: 'text-neon-orange',
      bgColor: 'bg-neon-orange/10'
    },
    {
      id: 4,
      title: 'HIGH-ENERGY ECOSYSTEM',
      description: 'Heavy arena combat events, national media streams, live television coverage, and packed arenas of cheering robotics fans.',
      icon: Zap,
      color: 'text-neon-green',
      bgColor: 'bg-neon-green/10'
    }
  ];

  // Mock Leaderboard state with simulated live XP updates
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([
    { rank: 1, name: 'Aarav Mehta', team: 'Ares Combat', xp: 2450, status: 'same' },
    { rank: 2, name: 'Vikram Singh', team: 'Titan Force', xp: 2310, status: 'up' },
    { rank: 3, name: 'Priya Sharma', team: 'Sky Falcon', xp: 2280, status: 'down' },
    { rank: 4, name: 'Rohan Deshmukh', team: 'Blaze Runner', xp: 2150, status: 'same' },
    { rank: 5, name: 'Neha Patil', team: 'Line Master', xp: 1980, status: 'up' }
  ]);

  // Simulate small XP fluctuations to show active leaderboard
  useEffect(() => {
    const interval = setInterval(() => {
      setLeaderboardData(prev => {
        return prev.map(player => {
          // 30% chance to update a player's XP slightly
          if (Math.random() < 0.3) {
            const xpChange = Math.floor(Math.random() * 20) + 5;
            const newXp = player.xp + xpChange;
            const statusChange = Math.random() > 0.5 ? 'up' : 'same';
            return {
              ...player,
              xp: newXp,
              status: statusChange as any
            };
          }
          return player;
        }).sort((a, b) => b.xp - a.xp).map((player, idx) => ({
          ...player,
          rank: idx + 1
        }));
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="ranks" className="py-20 px-6 border-b border-white/5 bg-[#030303]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Benefits (7 Columns) */}
          <div className="lg:col-span-7">
            <span className="font-orbitron font-bold text-xs uppercase tracking-widest text-neon-red">
              WHY REGISTER?
            </span>
            <h2 className="font-orbitron font-extrabold text-3xl sm:text-5xl mt-2 text-white">
              THE LEAGUE ADVANTAGE
            </h2>
            <div className="w-20 h-1 bg-neon-red mt-4 mb-10" />

            <div className="space-y-8">
              {benefits.map((b) => {
                const BenefitIcon = b.icon;
                return (
                  <div key={b.id} className="flex gap-5 group">
                    <div className={`w-12 h-12 rounded-lg ${b.bgColor} border border-white/5 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-200`}>
                      <BenefitIcon className={`w-6 h-6 ${b.color}`} />
                    </div>
                    <div>
                      <h3 className="font-orbitron font-extrabold text-sm sm:text-base text-white tracking-wide group-hover:text-glow-blue transition-all duration-200">
                        {b.title}
                      </h3>
                      <p className="font-outfit text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed">
                        {b.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Glowing Leaderboard Component (5 Columns) */}
          <div className="lg:col-span-5 bg-[#0d0d12] border border-white/5 p-6 rounded-xl relative overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)]">
            
            {/* Header neon strip decorator */}
            <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-neon-blue via-neon-red to-neon-orange" />
            
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-orbitron font-extrabold text-base text-white tracking-widest flex items-center gap-2">
                <Trophy className="w-4 h-4 text-neon-orange animate-pulse" />
                LIVE LEADERBOARD
              </h3>
              <span className="text-[10px] font-mono text-neon-green bg-neon-green/10 border border-neon-green/20 px-2.5 py-0.5 rounded-full uppercase tracking-widest">
                ACTIVE
              </span>
            </div>

            {/* Leaderboard Table Entries */}
            <div className="space-y-3">
              {leaderboardData.map((player) => (
                <div 
                  key={player.name}
                  className="bg-[#15151e] border border-white/5 hover:border-white/10 p-3 rounded-lg flex items-center justify-between transition-all duration-200"
                >
                  <div className="flex items-center space-x-3.5">
                    
                    {/* Rank Badge */}
                    <div className={`w-6 h-6 rounded-md font-orbitron font-black text-xs flex items-center justify-center ${
                      player.rank === 1 ? 'bg-neon-orange/20 border border-neon-orange text-neon-orange' :
                      player.rank === 2 ? 'bg-neon-blue/20 border border-neon-blue text-neon-blue' :
                      player.rank === 3 ? 'bg-neon-red/20 border border-neon-red text-neon-red' :
                      'bg-white/5 border border-white/10 text-gray-500'
                    }`}>
                      {player.rank}
                    </div>

                    {/* Profile details */}
                    <div>
                      <div className="font-outfit text-xs font-semibold text-white">{player.name}</div>
                      <div className="font-orbitron text-[9px] text-gray-500 font-bold uppercase">{player.team}</div>
                    </div>

                  </div>

                  {/* Battle XP points */}
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-xs font-extrabold text-white">
                      {player.xp}
                    </span>
                    <span className="font-orbitron text-[9px] font-bold text-gray-500">XP</span>
                    
                    {/* Status marker */}
                    {player.status === 'up' && (
                      <span className="text-neon-green text-[9px] font-bold">▲</span>
                    )}
                    {player.status === 'down' && (
                      <span className="text-neon-red text-[9px] font-bold">▼</span>
                    )}
                    {player.status === 'same' && (
                      <span className="text-gray-600 text-[9px] font-bold">■</span>
                    )}
                  </div>

                </div>
              ))}
            </div>

            <div className="mt-5 text-center">
              <a 
                href="#full-ranks" 
                className="font-orbitron text-xs font-bold text-neon-blue hover:text-white uppercase tracking-wider transition-colors duration-200"
              >
                VIEW FULL RANKINGS &gt;
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
