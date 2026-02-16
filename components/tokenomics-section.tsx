"use client"

import { useEffect, useRef, useState } from "react"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

const tokenData = [
  { name: "Ecosystem & Rewards", value: 30, color: "#22c55e" },
  { name: "Team & Advisors", value: 15, color: "#14b8a6" },
  { name: "Public Sale", value: 25, color: "#0ea5e9" },
  { name: "Treasury", value: 15, color: "#f59e0b" },
  { name: "Liquidity", value: 10, color: "#8b5cf6" },
  { name: "Private Sale", value: 5, color: "#ec4899" },
]

function CustomTooltip({
  active,
  payload,
}: {
  active?: boolean
  payload?: Array<{ name: string; value: number; payload: { color: string } }>
}) {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-border bg-card px-4 py-3 shadow-xl">
        <p className="text-sm font-semibold text-foreground">
          {payload[0].name}
        </p>
        <p className="text-sm text-muted-foreground">
          {payload[0].value}%
        </p>
      </div>
    )
  }
  return null
}

export function TokenomicsSection() {
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
    <section
      id="tokenomics"
      ref={ref}
      className="relative py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Tokenomics
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">
              Token <span className="text-gradient">Distribution</span>
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Total supply of 1,777,777,777 GGEZ1 tokens distributed across key
            ecosystem pillars.
          </p>
        </div>

        <div
          className={`mt-16 flex flex-col items-center gap-12 lg:flex-row lg:gap-16 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Pie Chart */}
          <div className="flex-1">
            <div className="glass-card glow-green rounded-2xl p-8">
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={tokenData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={150}
                    paddingAngle={3}
                    dataKey="value"
                    stroke="none"
                  >
                    {tokenData.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Legend */}
          <div className="flex-1">
            <div className="flex flex-col gap-4">
              {tokenData.map((item) => (
                <div
                  key={item.name}
                  className="glass-card flex items-center gap-4 rounded-xl px-5 py-4 transition-all hover:border-primary/10"
                >
                  <div
                    className="h-4 w-4 shrink-0 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">
                      {item.name}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-heading text-lg font-bold text-foreground">
                      {item.value}%
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {(
                        (item.value / 100) *
                        1777777777
                      ).toLocaleString()}{" "}
                      tokens
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
