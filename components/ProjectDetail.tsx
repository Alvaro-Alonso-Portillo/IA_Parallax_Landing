import React, { useEffect } from 'react';

interface ProjectDetailProps {
    project: {
        title: string;
        description: string;
        image: string;
        colorClass: string;
        fullDescription: string;
        results: string[];
        tags: string[];
    };
    onBack: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Back Button */}
            <div className="fixed top-20 md:top-24 left-4 md:left-8 z-40">
                <button
                    onClick={onBack}
                    className="bg-white border-2 border-black p-3 md:p-4 rounded-full shadow-sketch hover:shadow-sketch-lg hover:-translate-y-1 transition-all flex items-center gap-2 group"
                >
                    <span className="group-hover:-translate-x-1 transition-transform">←</span>
                    <span className="font-display uppercase text-xs md:text-sm hidden xs:inline">Volver</span>
                </button>
            </div>

            {/* Hero Section */}
            <section className={`py-20 md:py-32 ${project.colorClass} border-b-4 border-black relative overflow-hidden`}>
                {/* Background Decor */}
                <div className="absolute top-10 right-10 text-7xl md:text-9xl text-black opacity-10 font-display">PRJ</div>

                <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
                    <div className="bg-white border-[3px] md:border-4 border-black p-6 md:p-16 shadow-sketch-xl rotate-1">
                        <h1 className="text-4xl md:text-9xl font-display uppercase leading-none mb-6">
                            {project.title}
                        </h1>
                        <div className="flex flex-wrap gap-2 md:gap-4 mb-4 md:mb-8">
                            {project.tags.map(tag => (
                                <span key={tag} className="bg-brand-yellow px-3 py-1 border-2 border-black font-display text-[10px] md:text-sm uppercase">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-24 max-w-6xl mx-auto px-6 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
                    {/* Main Content */}
                    <div className="space-y-8 md:space-y-12">
                        <div className="bg-gray-50 border-[3px] md:border-4 border-black p-6 md:p-8 rounded-sketch shadow-sketch">
                            <h2 className="text-3xl md:text-4xl font-display uppercase mb-6">El Desafío</h2>
                            <p className="font-sans text-lg md:text-xl font-medium leading-relaxed text-gray-800">
                                {project.fullDescription}
                            </p>
                        </div>

                        <div className="bg-white border-[3px] md:border-4 border-black p-6 md:p-8 rounded-sketch shadow-sketch rotate-[-1deg]">
                            <h2 className="text-3xl md:text-4xl font-display uppercase mb-6">Resultados Reales</h2>
                            <ul className="space-y-4">
                                {project.results.map((result, idx) => (
                                    <li key={idx} className="flex gap-4 items-center">
                                        <span className="w-6 h-6 md:w-8 md:h-8 bg-brand-orange text-white border-2 border-black rounded-full flex items-center justify-center font-bold text-sm md:text-base shrink-0">✓</span>
                                        <span className="font-sans text-base md:text-lg font-bold">{result}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Sidebar / Media */}
                    <div className="space-y-8">
                        <div className="relative border-[3px] md:border-4 border-black shadow-sketch rotate-2 overflow-hidden bg-brand-gray aspect-square max-w-md mx-auto">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                            <div className="absolute top-4 right-4 bg-brand-blue text-white px-3 py-1 border-2 border-black font-display text-[10px] md:text-xs uppercase -rotate-12">
                                Finalizado
                            </div>
                        </div>

                        {/* Quote / Callout */}
                        <div className="bg-brand-yellow p-6 md:p-8 border-[3px] md:border-4 border-black shadow-sketch transform -rotate-2 relative max-w-md mx-auto">
                            <span className="absolute -top-6 -left-4 text-5xl md:text-7xl font-accent leading-none text-black">"</span>
                            <p className="font-sans font-black text-xl md:text-2xl mb-4 leading-tight italic text-black">
                                "No construimos bots, construimos tiempo libre para que escales tu negocio sin límites."
                            </p>
                            <div className="text-right font-display text-[10px] md:text-sm uppercase text-black">— FUNDADOR</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 md:py-24 bg-brand-light border-t-4 border-black text-center px-6">
                <h2 className="text-4xl md:text-5xl font-display uppercase mb-8">¿Quieres resultados similares?</h2>
                <a href="#contact" className="inline-block bg-black text-white px-8 md:px-12 py-4 md:py-6 text-xl md:text-2xl font-display uppercase border-4 border-black shadow-sketch hover:shadow-sketch-lg hover:-translate-y-1 transition-all rounded-full">
                    Hablemos ahora
                </a>
            </section>
        </div>
    );
};
