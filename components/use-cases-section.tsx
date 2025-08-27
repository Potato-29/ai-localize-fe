import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Smartphone, ShoppingCart, FileText, Server, Layers } from "lucide-react"

const useCases = [
  {
    icon: Globe,
    title: "Web App Internationalization",
    description: "Seamlessly translate your React, Vue, or Angular applications with real-time localization support.",
    features: ["Component-level translations", "Dynamic content updates", "SEO-friendly URLs"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Localization",
    description: "Integrate with React Native, Flutter, or native iOS/Android apps for global reach.",
    features: ["Offline translation cache", "Platform-specific formatting", "App store optimization"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Product Translations",
    description:
      "Automatically translate product descriptions, reviews, and checkout flows for international customers.",
    features: ["Product catalog translation", "Currency localization", "Regional compliance"],
  },
  {
    icon: FileText,
    title: "Content Management Systems",
    description: "Power your CMS with AI translations for blogs, documentation, and marketing content.",
    features: ["Bulk content processing", "Editorial workflows", "Version control integration"],
  },
  {
    icon: Server,
    title: "API Response Localization",
    description: "Dynamically translate API responses based on user preferences and request headers.",
    features: ["Header-based detection", "Response caching", "Error message translation"],
  },
  {
    icon: Layers,
    title: "Multi-tenant Applications",
    description: "Support multiple organizations with different language requirements in a single platform.",
    features: ["Tenant-specific translations", "Custom terminology", "Brand localization"],
  },
]

export function UseCasesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Built for every use case</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From simple websites to complex enterprise applications, our SDK adapts to your localization needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <Card key={index} className="border-2 shadow-sm hover:shadow-md transition-all hover:border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
