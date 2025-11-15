import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "card rounded-[20px] border border-white/40 p-6",
        className,
      )}
    >
      {children}
    </div>
  );
}

