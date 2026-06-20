import CreateAgentForm from "../../create-agent/_components/CreateAgentForm";

import { assistants } from "@/data/assistants";

export default async function EditAgentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const agent = assistants.find((item) => item.id === Number(id));

  if (!agent) {
    return <div className="p-10 text-center">ایجنت پیدا نشد</div>;
  }

  const initialData = {
    name: agent.title,
    image: null,
    category: agent.category,
    description: agent.description,
    prompt: "",
    creativity: 5,
    responseMode: "hybrid" as "hybrid",
    links: [""],
    files: [],
  };

  return (
    <div className=" bg-[#0a0a0a]">
      <main className="mx-auto max-w-md px-5 py-10 bg-[#0a0a0a]">
        <CreateAgentForm isEdit initialData={initialData} />
      </main>
    </div>
  );
}
