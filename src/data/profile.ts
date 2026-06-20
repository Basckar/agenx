import { ProfileUser, RecentChat, EditProfileData } from "@/types/profile";
export const profileUser: ProfileUser = {
  name: "Mahserin",
  plan: "اشتراک رایگان",
};
export const recentChats: RecentChat[] = [
  { id: 1, title: "لورم ایپسوم متن ساختگی شماره یک", createdAt: "امروز" },
  { id: 2, title: "لورم ایپسوم متن ساختگی شماره دو", createdAt: "دیروز" },
  { id: 3, title: "لورم ایپسوم متن ساختگی شماره سه", createdAt: "هفته قبل" },
];
export const editProfileData: EditProfileData = {
  name: "Mahserin",
  avatar: null,
  bio: ` لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. `,
  interests: [
    { id: 1, title: "خرید" },
    { id: 2, title: "موسیقی" },
    { id: 3, title: "هنر" },
  ],
};
