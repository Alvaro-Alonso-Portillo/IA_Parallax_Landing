import React, { useState } from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b-2 border-black last:border-b-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex justify-between items-center text-left hover:text-brand-blue transition-colors group"
            >
                <span className="font-display text-lg md:text-2xl uppercase tracking-tighter">{question}</span>
                <span className={`text-2xl transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                    {isOpen ? '✕' : '+'}
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
            >
                <p className="font-sans text-base md:text-lg font-medium text-gray-600 leading-relaxed">
                    {answer}
                </p>
            </div>
        </div>
    );
};

export const FAQ: React.FC = () => {
    const headerRef = useRevealOnScroll<HTMLHeadingElement>();
    const cardRef = useRevealOnScroll<HTMLDivElement>(0.1, 40);

    return (
        <section id="faq" className="py-24 bg-[#f9f9f9] border-y-2 border-black relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
                <h2 ref={headerRef} className="text-[clamp(1.5rem,7vw,2.5rem)] sm:text-5xl md:text-6xl font-display uppercase text-brand-dark mb-12 text-center drop-shadow-sketch-sm break-words">
                    Dudas sobre <span className="text-brand-yellow px-2 bg-black inline-block transform rotate-0 sm:-rotate-1 text-white mx-1 sm:mx-2 max-w-full">Automatización</span>
                </h2>

                <div ref={cardRef} className="bg-white border-4 border-black p-6 md:p-10 shadow-sketch-lg rounded-sketch">
                    <FAQItem
                        question="¿Esto sirve para cualquier negocio?"
                        answer="No. Funciona mejor en empresas de servicios con procesos definidos, como en la automatización de leads y agenda para inmobiliarias, o simplemente para eliminar el trabajo manual entre aplicaciones conectando tus herramientas diarias."
                    />
                    <FAQItem
                        question="¿Cuánto tiempo tarda en verse el resultado?"
                        answer="Depende del punto de partida, pero siempre definimos tiempos claros desde el inicio."
                    />
                    <FAQItem
                        question="¿Tengo que cambiar mis herramientas actuales?"
                        answer="No necesariamente. Primero analizamos lo que ya usas."
                    />
                </div>
            </div>

            {/* Decorative background element */}
            <div className="absolute top-1/2 -right-20 text-[15rem] leading-none text-black/5 select-none pointer-events-none font-display transform rotate-12">
                ?
            </div>
        </section>
    );
};
