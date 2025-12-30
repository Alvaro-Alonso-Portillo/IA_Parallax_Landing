"use client"

import { useRef, useEffect, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface HighlightTextProps {
  children: ReactNode
  className?: string
  parallaxSpeed?: number
}

export function HighlightText({ children, className = "" }: HighlightTextProps) {
  const textRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!textRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0.8 },
        {
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      )
    }, textRef)

    return () => ctx.revert()
  }, [])

  return (
    <span
      ref={textRef}
      className={cn(
        "relative inline-block bg-gradient-to-r from-[#00D4FF] to-[#A020F0] bg-clip-text text-transparent transition-all duration-300",
        className
      )}
    >
      {children}
    </span>
  )
}
