import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Globe, Code } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6 bg-secondary/20 text-secondary border-secondary/30">
            <Zap className="w-3 h-3 mr-1" />
            AI-Powered Translation
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">
            AI-Powered Localization
            <span className="text-primary block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Made Simple
            </span>
          </h1>

          <p className="text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
            Translate strings, objects, and complex JSON structures instantly using AI. Built for developers who need
            reliable, fast, and intelligent localization.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/signup">
              <Button
                size="lg"
                className="text-lg px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/docs">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-transparent border-secondary/30 text-primary hover:bg-secondary/10 hover:border-secondary/50 transition-all duration-300 hover:text-black dark:border-primary/30 dark:hover:bg-primary/30 dark:hover:text-white"
              >
                <Code className="mr-2 h-5 w-5" />
                View Documentation
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 group">
              <Globe className="h-4 w-4 text-primary group-hover:text-secondary transition-colors" />
              <span>60+ Languages</span>
            </div>
            <div className="flex items-center gap-2 group">
              <Zap className="h-4 w-4 text-primary group-hover:text-secondary transition-colors" />
              <span>Real-time Processing</span>
            </div>
            <div className="flex items-center gap-2 group">
              <Code className="h-4 w-4 text-primary group-hover:text-secondary transition-colors" />
              <span>Developer-Friendly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
