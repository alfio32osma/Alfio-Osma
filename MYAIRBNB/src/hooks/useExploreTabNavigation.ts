"use client";

import { useCallback, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ExploreCategory, ExploreTab } from "@/types/explore";
import { buildPathWithUpdatedSearchParams } from "@/utils/searchParams";

interface UseExploreTabNavigationResult {
  activeTab: ExploreTab;
  onTabChange: (tab: ExploreTab) => void;
}

export function useExploreTabNavigation(categories: ExploreCategory[]): UseExploreTabNavigationResult {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeTab = useMemo<ExploreTab>(() => {
    const tab = searchParams.get("tab");
    const fallbackTab = categories[0]?.id ?? "stays";

    if (tab === null) {
      return fallbackTab;
    }

    return categories.some((category) => category.id === tab) ? (tab as ExploreTab) : fallbackTab;
  }, [categories, searchParams]);

  const onTabChange = useCallback(
    (tab: ExploreTab) => {
      const href = buildPathWithUpdatedSearchParams(pathname, searchParams.toString(), [
        {
          key: "tab",
          value: tab === "stays" ? null : tab
        }
      ]);

      router.replace(href, { scroll: false });
    },
    [pathname, router, searchParams]
  );

  return {
    activeTab,
    onTabChange
  };
}
