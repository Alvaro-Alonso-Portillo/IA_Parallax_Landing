import React from 'react';
import { CallbackForm } from './CallbackForm';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="component_footer bg-[#f9f9f9] border-t-2 border-black relative font-sans">
      <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row relative">

        {/* Column - Contact Info & Quick Call (40% desktop, 100% mobile) - ORDER 1 ON MOBILE */}
        <div className="w-full lg:w-[40%] bg-white border-b-2 lg:border-b-0 lg:border-r-2 border-black p-8 md:p-16 flex flex-col justify-center relative order-1">
          <div className="max-w-xl mx-auto w-full">
            <h3 className="text-4xl md:text-5xl font-display mb-8 text-black text-center lg:text-left">
              Entrenamos a tu <br /> IA para ser fuerte
            </h3>

            {/* High-conversion Callback Component - Now the primary lead generator */}
            <div className="mb-4 transform -rotate-1 hover:rotate-0 transition-transform">
              <CallbackForm />
            </div>
          </div>
        </div>

        {/* Column - Locker Room Scene (60% desktop, 100% mobile) - ORDER 2 ON MOBILE */}
        <div className="w-full lg:w-[60%] bg-[#fffdf5] relative overflow-hidden min-h-[500px] md:min-h-[600px] flex flex-col items-center justify-end pb-20 order-2 border-t-2 lg:border-t-0 border-black lg:border-l-0">

          {/* Background Lockers - Reduced count on mobile */}
          <div className="absolute inset-x-4 md:inset-x-10 bottom-40 top-10 md:top-20 flex gap-2 md:gap-4 justify-center opacity-40 md:opacity-60">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className={`flex-1 h-full border-2 border-black bg-gray-50 relative rounded-t-lg group hover:bg-gray-100 transition-colors ${i > 3 ? 'hidden sm:block' : ''}`}>
                <div className="absolute top-2 md:top-4 left-1/2 -translate-x-1/2 w-8 md:w-12 h-4 md:h-6 border-2 border-black bg-white"></div>
                <div className="w-2/3 h-1 bg-black mx-auto mt-12 md:mt-16 rounded-full"></div>
                <div className="w-2/3 h-1 bg-black mx-auto mt-2 rounded-full"></div>
                <div className="absolute top-1/2 right-2 md:right-3 w-1 h-8 md:h-12 bg-black rounded-full"></div>
              </div>
            ))}
          </div>

          {/* The Bench and characters Group (LinkedIn, GitHub, Instagram) */}
          <div className="relative z-10 w-full flex justify-center lg:justify-end items-end px-4 lg:pr-16">
            <div className="relative max-w-sm md:max-w-xl w-full translate-y-8 md:translate-y-0">
              {/* Group Image */}
              <img
                src="https://res.cloudinary.com/drfr1lzlt/image/upload/v1768301909/Gemini_Generated_Image_t686fet686fet686-removebg-preview_ij8oco.png"
                alt="Personajes de redes sociales y expertos en automatización IA sentados en un banco"
                className="w-full h-auto drop-shadow-sketch-lg animate-float"
              />

              {/* Clickable regions for each character's head - Scaled for mobile container */}
              <a
                href="https://www.linkedin.com/in/alvaro-alonso-8319b52ba/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-[10%] left-[5%] w-[30%] h-[50%] z-20 cursor-pointer group"
                title="LinkedIn"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-3 py-1 text-xs md:text-sm rounded scale-0 group-hover:scale-100 transition-transform font-bold">LinkedIn</div>
              </a>

              <a
                href="https://github.com/Alvaro-Alonso-Portillo"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-[5%] left-[35%] w-[30%] h-[50%] z-20 cursor-pointer group"
                title="GitHub"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-3 py-1 text-xs md:text-sm rounded scale-0 group-hover:scale-100 transition-transform font-bold">GitHub</div>
              </a>

              <a
                href="https://www.instagram.com/iaparallax/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-[10%] right-[5%] w-[30%] h-[50%] z-20 cursor-pointer group"
                title="Instagram"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-3 py-1 text-xs md:text-sm rounded scale-0 group-hover:scale-100 transition-transform font-bold">Instagram</div>
              </a>

              <div className="absolute bottom-0 w-full h-[10%] bg-black/5 pointer-events-none"></div>
            </div>
          </div>

          {/* X (Twitter) Push-up Character */}
          <a
            href="https://x.com/iaparallax"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-4 md:left-12 bottom-2 md:bottom-6 w-80 md:w-[550px] h-auto z-40 block hover:scale-105 transition-transform group"
          >
            <img
              src="https://res.cloudinary.com/drfr1lzlt/image/upload/v1768302544/Gemini_Generated_Image_nkwro7nkwro7nkwr-removebg-preview_h3puow.png"
              alt="Personaje experto en IA haciendo flexiones representando rendimiento y escala"
              className="w-full h-auto drop-shadow-sketch animate-push-up"
            />
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black text-white px-3 py-1 text-xs md:text-sm rounded scale-0 group-hover:scale-100 transition-transform font-bold opacity-0 group-hover:opacity-100">Twitter / X</div>
          </a>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t-[3px] border-black bg-white p-6 relative overflow-visible">

        <div className="max-w-[1440px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8 pl-16">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <span className="font-bold text-sm">© 2025 IA_PARALLAX.</span>
            <div className="flex gap-4 text-[10px] md:text-xs font-bold uppercase underline decoration-1 underline-offset-4 font-sans opacity-60 hover:opacity-100 transition-opacity">
              <a href="#/aviso-legal" className="hover:text-brand-blue">Aviso Legal</a>
              <a href="#/privacidad" className="hover:text-brand-blue">Privacidad</a>
              <a href="#/cookies" className="hover:text-brand-blue">Cookies</a>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm font-bold uppercase underline decoration-2 underline-offset-4 font-sans">
            <a href="https://www.linkedin.com/in/alvaro-alonso-8319b52ba/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue">LinkedIn</a>
            <a href="https://x.com/iaparallax" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue">Twitter</a>
            <a href="https://www.instagram.com/iaparallax/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue">Instagram</a>
            <a href="https://github.com/Alvaro-Alonso-Portillo" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};