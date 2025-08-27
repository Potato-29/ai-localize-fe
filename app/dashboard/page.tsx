import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { UsageOverview } from "@/components/dashboard/usage-overview"
import { UsageCharts } from "@/components/dashboard/usage-charts"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { ApiKeyManagement } from "@/components/dashboard/api-key-management"

export const metadata: Metadata = {
  title: "Dashboard - AI Localization SDK",
  description: "Monitor your AI localization usage, manage API keys, and view analytics",
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DashboardHeader />

        <div className="grid gap-6 mb-8">
          <UsageOverview />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <UsageCharts />
          <RecentActivity />
        </div>

        <div className="grid gap-6">
          <ApiKeyManagement />
        </div>
      </main>
    </div>
  )
}
