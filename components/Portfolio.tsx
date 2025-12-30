import React from 'react';
import { PortfolioItemProps } from '../types';

const PortfolioItem: React.FC<PortfolioItemProps & { rotation?: string, stickerColor?: string }> = ({ title, description, image, colorClass, url, rotation = 'rotate-0', stickerColor = 'bg-brand-yellow' }) => (
  <div className={`relative group ${rotation} transition-transform hover:scale-105 duration-300`}>
    {/* Tape or Pin */}
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-gray-200 border border-black rounded-full z-20 shadow-sm opacity-80"></div>

    {/* Main Frame */}
    <div className="relative bg-white p-4 pb-12 border-2 border-black shadow-sketch flex flex-col gap-4 items-center transform transition-all hover:shadow-sketch-lg">
      <div className="w-full aspect-square border border-black bg-gray-50 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Sticker Label */}
      <div className={`absolute bottom-4 -right-2 ${stickerColor} text-black px-4 py-1 border border-black font-display uppercase text-sm transform -rotate-2 shadow-sm`}>
        {title}
      </div>
    </div>

    {/* Description Bubble (Optional on hover or mobile) */}
    <div className="opacity-0 group-hover:opacity-100 absolute -bottom-16 left-0 right-0 bg-black text-white text-base p-3 text-center rounded-lg transition-opacity duration-300 pointer-events-none z-30 shadow-xl">
      {description}
    </div>
  </div>
);

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] bg-fixed relative overflow-hidden">
      {/* Background Scribbles */}
      <div className="absolute top-10 left-10 text-9xl text-gray-100 select-none pointer-events-none font-accent opacity-50">?</div>
      <div className="absolute bottom-10 right-10 text-9xl text-gray-100 select-none pointer-events-none font-accent opacity-50">!</div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="mb-24 text-center relative group">
          <h2 className="text-5xl md:text-8xl font-display uppercase leading-[0.9] relative z-10 text-brand-dark drop-shadow-sketch-sm">
            CREAMOS SISTEMAS. <br />
            <span className="bg-brand-yellow px-2 border-2 border-black transform -rotate-1 inline-block text-black">SISTEMAS INTELIGENTES.</span>
          </h2>
          <p className="mt-6 font-sans text-xl font-medium text-gray-600 relative z-10">
            Automatización real, resultados reales. Confía en los datos.
          </p>
          {/* Sketchy underline or arrow */}
          <svg className="absolute top-full left-1/2 -translate-x-1/2 w-48 h-12 text-black mt-8" viewBox="0 0 100 20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M0,10 Q50,20 100,10" />
            <path d="M90,5 L100,10 L90,15" />
          </svg>
        </div>

        {/* Gallery Wall Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-7xl mx-auto px-8 relative">

          {/* Connecting Lines (Decorative SVG behind) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block -z-10 text-black opacity-20" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5">
            <path d="M200,100 C300,100 400,200 500,100" fill="none" />
            <path d="M500,100 C600,0 700,100 800,200" fill="none" />
          </svg>

          <PortfolioItem
            title="Snork Meme"
            description="Automatizamos tareas repetitivas que hoy haces a mano sin darte cuenta."
            image="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d1d4f1b90511ce48cd4d3b_snork.avif"
            stickerColor="bg-brand-blue"
            rotation="rotate-2"
            url="https://www.behance.net/gallery/199446143/Snork-meme-mem-crypto-token"
          />
          <PortfolioItem
            title="NotDog"
            description="Procesos desordenados pasan a funcionar de forma clara y automática."
            image="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d1d4f0540b33d5d141c396_notdog.avif"
            stickerColor="bg-brand-orange"
            rotation="-rotate-1"
            url="https://www.behance.net/gallery/212212461/NOTDOG-crypto-meme-coin"
          />
          <PortfolioItem
            title="Keycat"
            description="Respuestas, mensajes y acciones que se ejecutan solas cuando toca."
            image="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d1d4f1540b33d5d141c464_keycat.avif"
            stickerColor="bg-brand-yellow"
            rotation="rotate-3"
            url="https://www.behance.net/gallery/209200081/Keycat-Fan-Token-Meme"
          />
          <PortfolioItem
            title="Qubicus"
            description="Fan Token"
            image="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d1e576a54ab84d9991fc4e_%D0%B2%D1%96%D0%BA%D0%BD%D0%BE.png"
            stickerColor="bg-red-300"
            rotation="-rotate-2"
            url="https://www.behance.net/gallery/203975779/Qubicus-Fan-Token-Meme"
          />
        </div>

        {/* Extra text or decorators */}
        <div className="mt-20 text-center">
          <p className="font-comic text-xl">Y muchas tonterías más...</p>
        </div>
      </div>
    </section>
  );
};