"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const dailyUsageData = [
  { day: "Mon", translations: 420, apiCalls: 180 },
  { day: "Tue", translations: 380, apiCalls: 160 },
  { day: "Wed", translations: 520, apiCalls: 220 },
  { day: "Thu", translations: 460, apiCalls: 190 },
  { day: "Fri", translations: 680, apiCalls: 280 },
  { day: "Sat", translations: 320, apiCalls: 140 },
  { day: "Sun", translations: 280, apiCalls: 120 },
]

const languageData = [
  { name: "English", value: 35, color: "hsl(var(--chart-1))" },
  { name: "Spanish", value: 25, color: "hsl(var(--chart-2))" },
  { name: "French", value: 15, color: "hsl(var(--chart-3))" },
  { name: "German", value: 12, color: "hsl(var(--chart-4))" },
  { name: "Japanese", value: 8, color: "hsl(var(--chart-5))" },
  { name: "Others", value: 5, color: "hsl(var(--muted-foreground))" },
]

const responseTimeData = [
  { time: "00:00", responseTime: 280 },
  { time: "04:00", responseTime: 220 },
  { time: "08:00", responseTime: 320 },
  { time: "12:00", responseTime: 380 },
  { time: "16:00", responseTime: 340 },
  { time: "20:00", responseTime: 290 },
]

export function UsageCharts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Usage Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="usage" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="usage">Daily Usage</TabsTrigger>
            <TabsTrigger value="languages">Languages</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>

          <TabsContent value="usage" className="space-y-4">
            <ChartContainer
              config={{
                translations: {
                  label: "Translations",
                  color: "hsl(var(--chart-1))",
                },
                apiCalls: {
                  label: "API Calls",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dailyUsageData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="translations" fill="var(--color-translations)" />
                  <Bar dataKey="apiCalls" fill="var(--color-apiCalls)" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </TabsContent>

          <TabsContent value="languages" className="space-y-4">
            <ChartContainer
              config={{
                value: {
                  label: "Usage %",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={languageData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {languageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {languageData.map((lang, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: lang.color }} />
                  <span className="text-muted-foreground">
                    {lang.name}: {lang.value}%
                  </span>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-4">
            <ChartContainer
              config={{
                responseTime: {
                  label: "Response Time (ms)",
                  color: "hsl(var(--chart-3))",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={responseTimeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="responseTime" stroke="var(--color-responseTime)" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
