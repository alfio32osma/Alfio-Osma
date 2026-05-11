"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getHomeDataset } from "@/services/homeService";
import { HomeCategory, HomeProperty } from "@/types/home";
import { buildPathWithUpdatedSearchParams } from "@/utils/searchParams";

interface UseHomeListingsResult {
  searchQuery: string;
  activeCategory: string;
  visibleProperties: HomeProperty[];
  isLoading: boolean;
  categories: HomeCategory[];
  onSearchChange: (value: string) => void;
  onCategoryChange: (categoryId: string) => void;
}

export function useHomeListings(): UseHomeListingsResult {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const dataset = useMemo(() => getHomeDataset(), []);
  const [allProperties, setAllProperties] = useState<HomeProperty[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const searchQuery = searchParams.get("q") ?? "";
  const activeCategory = searchParams.get("category") ?? "all";

  useEffect(() => {
    setIsLoading(true);
    setAllProperties([]);

    const timer = window.setTimeout(() => {
      setAllProperties(dataset.properties);
      setIsLoading(false);
    }, 1000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [dataset.properties]);

  const updateSearchParam = useCallback(
    (key: string, value: string | null) => {
      const href = buildPathWithUpdatedSearchParams(pathname, searchParams.toString(), [{ key, value }]);

      router.replace(href, { scroll: false });
    },
    [pathname, router, searchParams]
  );

  const visibleProperties = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return allProperties.filter((property) => {
      const matchesCategory = activeCategory === "all" || property.categoryId === activeCategory;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        property.title.toLowerCase().includes(normalizedQuery) ||
        property.location.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, allProperties, searchQuery]);

  const onSearchChange = useCallback(
    (value: string) => {
      updateSearchParam("q", value.trim().length === 0 ? null : value);
    },
    [updateSearchParam]
  );

  const onCategoryChange = useCallback(
    (categoryId: string) => {
      updateSearchParam("category", categoryId === "all" ? null : categoryId);
    },
    [updateSearchParam]
  );

  return {
    searchQuery,
    activeCategory,
    visibleProperties,
    isLoading,
    categories: dataset.categories,
    onSearchChange,
    onCategoryChange
  };
}
