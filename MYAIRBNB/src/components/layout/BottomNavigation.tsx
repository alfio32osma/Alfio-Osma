"use client";

import { BottomNavItem } from "@/types/explore";

interface BottomNavigationProps {
  items: BottomNavItem[];
  activeItemId?: string;
}

const SearchIcon = () => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.2-3.2" strokeLinecap="round" />
    </svg>
  );
};

const HeartIcon = () => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 21s-7.5-4.75-9.5-9A5.5 5.5 0 0 1 12 5a5.5 5.5 0 0 1 9.5 7c-2 4.25-9.5 9-9.5 9Z" />
    </svg>
  );
};

const UserIcon = () => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="4" />
      <path d="M4.5 20a7.5 7.5 0 0 1 15 0" strokeLinecap="round" />
    </svg>
  );
};

const NavIcon = ({ icon }: { icon: BottomNavItem["icon"] }) => {
  if (icon === "search") {
    return <SearchIcon />;
  }

  if (icon === "heart") {
    return <HeartIcon />;
  }

  return <UserIcon />;
};

const BottomNavigation = ({
  items,
  activeItemId = "explore"
}: BottomNavigationProps) => {
  return (
    <nav className="fixed bottom-0 left-1/2 z-40 w-full max-w-[28rem] -translate-x-1/2 border-t border-zinc-200 bg-white px-4 pb-4 pt-2">
      <ul className="flex items-center justify-around">
        {items.map((item) => {
          const isActive = item.id === activeItemId;

          return (
            <li key={item.id}>
              <button
                type="button"
                className={`flex flex-col items-center gap-1 text-[13px] ${
                  isActive ? "text-[#ff385c]" : "text-zinc-500"
                }`}
                aria-pressed={isActive}
              >
                <NavIcon icon={item.icon} />
                <span>{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BottomNavigation;
