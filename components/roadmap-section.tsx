"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle2, Circle, Clock } from "lucide-react"

interface RoadmapQuarter {
  quarter: string
  items: string[]
  status: "done" | "in-progress" | "upcoming"
}

interface RoadmapYear {
  year: string
  quarters: RoadmapQuarter[]
}

const roadmapData: RoadmapYear[] = [
  {
    year: "2022",
    quarters: [
      {
        quarter: "Q1",
        items: ["Whitepaper & Financial Plan", "Strategic Partners & Advisors"],
        status: "done",
      },
      {
        quarter: "Q2",
        items: ["Project Website & Media Content"],
        status: "done",
      },
      {
        quarter: "Q3",
        items: ["Website Launch"],
        status: "done",
      },
      {
        quarter: "Q4",
        items: ["GGEZ Testnet Launch"],
        status: "done",
      },
    ],
  },
  {
    year: "2023",
    quarters: [
      {
        quarter: "Q1",
        items: ["Testnet Blockchain Explorer"],
        status: "done",
      },
      {
        quarter: "Q2",
        items: ["Exchange API Integration", "Asset Trading Module"],
        status: "done",
      },
      {
        quarter: "Q3",
        items: ["Legal Entity Formation", "Admin Dashboard"],
        status: "done",
      },
      {
        quarter: "Q4",
        items: ["Pegasus Startup World Cup Semi-finals"],
        status: "done",
      },
    ],
  },
  {
    year: "2024",
    quarters: [
      {
        quarter: "Q1",
        items: ["Investor Portal"],
        status: "done",
      },
      {
        quarter: "Q2",
        items: ["Leap Rocket Fuel Semi-finals"],
        status: "done",
      },
      {
        quarter: "Q3",
        items: ["Blockchain Explorer Launch"],
        status: "done",
      },
      {
        quarter: "Q4",
        items: ["Mainnet Launch", "Private Sale", "Coinstore Listing"],
        status: "done",
      },
    ],
  },
  {
    year: "2025",
    quarters: [
      {
        quarter: "Q1",
        items: [
          "BEP20 Token Launch",
          "P2B & PancakeSwap Listing",
          "HackerNoon Startup of the Year",
        ],
        status: "done",
      },
      {
        quarter: "Q2",
        items: [
          "Solana Token Launch",
          "UZX & Raydium Listing",
          "Market Maker Integration",
        ],
        status: "in-progress",
      },
      {
        quarter: "Q3",
        items: [
          "CoinMarketCap & CoinGecko Listings",
          "Validator Network Expansion",
        ],
        status: "upcoming",
      },
      {
        quarter: "Q4",
        items: [
          "Target 300K Daily Turnover",
          "Launching Market Making Dashboard",
        ],
        status: "upcoming",
      },
    ],
  },
  {
    year: "2026",
    quarters: [
      {
        quarter: "Q1",
        items: ["Team Expansion", "Validator Network Growth"],
        status: "upcoming",
      },
      {
        quarter: "Q2",
        items: ["ReFi Coin Launch"],
        status: "upcoming",
      },
      {
        quarter: "Q3",
        items: ["Deal Marketplace Launch"],
        status: "upcoming",
      },
      {
        quarter: "Q4",
        items: ["MENA Marketing Campaign"],
        status: "upcoming",
      },
    ],
  },
]

function StatusIcon({ status }: { status: RoadmapQuarter["status"] }) {
  if (status === "done")
    return <CheckCircle2 size={16} className="text-primary" />
  if (status === "in-progress")
    return <Clock size={16} className="text-accent animate-pulse" />
  return <Circle size={16} className="text-muted-foreground/40" />
}

export function RoadmapSection() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [selectedYear, setSelectedYear] = useState("2025")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const activeYearData = roadmapData.find((y) => y.year === selectedYear)

  return (
    <section id="roadmap" ref={ref} className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Our Journey
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">
              Project <span className="text-gradient">Roadmap</span>
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Track our milestones and progress as we build the future of
            regenerative finance.
          </p>
        </div>

        {/* Year selector */}
        <div
          className={`mt-12 flex flex-wrap items-center justify-center gap-2 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {roadmapData.map((yearData) => (
            <button
              key={yearData.year}
              type="button"
              onClick={() => setSelectedYear(yearData.year)}
              className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all ${
                selectedYear === yearData.year
                  ? "bg-primary text-primary-foreground"
                  : "glass-card text-muted-foreground hover:text-foreground hover:border-primary/20"
              }`}
            >
              {yearData.year}
            </button>
          ))}
        </div>

        {/* Timeline */}
        {activeYearData && (
          <div
            className={`mt-16 transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border lg:left-1/2 lg:-translate-x-1/2" />

              <div className="flex flex-col gap-12">
                {activeYearData.quarters.map((quarter, qIndex) => {
                  const isLeft = qIndex % 2 === 0
                  return (
                    <div
                      key={quarter.quarter}
                      className="relative flex items-start gap-8 lg:gap-0"
                    >
                      {/* Dot on timeline */}
                      <div className="absolute left-4 -translate-x-1/2 lg:left-1/2">
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                            quarter.status === "done"
                              ? "border-primary bg-primary/10"
                              : quarter.status === "in-progress"
                                ? "border-accent bg-accent/10"
                                : "border-border bg-secondary/50"
                          }`}
                        >
                          <StatusIcon status={quarter.status} />
                        </div>
                      </div>

                      {/* Content card - Desktop alternating sides */}
                      <div
                        className={`ml-12 lg:ml-0 lg:w-1/2 ${
                          isLeft
                            ? "lg:pr-16 lg:text-right"
                            : "lg:ml-auto lg:pl-16"
                        }`}
                      >
                        <div className="glass-card rounded-xl p-5 transition-all hover:border-primary/10">
                          <div
                            className={`mb-3 flex items-center gap-2 ${
                              isLeft ? "lg:justify-end" : ""
                            }`}
                          >
                            <span
                              className={`inline-flex rounded-md px-2.5 py-1 text-xs font-bold ${
                                quarter.status === "done"
                                  ? "bg-primary/10 text-primary"
                                  : quarter.status === "in-progress"
                                    ? "bg-accent/10 text-accent"
                                    : "bg-secondary text-muted-foreground"
                              }`}
                            >
                              {quarter.quarter}
                            </span>
                            <span className="text-xs text-muted-foreground capitalize">
                              {quarter.status === "in-progress"
                                ? "In Progress"
                                : quarter.status}
                            </span>
                          </div>
                          <ul
                            className={`flex flex-col gap-2 ${
                              isLeft ? "lg:items-end" : ""
                            }`}
                          >
                            {quarter.items.map((item) => (
                              <li
                                key={item}
                                className="flex items-center gap-2 text-sm text-foreground"
                              >
                                <div
                                  className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                                    quarter.status === "done"
                                      ? "bg-primary"
                                      : quarter.status === "in-progress"
                                        ? "bg-accent"
                                        : "bg-muted-foreground/40"
                                  }`}
                                />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
