"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import {
  Shield,
  TrendingUp,
  Coins,
  Lock,
  Vote,
  Users,
  Award,
  Database,
} from "lucide-react"

const refiFeatures = [
  {
    icon: Shield,
    title: "ReFi Investments",
    description:
      "Backed by a portfolio of sustainable investments, the coin price reflects the value of the underlying assets; new coins get minted to meet buy demands; there are no supply limits.",
  },
  {
    icon: Coins,
    title: "Staking",
    description:
      "Coin holders can stake their coins and earn passive income.",
  },
  {
    icon: TrendingUp,
    title: "Good Investment",
    description:
      "Safe store of value with limited price volatility and protection against inflation.",
  },
]

const govFeatures = [
  {
    icon: Vote,
    title: "Governance Participation",
    description:
      "Allows coin holders to participate in the platform governance.",
  },
  {
    icon: Users,
    title: "Validators",
    description:
      "To become a validator, entities must stake GGEZ1 coins as collateral.",
  },
  {
    icon: Award,
    title: "Validation Rewards",
    description:
      "Validators who process transactions are rewarded for their participation in the consensus process, incentivizing network participation and increased security.",
  },
  {
    icon: Database,
    title: "Fixed Supply",
    description: "Maximum supply of 1,777,777,777 GGEZ1.",
  },
]

function useInView(threshold = 0.2) {
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

export function CoinsSection() {
  const refi = useInView()
  const gov = useInView()

  return (
    <section id="coins" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            GGEZ1 Coins
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">
              Two Coins.{" "}
              <span className="text-gradient">One Ecosystem.</span>
            </span>
          </h2>
        </div>

        {/* ReFi Coin */}
        <div
          ref={refi.ref}
          className={`mt-20 flex flex-col items-center gap-12 lg:flex-row transition-all duration-700 ${
            refi.visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex-1">
            <div className="relative mx-auto w-fit">
              <Image
                src="/images/3.1.png"
                alt="GGZ ReFi Coin"
                width={400}
                height={400}
                className="animate-float rounded-2xl"
              />
              <div className="pointer-events-none absolute inset-0 -z-10 scale-125 rounded-full bg-primary/10 blur-[50px]" />
            </div>
          </div>
          <div className="flex-1">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
              <Lock size={14} className="text-primary" />
              <span className="text-xs font-medium text-primary">
                Asset-backed
              </span>
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
              GGZ ReFi Coin
            </h3>
            <p className="mt-2 text-base text-muted-foreground">
              Trusted, secure, and stable cryptocurrency
            </p>

            <div className="mt-8 flex flex-col gap-6">
              {refiFeatures.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">
                      {feature.title}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Governance Coin */}
        <div
          ref={gov.ref}
          className={`mt-32 flex flex-col-reverse items-center gap-12 lg:flex-row transition-all duration-700 ${
            gov.visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex-1">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5">
              <Vote size={14} className="text-accent" />
              <span className="text-xs font-medium text-accent">
                Governance
              </span>
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
              GGEZ1 Governance Coin
            </h3>

            <div className="mt-8 flex flex-col gap-6">
              {govFeatures.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <feature.icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">
                      {feature.title}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="relative mx-auto w-fit">
              <Image
                src="/images/2.png"
                alt="GGEZ1 Governance Coin"
                width={400}
                height={400}
                className="animate-float rounded-2xl"
                style={{ animationDelay: "3s" }}
              />
              <div className="pointer-events-none absolute inset-0 -z-10 scale-125 rounded-full bg-accent/10 blur-[50px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
