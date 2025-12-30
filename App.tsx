import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Pricing } from './components/Pricing';
import { RayBusters } from './components/RayBusters';
import { PricingTable } from './components/PricingTable';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';

function App() {
  return (
    <div className="bg-[#ffffff] min-h-screen font-sans selection:bg-brand-blue selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <About />
        <Portfolio />
        <Pricing />
        <RayBusters />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;