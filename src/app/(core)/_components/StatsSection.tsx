import Image from "next/image";
import StatCard from "./StatCard";
import { stats } from "@/data/stats";
export default function StatsSection() {
  return (
    <section className="relative py-20">
      <div className="relative mx-auto max-w-5xl">
        <div className="flex justify-center items-start lg:gap-48 gap-4">
          <div className="w-[220px]">
            <StatCard item={stats[0]} />
          </div>
          <div className="w-[220px]">
            <StatCard item={stats[1]} />
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <div className="w-[220px]">
            <StatCard item={stats[2]} />
          </div>
        </div>
        <Image
          src="icones/stats-line-left.svg"
          alt=""
          width={95}
          height={95}
          className="lg:rotate-7 absolute lg:left-[410]  lg:top-[38px] lg:flex hidden   pointer-events-none "
        />
        <Image
          src="icones/stats-line-right.svg"
          alt=""
          width={80}
          height={80}
          className="lg:-rotate-25 absolute lg:right-[335px]   lg:top-[112px] lg:flex hidden   pointer-events-none "
        />
      </div>
    </section>
  );
}
