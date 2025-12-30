"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function StickyNav() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Show navbar after scrolling down 100px
            setIsVisible(window.scrollY > 100)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 md:pl-24 md:pr-12",
                "bg-black/40 backdrop-blur-md border-b border-white/5",
                "transition-all duration-500 ease-in-out transform",
                isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
            )}
        >
            {/* Logo */}
            <div className="flex items-center gap-2">
                <img
                    src="/logo-ia-parallax-1.png"
                    alt="IA_PARALLAX"
                    className="h-[45px] w-auto object-contain"
                />
            </div>

            {/* CTA Button */}
            <button
                className={cn(
                    "group relative px-5 py-2 overflow-hidden",
                    "border border-accent/40 rounded-sm",
                    "transition-all duration-300 hover:border-accent hover:shadow-[0_0_15px_var(--accent,rgba(0,212,255,0.3))]"
                )}
            >
                <span className="relative z-10 font-mono text-[10px] font-bold text-accent uppercase tracking-widest group-hover:text-black transition-colors duration-300">
                    Consultar
                </span>

                {/* Hover fill effect */}
                <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </button>
        </nav>
    )
}
