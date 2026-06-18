import { useState } from 'react';
import { Lightbulb, UserCheck, Brain, ArrowUpRight } from 'lucide-react';

export default function Categories() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const categories = [
    {
      id: 1,
      title: 'MINI MAKERS',
      age: 'AGE 6+',
      level: 'Introductory Level',
      description: 'Laying the foundation of logic, spatial reasoning, and mechanical basic physics with simple brick kits, basic sensors, and block coding.',
      icon: 'M',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      borderGlow: 'hover:shadow-[0_0_25px_rgba(250,204,21,0.25)] hover:border-yellow-400/40',
      tagline: 'Start the spark'
    },
    {
      id: 2,
      title: 'JUNIOR INNOVATORS',
      age: 'AGE 10+',
      level: 'Intermediate Level',
      description: 'Diving into electronics, basic soldering, autonomous line follower navigation, and scratch/python logic interfaces.',
      icon: Lightbulb,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderGlow: 'hover:shadow-[0_0_25px_rgba(96,165,250,0.25)] hover:border-blue-400/40',
      tagline: 'Code & build autonomously'
    },
    {
      id: 3,
      title: 'YOUNG ENGINEERS',
      age: 'AGE 14+',
      level: 'Advanced Level',
      description: 'Designing fully custom structural sheets, high-torque metal-geared motors, FPV radio protocols, and speed control systems.',
      icon: UserCheck,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-400/10',
      borderGlow: 'hover:shadow-[0_0_25px_rgba(52,211,153,0.25)] hover:border-emerald-400/40',
      tagline: 'Design custom battleweights'
    },
    {
      id: 4,
      title: 'ROBO MINDS',
      age: 'COLLEGE & OPEN',
      level: 'Elite Category',
      description: 'Heavyweight combat robotics (up to 30kg), pneumatic flippers, spinning weapons, computer vision, and ROS-based controls.',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      borderGlow: 'hover:shadow-[0_0_25px_rgba(192,132,252,0.25)] hover:border-purple-400/40',
      tagline: 'Enter the heavy arena'
    }
  ];

  return (
    <section className="py-20 px-6 border-b border-white/5 bg-[#030303]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="font-orbitron font-bold text-xs uppercase tracking-widest text-neon-orange">
            AGE CLASSIFICATION
          </span>
          <h2 className="font-orbitron font-extrabold text-3xl sm:text-5xl mt-2 text-white">
            COMPETITION CATEGORIES
          </h2>
          <div className="w-20 h-1 bg-neon-orange mt-4 mx-auto" />
        </div>

        {/* 4-Card Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => {
            const isHovered = hoveredIndex === idx;
            
            return (
              <div
                key={cat.id}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`bg-[#0d0d12] border border-white/5 p-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 ${cat.borderGlow} flex flex-col justify-between min-h-[350px]`}
              >
                
                {/* Card Top: Level & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-orbitron text-[10px] font-bold text-gray-500 uppercase">
                      {cat.level}
                    </span>
                    <span className="font-orbitron text-xs font-extrabold text-white bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                      {cat.age}
                    </span>
                  </div>

                  {/* Visual Circle Icon */}
                  <div className={`w-14 h-14 rounded-full ${cat.bgColor} flex items-center justify-center mb-6 border border-white/5 shadow-inner`}>
                    {typeof cat.icon === 'string' ? (
                      <span className={`font-orbitron font-black text-2xl ${cat.color}`}>{cat.icon}</span>
                    ) : (
                      // Dynamically render Lucide Icon
                      cat.icon === Brain ? <Brain className={`w-7 h-7 ${cat.color}`} /> : <UserCheck className={`w-7 h-7 ${cat.color}`} />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-orbitron font-extrabold text-lg text-white tracking-wide">
                    {cat.title}
                  </h3>
                  
                  <span className={`text-[10px] font-semibold uppercase ${cat.color} tracking-wider mt-1 block`}>
                    {cat.tagline}
                  </span>

                  {/* Body Text */}
                  <p className="font-outfit text-xs text-gray-400 mt-4 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                {/* Card Bottom: Link Action */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest font-orbitron">
                    Explore Kits
                  </span>
                  
                  <a 
                    href={`#register-${cat.id}`}
                    className={`font-orbitron text-xs font-bold flex items-center gap-0.5 transition-colors duration-200 ${
                      isHovered ? cat.color + ' text-glow-blue' : 'text-neon-red'
                    }`}
                  >
                    READ MORE <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
