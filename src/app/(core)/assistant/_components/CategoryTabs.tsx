"use client";

interface Props {
  categories: string[];
  active: string;
  onChange: (value: string) => void;
}

const tabStyles: Record<string, string> = {
  همه: `
    bg-white/5
    text-white
  `,

  تکنولوژی: `
    bg-primary/10
    text-primary
  `,

  طبیعت: `
    bg-emerald-500/10
    text-emerald-300
  `,

  درسی: `
    bg-sky-500/10
    text-sky-300
  `,

  سرگرمی: `
    bg-pink-500/10
    text-pink-300
  `,
};

const activeStyles: Record<string, string> = {
  همه: `
    bg-white
    text-black
    shadow-white/20
  `,

  تکنولوژی: `
    bg-primary
    text-white
    shadow-primary/40
  `,

  طبیعت: `
    bg-emerald-500
    text-white
    shadow-emerald-500/40
  `,

  درسی: `
    bg-sky-500
    text-white
    shadow-sky-500/40
  `,

  سرگرمی: `
    bg-pink-500
    text-white
    shadow-pink-500/40
  `,
};

export default function CategoryTabs({ categories, active, onChange }: Props) {
  return (
    <div className="relative">
      {/* left shadow */}
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-10 bg-gradient-to-r from-[#09090b] to-transparent" />

      {/* right shadow */}
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-10 bg-gradient-to-l from-[#09090b] to-transparent" />

      <div className="hide-scrollbar flex gap-3 overflow-x-auto px-1 py-3">
        {categories.map((category) => {
          const isActive = active === category;

          return (
            <button
              key={category}
              onClick={() => onChange(category)}
              className={` relative  whitespace-nowrap rounded-2xl px-5 py-2.5 text-sm  font-medium  backdrop-blur-xl transition-all duration-300 active:scale-[0.98]  ${tabStyles[category]} ${isActive ? ` -translate-y-1  shadow-2xl  ${activeStyles[category]}  ` : `  hover:-translate-y-0.5   hover:bg-white/10  `} `}>
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
