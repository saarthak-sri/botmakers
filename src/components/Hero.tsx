import { ChevronRight } from 'lucide-react';

interface HeroProps {
  onExploreEvents: () => void;
}

export default function Hero({ onExploreEvents }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-white/5 py-12 px-6">
      
      {/* Background Image with Dark Vignette Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 ease-out hover:scale-105"
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/hero_combat.png')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/70 to-[#030303]/90" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/30 to-[#030303] pointer-events-none" />

      {/* Decorative Neon Lines */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-50" />
      <div className="absolute top-0 left-1/4 w-[1px] h-32 bg-gradient-to-b from-neon-blue/40 to-transparent" />
      <div className="absolute top-0 right-1/4 w-[1px] h-32 bg-gradient-to-b from-neon-red/40 to-transparent" />

      {/* Content Area */}
      <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center z-10">
        
        {/* Live Broadcast Badge */}
        <div className="mb-6 inline-flex items-center space-x-2 bg-black/80 border border-neon-red/30 px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(255,59,48,0.15)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-red opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-red"></span>
          </span>
          <span className="font-orbitron font-semibold text-xs tracking-wider text-white">
            LIVE: EPISODE 14 • BENGALURU REGIONALS
          </span>
          <span className="text-gray-500 font-light px-1">|</span>
          <a href="#live-watch" className="font-orbitron font-bold text-xs text-neon-red hover:text-white flex items-center gap-0.5 transition-colors duration-200">
            WATCH LIVE <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Hero Title */}
        <h1 className="font-orbitron font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] text-white select-none">
          INDIA'S ULTIMATE
          <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-neon-red via-orange-500 to-neon-orange drop-shadow-[0_2px_15px_rgba(255,59,48,0.4)]">
            ROBOTICS ARENA
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="mt-8 font-outfit text-base sm:text-xl md:text-2xl text-gray-400 max-w-3xl font-light tracking-wide leading-relaxed">
          Build. Compete. Rank. The National Ecosystem for Robotics Arena.
          <span className="block text-sm sm:text-base text-gray-500 mt-2 font-medium">
            Join thousands of roboticists, build state-of-the-art combat bots, and climb the leaderboards.
          </span>
        </p>

        {/* Hero Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button className="font-orbitron w-full sm:w-64 font-bold text-base tracking-wider py-4 rounded bg-gradient-to-r from-neon-red to-orange-600 text-white shadow-[0_0_20px_rgba(255,59,48,0.35)] hover:shadow-[0_0_35px_rgba(255,59,48,0.6)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer">
            CREATE ACCOUNT
          </button>
          
          <button 
            onClick={onExploreEvents}
            className="font-orbitron w-full sm:w-64 font-bold text-base tracking-wider py-4 rounded border border-white/20 text-white hover:bg-white/5 hover:border-white/50 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            EXPLORE EVENTS
          </button>
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl border-t border-white/5 pt-10 text-center">
          <div>
            <div className="font-orbitron text-2xl md:text-3xl font-extrabold text-neon-blue">500+</div>
            <div className="font-outfit text-xs text-gray-500 uppercase tracking-widest mt-1">Teams Enrolled</div>
          </div>
          <div>
            <div className="font-orbitron text-2xl md:text-3xl font-extrabold text-neon-red">25+</div>
            <div className="font-outfit text-xs text-gray-500 uppercase tracking-widest mt-1">Live Events Yearly</div>
          </div>
          <div>
            <div className="font-orbitron text-2xl md:text-3xl font-extrabold text-neon-orange">10L+</div>
            <div className="font-outfit text-xs text-gray-500 uppercase tracking-widest mt-1">Prize Pool (INR)</div>
          </div>
          <div>
            <div className="font-orbitron text-2xl md:text-3xl font-extrabold text-neon-green">4.9/5</div>
            <div className="font-outfit text-xs text-gray-500 uppercase tracking-widest mt-1">Competitor Rating</div>
          </div>
        </div>

      </div>
    </section>
  );
}
