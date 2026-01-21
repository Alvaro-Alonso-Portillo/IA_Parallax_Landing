import React, { useState } from 'react';

type State = 'caos' | 'crecimiento';

export const BeforeAfterToggle: React.FC = () => {
    const [state, setState] = useState<State>('caos');

    const content = {
        caos: {
            label: 'EL LAB (CAOS)',
            bullets: [
                'Tareas repetidas y manuales.',
                'Leads sin seguimiento.'
            ],
            color: 'bg-brand-blue'
        },
        crecimiento: {
            label: 'EL ÉXITO (TU CRECIMIENTO)',
            bullets: [
                'Operativa automatizada.',
                'Leads priorizados y atendidos.'
            ],
            color: 'bg-brand-orange'
        }
    };

    const baseImage = 'https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67cae6243a1c4e9ed492fe67_Group%201413376292.avif';

    return (
        <section className="pt-16 pb-24 px-4 bg-white border-t-2 border-black">
            <div className="max-w-[360px] md:max-w-[680px] mx-auto text-center relative z-10">
                {/* Header */}
                <h2 className="text-3xl md:text-5xl font-display uppercase mb-2">Antes / Después</h2>
                <p className="text-gray-500 text-sm uppercase tracking-widest mb-8">Mismo negocio. Dos estados.</p>

                {/* Toggle Control */}
                <div className="inline-flex p-1 bg-white border-2 border-black rounded-full mb-8 relative z-10">
                    <button
                        onClick={() => setState('caos')}
                        className={`px-8 h-12 flex items-center justify-center rounded-full font-display uppercase text-sm transition-all duration-200 ease-out ${state === 'caos'
                            ? 'bg-black text-white'
                            : 'bg-white text-black hover:bg-gray-50'
                            }`}
                    >
                        Caos
                    </button>
                    <button
                        onClick={() => setState('crecimiento')}
                        className={`px-8 h-12 flex items-center justify-center rounded-full font-display uppercase text-sm transition-all duration-200 ease-out ${state === 'crecimiento'
                            ? 'bg-black text-white'
                            : 'bg-white text-black hover:bg-gray-50'
                            }`}
                    >
                        Crecimiento
                    </button>
                </div>

                {/* Image Container with Dynamic Overlay */}
                <div className="relative aspect-video mb-8 border-2 border-black rounded-sketch overflow-hidden bg-gray-50 shadow-sketch-lg">
                    <img
                        src={baseImage}
                        alt="Ilustración de la operativa del negocio"
                        className="w-full h-full object-cover"
                    />
                    {/* Dynamic Comic Overlay */}
                    <div
                        key={`${state}-label`}
                        className={`absolute top-4 left-4 border-2 border-black px-4 py-2 font-display text-[10px] md:text-xs uppercase text-white shadow-sketch transition-all duration-300 transform motion-safe:animate-fade-in ${state === 'caos' ? 'bg-brand-blue -rotate-2' : 'bg-brand-orange rotate-2'}`}
                    >
                        {content[state].label}
                    </div>
                </div>

                {/* Bullets Block */}
                <div
                    key={`${state}-bullets`}
                    className="bg-gray-50 border-2 border-black p-6 rounded-sketch-sm text-left shadow-sketch motion-safe:animate-fade-in"
                >
                    <ul className="space-y-4">
                        {content[state].bullets.map((bullet, idx) => (
                            <li key={idx} className="flex gap-3 items-start">
                                <span className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${state === 'caos' ? 'bg-brand-blue' : 'bg-brand-orange'}`} />
                                <p className="font-sans font-bold text-sm md:text-base leading-snug">{bullet}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
