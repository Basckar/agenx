import { AgentChart, DashboardComment, DashboardStat } from "@/types/dashboard";

export const chartData: AgentChart[] = [
  {
    id: 1,
    name: "ایجنت فروش",
    views: 180,
    rating: 92,
  },

  {
    id: 2,
    name: "ایجنت پشتیبانی",
    views: 240,
    rating: 85,
  },

  {
    id: 3,
    name: "ایجنت برنامه نویسی",
    views: 320,
    rating: 98,
  },

  {
    id: 4,
    name: "ایجنت محتوا",
    views: 140,
    rating: 78,
  },
];

export const statsData: DashboardStat[] = [
  {
    id: 1,
    title: "تعداد توکن ها",
    value: 150,
    icon: "wallet",
  },
  {
    id: 2,
    title: "تعداد ایجنت ها",
    value: 150,
    icon: "layers",
  },
  {
    id: 3,
    title: "تعداد کاربران",
    value: 150,
    icon: "users",
  },
  {
    id: 4,
    title: "به‌زودی",
    value: 0,
    icon: "plus",
    variant: "coming-soon",
  },
];

export const commentsData: DashboardComment[] = [
  {
    id: 1,

    agentName: "ایجنت برنامه نویسی",

    userName: "نازنین سعیدی",

    rating: 5,

    createdAt: "1403/01/01",

    text: ` پاسخ ها بسیار دقیق بودند و کیفیت پردازش اطلاعات واقعا عالی بود. فقط سرعت پاسخگویی میتواند بهتر شود. پاسخ ها بسیار دقیق بودند و کیفیت پردازش اطلاعات واقعا عالی بود. فقط سرعت پاسخگویی میتواند بهتر شود. پاسخ ها بسیار دقیق بودند و کیفیت پردازش اطلاعات واقعا عالی بود. فقط سرعت پاسخگویی میتواند بهتر شود. `,
  },

  {
    id: 2,

    agentName: "ایجنت فروش",

    userName: "محمد رضایی",

    rating: 4,

    createdAt: "1403/01/03",

    text: ` عملکرد خوب بود اما نیاز به دیتای تخصصی بیشتری دارد. `,
  },

  {
    id: 3,

    agentName: "ایجنت محتوا",

    userName: "زهرا احمدی",

    rating: 5,

    createdAt: "1403/01/05",

    text: ` کیفیت تولید محتوا بسیار خوب بود و لحن متن ها طبیعی بود. `,
  },

  {
    id: 4,

    agentName: "ایجنت پشتیبانی",

    userName: "علی محمدی",

    rating: 3,

    createdAt: "1403/01/08",

    text: ` در بعضی سوالات پاسخ کامل نبود اما در مجموع تجربه خوبی داشتم.  `,
  },
];
