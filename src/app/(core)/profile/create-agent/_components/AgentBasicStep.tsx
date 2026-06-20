"use client";

import { ChangeEvent, useState } from "react";
import { X, Upload } from "lucide-react";

interface Props {
  formData: any;
  setFormData: any;
  onNext: () => void;
}

export default function AgentBasicStep({
  formData,
  setFormData,
  onNext,
}: Props) {
  const [categories, setCategories] = useState([
    "برنامه نویسی",
    "طبیعت",
    "آموزشی",
    "مالی",
  ]);

  const [newCategory, setNewCategory] = useState("");
  const [showCustomCategory, setShowCustomCategory] = useState(false);

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);

    setFormData((prev: any) => ({
      ...prev,
      image: url,
    }));
  };

  const handleCreativity = (value: number) => {
    setFormData((prev: any) => ({
      ...prev,
      creativity: value,
    }));
  };

  return (
    <div className="max-h-[70vh] space-y-8 overflow-y-auto px-4">
      <div>
        <h3 className="mb-3 text-3xl font-bold">نام ایجنت</h3>

        <input
          placeholder="مشاور مالی بورس"
          value={formData.name}
          onChange={(e) =>
            setFormData((prev: any) => ({
              ...prev,
              name: e.target.value,
            }))
          }
          className="w-full rounded-full border-3 border-white/10 bg-white/10 px-5 py-4 outline-none"
        />
      </div>

      <div>
        <h3 className="mb-3 text-3xl font-bold">آیکن ایجنت</h3>

        <label className="flex h-56 cursor-pointer items-center justify-center rounded-[32px] border-3 border-white/10 bg-white/10">
          {formData.image ? (
            <img
              src={formData.image}
              className="h-full w-full rounded-[32px] object-cover"
            />
          ) : (
            <div className="text-center border border-white/10 rounded-4xl bg-white/10 w-38 h-38 flex items-center flex-col justify-center">
              <Upload size={60} />
              <p className="mt-4 text-xl font-bold"> آپلود فایل </p>
            </div>
          )}

          <input hidden type="file" accept="image/" onChange={handleImage} />
        </label>
      </div>

      <div className="space-y-4">
        <label className="block text-3xl font-black ">دسته بندی</label>

        <select
          value={formData.category}
          onChange={(e) => {
            if (e.target.value === "custom") {
              setShowCustomCategory(true);
              return;
            }

            setFormData((prev: any) => ({
              ...prev,
              category: e.target.value,
            }));
          }}
          className="w-full rounded-full border-3 border-white/10 bg-white/10 px-5 py-4 outline-none ">
          <option value="" className="bg-white text-black/75">
            انتخاب دسته بندی
          </option>

          {categories.map((item) => (
            <option key={item} value={item} className="bg-white text-black/75">
              {item}
            </option>
          ))}

          <option value="custom" className="bg-white text-black">
            + افزودن دسته جدید
          </option>
        </select>

        {showCustomCategory && (
          <div className="flex gap-3">
            <input
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="نام دسته بندی"
              className="flex-1 rounded-full border-3 border-white/10 bg-white/5 px-5 py-4 outline-none"
            />

            <button
              type="button"
              onClick={() => {
                if (!newCategory.trim()) return;

                setCategories((prev) => [...prev, newCategory]);

                setFormData((prev: any) => ({
                  ...prev,
                  category: newCategory,
                }));

                setNewCategory("");
                setShowCustomCategory(false);
              }}
              className="rounded-full bg-primary px-5">
              افزودن
            </button>
          </div>
        )}
      </div>

      <div>
        <h3 className="mb-3 text-3xl font-bold">توضیح ایجنت</h3>

        <div className="relative">
          <textarea
            placeholder="دستیار آموزش دیده ی شما  برای کدنویسی مسلط به زبان هاب Js ,python, php"
            rows={4}
            value={formData.description}
            onChange={(e) =>
              setFormData((prev: any) => ({
                ...prev,

                description: e.target.value,
              }))
            }
            className="w-full rounded-[24px] border-3 border-white/10 bg-white/10 p-5 outline-none"
          />

          {formData.description && (
            <button
              type="button"
              onClick={() =>
                setFormData((prev: any) => ({
                  ...prev,
                  description: "",
                }))
              }
              className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border-3 border-white/50">
              <X />
            </button>
          )}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-3xl font-bold">پرامپت اختصاصی</h3>

        <div className="relative">
          <textarea
            placeholder="دستیار آموزش دیده ی شما  برای کدنویسی مسلط به زبان هاب Js ,python, php"
            rows={6}
            value={formData.prompt}
            onChange={(e) =>
              setFormData((prev: any) => ({
                ...prev,
                prompt: e.target.value,
              }))
            }
            className="w-full rounded-[24px] border-3 border-white/10 bg-white/10 p-5 outline-none"
          />

          {formData.prompt && (
            <button
              type="button"
              onClick={() =>
                setFormData((prev: any) => ({
                  ...prev,
                  prompt: "",
                }))
              }
              className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border-3 border-white/50">
              <X />
            </button>
          )}
        </div>
      </div>

      <div className="space-y-6">
        <label className="block text-3xl font-black">درصد خلاقیت</label>

        <input
          type="range"
          min={1}
          max={10}
          value={formData.creativity}
          onChange={(e) => handleCreativity(Number(e.target.value))}
          className="h-2 w-full cursor-pointer accent-primary"
        />

        <div className="flex justify-between text-sm text- black/50">
          <span>1</span>
          <span className="font-bold text-primary">{formData.creativity}</span>
          <span>10</span>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-3xl font-bold">نحوه پاسخگویی</h3>

        <select
          value={formData.responseMode}
          onChange={(e) =>
            setFormData((prev: any) => ({
              ...prev,
              responseMode: e.target.value,
            }))
          }
          className="w-full rounded-full border-3 border-white/10 bg-white/10 px-5 py-4">
          <option value="a" className="bg-white text-black/75">
            A
          </option>
          <option value="b" className="bg-white text-black/75">
            B
          </option>
          <option value="hybrid" className="bg-white text-black/75">
            Hybrid
          </option>
        </select>
      </div>

      <div className="flex justify-center">
        <button
          onClick={onNext}
          className=" px-6 rounded-full bg-primary py-3 text-2xl font-bold border boder-white/2 cursor-pointer">
          مرحله بعد
        </button>
      </div>
    </div>
  );
}
