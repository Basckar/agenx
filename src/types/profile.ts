export interface Interest {
  id: number;
  title: string;
}
export interface EditProfileData {
  name: string;
  bio: string;
  avatar: string | null;
  interests: Interest[];
}
export interface ProfileUser {
  name: string;
  plan: string;
}
export interface RecentChat {
  id: number;
  title: string;
  createdAt: string;
}
