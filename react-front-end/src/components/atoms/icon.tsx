import { ReactNode } from "react";

export default function Icon({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  return <span className={`flex items-center ${className}`}>{children}</span>;
}
