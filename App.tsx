import React, { useState, useEffect } from 'react';
import { useRevealOnScroll } from './hooks/useRevealOnScroll';
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
import { FAQ } from './components/FAQ';
import { SEOInmobiliaria } from './components/SEOInmobiliaria';
import { SEOInmobiliariaResponse } from './components/SEOInmobiliariaResponse';
import { SEOAppSync } from './components/SEOAppSync';
import { SEOFacturasDocumentacion } from './components/SEOFacturasDocumentacion';
import { FormContext } from './components/ContactForm';
import NotFound from './app/not-found';
import { projectsData } from './projectsData';

function App() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [showingTemplates, setShowingTemplates] = useState(false);
  const [showingCapabilities, setShowingCapabilities] = useState(false);
  const [showingDevelopment, setShowingDevelopment] = useState(false);
  const [showingSchedule, setShowingSchedule] = useState(false);
  const [activeLegal, setActiveLegal] = useState<'aviso' | 'privacidad' | 'cookies' | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [showing404, setShowing404] = useState(false);
  const [showingSEOInmobiliaria, setShowingSEOInmobiliaria] = useState(false);
  const [showingSEOInmobiliariaResponse, setShowingSEOInmobiliariaResponse] = useState(false);
  const [showingSEOAppSync, setShowingSEOAppSync] = useState(false);
  const [showingSEOFacturasDocumentacion, setShowingSEOFacturasDocumentacion] = useState(false);
  const [formContext, setFormContext] = useState<FormContext>(() => {
    const saved = localStorage.getItem('formOriginContext');
    return (saved as FormContext) || 'generic';
  });

  // Helper to update and persist context
  const updateContext = (ctx: FormContext) => {
    setFormContext(ctx);
    localStorage.setItem('formOriginContext', ctx);
  };

  const noDemosRef = useRevealOnScroll<HTMLParagraphElement>();

  // Handle back navigation
  const handleBack = () => {
    setActiveProjectId(null);
    setShowingTemplates(false);
    setShowingCapabilities(false);
    setShowingDevelopment(false);
    setShowingSchedule(false);
    setActiveLegal(null);
    setShowing404(false);
    setShowingSEOInmobiliaria(false);
    setShowingSEOInmobiliariaResponse(false);
    setShowingSEOAppSync(false);
    setShowingSEOFacturasDocumentacion(false);
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
      } else if (hash === '#/segmento/inmobiliaria') {
        setShowingSEOInmobiliaria(true);
        updateContext('inmobiliaria');
        setShowingSEOInmobiliariaResponse(false);
        setShowing404(false);
        setActiveProjectId(null);
        setShowingTemplates(false);
        setShowingCapabilities(false);
        setShowingDevelopment(false);
        setActiveLegal(null);
      } else if (hash === '#/segmento/inmobiliaria-respuesta') {
        setShowingSEOInmobiliariaResponse(true);
        updateContext('respuesta');
        setShowingSEOInmobiliaria(false);
        setShowingSEOAppSync(false);
        setShowingSEOFacturasDocumentacion(false);
        setShowing404(false);
        setActiveProjectId(null);
        setShowingTemplates(false);
        setShowingCapabilities(false);
        setShowingDevelopment(false);
        setActiveLegal(null);
      } else if (hash === '#/problema/trabajo-manual') {
        setShowingSEOAppSync(true);
        updateContext('manual');
        setShowingSEOInmobiliaria(false);
        setShowingSEOInmobiliariaResponse(false);
        setShowingSEOFacturasDocumentacion(false);
        setShowing404(false);
        setActiveProjectId(null);
        setShowingTemplates(false);
        setShowingCapabilities(false);
        setShowingDevelopment(false);
        setActiveLegal(null);
      } else if (hash === '#/problema/facturas-documentacion') {
        setShowingSEOFacturasDocumentacion(true);
        updateContext('facturas');
        setShowingSEOAppSync(false);
        setShowingSEOInmobiliaria(false);
        setShowingSEOInmobiliariaResponse(false);
        setShowing404(false);
        setActiveProjectId(null);
        setShowingTemplates(false);
        setShowingCapabilities(false);
        setShowingDevelopment(false);
        setActiveLegal(null);
      } else if (hash === '#/404' || window.location.pathname === '/404') {
        setShowing404(true);
        setShowingSEOInmobiliaria(false);
        setShowingSEOInmobiliariaResponse(false);
        setShowingSEOAppSync(false);
        setShowingSEOFacturasDocumentacion(false);
        setActiveProjectId(null);
        setShowingTemplates(false);
        setShowingCapabilities(false);
        setShowingDevelopment(false);
        setActiveLegal(null);
      } else {
        setShowing404(false);
        setShowingSEOInmobiliaria(false);
        setShowingSEOInmobiliariaResponse(false);
        setShowingSEOAppSync(false);
        setShowingSEOFacturasDocumentacion(false);
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

  if (showing404) {
    return <NotFound />;
  }

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
      ) : showingSEOInmobiliaria ? (
        <SEOInmobiliaria onBack={handleBack} />
      ) : showingSEOInmobiliariaResponse ? (
        <SEOInmobiliariaResponse onBack={handleBack} />
      ) : showingSEOAppSync ? (
        <SEOAppSync onBack={handleBack} />
      ) : showingSEOFacturasDocumentacion ? (
        <SEOFacturasDocumentacion onBack={handleBack} />
      ) : (
        <main className="relative">
          <Hero />
          <TechStack />
          <About />
          <Portfolio onProjectClick={(id) => window.location.hash = `#/project/${id}`} />
          <ResultsSection />
          <Pricing />
          <RayBusters />
          <FAQ />
        </main>
      )}

      <section className="py-24 bg-white text-center px-4 border-t-2 border-black">
        <p ref={noDemosRef} className="font-display text-xl md:text-4xl uppercase text-brand-dark max-w-5xl mx-auto leading-tight drop-shadow-sketch-sm">
          No hacemos demos. <br className="hidden md:block" />
          <span className="text-brand-blue">Analizamos tu caso real</span> y te decimos si tiene sentido seguir.
        </p>
      </section>

      <Footer formContext={formContext} />
      <LeadMagnetChat />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}

export default App;