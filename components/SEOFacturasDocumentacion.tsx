import React, { useEffect } from 'react';

export const SEOFacturasDocumentacion: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    useEffect(() => {
        const prevTitle = document.title;
        const metaDesc = document.querySelector('meta[name="description"]');
        const prevDesc = metaDesc?.getAttribute('content') || '';

        window.scrollTo(0, 0);
        document.title = "Automatizar gestión de facturas | IA_Parallax";
        if (metaDesc) {
            metaDesc.setAttribute('content', 'Optimiza tu administración y elimina el tiempo perdido con la gestión manual de facturas. Automatiza la extracción de datos de PDFs y evita errores administrativos.');
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
                    className="mb-12 flex items-center gap-2 group text-gray-400 hover:text-black transition-colors font-bold uppercase text-xs tracking-widest"
                >
                    <span className="group-hover:-translate-x-1 transition-transform">←</span> Volver al inicio
                </button>

                {/* 1. H1 orientado a búsqueda */}
                <header className="mb-16">
                    <h1 className="text-4xl md:text-7xl font-display uppercase text-brand-dark leading-[0.95] md:leading-[1.1] mb-8 drop-shadow-sketch-sm text-balance">
                        Automatizar la <span className="text-brand-orange">gestión de facturas</span> y documentación administrativa
                    </h1>

                    {/* 2. Introducción directa al problema */}
                    <div className="bg-brand-gray border-2 border-black p-6 md:p-10 rounded-sketch-sm shadow-sketch transform -rotate-1">
                        <p className="text-[15px] md:text-2xl font-medium text-gray-800 leading-snug md:leading-relaxed italic">
                            Recibir facturas por email, descargar el PDF y volcar los datos a mano es habitual en muchas pymes. Este ciclo roba tiempo vital que debería usarse en tareas de valor real.
                        </p>
                    </div>
                </header>

                {/* 3. Sección: Dónde se pierde tiempo gestionando facturas */}
                <section className="mb-24">
                    <h2 className="text-3xl md:text-6xl font-display uppercase text-brand-dark mb-10 leading-tight">
                        Tiempo perdido en la gestión manual de facturas
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white border-2 border-black p-6 rounded-sketch-sm shadow-sketch h-full">
                            <h3 className="font-display text-2xl uppercase mb-3 text-brand-blue">Extracción de datos</h3>
                            <p className="font-bold text-gray-600 leading-snug">
                                Abrir cada PDF para copiar a mano el importe, la fecha, el proveedor o el número de factura en tu ERP o Excel administrativo.
                            </p>
                        </div>
                        <div className="bg-white border-2 border-black p-6 rounded-sketch-sm shadow-sketch h-full transform rotate-1">
                            <h3 className="font-display text-2xl uppercase mb-3 text-brand-blue">Clasificación de archivos</h3>
                            <p className="font-bold text-gray-600 leading-snug">
                                Organizar carpetas manualmente: crear la carpeta del mes, renombrar archivos uno a uno y moverlos de "recibidos" a "procesados".
                            </p>
                        </div>
                        <div className="bg-white border-2 border-black p-6 rounded-sketch-sm shadow-sketch h-full transform -rotate-1">
                            <h3 className="font-display text-2xl uppercase mb-3 text-brand-blue">Búsqueda de documentos</h3>
                            <p className="font-bold text-gray-600 leading-snug">
                                Perder minutos valiosos buscando aquel email o aquel PDF perdido en una carpeta mal nombrada cuando un proveedor o cliente pregunta.
                            </p>
                        </div>
                        <div className="bg-white border-2 border-black p-6 rounded-sketch-sm shadow-sketch h-full">
                            <h3 className="font-display text-2xl uppercase mb-3 text-brand-blue">Validación y seguimiento</h3>
                            <p className="font-bold text-gray-600 leading-snug">
                                Avisar a mano de que una factura ha llegado, pedir aprobación por chat o email y confirmar que se ha archivado correctamente.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 4. Sección: Errores habituales por mover información a mano */}
                <section className="mb-24 py-12 border-y-4 border-black border-dashed">
                    <h2 className="text-3xl md:text-5xl font-display uppercase text-brand-dark mb-10">
                        Errores administrativos al procesar facturas y PDFs
                    </h2>
                    <ul className="space-y-6">
                        <li className="flex items-center gap-4 group">
                            <span className="w-12 h-12 bg-red-100 border-2 border-black flex items-center justify-center font-display text-2xl shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors">!</span>
                            <p className="font-bold text-xl text-gray-700">Errores al copiar datos de fecha, importe o CIF de forma manual desde el PDF.</p>
                        </li>
                        <li className="flex items-center gap-4 group">
                            <span className="w-12 h-12 bg-red-100 border-2 border-black flex items-center justify-center font-display text-2xl shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors">!</span>
                            <p className="font-bold text-xl text-gray-700">Facturas duplicadas que generan pagos por error o líos en la contabilidad.</p>
                        </li>
                        <li className="flex items-center gap-4 group">
                            <span className="w-12 h-12 bg-red-100 border-2 border-black flex items-center justify-center font-display text-2xl shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors">!</span>
                            <p className="font-bold text-xl text-gray-700">Retrasos en el envío a gestoría por documentos que se quedan perdidos en el email.</p>
                        </li>
                        <li className="flex items-center gap-4 group">
                            <span className="w-12 h-12 bg-red-100 border-2 border-black flex items-center justify-center font-display text-2xl shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors">!</span>
                            <p className="font-bold text-xl text-gray-700">Falta de control sobre la información y estrés para saber qué se ha procesado y qué no.</p>
                        </li>
                    </ul>
                </section>

                {/* 5. Sección: Cómo funciona una automatización documental */}
                <section className="mb-20 bg-brand-dark text-white p-8 md:p-12 rounded-sketch shadow-sketch-xl">
                    <h2 className="text-3xl md:text-5xl font-display uppercase mb-10 text-brand-orange">
                        Cómo funciona la gestión automática
                    </h2>
                    <div className="space-y-12">
                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-orange text-black border-2 border-white flex items-center justify-center font-display text-2xl md:text-3xl shrink-0 rounded-full shadow-sketch mt-1">1</div>
                            <div className="text-left">
                                <h3 className="text-xl font-display uppercase mb-2">Lectura inteligente</h3>
                                <p className="text-gray-300 font-medium text-sm md:text-base">El sistema detecta automáticamente cuando llega un documento o factura a una cuenta de correo específica o carpeta.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-orange text-black border-2 border-white flex items-center justify-center font-display text-2xl md:text-3xl shrink-0 rounded-full shadow-sketch mt-1">2</div>
                            <div className="text-left">
                                <h3 className="text-xl font-display uppercase mb-2">Extracción sin errores</h3>
                                <p className="text-gray-300 font-medium text-sm md:text-base">Se extraen los datos clave (emisor, base, impuestos, total) sin que nadie tenga que escribirlos.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-orange text-black border-2 border-white flex items-center justify-center font-display text-2xl md:text-3xl shrink-0 rounded-full shadow-sketch mt-1">3</div>
                            <div className="text-left">
                                <h3 className="text-xl font-display uppercase mb-2">Archivo y volcado Final</h3>
                                <p className="text-gray-300 font-medium text-sm md:text-base">El PDF se guarda perfectamente nombrado en su carpeta y los datos se vuelcan directamente en tu sistema de gestión.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Sección: Qué gana la empresa al automatizar */}
                <section className="mb-20">
                    <h2 className="text-3xl md:text-5xl font-display uppercase text-brand-dark mb-10 text-center text-balance">
                        Qué gana la empresa al automatizar la documentación desordenada
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-brand-gray/30 border-2 border-black rounded-sketch shadow-sketch group hover:bg-white transition-colors">
                            <div className="text-4xl mb-4">🧘</div>
                            <h4 className="font-display uppercase text-lg mb-2 text-brand-dark">Paz administrativa</h4>
                            <p className="text-gray-600 font-medium">Se acabó el estrés de fin de mes persiguiendo facturas perdidas o revisando Excels infinitos.</p>
                        </div>
                        <div className="text-center p-6 bg-brand-gray/30 border-2 border-black rounded-sketch shadow-sketch group hover:bg-white transition-colors transform rotate-1">
                            <div className="text-4xl mb-4">⏳</div>
                            <h4 className="font-display uppercase text-lg mb-2 text-brand-dark">Cero tiempo perdido</h4>
                            <p className="text-gray-600 font-medium">Eliminas una tarea que no aporta nada para que tu equipo se centre en lo que de verdad hace crecer el negocio.</p>
                        </div>
                        <div className="text-center p-6 bg-brand-gray/30 border-2 border-black rounded-sketch shadow-sketch group hover:bg-white transition-colors transform -rotate-1">
                            <div className="text-4xl mb-4">🛡️</div>
                            <h4 className="font-display uppercase text-lg mb-2 text-brand-dark">Blindaje ante errores</h4>
                            <p className="text-gray-600 font-medium">Los datos son 100% fiables. Lo que pone el papel es lo que llega al sistema, sin fallos de "dedo".</p>
                        </div>
                    </div>
                </section>

                {/* 7. Sección: Cuándo tiene sentido automatizar */}
                <section className="mb-20">
                    <div className="bg-brand-yellow/30 border-2 border-black p-8 md:p-12 rounded-sketch-lg relative">
                        <div className="absolute -top-6 left-12 bg-black text-white px-4 py-1 font-display uppercase text-sm transform -rotate-2">Criterio técnico</div>
                        <h2 className="text-3xl md:text-5xl font-display uppercase text-brand-dark mb-10">
                            ¿Cuándo tiene sentido automatizar facturas?
                        </h2>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 font-bold text-gray-700 text-lg">
                                <span className="w-3 h-3 bg-black rounded-full shrink-0"></span>
                                Manejas más de 50-100 facturas o documentos al mes.
                            </li>
                            <li className="flex items-center gap-3 font-bold text-gray-700 text-lg">
                                <span className="w-3 h-3 bg-black rounded-full shrink-0"></span>
                                El proceso de volcado te ocupa más de 3 o 4 horas a la semana.
                            </li>
                            <li className="flex items-center gap-3 font-bold text-gray-700 text-lg">
                                <span className="w-3 h-3 bg-black rounded-full shrink-0"></span>
                                Tienes que buscar facturas antiguas con frecuencia y te cuesta encontrarlas.
                            </li>
                            <li className="flex items-center gap-3 font-bold text-gray-700 text-lg">
                                <span className="w-3 h-3 bg-black rounded-full shrink-0"></span>
                                Los errores de tecleo te han generado problemas en el pasado.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* 8. CTA final honesto */}
                <footer className="text-center py-16 border-t-4 border-black border-dashed">
                    <h2 className="font-display text-2xl md:text-5xl uppercase mb-8 leading-tight">
                        ¿Tiene sentido automatizar tu gestión de facturas?
                    </h2>
                    <p className="max-w-xl mx-auto mb-10 font-medium text-gray-600 text-lg leading-relaxed">
                        Revisamos tu operativa administrativa y te decimos con honestidad si automatizar tiene sentido o no.
                    </p>
                    <div className="inline-block relative group w-full max-w-[400px]">
                        <div className="absolute inset-0 bg-brand-orange rounded-full transform translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform"></div>
                        <button
                            onClick={() => {
                                onBack();
                                setTimeout(() => {
                                    document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' });
                                }, 100);
                            }}
                            className="relative w-full flex items-center justify-center bg-black text-white px-6 py-6 text-lg md:text-2xl lg:text-3xl font-display uppercase border-2 border-black hover:-translate-y-1 transition-all rounded-full shadow-sketch-lg text-balance"
                        >
                            Analizar si esta gestión se puede automatizar
                        </button>
                    </div>
                    <p className="mt-6 text-xs font-bold text-gray-400 uppercase tracking-widest">
                        Análisis operativo y de rentabilidad. Sin cuentos.
                    </p>
                </footer>
            </div>
        </div>
    );
};
