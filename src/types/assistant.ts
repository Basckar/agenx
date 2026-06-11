import { LucideIcon } from "lucide-react";
export interface Assistant {
  id: number;
  title: string;
  description: string;
  rating: number;
  category: string;
  users: number;
  iqLevel: string;
  icon: LucideIcon;
}
