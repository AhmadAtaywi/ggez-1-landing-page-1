"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Linkedin, Twitter } from "lucide-react"

const teamMembers = [
  {
    name: "Marcus Chen",
    role: "CEO & Co-Founder",
    image: "/images/marcus.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sarah Mitchell",
    role: "CTO & Co-Founder",
    image: "/images/sarah.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "James Rodriguez",
    role: "Head of Blockchain",
    image: "/images/james.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Aisha Patel",
    role: "Head of Sustainability",
    image: "/images/aisha.jpg",
    linkedin: "#",
    twitter: "#",
  },
]

export function TeamSection() {
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
    <section id="team" ref={ref} className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Our Team
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">
              Meet the <span className="text-gradient">Builders</span>
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            A passionate team of blockchain innovators, sustainability experts,
            and technologists working to make ReFi accessible to everyone.
          </p>
        </div>

        <div
          className={`mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="glass-card group rounded-2xl p-6 text-center transition-all hover:border-primary/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border-2 border-border transition-all group-hover:border-primary/30">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {member.role}
              </p>
              <div className="mt-4 flex items-center justify-center gap-3">
                <a
                  href={member.linkedin}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin size={14} />
                </a>
                <a
                  href={member.twitter}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
                  aria-label={`${member.name} Twitter`}
                >
                  <Twitter size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
