"use client"

import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react"

const footerLinks = {
  ecosystem: [
    { label: "ReFi Coin", href: "#coins" },
    { label: "Governance Coin", href: "#coins" },
    { label: "Tokenomics", href: "#tokenomics" },
    { label: "Whitepaper", href: "#" },
  ],
  community: [
    { label: "Discord", href: "#" },
    { label: "Telegram", href: "#" },
    { label: "Twitter / X", href: "#" },
    { label: "Medium", href: "#" },
  ],
  resources: [
    { label: "Documentation", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press Kit", href: "#" },
  ],
}

export function FooterSection() {
  return (
    <footer id="contact" className="relative border-t border-border">
      {/* Contact CTA */}
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="glass-card glow-green mx-auto max-w-3xl rounded-2xl p-8 text-center sm:p-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Get in Touch
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-foreground sm:text-4xl">
            <span className="text-balance">
              Ready to join the{" "}
              <span className="text-gradient">ReFi revolution?</span>
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            Get in touch with our team to learn more about GGEZ1 and how you can
            participate in the future of sustainable blockchain.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:hello@ggez1.io"
              className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              <Mail size={16} />
              Contact Us
            </a>
            <a
              href="#"
              className="flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/30"
            >
              Join Community
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {/* Brand */}
            <div className="col-span-2 sm:col-span-1">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                  <span className="font-heading text-sm font-bold text-primary-foreground">
                    G1
                  </span>
                </div>
                <span className="font-heading text-xl font-bold text-foreground">
                  GGEZ1
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Building the future of regenerative finance on Web3.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail size={14} className="text-primary" />
                  hello@ggez1.io
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={14} className="text-primary" />
                  Zurich, Switzerland
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone size={14} className="text-primary" />
                  +41 00 000 0000
                </div>
              </div>
            </div>

            {/* Ecosystem */}
            <div>
              <h4 className="text-sm font-semibold text-foreground">
                Ecosystem
              </h4>
              <div className="mt-4 flex flex-col gap-3">
                {footerLinks.ecosystem.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Community */}
            <div>
              <h4 className="text-sm font-semibold text-foreground">
                Community
              </h4>
              <div className="mt-4 flex flex-col gap-3">
                {footerLinks.community.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-sm font-semibold text-foreground">
                Resources
              </h4>
              <div className="mt-4 flex flex-col gap-3">
                {footerLinks.resources.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            2026 GGEZ1. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
