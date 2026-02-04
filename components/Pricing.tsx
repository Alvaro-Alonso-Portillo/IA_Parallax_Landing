import React from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const ShowcaseCard: React.FC<{ title: string; subtitle: string; image: string; color: string; rotate: string; delay?: number }> = ({ title, subtitle, image, color, rotate, delay = 0 }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const revealRef = useRevealOnScroll<HTMLDivElement>(0.1, delay);

  return (
    <div ref={revealRef} className="h-full">
      <div className={`relative bg-white border-2 border-black rounded-sketch p-3 shadow-sketch-lg mb-12 transform ${rotate} transition-all duration-200 ease-out [@media(pointer:fine)]:hover:-translate-y-[2px] [@media(pointer:fine)]:hover:shadow-sketch-xl flex flex-col group/card h-full`}>

        {/* Window Frame Header */}
        <div className="h-10 border-b-2 border-black mb-3 flex items-center px-4 gap-2 bg-gray-100 rounded-t-[1.5rem]">
          <div className="w-3 h-3 rounded-full border-[1.5px] border-black bg-red-400"></div>
          <div className="w-3 h-3 rounded-full border-[1.5px] border-black bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full border-[1.5px] border-black bg-green-400"></div>
        </div>

        <div className="relative overflow-hidden p-1">
          {/* Main Image Container */}
          <div className={`relative aspect-square border-2 border-black rounded-xl overflow-hidden mb-4 bg-gray-50 transition-transform duration-500 ${isExpanded ? '-translate-y-4 scale-95' : 'scale-100'}`}>
            <img src={image} alt={title} className={`w-full h-full object-cover transition-all duration-500 ${isExpanded ? 'grayscale opacity-30 shadow-inner' : 'grayscale-0'}`} />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none"></div>

            {/* Internal Stamp Effect */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-[4px] border-red-500 text-red-500 font-display text-4xl p-4 rotate-[-15deg] uppercase transition-all duration-300 pointer-events-none ${isExpanded ? 'opacity-80 scale-100' : 'opacity-0 scale-150'}`}>
              Auditado
            </div>
          </div>

          {/* The "Post-it" Details Layer */}
          <div className={`absolute inset-x-2 top-[5%] bottom-[40%] bg-brand-yellow border-2 border-black p-4 shadow-sketch-lg transition-all duration-500 rotate-2 flex flex-col justify-center ${isExpanded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-3xl">📌</div>
            <h4 className="font-display text-xl mb-3 border-b-2 border-black/20 pb-2 uppercase italic">Blueprint Detallado</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 font-sans font-bold text-sm md:text-base leading-tight text-gray-900">
                <span className="text-brand-orange mt-1">▶</span> Validación automática de datos
              </li>
              <li className="flex items-start gap-2 font-sans font-bold text-sm md:text-base leading-tight text-gray-900">
                <span className="text-brand-orange mt-1">▶</span> Conexión directa entre tus aplicaciones
              </li>
              <li className="flex items-start gap-2 font-sans font-bold text-sm md:text-base leading-tight text-gray-900">
                <span className="text-brand-orange mt-1">▶</span> Clasificación y envío de documentos
              </li>
            </ul>
          </div>

          {/* Original Text */}
          <div className={`transition-all duration-500 ${isExpanded ? 'opacity-20 blur-[1px]' : 'opacity-100'}`}>
            <h3 className="text-2xl md:text-3xl font-display uppercase leading-tight mb-2">{title}</h3>
            <p className="font-sans font-bold text-gray-500 leading-tight text-sm md:text-base">{subtitle}</p>
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`mt-4 w-full py-6 border-2 border-black rounded-full font-display text-lg md:text-xl uppercase transition-all relative overflow-hidden group/btn hover:-translate-y-1 shadow-sketch hover:shadow-sketch-lg
            ${isExpanded ? 'bg-black text-white' : color + ' active:translate-y-1 active:shadow-none'}`}
          >
            <span className="relative z-10">{isExpanded ? 'CERRAR' : 'VER MÁS'}</span>
            {!isExpanded && (
              <div className="absolute inset-0 bg-white/40 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300"></div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export const Pricing: React.FC = () => {
  const headerRef = useRevealOnScroll<HTMLHeadingElement>();
  const descBoxRef = useRevealOnScroll<HTMLDivElement>(0.1, 40);

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-24 items-center">

          {/* Intro Section - Now part of the grid */}
          <div className="relative">
            <h2 ref={headerRef} className="text-4xl md:text-6xl font-display uppercase leading-[1.1] text-brand-dark drop-shadow-sketch-sm mb-8 relative">
              Automatización para <br />
              eliminar el <span className="text-brand-blue">trabajo administrativo</span> <br />
              <span className="text-brand-orange underline decoration-wavy decoration-black underline-offset-8">aburrido</span>
              <span className="absolute -top-12 -left-8 text-6xl text-brand-yellow animate-spin-slow opacity-50">✦</span>
            </h2>

            {/* Decorative Box and Character */}
            <div ref={descBoxRef} className="relative inline-block w-full">
              <div className="bg-[#f0f0f0] border-2 border-black p-8 rounded-sketch shadow-sketch-lg transform rotate-1 relative z-10">
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
            title="Automatización de Operativa"
            subtitle="Eliminamos la carga administrativa y el volcado manual entre Excels. Resultado: Procesos 100% automáticos y sin errores humanos."
            image="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d1d4f1b90511ce48cd4d3b_snork.avif"
            color="bg-brand-blue/20"
            rotate="rotate-2"
            delay={0}
          />

          {/* Grid Item 3 - Second Card */}
          <ShowcaseCard
            title="Agenda en WhatsApp 24/7"
            subtitle="Eliminamos la pérdida de contactos fuera de horario con citas automáticas. Resultado: Consultas atendidas y reuniones agendadas al instante."
            image="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d1d4f0540b33d5d141c396_notdog.avif"
            color="bg-brand-yellow/20"
            rotate="-rotate-2"
            delay={60}
          />

          {/* Grid Item 4 - Third Card */}
          <ShowcaseCard
            title="Filtro Automático de Leads"
            subtitle="Eliminamos las llamadas a leads que no encajan con tu servicio. Resultado: Tu equipo solo atiende a clientes listos para comprar."
            image="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d85869983afc658b8861ea_pepe%20(1).png"
            color="bg-green-200"
            rotate="rotate-2"
            delay={120}
          />

        </div>

        {/* Final CTA for Booking */}
        <div className="mt-20 text-center relative z-20">
          <div className="inline-block relative group">
            <div className="absolute inset-0 bg-brand-yellow rounded-full transform translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform"></div>
            <a
              href="#diagnostico"
              className="relative w-full sm:w-auto inline-flex justify-center bg-white text-black px-8 py-6 md:px-12 md:py-5 text-lg md:text-2xl font-display uppercase border-2 border-black hover:-translate-y-1 transition-all rounded-full shadow-sketch-lg items-center gap-4"
            >
              <span>📅</span>
              ANALIZAR MI OPERATIVA
            </a>
          </div>
          <p className="mt-6 font-comic text-xl text-gray-500 italic">Hablamos 15 min y validamos la viabilidad técnica de tu proyecto.</p>
        </div>

      </div>
    </section>
  );
};