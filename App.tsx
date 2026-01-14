import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Pricing } from './components/Pricing';
import { RayBusters } from './components/RayBusters';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LeadMagnetChat } from './components/LeadMagnetChat';
import { ProjectDetail } from './components/ProjectDetail';
import { Templates } from './components/Templates';
import { Capabilities } from './components/Capabilities';
import { SchedulePage } from './components/SchedulePage';
import { Development } from './components/Development';
import { LegalPages } from './components/LegalPages';
import { ResultsSection } from './components/ResultsSection';
import { BookingModal } from './components/BookingModal';
import { projectsData } from './projectsData';

function App() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [showingTemplates, setShowingTemplates] = useState(false);
  const [showingCapabilities, setShowingCapabilities] = useState(false);
  const [showingDevelopment, setShowingDevelopment] = useState(false);
  const [showingSchedule, setShowingSchedule] = useState(false);
  const [activeLegal, setActiveLegal] = useState<'aviso' | 'privacidad' | 'cookies' | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Handle back navigation
  const handleBack = () => {
    setActiveProjectId(null);
    setShowingTemplates(false);
    setShowingCapabilities(false);
    setShowingDevelopment(false);
    setShowingSchedule(false);
    setActiveLegal(null);
    window.location.hash = '';
  };

  // Sync state with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      if (hash === '#/templates') {
        setShowingTemplates(true);
        setShowingCapabilities(false);
        setShowingDevelopment(false);
        setActiveLegal(null);
        setActiveProjectId(null);
      } else if (hash === '#/capabilities') {
        setShowingCapabilities(true);
        setShowingTemplates(false);
        setShowingDevelopment(false);
        setActiveLegal(null);
        setActiveProjectId(null);
      } else if (hash === '#/development') {
        setShowingDevelopment(true);
        setShowingCapabilities(false);
        setShowingTemplates(false);
        setShowingSchedule(false);
        setActiveLegal(null);
        setActiveProjectId(null);
      } else if (hash === '#/agendar') {
        setShowingSchedule(true);
        setShowingDevelopment(false);
        setShowingCapabilities(false);
        setShowingTemplates(false);
        setActiveLegal(null);
        setActiveProjectId(null);
      } else if (hash === '#/aviso-legal') {
        setActiveLegal('aviso');
        setShowingTemplates(false);
        setShowingCapabilities(false);
        setShowingDevelopment(false);
        setActiveProjectId(null);
      } else if (hash === '#/privacidad') {
        setActiveLegal('privacidad');
        setShowingTemplates(false);
        setShowingCapabilities(false);
        setShowingDevelopment(false);
        setActiveProjectId(null);
      } else if (hash === '#/cookies') {
        setActiveLegal('cookies');
        setShowingTemplates(false);
        setShowingCapabilities(false);
        setShowingDevelopment(false);
        setActiveProjectId(null);
      } else if (hash.startsWith('#/project/')) {
        const projectId = hash.replace('#/project/', '');
        if (projectsData.find(p => p.id === projectId)) {
          setActiveProjectId(projectId);
          setShowingTemplates(false);
          setShowingCapabilities(false);
          setShowingDevelopment(false);
          setActiveLegal(null);
        }
      } else {
        setActiveProjectId(null);
        setShowingTemplates(false);
        setShowingCapabilities(false);
        setShowingDevelopment(false);
        setActiveLegal(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const activeProject = projectsData.find(p => p.id === activeProjectId);

  return (
    <div className="bg-[#ffffff] min-h-screen font-sans selection:bg-brand-blue selection:text-white">
      <Navbar />

      {showingTemplates ? (
        <Templates onBack={handleBack} />
      ) : showingCapabilities ? (
        <Capabilities onBack={handleBack} />
      ) : showingDevelopment ? (
        <Development onBack={handleBack} />
      ) : showingSchedule ? (
        <SchedulePage onBack={handleBack} />
      ) : activeLegal ? (
        <LegalPages type={activeLegal} onBack={handleBack} />
      ) : activeProject ? (
        <ProjectDetail project={activeProject} onBack={handleBack} />
      ) : (
        <main className="relative">
          <Hero onBookingClick={() => setIsBookingOpen(true)} />
          <TechStack />
          <About />
          <Portfolio onProjectClick={(id) => window.location.hash = `#/project/${id}`} />
          <ResultsSection />
          <Pricing onBookingClick={() => setIsBookingOpen(true)} />
          <RayBusters />
        </main>
      )}

      <Footer />
      <LeadMagnetChat />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}

export default App;