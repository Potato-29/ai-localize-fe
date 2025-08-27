"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Play, CheckCircle } from "lucide-react"

const codeExamples = {
  basic: `import { AILocalizationSDK } from 'ai-localize-sdk';

const sdk = new AILocalizationSDK('your-api-key');

// Translate text
const result = await sdk.localize('Hello world', {
  sourceLocale: 'en',
  targetLocale: 'es'
});

console.log(result.text); // "Hola mundo"`,

  object: `// Translate objects
const objResult = await sdk.localize({
  title: 'Welcome to our app',
  buttons: ['Save', 'Cancel', 'Delete'],
  messages: {
    success: 'Operation completed successfully',
    error: 'Something went wrong'
  }
}, { 
  sourceLocale: 'en', 
  targetLocale: 'fr' 
});

console.log(objResult);
// {
//   title: 'Bienvenue dans notre application',
//   buttons: ['Enregistrer', 'Annuler', 'Supprimer'],
//   messages: {
//     success: 'Opération terminée avec succès',
//     error: 'Quelque chose a mal tourné'
//   }
// }`,

  batch: `// Batch processing for efficiency
const batchResult = await sdk.localizeBatch([
  { text: 'Hello', target: 'es' },
  { text: 'Goodbye', target: 'fr' },
  { text: 'Thank you', target: 'de' }
], { sourceLocale: 'en' });

console.log(batchResult);
// [
//   { text: 'Hola', locale: 'es' },
//   { text: 'Au revoir', locale: 'fr' },
//   { text: 'Danke', locale: 'de' }
// ]`,
}

export function DemoSection() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyCode = (code: string, type: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(type)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Play className="w-3 h-3 mr-1" />
            Live Demo
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">See it in action</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Interactive code playground showing how easy it is to integrate AI-powered localization into your
            applications.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-4 text-sm font-mono text-muted-foreground">ai-localization-demo.js</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="basic" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="basic">Basic Translation</TabsTrigger>
                  <TabsTrigger value="object">Object Translation</TabsTrigger>
                  <TabsTrigger value="batch">Batch Processing</TabsTrigger>
                </TabsList>

                {Object.entries(codeExamples).map(([key, code]) => (
                  <TabsContent key={key} value={key} className="mt-6">
                    <div className="relative">
                      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                        <code className="font-mono">{code}</code>
                      </pre>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2"
                        onClick={() => copyCode(code, key)}
                      >
                        {copiedCode === key ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>

              {/* <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live Output</span>
                </div>
                <div className="font-mono text-sm text-muted-foreground">
                  ✓ Translation completed in 245ms
                  <br />✓ Cache hit rate: 87.3%
                  <br />✓ API quota: 2,847 / 5,000 used
                </div>
              </div> */}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
