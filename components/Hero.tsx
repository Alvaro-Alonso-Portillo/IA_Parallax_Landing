import React from 'react';
import { Cloud1, Cloud2, CloudWithAntenna, FistIcon, SoonSticker } from './SketchIcons';

export const Hero: React.FC<{ onBookingClick?: () => void }> = ({ onBookingClick }) => {
  return (
    <section className="relative pt-32 pb-12 md:pt-48 md:pb-24 px-4 overflow-hidden bg-brand-light">
      <div className="max-w-[1440px] mx-auto text-center relative z-30">

        {/* Floating Icons Top */}
        <img src="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67cad69f3992b0e11978a58c_Group%201413376293.svg" className="absolute top-0 left-[10%] w-12 md:w-20 animate-float drop-shadow-sketch" alt="Icono decorativo de automatización de agencia" />
        <img src="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67cad69f1e2ae2bd07f15125_Vector.svg" className="absolute top-10 right-[15%] w-8 md:w-16 animate-spin-slow" alt="" />

        <div className="flex flex-col items-center gap-1 md:gap-4 relative px-2">

          <div className="relative z-10 w-full">
            <h1 className="text-[9vw] sm:text-[10vw] md:text-[6rem] lg:text-[7.5rem] leading-[0.9] md:leading-[0.85] font-display uppercase text-brand-dark tracking-tighter drop-shadow-sketch-sm">
              DEJA DE GESTIONAR
            </h1>
          </div>

          <div className="relative z-10 w-full">
            <h1 className="text-[12vw] sm:text-[14vw] md:text-[10rem] lg:text-[13rem] leading-[0.9] md:leading-[0.85] font-display uppercase text-brand-dark tracking-tighter drop-shadow-sketch-sm">
              EL CAOS.
            </h1>
          </div>

          <div className="relative z-10 w-full">
            <h1 className="text-[9vw] sm:text-[10vw] md:text-[6rem] lg:text-[7.5rem] leading-[0.9] md:leading-[0.85] font-display uppercase text-brand-blue tracking-tighter drop-shadow-sketch-sm">
              EMPIEZA A GESTIONAR
            </h1>
          </div>

          <div className="relative z-10 w-full">
            <h1 className="text-[9vw] sm:text-[10vw] md:text-[6rem] lg:text-[7.5rem] leading-[0.9] font-display uppercase text-brand-orange tracking-tighter drop-shadow-sketch-sm relative inline-block">
              EL CRECIMIENTO.
              {/* Wavy Line Underline */}
              <div className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-4 md:h-8 overflow-hidden">
                <svg viewBox="0 0 500 20" preserveAspectRatio="none" className="w-full h-full stroke-black stroke-[4] fill-none">
                  <path d="M0,10 Q25,0 50,10 T100,10 T150,10 T200,10 T250,10 T300,10 T350,10 T400,10 T450,10 T500,10" />
                </svg>
              </div>
              {/* Sparkle/Star decoration */}
              <span className="absolute -top-6 -right-6 md:-top-8 md:-right-8 text-brand-yellow animate-wiggle text-2xl md:text-6xl -z-10">✦</span>
            </h1>
            {/* Pepe adjusted for tighter layout */}
            <img src="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d85869983afc658b8861ea_pepe%20(1).png" className="absolute -left-12 sm:-left-16 md:-left-32 top-1/2 -translate-y-1/2 w-16 md:w-40 animate-float drop-shadow-sketch -scale-x-100 -z-10 pointer-events-none opacity-40 md:opacity-100" alt="Meme Pepe gestionando sistemas de IA para agencias" />
          </div>
        </div>

        <div className="mt-10 md:mt-12 max-w-2xl mx-auto text-base md:text-xl font-medium text-black font-sans relative z-20 border-2 border-black p-5 md:p-6 rounded-sketch bg-white shadow-sketch transform -rotate-1 mx-4">
          <p>
            En IA_Parallax transformamos agencias y negocios saturados en máquinas eficientes. Automatizamos procesos para que tu equipo recupere su tiempo y tu negocio escale.
          </p>
        </div>

        <div className="mt-8 md:mt-12 flex flex-col sm:flex-row justify-center gap-4 md:gap-6 relative z-30 items-stretch sm:items-center px-4 md:px-0 max-w-3xl mx-auto">
          <a href="#/agendar" className="bg-black text-white px-6 md:px-8 py-4 text-base md:text-xl font-display uppercase tracking-wider hover:bg-brand-blue transition-all flex items-center justify-center gap-3 md:gap-4 group border-2 border-black rounded-full shadow-sketch hover:shadow-sketch-lg hover:-translate-y-1">
            <span className="text-xl md:text-2xl">👊</span>
            AUTOMATIZAR YA
          </a>
          <a href="#/agendar" className="bg-brand-yellow text-black px-6 md:px-8 py-4 text-base md:text-xl font-display uppercase tracking-wider transition-all border-2 border-black rounded-full shadow-sketch hover:shadow-sketch-lg hover:-translate-y-1 text-center">
            AGENDAR AUDITORÍA
          </a>
          <a href="#/capabilities" className="bg-white text-black px-6 md:px-8 py-4 text-base md:text-xl font-display uppercase tracking-wider hover:bg-gray-50 transition-all border-2 border-black rounded-full shadow-sketch hover:shadow-sketch-lg hover:-translate-y-1 text-center">
            VER MÁS
          </a>
        </div>

      </div>

      {/* Main Hero Scene - CORRECTED TO SHOW DIFFERENT PARTS ON MOBILE */}
      <div className="mt-8 md:mt-4 relative w-full z-20 overflow-hidden bg-[#f0f0f0] border-y-2 md:border-y-0 border-black">

        {/* Mobile: Split View focusing on different parts of the SAME video */}
        <div className="md:hidden flex flex-col">
          {/* Top Panel: Focusing on the LEFT side (CHAOS/LAB) */}
          <div className="relative aspect-[16/10] overflow-hidden border-b-4 border-black">
            <video
              autoPlay loop muted playsInline
              className="absolute inset-0 w-full h-full object-cover object-left"
              poster="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67cae6243a1c4e9ed492fe67_Group%201413376292.avif"
            >
              <source src="https://dl.dropbox.com/s/3bye82qxpc4mh5jlygi5a/Main_screen.mp4?rlkey=556fjirf5j85ax4biworxnc3b&st=bru1tcy6&dl=0" type="video/mp4" />
            </video>
            <div className="absolute top-4 left-4 bg-brand-blue text-white px-3 py-1 font-display text-sm border-2 border-black shadow-sketch rotate-[-2deg] z-10">EL LAB (CAOS)</div>
          </div>

          {/* Bottom Panel: Focusing on the RIGHT side (GROWTH/SUCCESS) */}
          <div className="relative aspect-[16/10] overflow-hidden">
            <video
              autoPlay loop muted playsInline
              className="absolute inset-0 w-full h-full object-cover object-right"
              poster="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67cae6243a1c4e9ed492fe67_Group%201413376292.avif"
            >
              <source src="https://dl.dropbox.com/s/3bye82qxpc4mh5jlygi5a/Main_screen.mp4?rlkey=556fjirf5j85ax4biworxnc3b&st=bru1tcy6&dl=0" type="video/mp4" />
            </video>
            <div className="absolute bottom-4 right-4 bg-brand-orange text-white px-3 py-1 font-display text-sm border-2 border-black shadow-sketch rotate-[2deg] z-10">EL ÉXITO (TU CRECIMIENTO)</div>
          </div>
        </div>

        {/* Desktop: Original Wide View remains unchanged */}
        <div className="hidden md:block w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto min-h-[400px] object-contain"
            poster="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67cae6243a1c4e9ed492fe67_Group%201413376292.avif"
            aria-label="Ilustración panorámica de automatización de agencia"
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