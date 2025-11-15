"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CalendarDaysIcon,
  HomeModernIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

const navItems = [
  {
    href: "/",
    label: "Home",
    icon: HomeModernIcon,
    match: (path: string) => path === "/",
  },
  {
    href: "/appointments",
    label: "Appointments",
    icon: CalendarDaysIcon,
    match: (path: string) => path.startsWith("/appointments"),
  },
  {
    href: "/search",
    label: "Search",
    icon: MagnifyingGlassIcon,
    match: (path: string) => path.startsWith("/search"),
  },
  {
    href: "/profile",
    label: "Profile",
    icon: UserCircleIcon,
    match: (path: string) => path.startsWith("/profile"),
  },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-1/2 z-50 w-full max-w-4xl -translate-x-1/2 px-4 pb-4">
      <div className="mx-auto flex h-20 items-center justify-around rounded-[20px] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.match(pathname);
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex h-full w-full flex-col items-center justify-center gap-2 text-xs font-medium"
            >
              <Icon
                className={`h-6 w-6 ${isActive ? "text-[#6B4E3D]" : "text-[#6B6B6B]"}`}
              />
              <span className={isActive ? "text-[#6B4E3D]" : "text-[#6B6B6B]"}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

