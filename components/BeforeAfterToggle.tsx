import React, { useState } from 'react';

type State = 'caos' | 'crecimiento';

const CAOS_IMAGE_URL = 'https://res.cloudinary.com/drfr1lzlt/image/upload/v1768985064/Generate_a_new_2k_202601210933_u1b0lk.jpg';
const CRECIMIENTO_IMAGE_URL = 'https://res.cloudinary.com/drfr1lzlt/image/upload/v1768985074/Gemini_Generated_Image_j54k0uj54k0uj54k_mkykii.png';

export const BeforeAfterToggle: React.FC = () => {
    const [state, setState] = useState<State>('caos');
    const [isFading, setIsFading] = useState(false);

    const handleToggle = (newState: State) => {
        if (newState === state || isFading) return;

        setIsFading(true);

        // Wait for fade out (120ms)
        setTimeout(() => {
            setState(newState);
            // Wait a tiny bit to ensure the new src is set before fading back in
            // or just rely on the same duration for fade in
            setIsFading(false);
        }, 120);
    };

    const content = {
        caos: {
            label: 'EL LAB (CAOS)',
            image: CAOS_IMAGE_URL,
            bullets: [
                'Tareas repetidas y manuales.',
                'Leads sin seguimiento.'
            ],
            color: 'bg-brand-blue'
        },
        crecimiento: {
            label: 'EL ÉXITO (TU CRECIMIENTO)',
            image: CRECIMIENTO_IMAGE_URL,
            bullets: [
                'Operativa automatizada.',
                'Leads priorizados y atendidos.'
            ],
            color: 'bg-brand-orange'
        }
    };

    return (
        <section className="pt-16 pb-24 px-4 bg-white border-t-2 border-black">
            <div className="max-w-[360px] md:max-w-[680px] mx-auto text-center relative z-10">
                {/* Header */}
                <h2 className="text-3xl md:text-5xl font-display uppercase mb-2">Antes / Después</h2>
                <p className="text-gray-500 text-sm uppercase tracking-widest mb-8">Mismo negocio. Dos estados.</p>

                {/* Toggle Control */}
                <div className="inline-flex p-1 bg-white border-2 border-black rounded-full mb-8 relative z-10">
                    <button
                        onClick={() => handleToggle('caos')}
                        className={`px-8 h-12 flex items-center justify-center rounded-full font-display uppercase text-sm transition-all duration-200 ease-out ${state === 'caos'
                            ? 'bg-black text-white'
                            : 'bg-white text-black hover:bg-gray-50'
                            }`}
                    >
                        Caos
                    </button>
                    <button
                        onClick={() => handleToggle('crecimiento')}
                        className={`px-8 h-12 flex items-center justify-center rounded-full font-display uppercase text-sm transition-all duration-200 ease-out ${state === 'crecimiento'
                            ? 'bg-black text-white'
                            : 'bg-white text-black hover:bg-gray-50'
                            }`}
                    >
                        Crecimiento
                    </button>
                </div>

                {/* Image Container with Dynamic Overlay */}
                <div className="relative w-full h-[200px] md:h-auto md:aspect-video mb-8 border-2 border-black rounded-sketch overflow-hidden bg-gray-50 shadow-sketch-lg">
                    <img
                        src={content[state].image}
                        alt={`Estado de ${state}`}
                        width="680"
                        height="382"
                        loading="lazy"
                        className={`w-full h-full object-cover transition-opacity duration-[120ms] ease-in-out motion-safe:transition-opacity motion-reduce:transition-none ${isFading ? 'opacity-0' : 'opacity-100'}`}
                    />
                    {/* Dynamic Comic Overlay */}
                    <div
                        key={`${state}-label`}
                        className={`absolute top-3 left-3 border-[1.5px] border-black px-3 py-1 font-display text-[9px] md:text-xs uppercase text-white shadow-sketch transition-all duration-300 transform motion-safe:animate-fade-in z-20 ${state === 'caos' ? 'bg-brand-blue -rotate-1' : 'bg-brand-orange rotate-1'}`}
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
                                <p className="font-sans text-sm md:text-base leading-snug">{bullet}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
