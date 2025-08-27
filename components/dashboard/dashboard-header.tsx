import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Crown } from "lucide-react"
import Link from "next/link"

export function DashboardHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Monitor your AI localization usage and performance</p>
      </div>

      <div className="flex items-center gap-4 mt-4 sm:mt-0">
        <Badge variant="secondary" className="flex items-center gap-1">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          Free Plan
        </Badge>
        <Link href="/pricing">
          <Button variant="outline" size="sm">
            <Crown className="w-4 h-4 mr-2" />
            Upgrade to Pro
          </Button>
        </Link>
      </div>
    </div>
  )
}
