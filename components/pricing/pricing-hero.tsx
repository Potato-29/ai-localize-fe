import { Badge } from "@/components/ui/badge"
import { Zap } from "lucide-react"

export function PricingHero() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="secondary" className="mb-6">
            <Zap className="w-3 h-3 mr-1" />
            Simple, Transparent Pricing
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">
            Choose the perfect plan
            <span className="text-primary block">for your needs</span>
          </h1>

          <p className="text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
            Start free and scale as you grow. All plans include our core AI translation features with no hidden fees.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>14-day free trial</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
