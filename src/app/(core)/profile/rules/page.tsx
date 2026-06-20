import { Metadata } from "next";

export const metadata: Metadata = {
  title: "قوانین و مقررات | agenx  ",
  description: "قوانین و مقررات استفاده از خدمات و سایت ما را مطالعه کنید.",
  openGraph: {
    title: "قوانین و مقررات",
    description: "قوانین و مقررات استفاده از خدمات و سایت ما.",
    url: " ",
    siteName: "agenx",
    images: [
      {
        url: " ",
        width: 1200,
        height: 630,
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "قوانین و مقررات",
    description: "قوانین و مقررات استفاده از خدمات و سایت ما.",
    images: [" "],
  },
};

export default function RulesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-6 flex items-center justify-center">
      <div className="max-w-3xl w-full rounded-[32px] border-y-3 border-white/20 bg-white/[0.04] backdrop-blur-3xl p-8 md:p-10">
        <h1 className="text-4xl md:text-5xl font-black mb-6">
          قوانین و مقررات
        </h1>

        <div
          className="text- black/50 text-base md:text-lg leading-relaxed overflow-y-auto max-h-[50vh]"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 90%, transparent)",
          }}>
          <div className="space-y-4">
            <p className="mt-6">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است. لورم ایپسوم متن ساختگی با تولید
              سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.
              چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
              است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
              با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
              مجله در ستون و سطرآنچنان که لازم است. لورم ایپسوم متن ساختگی با
              تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
              است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
              لازم است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
              چاپ، و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
              روزنامه و مجله در ستون و سطرآنچنان که لازم است. لورم ایپسوم متن
              ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
              گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
              که لازم است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
              چاپ، و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
              روزنامه و مجله در ستون و سطرآنچنان که لازم است.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
