import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export const CallbackForm: React.FC = () => {
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!phone) return;
        setLoading(true);

        try {
            const { error } = await supabase
                .from('callback_requests')
                .insert([{ phone, status: 'pending' }]);

            if (error) throw error;
            setSuccess(true);
            setPhone('');

            setTimeout(() => setSuccess(false), 5000);
        } catch (err) {
            console.error('Error requesting callback:', err);
            alert('Ups, error de línea. Inténtalo de nuevo.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-red-600 border-4 border-black p-6 md:p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] max-w-md w-full relative overflow-hidden group">
            {/* Background Texture Decorator */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

            {/* Retro Beeper/Phone Detail */}
            <div className="absolute top-2 right-4 flex gap-1">
                <div className="w-2 h-2 rounded-full bg-black animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-black/20"></div>
            </div>

            <div className="relative z-10">
                <h3 className="font-display text-white text-2xl md:text-3xl uppercase leading-none mb-4 tracking-tighter">
                    ¿Te da pereza buscar hueco? <br />
                    <span className="bg-black text-brand-yellow px-2 inline-block -rotate-1 italic mt-2">Te llamamos.</span>
                </h3>

                {success ? (
                    <div className="bg-black text-white p-4 border-2 border-brand-yellow animate-in zoom-in duration-300">
                        <p className="font-display text-lg uppercase text-center">
                            📞 OÍDO COCINA. <br />
                            <span className="text-brand-yellow">EN BREVE SUENA TU TELÉFONO.</span>
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="relative">
                            <input
                                type="tel"
                                required
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Tu número aquí..."
                                className="w-full p-4 md:p-6 bg-white border-4 border-black font-sans font-black text-2xl md:text-3xl placeholder:opacity-20 focus:outline-none focus:ring-8 focus:ring-black/10 transform -rotate-1"
                                style={{ clipPath: 'polygon(1% 5%, 99% 1%, 98% 95%, 2% 98%)' }}
                            />
                            {/* Hand-drawn underline decorator */}
                            <svg className="absolute -bottom-2 left-0 w-full h-4 opacity-50" viewBox="0 0 200 10">
                                <path d="M5 5 C 50 1, 150 9, 195 5" stroke="black" strokeWidth="4" fill="none" strokeLinecap="round" />
                            </svg>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-black text-white py-4 md:py-6 px-6 font-display text-xl md:text-2xl uppercase border-4 border-black shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] hover:bg-brand-yellow hover:text-black hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-4 disabled:opacity-50"
                        >
                            {loading ? (
                                <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                                <>
                                    <span className="text-3xl">☎️</span> LLAMADME AHORA
                                </>
                            )}
                        </button>
                    </form>
                )}
            </div>

            {/* Footer Meta info */}
            <div className="mt-4 flex justify-between items-center opacity-40 font-mono text-[10px] text-white font-bold select-none">
                <span>PRIORITY_CALL_V1</span>
                <span>ENCENDIDO</span>
            </div>
        </div>
    );
};
