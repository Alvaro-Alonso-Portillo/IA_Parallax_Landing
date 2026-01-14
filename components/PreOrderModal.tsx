import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

interface PreOrderModalProps {
    templateName: string;
    isOpen: boolean;
    onClose: () => void;
}

export const PreOrderModal: React.FC<PreOrderModalProps> = ({ templateName, isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { error } = await supabase
                .from('template_waitlist')
                .insert([
                    {
                        email: email,
                        template_name: templateName,
                        status: 'pending'
                    }
                ]);

            if (error) throw error;
            setSuccess(true);

            // Cerrar automáticamente tras 3 segundos de éxito
            setTimeout(() => {
                onClose();
                setSuccess(false);
                setEmail('');
            }, 3000);

        } catch (error) {
            console.error('Error joining waitlist:', error);
            alert('Ups, un bug nos ha mordido. Intenta de nuevo.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div
                className="bg-white border-4 border-black p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] max-w-xl w-full relative animate-in zoom-in-95 duration-300"
                style={{ clipPath: 'polygon(1% 1%, 99% 0%, 100% 99%, 0% 100%)' }}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-3xl font-bold hover:scale-125 transition-transform"
                >
                    ×
                </button>

                {success ? (
                    <div className="text-center py-8 animate-in zoom-in duration-500">
                        <div className="text-7xl mb-6 animate-bounce">🎊</div>
                        <h2 className="text-3xl md:text-5xl font-display uppercase mb-4 leading-none">¡APUNTADO!</h2>
                        <p className="font-sans text-xl font-bold italic text-brand-blue">
                            Te has ahorrado dolores de cabeza. <br />
                            Te avisaremos muy pronto.
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="mb-6">
                            <h2 className="text-3xl md:text-5xl font-display uppercase leading-tight mb-2 flex items-center gap-3">
                                <span className="animate-wiggle">🚧</span> ¡ALTO AHÍ, VAQUERO!
                            </h2>
                            <div className="w-full h-2 bg-brand-yellow border-2 border-black mb-6"></div>
                        </div>

                        <div className="space-y-6">
                            <p className="font-sans text-lg md:text-xl font-black leading-tight text-gray-800">
                                La plantilla <span className="bg-brand-blue text-white px-2 italic">{templateName}</span> está en fase final de pruebas.
                                No queremos venderte humo, queremos venderte algo que funcione.
                            </p>

                            <p className="font-sans text-base md:text-lg font-bold text-gray-600 bg-brand-gray/30 p-4 border-l-4 border-black border-2 border-black/5 rounded-r-lg">
                                Déjanos tu email y sé el primero en tenerla (con descuento) cuando lancemos la semana que viene.
                            </p>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
                                <input
                                    type="email"
                                    required
                                    autoFocus
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Tu mejor email aquí..."
                                    className="w-full p-4 border-4 border-black font-sans font-bold text-lg focus:outline-none focus:ring-8 focus:ring-brand-blue/10 placeholder:opacity-30"
                                />
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-black text-white py-6 md:py-8 font-display text-xl md:text-2xl uppercase border-4 border-black shadow-[8px_8px_0px_0px_rgba(37,99,235,0.4)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-4 disabled:opacity-50 group"
                                >
                                    {loading ? (
                                        <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                                    ) : (
                                        <>
                                            AVISADME CUANDO ESTÉ LISTA <span className="group-hover:translate-x-2 transition-transform">🚀</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
