import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export default function SphereFadeWrapper({ children }: Props) {
  return (
    <div className="relative">
      <div
        data-sphere-scroll
        className=" hide-scrollbar max-h-[72vh] overflow-y-auto pr-1 "
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}>
        {children}
      </div>
    </div>
  );
}
