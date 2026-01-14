import React from 'react';
import { Cloud1, Cloud2, CloudWithAntenna, FistIcon, SoonSticker } from './SketchIcons';

export const Hero: React.FC<{ onBookingClick?: () => void }> = ({ onBookingClick }) => {
  return (
    <section className="relative pt-32 pb-12 md:pt-48 md:pb-24 px-4 overflow-hidden bg-brand-light">
      <div className="max-w-[1440px] mx-auto text-center relative z-30">

        {/* Floating Icons Top */}
        <img src="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67cad69f3992b0e11978a58c_Group%201413376293.svg" className="absolute top-0 left-[10%] w-12 md:w-20 animate-float drop-shadow-sketch" alt="Icono decorativo de automatización de agencia" />
        <img src="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67cad69f1e2ae2bd07f15125_Vector.svg" className="absolute top-10 right-[15%] w-8 md:w-16 animate-spin-slow" alt="" />

        <div className="flex flex-col items-center gap-2 md:gap-4 relative">

          <div className="relative z-10">
            <h1 className="text-[10vw] md:text-[6rem] lg:text-[7.5rem] leading-[0.85] font-display uppercase text-brand-dark tracking-tighter drop-shadow-sketch-sm">
              DEJA DE GESTIONAR
            </h1>
          </div>

          <div className="relative z-10">
            <h1 className="text-[14vw] md:text-[10rem] lg:text-[13rem] leading-[0.85] font-display uppercase text-brand-dark tracking-tighter drop-shadow-sketch-sm">
              EL CAOS.
            </h1>
          </div>

          <div className="relative z-10">
            <h1 className="text-[10vw] md:text-[6rem] lg:text-[7.5rem] leading-[0.85] font-display uppercase text-brand-blue tracking-tighter drop-shadow-sketch-sm">
              EMPIEZA A GESTIONAR
            </h1>
          </div>

          <div className="relative z-10">
            <h1 className="text-[10vw] md:text-[6rem] lg:text-[7.5rem] leading-[0.9] font-display uppercase text-brand-orange tracking-tighter drop-shadow-sketch-sm relative inline-block">
              EL CRECIMIENTO.
              {/* Wavy Line Underline */}
              <div className="absolute -bottom-4 left-0 w-full h-8 overflow-hidden">
                <svg viewBox="0 0 500 20" preserveAspectRatio="none" className="w-full h-full stroke-black stroke-[4] fill-none">
                  <path d="M0,10 Q25,0 50,10 T100,10 T150,10 T200,10 T250,10 T300,10 T350,10 T400,10 T450,10 T500,10" />
                </svg>
              </div>
              {/* Sparkle/Star decoration */}
              <span className="absolute -top-8 -right-8 text-brand-yellow animate-wiggle text-4xl md:text-6xl -z-10">✦</span>
            </h1>
            {/* Pepe adjusted for tighter layout */}
            <img src="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d85869983afc658b8861ea_pepe%20(1).png" className="absolute -left-16 md:-left-32 top-1/2 -translate-y-1/2 w-20 md:w-40 animate-float drop-shadow-sketch -scale-x-100 -z-10 pointer-events-none" alt="Meme Pepe gestionando sistemas de IA para agencias" />
          </div>
        </div>

        <div className="mt-12 max-w-2xl mx-auto text-lg md:text-xl font-medium text-black font-sans relative z-20 border-2 border-black p-6 rounded-sketch bg-white shadow-sketch transform -rotate-1">
          <p>
            En IA_Parallax transformamos agencias y negocios saturados en máquinas eficientes. Automatizamos desde la cualificación de leads hasta el reporte final, para que tu equipo recupere su tiempo y tu negocio escale sin romper sus operaciones.
          </p>
        </div>

        <div className="mt-8 md:mt-12 flex justify-center gap-4 md:gap-6 relative z-30 flex-col md:flex-row items-center px-4 md:px-0">
          <a href="#/agendar" className="w-full md:w-auto bg-black text-white px-8 py-4 text-lg md:text-xl font-display uppercase tracking-wider hover:bg-brand-blue transition-all flex items-center justify-center gap-4 group border-2 border-black rounded-full shadow-sketch hover:shadow-sketch-lg hover:-translate-y-1">
            <span className="text-xl md:text-2xl">👊</span>
            QUIERO AUTOMATIZAR
          </a>
          <a href="#/agendar" className="w-full md:w-auto bg-brand-yellow text-black px-8 py-4 text-lg md:text-xl font-display uppercase tracking-wider transition-all border-2 border-black rounded-full shadow-sketch hover:shadow-sketch-lg hover:-translate-y-1 text-center">
            AGENDAR AUDITORÍA
          </a>
          <a href="#/capabilities" className="w-full md:w-auto relative bg-white text-black px-8 py-4 text-lg md:text-xl font-display uppercase tracking-wider hover:bg-gray-50 transition-all border-2 border-black rounded-full shadow-sketch hover:shadow-sketch-lg hover:-translate-y-1 text-center">
            VER QUÉ PUEDE HACER
          </a>
        </div>
      </div>

      {/* Main Hero Scene - FULL WIDTH and FRAMELESS */}
      <div className="mt-8 md:mt-4 relative w-full z-20 overflow-hidden">
        <div className="w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto min-h-[400px] object-cover md:object-contain scale-110 md:scale-100"
            poster="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67cae6243a1c4e9ed492fe67_Group%201413376292.avif"
            aria-label="Ilustración de equipo saturado gestionando el caos manual en una agencia"
          >
            <source src="https://dl.dropbox.com/s/3bye82qxpc4mh5jlygi5a/Main_screen.mp4?rlkey=556fjirf5j85ax4biworxnc3b&st=bru1tcy6&dl=0" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Clouds / Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <Cloud1 className="absolute top-20 left-[5%] w-48 h-24 animate-float opacity-90" />
        <CloudWithAntenna className="absolute bottom-40 left-[15%] w-64 h-40 animate-float-delayed opacity-90" />
        <Cloud2 className="absolute top-40 right-[10%] w-56 h-28 animate-float opacity-90" />
        <Cloud1 className="absolute bottom-20 right-[5%] w-40 h-20 animate-wiggle opacity-80" />
      </div>
    </section>
  );
};