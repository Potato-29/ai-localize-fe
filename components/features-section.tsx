import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Zap, Globe, Package, Clock, Shield, Code, Database, Layers } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Smart Translation",
    description:
      "Translate strings, objects, and complex JSON structures with context-aware AI that understands your content.",
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Intelligent caching, batch processing, and concurrent requests ensure lightning-fast response times.",
  },
  {
    icon: Globe,
    title: "60+ Languages",
    description:
      "Support for major world languages including English, Spanish, French, German, Japanese, Chinese, Arabic, and more.",
  },
  {
    icon: Package,
    title: "Developer-Friendly",
    description: "Simple JavaScript/TypeScript SDK with comprehensive error handling and full type definitions.",
  },
  {
    icon: Database,
    title: "Intelligent Caching",
    description: "Smart caching system reduces API calls and improves performance with automatic cache invalidation.",
  },
  {
    icon: Layers,
    title: "Batch Processing",
    description: "Process multiple translations simultaneously with optimized batch operations for better efficiency.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Everything you need for localization</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed for modern development workflows and enterprise-scale applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border border-2 bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary/20 border border-primary/30 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
