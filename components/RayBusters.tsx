import React from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

const OrbitItem: React.FC<{
    icon: string;
    delay: string;
    duration: string;
    radiusX: number;
    radiusY: number;
    bg?: string
}> = ({ icon, delay, duration, radiusX, radiusY, bg = "bg-white" }) => {
    return (
        <div
            className={`absolute flex items-center justify-center z-30 pointer-events-none`}
            style={{
                '--rx': `${radiusX}px`,
                '--ry': `${radiusY}px`,
                '--dur': duration,
                '--del': delay,
                animation: `orbitX var(--dur) linear infinite`,
                animationDelay: 'var(--del)',
            } as any}
        >
            <div
                className={`w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-black flex items-center justify-center shadow-sketch-lg transition-transform pointer-events-auto ${bg}`}
                style={{
                    animation: `orbitY var(--dur) linear infinite`,
                    animationDelay: 'var(--del)',
                }}
            >
                <img
                    src={icon}
                    alt=""
                    width="40"
                    height="40"
                    loading="lazy"
                    className="w-8 h-8 md:w-10 md:h-10 object-contain p-1"
                />
            </div>
        </div>
    );
};

export const RayBusters: React.FC = () => {
    const titleRef = useRevealOnScroll<HTMLHeadingElement>();
    const subtitleRef = useRevealOnScroll<HTMLParagraphElement>(0.1, 40);
    const badgeRef = useRevealOnScroll<HTMLDivElement>(0.1, 80);
    const descRef = useRevealOnScroll<HTMLParagraphElement>(0.1, 120);
    const bulletsRef = useRevealOnScroll<HTMLDivElement>(0.1, 160);

    return (
        <section id="garantia" className="py-32 md:py-48 bg-brand-gray relative overflow-hidden min-h-[1000px]">
            {/* Advanced Elliptical Orbit Styles */}
            <style>{`
                @keyframes orbitX {
                    0% { transform: translateX(calc(var(--rx) * -1)); }
                    25% { transform: translateX(0); }
                    50% { transform: translateX(var(--rx)); }
                    75% { transform: translateX(0); }
                    100% { transform: translateX(calc(var(--rx) * -1)); }
                }
                @keyframes orbitY {
                    0% { transform: translateY(0); z-index: 40; }
                    25% { transform: translateY(calc(var(--ry) * -1)); }
                    50% { transform: translateY(0); z-index: 5; }
                    75% { transform: translateY(var(--ry)); }
                    100% { transform: translateY(0); z-index: 40; }
                }
            `}</style>

            <div className="absolute top-20 left-10 pointer-events-none opacity-20 hidden md:block">
                <svg width="200" height="150" viewBox="0 0 200 150">
                    <path d="M10,140 L40,140 M10,130 L50,130 M10,120 L30,120 M160,10 L190,10 M150,20 L190,20" stroke="black" strokeWidth="4" />
                    <rect x="60" y="80" width="30" height="15" fill="none" stroke="black" strokeWidth="2" />
                    <rect x="100" y="100" width="40" height="20" fill="none" stroke="black" strokeWidth="2" />
                </svg>
            </div>

            <div className="w-full mx-auto text-center px-4">
                <div className="mb-8 relative">
                    <h2 ref={titleRef} className="text-5xl md:text-8xl font-display uppercase text-brand-dark drop-shadow-sketch-sm mb-4">
                        GARANTÍA DE SISTEMA
                    </h2>
                    <p ref={subtitleRef} className="text-3xl md:text-6xl font-display uppercase text-brand-orange mb-8 drop-shadow-sketch-sm">
                        “Si no vemos claro el retorno, no seguimos.”
                    </p>
                    <div ref={badgeRef} className="inline-block bg-black text-white px-4 py-2 transform -rotate-1 mb-12 shadow-sketch-lg">
                        <p className="font-display text-xl md:text-2xl uppercase tracking-tighter">
                            Si el sistema falla, el problema es nuestro, no tuyo.
                        </p>
                    </div>
                    <p ref={descRef} className="max-w-2xl mx-auto font-sans text-xl font-medium text-gray-700 leading-tight">
                        Monitorizamos, corregimos y mejoramos tus automatizaciones para que no se caigan cuando más las necesitas.
                    </p>

                    {/* Feature Bullets */}
                    <div ref={bulletsRef} className="flex flex-wrap justify-center gap-3 md:gap-6 mt-12 max-w-4xl mx-auto relative z-30">
                        {[
                            "Alertas y revisión periódica",
                            "Logs claros y trazabilidad",
                            "Mejoras continuas por prioridad"
                        ].map((text, i) => (
                            <div key={i} className={`flex items-center gap-2 bg-white border-2 border-black px-4 py-2 shadow-sketch hover:shadow-sketch-lg hover:-translate-y-1 transform ${i % 2 === 0 ? '-rotate-1' : 'rotate-1'} transition-all`}>
                                <span className="text-brand-blue font-bold">✓</span>
                                <span className="font-sans font-bold text-sm md:text-base whitespace-nowrap">{text}</span>
                            </div>
                        ))}
                    </div>

                    <div className="absolute -top-12 right-1/4 text-6xl animate-bounce hidden md:block">🧘</div>
                </div>

                <div className="relative w-full h-[500px] md:h-[650px] flex items-center justify-center -mt-8">

                    {/* The Guru / Character */}
                    <div className="relative z-20 w-full max-w-4xl px-8">
                        <img
                            src="https://res.cloudinary.com/drfr1lzlt/image/upload/v1768305871/Gemini_Generated_Image_2adbc92adbc92adb-removebg-preview_myagw9.png"
                            alt="Ilustración de experto en automatización e IA estilo dibujo animado gestionando sistemas para agencias"
                            width="1000"
                            height="800"
                            loading="lazy"
                            className="w-full h-auto drop-shadow-sketch-xl animate-float scale-100 md:scale-110"
                        />
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-black/5 blur-2xl rounded-full -z-10"></div>
                    </div>

                    {/* Orbiting Tech Icons */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        {/* Outer Orbit - React & ChatGPT */}
                        <OrbitItem
                            icon="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                            delay="0s"
                            duration="20s"
                            radiusX={480}
                            radiusY={130}
                        />
                        <OrbitItem
                            icon="https://cdn.worldvectorlogo.com/logos/openai-2.svg"
                            delay="-10s"
                            duration="20s"
                            radiusX={480}
                            radiusY={130}
                        />

                        {/* Middle Orbit - JS & n8n (Custom) */}
                        <OrbitItem
                            icon="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
                            delay="-5s"
                            duration="15s"
                            radiusX={340}
                            radiusY={90}
                        />
                        <OrbitItem
                            icon="https://res.cloudinary.com/drfr1lzlt/image/upload/v1768305565/images-removebg-preview_aargkm.png"
                            delay="-12.5s"
                            duration="15s"
                            radiusX={340}
                            radiusY={90}
                        />

                        {/* Inner Orbit - Python & TS */}
                        <OrbitItem
                            icon="https://cdn.worldvectorlogo.com/logos/python-5.svg"
                            delay="-3s"
                            duration="12s"
                            radiusX={220}
                            radiusY={60}
                        />
                        <OrbitItem
                            icon="https://cdn.worldvectorlogo.com/logos/typescript.svg"
                            delay="-9s"
                            duration="12s"
                            radiusX={220}
                            radiusY={60}
                        />

                        {/* Core Orbit - Gemini */}
                        <OrbitItem
                            icon="https://res.cloudinary.com/drfr1lzlt/image/upload/v1768306040/gemini-color_mjzjzv.png"
                            delay="-6s"
                            duration="8s"
                            radiusX={120}
                            radiusY={30}
                            bg="bg-gradient-to-br from-blue-50 to-purple-50"
                        />
                    </div>
                </div>

                {/* Mobile Fallback */}
                <div className="grid grid-cols-1 md:hidden gap-6 mt-12 pb-12">
                    {[
                        { step: 1, title: "Diagnóstico", desc: "Encontramos los cuellos de botella.", color: "bg-blue-100" },
                        { step: 2, title: "Estrategia", desc: "Diseñamos el sistema ideal.", color: "bg-yellow-100" },
                        { step: 3, title: "Despliegue", desc: "IA lista en tu día a día.", color: "bg-green-100" }
                    ].map(s => (
                        <div key={s.step} className={`${s.color} border-2 border-black p-6 shadow-sketch text-left relative`}>
                            <div className="absolute -top-3 -left-3 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-display">{s.step}</div>
                            <h4 className="font-display text-xl uppercase mb-1">{s.title}</h4>
                            <p className="font-sans font-bold text-gray-700 text-sm">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
