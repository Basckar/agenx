"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { assistants } from "@/data/assistants";
import AgentSlide from "./AgentSlide";
export default function FeaturedAgentsSection() {
  const topAssistants = [...assistants]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 10);
  return (
    <section className="py-20">
      <div className="mx-auto  mb-12 text-center">
        <h2 className="mb-3 text-2xl font-black underline">پرطرفدارترین‌ها</h2>
        <p className="text-white/60">
          پربازدید ترین Agent های این هفته بر اساس امتیاز کاربران Agent
        </p>
      </div>
      <Swiper
        modules={[Pagination]}
        dir="rtl"
        loop
        centeredSlides
        slidesPerView={3}
        spaceBetween={36}
        pagination={{
          clickable: true,
        }}
        className="featured-swiper  ">
        {topAssistants.map((assistant) => (
          <SwiperSlide key={assistant.id}>
            <AgentSlide assistant={assistant} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
