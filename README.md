<div dir="rtl">

# 🤖 راهنمای پروژه دستیارهای هوشمند

خوش‌آمدید!

این پروژه با Next.js 15, TypeScript و TailwindCSS توسعه داده شده و هدف آن نمایش لیستی از دستیارهای هوشمند و تعامل با آن‌ها در قالب یک رابط چت مدرن و سبک است.

---

# 🚀تکنولوژی‌های استفاده شده

- Next.js 15 (App Router)
- TypeScript
- TailwindCSS
- Lucide React Icons

---

# 📂 ساختار پروژه

<div dir="ltr">

```
src/
├── app/
│ ├── layout.tsx
│ ├── page.tsx
│ └── globals.css
│
├── components/
│ ├── assistant/
│ │ ├── AssistantCard.tsx
│ │ ├── AssistantGrid.tsx
│ │ ├── AssistantModal.tsx
│ │ ├── AssistantReviewCard.tsx
│ │ ├── CategoryTabs.tsx
│ │ ├── SearchBar.tsx
│ │ └── SphereFadeWrapper.tsx
│ │
│ └── ui/
│ └── Container.tsx
│
├── data/
│ └── assistants.ts
│
├── types/
│ └── assistant.ts
│
└── lib/
```

</div>

# 📌 توضیح بخش‌ها

پوشه| توضیح
app| صفحات اصلی پروژه
components| کامپوننت‌های رابط کاربری
data| داده‌های موقت دستیارها
types| تایپ‌های TypeScript
lib| توابع و ابزارهای کمکی

---

# 🧩 کامپوننت‌های اصلی

**AssistantCard**

نمایش اطلاعات هر دستیار شامل:

- آیکن
- عنوان
- امتیاز
- توضیحات

---

**AssistantGrid**

مسئول:

- نمایش لیست کارت‌ها
- چینش دو ستونه
- مدیریت افکت Sphere هنگام اسکرول

---

**CategoryTabs**

نمایش دسته‌بندی‌ها:

- همه
- تکنولوژی
- طبیعت
- درسی
- سرگرمی

دارای اسکرول افقی و حالت Active.

---

**SearchBar**

فیلتر کردن دستیارها بر اساس عنوان.

---

**AssistantModal**

مودال گفت‌وگو با دستیار.

امکانات:

- نمایش اطلاعات دستیار
- نمایش پیام‌های کاربر
- نمایش پیام‌های سرور
- نمایش کارت امتیازدهی
- بستن با کلیک خارج مودال
- بستن با دکمه ضربدر
- بستن با Gesture اسکرول

---

**AssistantReviewCard**

نمایش:

- تعداد کاربران
- سطح هوش
- امتیاز
- ثبت نظر

---

**SphereFadeWrapper**

مسئول ایجاد:

- Fade بالا
- Fade پایین
- اسکرول لیست
- افکت چرخش کارت‌ها

---

# 🎨 افکت‌های رابط کاربری

**Sphere Scroll Effect**

در هنگام اسکرول:

- کارت‌های نزدیک مرکز طبیعی نمایش داده می‌شوند.
- کارت‌های بالا و پایین:
  - کوچک‌تر می‌شوند.
  - کمی می‌چرخند.
  - شفاف‌تر می‌شوند.

هدف ایجاد حس حرکت کارت‌ها روی سطح یک کره است.

---

**Modal Animation**

باز شدن مودال:

- Fade In
- Slide Up

بسته شدن مودال:

- Fade Out
- Slide Down

---

**Tab Animation**

در هنگام تغییر تب:

- کارت‌ها به صورت Stagger نمایش داده می‌شوند.
- هر کارت با تأخیر کوتاه ظاهر می‌شود.

---

# 📱 طراحی Responsive

پروژه برای:

- Mobile
- Tablet
- Desktop

طراحی شده و تمامی کامپوننت‌ها واکنش‌گرا هستند.

---

# 📏 قوانین توسعه

نام‌گذاری فایل‌ها

تمام فایل‌ها:

PascalCase.tsx

**مثال:**

AssistantCard.tsx
AssistantModal.tsx
CategoryTabs.tsx

---

Types

تمام تایپ‌ها در پوشه:

src/types

قرار می‌گیرند.

**مثال:**

export interface Assistant {
id: number;
title: string;
description: string;
rating: number;
}

---

Data

تا قبل از اتصال API:

src/data/assistants.ts

منبع داده پروژه است.

---

# 🔮 برنامه توسعه آینده

- اتصال به API
- ذخیره تاریخچه گفتگو
- استریم پاسخ‌ها
- احراز هویت کاربران
- دسته‌بندی پویا
- جستجوی سمت سرور
- امتیازدهی واقعی کاربران
- ایجاد لینک برای استفاده شخصی

---

# ▶️ اجرای پروژه

**نصب پکیج‌ها:**

npm install

**اجرای پروژه:**

npm run dev

**Build:**

npm run build

**Start:**

npm run start

---

# 👨‍💻 نکات مهم

- از **TypeScript** استفاده شده است.
- تمامی استایل‌ها با **TailwindCSS** پیاده‌سازی شده‌اند.
- انیمیشن‌ها سبک طراحی شده‌اند تا روی دستگاه‌های **ضعیف** نیز عملکرد مناسبی داشته باشند.
- از کتابخانه‌های سنگین انیمیشن استفاده **نشده** است.

</div>
