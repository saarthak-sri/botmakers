export default function Sponsors() {
  const sponsors = [
    {
      name: 'Delhivery Robotics',
      logo: '/images/logo_delhivery.png'
    },
    {
      name: 'IIT Bombay',
      logo: '/images/logo_iitb.png'
    },
    {
      name: 'General Robotics',
      logo: '/images/logo_general.png'
    },
    {
      name: 'NIT Silchar',
      logo: '/images/logo_nits.png'
    },
    {
      name: 'IIT Delhi',
      logo: '/images/44812c3e2f5b1082bb41af1e5a346e5e1e1995a7.png'
    },
    {
      name: 'IIT Madras',
      logo: '/images/60c7b8dab737b0fb205fb5b0015442b472a94218.png'
    }
  ];

  return (
    <section className="py-16 px-6 border-b border-white/5 bg-[#030303]">
      <div className="max-w-7xl mx-auto">
        <h3 className="font-orbitron font-extrabold text-xs text-gray-500 text-center tracking-widest uppercase mb-10">
          SPONSORS & PARTNERS
        </h3>
        
        {/* Logos container */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
          {sponsors.map((sp) => (
            <div key={sp.name} className="flex flex-col items-center gap-3 group cursor-pointer">
              <div className="h-16 flex items-center justify-center filter grayscale contrast-125 brightness-75 hover:grayscale-0 hover:brightness-100 hover:contrast-100 transition-all duration-300">
                <img 
                  src={sp.logo} 
                  alt={sp.name} 
                  className="max-h-12 max-w-[120px] object-contain"
                  loading="lazy"
                />
              </div>
              <span className="font-orbitron text-[9px] font-bold text-gray-600 group-hover:text-white transition-colors duration-200 tracking-wider text-center uppercase">
                {sp.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
