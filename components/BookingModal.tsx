import React from 'react';
import { InlineWidget } from 'react-calendly';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    // Hardcoding for maximum stability
    const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/iaparallax/30min';

    return (
        <div className="fixed inset-0 z-[10001] flex items-center justify-center p-2 md:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
            {/* Retro PC / Comic Window Container */}
            <div
                className="bg-white border-[4px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] w-full max-w-5xl h-[90vh] md:h-[85vh] overflow-hidden relative animate-in zoom-in-95 duration-500 flex flex-col"
                style={{ clipPath: 'polygon(0% 0.5%, 100% 0%, 99.5% 99.5%, 0.5% 99%)' }}
            >
                {/* Modal Header - Retro Style */}
                <div className="bg-brand-yellow border-b-[4px] border-black p-3 md:p-4 flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full border-2 border-black bg-white"></div>
                            <div className="w-3 h-3 rounded-full border-2 border-black bg-white"></div>
                            <div className="w-3 h-3 rounded-full border-2 border-black bg-white"></div>
                        </div>
                        <h3 className="font-display text-lg md:text-xl uppercase tracking-wider flex items-center gap-2">
                            <span className="animate-pulse">📅</span> SINCRONIZANDO AGENDAS...
                        </h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="bg-black text-white px-3 py-1 font-display hover:bg-red-500 transition-colors border-2 border-black text-sm md:text-base font-bold"
                    >
                        [X] CERRAR
                    </button>
                </div>

                {/* Modal Body - Calendly Widget */}
                <div className="bg-white flex-grow relative overflow-hidden">
                    {/* Grid Pattern Background */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_0)] [background-size:20px_20px]"></div>

                    <div className="relative z-10 w-full h-full">
                        <InlineWidget
                            url={calendlyUrl}
                            styles={{
                                height: '100%',
                                width: '100%'
                            }}
                        />
                    </div>
                </div>

                {/* Modal Footer Decorator */}
                <div className="bg-gray-100 border-t-2 border-black p-2 flex justify-between gap-4 opacity-50 select-none shrink-0 px-4">
                    <div className="font-mono text-[10px] font-bold hidden md:block">CALENDLY_INTEGRATION_MODULE_V4.4</div>
                    <div className="flex gap-4">
                        <div className="font-mono text-[10px] font-bold text-green-700 uppercase">Status: Online</div>
                        <div className="font-mono text-[10px] font-bold animate-pulse uppercase">Connection: Secure</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
