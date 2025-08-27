import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Activity, Clock, Zap, Globe } from "lucide-react"

const usageStats = [
  {
    title: "Monthly Translations",
    value: "2,847",
    total: "5,000",
    percentage: 57,
    icon: Globe,
    trend: { value: "+12%", isPositive: true },
    description: "translations used this month",
  },
  {
    title: "API Calls",
    value: "1,234",
    total: null,
    percentage: null,
    icon: Activity,
    trend: { value: "+8%", isPositive: true },
    description: "requests this month",
  },
  {
    title: "Cache Hit Rate",
    value: "87.3%",
    total: null,
    percentage: 87.3,
    icon: Zap,
    trend: { value: "+2.1%", isPositive: true },
    description: "cache efficiency",
  },
  {
    title: "Avg Response Time",
    value: "245ms",
    total: null,
    percentage: null,
    icon: Clock,
    trend: { value: "-15ms", isPositive: true },
    description: "average response time",
  },
]

export function UsageOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {usageStats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {stat.value}
              {stat.total && <span className="text-sm font-normal text-muted-foreground"> / {stat.total}</span>}
            </div>
            <p className="text-xs text-muted-foreground mb-3">{stat.description}</p>

            {stat.percentage !== null && (
              <div className="space-y-2">
                <Progress value={stat.percentage} className="h-2" />
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{stat.percentage}% used</span>
                  <Badge variant={stat.trend.isPositive ? "secondary" : "destructive"} className="text-xs">
                    {stat.trend.isPositive ? (
                      <TrendingUp className="w-3 h-3 mr-1" />
                    ) : (
                      <TrendingDown className="w-3 h-3 mr-1" />
                    )}
                    {stat.trend.value}
                  </Badge>
                </div>
              </div>
            )}

            {stat.percentage === null && (
              <Badge variant={stat.trend.isPositive ? "secondary" : "destructive"} className="text-xs">
                {stat.trend.isPositive ? (
                  <TrendingUp className="w-3 h-3 mr-1" />
                ) : (
                  <TrendingDown className="w-3 h-3 mr-1" />
                )}
                {stat.trend.value}
              </Badge>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
