import type { ReactNode } from "react";
import Link from "next/link";
import { BellAlertIcon, HeartIcon } from "@heroicons/react/24/solid";
import { BottomNav } from "@/components/navigation/BottomNav";

const quickLinks = [
  { href: "/appointments", label: "Book Visit" },
  { href: "/telehealth", label: "Telehealth" },
  { href: "/diagnostics", label: "AI Diagnostics" },
  { href: "/remote-monitoring", label: "Monitoring" },
];

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F5F5F0] pb-24">
      <header className="sticky top-0 z-40 border-b border-[#E2E2DA]/70 bg-[#F5F5F0]/95 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6">
          <div>
            <div className="flex items-center gap-2">
              <HeartIcon className="h-7 w-7 text-[#2D5F4F]" />
              <span className="text-2xl font-semibold tracking-tight text-[#1A1A1A]">
                Avicure
              </span>
            </div>
            <p className="mt-1 text-sm text-[#6B6B6B]">
              Personalized healthcare navigator for patients and clinicians.
            </p>
          </div>
          <Link
            href="/notifications"
            className="flex h-12 items-center gap-2 rounded-[16px] bg-[#2D5F4F] px-5 text-sm font-semibold text-white shadow-[0_4px_12px_rgba(45,95,79,0.25)] transition hover:bg-[#264c40]"
          >
            <BellAlertIcon className="h-6 w-6" />
            Alerts
          </Link>
        </div>
        <div className="mx-auto hidden max-w-4xl gap-4 px-6 pb-6 sm:flex">
          {quickLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="card flex-1 rounded-[16px] border border-white/40 px-5 py-4 text-sm font-semibold text-[#2D5F4F] transition hover:-translate-y-1 hover:border-[#2D5F4F]/30 hover:shadow-[0_8px_20px_rgba(45,95,79,0.15)]"
            >
              {item.label}
              <span className="ml-2 text-xs font-normal text-[#6B6B6B]">
                Quick action
              </span>
            </Link>
          ))}
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-6 pb-40 pt-10">{children}</main>
      <BottomNav />
    </div>
  );
}
