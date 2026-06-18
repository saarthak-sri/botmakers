import { useState } from 'react';
import { Play, Calendar, MapPin, Award, Trophy } from 'lucide-react';

interface MatchNode {
  id: string;
  team1: { name: string; score?: number; logo?: string; winner?: boolean };
  team2: { name: string; score?: number; logo?: string; winner?: boolean };
  status: 'live' | 'upcoming' | 'completed';
  time?: string;
}

export default function Events() {
  // Mock bracket state
  const [activeBracketMatch, setActiveBracketMatch] = useState<string | null>(null);

  const bracketMatches: { [key: string]: MatchNode } = {
    semi1: {
      id: 'semi1',
      team1: { name: 'Titan Force', score: 4, winner: true },
      team2: { name: 'Giga Spinner', score: 2 },
      status: 'completed',
      time: 'Ended'
    },
    semi2: {
      id: 'semi2',
      team1: { name: 'Ares Combat', score: 5, winner: true },
      team2: { name: 'Tombstone II', score: 3 },
      status: 'completed',
      time: 'Ended'
    },
    final: {
      id: 'final',
      team1: { name: 'Titan Force', score: 1 },
      team2: { name: 'Ares Combat', score: 2, winner: true },
      status: 'live',
      time: 'Round 3 (Live)'
    }
  };

  const upcomingEvents = [
    {
      id: 1,
      title: 'Event in Mumbai',
      date: 'Oct 20, 2026',
      time: '10:00 AM',
      venue: 'IIT Bombay Arena',
      discipline: 'Robo War & RC Racing',
      fee: 'FREE',
      slots: '14 Slots Left'
    },
    {
      id: 2,
      title: 'Event in Delhi',
      date: 'Nov 05, 2026',
      time: '09:00 AM',
      venue: 'IIT Delhi Sports Hall',
      discipline: 'FPV Drones & Line Follower',
      fee: 'FREE',
      slots: '8 Slots Left'
    }
  ];

  const pastResults = [
    {
      id: 1,
      title: 'Bengaluru Regionals',
      date: 'Oct 12-14, 2026',
      winner: 'Ares Combat',
      runnerUp: 'Titan Force',
      category: 'Pro Robo War'
    },
    {
      id: 2,
      title: 'Kolkata Qualifiers',
      date: 'Sep 25-27, 2026',
      winner: 'Blaze Runner',
      runnerUp: 'Line Master',
      category: 'Line Follower'
    },
    {
      id: 3,
      title: 'Chennai Cup',
      date: 'Sep 10-12, 2026',
      winner: 'Sky Racer',
      runnerUp: 'FPV Falcon',
      category: 'FPV Drone Racing'
    }
  ];

  return (
    <section id="events" className="py-20 px-6 border-b border-white/5 bg-[#030303]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <span className="font-orbitron font-bold text-xs uppercase tracking-widest text-neon-red">
            PRO CHAMPIONSHIPS
          </span>
          <h2 className="font-orbitron font-extrabold text-3xl sm:text-5xl mt-2 text-white">
            COMPETITIONS & EVENTS
          </h2>
          <div className="w-20 h-1 bg-neon-red mt-4 mx-auto md:mx-0" />
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* 1. LIVE NOW COLUMN */}
          <div className="bg-[#0d0d12] border border-white/5 rounded-xl p-6 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 left-0 w-[4px] h-full bg-neon-red" />
            
            {/* Column Title */}
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-orbitron font-bold text-lg text-white flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-red opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-red"></span>
                </span>
                LIVE NOW
              </h3>
              <span className="font-outfit text-xs text-gray-500 uppercase font-semibold">
                Bengaluru Regionals
              </span>
            </div>

            {/* Bracket Structure Container */}
            <div className="flex-1 flex flex-col justify-center py-4 relative">
              <div className="grid grid-cols-2 gap-4 items-center relative">
                
                {/* Round 1: Semifinals */}
                <div className="flex flex-col space-y-16">
                  {/* Semifinal 1 */}
                  <div 
                    onClick={() => setActiveBracketMatch('semi1')}
                    className={`p-3 rounded-lg border text-sm transition-all duration-200 cursor-pointer ${
                      activeBracketMatch === 'semi1' ? 'border-neon-red bg-white/5' : 'border-white/5 bg-[#15151e]'
                    }`}
                  >
                    <div className="font-orbitron text-[10px] text-gray-500 font-bold mb-1">SEMIFINAL 1</div>
                    <div className={`flex justify-between items-center ${bracketMatches.semi1.team1.winner ? 'text-white font-semibold' : 'text-gray-500'}`}>
                      <span>{bracketMatches.semi1.team1.name}</span>
                      <span>{bracketMatches.semi1.team1.score}</span>
                    </div>
                    <div className={`flex justify-between items-center mt-1.5 ${bracketMatches.semi1.team2.winner ? 'text-white font-semibold' : 'text-gray-500'}`}>
                      <span>{bracketMatches.semi1.team2.name}</span>
                      <span>{bracketMatches.semi1.team2.score}</span>
                    </div>
                  </div>

                  {/* Semifinal 2 */}
                  <div 
                    onClick={() => setActiveBracketMatch('semi2')}
                    className={`p-3 rounded-lg border text-sm transition-all duration-200 cursor-pointer ${
                      activeBracketMatch === 'semi2' ? 'border-neon-red bg-white/5' : 'border-white/5 bg-[#15151e]'
                    }`}
                  >
                    <div className="font-orbitron text-[10px] text-gray-500 font-bold mb-1">SEMIFINAL 2</div>
                    <div className={`flex justify-between items-center ${bracketMatches.semi2.team1.winner ? 'text-white font-semibold' : 'text-gray-500'}`}>
                      <span>{bracketMatches.semi2.team1.name}</span>
                      <span>{bracketMatches.semi2.team1.score}</span>
                    </div>
                    <div className={`flex justify-between items-center mt-1.5 ${bracketMatches.semi2.team2.winner ? 'text-white font-semibold' : 'text-gray-500'}`}>
                      <span>{bracketMatches.semi2.team2.name}</span>
                      <span>{bracketMatches.semi2.team2.score}</span>
                    </div>
                  </div>
                </div>

                {/* Round 2: Finals */}
                <div className="flex flex-col justify-center pl-6 relative">
                  {/* Connective Bracket SVG Lines */}
                  <div className="absolute left-0 top-0 bottom-0 w-6 flex items-center">
                    <svg className="w-full h-full text-white/10" viewBox="0 0 24 120" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M 0,25 L 12,25 L 12,95 L 0,95 M 12,60 L 24,60" />
                    </svg>
                  </div>

                  {/* Final Match Card */}
                  <div 
                    onClick={() => setActiveBracketMatch('final')}
                    className={`p-3 rounded-lg border text-sm relative transition-all duration-200 cursor-pointer ${
                      activeBracketMatch === 'final' ? 'border-neon-red bg-white/5 shadow-[0_0_15px_rgba(255,59,48,0.2)] animate-pulse-glow' : 'border-neon-blue bg-[#15151e]/80 shadow-[0_0_10px_rgba(0,240,255,0.15)]'
                    }`}
                  >
                    <div className="font-orbitron text-[10px] text-neon-blue font-bold mb-1 flex items-center justify-between">
                      <span>GRAND FINAL</span>
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-neon-red animate-ping" />
                    </div>
                    <div className="flex justify-between items-center text-white">
                      <span>{bracketMatches.final.team1.name}</span>
                      <span className="text-gray-400">{bracketMatches.final.team1.score}</span>
                    </div>
                    <div className="flex justify-between items-center mt-1.5 text-white font-semibold">
                      <span>{bracketMatches.final.team2.name}</span>
                      <span className="text-neon-red">{bracketMatches.final.team2.score}</span>
                    </div>
                    <div className="text-[9px] text-right text-gray-500 mt-2 font-orbitron">{bracketMatches.final.time}</div>
                  </div>
                </div>

              </div>

              {/* Dynamic Info Drawer on Click */}
              {activeBracketMatch && (
                <div className="mt-6 p-3 bg-[#15151e] border border-white/5 rounded-lg text-xs animate-in fade-in slide-in-from-bottom-2">
                  <div className="font-orbitron font-bold text-white mb-1 uppercase text-glow-blue">
                    Match Details ({activeBracketMatch})
                  </div>
                  <div className="text-gray-400">
                    {activeBracketMatch === 'final' ? (
                      <p>Currently in Arena 1. High energy weapon clash! Team Ares is leading with their vertical spinner weapon.</p>
                    ) : (
                      <p>Match completed. Ares Combat won via Knockout (KO) in 2m 14s. Titanium wedge proved unstoppable.</p>
                    )}
                  </div>
                  <button 
                    onClick={(e) => { e.stopPropagation(); setActiveBracketMatch(null); }}
                    className="mt-2 text-[10px] font-bold text-neon-red hover:underline uppercase"
                  >
                    Close Details
                  </button>
                </div>
              )}
            </div>
            
            {/* Live stream CTA */}
            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-gray-500">Live audience: 14.2k</span>
              <a href="#live-watch" className="font-orbitron text-xs font-bold text-neon-red flex items-center gap-1 hover:underline">
                <Play className="w-3 h-3 fill-current" /> WATCH STREAM
              </a>
            </div>

          </div>

          {/* 2. UPCOMING COLUMN */}
          <div className="bg-[#0d0d12] border border-white/5 rounded-xl p-6 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 left-0 w-[4px] h-full bg-neon-orange" />
            
            <div className="mb-6">
              <h3 className="font-orbitron font-bold text-lg text-white">UPCOMING</h3>
              <p className="text-xs text-gray-500 mt-1">Register before registration closes</p>
            </div>

            <div className="flex-1 flex flex-col space-y-4">
              {upcomingEvents.map((evt) => (
                <div key={evt.id} className="bg-[#15151e] border border-white/5 p-4 rounded-lg hover:border-white/10 transition-colors duration-200">
                  <div className="flex justify-between items-start">
                    <h4 className="font-orbitron font-bold text-sm text-white">{evt.title}</h4>
                    <span className="bg-neon-orange/10 border border-neon-orange/20 text-neon-orange text-[9px] font-bold px-2 py-0.5 rounded font-orbitron">
                      {evt.fee}
                    </span>
                  </div>
                  
                  <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gray-500" />
                      <span>{evt.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-gray-500" />
                      <span className="truncate">{evt.venue}</span>
                    </div>
                  </div>

                  <div className="mt-2 text-xs text-gray-500 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-gray-600" />
                    <span>{evt.discipline}</span>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[10px] text-neon-orange font-bold uppercase">{evt.slots}</span>
                    <button className="font-orbitron text-xs font-bold px-4 py-1.5 bg-gradient-to-r from-neon-red to-orange-500 hover:from-neon-red/90 hover:to-orange-500/90 text-white rounded transition-all duration-200">
                      REGISTER
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* 3. PAST RESULTS COLUMN */}
          <div className="bg-[#0d0d12] border border-white/5 rounded-xl p-6 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 left-0 w-[4px] h-full bg-neon-blue" />
            
            <div className="mb-6">
              <h3 className="font-orbitron font-bold text-lg text-white">PAST RESULTS</h3>
              <p className="text-xs text-gray-500 mt-1">Standings and final battles from last round</p>
            </div>

            <div className="flex-1 flex flex-col space-y-4">
              {pastResults.map((res) => (
                <div key={res.id} className="bg-[#15151e] border border-white/5 p-4 rounded-lg text-xs hover:border-white/10 transition-colors duration-200">
                  <div className="flex justify-between items-center">
                    <span className="font-orbitron font-bold text-gray-400 uppercase text-[10px]">{res.category}</span>
                    <span className="text-gray-500 font-semibold">{res.date}</span>
                  </div>
                  
                  <h4 className="font-orbitron font-bold text-sm text-white mt-1">{res.title}</h4>
                  
                  <div className="mt-3 flex items-center justify-between border-t border-white/5 pt-2">
                    <div className="flex items-center gap-1">
                      <Trophy className="w-3.5 h-3.5 text-neon-orange" />
                      <span className="text-white font-medium">{res.winner}</span>
                    </div>
                    <span className="text-gray-500 text-[10px]">WINNER</span>
                  </div>

                  <div className="mt-1 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-gray-500" />
                      <span className="text-gray-400">{res.runnerUp}</span>
                    </div>
                    <span className="text-gray-500 text-[10px]">2ND PLACE</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
