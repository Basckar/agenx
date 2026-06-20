import AgentCard from "./AgentCard";
interface Props {
  agents: any[];
  onDelete: (id: number) => void;
}
export default function AgentList({ agents, onDelete }: Props) {
  return (
    <div className=" h-[65vh] overflow-y-auto rounded-[40px] border border-white/10  bg-white/5 backdrop-blur-xl ">
      {agents.map((agent) => (
        <AgentCard key={agent.id} agent={agent} onDelete={onDelete} />
      ))}
    </div>
  );
}
