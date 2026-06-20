import { DashboardStat } from "@/types/dashboard";
import StatCard from "./StatCard";

interface Props {
  stats: DashboardStat[];
}

export default function DashboardStats({ stats }: Props) {
  return (
    <div className="grid  grid-cols-2 gap-4">
      {stats.map((stat) => (
        <StatCard key={stat.id} stat={stat} />
      ))}
    </div>
  );
}
