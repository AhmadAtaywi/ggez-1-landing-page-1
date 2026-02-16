"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Globe, Coins, Link2 } from "lucide-react"

const platforms = [
  {
    icon: Globe,
    title: "Web3 Tokenization Platform",
    description:
      "Web3 application designed for asset owners and managers to streamline the tokenization and distribution process of their assets.",
    image: "/images/platform-web3.jpg",
    imageAlt: "Web3 tokenization platform interface",
  },
  {
    icon: Coins,
    title: "Asset-backed Cryptocurrency",
    description:
      "A cryptocurrency backed by real-world income-generating global investments in sustainability and social equity (ReFi).",
    image: "/images/platform-coin.jpg",
    imageAlt: "GGEZ1 asset-backed cryptocurrency coin",
  },
  {
    icon: Link2,
    title: "Interconnected Decentralized Blockchain",
    description:
      "Smart-chain that can exchange assets and data with other blockchains without central exchanges.",
    image: "/images/platform-blockchain.jpg",
    imageAlt: "Interconnected decentralized blockchain network",
  },
]

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, visible }
}

export function PlatformSection() {
  const header = useInView()

  return (
    <section id="platform" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={header.ref}
          className={`text-center transition-all duration-700 ${
            header.visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Our Platform
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">
              GGEZ1 <span className="text-gradient">Platform</span>
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            A comprehensive ecosystem of tools and infrastructure for the future
            of regenerative finance.
          </p>
        </div>

        <div className="mt-20 flex flex-col gap-24">
          {platforms.map((platform, index) => {
            const isReversed = index % 2 !== 0
            return (
              <PlatformItem
                key={platform.title}
                platform={platform}
                index={index}
                reversed={isReversed}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

function PlatformItem({
  platform,
  index,
  reversed,
}: {
  platform: (typeof platforms)[0]
  index: number
  reversed: boolean
}) {
  const { ref, visible } = useInView()

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center gap-12 ${
        reversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Image */}
      <div className="flex-1">
        <div className="relative mx-auto w-fit">
          <div className="glass-card overflow-hidden rounded-2xl">
            <Image
              src={platform.image}
              alt={platform.imageAlt}
              width={500}
              height={350}
              className="rounded-2xl"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 -z-10 scale-110 rounded-full bg-primary/8 blur-[50px]" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
          <platform.icon size={14} className="text-primary" />
          <span className="text-xs font-medium text-primary">
            {`Feature ${index + 1}`}
          </span>
        </div>
        <h3 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
          {platform.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {platform.description}
        </p>
      </div>
    </div>
  )
}
