"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ExternalLink, Trophy, X } from "lucide-react"

const awards = [
  {
    title: "Startup World Cup",
    subtitle: "Regional Winner 2023",
    image: "/images/trophy-startup-world-cup.jpg",
    description:
      "Won the best pitch from the Middle East region at the Startup World Cup competition organized by Pegasus Tech Ventures, reaching the semi-finals in San Francisco on November 29, 2023.",
  },
  {
    title: "HackerNoon",
    subtitle: "Startup of the Year 2024",
    image: "/images/trophy-hackernoon.jpg",
    description:
      "GGEZ1 has been celebrated as HackerNoon's \"Startup of the Year 2024\" in the Web3 category, sweeping first place in both DeFi and Decentralization and securing a Top 3 finish in the Blockchain sub-category. Adding to our pride, GGEZ1 was recognized as the second-best startup from Montreal, Canada.",
  },
  {
    title: "Leap Rocket Fuel",
    subtitle: "Semi-Final 2024",
    image: "/images/trophy-leap.jpg",
    description:
      "Reached the semi-finals at the Leap 2024 Rocket Fuel competition held in Riyadh from March 4-7, 2024.",
  },
]

const exchanges = [
  { name: "P2P", image: "/images/exchanges/p2p.jpg", url: "#" },
  { name: "CoinStore", image: "/images/exchanges/coinstore.jpg", url: "#" },
  { name: "UZX", image: "/images/exchanges/uzx.jpg", url: "#" },
  { name: "Raydium", image: "/images/exchanges/radium.jpg", url: "#" },
  {
    name: "PancakeSwap",
    image: "/images/exchanges/pancakeswap.jpg",
    url: "#",
  },
  {
    name: "CoinMarketCap",
    image: "/images/exchanges/coinmarketcap.jpg",
    url: "#",
  },
  { name: "CoinGecko", image: "/images/exchanges/coingecko.jpg", url: "#" },
  {
    name: "CoinPaprika",
    image: "/images/exchanges/coinpaprika.jpg",
    url: "#",
  },
  {
    name: "Live Coin Watch",
    image: "/images/exchanges/livecoinwatch.jpg",
    url: "#",
  },
  { name: "Blockspot", image: "/images/exchanges/blockspot.jpg", url: "#" },
  {
    name: "CoinCheckup",
    image: "/images/exchanges/coincheckup.jpg",
    url: "#",
  },
  { name: "CoinCodex", image: "/images/exchanges/coincodex.jpg", url: "#" },
  {
    name: "Dex Screener",
    image: "/images/exchanges/dexscreener.jpg",
    url: "#",
  },
]

function AwardCard({
  award,
  index,
  visible,
}: {
  award: (typeof awards)[0]
  index: number
  visible: boolean
}) {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div
      className={`relative transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${200 + index * 100}ms` }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="glass-card group flex flex-col items-center gap-4 rounded-2xl p-6 text-center transition-all hover:border-primary/20 cursor-pointer">
        <div className="relative h-20 w-20 overflow-hidden rounded-xl">
          <Image
            src={award.image}
            alt={award.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
          <Trophy size={16} className="text-primary" />
        </div>
        <h4 className="font-heading text-sm font-bold text-foreground">
          {award.title}
        </h4>
        <p className="text-xs text-muted-foreground">{award.subtitle}</p>
      </div>

      {/* Tooltip / Popup */}
      {showTooltip && (
        <div className="absolute left-1/2 top-full z-30 mt-3 -translate-x-1/2">
          <div className="w-72 rounded-xl border border-border bg-card/95 backdrop-blur-xl p-5 shadow-2xl sm:w-80">
            <div className="mb-2 flex items-center gap-2">
              <Trophy size={14} className="text-primary" />
              <h5 className="font-heading text-sm font-bold text-foreground">
                {award.title}
              </h5>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              {award.description}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export function MarketSection() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 }
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

        {/* Exchange marquee - now with images */}
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
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={exchange.image}
                    alt={exchange.name}
                    fill
                    className="object-cover"
                  />
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

        {/* Awards / Trophies section */}
        <div className="mt-20">
          <div
            className={`mb-10 text-center transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
              Awards &amp; Recognition
            </h3>
          </div>
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
            {awards.map((award, index) => (
              <AwardCard
                key={award.title}
                award={award}
                index={index}
                visible={visible}
              />
            ))}
          </div>
        </div>

        {/* Exchange grid */}
        <div className="mt-16">
          <div
            className={`mb-10 text-center transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
              Listed On
            </h3>
          </div>
          <div
            className={`grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 transition-all duration-700 delay-400 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {exchanges.map((exchange) => (
              <a
                key={exchange.name}
                href={exchange.url}
                className="glass-card flex items-center justify-center gap-3 rounded-xl px-4 py-4 text-sm font-medium text-foreground transition-all hover:border-primary/20"
              >
                <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-md">
                  <Image
                    src={exchange.image}
                    alt={exchange.name}
                    fill
                    className="object-cover"
                  />
                </div>
                {exchange.name}
                <ExternalLink size={12} className="text-muted-foreground" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
