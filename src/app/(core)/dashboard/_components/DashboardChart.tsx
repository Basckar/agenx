"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { AgentChart } from "@/types/dashboard";

interface Props {
  data: AgentChart[];
}

export default function DashboardChart({ data }: Props) {
  const chartWidth = Math.max(data.length * 120, 400);

  return (
    <section className="overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
      <div className="hide-scrollbar overflow-x-auto">
        <div style={{ width: chartWidth, height: 320 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barCategoryGap="30%">
              <CartesianGrid
                vertical={true}
                horizontal={true}
                stroke="rgba(255,255,255,0.06)"
                strokeDasharray="3 6"
              />

              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#a1a1aa", fontSize: 12 }}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#71717a" }}
              />

              <Tooltip
                cursor={{ fill: "rgba(255,255,255,0.03)" }}
                contentStyle={{
                  background: "#18181b",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                }}
              />

              <Bar dataKey="views" fill="#8b5cf6" radius={[12, 12, 0, 0]} />
              <Bar dataKey="rating" fill="#ec4899" radius={[12, 12, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-6">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-primary" />
          <span className="text-sm text- black/50">تعداد بازدید</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-pink-500" />
          <span className="text-sm text- black/50">امتیاز</span>
        </div>
      </div>
    </section>
  );
}
