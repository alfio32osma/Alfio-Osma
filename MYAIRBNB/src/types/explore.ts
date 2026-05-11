export type ExploreTab = "stays" | "experiences" | "services";

export type CategoryIcon = "home" | "balloon" | "bell";

export interface ExploreCategory {
  id: ExploreTab;
  label: string;
  icon: CategoryIcon;
  isNew?: boolean;
}

export interface ListingBadge {
  label: string;
  tone?: "neutral" | "light";
}

export interface ExploreListingCard {
  id: string;
  imageUrl: string;
  title: string;
  subtitle: string;
  detail: string;
  meta: string;
  rating: number;
  badge?: ListingBadge;
}

export interface ServiceQuickCard {
  id: string;
  imageUrl: string;
  title: string;
  availability: string;
  badge?: ListingBadge;
}

export interface ContentSection {
  id: string;
  title: string;
  subtitle?: string;
  listings?: ExploreListingCard[];
  services?: ServiceQuickCard[];
}

export interface ExploreTabContent {
  topServices?: ServiceQuickCard[];
  sections: ContentSection[];
}

export interface BottomNavItem {
  id: string;
  label: string;
  icon: "search" | "heart" | "user";
}

export interface ExplorePageData {
  categories: ExploreCategory[];
  tabContent: Record<ExploreTab, ExploreTabContent>;
  bottomNav: BottomNavItem[];
}
