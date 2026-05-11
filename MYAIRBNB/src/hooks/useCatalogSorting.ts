"use client";

import { useMemo, useState } from "react";
import { HomeProperty, HomePropertySortOrder } from "@/types/home";
import { sortHomePropertiesByPrice } from "@/utils/sortHomeProperties";

interface UseCatalogSortingResult {
  sortOrder: HomePropertySortOrder;
  sortedProperties: HomeProperty[];
  onSortOrderChange: (value: HomePropertySortOrder) => void;
}

export function useCatalogSorting(properties: HomeProperty[]): UseCatalogSortingResult {
  const [sortOrder, setSortOrder] = useState<HomePropertySortOrder>("price-asc");

  const sortedProperties = useMemo(() => {
    return sortHomePropertiesByPrice(properties, sortOrder);
  }, [properties, sortOrder]);

  return {
    sortOrder,
    sortedProperties,
    onSortOrderChange: setSortOrder
  };
}
