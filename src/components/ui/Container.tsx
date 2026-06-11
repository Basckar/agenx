import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
export default function Container({ children }: Props) {
  return <div className="mx-auto w-full max-w-md px-4">{children}</div>;
}
