import {
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  ChevronRight,
  Clock,
} from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", revenue: 40000 },
  { month: "February", revenue: 65000 },
  { month: "March", revenue: 45000 },
  { month: "April", revenue: 80000 },
  { month: "May", revenue: 55000 },
  { month: "June", revenue: 90000 },
  { month: "July", revenue: 70000 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--primary-color)",
  },
};

export default function Dashboard() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-2">Dashboard</h2>
      <p className="text-gray-400 mb-8">
        Welcome back, Alex. Here's what's happening today.
      </p>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Total Traffic */}
        <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 relative overflow-hidden group">
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
              <Activity className="w-6 h-6" />
            </div>
            <span className="bg-green-500/10 text-green-500 text-xs font-bold px-2 py-1 rounded-full flex items-center">
              <TrendingUp className="w-3 h-3 mr-1" /> +12%
            </span>
          </div>
          <h3 className="text-4xl font-bold text-white mb-1 relative z-10">
            124.5k
          </h3>
          <p className="text-gray-400 text-sm relative z-10">Total Traffic</p>
          <div className="absolute bottom-0 left-0 right-0 h-16 opacity-20 group-hover:opacity-30 transition-opacity">
            <ChartContainer
              config={{ traffic: { color: "#3b82f6" } }}
              className="h-full w-full"
            >
              <AreaChart
                data={[
                  { val: 40 },
                  { val: 30 },
                  { val: 45 },
                  { val: 60 },
                  { val: 55 },
                  { val: 70 },
                  { val: 65 },
                ]}
                margin={{ top: 5, right: 0, bottom: 0, left: 0 }}
              >
                <Area
                  type="natural"
                  dataKey="val"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.4}
                  strokeWidth={2}
                />
              </AreaChart>
            </ChartContainer>
          </div>
        </div>

        {/* Monthly Revenue */}
        <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 relative overflow-hidden group">
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div className="p-3 bg-[var(--primary-color)]/10 rounded-xl text-[var(--primary-color)]">
              <DollarSign className="w-6 h-6" />
            </div>
            <span className="bg-green-500/10 text-green-500 text-xs font-bold px-2 py-1 rounded-full flex items-center">
              <TrendingUp className="w-3 h-3 mr-1" /> +8%
            </span>
          </div>
          <h3 className="text-4xl font-bold text-white mb-1">$45,200</h3>
          <p className="text-gray-400 text-sm relative z-10">Monthly Revenue</p>
          <div className="absolute bottom-0 left-0 right-0 h-16 opacity-20 group-hover:opacity-30 transition-opacity">
            <ChartContainer
              config={{ revenue: { color: "var(--primary-color)" } }}
              className="h-full w-full"
            >
              <AreaChart
                data={[
                  { val: 20 },
                  { val: 45 },
                  { val: 35 },
                  { val: 60 },
                  { val: 75 },
                  { val: 55 },
                  { val: 80 },
                ]}
                margin={{ top: 5, right: 0, bottom: 0, left: 0 }}
              >
                <Area
                  type="natural"
                  dataKey="val"
                  stroke="var(--primary-color)"
                  fill="var(--primary-color)"
                  fillOpacity={0.4}
                  strokeWidth={2}
                />
              </AreaChart>
            </ChartContainer>
          </div>
        </div>

        {/* New Members */}
        <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 relative overflow-hidden group">
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div className="p-3 bg-purple-500/10 rounded-xl text-purple-500">
              <Users className="w-6 h-6" />
            </div>
            <span className="bg-green-500/10 text-green-500 text-xs font-bold px-2 py-1 rounded-full flex items-center">
              <TrendingUp className="w-3 h-3 mr-1" /> +24%
            </span>
          </div>
          <h3 className="text-4xl font-bold text-white mb-1">1,240</h3>
          <p className="text-gray-400 text-sm relative z-10">New Members</p>
          <div className="absolute bottom-0 left-0 right-0 h-16 opacity-20 group-hover:opacity-30 transition-opacity">
            <ChartContainer
              config={{ members: { color: "#a855f7" } }}
              className="h-full w-full"
            >
              <AreaChart
                data={[
                  { val: 10 },
                  { val: 25 },
                  { val: 20 },
                  { val: 35 },
                  { val: 45 },
                  { val: 60 },
                  { val: 70 },
                ]}
                margin={{ top: 5, right: 0, bottom: 0, left: 0 }}
              >
                <Area
                  type="natural"
                  dataKey="val"
                  stroke="#a855f7"
                  fill="#a855f7"
                  fillOpacity={0.4}
                  strokeWidth={2}
                />
              </AreaChart>
            </ChartContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Revenue Growth Chart */}
        <div className="lg:col-span-2 bg-gray-800 p-6 rounded-2xl border border-gray-700 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-bold text-white text-lg">Revenue Growth</h3>
              <p className="text-gray-500 text-sm">
                Performance metrics from Jan - Jul 2024
              </p>
            </div>
            <select className="bg-gray-900 border border-gray-700 text-gray-400 text-sm rounded-lg px-3 py-1 outline-none focus:border-[var(--primary-color)] transition-colors">
              <option>Last 6 Months</option>
              <option>Last Year</option>
            </select>
          </div>

          <div className="h-[300px] w-full">
            <ChartContainer config={chartConfig} className="h-full w-full">
              <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <defs>
                  <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--primary-color)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--primary-color)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  vertical={false}
                  stroke="rgba(255,255,255,0.1)"
                />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                  stroke="#9ca3af"
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="line" />}
                />
                <Area
                  dataKey="revenue"
                  type="natural"
                  fill="url(#fillRevenue)"
                  fillOpacity={0.4}
                  stroke="var(--primary-color)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ChartContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-white text-lg">Recent Activity</h3>
            <button className="text-[var(--primary-color)] text-xs font-bold hover:underline">
              View All
            </button>
          </div>
          <div className="space-y-6">
            {[
              {
                text: "John Doe subscribed to Elite Athlete Pro",
                time: "2 minutes ago",
                icon: Users,
                color: "text-blue-500 bg-blue-500/10",
              },
              {
                text: "Trainer Mike uploaded Leg Day V2",
                time: "45 minutes ago",
                icon: Activity,
                color:
                  "text-[var(--primary-color)] bg-[var(--primary-color)]/10",
              },
              {
                text: "System maintenance Completed",
                time: "2 hours ago",
                icon: Clock,
                color: "text-orange-500 bg-orange-500/10",
              },
              {
                text: "Sarah Chen joined Powerlifting 101",
                time: "3 hours ago",
                icon: Users,
                color: "text-purple-500 bg-purple-500/10",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${item.color}`}
                >
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium leading-tight mb-1">
                    {item.text}
                  </p>
                  <p className="text-gray-500 text-xs">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-3 rounded-xl border border-gray-700 text-gray-300 hover:bg-gray-700 transition-colors flex items-center justify-center text-sm font-bold">
            View All Activity <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-[var(--primary-color)] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between text-black">
        <div>
          <h3 className="text-xl font-bold mb-1">Upcoming Launch</h3>
          <p className="font-medium opacity-80">
            "Summer Shred" Challenge starts in 4 days.
          </p>
        </div>
        <button className="mt-4 md:mt-0 bg-black text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform">
          Manage Campaign
        </button>
      </div>
    </div>
  );
}
