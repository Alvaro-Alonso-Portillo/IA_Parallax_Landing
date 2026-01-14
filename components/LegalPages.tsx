import React, { useEffect } from 'react';

type LegalType = 'aviso' | 'privacidad' | 'cookies';

interface LegalPagesProps {
    type: LegalType;
    onBack: () => void;
}

export const LegalPages: React.FC<LegalPagesProps> = ({ type, onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [type]);

    const content = {
        aviso: {
            title: "Aviso Legal",
            icon: "⚖️",
            subtitle: "LSSI-CE / Dominio: IAPARALLAX.COM",
            sections: [
                {
                    h: "Información General",
                    p: "En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de Servicios de la Sociedad de la Información y el Comercio Electrónico (LSSI-CE) de 11 de julio, se facilitan a continuación los siguientes datos:",
                    details: [
                        { label: "Titular", value: "Alvaro Alonso Portillo" },
                        { label: "NIF", value: "44955300Y" },
                        { label: "Dirección", value: "Calle Castillo de Utrera" },
                        { label: "Teléfono", value: "666426999" },
                        { label: "Email", value: "balonsomorillo@gmail.com" }
                    ]
                },
                {
                    h: "Términos de Uso",
                    p: "El objeto de las presentes Condiciones Generales de Uso es regular el acceso y la utilización del Sitio Web. IA_Parallax se reserva la facultad de modificar, en cualquier momento y sin aviso previo, la presentación y configuración del mismo.",
                    subsections: [
                        { h: "El Objeto", p: "Apariencia externa de los interfaces, árbol de navegación y todos los elementos integrados." },
                        { h: "El Usuario", p: "El acceso confiere la condición de Usuario, asumiendo la responsabilidad del uso correcto y la veracidad de los datos aportados." }
                    ]
                },
                {
                    h: "Exclusión de Garantías",
                    p: "IA_Parallax no garantiza la continuidad, disponibilidad y utilidad del Sitio Web. No se responsabiliza por pérdidas o daños que surjan del acceso o uso, incluyendo fallos en sistemas informáticos o virus."
                },
                {
                    h: "Política de Enlaces",
                    p: "El Sitio Web puede poner a disposición enlaces (links, banners, botones) a sitios de terceros. IA_Parallax no asume responsabilidad por los contenidos, servicios o productos de dichos sitios enlazados."
                },
                {
                    h: "Propiedad Intelectual",
                    p: "IA_Parallax es titular de todos los derechos de propiedad intelectual e industrial. Queda prohibida la reproducción, distribución y comunicación pública de los contenidos sin autorización expresa."
                },
                {
                    h: "Jurisdicción",
                    p: "La relación entre el Usuario e IA_Parallax se regirá por la normativa española vigente. Cualquier controversia se someterá a los jueces y tribunales que correspondan conforme a derecho."
                }
            ]
        },
        privacidad: {
            title: "Privacidad de Datos",
            icon: "🔒",
            subtitle: "Política de Protección y Tratamiento",
            sections: [
                {
                    h: "Marco Normativo",
                    p: "Respetando lo establecido en la legislación vigente, IA_Parallax se compromete a adoptar las medidas técnicas y organizativas necesarias, según el nivel de seguridad adecuado al riesgo de los datos recogidos.",
                    list: [
                        "El Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD).",
                        "La Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales (LOPD-GDD).",
                        "El Real Decreto 1720/2007 (RDLOPD).",
                        "La Ley 34/2002, de 11 de julio (LSSI-CE)."
                    ]
                },
                {
                    h: "Responsable del Tratamiento",
                    p: "El responsable del tratamiento de los datos personales recogidos en IA_Parallax es Alvaro Alonso Portillo.",
                    details: [
                        { label: "Titular", value: "Alvaro Alonso Portillo" },
                        { label: "NIF", value: "44955300Y" },
                        { label: "Dirección", value: "Calle Castillo de Utrera" },
                        { label: "Teléfono", value: "666426999" },
                        { label: "Email", value: "balonsomorillo@gmail.com" }
                    ]
                },
                {
                    h: "Principios Aplicables",
                    p: "El tratamiento de los datos personales del Usuario se someterá a los siguientes principios recogidos en el artículo 5 del RGPD:",
                    grid: [
                        "Licitud, lealtad y transparencia",
                        "Limitación de la finalidad",
                        "Minimización de datos",
                        "Exactitud",
                        "Limitación del plazo de conservación",
                        "Integridad y confidencialidad",
                        "Responsabilidad proactiva"
                    ]
                },
                {
                    h: "Derechos del Usuario",
                    p: "El Usuario podrá ejercer frente al Responsable del tratamiento los siguientes derechos reconocidos en el RGPD:",
                    rights: [
                        { n: "Acceso", d: "Obtener confirmación sobre si se están tratando sus datos." },
                        { n: "Rectificación", d: "Modificar datos inexactos o incompletos." },
                        { n: "Supresión (Olvido)", d: "Solicitar la eliminación de datos cuando ya no sean necesarios." },
                        { n: "Limitación", d: "Limitar el tratamiento de sus datos en circunstancias específicas." },
                        { n: "Portabilidad", d: "Recibir sus datos en formato estructurado para transmitirlos a otro responsable." },
                        { n: "Oposición", d: "Oponerse al tratamiento de sus datos." }
                    ],
                    footer: "Puede ejercer sus derechos enviando un email a: balonsomorillo@gmail.com con la referencia \"RGPD-iaparallax.es\"."
                },
                {
                    h: "Secreto y Seguridad",
                    p: "IA_Parallax se compromete a adoptar las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos. El Sitio Web cuenta con un certificado SSL (Secure Socket Layer). Los datos personales serán tratados como confidenciales y se garantiza el secreto profesional."
                },
                {
                    h: "Aceptación y Cambios",
                    p: "El uso del Sitio Web implicará la aceptación de la Política de Privacidad del mismo. IA_Parallax se reserva el derecho a modificar su Política de Privacidad de acuerdo a su propio criterio o a cambios legislativos."
                }
            ]
        },
        cookies: {
            title: "Política de Cookies",
            icon: "🍪",
            subtitle: "Dominio: iaparallax.com",
            sections: [
                {
                    h: "Definición y Función",
                    p: "El acceso a este Sitio Web puede implicar la utilización de cookies. Las cookies son pequeñas cantidades de información que se almacenan en el navegador para que el servidor recuerde cierta información. Facilitan la navegación y no dañan el dispositivo."
                },
                {
                    h: "Privacidad y Datos",
                    p: "La información recabada puede incluir fecha y hora de visitas, páginas visionadas y tiempo de estancia. La información privada solo formará parte del archivo si el usuario la facilita personalmente.",
                    callout: "Ninguna cookie permite contactar con el número de teléfono del Usuario o extraer información del disco duro o robar información personal."
                },
                {
                    h: "Tipología de Cookies",
                    p: "Utilizamos diferentes tipos de galletas digitales para asegurar que tu experiencia sea fluida y personalizada.",
                    subsections: [
                        { h: "Cookies Propias", p: "Gestionadas exclusivamente por IA_Parallax para mejorar el funcionamiento del Sitio Web y reconocer al Usuario como visitante recurrente." },
                        { h: "Cookies de Redes Sociales", p: "Plugins que permiten acceder a redes sociales desde el Sitio Web. Cada red dispone de su propia política de privacidad." }
                    ],
                    links: [
                        { n: "Facebook Policy", url: "https://www.facebook.com/policies/cookies/" },
                        { n: "Twitter Privacy", url: "https://twitter.com/es/privacy" },
                        { n: "Instagram Help", url: "https://help.instagram.com/189664148063437" },
                        { n: "YouTube Policy", url: "https://policies.google.com/technologies/cookies" },
                        { n: "Pinterest Policy", url: "https://policy.pinterest.com/es/cookies" },
                        { n: "LinkedIn Legal", url: "https://www.linkedin.com/legal/cookie-policy" }
                    ]
                },
                {
                    h: "Gestión y Desactivación",
                    p: "El Usuario puede deshabilitar, rechazar y eliminar las cookies mediante la configuración de su navegador (Chrome, Firefox, Safari, etc.). Si se rechazan, se podrá seguir usando el Sitio Web, aunque algunas prestaciones podrían verse limitadas."
                }
            ]
        }
    };

    const active = content[type];

    return (
        <div className="min-h-screen bg-[#fffdf5]">
            {/* Back Button */}
            <div className="fixed top-20 md:top-24 left-4 md:left-8 z-40">
                <button
                    onClick={onBack}
                    className="bg-white border-2 border-black p-3 md:p-4 rounded-full shadow-sketch hover:shadow-sketch-lg hover:-translate-y-1 transition-all flex items-center gap-2 group"
                >
                    <span className="group-hover:-translate-x-1 transition-transform">←</span>
                    <span className="font-display uppercase text-xs md:text-sm text-black hidden xs:inline">Volver</span>
                </button>
            </div>

            <header className="py-20 md:py-32 bg-brand-blue border-b-4 border-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

                <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10 text-center text-white">
                    <div className="text-4xl md:text-6xl mb-6 animate-bounce">{active.icon}</div>
                    <h1 className="text-4xl md:text-8xl font-display uppercase leading-none drop-shadow-sketch mb-4">
                        {active.title}
                    </h1>
                    <p className="font-sans text-lg md:text-2xl font-black text-white/80 italic">
                        "{active.subtitle}"
                    </p>
                </div>
            </header>

            <section className="py-12 md:py-24 max-w-4xl mx-auto px-4 md:px-8">
                <div className="bg-white border-[3px] md:border-4 border-black p-6 md:p-16 shadow-sketch-xl rounded-sketch flex flex-col gap-10 md:gap-12">
                    {active.sections.map((s: any, i: number) => (
                        <div key={i} className="group">
                            <h2 className="text-2xl md:text-3xl font-display uppercase mb-4 text-brand-dark flex items-center gap-4">
                                <span className="w-8 h-8 rounded-full bg-brand-yellow border-2 border-black flex items-center justify-center text-sm font-bold shadow-sm group-hover:rotate-12 transition-transform text-black">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                {s.h}
                            </h2>
                            <div className="font-sans text-lg font-bold text-gray-700 leading-relaxed border-l-4 border-brand-orange/30 pl-6 ml-4 space-y-4">
                                <p>{s.p}</p>

                                {s.list && (
                                    <ul className="space-y-2 mt-4">
                                        {s.list.map((item: string, j: number) => (
                                            <li key={j} className="flex items-start gap-3">
                                                <span className="text-brand-blue mt-1">›</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {s.details && (
                                    <div className="bg-gray-50 border-2 border-black p-6 rounded-lg shadow-sketch-sm mt-4 grid gap-2">
                                        {s.details.map((d: any, j: number) => (
                                            <div key={j} className="flex flex-col sm:flex-row sm:gap-4 border-b border-black/5 pb-1 text-black">
                                                <span className="text-brand-blue uppercase text-xs font-black sm:w-24 shrink-0">{d.label}:</span>
                                                <span>{d.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {s.subsections && (
                                    <div className="mt-6 space-y-6">
                                        {s.subsections.map((sub: any, j: number) => (
                                            <div key={j} className="bg-gray-50/50 p-4 border-l-4 border-black border-2 border-black/10 rounded-r-lg">
                                                <h3 className="font-display text-lg uppercase mb-2 text-black">{sub.h}</h3>
                                                <p className="text-base text-gray-600 italic">"{sub.p}"</p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {s.grid && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                                        {s.grid.map((principle: string, j: number) => (
                                            <div key={j} className="bg-brand-yellow/10 border-2 border-black p-4 rounded-md shadow-sm transform -rotate-1 hover:rotate-0 transition-transform">
                                                <div className="text-[10px] text-brand-orange uppercase font-black mb-1">Principio {j + 1}</div>
                                                <div className="text-black text-sm">{principle}</div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {s.rights && (
                                    <div className="mt-6 border-2 border-black divide-y-2 divide-black rounded-lg overflow-hidden shadow-sketch-sm">
                                        {s.rights.map((r: any, j: number) => (
                                            <div key={j} className="grid grid-cols-1 sm:grid-cols-3 bg-white hover:bg-gray-50 transition-colors">
                                                <div className="p-4 bg-brand-blue/10 font-display text-sm uppercase border-b-2 sm:border-b-0 sm:border-r-2 border-black flex items-center">
                                                    {r.n}
                                                </div>
                                                <div className="p-4 sm:col-span-2 text-sm italic py-4">
                                                    {r.d}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {s.footer && (
                                    <div className="mt-8 p-4 bg-black text-white rounded-lg font-bold text-sm text-center">
                                        {s.footer}
                                    </div>
                                )}

                                {s.callout && (
                                    <div className="mt-6 p-6 bg-brand-dark text-white border-4 border-brand-blue rounded-lg shadow-sketch-sm italic font-display text-sm md:text-base text-center">
                                        "{s.callout}"
                                    </div>
                                )}

                                {s.links && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
                                        {s.links.map((link: any, j: number) => (
                                            <a
                                                key={j}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-black text-white p-3 text-xs font-display uppercase border-2 border-black hover:bg-white hover:text-black transition-all flex items-center justify-between group"
                                            >
                                                {link.n}
                                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}

                    <div className="mt-8 p-6 bg-brand-gray/30 border-2 border-dashed border-black/20 rounded-lg text-center font-sans font-bold italic text-gray-500">
                        Última actualización: Enero 2026. <br />
                        Porque el cumplimiento también puede tener estilo.
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 text-center">
                <p className="font-display text-2xl uppercase mb-8">¿Dudas sobre el aspecto legal?</p>
                <button onClick={onBack} className="inline-block bg-black text-white px-8 py-4 text-xl font-display uppercase border-2 border-black shadow-sketch hover:shadow-sketch-lg hover:-translate-y-1 transition-all rounded-full">
                    Volver al Inicio
                </button>
            </section>
        </div>
    );
};
