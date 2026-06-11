"use client";
import { useEffect, useRef } from "react";
import AssistantCard from "./AssistantCard";
import { Assistant } from "@/types/assistant";
interface Props {
  assistants: Assistant[];
  onSelect: (assistant: Assistant) => void;
}
export default function AssistantGrid({ assistants, onSelect }: Props) {
  const gridRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = document.querySelector(
      "[data-sphere-scroll]",
    ) as HTMLElement | null;
    if (!container) return;
    let started = false;
    const updateCards = () => {
      if (!gridRef.current) return;
      const cards = gridRef.current.querySelectorAll("[data-card]");
      const containerRect = container.getBoundingClientRect();
      const centerY = containerRect.top + containerRect.height / 2;
      cards.forEach((card) => {
        const element = card as HTMLElement;
        if (!started) {
          element.style.transform = "scale(1) rotateX(0deg)";
          element.style.opacity = "1";
          return;
        }
        const rect = element.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = (cardCenter - centerY) / (containerRect.height / 2);
        const abs = Math.abs(distance);
        const rotateX = distance * -30;

        const opacity = 1 - abs * 2;

        element.style.transform = `
          perspective(1200px)
          rotateX(${rotateX}deg) 
          
        `;
      });
    };
    const handleScroll = () => {
      if (!started) {
        started = true;
      }
      requestAnimationFrame(updateCards);
    };
    container.addEventListener("scroll", handleScroll, { passive: true });
    updateCards();
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [assistants]);
  return (
    <div ref={gridRef} className=" grid grid-cols-2 gap-4 pb-24 pt-6 ">
      {assistants.map((assistant, index) => (
        <div
          key={assistant.id}
          className="tab-card-in"
          style={{
            animationDelay: `${index * 70}ms`,
          }}>
          <div
            data-card
            onClick={() => onSelect(assistant)}
            className=" cursor-pointer transition-all duration-300 will-change-transform ">
            <AssistantCard assistant={assistant} />
          </div>
        </div>
      ))}
    </div>
  );
}
