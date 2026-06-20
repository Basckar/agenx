import { Layers3, Wallet, Users, Plus } from "lucide-react";
import { DashboardStat } from "@/types/dashboard";

interface Props {
  stat: DashboardStat;
}

export default function StatCard({ stat }: Props) {
  const icons = {
    layers: Layers3,
    wallet: Wallet,
    users: Users,
    plus: Plus,
  };

  const Icon = icons[stat.icon as keyof typeof icons] || Layers3;

  if (stat.variant === "coming-soon") {
    return (
      <div className="rounded-[32px] border-y-3 border-white/20 bg-white/[0.04] backdrop-blur-3xl p-5 flex flex-col items-center justify-center gap-2">
        <Icon className="h-16 w-16 bg-primary   rounded-full flex justify-center items-center " />
        <span className="text-sm text- black/50">{stat.title}</span>
      </div>
    );
  }

  return (
    <div className="rounded-[32px] border-y-3 border-white/20 bg-white/[0.04] backdrop-blur-3xl p-5">
      <div className="mb-4 bg-primary h-10 w-10 rounded-full flex justify-center items-center">
        <Icon className="text-white " />
      </div>
      <div className="text-4xl font-black">+{stat.value}</div>
      <div className="mt-2 text-md text- black/50">{stat.title}</div>
    </div>
  );
}
