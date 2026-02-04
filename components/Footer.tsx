import React from 'react';
import { ContactForm, FormContext } from './ContactForm';

export const Footer: React.FC<{ formContext?: FormContext }> = ({ formContext = 'generic' }) => {
  return (
    <footer id="diagnostico" className="component_footer bg-[#f9f9f9] border-t-2 border-black relative font-sans">
      <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row relative">

        {/* Column - Contact Info (40% desktop, 100% mobile) - ORDER 1 ON MOBILE */}
        <div className="w-full lg:w-[40%] bg-white border-b-2 lg:border-b-0 lg:border-r-2 border-black p-8 md:p-16 flex flex-col justify-center relative order-1">
          <div className="max-w-xl mx-auto w-full">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-display text-black leading-tight mb-4 text-center lg:text-left">
                Empieza hoy a <br /> automatizar tu operativa
              </h2>
            </div>

            <ContactForm context={formContext} />
          </div>
        </div>

        {/* Column - Locker Room Scene (60% desktop, 100% mobile) - ORDER 2 ON MOBILE */}
        <div className="w-full lg:w-[60%] bg-[#fffdf5] relative overflow-hidden min-h-[400px] md:min-h-[600px] flex flex-col items-center justify-end pb-16 md:pb-20 order-2 border-t-2 lg:border-t-0 border-black lg:border-l-0">

          {/* Background Lockers - Reduced count on mobile */}
          <div className="absolute inset-x-4 md:inset-x-10 bottom-32 md:bottom-40 top-10 md:top-20 flex gap-2 md:gap-4 justify-center opacity-40 md:opacity-60">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className={`flex-1 h-full border-2 border-black bg-gray-50 relative rounded-t-lg group hover:bg-gray-100 transition-colors ${i > 2 ? 'i > 3 ? "hidden sm:block" : "hidden md:block"' : ''} ${i > 2 ? 'hidden sm:block' : ''}`}>
                <div className="absolute top-2 md:top-4 left-1/2 -translate-x-1/2 w-8 md:w-12 h-4 md:h-6 border-2 border-black bg-white"></div>
                <div className="w-2/3 h-1 bg-black mx-auto mt-10 md:mt-16 rounded-full"></div>
                <div className="w-2/3 h-1 bg-black mx-auto mt-2 rounded-full"></div>
              </div>
            ))}
          </div>

          {/* The Bench and characters Group (LinkedIn, GitHub, Instagram) */}
          <div className="relative z-10 w-full flex justify-center lg:justify-end items-end px-4 lg:pr-16">
            <div className="relative max-w-[280px] sm:max-w-sm md:max-w-xl w-full translate-y-6 md:translate-y-0">
              {/* Group Image */}
              <img
                src="https://res.cloudinary.com/drfr1lzlt/image/upload/v1768301909/Gemini_Generated_Image_t686fet686fet686-removebg-preview_ij8oco.png"
                alt="Personajes de redes sociales y expertos en automatización IA"
                width="600"
                height="500"
                loading="lazy"
                className="w-full h-auto drop-shadow-sketch-lg animate-float"
              />

              {/* Clickable regions */}
              <a href="https://www.linkedin.com/in/alvaro-alonso-8319b52ba/" target="_blank" rel="noopener noreferrer" className="absolute top-[10%] left-[5%] w-[30%] h-[50%] z-20 cursor-pointer group" title="LinkedIn"></a>
              <a href="https://github.com/Alvaro-Alonso-Portillo" target="_blank" rel="noopener noreferrer" className="absolute top-[5%] left-[35%] w-[30%] h-[50%] z-20 cursor-pointer group" title="GitHub"></a>
              <a href="https://www.instagram.com/iaparallax/" target="_blank" rel="noopener noreferrer" className="absolute top-[10%] right-[5%] w-[30%] h-[50%] z-20 cursor-pointer group" title="Instagram"></a>
            </div>
          </div>

          {/* X (Twitter) Push-up Character */}
          <a
            href="https://x.com/iaparallax"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-2 sm:left-4 md:left-12 bottom-1 md:bottom-6 w-64 sm:w-80 md:w-[550px] h-auto z-40 block hover:scale-105 transition-transform group"
          >
            <img
              src="https://res.cloudinary.com/drfr1lzlt/image/upload/v1768302544/Gemini_Generated_Image_nkwro7nkwro7nkwr-removebg-preview_h3puow.png"
              alt="Rendimiento y escala"
              width="800"
              height="400"
              loading="lazy"
              className="w-full h-auto drop-shadow-sketch animate-push-up"
            />
          </a>
        </div>

      </div>

      {/* Link SEO section */}
      <div className="bg-white border-t-[3px] border-black py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">

          {/* Columna Sectores */}
          <div>
            <h3 className="font-display text-xl uppercase mb-6 border-b-2 border-black/10 pb-2">Soluciones por Sector</h3>
            <ul className="space-y-3">
              <li>
                <a href="#/segmento/inmobiliaria" className="font-bold text-sm md:text-base hover:text-brand-blue transition-colors underline decoration-1 underline-offset-4">
                  Automatización de leads y agenda para inmobiliarias
                </a>
              </li>
              <li>
                <a href="#/segmento/inmobiliaria-respuesta" className="font-bold text-sm md:text-base hover:text-brand-blue transition-colors underline decoration-1 underline-offset-4">
                  Automatizar la respuesta a leads inmobiliarios
                </a>
              </li>
              <li>
                <span className="text-gray-400 font-bold text-sm md:text-base italic">Automatización para agencias de marketing (Próximamente)</span>
              </li>
              <li>
                <span className="text-gray-400 font-bold text-sm md:text-base italic">Procesos para empresas logísticas (Próximamente)</span>
              </li>
            </ul>
          </div>

          {/* Columna Problemas */}
          <div>
            <h3 className="font-display text-xl uppercase mb-6 border-b-2 border-black/10 pb-2">Problemas Resueltos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#/segmento/inmobiliaria-respuesta" className="font-bold text-sm md:text-base hover:text-brand-blue transition-colors underline decoration-1 underline-offset-4 decoration-brand-blue">
                  Automatizar la respuesta a leads 24/7
                </a>
              </li>
              <li>
                <a href="#/problema/trabajo-manual" className="font-bold text-sm md:text-base hover:text-brand-blue transition-colors underline decoration-1 underline-offset-4 decoration-brand-blue">
                  Eliminar el trabajo manual entre aplicaciones
                </a>
              </li>
              <li>
                <a href="#/problema/facturas-documentacion" className="font-bold text-sm md:text-base hover:text-brand-blue transition-colors underline decoration-1 underline-offset-4 decoration-brand-blue">
                  Automatizar la gestión de facturas y documentación
                </a>
              </li>
              <li>
                <a href="#/segmento/inmobiliaria" className="font-bold text-sm md:text-base hover:text-brand-blue transition-colors underline decoration-1 underline-offset-4 decoration-brand-blue">
                  Eliminar el desorden de la agenda comercial
                </a>
              </li>
              <li>
                <span className="text-gray-400 font-bold text-sm md:text-base italic">Sincronización de datos entre aplicaciones (Próximamente)</span>
              </li>
              <li>
                <span className="text-gray-400 font-bold text-sm md:text-base italic">Gestión de facturas automática (Próximamente)</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t-[3px] border-black bg-white p-6 relative overflow-visible">

        <div className="max-w-[1440px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8 md:pl-16">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <span className="font-bold text-sm">© 2025 IA_PARALLAX.</span>
            <div className="flex gap-4 text-[10px] md:text-xs font-bold uppercase underline decoration-1 underline-offset-4 font-sans opacity-60 hover:opacity-100 transition-opacity">
              <a href="#/aviso-legal" className="hover:text-brand-blue">Aviso Legal</a>
              <a href="#/privacidad" className="hover:text-brand-blue">Privacidad</a>
              <a href="#/cookies" className="hover:text-brand-blue">Cookies</a>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm font-bold uppercase underline decoration-2 underline-offset-4 font-sans">
            <a href="https://www.linkedin.com/in/alvaro-alonso-8319b52ba/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue">LinkedIn</a>
            <a href="https://x.com/iaparallax" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue">Twitter</a>
            <a href="https://www.instagram.com/iaparallax/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue">Instagram</a>
            <a href="https://github.com/Alvaro-Alonso-Portillo" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};