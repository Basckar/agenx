"use client";

import { useState } from "react";
import { Icon } from "@/components/icons/Icon";

const FULL_TEXT = `
بسیاری از ابزارهای هوش مصنوعی فقط به شما اجازه می‌دهند رفتار و لحن یک چت‌بات را تغییر دهید.

اما در AgenX شما می‌توانید دانش واقعی، فایل‌ها، اسناد، API ها و اطلاعات اختصاصی خود را به Agent اضافه کنید.

این Agent می‌تواند جستجوی هوشمند انجام دهد، فایل پردازش کند، به API متصل شود و حتی درآمدزایی داشته باشد.

این ساختار باعث می‌شود Agent شما فقط یک پرامپت طولانی نباشد و به یک دستیار واقعی تبدیل شود.

شما می‌توانید Agent های تخصصی بسازید، آن‌ها را منتشر کنید و با کاربران واقعی تعامل داشته باشید.

همه چیز به شکلی طراحی شده که بدون نیاز به دانش فنی پیچیده بتوانید یک دستیار قدرتمند ایجاد کنید.
`;

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="relative overflow-hidden pt-24">
      {/* purple glow */}
      <img
        src="/images/purple-glow.webp"
        alt=""
        className=" pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 opacity-70"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-5">
        <div className="flex justify-center ">
          <h2 className=" mb-4 text-center  text-[96%] font-bold text-white relative ">
            دستیار تخصصی ، نه فقط یک پرامپت طولانی
          </h2>
          <Icon name="point" className="h-50 w-50  pl-1" />
        </div>

        {/* text */}
        <div
          className={`  relative mx-auto  max-w-3xl text-xs text-center text-white/65 leading-8 transition-all  duration-500  ${expanded ? "" : "max-h-[120px] overflow-hidden"}  `}
          style={
            expanded
              ? undefined
              : {
                  maskImage:
                    "linear-gradient(to bottom, black 10%, transparent 100%)",

                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 10%, transparent 100%)",
                }
          }>
          <p>{FULL_TEXT}</p>
        </div>

        {/* button */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className=" btn-glass   !py-3  !text-sm ">
            {expanded ? "  کمتر" : "  بیشتر"}
          </button>
        </div>
      </div>
    </section>
  );
}
