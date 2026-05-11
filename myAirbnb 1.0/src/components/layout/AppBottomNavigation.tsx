"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface AppNavItem {
  id: string;
  label: string;
  href: string;
  icon: "home" | "catalog" | "room";
}

const APP_NAV_ITEMS: AppNavItem[] = [
  { id: "home", label: "Home", href: "/", icon: "home" },
  { id: "catalog", label: "Catalogo", href: "/catalog", icon: "catalog" },
  { id: "room", label: "Rooms", href: "/rooms/p1", icon: "room" }
];

const HomeIcon = () => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 11.5 12 4l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 10.5V20h12v-9.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

const CatalogIcon = () => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
};

const RoomIcon = () => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 19v-8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8" strokeLinecap="round" />
      <path d="M4 15h16" />
      <path d="M7 12v-1" />
      <path d="M17 12v-1" />
    </svg>
  );
};

const NavIcon = ({ icon }: { icon: AppNavItem["icon"] }) => {
  if (icon === "home") {
    return <HomeIcon />;
  }

  if (icon === "catalog") {
    return <CatalogIcon />;
  }

  return <RoomIcon />;
};

const AppBottomNavigation = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-zinc-200 bg-white/95 px-4 pb-4 pt-2 backdrop-blur">
      <ul className="mx-auto flex w-full max-w-xl items-center justify-around">
        {APP_NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

          return (
            <li key={item.id}>
              <Link
                href={item.href}
                className={`flex flex-col items-center gap-1 text-[12px] ${
                  isActive ? "text-[#ff385c]" : "text-zinc-500"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <NavIcon icon={item.icon} />
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default AppBottomNavigation;
