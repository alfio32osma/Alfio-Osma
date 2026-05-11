export interface HomeCategory {
  id: string;
  label: string;
  icon: string;
}

export interface HomeProperty {
  id: string;
  title: string;
  location: string;
  categoryId: string;
  latitude: number;
  longitude: number;
  imageUrl: string;
  nightlyPrice: number;
  rating: number;
}

export type HomePropertySortOrder = "price-asc" | "price-desc";

export interface HomeDataset {
  categories: HomeCategory[];
  properties: HomeProperty[];
}
