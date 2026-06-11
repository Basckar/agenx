"use client";

import { useMemo, useState } from "react";

import Container from "@/components/ui/Container";

import SearchBar from "@/app/(core)/assistant/_components/SearchBar";

import CategoryTabs from "@/app/(core)/assistant/_components/CategoryTabs";

import AssistantGrid from "@/app/(core)/assistant/_components/AssistantGrid";

import SphereFadeWrapper from "@/app/(core)/assistant/_components/SphereFadeWrapper";

import AssistantModal from "@/app/(core)/assistant/_components/AssistantModal";

import { assistants } from "@/data/assistants";

import { Assistant } from "@/types/assistant";

export default function HomePage() {
  const [search, setSearch] = useState("");

  const [activeTab, setActiveTab] = useState("همه");

  const [selectedAssistant, setSelectedAssistant] = useState<Assistant | null>(
    null,
  );

  const categories = useMemo(() => {
    const unique = [...new Set(assistants.map((a) => a.category))];

    return ["همه", ...unique];
  }, []);

  const filteredAssistants = useMemo(() => {
    let data = assistants;

    if (activeTab !== "همه") {
      data = data.filter((a) => a.category === activeTab);
    }

    if (search) {
      data = data.filter((a) => a.title.includes(search));
    }

    return data;
  }, [activeTab, search]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#0a0a0a] py-8 text-white">
      <Container>
        <div className="mb-6 flex justify-between">
          <h1 className="mb-4 text-4xl font-black">دستیارها</h1>

          <SearchBar value={search} onChange={setSearch} />
        </div>

        <div className="mb-4">
          <CategoryTabs
            categories={categories}
            active={activeTab}
            onChange={setActiveTab}
          />
        </div>

        <SphereFadeWrapper>
          <AssistantGrid
            assistants={filteredAssistants}
            onSelect={setSelectedAssistant}
          />
        </SphereFadeWrapper>

        {selectedAssistant && (
          <AssistantModal
            assistant={selectedAssistant}
            onClose={() => setSelectedAssistant(null)}
          />
        )}
      </Container>
    </main>
  );
}
