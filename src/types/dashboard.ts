export interface AgentChart {
  id: number;
  name: string;
  views: number;
  rating: number;
}

export interface DashboardStat {
  id: number;
  title: string;
  value: number;
  icon: string;
  variant?: "default" | "coming-soon";
}
export interface DashboardComment {
  id: number;
  agentName: string;
  userName: string;
  text: string;
  createdAt: string;
  rating: number;
}
