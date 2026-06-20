"use client";

import { Plus, Trash2 } from "lucide-react";

interface Props {
  links: string[];
  setLinks: (links: string[]) => void;
}

export default function DynamicLinks({ links, setLinks }: Props) {
  const addLink = () => {
    setLinks([...links, ""]);
  };

  const removeLink = (index: number) => {
    if (links.length === 1) return;

    setLinks(links.filter((_, i) => i !== index));
  };

  const updateLink = (index: number, value: string) => {
    const copy = [...links];

    copy[index] = value;

    setLinks(copy);
  };

  return (
    <div className="space-y-4">
      {links.map((link, index) => (
        <div key={index} className="flex items-center gap-3">
          <button
            type="button"
            onClick={addLink}
            className=" border-3 border-white/10 flex h-12 w-12 items-center justify-center  rounded-full  bg-primary ">
            <Plus />
          </button>

          <input
            value={link}
            onChange={(e) => updateLink(index, e.target.value)}
            placeholder="https://example.com"
            className=" flex-1 rounded-full border-3 border-white/10 bg-white/10 px-5 py-4 "
          />

          {links.length > 1 && (
            <button
              type="button"
              onClick={() => removeLink(index)}
              className=" border-3 border-white/10 flex h-12 w-12 items-center justify-center rounded-full  bg-states-error2 ">
              <Trash2 size={18} />
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
