import React, { useEffect } from 'react';

export const SEOInmobiliaria: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    useEffect(() => {
        const prevTitle = document.title;
        const metaDesc = document.querySelector('meta[name="description"]');
        const prevDesc = metaDesc?.getAttribute('content') || '';

        window.scrollTo(0, 0);
        document.title = "Automatización de leads inmobiliarios | IA_Parallax";
        if (metaDesc) {
            metaDesc.setAttribute('content', 'Optimiza tu inmobiliaria con automatización de leads y agenda. Captura contactos de portales y califica interesados 24/7 sin tareas manuales.');
        }

        return () => {
            document.title = prevTitle;
            if (metaDesc) metaDesc.setAttribute('content', prevDesc);
        };
    }, []);

    return (
        <div className="bg-white min-h-screen pt-24 pb-16 px-4 md:px-8 font-sans selection:bg-brand-blue selection:text-white">
            <div className="max-w-4xl mx-auto">
                {/* Navigation */}
                <button
                    onClick={onBack}
                    className="mb-12 flex items-center gap-2 group text-gray-500 hover:text-black transition-colors font-bold uppercase text-xs tracking-widest"
                >
                    <span className="group-hover:-translate-x-1 transition-transform">←</span> Volver al inicio
                </button>

                {/* 1. H1 orientado a búsqueda */}
                <header className="mb-16">
                    <h1 className="text-4xl md:text-7xl font-display uppercase text-brand-dark leading-[0.95] md:leading-[1.1] mb-8 drop-shadow-sketch-sm">
                        Automatización de <span className="text-brand-blue">leads y agenda</span> para inmobiliarias
                    </h1>

                    {/* 2. Introducción directa */}
                    <div className="bg-brand-gray border-2 border-black p-6 md:p-8 rounded-sketch-sm shadow-sketch transform -rotate-1">
                        <p className="text-base md:text-xl font-medium text-gray-800 leading-snug md:leading-relaxed max-w-[300px] md:max-w-none">
                            El sector inmobiliario depende de la inmediatez. En agencias que reciben decenas de contactos diarios, no llegar a responderlos a tiempo es la principal causa de pérdida de ventas.
                        </p>
                    </div>
                </header>

                {/* 3. Sección: El problema habitual en las inmobiliarias */}
                <section className="mb-24">
                    <h2 className="text-3xl md:text-5xl font-display uppercase text-brand-dark mb-10">
                        Fuga de leads por falta de respuesta inmediata
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="border-2 border-black p-6 rounded-sketch-sm shadow-sketch flex flex-col gap-4">
                            <h3 className="font-display text-xl uppercase text-brand-orange">El problema de la respuesta</h3>
                            <p className="font-medium text-gray-600 leading-snug text-sm md:text-base max-w-[280px] md:max-w-none">
                                Muchas inmobiliarias no pierden leads por falta de demanda; los pierden por tardar en responder al contacto.
                            </p>
                        </div>
                        <div className="border-2 border-black p-6 rounded-sketch-sm shadow-sketch transform rotate-1 flex flex-col gap-4">
                            <h3 className="font-display text-xl uppercase text-brand-orange">Cualificación manual</h3>
                            <p className="font-medium text-gray-600 text-sm md:text-base leading-snug max-w-[280px] md:max-w-none">
                                Los agentes pierden el 60% de su jornada haciendo llamadas de filtro o copiando datos entre herramientas.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 4. Sección: Qué tareas se automatizan */}
                <section className="mb-20 bg-brand-dark text-white p-8 md:p-12 rounded-sketch shadow-sketch-xl">
                    <h2 className="text-3xl md:text-5xl font-display uppercase mb-10 text-brand-yellow">
                        Tareas que eliminamos de la operativa diaria
                    </h2>
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4 border-b border-white/20 pb-4">
                            <span className="text-2xl">📥</span>
                            <div>
                                <h3 className="font-display uppercase text-xl mb-1">Captura desde portales</h3>
                                <p className="text-gray-300 font-medium italic">Eliminamos la necesidad de revisar manualmente los correos de Idealista, Fotocasa u otros portales.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4 border-b border-white/20 pb-4">
                            <span className="text-2xl">💬</span>
                            <div>
                                <h3 className="font-display uppercase text-xl mb-1">Cualificación de interesados</h3>
                                <p className="text-gray-300 font-medium italic">Un sistema automático contacta al lead por WhatsApp o Email pidiendo los datos clave. Puedes ver más sobre cómo <a href="#/segmento/inmobiliaria-respuesta" className="text-brand-yellow hover:underline decoration-1 underline-offset-4 decoration-brand-yellow">automatizar la respuesta a leads inmobiliarios</a> aquí.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="text-2xl">📅</span>
                            <div>
                                <h3 className="font-display uppercase text-xl mb-1">Agendamiento de visitas</h3>
                                <p className="text-gray-300 font-medium italic">Si el lead cumple los requisitos, recibe un enlace para reservar una visita directamente en el calendario del comercial.</p>
                            </div>
                        </li>
                    </ul>
                </section>

                {/* 5. Sección: Cómo funciona el sistema */}
                <section className="mb-20">
                    <h2 className="text-3xl md:text-5xl font-display uppercase text-brand-dark mb-10 text-center">
                        Proceso de automatización de agenda
                    </h2>
                    <div className="relative">
                        <div className="absolute left-4 top-0 bottom-0 w-1 border-l-4 border-dashed border-black/10 hidden md:block"></div>
                        <div className="space-y-12">
                            <div className="flex items-start gap-6 relative">
                                <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-blue border-2 border-black rounded-full z-10 flex items-center justify-center font-display text-white italic shadow-sketch-sm shrink-0 mt-1">1</div>
                                <div className="text-left">
                                    <h3 className="font-display text-2xl uppercase mb-2">Entrada de Lead</h3>
                                    <p className="text-gray-600 font-medium">El sistema monitoriza tus canales de entrada las 24 horas del día.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-6 relative">
                                <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-blue border-2 border-black rounded-full z-10 flex items-center justify-center font-display text-white italic shadow-sketch-sm shrink-0 mt-1">2</div>
                                <div className="text-left">
                                    <h3 className="font-display text-2xl uppercase mb-2">Filtro Técnico</h3>
                                    <p className="text-gray-600 font-medium">Se valida automáticamente si el lead es real y si sus necesidades encajan con tu cartera.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-6 relative">
                                <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-blue border-2 border-black rounded-full z-10 flex items-center justify-center font-display text-white italic shadow-sketch-sm shrink-0 mt-1">3</div>
                                <div className="text-left">
                                    <h3 className="font-display text-2xl uppercase mb-2">Conexión con el Comercial</h3>
                                    <p className="text-gray-600 font-medium">Solo los leads "calientes" llegan al equipo, con toda la información ya volcada en el CRM.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Sección: Qué gana la inmobiliaria */}
                <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-brand-blue text-white p-8 rounded-sketch shadow-sketch-lg">
                        <h2 className="font-display text-2xl md:text-3xl uppercase mb-6">Ventajas de automatizar tu agencia</h2>
                        <ul className="space-y-4 font-sans font-bold">
                            <li className="flex items-center gap-3"><span className="text-brand-yellow">✓</span> Respuesta inmediata 24/7</li>
                            <li className="flex items-center gap-3"><span className="text-brand-yellow">✓</span> Eliminación de llamadas innecesarias</li>
                            <li className="flex items-center gap-3"><span className="text-brand-yellow">✓</span> Agenda comercial organizada</li>
                            <li className="flex items-center gap-3"><span className="text-brand-yellow">✓</span> Datos reales de conversión</li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center border-2 border-black p-8 rounded-sketch-sm bg-brand-gray/30">
                        <p className="font-sans font-medium text-lg text-gray-700 italic leading-snug">
                            "El valor real no es solo responder rápido, es que tu equipo deje de actuar como telefonistas y empiece a actuar como expertos en cierre de ventas."
                        </p>
                    </div>
                </section>

                {/* 7. Sección: Cuándo tiene sentido aplicar esta automatización */}
                <section className="mb-24 pb-8 border-b-2 border-black border-dashed">
                    <h2 className="text-3xl md:text-5xl font-display uppercase text-brand-dark mb-10">
                        Cuándo es rentable automatizar tu operativa
                    </h2>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 bg-white border-2 border-black p-4 shadow-sketch">
                            <input type="checkbox" checked readOnly className="w-6 h-6 border-2 border-black rounded-full accent-black" />
                            <p className="font-bold text-gray-700">Recibes más de 10 leads diarios desde portales.</p>
                        </div>
                        <div className="flex items-center gap-4 bg-white border-2 border-black p-4 shadow-sketch transform rotate-1">
                            <input type="checkbox" checked readOnly className="w-6 h-6 border-2 border-black rounded-full accent-black" />
                            <p className="font-bold text-gray-700">Tu equipo comercial pasa más de 2h al día calificando contactos.</p>
                        </div>
                        <div className="flex items-center gap-4 bg-white border-2 border-black p-4 shadow-sketch transform -rotate-1">
                            <input type="checkbox" checked readOnly className="w-6 h-6 border-2 border-black rounded-full accent-black" />
                            <p className="font-bold text-gray-700">Pierdes oportunidades por no responder durante el fin de semana.</p>
                        </div>
                    </div>
                </section>

                {/* 8. CTA final claro */}
                <footer className="text-center py-16 border-t-4 border-black border-dashed">
                    <h2 className="font-display text-2xl md:text-5xl uppercase mb-8 leading-tight">
                        ¿Tiene sentido automatizar tu inmobiliaria?
                    </h2>
                    <p className="max-w-xl mx-auto mb-10 font-medium text-gray-600 text-lg">
                        Revisamos tu operativa actual y te decimos con honestidad si implementar este sistema te ahorrará tiempo real o si aún no es rentable para tu agencia.
                    </p>
                    <div className="inline-block relative group">
                        <div className="absolute inset-0 bg-brand-blue rounded-full transform translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform"></div>
                        <button
                            onClick={() => {
                                onBack();
                                setTimeout(() => {
                                    document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' });
                                }, 100);
                            }}
                            className="relative inline-flex bg-black text-white px-12 py-6 text-xl md:text-3xl font-display uppercase border-2 border-black hover:-translate-y-1 transition-all rounded-full shadow-sketch-lg"
                        >
                            Analizar si estoy perdiendo leads
                        </button>
                    </div>
                    <p className="mt-6 text-xs font-bold text-gray-400 uppercase tracking-widest">
                        Análisis honesto de viabilidad técnica y económica.
                    </p>
                </footer>
            </div>
        </div>
    );
};
