import { showcaseItems } from "@/data/showcase";
export default function ShowcaseSection() {
  return (
    <section className="h-auto  pt-12 pb-[35rem]">
      {/* title */}
      <div className="mb-20 text-center">
        <h2 className="mb-5 text-4xl font-black text-white">چرا Agent ؟</h2>
        <p className="mx-auto max-w-xl text-white/60">
          چون Agent تخصصی با دانش دقیق شما پاسخ میده
        </p>
      </div>
      <div className="  max-w-6xl">
        <div className="relative flex items-center justify-center gap-6 flex-wrap lg:flex-nowrap ">
          <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-xl absolute top-0 left-0 h-40 w-70  ">
            <img
              src={showcaseItems[0].image}
              alt={showcaseItems[0].title}
              className="h-full w-full"
            />
          </div>
          <div className="overflow-hidden rounded-[34px] border border-white/10 bg-white/  backdrop-blur-xl lg:-translate-y-16 absolute top-45 right-0 h-40 w-70  ">
            <img
              src={showcaseItems[1].image}
              alt={showcaseItems[1].title}
              className="h-full w-full"
            />
          </div>
          <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-xl absolute top-94 left-0  h-40 w-70  ">
            <img
              src={showcaseItems[2].image}
              alt={showcaseItems[2].title}
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
