import React from 'react';
import { PortfolioItemProps } from '../types';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const PortfolioItem: React.FC<PortfolioItemProps & {
  id: string;
  onProjectClick: (id: string) => void;
  rotation?: string;
  stickerColor?: string;
  badge?: string;
  forTarget?: string;
  result?: string;
  ctaText?: string;
  delay?: number;
  subtitle?: string;
}> = ({ id, title, description, image, colorClass, onProjectClick, rotation = 'rotate-0', stickerColor = 'bg-brand-yellow', badge, forTarget, result, ctaText = 'Ver proyecto completo', delay = 0, subtitle }) => {
  const revealRef = useRevealOnScroll<HTMLDivElement>(0.1, delay);

  return (
    <div ref={revealRef} className="h-full">
      <div className={`relative group ${rotation} transition-all duration-200 ease-out [@media(pointer:fine)]:hover:-translate-y-[2px] h-full flex flex-col`}>
        {/* Tape or Pin */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-gray-200 border border-black rounded-full z-20 shadow-sm opacity-80"></div>

        {/* Badge */}
        {badge && (
          <div className="absolute -top-8 -left-4 z-30 bg-black text-white px-3 py-1 text-[10px] font-display uppercase tracking-widest border border-white transform -rotate-12 shadow-sm">
            {badge}
          </div>
        )}

        {/* Main Frame */}
        <div className="relative bg-white p-4 pb-16 border-2 border-black shadow-sketch-lg flex flex-col gap-4 items-center transition-all duration-200 ease-out [@media(pointer:fine)]:group-hover:shadow-sketch-xl h-full flex-grow">
          <div className="w-full aspect-square border border-black bg-gray-50 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
            <img src={image} alt={title} width="400" height="400" loading="lazy" className="w-full h-full object-cover" />
          </div>

          {/* Sticker Label and New Metadata */}
          <div className="absolute bottom-4 -right-2 flex flex-col items-end gap-1 w-[90%] pointer-events-none">
            <h3 className={`${stickerColor} text-black px-4 py-2 border-2 border-black font-display uppercase text-base md:text-sm transform -rotate-2 shadow-sm w-fit relative z-10`}>
              {title}
            </h3>
            {subtitle && (
              <p className="bg-black text-white px-2 py-0.5 text-[10px] font-sans font-bold uppercase transform rotate-1 shadow-sm w-fit mt-1">
                {subtitle}
              </p>
            )}
            {(forTarget || result) && (
              <div className="bg-white/90 border border-black p-2 font-sans text-[10px] sm:text-xs leading-tight shadow-sm transform rotate-1 w-full max-w-[200px] mt-1">
                {forTarget && <div className="text-gray-600"><strong>Para:</strong> {forTarget}</div>}
                {result && <div className="text-brand-blue"><strong>Resultado:</strong> {result}</div>}
              </div>
            )}
          </div>
        </div>

        {/* Enhanced Hover Card */}
        <div className="absolute -bottom-10 left-4 right-4 z-40 pointer-events-none transition-all duration-300 
                        opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
          <div className="bg-white border-[3px] border-black p-4 shadow-sketch-lg relative rotate-1 min-h-[140px] flex flex-col justify-between">
            {/* Speech triangle tail */}
            <div className="absolute -top-[12px] left-8 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[12px] border-b-black"></div>
            <div className="absolute -top-[9px] left-8 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[12px] border-b-white z-10"></div>

            <p className="font-sans font-bold text-black text-[0.95rem] leading-tight mb-4">
              {description}
            </p>

            <button
              onClick={(e) => {
                e.preventDefault();
                onProjectClick(id);
              }}
              className="flex items-center justify-center gap-2 group/link cursor-pointer w-full bg-brand-yellow border-2 border-black py-2 rounded-full shadow-sketch hover:shadow-sketch-lg hover:-translate-y-1 transition-all mt-auto"
            >
              <span className="text-xs font-display uppercase text-black">
                {ctaText}
              </span>
              <span className="text-xs group-hover/link:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Portfolio: React.FC<{ onProjectClick: (id: string) => void }> = ({ onProjectClick }) => {
  const headerRef = useRevealOnScroll<HTMLDivElement>();
  const introRef = useRevealOnScroll<HTMLDivElement>(0.1, 40);

  return (
    <section id="sistemas" className="py-24 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] bg-fixed relative overflow-hidden text-black">
      {/* Background Scribbles */}
      <div className="absolute top-10 left-10 text-9xl text-gray-100 select-none pointer-events-none font-accent opacity-50">?</div>
      <div className="absolute bottom-10 right-10 text-9xl text-gray-100 select-none pointer-events-none font-accent opacity-50">!</div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div ref={headerRef} className="mb-16 md:mb-24 text-center relative group">
          <h2 className="text-4xl md:text-8xl font-display uppercase leading-[1.2] md:leading-[1.15] relative z-10 text-brand-dark drop-shadow-sketch-sm">
            SOLUCIONES PARA AUTOMATIZAR <br />
            <span className="bg-brand-yellow px-6 py-1 border-2 border-black transform -rotate-1 inline-block text-black mt-4 leading-tight">LEADS Y OPERATIVA INTERNA</span>
          </h2>
          <p className="mt-12 font-sans text-lg md:text-xl font-medium text-gray-600 relative z-10">
            Automatización real, resultados reales. Confía en los datos.
          </p>
          {/* Sketchy underline or arrow */}
          <svg className="absolute top-full left-1/2 -translate-x-1/2 w-32 md:w-48 h-12 text-black mt-4 md:mt-8" viewBox="0 0 100 20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M0,10 Q50,20 100,10" />
            <path d="M90,5 L100,10 L90,15" />
          </svg>
        </div>

        {/* Intro phrase */}
        <div ref={introRef} className="mb-12 text-center">
          <p className="font-display text-xl md:text-2xl uppercase text-brand-blue tracking-tighter">
            El 90% de los proyectos empiezan aquí:
          </p>
        </div>

        {/* Gallery Wall Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 md:gap-12 max-w-7xl mx-auto px-4 md:px-8 relative">

          {/* Connecting Lines (Decorative SVG behind) - Hidden on smaller screens */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block -z-10 text-black opacity-20" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5">
            <path d="M200,100 C300,100 400,200 500,100" fill="none" />
            <path d="M500,100 C600,0 700,100 800,200" fill="none" />
          </svg>

          <PortfolioItem
            id="qubicus"
            title="Automatización de Operativa"
            subtitle="Eliminamos la carga administrativa y el volcado manual entre hojas de cálculo."
            description="Tus empleados pierden horas moviendo datos a mano entre hojas de cálculo y carpetas, lo que genera errores constantes."
            forTarget="equipos saturados de administración"
            result="Elimina el 100% de la carga administrativa manual y recupera el control total de tus archivos."
            ctaText="Solicitar diagnóstico de procesos"
            image="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d1e576a54ab84d9991fc4e_%D0%B2%D1%96%D0%BA%D0%BD%D0%BE.png"
            stickerColor="bg-brand-blue"
            rotation="-rotate-2"
            onProjectClick={onProjectClick}
            colorClass="bg-blue-200"
            badge="Servicio principal"
            delay={0}
          />
          <PortfolioItem
            id="notdog"
            title="Filtro Automático de Leads"
            subtitle="Eliminamos las llamadas a leads que no encajan para que solo hables con clientes reales."
            description="El equipo comercial pierde tiempo llamando a contactos que no encajan o no tienen presupuesto para contratar hoy."
            forTarget="departamentos de venta saturados"
            result="Tus comerciales solo hablarán con clientes listos para comprar, aumentando la tasa de cierre sin contratar más personal."
            ctaText="Solicitar filtro de contactos"
            image="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d1d4f0540b33d5d141c396_notdog.avif"
            stickerColor="bg-brand-orange"
            rotation="-rotate-1"
            onProjectClick={onProjectClick}
            colorClass="bg-orange-200"
            delay={60}
          />
          <PortfolioItem
            id="snork-meme"
            title="Respuesta en WhatsApp 24/7"
            subtitle="Eliminamos la pérdida de contactos fuera de horario con respuestas y citas automáticas."
            description="Pierdes clientes porque no contestas a tiempo fuera del horario comercial o te olvidas de agendar las reuniones."
            forTarget="negocios que reciben consultas por chat"
            result="Captura contactos y agenda reuniones de forma automática incluso de noche, sin que tu equipo tenga que intervenir."
            ctaText="Solicitar sistema de agenda"
            image="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d1d4f1b90511ce48cd4d3b_snork.avif"
            stickerColor="bg-brand-yellow"
            rotation="rotate-2"
            onProjectClick={onProjectClick}
            colorClass="bg-yellow-200"
            delay={120}
          />
          <PortfolioItem
            id="keycat"
            title="Control de Métricas en Tiempo Real"
            subtitle="Eliminamos el reporte manual y la dispersión de datos con un panel de control vivo."
            description="No sabes cuánto dinero pierdes cada mes porque los datos están dispersos y los reportes se hacen a mano una vez por semana."
            forTarget="directivos que necesitan control total"
            result="Visualiza la rentabilidad de cada proceso al momento y toma decisiones basadas en números reales, no en sensaciones."
            ctaText="Solicitar panel de control"
            image="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d1d4f1540b33d5d141c464_keycat.avif"
            stickerColor="bg-red-300"
            rotation="rotate-3"
            onProjectClick={onProjectClick}
            colorClass="bg-brand-gray"
            delay={180}
          />
        </div>


        {/* Extra text or decorators */}
        <div className="mt-20 text-center">
          <p className="font-comic text-xl">Y muchas otras locuras que te ahorran dinero...</p>
        </div>
      </div>
    </section>
  );
};