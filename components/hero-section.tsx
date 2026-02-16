"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Play, ArrowRight } from "lucide-react"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [scrollY, setScrollY] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const parallaxOffset = scrollY * 0.3

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden grid-bg"
    >
      {/* Glow effects */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px] animate-glow-pulse" />
      <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[100px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-12 px-6 pt-24 pb-16 lg:flex-row lg:gap-16">
        {/* Left content */}
        <div
          className={`flex-1 text-center lg:text-left transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-muted-foreground">
              ReFi Blockchain Ecosystem
            </span>
          </div>

          <h1 className="font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="text-balance">Making it easy to invest in </span>
            <span className="text-gradient">sustainability</span>
            <span className="text-balance"> on Web3</span>
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted-foreground lg:mx-0 lg:text-lg">
            GGEZ1 is building the future of regenerative finance. A blockchain
            ecosystem designed for sustainable investments with real-world
            impact.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <button
              type="button"
              className="group flex items-center gap-3 rounded-lg border border-border bg-secondary/50 px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/30 hover:bg-secondary"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Play size={14} fill="currentColor" />
              </div>
              Play Video
            </button>
            <a
              href="#coins"
              className="group flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              Buy GGEZ1 Coins
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 flex items-center justify-center gap-8 lg:justify-start">
            {[
              { value: "$12M+", label: "Total Value Locked" },
              { value: "50K+", label: "Community Members" },
              { value: "99.9%", label: "Uptime" },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="font-heading text-2xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right 3D Image */}
        <div
          className={`flex-1 transition-all duration-1000 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div
            className="relative"
            style={{ transform: `translateY(${-parallaxOffset * 0.15}px)` }}
          >
            <div className="animate-float">
              <Image
                src="/images/1.png"
                alt="GGEZ1 Blockchain Ecosystem 3D visualization"
                width={600}
                height={600}
                className="rounded-2xl"
                priority
              />
            </div>
            {/* Glow behind image */}
            <div className="pointer-events-none absolute inset-0 -z-10 scale-110 rounded-full bg-primary/10 blur-[60px]" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground">Scroll</span>
          <div className="h-8 w-5 rounded-full border border-muted-foreground/30 p-1">
            <div className="h-2 w-full rounded-full bg-primary animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
