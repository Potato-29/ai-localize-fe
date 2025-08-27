import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Clock } from "lucide-react"

const recentTranslations = [
  {
    id: 1,
    text: "Welcome to our platform",
    sourceLanguage: "en",
    targetLanguage: "es",
    result: "Bienvenido a nuestra plataforma",
    timestamp: "2 minutes ago",
    status: "completed",
  },
  {
    id: 2,
    text: "User profile settings",
    sourceLanguage: "en",
    targetLanguage: "fr",
    result: "Paramètres du profil utilisateur",
    timestamp: "5 minutes ago",
    status: "completed",
  },
  {
    id: 3,
    text: "Error: Invalid credentials",
    sourceLanguage: "en",
    targetLanguage: "de",
    result: "Fehler: Ungültige Anmeldedaten",
    timestamp: "12 minutes ago",
    status: "completed",
  },
  {
    id: 4,
    text: "Product catalog",
    sourceLanguage: "en",
    targetLanguage: "ja",
    result: "製品カタログ",
    timestamp: "18 minutes ago",
    status: "completed",
  },
  {
    id: 5,
    text: "Payment successful",
    sourceLanguage: "en",
    targetLanguage: "zh",
    result: "付款成功",
    timestamp: "25 minutes ago",
    status: "completed",
  },
]

const languageNames: Record<string, string> = {
  en: "English",
  es: "Spanish",
  fr: "French",
  de: "German",
  ja: "Japanese",
  zh: "Chinese",
}

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentTranslations.map((translation) => (
            <div key={translation.id} className="flex items-start space-x-3 p-3 rounded-lg border bg-card/50">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Globe className="h-4 w-4 text-primary" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="outline" className="text-xs">
                    {languageNames[translation.sourceLanguage]} → {languageNames[translation.targetLanguage]}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{translation.timestamp}</span>
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-medium truncate">{translation.text}</p>
                  <p className="text-sm text-muted-foreground truncate">{translation.result}</p>
                </div>
              </div>

              <Badge variant={translation.status === "completed" ? "secondary" : "destructive"} className="text-xs">
                {translation.status}
              </Badge>
            </div>
          ))}
        </div>

        <div className="mt-4 text-center">
          <button className="text-sm text-primary hover:underline">View all activity</button>
        </div>
      </CardContent>
    </Card>
  )
}
