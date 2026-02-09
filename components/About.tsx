import React from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

export const About: React.FC = () => {
  const headerRef = useRevealOnScroll<HTMLDivElement>();
  const item1Ref = useRevealOnScroll<HTMLDivElement>(0.1, 0);
  const item2Ref = useRevealOnScroll<HTMLDivElement>(0.1, 60);
  const item3Ref = useRevealOnScroll<HTMLDivElement>(0.1, 120);

  return (
    <section id="proceso" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">


        <div ref={headerRef} className="mb-20 md:mb-24 text-center relative px-2">
          <h2 className="text-4xl md:text-7xl font-display uppercase text-brand-dark drop-shadow-sketch-sm flex flex-col gap-3 md:gap-4 items-center">
            <span className="block leading-[1.1]">Existimos para que tu equipo</span>
            <span className="block leading-[1.1]">deje de ser un cuello de botella</span>
            <span className="block text-brand-blue leading-[1.1]">administrativo</span>
          </h2>
          <img src="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67cea55f56d0672e6cea6217_Group%201413376246.svg" width="96" height="96" loading="lazy" className="absolute -top-12 right-[5%] md:right-[10%] w-16 md:w-24 animate-wiggle" alt="Ojos observando procesos manuales en agencia" />
        </div>

        {/* Mobile Info Block (Moved from Hero) */}
        <div className="md:hidden mb-16 px-4">
          <div className="bg-white border-2 border-black p-6 rounded-sketch shadow-sketch flex flex-col gap-4">
            <p className="font-sans text-lg font-bold text-black leading-tight max-w-[280px]">
              Optimizamos la operativa interna de empresas de servicios con 5 a 50 empleados.
            </p>
            <p className="text-sm text-gray-700 font-sans leading-snug opacity-90">
              Evitamos que el crecimiento de tu negocio se detenga por saturación administrativa y errores en los datos.
            </p>
          </div>
        </div>

        {/* Conversation Thread Layout */}
        <div className="relative max-w-4xl mx-auto flex flex-col gap-20 md:gap-24 px-4 md:px-0">

          {/* Thread Line - Central dashed line (Hidden on mobile) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 border-l-4 border-dashed border-black -translate-x-1/2 hidden md:block opacity-20"></div>

          {/* Item 1: The real problem */}
          <div ref={item1Ref} className="flex flex-col md:flex-row items-center gap-6 md:gap-8 relative">
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="bg-white border-2 border-black p-6 md:p-8 rounded-sketch shadow-sketch-lg max-w-sm w-full min-h-[160px] md:min-h-[180px] flex flex-col justify-center relative">
                <h3 className="font-display text-xl mb-3 uppercase text-brand-blue">Control del caos operativo</h3>
                <p className="font-sans text-base md:text-xl font-medium leading-normal max-w-[260px] md:max-w-none">
                  <strong>Tu problema no es la tecnología.</strong><br />
                  Son los procesos invisibles: tareas que se repiten tres veces, datos que nadie valida.
                </p>
                <div className="absolute top-1/2 -right-4 w-6 h-6 bg-white border-t-2 border-r-2 border-black transform rotate-45 hidden md:block"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto animate-float">
                <img src="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d8589fe8dc80cbd5e9e377_Group%201413376294%20(1).svg" width="192" height="192" loading="lazy" className="w-full h-full object-contain relative z-10" alt="" />
              </div>
            </div>
          </div>

          {/* Item 2: The risk of just tools */}
          <div ref={item2Ref} className="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-8 relative">
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
              <div className="bg-[#f0f0f0] border-2 border-black p-6 md:p-8 rounded-sketch shadow-sketch-lg max-w-sm w-full min-h-[160px] md:min-h-[180px] flex flex-col justify-center relative transform rotate-[0.7deg]">
                <h3 className="font-display text-xl mb-3 uppercase text-brand-orange">Prevención de errores</h3>
                <p className="font-sans text-[15px] md:text-lg font-medium leading-snug max-w-[260px] md:max-w-none">
                  Añadir herramientas sin orden <strong>genera más carga:</strong><br />
                  nombres duplicados, estados que no se actualizan y el miedo al fallo.
                </p>
                <div className="absolute top-1/2 -left-4 w-6 h-6 bg-[#f0f0f0] border-b-2 border-l-2 border-black transform rotate-45 hidden md:block"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="w-28 h-28 md:w-40 md:h-40 border-2 border-black rounded-full overflow-hidden shadow-sketch bg-brand-blue/20">
                <img src="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67cea55cc5bf50c239de3837_Group%208.avif" width="160" height="160" loading="lazy" className="w-full h-full object-cover" alt="" />
              </div>
            </div>
          </div>

          {/* Item 3: The solution */}
          <div ref={item3Ref} className="flex flex-col md:flex-row items-center gap-6 md:gap-8 relative">
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="bg-white border-2 border-black p-6 md:p-8 rounded-sketch shadow-sketch-lg max-w-sm w-full min-h-[160px] md:min-h-[180px] flex flex-col justify-center relative transform -rotate-[0.7deg]">
                <h3 className="font-display text-xl mb-3 uppercase text-brand-blue">Criterio y Responsabilidad</h3>
                <p className="font-sans text-[15px] md:text-lg font-medium text-gray-700 leading-snug max-w-[260px] md:max-w-none">
                  Solo automatizamos lo que tiene sentido económico:<br />
                  <strong>Lógica sólida + flujos documentados + IA rentable.</strong>
                </p>
                <div className="absolute top-1/2 -right-4 w-6 h-6 bg-white border-t-2 border-r-2 border-black transform rotate-45 hidden md:block"></div>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
              <div className="w-32 h-48 md:w-48 md:h-64 border-2 border-black bg-white p-2 shadow-sketch-lg transform rotate-[1.4deg]">
                <div className="w-full h-full border border-black bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img src="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67cea55cd116d2752357d464_%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80.avif" width="192" height="256" loading="lazy" className="w-full h-full object-cover" alt="El Jefe" />
                </div>
                <div className="text-center mt-3 font-display text-xs tracking-wider">SISTEMAS QUE FUNCIONAN</div>
              </div>
            </div>
          </div>

          {/* Item 4: Brief About Us (Moved to end) */}
          <div className="mt-8 pt-8 border-t-2 border-black/5 text-center">
            <p className="font-sans text-sm md:text-base font-bold text-gray-600 uppercase tracking-widest max-w-2xl mx-auto px-4">
              Somos IA_Parallax. Auditamos, ordenamos y ejecutamos la operativa que tu empresa necesita para ser eficiente.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};