import { StatItem } from "@/types/stat";
interface Props {
  item: StatItem;
}
export default function StatCard({ item }: Props) {
  const Icon = item.icon;
  return (
    <div className=" rounded-[24px] border h-24 border-white/10 bg-white/10 px-5 py-4 backdrop-blur-xl ">
      <div className="flex items-center gap-4">
        {/* آیکن سمت چپ */}
        <div className=" flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 ">
          <Icon size={22} className="text-primary" />
        </div>
        {/* متن */}
        <div>
          <h3 className="text-2xl font-black text-white">{item.value}</h3>
          <p className="mt-1 text-xs text-white/60"> {item.title} </p>
        </div>
      </div>
    </div>
  );
}
