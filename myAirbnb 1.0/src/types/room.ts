export type RoomAmenityIcon =
  | "wifi"
  | "utensils"
  | "air-conditioning"
  | "tv"
  | "car"
  | "waves"
  | "shield"
  | "coffee";

export interface RoomAmenity {
  id: string;
  label: string;
  icon: RoomAmenityIcon;
}

export interface RoomHost {
  name: string;
  yearsHosting: number;
}

export interface RoomDetail {
  id: string;
  title: string;
  location: string;
  rating: number;
  reviewsCount: number;
  pricePerNight: number;
  photos: string[];
  host: RoomHost;
  amenities: RoomAmenity[];
}
