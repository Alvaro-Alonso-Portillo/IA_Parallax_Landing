import React from 'react';
import { Cloud1, Cloud2, CloudWithAntenna, FistIcon, SoonSticker } from './SketchIcons';
import { useParallaxDecorative } from '../hooks/useParallaxDecorative';
import { BeforeAfterToggle } from './BeforeAfterToggle';

export const Hero: React.FC<{ onBookingClick?: () => void }> = ({ onBookingClick }) => {
  const icon1Ref = useParallaxDecorative<HTMLImageElement>(0.02, -1);
  const icon2Ref = useParallaxDecorative<HTMLImageElement>(0.015, 1);
  const cloud1Ref = useParallaxDecorative<HTMLDivElement>(0.01, 1);
  const cloud2Ref = useParallaxDecorative<HTMLDivElement>(0.02, -1);
  const cloud3Ref = useParallaxDecorative<HTMLDivElement>(0.015, 1);
  const cloud4Ref = useParallaxDecorative<HTMLDivElement>(0.01, -1);
  const line1Ref = useParallaxDecorative<HTMLDivElement>(0.012, 1);
  const line2Ref = useParallaxDecorative<HTMLDivElement>(0.018, -1);

  return (
    <section className="relative pt-16 pb-12 md:pt-32 md:pb-20 px-4 overflow-hidden bg-brand-light">
      <div className="max-w-[1440px] mx-auto text-center relative z-30">

        {/* Floating Icons Top */}
        <img
          ref={icon1Ref}
          src="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67cad69f3992b0e11978a58c_Group%201413376293.svg"
          width="80" height="80"
          className="absolute top-0 left-[10%] w-12 md:w-20 animate-float drop-shadow-sketch hidden md:block"
          alt="Icono decorativo de automatización de agencia"
        />
        <img
          ref={icon2Ref}
          src="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67cad69f1e2ae2bd07f15125_Vector.svg"
          width="64" height="64"
          className="absolute top-10 right-[15%] w-8 md:w-16 animate-spin-slow hidden md:block"
          alt=""
        />

        <div className="flex flex-col items-center gap-0 md:gap-2 relative px-2">
          {/* Mobile-only kicker to replace the large line */}
          <p className="md:hidden font-display text-brand-dark text-xs uppercase tracking-widest mb-4 opacity-60">
            Deja de apagar fuegos.
          </p>

          <div className="w-full bg-white md:bg-transparent border-2 border-black md:border-0 rounded-sketch-sm md:rounded-none p-6 md:p-0 relative z-10 shadow-none">
            <h1 className="relative z-10 w-full font-display uppercase tracking-tighter drop-shadow-sketch-sm">
              <span className="hidden md:block text-[6rem] lg:text-[7.5rem] leading-[1.2] text-brand-dark">
                DEJA DE APAGAR FUEGOS.
              </span>
              <span className="block text-[8vw] md:text-[6rem] lg:text-[7.5rem] leading-[1.05] md:leading-[1.2] text-brand-blue">
                AUTOMATIZA <br className="md:hidden" /> TU OPERATIVA.
              </span>
              <span className="block text-[8vw] md:text-[6rem] lg:text-[7.5rem] leading-[1.05] md:leading-[1.2] text-brand-dark relative inline-block">
                <span className="md:hidden">RECUPERA TIEMPO.</span>
                <span className="hidden md:inline">Y RECUPERA TIEMPO PARA CRECER.</span>
                {/* Wavy Line Underline */}
                <div className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-4 md:h-8 overflow-hidden">
                  <svg viewBox="0 0 500 20" preserveAspectRatio="none" className="w-full h-full stroke-brand-blue md:stroke-brand-orange stroke-[4] fill-none">
                    <path d="M0,10 Q25,0 50,10 T100,10 T150,10 T200,10 T250,10 T300,10 T350,10 T400,10 T450,10 T500,10" />
                  </svg>
                </div>
                {/* Sparkle/Star decoration - Hidden on mobile for less noise */}
                <span className="absolute -top-6 -right-6 md:-top-8 md:-right-8 text-brand-blue md:text-brand-yellow animate-wiggle text-2xl md:text-6xl -z-10 hidden md:block">✦</span>
              </span>
            </h1>
          </div>
          {/* Pepe hidden on mobile in this position to avoid distraction */}
          <img src="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d85869983afc658b8861ea_pepe%20(1).png" width="160" height="160" className="absolute -left-10 sm:-left-16 md:-left-44 top-1/2 -translate-y-1/2 w-40 animate-float drop-shadow-sketch -scale-x-100 -z-30 pointer-events-none hidden md:block" alt="Meme Pepe gestionando sistemas de IA para agencias" />
        </div>

        <div className="mt-8 md:mt-8 max-w-sm md:max-w-3xl mx-auto text-center relative z-20 border-2 border-black p-5 md:p-6 rounded-sketch bg-white shadow-sketch transform -rotate-1 mx-auto px-4">
          <p className="text-base md:text-xl font-bold text-black font-sans leading-snug md:leading-tight">
            Diseñamos sistemas de automatización con IA para empresas de servicios de 5 a 50 empleados.
          </p>
          <p className="mt-3 text-xs md:text-base text-gray-700 font-sans opacity-95 leading-relaxed">
            Menos tareas manuales, menos errores, más tiempo para vender y operar.
          </p>
        </div>

        <div className="mt-8 md:mt-14 flex flex-col sm:flex-row justify-center gap-4 md:gap-6 relative z-30 items-stretch sm:items-center px-4 md:px-0 max-w-3xl mx-auto">
          <a href="#diagnostico" className="bg-black text-white px-8 md:px-12 py-5 text-base md:text-xl font-display uppercase tracking-wider hover:bg-brand-blue transition-all flex items-center justify-center gap-3 md:gap-4 group border-2 border-black rounded-full shadow-sketch-lg hover:shadow-sketch-xl hover:-translate-y-1">
            Quiero recuperar tiempo
          </a>
          <a href="#sistemas" className="bg-transparent text-black px-8 md:px-12 py-4 md:py-5 text-sm md:text-xl font-display uppercase tracking-wider transition-all border-2 border-black rounded-full shadow-sketch hover:shadow-sketch-lg hover:-translate-y-1 text-center hover:bg-black/5">
            Ver cómo funciona
          </a>
        </div>
        <p className="mt-4 text-sm md:text-base font-medium text-gray-600 relative z-30">
          Diagnóstico rápido. Sin compromiso.
        </p>
        <p className="mt-4 text-[10px] md:text-xs text-gray-400 uppercase tracking-widest max-w-lg mx-auto relative z-30">
          No trabajamos con negocios que buscan soluciones rápidas sin ordenar su operativa.
        </p>
        <p className="mt-2 text-[10px] md:text-xs text-gray-500 font-bold italic relative z-30">
          "Si no tiene sentido automatizar ahora, te lo diremos."
        </p>

        {/* Mascot moved below CTAs on mobile */}
        <div className="md:hidden mt-8 flex justify-center">
          <img src="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d85869983afc658b8861ea_pepe%20(1).png" width="80" height="80" className="w-12 animate-float opacity-40 grayscale" alt="" />
        </div>


      </div>

      {/* Unified Before/After Module */}
      <div className="mt-12 md:mt-16">
        <BeforeAfterToggle />
      </div>



      {/* Clouds / Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 hidden md:block">
        <div ref={cloud1Ref}>
          <Cloud1 className="absolute top-20 left-[5%] w-48 h-24 animate-float opacity-90" />
        </div>
        <div ref={cloud2Ref}>
          <CloudWithAntenna className="absolute bottom-40 left-[15%] w-64 h-40 animate-float-delayed opacity-90" />
        </div>
        <div ref={cloud3Ref}>
          <Cloud2 className="absolute top-40 right-[10%] w-56 h-28 animate-float opacity-90" />
        </div>
        <div ref={cloud4Ref}>
          <Cloud1 className="absolute bottom-20 right-[5%] w-40 h-20 animate-wiggle opacity-80" />
        </div>

        {/* Decorative Lines (Rayas) */}
        <div ref={line1Ref} className="absolute top-1/4 left-0 w-32 h-1 bg-black/5 -rotate-12 transform origin-left"></div>
        <div ref={line2Ref} className="absolute bottom-1/3 right-0 w-48 h-1 bg-black/5 rotate-12 transform origin-right"></div>
      </div>
    </section>
  );
};