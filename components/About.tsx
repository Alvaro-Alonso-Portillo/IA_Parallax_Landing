import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about-us" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">


        <div className="mb-24 text-center relative">
          <h2 className="text-5xl md:text-7xl font-display uppercase text-brand-dark drop-shadow-sketch-sm flex flex-col gap-4 items-center">
            <span className="block">
              ¿Quiénes <span className="text-brand-yellow px-3 py-2 bg-black inline-block transform -rotate-1 mx-2">somos?</span>
            </span>
            <span className="block">Esa es una buena</span>
            <span className="block">pregunta...</span>
          </h2>
          <img src="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67cea55f56d0672e6cea6217_Group%201413376246.svg" className="absolute -top-10 right-[10%] w-24 animate-wiggle" alt="Ojos observando procesos manuales en agencia" />
        </div>

        {/* Conversation Thread Layout */}
        <div className="relative max-w-4xl mx-auto flex flex-col gap-12 md:gap-24">

          {/* Thread Line - Central dashed line (Hidden on mobile) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 border-l-4 border-dashed border-black -translate-x-1/2 hidden md:block opacity-20"></div>

          {/* Item 1: Bubble Left, Character Right */}
          <div className="flex flex-col md:flex-row items-center gap-8 relative">
            <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-1">
              <div className="bg-white border-2 border-black p-8 rounded-sketch shadow-sketch max-w-sm relative">
                <p className="font-sans text-xl font-medium">
                  Somos <span className="font-bold text-brand-blue">IA_Parallax</span>. Diseñamos automatizaciones con inteligencia artificial para negocios que quieren orden, control y menos trabajo repetitivo.
                </p>
                <div className="absolute top-1/2 -right-4 w-6 h-6 bg-white border-t-2 border-r-2 border-black transform rotate-45 hidden md:block"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative order-2 md:order-2">
              <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto animate-float">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-32 bg-black hidden md:block"></div>
                <img src="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d8589fe8dc80cbd5e9e377_Group%201413376294%20(1).svg" className="w-full h-full object-contain relative z-10 md:top-12" alt="Experto en IA diseñando soluciones para agencias" />
              </div>
            </div>
          </div>

          {/* Item 2: Bubble Right, Character Left (Stacked differently on mobile) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 relative">
            <div className="w-full md:w-1/2 flex justify-center md:justify-start order-1 md:order-1">
              <div className="bg-[#f0f0f0] border-2 border-black p-8 rounded-sketch shadow-sketch max-w-sm relative transform rotate-1">
                <p className="font-sans text-xl font-medium">
                  No vendemos <span className="bg-brand-yellow px-1 border border-black transform -rotate-2 inline-block">humo</span> ni promesas raras. Analizamos cómo trabajas, detectamos lo que sobra y lo convertimos en sistemas que funcionan sin vigilancia constante.
                </p>
                <div className="absolute top-1/2 -left-4 w-6 h-6 bg-[#f0f0f0] border-b-2 border-l-2 border-black transform rotate-45 hidden md:block"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center order-2 md:order-2">
              <div className="w-32 h-32 md:w-40 md:h-40 border-2 border-black rounded-full overflow-hidden shadow-sketch bg-brand-blue/20">
                <img src="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67cea55cc5bf50c239de3837_Group%208.avif" className="w-full h-full object-cover" alt="Ilustración de personaje analizando flujos de trabajo con IA" />
              </div>
            </div>
          </div>

          {/* Item 3: Bubble Left, Framed Character Right */}
          <div className="flex flex-col md:flex-row items-center gap-8 relative">
            <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-1">
              <div className="bg-white border-2 border-black p-8 rounded-sketch shadow-sketch max-w-sm relative transform -rotate-1">
                <p className="font-sans text-xl font-medium">
                  Automatizamos procesos reales.
                  <br />
                  Menos caos operativo. Más claridad diaria.
                </p>
                <div className="absolute top-1/2 -right-4 w-6 h-6 bg-white border-t-2 border-r-2 border-black transform rotate-45 hidden md:block"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center order-2 md:order-2">
              <div className="w-40 h-56 md:w-48 md:h-64 border-2 border-black bg-white p-2 shadow-sketch transform rotate-2">
                <div className="w-full h-full border border-black bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img src="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67cea55cd116d2752357d464_%D0%9E%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80.avif" className="w-full h-full object-cover" alt="Retrato de experto en automatización IA" />
                </div>
                <div className="text-center mt-2 font-display text-xs md:text-sm">EL JEFE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};