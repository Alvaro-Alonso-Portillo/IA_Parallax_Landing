import React, { useState } from 'react';

export const ContactForm: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        // Logic simulation
        setTimeout(() => {
            setStatus('success');
        }, 1500);
    };

    if (status === 'success') {
        return (
            <div className="w-full bg-white border-2 border-black p-6 md:p-10 shadow-sketch-lg rounded-sketch text-center animate-in zoom-in duration-300">
                <span className="text-5xl mb-4 block">✅</span>
                <h3 className="font-display text-xl md:text-2xl uppercase mb-2">Petición recibida</h3>
                <p className="font-sans font-bold text-gray-600 text-sm md:text-base">
                    Analizaremos tu caso y te responderemos en menos de 24h con criterio.
                </p>
            </div>
        );
    }

    return (
        <div className="w-full bg-[#fcfcfc] border-2 border-black p-6 md:p-10 shadow-sketch-lg rounded-sketch relative">
            {/* Header */}
            <div className="mb-6 md:mb-8">
                <h3 className="font-display text-2xl md:text-3xl uppercase leading-none mb-3 text-black">
                    ¿Hablamos de tu caso?
                </h3>
                <p className="font-sans font-bold text-gray-500 text-sm md:text-base leading-tight">
                    Analizamos tu operativa y te decimos si automatizar tiene sentido.
                </p>
            </div>

            {/* Form - Single Column Layout */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                        <label className="font-bold text-[10px] uppercase tracking-widest text-gray-400 pl-5">Nombre</label>
                        <input
                            type="text"
                            required
                            placeholder="Tu nombre"
                            className="w-full py-4 px-6 bg-white border-2 border-black rounded-full focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 transition-all font-sans font-bold text-sm"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="font-bold text-[10px] uppercase tracking-widest text-gray-400 pl-5">Email</label>
                        <input
                            type="email"
                            required
                            placeholder="tu@email.com"
                            className="w-full py-4 px-6 bg-white border-2 border-black rounded-full focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 transition-all font-sans font-bold text-sm"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-1.5">
                    <label className="font-bold text-[10px] uppercase tracking-widest text-gray-400 pl-5 flex justify-between items-center pr-5">
                        <span>Empresa</span>
                        <span className="text-[9px] normal-case font-medium opacity-70 italic">(opcional)</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Nombre de tu empresa"
                        className="w-full py-4 px-6 bg-white border-2 border-black rounded-full focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 transition-all font-sans font-bold text-sm"
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label className="font-bold text-[10px] uppercase tracking-widest text-gray-400 pl-5">¿Qué te quita más tiempo ahora mismo?</label>
                    <textarea
                        required
                        rows={4}
                        placeholder="Ej: responder WhatsApp, pasar datos a Excel, hacer seguimientos…"
                        className="w-full p-6 bg-white border-2 border-black rounded-3xl focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 transition-all font-sans font-bold text-sm resize-none"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-brand-blue text-white py-5 px-8 font-display text-lg md:text-xl uppercase border-2 border-black rounded-full shadow-sketch md:hover:shadow-sketch-lg md:hover:-translate-y-1 transition-all flex items-center justify-center gap-3 mt-4 disabled:opacity-50 disabled:translate-y-0"
                >
                    {status === 'loading' ? (
                        <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                        "Solicitar diagnóstico"
                    )}
                </button>
            </form>

            <div className="mt-4 text-left">
                <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest leading-tight">
                    No hacemos demos. Analizamos tu caso y respondemos con criterio.
                </p>
            </div>
        </div>
    );
};
