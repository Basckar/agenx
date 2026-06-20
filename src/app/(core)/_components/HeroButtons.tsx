import Link from "next/link";
import { Icon } from "@/components/icons/Icon";
export default function HeroButtons() {
  interface Props {
    onOpenAuth: () => void;
  }
  return (
    <div className="mt-12 flex gap-4">
      <Link href="/assistants" className=" btn-glass !text-xs !px-4">
        شروع رایگان
        <Icon name="btn" className="h-5 w-5 pt-1" />
      </Link>
      <Link href="assistant" className=" btn-glass !text-xs !px-4">
        مشاهده Agent ها
        <Icon name="btn" className="h-5 w-5 pt-1 " />
      </Link>
    </div>
  );
}
