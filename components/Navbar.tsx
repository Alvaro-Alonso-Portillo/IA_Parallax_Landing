import React, { useState, useEffect } from 'react';
import { NavLinkProps } from '../types';
import { GlossySocialIcon } from './SketchIcons';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    className="relative px-2 py-1 font-bold text-sm uppercase tracking-wider hover:text-brand-blue transition-colors font-sans"
  >
    {children}
  </a>
);

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-4 transition-all duration-300 ${isScrolled
      ? 'py-4 bg-white/50 backdrop-blur-md border-b-2 border-black'
      : 'py-6 bg-transparent border-b-0 border-transparent'
      }`}>
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        <a href="#" className="hover:opacity-100 transition-opacity group relative">
          <div className="bg-white border-[3px] border-black px-4 py-2 shadow-sketch group-hover:shadow-sketch-lg transition-all transform -rotate-2 group-hover:rotate-0">
            <img
              src="https://res.cloudinary.com/drfr1lzlt/image/upload/v1768304224/logo-ia-parallax_2_p56oap.png"
              alt="IA_PARALLAX Logo"
              className="h-12 md:h-20 w-auto object-contain"
            />
          </div>
          {/* Decorative tag */}
          <div className="absolute -top-2 -right-4 bg-brand-yellow border-2 border-black text-[10px] font-bold px-2 py-0.5 rounded-full transform rotate-12 group-hover:rotate-0 transition-transform">
            V2.0
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 bg-transparent">
          <NavLink href="#about-us">Nosotros</NavLink>
          <NavLink href="#portfolio">Portafolio</NavLink>
          <NavLink href="#/development">Desarrollo</NavLink>
          <NavLink href="#contact">Contacto</NavLink>

          <div className="relative group">
            <NavLink href="#/templates">Plantillas</NavLink>
          </div>
        </div>

        {/* Social Icons - Updated with Glossy Component */}
        <div className="hidden md:flex items-center gap-3">
          <GlossySocialIcon type="linkedin" href="https://www.linkedin.com/in/alvaro-alonso-8319b52ba/" />
          <GlossySocialIcon type="x" href="https://x.com/iaparallax" />
          <GlossySocialIcon type="instagram" href="https://www.instagram.com/iaparallax/" />
          <GlossySocialIcon type="github" href="https://github.com/Alvaro-Alonso-Portillo" />
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-3 z-50 rounded-md border-2 border-black bg-white shadow-sketch active:shadow-none active:translate-x-0.5 active:translate-y-0.5 transition-all"
        >
          <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 lg:hidden transition-all duration-500 ease-in-out ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
          <a
            href="#about-us"
            onClick={() => setIsOpen(false)}
            className="text-4xl font-display uppercase hover:text-brand-blue transform hover:scale-110 transition-transform"
          >
            Nosotros
          </a>
          <a
            href="#portfolio"
            onClick={() => setIsOpen(false)}
            className="text-4xl font-display uppercase hover:text-brand-blue transform hover:scale-110 transition-transform"
          >
            Portafolio
          </a>
          <a
            href="#/development"
            onClick={() => setIsOpen(false)}
            className="text-4xl font-display uppercase hover:text-brand-blue transform hover:scale-110 transition-transform"
          >
            Desarrollo
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-4xl font-display uppercase hover:text-brand-blue transform hover:scale-110 transition-transform"
          >
            Contacto
          </a>
          <a
            href="#/templates"
            onClick={() => setIsOpen(false)}
            className="text-4xl font-display uppercase hover:text-brand-yellow transform hover:scale-110 transition-transform bg-black text-white px-6 py-2 border-2 border-black"
          >
            Plantillas
          </a>

          {/* Mobile Socials */}
          <div className="flex items-center gap-6 mt-8">
            <GlossySocialIcon type="linkedin" href="https://www.linkedin.com/in/alvaro-alonso-8319b52ba/" />
            <GlossySocialIcon type="x" href="https://x.com/iaparallax" />
            <GlossySocialIcon type="instagram" href="https://www.instagram.com/iaparallax/" />
          </div>
        </div>
      </div>
    </nav>

  );
};