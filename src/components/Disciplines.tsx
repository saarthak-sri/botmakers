export default function Disciplines() {
  const disciplines = [
    {
      id: 1,
      title: 'Robo Race',
      image: '/images/f9bf39de8df88d4ca075a3271026b53474751745.jpg',
      description: 'Navigate complex obstacle courses and terrain changes in the fastest time.'
    },
    {
      id: 2,
      title: 'Line Follower',
      image: '/images/fa9e6a9bfa678a4d714d3810a4e4bae186552134.jpg',
      description: 'High speed grid tracking and path planning with zero human controls.'
    },
    {
      id: 3,
      title: 'RC Racing',
      image: '/images/5a9c6733ddf8f7ab34e230bea014b19240514e58.jpg',
      description: 'Off-road radio-controlled high-speed buggy racing on sand/dirt tracks.'
    },
    {
      id: 4,
      title: 'FPV Drone Racing',
      image: '/images/d8e1d46366e62e27ff8cd1809221962f70220abf.jpg',
      description: 'Fly quadcopters through high-speed air gates under first-person headsets.'
    },
    {
      id: 5,
      title: 'Robo Hockey',
      image: '/images/10e8a897ef4abee14e93aca4d3868315d661882a.jpg',
      description: 'Team sports where autonomous strikers score pucks on a mechanical turf.'
    },
    {
      id: 6,
      title: 'Robo War',
      image: '/images/hero_combat.png',
      description: 'The main event. Heavy weapons, metal armor, and direct kinetic collisions.'
    },
    {
      id: 7,
      title: 'AI Simulation',
      image: '/images/blueprint.png',
      description: 'Simulate virtual battles and navigation algorithms in ROS physics environments.'
    },
    {
      id: 8,
      title: 'Aeromodelling',
      image: '/images/blueprint.png',
      description: 'Fixed-wing custom designs flying payload delivery and stunt maneuvers.'
    }
  ];

  return (
    <section className="py-20 px-6 border-b border-white/5 bg-[#08080d]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <span className="font-orbitron font-bold text-xs uppercase tracking-widest text-neon-red">
            SPORTS
          </span>
          <h2 className="font-orbitron font-extrabold text-3xl sm:text-5xl mt-2 text-white">
            COMPETITION DISCIPLINES
          </h2>
          <div className="w-20 h-1 bg-neon-red mt-4 mx-auto md:mx-0" />
        </div>

        {/* 8-Card Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {disciplines.map((item) => (
            <div 
              key={item.id}
              className="group relative h-64 rounded-xl overflow-hidden border border-white/5 bg-[#0d0d12] hover:border-neon-red/50 hover:shadow-[0_0_20px_rgba(255,59,48,0.25)] transition-all duration-300 cursor-pointer"
            >
              {/* Discipline Background Image */}
              <img 
                src={`${import.meta.env.BASE_URL}${item.image.startsWith('/') ? item.image.slice(1) : item.image}`} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Vignette Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
              
              {/* Top small decoration dot */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-neon-red opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-glow" />

              {/* Card Contents */}
              <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end">
                <span className="font-orbitron font-black text-[10px] text-neon-red tracking-widest uppercase">
                  DISCIPLINE 0{item.id}
                </span>
                
                <h3 className="font-orbitron font-extrabold text-base text-white mt-1 group-hover:text-glow-red transition-all duration-200">
                  {item.title}
                </h3>
                
                <p className="font-outfit text-xs text-gray-400 mt-2 max-h-0 opacity-0 overflow-hidden group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 ease-in-out leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
