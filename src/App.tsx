import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './components/Events';
import PathToLeague from './components/PathToLeague';
import WhatIsBotleague from './components/WhatIsBotleague';
import Categories from './components/Categories';
import Disciplines from './components/Disciplines';
import Advantage from './components/Advantage';
import JoinEcosystem from './components/JoinEcosystem';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';

export default function App() {
  const handleScrollToSection = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#030303] text-gray-200 selection:bg-neon-red/30 selection:text-white overflow-x-hidden font-outfit">
      
      {/* 1. Sticky Navigation Header */}
      <Navbar onNavClick={handleScrollToSection} />

      {/* 2. Interactive Hero Section */}
      <Hero onExploreEvents={() => handleScrollToSection('events')} />

      {/* 3. Competitions & Events Bracket */}
      <Events />

      {/* 4. Path to League Stepper */}
      <PathToLeague />

      {/* 5. What is Botleague Feature Pillars */}
      <WhatIsBotleague />

      {/* 6. Competition Age Categories */}
      <Categories />

      {/* 7. Competition Sports Grid */}
      <Disciplines />

      {/* 8. Advantage & scoreboard */}
      <Advantage />

      {/* 9. Join Multi-role Signup Form */}
      <JoinEcosystem />

      {/* 10. Monochrome Sponsors List */}
      <Sponsors />

      {/* 11. Minimal Footer */}
      <Footer />

    </div>
  );
}
