import { Cpu, Target, Fingerprint, Compass } from 'lucide-react';

export default function WhatIsBotleague() {
  const pillars = [
    {
      id: 1,
      title: 'STRUCTURED EVENTS',
      description: 'Focus on skills development and standard guidelines for students across the nation. Experience real-world structural engineering.',
      icon: Cpu,
      color: 'text-neon-blue',
      bgColor: 'bg-neon-blue/5',
      borderColor: 'border-neon-blue/20'
    },
    {
      id: 2,
      title: 'NATIONAL RANKING',
      description: 'Benchmarked against standard international rules and competition difficulty levels. Earn rank recognition badges.',
      icon: Target,
      color: 'text-neon-red',
      bgColor: 'bg-neon-red/5',
      borderColor: 'border-neon-red/20'
    },
    {
      id: 3,
      title: 'DIGITAL IDENTITY',
      description: 'Your professional robotics career history stored on the decentralized ledger. Show off verifiable credentials, wins, and specs.',
      icon: Fingerprint,
      color: 'text-neon-orange',
      bgColor: 'bg-neon-orange/5',
      borderColor: 'border-neon-orange/20'
    },
    {
      id: 4,
      title: 'CAREER PATHWAY',
      description: 'Connecting the entire ecosystem of robotic professionals, colleges, corporate sponsors, and engineering career opportunities.',
      icon: Compass,
      color: 'text-neon-green',
      bgColor: 'bg-neon-green/5',
      borderColor: 'border-neon-green/20'
    }
  ];

  return (
    <section id="community" className="py-20 px-6 border-b border-white/5 bg-[#08080d]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="mb-16 text-center lg:text-left">
          <span className="font-orbitron font-bold text-xs uppercase tracking-widest text-neon-orange">
            ABOUT THE PLATFORM
          </span>
          <h2 className="font-orbitron font-extrabold text-3xl sm:text-5xl mt-2 text-white">
            WHAT IS BOTLEAGUE?
          </h2>
          <div className="w-20 h-1 bg-neon-orange mt-4 mx-auto lg:mx-0" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: 4 Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar) => {
              const PillarIcon = pillar.icon;
              return (
                <div 
                  key={pillar.id} 
                  className={`bg-[#0d0d12]/60 border ${pillar.borderColor} hover:border-white/20 p-6 rounded-xl hover:bg-[#0d0d12] transition-all duration-300 group`}
                >
                  <div className={`w-12 h-12 rounded-lg ${pillar.bgColor} flex items-center justify-center mb-5 border border-white/5 group-hover:scale-105 transition-transform duration-300`}>
                    <PillarIcon className={`w-6 h-6 ${pillar.color}`} />
                  </div>
                  
                  <span className="font-orbitron font-bold text-[10px] text-gray-500 tracking-wider">
                    0{pillar.id} / FEATURE
                  </span>
                  
                  <h3 className="font-orbitron font-extrabold text-sm sm:text-base text-white mt-2 group-hover:text-glow-blue transition-all duration-200">
                    {pillar.title}
                  </h3>
                  
                  <p className="font-outfit text-xs text-gray-400 mt-2 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: High-fidelity Blueprint Schematic Image */}
          <div className="relative flex justify-center items-center bg-[#0d0d12]/50 border border-white/5 p-8 rounded-xl min-h-[380px] overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
            
            {/* Blueprint Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f0ff_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-5 pointer-events-none" />
            
            {/* Animated Scanner Radar Line */}
            <div className="absolute left-0 right-0 h-[2px] bg-neon-blue/30 top-0 shadow-[0_0_10px_#00f0ff] animate-bounce" style={{ animationDuration: '4s' }} />

            {/* Render User Blueprint Image */}
            <img 
              src="/images/blueprint.png" 
              alt="Botleague blueprint schematic" 
              className="w-full max-w-[280px] h-auto object-contain z-10 transition-transform duration-500 hover:scale-105 filter drop-shadow-[0_0_15px_rgba(0,240,255,0.25)]"
            />
            
            {/* Real-time Telemetry Data Mock */}
            <div className="absolute bottom-4 left-6 right-6 flex justify-between font-mono text-[9px] text-gray-500">
              <span>SYSTEM: ONLINE</span>
              <span className="text-neon-green">VERIFIED: OK</span>
              <span>INDEX: 984-BL</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
