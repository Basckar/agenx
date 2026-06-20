export interface AgentFormData {
  name: string;

  image: string | null;

  category: string;

  description: string;

  prompt: string;

  creativity: number;

  responseMode: "a" | "b" | "hybrid";

  links: string[];

  files: File[];
}
