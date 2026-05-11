"use client";

import { ExploreCategory, ExploreTab } from "@/types/explore";

interface CategoryTabsProps {
  categories: ExploreCategory[];
  activeTab: ExploreTab;
  onTabChange: (tab: ExploreTab) => void;
}

const HomeIcon = () => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 11.5 12 4l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 10.5V20h12v-9.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

const BalloonIcon = () => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3c-3.7 0-6.2 2.8-6.2 6.2 0 3 2 5.8 5 7v3.2l1.2-1 1.2 1V16.2c3-1.2 5-4 5-7C18.2 5.8 15.7 3 12 3Z" />
      <path d="M12 20.4v.9" strokeLinecap="round" />
    </svg>
  );
};

const BellIcon = () => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 10a6 6 0 1 1 12 0v4l2 2H4l2-2v-4Z" strokeLinejoin="round" />
      <path d="M10 19a2 2 0 0 0 4 0" strokeLinecap="round" />
    </svg>
  );
};

const CategoryIcon = ({ icon }: { icon: ExploreCategory["icon"] }) => {
  if (icon === "home") {
    return <HomeIcon />;
  }

  if (icon === "balloon") {
    return <BalloonIcon />;
  }

  return <BellIcon />;
};

const CategoryTabs = ({ categories, activeTab, onTabChange }: CategoryTabsProps) => {
  return (
    <nav className="sticky top-[5.2rem] z-20 border-b border-zinc-200 bg-[#f4f4f4] px-3 py-2">
      <ul className="mx-auto flex max-w-[24rem] items-center justify-around">
        {categories.map((category) => {
          const isActive = category.id === activeTab;

          return (
            <li key={category.id}>
              <button
                type="button"
                onClick={() => onTabChange(category.id)}
                className={`relative flex min-w-[6rem] flex-col items-center gap-1 pb-2 text-[15px] font-medium transition ${
                  isActive ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-700"
                }`}
                aria-pressed={isActive}
              >
                <div className="relative">
                  <CategoryIcon icon={category.icon} />
                  {category.isNew ? (
                    <span className="absolute -right-8 -top-2 rounded-full bg-slate-700 px-2 py-0.5 text-[9px] font-bold tracking-wide text-white">
                      NUEVO
                    </span>
                  ) : null}
                </div>
                <span>{category.label}</span>
                {isActive ? <span className="absolute -bottom-[0.15rem] h-0.5 w-14 rounded-full bg-zinc-900" /> : null}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default CategoryTabs;
