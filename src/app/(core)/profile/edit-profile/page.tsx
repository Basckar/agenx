import { editProfileData } from "@/data/profile";
import EditProfileForm from "./_components/EditProfileForm";
export default function EditProfilePage() {
  return (
    <div className="bg-[#0a0a0a] ">
      <main className="mx-auto max-w-md px-5 py-10 bg-[#0a0a0a] ">
        <EditProfileForm data={editProfileData} />
      </main>
    </div>
  );
}
