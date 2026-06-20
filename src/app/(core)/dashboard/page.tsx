import { chartData, statsData, commentsData } from "@/data/dashboard";
import DashboardChart from "./_components/DashboardChart";
import DashboardStats from "./_components/DashboardStats";
import DashboardComments from "./_components/DashboardComments";
export default function DashboardPage() {
  return (
    <main className=" bg-[#0a0a0a]">
      <div className="mx-auto min-h-screen max-w-md px-5 py-10 ">
        <h1 className="mb-10   text-5xl font-black">آمار ایجنت های شما</h1>
        <DashboardChart data={chartData} />
        <div className="mt-10">
          <DashboardStats stats={statsData} />
        </div>
        <h2 className="mt-16 mb-8   text-4xl font-black">کامنت های شما</h2>
        <DashboardComments comments={commentsData} />
      </div>
    </main>
  );
}
