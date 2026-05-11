import { HomeProperty, HomePropertySortOrder } from "@/types/home";

export function sortHomePropertiesByPrice(
  properties: HomeProperty[],
  sortOrder: HomePropertySortOrder
): HomeProperty[] {
  const sortedProperties = [...properties];

  sortedProperties.sort((a, b) => {
    if (sortOrder === "price-asc") {
      return a.nightlyPrice - b.nightlyPrice;
    }

    return b.nightlyPrice - a.nightlyPrice;
  });

  return sortedProperties;
}
