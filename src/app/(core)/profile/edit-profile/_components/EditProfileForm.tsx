"use client";
import { useState } from "react";
import { Upload, XCircle } from "lucide-react";
import { EditProfileData } from "@/types/profile";
import InterestsSection from "./InterestsSection";
interface Props {
  data: EditProfileData;
}

export default function EditProfileForm({ data }: Props) {
  const [name, setName] = useState(data.name);
  const [bio, setBio] = useState(data.bio);
  const [preview, setPreview] = useState<string | null>(null);
  const [interests, setInterests] = useState(data.interests);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
  };
  const removeInterest = (id: number) => {
    setInterests((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div className=" max-h-[85vh] space-y-10 overflow-y-auto rounded-[40px] border-y-2 border-white/50 bg-white/5 p-6 ">
      <div>
        <h2 className="mb-4 text-3xl  "> نام شما </h2>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className=" w-full rounded-full border border-white/10 bg-white/10 px-5 py-4 outline-none "
        />
      </div>
      <div>
        <h2 className="mb-4 text-3xl  "> آپلود عکس </h2>
        <label
          htmlFor="avatar"
          className=" flex min-h-[250px] cursor-pointer items-center justify-center rounded-4xl border border-white/10 bg-white/10 ">
          {preview ? (
            <img
              src={preview}
              alt="avatar"
              className=" h-full w-full rounded-4xl object-cover "
            />
          ) : (
            <div className="text-center border border-white/10 rounded-4xl bg-white/10 w-38 h-38 flex items-center flex-col justify-center">
              <Upload size={60} />
              <p className="mt-4 text-xl font-bold"> آپلود فایل </p>
            </div>
          )}
        </label>
        <input
          id="avatar"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
      <div>
        <h2 className="mb-4 text-3xl  "> درباره شما </h2>
        <div className="relative">
          <button
            type="button"
            onClick={() => setBio("")}
            className=" absolute left-4 top-4 text- black/50 ">
            <XCircle />
          </button>
          <textarea
            rows={6}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className=" w-full resize-none rounded-[30px] border border-white/10 bg-white/10 p-5 outline-none "
          />
        </div>
      </div>
      <InterestsSection interests={interests} onRemove={removeInterest} />
      <button
        type="button"
        className=" w-full rounded-full bg-primary py-4  text-lg  font-bold text-white transition hover:opacity-90 ">
        ذخیره تغییرات
      </button>
    </div>
  );
}
