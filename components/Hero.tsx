import React from 'react';
import { Cloud1, Cloud2, CloudWithAntenna, FistIcon, SoonSticker } from './SketchIcons';
import { useParallaxDecorative } from '../hooks/useParallaxDecorative';
import { BeforeAfterToggle } from './BeforeAfterToggle';

export const Hero: React.FC = () => {
  const icon1Ref = useParallaxDecorative<HTMLImageElement>(0.02, -1);
  const icon2Ref = useParallaxDecorative<HTMLImageElement>(0.015, 1);
  const cloud1Ref = useParallaxDecorative<HTMLDivElement>(0.01, 1);
  const cloud2Ref = useParallaxDecorative<HTMLDivElement>(0.02, -1);
  const cloud3Ref = useParallaxDecorative<HTMLDivElement>(0.015, 1);
  const cloud4Ref = useParallaxDecorative<HTMLDivElement>(0.01, -1);
  const line1Ref = useParallaxDecorative<HTMLDivElement>(0.012, 1);
  const line2Ref = useParallaxDecorative<HTMLDivElement>(0.018, -1);

  return (
    <section className="relative pt-20 pb-20 md:pt-32 md:pb-20 px-4 overflow-hidden bg-brand-light">
      <div className="max-w-[1440px] mx-auto text-center relative z-30">
        {/* ... (icons code remains same) ... */}
        {/* Note: I'm keeping the internal icons logic but focusing on the requested changes in this block */}
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
          <p className="md:hidden font-display text-brand-dark text-[10px] uppercase tracking-[0.2em] mb-2 opacity-60">
            Automatización para PYMES.
          </p>

          <div className="w-full relative z-10">
            <h1 className="relative z-10 w-full uppercase tracking-tighter drop-shadow-sketch-sm flex flex-col items-center">
              {/* Desktop H1 */}
              <div className="hidden md:block">
                <span className="block text-[6rem] lg:text-[7.5rem] leading-[1.2] text-brand-dark font-display">
                  AGENCIA DE AUTOMATIZACIÓN
                </span>
                <span className="block text-[6rem] lg:text-[7.5rem] leading-[1] md:leading-[1.2] text-brand-blue font-display">
                  DE PROCESOS CON IA
                </span>
                <span className="block text-[6rem] lg:text-[7.5rem] leading-[1.1] md:leading-[1.2] text-brand-dark relative inline-block font-display">
                  PARA PEQUEÑAS Y MEDIANAS EMPRESAS.
                  {/* Wavy Line Underline */}
                  <div className="absolute -bottom-4 left-0 w-full h-8 overflow-hidden">
                    <svg viewBox="0 0 500 20" preserveAspectRatio="none" className="w-full h-full stroke-brand-orange stroke-[4] fill-none">
                      <path d="M0,10 Q25,0 50,10 T100,10 T150,10 T200,10 T250,10 T300,10 T350,10 T400,10 T450,10 T500,10" />
                    </svg>
                  </div>
                  <span className="absolute -top-8 -right-8 text-brand-yellow animate-wiggle text-6xl -z-10">✦</span>
                </span>
              </div>

              {/* Mobile H1 */}
              <div className="flex md:hidden flex-col items-center justify-center gap-0 w-full">
                <span className="text-[clamp(1.5rem,8vw,2.5rem)] font-sans font-black text-brand-dark leading-none">
                  AGENCIA DE
                </span>
                <span className="text-[clamp(2.8rem,14vw,5.5rem)] font-accent text-brand-blue leading-[0.85] text-center my-2 transform -rotate-1">
                  AUTOMATIZACIÓN <br /> CON IA
                </span>
                <span className="text-[clamp(1rem,5vw,1.8rem)] font-sans font-black text-brand-dark tracking-normal">
                  PARA EMPRESAS Y PYMES.
                </span>
              </div>
            </h1>
            <p className="mt-6 md:mt-2 text-[15px] md:text-2xl font-sans font-bold text-brand-dark/80 tracking-tight max-w-[280px] md:max-w-4xl mx-auto leading-snug">
              Eliminamos el trabajo manual en la captación de leads y la operativa diaria de las empresas.
            </p>

            {/* Mobile-only Sketch Illustration */}
            <div className="md:hidden my-12 flex justify-center w-full px-4">
              <img
                src="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d8589fe8dc80cbd5e9e377_Group%201413376294%20(1).svg"
                alt="Diagrama de flujo de automatización IA"
                className="w-[80%] max-w-[300px] h-auto animate-float opacity-90 drop-shadow-sketch-sm"
              />
            </div>
          </div>
          {/* Pepe hidden on mobile in this position to avoid distraction */}
          <img src="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d85869983afc658b8861ea_pepe%20(1).png" width="160" height="160" className="absolute -left-10 sm:-left-16 md:-left-44 top-1/2 -translate-y-1/2 w-40 animate-float drop-shadow-sketch -scale-x-100 -z-30 pointer-events-none hidden md:block" alt="Meme Pepe gestionando sistemas de IA para agencias" />
        </div>

        <div className="mt-4 md:mt-8 max-w-sm md:max-w-3xl mx-auto text-center relative z-20 md:border-2 md:border-black p-0 md:p-6 md:rounded-sketch bg-transparent md:bg-white md:shadow-sketch md:transform md:-rotate-1 mx-auto px-4">
          <p className="md:hidden text-lg font-bold text-black font-sans leading-tight">
            Eliminamos tus tareas manuales.
          </p>
          <p className="hidden md:block text-base md:text-xl font-bold text-black font-sans leading-snug md:leading-tight">
            Eliminamos las tareas manuales y repetitivas que sobrecargan a tu equipo y bloquean la operativa de tu empresa.
          </p>
          <p className="mt-3 text-xs md:text-base text-gray-700 font-sans opacity-95 leading-relaxed hidden md:block">
            Reduce un 70% el tiempo dedicado a gestión administrativa y operativa mediante flujos de trabajo automáticos.
          </p>
        </div>

        <div className="mt-8 md:mt-14 flex flex-col sm:flex-row justify-center gap-6 md:gap-6 relative z-30 items-stretch sm:items-center px-4 md:px-0 max-w-3xl mx-auto w-full">
          <a href="#diagnostico" className="bg-black text-white px-6 py-6 md:px-12 md:py-5 text-[15px] md:text-xl font-display uppercase tracking-wider hover:bg-brand-blue transition-all flex items-center justify-center gap-3 md:gap-4 group border-2 border-black rounded-full shadow-[4px_4px_0px_#4d65ff] md:shadow-sketch-lg hover:shadow-sketch-xl hover:-translate-y-1 w-full sm:w-auto">
            Analizar mi caso ahora
          </a>
          <a href="#sistemas" className="flex bg-transparent text-black px-6 py-5 md:px-12 md:py-5 text-[15px] md:text-xl font-display uppercase tracking-wider transition-all border-2 border-black rounded-full shadow-[4px_4px_0px_#000000] md:shadow-sketch hover:shadow-sketch-lg hover:-translate-y-1 text-center hover:bg-black/5 items-center justify-center w-full sm:w-auto">
            Ver cómo funciona
          </a>
        </div>
        <p className="mt-8 text-sm md:text-base font-medium text-gray-600 relative z-30">
          Revisamos tus procesos y te decimos si tiene sentido automatizarlos.
        </p>
        <p className="mt-4 text-[10px] md:text-xs text-gray-400 uppercase tracking-widest max-w-lg mx-auto relative z-30">
          No trabajamos con negocios que buscan soluciones rápidas sin ordenar su operativa.
        </p>
        <p className="mt-2 text-[10px] md:text-xs text-gray-500 font-bold italic relative z-30">
          "Si no tiene sentido automatizar ahora, te lo diremos."
        </p>

        {/* Mascot moved below CTAs on mobile */}
        <div className="md:hidden mt-8 flex justify-center">
          <img src="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d85869983afc658b8861ea_pepe%20(1).png" width="80" height="80" className="w-20 md:w-12 animate-float drop-shadow-sketch" alt="" />
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
    </section >
  );
};