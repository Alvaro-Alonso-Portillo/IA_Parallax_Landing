import React from 'react';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#FDFCF0] flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden relative">
            {/* Glitch Animation Styles */}
            <style>{`
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        .glitch-text {
          animation: glitch 0.3s infinite;
          text-shadow: 4px 4px 0px #000;
        }
        .neo-shadow {
          box-shadow: 8px 8px 0px 0px rgba(0,0,0,1);
        }
        .neo-shadow-hover:hover {
          box-shadow: none;
          transform: translate(4px, 4px);
        }
      `}</style>

            {/* Background Decorators */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_2px,transparent_0)] [background-size:30px_30px]"></div>

            <div className="relative z-10 flex flex-col items-center max-w-2xl text-center">
                {/* Giant 404 Title */}
                <h1 className="text-[12rem] md:text-[18rem] font-black leading-none text-yellow-400 uppercase glitch-text mb-4 lg:mb-0"
                    style={{ WebkitTextStroke: '4px black' }}>
                    404
                </h1>

                {/* Confused Label */}
                <div className="bg-red-500 border-4 border-black px-6 py-2 rotate-2 mb-8 neo-shadow">
                    <h2 className="text-2xl md:text-4xl font-black text-white uppercase italic">
                        ¿ALUCINACIÓN DE LA IA?
                    </h2>
                </div>

                {/* Illustration Container - Final Robot Image from Cloudinary */}
                <div className="mb-10 w-full max-w-sm aspect-square bg-white border-4 border-black neo-shadow relative overflow-hidden flex items-center justify-center p-4 -rotate-1">
                    <img
                        src="https://res.cloudinary.com/drfr1lzlt/image/upload/v1768389802/Gemini_Generated_Image_tczs7ctczs7ctczs_scfcru.png"
                        alt="Robot confundido IA"
                        className="w-full h-full object-contain"
                    />
                    {/* Action markers */}
                    <div className="absolute top-2 left-2 font-mono text-[10px] opacity-30">ERROR_LOG_V8.2</div>
                    <div className="absolute bottom-2 right-2 font-mono text-[10px] opacity-30">CONFUSED_BOT_FINAL_#99</div>
                </div>

                {/* Subtext */}
                <p className="font-comic text-xl md:text-2xl mb-12 max-w-lg leading-tight px-4">
                    'Nuestros agentes han buscado por toda la base de datos y no encuentran lo que buscas. Probablemente un script rebelde se lo ha comido.'
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col md:flex-row gap-6 w-full px-4">
                    <a
                        href="/"
                        onClick={(e) => { e.preventDefault(); window.location.hash = ''; }}
                        className="flex-1 bg-black text-white border-4 border-black py-5 px-8 font-black text-xl uppercase tracking-tighter neo-shadow neo-shadow-hover transition-all text-center"
                    >
                        VOLVER A LA SEGURIDAD (INICIO)
                    </a>

                    <button
                        className="flex-1 bg-white text-black border-4 border-black py-5 px-8 font-black text-xl uppercase tracking-tighter neo-shadow neo-shadow-hover transition-all text-center"
                    >
                        REPORTAR ESTE DESASTRE
                    </button>
                </div>
            </div>

            {/* Easter Egg / Secret Message */}
            <div className="mt-16 opacity-10 hover:opacity-100 transition-opacity duration-500 cursor-default select-all">
                <p className="font-mono text-[10px] md:text-xs text-black">
                    Ya que te has perdido, toma un premio de consolación: Usa el código <span className="font-bold border-b border-black">PERDIDO10</span> para un 10% de descuento en cualquier plantilla
                </p>
            </div>

            {/* Random scribbles/decorations */}
            <div className="hidden lg:block absolute bottom-10 left-10 text-8xl opacity-10 -rotate-12 select-none">??</div>
            <div className="hidden lg:block absolute top-20 right-20 text-8xl opacity-10 rotate-12 select-none">!!</div>
        </main>
    );
}
