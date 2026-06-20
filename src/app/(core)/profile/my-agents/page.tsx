"use client";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { assistants } from "@/data/assistants";
import AgentsHeader from "./_components/AgentsHeader";
import AgentFilters from "./_components/AgentFilters";
import AgentList from "./_components/AgentList";
export default function MyAgentsPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [latest, setLatest] = useState(false);
  const [mostViewed, setMostViewed] = useState(false);
  const [agents, setAgents] = useState(assistants);
  const categories = assistants.reduce(
    (acc, agent) => {
      const existing = acc.find((item) => item.name === agent.category);
      if (existing) {
        existing.count++;
      } else {
        acc.push({ name: agent.category, count: 1 });
      }
      return acc;
    },
    [] as { name: string; count: number }[],
  );
  const filteredAgents = useMemo(() => {
    let data = [...agents];
    if (search) {
      data = data.filter((item) => item.title.includes(search));
    }
    if (category) {
      data = data.filter((item) => item.category === category);
    }
    if (latest) {
      data.sort((a, b) => b.id - a.id);
    }
    if (mostViewed) {
      data.sort((a, b) => b.users - a.users);
    }
    return data;
  }, [agents, search, category, latest, mostViewed]);
  const removeAgent = (id: number) => {
    setAgents((prev) => prev.filter((item) => item.id !== id));
  };
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <div className=" bg-[#0a0a0a]">
      <main className="mx-auto max-w-md px-5 py-10">
        <AgentsHeader
          onAdd={() => router.push("/profile/create-agent")}
          onFilter={() => setOpenFilter((prev) => !prev)}
        />
        <div className="relative">
          <AgentFilters
            open={openFilter}
            onClose={() => setOpenFilter(false)}
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
            latest={latest}
            setLatest={setLatest}
            mostViewed={mostViewed}
            setMostViewed={setMostViewed}
            categories={categories}
          />
        </div>
        <AgentList agents={filteredAgents} onDelete={removeAgent} />
      </main>
    </div>
  );
}
