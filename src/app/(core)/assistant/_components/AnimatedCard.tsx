"use client";
import { ReactNode } from "react";
import useReveal from "@/hooks/useReveal";
interface Props {
  children: ReactNode;
  delay?: number;
}
export default function AnimatedCard({ children, delay = 0 }: Props) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={visible ? "card-in" : "opacity-0"}
      style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
