import React, { useState } from 'react';
import { Hammer, Sword, Trophy, Users } from 'lucide-react';

export default function PathToLeague() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      number: 1,
      title: 'BUILD YOUR TEAM',
      icon: Hammer,
      color: 'text-neon-blue',
      glow: 'shadow-[0_0_20px_rgba(0,240,255,0.4)]',
      border: 'border-neon-blue/40',
      description: 'Form a squad of 2-5 builders, coders, and designers. Design your robot chassis and pick your hardware weapons.'
    },
    {
      number: 2,
      title: 'COMPETE ACROSS BLOCKS',
      icon: Sword,
      color: 'text-neon-red',
      glow: 'shadow-[0_0_20px_rgba(255,59,48,0.4)]',
      border: 'border-neon-red/40',
      description: 'Fight in local qualifiers and block-level skirmishes. Test your robot armor and weapon reliability in arena combat.'
    },
    {
      number: 3,
      title: 'RANK NATIONALLY',
      icon: Trophy,
      color: 'text-neon-orange',
      glow: 'shadow-[0_0_20px_rgba(255,159,10,0.4)]',
      border: 'border-neon-orange/40',
      description: 'Acquire Battle XP with every win. Climb the national leaderboards to qualify for regional and national playoffs.'
    },
    {
      number: 4,
      title: 'JOIN THE LEAGUE',
      icon: Users,
      color: 'text-neon-green',
      glow: 'shadow-[0_0_20px_rgba(48,209,88,0.4)]',
      border: 'border-neon-green/40',
      description: 'Unlock direct sponsorships, cash rewards, and professional corporate sponsorships in the major league.'
    }
  ];

  return (
    <section id="programs" className="py-20 px-6 border-b border-white/5 bg-[#030303] relative overflow-hidden">
      
      {/* Background visual grid elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2e_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <span className="font-orbitron font-bold text-xs uppercase tracking-widest text-neon-blue">
            LEAGUE JOURNEY
          </span>
          <h2 className="font-orbitron font-extrabold text-3xl sm:text-5xl mt-2 text-white">
            YOUR PATH TO THE LEAGUE
          </h2>
          <p className="font-outfit text-gray-500 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Learn • Participate • Grow Under Expert Professional Guidance
          </p>
          <div className="w-20 h-1 bg-neon-blue mt-4 mx-auto" />
        </div>

        {/* Stepper Grid Container */}
        <div className="relative">
          
          {/* Connecting Line for Large Screens */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-blue via-neon-red to-neon-green -translate-y-12 opacity-20" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const StepIcon = step.icon;

              return (
                <div
                  key={step.number}
                  className="flex flex-col items-center text-center group relative cursor-pointer"
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  
                  {/* Step Step Number */}
                  <span className="font-orbitron text-[10px] font-bold text-neon-red mb-2 uppercase tracking-widest">
                    STEP-0{step.number}
                  </span>

                  {/* Icon Circle Container */}
                  <div className={`relative w-20 h-20 rounded-full bg-[#0d0d12] border-2 ${step.border} flex items-center justify-center transition-all duration-300 ${step.glow} group-hover:scale-110 group-hover:border-white z-10`}>
                    
                    {/* Inner glowing pulse */}
                    <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <StepIcon className={`w-8 h-8 ${step.color} transition-transform duration-300 group-hover:rotate-12`} />

                    {/* Step tag */}
                    <div className="absolute -bottom-2 right-0 bg-[#15151e] border border-white/10 text-[9px] font-orbitron font-bold text-white px-2 py-0.5 rounded-full">
                      0{step.number}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-orbitron font-extrabold text-base text-white mt-6 tracking-wide">
                    {step.title}
                  </h3>

                  {/* Short Description */}
                  <p className="font-outfit text-xs text-gray-500 mt-2 max-w-[200px] leading-relaxed group-hover:text-gray-400 transition-colors duration-200">
                    {step.description}
                  </p>

                  {/* Connected line for medium screens (vertical visual guide) */}
                  {index < 3 && (
                    <div className="block lg:hidden h-8 w-[2px] bg-white/5 my-4" />
                  )}

                </div>
              );
            })}
          </div>

        </div>

        {/* Dynamic Detail Card at Bottom based on selection */}
        <div className="mt-16 bg-[#0d0d12] border border-white/5 rounded-xl p-8 max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-6 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <div className="w-16 h-16 rounded-full bg-[#15151e] border border-white/10 flex items-center justify-center shrink-0">
            {activeStep !== null ? (
              React.createElement(steps[activeStep].icon, {
                className: `w-8 h-8 ${steps[activeStep].color}`
              })
            ) : (
              <Trophy className="w-8 h-8 text-neon-red animate-pulse" />
            )}
          </div>
          <div className="text-center md:text-left">
            <h4 className="font-orbitron font-bold text-lg text-white">
              {activeStep !== null ? steps[activeStep].title : 'CHAMPIONSHIP ROADMAP'}
            </h4>
            <p className="font-outfit text-sm text-gray-400 mt-1 leading-relaxed">
              {activeStep !== null 
                ? steps[activeStep].description 
                : 'Hover over or tap the steps above to inspect the specific activities, preparation, rules, and benefits associated with each stage of the league championship pathway.'
              }
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
