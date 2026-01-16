import React from 'react';

const ShowcaseCard: React.FC<{ title: string; subtitle: string; image: string; color: string; rotate: string }> = ({ title, subtitle, image, color, rotate }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className={`relative bg-white border-4 border-black rounded-sketch p-4 shadow-sketch-xl mb-12 transform ${rotate} hover:rotate-0 transition-all duration-500 flex flex-col group/card`}>

      {/* Window Frame Header */}
      <div className="h-12 border-b-4 border-black mb-4 flex items-center px-4 gap-2 bg-gray-100 rounded-t-[2rem]">
        <div className="w-4 h-4 rounded-full border-2 border-black bg-red-400"></div>
        <div className="w-4 h-4 rounded-full border-2 border-black bg-yellow-400"></div>
        <div className="w-4 h-4 rounded-full border-2 border-black bg-green-400"></div>
      </div>

      <div className="relative overflow-hidden p-2">
        {/* Main Image Container */}
        <div className={`relative aspect-square border-4 border-black rounded-xl overflow-hidden mb-4 bg-gray-50 transition-transform duration-500 ${isExpanded ? '-translate-y-4 scale-95' : 'scale-100'}`}>
          <img src={image} alt={title} className={`w-full h-full object-cover transition-all duration-500 ${isExpanded ? 'grayscale opacity-30 shadow-inner' : 'grayscale-0'}`} />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none"></div>

          {/* Internal Stamp Effect */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-8 border-red-500 text-red-500 font-display text-4xl p-4 rotate-[-15deg] uppercase transition-all duration-300 pointer-events-none ${isExpanded ? 'opacity-80 scale-100' : 'opacity-0 scale-150'}`}>
            Auditado
          </div>
        </div>

        {/* The "Post-it" Details Layer */}
        <div className={`absolute inset-x-4 top-[10%] bottom-[35%] bg-brand-yellow border-4 border-black p-6 shadow-sketch-lg transition-all duration-500 rotate-2 flex flex-col justify-center ${isExpanded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-4xl">📌</div>
          <h4 className="font-display text-xl mb-4 border-b-2 border-black/20 pb-2 uppercase italic">Blueprint Detallado</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 font-sans font-bold text-base leading-tight text-gray-900">
              <span className="text-brand-orange mt-1">▶</span> {title.includes('WhatsApp') ? 'Filtro inteligente de audio y texto' : 'Orquestación n8n en tiempo real'}
            </li>
            <li className="flex items-start gap-2 font-sans font-bold text-base leading-tight text-gray-900">
              <span className="text-brand-orange mt-1">▶</span> Conexión directa con tu CRM actual
            </li>
            <li className="flex items-start gap-2 font-sans font-bold text-base leading-tight text-gray-900">
              <span className="text-brand-orange mt-1">▶</span> Lógica interna GPT-4o personalizada
            </li>
          </ul>
        </div>

        {/* Original Text */}
        <div className={`transition-all duration-500 ${isExpanded ? 'opacity-20 blur-[1px]' : 'opacity-100'}`}>
          <h3 className="text-3xl font-display uppercase leading-tight mb-2">{title}</h3>
          <p className="font-sans font-bold text-gray-500 leading-tight">{subtitle}</p>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`mt-6 w-full py-4 border-b-4 border-x-2 border-black rounded-lg font-display text-xl uppercase transition-all relative overflow-hidden group/btn
            ${isExpanded ? 'bg-black text-white' : color + ' hover:-translate-y-1 shadow-sketch hover:shadow-sketch-lg active:translate-y-1 active:shadow-none'}`}
        >
          <span className="relative z-10">{isExpanded ? 'CERRAR' : 'VER MÁS'}</span>
          {!isExpanded && (
            <div className="absolute inset-0 bg-white/40 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300"></div>
          )}
        </button>
      </div>
    </div>
  );
};

export const Pricing: React.FC<{ onBookingClick?: () => void }> = ({ onBookingClick }) => {
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
                  Todo eso se resuelve al <strong>automatizar negocio</strong>. Nosotros lo hacemos por ti.
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
            title="Flujos y Operativa"
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

        {/* Final CTA for Booking */}
        <div className="mt-20 text-center relative z-20">
          <div className="inline-block relative group">
            <div className="absolute inset-0 bg-brand-yellow rounded-full transform translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform"></div>
            <a
              href="#/agendar"
              className="relative inline-flex bg-white text-black px-12 py-6 text-2xl font-display uppercase border-4 border-black hover:-translate-y-1 transition-all rounded-full shadow-sketch items-center gap-4"
            >
              <span>📅</span>
              AGENDAR AUDITORÍA IA GRATUITA
            </a>
          </div>
          <p className="mt-6 font-comic text-xl text-gray-500 italic">Solo 4 huecos disponibles esta semana.</p>
        </div>

      </div>
    </section>
  );
};