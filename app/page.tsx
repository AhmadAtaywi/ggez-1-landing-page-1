import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { MarketSection } from "@/components/market-section"
import { PlatformSection } from "@/components/platform-section"
import { CoinsSection } from "@/components/coins-section"
import { TokenomicsSection } from "@/components/tokenomics-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { TeamSection } from "@/components/team-section"
import { FooterSection } from "@/components/footer-section"

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>
      <MarketSection />
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      </div>
      <PlatformSection />
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>
      <CoinsSection />
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      </div>
      <TokenomicsSection />
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>
      <RoadmapSection />
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      </div>
      <TeamSection />
      <FooterSection />
    </main>
  )
}
