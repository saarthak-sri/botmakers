import { useState } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

interface NavbarProps {
  onNavClick: (sectionId: string) => void;
}

export default function Navbar({ onNavClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Events', id: 'events' },
    { name: 'Programs', id: 'programs' },
    { name: 'Community', id: 'community' },
    { name: 'Ranks', id: 'ranks' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#030303]/80 backdrop-blur-md border-b border-white/5 px-6 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Stylized Logo */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavClick('hero')}>
          <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-red-500 p-[1px] shadow-[0_0_15px_rgba(0,240,255,0.3)]">
            <div className="w-full h-full bg-[#0d0d12] rounded-[7px] flex items-center justify-center">
              <Cpu className="w-5 h-5 text-neon-blue animate-pulse" />
            </div>
          </div>
          <span className="font-orbitron font-black text-xl tracking-wider flex items-center">
            <span className="text-neon-blue italic">BOT</span>
            <span className="text-white font-light mx-[2px] italic">/</span>
            <span className="text-neon-red italic">LEAGUE</span>
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavClick(item.id)}
              className="font-orbitron text-sm font-medium text-gray-400 hover:text-white hover:text-glow-blue transition-all duration-200 cursor-pointer"
            >
              {item.name.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="font-orbitron text-sm font-semibold px-5 py-2 rounded border border-white/10 text-gray-300 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-200 cursor-pointer">
            LOGIN
          </button>
          <button className="font-orbitron text-sm font-bold px-5 py-2.5 rounded bg-gradient-to-r from-neon-red to-orange-600 text-white shadow-[0_0_15px_rgba(255,59,48,0.4)] hover:shadow-[0_0_25px_rgba(255,59,48,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer">
            REGISTER NOW
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0d0d12] border-b border-white/5 py-6 px-6 flex flex-col space-y-4 shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavClick(item.id);
                setIsOpen(false);
              }}
              className="font-orbitron text-left text-base font-semibold text-gray-400 hover:text-white py-2 transition-colors duration-200"
            >
              {item.name.toUpperCase()}
            </button>
          ))}
          <div className="h-[1px] bg-white/5 my-2" />
          <div className="flex flex-col space-y-3 pt-2">
            <button className="font-orbitron text-center py-2.5 rounded border border-white/10 text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200">
              LOGIN
            </button>
            <button className="font-orbitron text-center py-3 rounded bg-gradient-to-r from-neon-red to-orange-600 text-white font-bold shadow-[0_0_15px_rgba(255,59,48,0.3)]">
              REGISTER NOW
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
