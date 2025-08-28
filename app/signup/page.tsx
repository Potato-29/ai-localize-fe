import type { Metadata } from "next"
import Link from "next/link"
import { SignupForm } from "@/components/auth/signup-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Get Started Free - AI Localization SDK",
  description: "Create your free AI Localization SDK account and start translating today",
}

const freeFeatures = [
  "5,000 translations per month",
  "60+ supported languages",
  "Basic caching & performance",
  "Community support",
  "Full TypeScript support",
]

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4 py-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">AI</span>
            </div>
            <span className="font-bold text-xl">LocalizeSDK</span>
          </Link>
         
          <h1 className="text-2xl font-bold">Get started for free</h1>
          <p className="text-muted-foreground mt-2">Create your account and start translating in minutes</p>
        </div>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Create account</CardTitle>
            <CardDescription className="text-center">
              Join thousands of developers using AI-powered localization
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <SignupForm />
          </CardContent>
        </Card>

        <div className="mt-6 p-4 bg-card rounded-lg border">
          <h3 className="font-semibold mb-3 text-sm">What's included in your free account:</h3>
          <ul className="space-y-2">
            {freeFeatures.map((feature, index) => (
              <li key={index} className="flex items-center text-sm">
                <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mt-6 text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:underline font-medium">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}
