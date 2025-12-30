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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Content - Sticky */}
          <div className="lg:sticky lg:top-32 self-start">
            <h2 className="text-4xl md:text-6xl font-display uppercase leading-[1.1] text-brand-dark drop-shadow-sketch-sm mb-8">
              Hacemos que el <br />
              trabajo <span className="text-brand-blue">aburrido</span> <br />
              <span className="text-brand-orange underline decoration-wavy decoration-black underline-offset-8">desaparezca</span>
              <span className="absolute -top-10 left-0 text-6xl text-brand-yellow animate-spin-slow">✦</span>
            </h2>

            {/* Decorative Box */}
            <div className="bg-[#f0f0f0] border-4 border-black p-8 rounded-sketch shadow-sketch max-w-md transform rotate-2">
              <p className="font-sans font-medium text-lg text-black leading-relaxed">
                Tareas repetidas, mensajes, datos, seguimientos y errores humanos.
                <br /><br />
                Todo eso se puede automatizar. Nosotros lo hacemos por ti.
              </p>
            </div>
          </div>

          {/* Right Content - Scrollable Stack */}
          <div className="flex flex-col gap-8 md:px-12">
            <ShowcaseCard
              title="Automatización de procesos"
              subtitle="Convertimos tareas manuales en flujos automáticos que trabajan sin descanso y sin errores."
              image="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d1d4f1b90511ce48cd4d3b_snork.avif"
              color="bg-brand-blue/20"
              rotate="rotate-2"
            />
            <ShowcaseCard
              title="Agentes IA para WhatsApp"
              subtitle="Agentes que responden, filtran y ordenan conversaciones sin que tengas que estar pendiente."
              image="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d1d4f0540b33d5d141c396_notdog.avif"
              color="bg-brand-yellow/20"
              rotate="-rotate-1"
            />
            <ShowcaseCard
              title="Gestión inteligente de leads"
              subtitle="Clasificación automática de contactos para que solo atiendas a los que importan."
              image="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d85869983afc658b8861ea_pepe%20(1).png"
              color="bg-green-200"
              rotate="rotate-1"
            />
          </div>

        </div>

      </div>
    </section>
  );
};