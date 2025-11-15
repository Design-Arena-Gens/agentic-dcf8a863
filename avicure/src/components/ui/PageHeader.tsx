import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  className?: string;
};

export function PageHeader({
  title,
  subtitle,
  action,
  className,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
        className,
      )}
    >
      <div>
        <h1 className="text-[32px] font-bold leading-tight text-[#1A1A1A]">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-1 max-w-2xl text-[15px] text-[#6B6B6B]">{subtitle}</p>
        ) : null}
      </div>
      {action}
    </div>
  );
}

