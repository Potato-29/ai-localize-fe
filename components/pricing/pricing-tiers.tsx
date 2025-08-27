import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Crown, Zap, Building } from "lucide-react"
import Link from "next/link"

const pricingTiers = [
  {
    name: "Free",
    description: "Perfect for small projects and getting started",
    price: "$0",
    period: "forever",
    icon: Zap,
    popular: false,
    features: [
      "5,000 translations/month",
      "60+ supported languages",
      "Basic caching",
      "Community support",
      "TypeScript support",
      "REST API access",
      "Basic analytics",
    ],
    limitations: ["Rate limited to 10 requests/minute", "Standard response times", "Community support only"],
    cta: "Get Started Free",
    ctaVariant: "outline" as const,
    href: "/signup",
  },
  {
    name: "Pro",
    description: "For growing businesses and production applications",
    price: "$29",
    period: "per month",
    icon: Crown,
    popular: true,
    features: [
      "100,000 translations/month",
      "60+ supported languages",
      "Advanced caching & performance",
      "Priority support",
      "Custom batch sizes",
      "Analytics dashboard",
      "Webhook notifications",
      "Custom terminology",
      "99.9% uptime SLA",
    ],
    limitations: [],
    cta: "Start Free Trial",
    ctaVariant: "default" as const,
    href: "/signup?plan=pro",
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom requirements",
    price: "Custom",
    period: "pricing",
    icon: Building,
    popular: false,
    features: [
      "Unlimited translations",
      "Dedicated infrastructure",
      "Custom integrations",
      "SLA guarantees",
      "Premium support",
      "On-premise deployment",
      "Custom models",
      "Advanced security",
      "Dedicated account manager",
    ],
    limitations: [],
    cta: "Contact Sales",
    ctaVariant: "outline" as const,
    href: "/contact",
  },
]

export function PricingTiers() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative ${
                tier.popular
                  ? "border-primary shadow-lg scale-105 bg-card"
                  : "border-border hover:shadow-md transition-shadow"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <tier.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <CardDescription className="text-base">{tier.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.period && <span className="text-muted-foreground ml-2">/{tier.period}</span>}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <Link href={tier.href}>
                  <Button variant={tier.ctaVariant} className="w-full" size="lg">
                    {tier.cta}
                  </Button>
                </Link>

                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">What's included:</h4>
                  <ul className="space-y-2">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {tier.limitations.length > 0 && (
                  <div className="space-y-3 pt-4 border-t">
                    <h4 className="font-semibold text-sm text-muted-foreground">Limitations:</h4>
                    <ul className="space-y-2">
                      {tier.limitations.map((limitation, limitationIndex) => (
                        <li key={limitationIndex} className="flex items-start gap-3">
                          <div className="w-4 h-4 mt-0.5 flex-shrink-0">
                            <div className="w-1 h-1 bg-muted-foreground rounded-full mx-auto mt-1.5"></div>
                          </div>
                          <span className="text-sm text-muted-foreground">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All plans include our core AI translation features with no hidden fees
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span>✓ 60+ languages supported</span>
            <span>✓ TypeScript support</span>
            <span>✓ REST API access</span>
            <span>✓ Comprehensive documentation</span>
          </div>
        </div>
      </div>
    </section>
  )
}
