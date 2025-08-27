import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { DemoSection } from "@/components/demo-section"
import { UseCasesSection } from "@/components/use-cases-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <DemoSection />
        <UseCasesSection />
      </main>
    </div>
  )
}
