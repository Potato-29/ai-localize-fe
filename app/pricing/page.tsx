import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { PricingHero } from "@/components/pricing/pricing-hero"
import { PricingTiers } from "@/components/pricing/pricing-tiers"
import { PricingFAQ } from "@/components/pricing/pricing-faq"
import { PricingCTA } from "@/components/pricing/pricing-cta"

export const metadata: Metadata = {
  title: "Pricing - AI Localization SDK",
  description: "Choose the perfect plan for your localization needs. Start free, scale as you grow.",
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <PricingHero />
        <PricingTiers />
        <PricingFAQ />
        <PricingCTA />
      </main>
    </div>
  )
}
