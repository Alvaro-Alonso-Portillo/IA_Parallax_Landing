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
import { FloatingContact } from './components/FloatingContact';
import { ProjectDetail } from './components/ProjectDetail';
import { Templates } from './components/Templates';
import { Capabilities } from './components/Capabilities';
import { Development } from './components/Development';
import { LegalPages } from './components/LegalPages';
import { projectsData } from './projectsData';

function App() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [showingTemplates, setShowingTemplates] = useState(false);
  const [showingCapabilities, setShowingCapabilities] = useState(false);
  const [showingDevelopment, setShowingDevelopment] = useState(false);
  const [activeLegal, setActiveLegal] = useState<'aviso' | 'privacidad' | 'cookies' | null>(null);

  // Handle back navigation
  const handleBack = () => {
    setActiveProjectId(null);
    setShowingTemplates(false);
    setShowingCapabilities(false);
    setShowingDevelopment(false);
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
      ) : activeLegal ? (
        <LegalPages type={activeLegal} onBack={handleBack} />
      ) : activeProject ? (
        <ProjectDetail project={activeProject} onBack={handleBack} />
      ) : (
        <main className="relative">
          <Hero />
          <TechStack />
          <About />
          <Portfolio onProjectClick={(id) => window.location.hash = `#/project/${id}`} />
          <Pricing />
          <RayBusters />
        </main>
      )}

      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;