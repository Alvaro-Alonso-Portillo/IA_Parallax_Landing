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
        <a href="#" className="w-24 md:w-32 hover:opacity-80 transition-opacity">
          <img
            src="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/681a5abe37971c9a973bd261_logo7.svg"
            alt="Logo"
            className="w-full h-auto"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 bg-transparent">
          <NavLink href="#about-us">About us</NavLink>
          <NavLink href="#portfolio">Portfolio</NavLink>
          <NavLink href="#development">Development</NavLink>
          <NavLink href="#contact">Contact US</NavLink>

          <div className="relative group">
            <NavLink href="#/templates">Templates</NavLink>
          </div>
        </div>

        {/* Social Icons - Updated with Glossy Component */}
        <div className="hidden md:flex items-center gap-3">
          <GlossySocialIcon type="web" href="#" />
          <GlossySocialIcon type="telegram" href="#" />
          <GlossySocialIcon type="instagram" href="#" />
          <GlossySocialIcon type="behance" href="#" />
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2 z-50 rounded-md border border-black bg-white"
        >
          <span className={`block w-6 h-0.5 bg-black transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b-2 border-black p-6 flex flex-col gap-6 lg:hidden shadow-sketch z-40">
          <a href="#about-us" className="text-2xl font-display uppercase hover:text-brand-blue">About us</a>
          <a href="#portfolio" className="text-2xl font-display uppercase hover:text-brand-blue">Portfolio</a>
          <a href="#development" className="text-2xl font-display uppercase hover:text-brand-blue">Development</a>
          <a href="#contact" className="text-2xl font-display uppercase hover:text-brand-blue">Contact</a>
        </div>
      )}
    </nav>
  );
};