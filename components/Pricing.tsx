import React from 'react';

const ShowcaseCard: React.FC<{ title: string; subtitle: string; image: string; color: string; rotate: string }> = ({ title, subtitle, image, color, rotate }) => (
  <div className={`relative bg-white border-4 border-black rounded-sketch p-4 shadow-sketch-xl mb-12 transform ${rotate} hover:rotate-0 transition-transform duration-300`}>
    {/* Window Frame Header */}
    <div className="h-12 border-b-4 border-black mb-4 flex items-center px-4 gap-2 bg-gray-100 rounded-t-[2rem]">
      <div className="w-4 h-4 rounded-full border-2 border-black bg-red-400"></div>
      <div className="w-4 h-4 rounded-full border-2 border-black bg-yellow-400"></div>
      <div className="w-4 h-4 rounded-full border-2 border-black bg-green-400"></div>
    </div>

    {/* Image Content */}
    <div className="relative aspect-square border-4 border-black rounded-xl overflow-hidden mb-4 bg-gray-50">
      <img src={image} alt={title} className="w-full h-full object-cover" />

      {/* Shine effect */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/20 to-transparent pointer-events-none"></div>
    </div>

    {/* Footer Text */}
    <div className="text-left">
      <h3 className="text-3xl font-display uppercase">{title}</h3>
      <p className="font-sans font-bold text-gray-500">{subtitle}</p>
      <button className={`mt-4 w-full py-3 border-2 border-black rounded-full font-bold uppercase hover:bg-black hover:text-white transition-colors ${color}`}>
        VER MÁS
      </button>
    </div>
  </div>
);

export const Pricing: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-24 items-center">

          {/* Intro Section - Now part of the grid */}
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-display uppercase leading-[1.1] text-brand-dark drop-shadow-sketch-sm mb-8 relative">
              Hacemos que el <br />
              trabajo <span className="text-brand-blue">aburrido</span> <br />
              <span className="text-brand-orange underline decoration-wavy decoration-black underline-offset-8">desaparezca</span>
              <span className="absolute -top-12 -left-8 text-6xl text-brand-yellow animate-spin-slow opacity-50">✦</span>
            </h2>

            {/* Decorative Box and Character */}
            <div className="relative inline-block w-full">
              <div className="bg-[#f0f0f0] border-4 border-black p-8 rounded-sketch shadow-sketch max-w-md transform rotate-1 relative z-10">
                <p className="font-sans font-medium text-lg text-black leading-relaxed">
                  Tareas repetidas, mensajes, datos, seguimientos y errores humanos.
                  <br /><br />
                  Todo eso se puede automatizar. Nosotros lo hacemos por ti.
                </p>
              </div>

              {/* Hand-drawn Arrow pointing to the next card */}
              <svg className="absolute -right-12 -bottom-12 w-32 h-32 text-black hidden lg:block transform rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M10,10 Q50,10 80,50" />
                <path d="M70,50 L80,50 L80,40" />
                <text x="0" y="90" className="font-accent text-sm fill-current rotate-[-15deg]">¡MIRA ESTO!</text>
              </svg>

              {/* Character sticking out */}
              <img src="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67cad69f3992b0e11978a58c_Group%201413376293.svg"
                className="absolute -left-16 bottom-0 w-24 animate-bounce z-0 opacity-80" alt="" />
            </div>
          </div>

          {/* Grid Item 2 - First Card */}
          <ShowcaseCard
            title="Automatización de procesos"
            subtitle="Convertimos tareas manuales en flujos automáticos que trabajan sin descanso y sin errores."
            image="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d1d4f1b90511ce48cd4d3b_snork.avif"
            color="bg-brand-blue/20"
            rotate="rotate-2"
          />

          {/* Grid Item 3 - Second Card */}
          <ShowcaseCard
            title="Agentes IA para WhatsApp"
            subtitle="Agentes que responden, filtran y ordenan conversaciones sin que tengas que estar pendiente."
            image="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d1d4f0540b33d5d141c396_notdog.avif"
            color="bg-brand-yellow/20"
            rotate="-rotate-2"
          />

          {/* Grid Item 4 - Third Card */}
          <ShowcaseCard
            title="Gestión inteligente de leads"
            subtitle="Clasificación automática de contactos para que solo atiendas a los que importan."
            image="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d85869983afc658b8861ea_pepe%20(1).png"
            color="bg-green-200"
            rotate="rotate-2"
          />

        </div>

      </div>
    </section>
  );
};