"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"

interface DropdownItem {
  label: string
  href: string
  external?: boolean
}

interface NavItem {
  label: string
  href?: string
  external?: boolean
  dropdown?: DropdownItem[]
}

const navItems: NavItem[] = [
  {
    label: "Project",
    dropdown: [
      { label: "Coins", href: "#coins" },
      { label: "Tokenomics", href: "#tokenomics" },
      { label: "Roadmap", href: "#roadmap" },
      { label: "Team", href: "#team" },
    ],
  },
  {
    label: "Platform",
    href: "https://www.google.com",
    external: true,
  },
  {
    label: "Docs",
    dropdown: [
      { label: "Developers", href: "https://www.google.com", external: true },
      {
        label: "ReFi Whitepaper",
        href: "https://www.google.com",
        external: true,
      },
      {
        label: "GameFi Whitepaper",
        href: "https://www.google.com",
        external: true,
      },
    ],
  },
]

function DropdownMenu({
  items,
  open,
}: {
  items: DropdownItem[]
  open: boolean
}) {
  return (
    <div
      className={`absolute left-1/2 top-full -translate-x-1/2 pt-2 transition-all duration-200 ${
        open
          ? "pointer-events-auto opacity-100 translate-y-0"
          : "pointer-events-none opacity-0 -translate-y-1"
      }`}
    >
      <div className="min-w-[200px] rounded-xl border border-border bg-card/95 backdrop-blur-xl p-2 shadow-2xl">
        {items.map((item) =>
          item.external ? (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </a>
          ) : (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </a>
          )
        )}
      </div>
    </div>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(
    null
  )
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpenDropdown(label)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 150)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#hero" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="font-heading text-sm font-bold text-primary-foreground">
              G1
            </span>
          </div>
          <span className="font-heading text-xl font-bold text-foreground">
            GGEZ1
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) =>
            item.dropdown ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <DropdownMenu
                  items={item.dropdown}
                  open={openDropdown === item.label}
                />
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            )
          )}
        </div>

        {/* Buy GGEZ1 button */}
        <div className="hidden md:block">
          <Link
            href="/signup"
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            Buy GGEZ1
          </Link>
        </div>

        <button
          type="button"
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.label}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    onClick={() =>
                      setMobileExpandedItem(
                        mobileExpandedItem === item.label ? null : item.label
                      )
                    }
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        mobileExpandedItem === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileExpandedItem === item.label && (
                    <div className="ml-4 flex flex-col gap-1 border-l border-border pl-3">
                      {item.dropdown.map((sub) =>
                        sub.external ? (
                          <a
                            key={sub.label}
                            href={sub.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                            onClick={() => setMobileOpen(false)}
                          >
                            {sub.label}
                          </a>
                        ) : (
                          <a
                            key={sub.label}
                            href={sub.href}
                            className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                            onClick={() => setMobileOpen(false)}
                          >
                            {sub.label}
                          </a>
                        )
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              )
            )}
            <Link
              href="/signup"
              className="mt-2 rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Buy GGEZ1
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
