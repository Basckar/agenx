import * as LucideIcons from "lucide-react";
import { customIcons } from "./custom'";

type CustomIconName = keyof typeof customIcons;
type LucideIconName = keyof typeof LucideIcons;

type IconProps = {
  name: CustomIconName | LucideIconName;
  size?: number;
  className?: string;
};

export function Icon({ name, size = 24, className = "" }: IconProps) {
  const LucideIcon = (LucideIcons as any)[name];

  if (LucideIcon) {
    return <LucideIcon size={size} className={className} />;
  }

  const CustomIcon = customIcons[name as CustomIconName];

  return (
    <span className={className} style={{ width: size, height: size }}>
      {CustomIcon}
    </span>
  );
}
