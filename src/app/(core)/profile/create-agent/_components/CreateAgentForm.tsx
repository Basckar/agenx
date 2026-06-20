"use client";

import { useState } from "react";

import AgentBasicStep from "./AgentBasicStep";
import AgentSourcesStep from "./AgentSourcesStep";

import { AgentFormData } from "@/types/agent";

interface Props {
  initialData?: AgentFormData;
  isEdit?: boolean;
}

export default function CreateAgentForm({
  initialData,
  isEdit = false,
}: Props) {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState<AgentFormData>(
    initialData || {
      name: "",
      image: null,
      category: "",
      description: "",
      prompt: "",
      creativity: 5,
      responseMode: "hybrid",
      links: [""],
      files: [],
    },
  );

  const handleSubmit = () => {
    console.log(formData);

    alert(isEdit ? "تغییرات ذخیره شد" : "ایجنت ساخته شد");
  };

  return (
    <>
      <h1 className="mb-8 text-center text-5xl font-black">
        {step === 1 ? (isEdit ? "ویرایش ایجنت" : "ساخت ایجنت") : "آپلود فایل"}
      </h1>

      <div className=" rounded-[40px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl ">
        {step === 1 ? (
          <AgentBasicStep
            formData={formData}
            setFormData={setFormData}
            onNext={() => setStep(2)}
          />
        ) : (
          <AgentSourcesStep
            formData={formData}
            setFormData={setFormData}
            onBack={() => setStep(1)}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </>
  );
}
