import { Cpu } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#030303] py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Side: Brand Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1.5">
          <span className="font-orbitron font-extrabold text-lg tracking-wider text-white flex items-center gap-2 select-none">
            <Cpu className="w-5 h-5 text-neon-blue animate-pulse" />
            <span className="text-neon-blue">BOT</span>
            <span className="text-neon-red">LEAGUE</span>
          </span>
          <p className="font-outfit text-xs text-gray-500">
            © {new Date().getFullYear()} BOTLEAGUE. Built with React + Tailwind v4. All rights reserved.
          </p>
        </div>

        {/* Right Side: Social SVGs */}
        <div className="flex items-center space-x-6">
          {/* YouTube */}
          <a 
            href="#youtube" 
            className="text-gray-500 hover:text-[#ff0000] hover:drop-shadow-[0_0_8px_rgba(255,0,0,0.6)] transition-all duration-200"
            aria-label="YouTube"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.528 3.545 12 3.545 12 3.545s-7.528 0-9.388.51c-1.16.317-2.07 1.223-2.11 2.108-.51 1.86-.51 5.76-.51 5.76s0 3.9.51 5.76a3.003 3.003 0 0 0 2.11 2.108c1.86.51 9.388.51 9.388.51s7.53 0 9.388-.51a3.003 3.003 0 0 0 2.11-2.108c.51-1.86.51-5.76.51-5.76s0-3.9-.51-5.76zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a 
            href="#instagram" 
            className="text-gray-500 hover:text-[#e1306c] hover:drop-shadow-[0_0_8px_rgba(225,48,108,0.6)] transition-all duration-200"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>

          {/* Facebook */}
          <a 
            href="#facebook" 
            className="text-gray-500 hover:text-[#1877f2] hover:drop-shadow-[0_0_8px_rgba(24,119,242,0.6)] transition-all duration-200"
            aria-label="Facebook"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>

          {/* Twitter (X) */}
          <a 
            href="#twitter" 
            className="text-gray-500 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all duration-200"
            aria-label="Twitter"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
}
