"use client";

import DynamicLinks from "./DynamicLinks";
import { Upload } from "lucide-react";

interface Props {
  formData: any;
  setFormData: any;
  onBack: () => void;
  onSubmit: () => void;
}

export default function AgentSourcesStep({
  formData,
  setFormData,
  onBack,
  onSubmit,
}: Props) {
  return (
    <div className="max-h-[70vh] space-y-10 overflow-y-auto px-4">
      <div>
        <h3 className="mb-4 text-4xl font-bold">لینک سایت</h3>

        <DynamicLinks
          links={formData.links}
          setLinks={(links) =>
            setFormData((prev: any) => ({
              ...prev,
              links,
            }))
          }
        />
      </div>

      <div>
        <h3 className="mb-4 text-4xl font-bold">آپلود فایل</h3>

        <label className="flex h-64 cursor-pointer items-center justify-center rounded-[32px] border-3 border-white/10 bg-white/10 ">
          <div className="text-center border-3 border-white/10 rounded-4xl bg-white/10 w-38 h-38 flex items-center flex-col justify-center">
            <Upload size={60} />
            <p className="mt-4 text-xl font-bold"> آپلود فایل </p>
          </div>

          <input
            hidden
            type="file"
            accept=".pdf"
            multiple
            onChange={(e) =>
              setFormData((prev: any) => ({
                ...prev,
                files: Array.from(e.target.files || []),
              }))
            }
          />
        </label>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onBack}
          type="button"
          className=" cursor-pointer flex-1 rounded-full border-3 border-white/10 py-5 text-2xl font-bold ">
          بازگشت
        </button>

        <button
          onClick={onSubmit}
          type="button"
          className="border-3 cursor-pointer  border-white/10 flex-1 rounded-full bg-primary py-5 text-2xl font-bold  ">
          تایید
        </button>
      </div>
    </div>
  );
}
