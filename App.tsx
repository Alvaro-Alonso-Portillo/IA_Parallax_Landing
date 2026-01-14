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
import { projectsData } from './projectsData';

function App() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [showingTemplates, setShowingTemplates] = useState(false);

  // Handle back navigation
  const handleBack = () => {
    setActiveProjectId(null);
    setShowingTemplates(false);
    window.location.hash = '';
  };

  // Sync state with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      if (hash === '#/templates') {
        setShowingTemplates(true);
        setActiveProjectId(null);
      } else if (hash.startsWith('#/project/')) {
        const projectId = hash.replace('#/project/', '');
        if (projectsData.find(p => p.id === projectId)) {
          setActiveProjectId(projectId);
          setShowingTemplates(false);
        }
      } else {
        setActiveProjectId(null);
        setShowingTemplates(false);
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
      ) : activeProject ? (
        <ProjectDetail project={activeProject} onBack={handleBack} />
      ) : (
        <main>
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