"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink } from "lucide-react"

const exchanges = [
  { name: "P2B", url: "#" },
  { name: "UZX", url: "#" },
  { name: "Blockspot", url: "#" },
  { name: "CoinGecko", url: "#" },
  { name: "CoinMarketCap", url: "#" },
  { name: "DEXTools", url: "#" },
  { name: "Uniswap", url: "#" },
  { name: "PancakeSwap", url: "#" },
]

export function MarketSection() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="market" ref={ref} className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Market Presence
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">
              Discover GGEZ1 across the{" "}
              <span className="text-gradient">Web3 Universe</span>
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            GGEZ1 is listed across major decentralized and centralized exchanges
            making it accessible to everyone in the Web3 ecosystem.
          </p>
        </div>

        {/* Exchange marquee */}
        <div className="relative mt-16 overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />
          <div className="flex animate-marquee items-center gap-8">
            {[...exchanges, ...exchanges].map((exchange, i) => (
              <a
                key={`${exchange.name}-${i}`}
                href={exchange.url}
                className="glass-card group flex shrink-0 items-center gap-3 rounded-xl px-8 py-5 transition-all hover:border-primary/20"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                  <span className="font-heading text-xs font-bold text-foreground">
                    {exchange.name.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <span className="text-sm font-medium text-foreground">
                  {exchange.name}
                </span>
                <ExternalLink
                  size={14}
                  className="text-muted-foreground transition-colors group-hover:text-primary"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Exchange grid for mobile */}
        <div
          className={`mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {exchanges.map((exchange) => (
            <a
              key={exchange.name}
              href={exchange.url}
              className="glass-card flex items-center justify-center gap-2 rounded-xl px-4 py-4 text-sm font-medium text-foreground transition-all hover:border-primary/20"
            >
              {exchange.name}
              <ExternalLink size={12} className="text-muted-foreground" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
