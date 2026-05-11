import { getHomeDataset } from "@/services/homeService";
import { HomeProperty } from "@/types/home";
import { RoomAmenity, RoomDetail } from "@/types/room";

const HOST_NAMES = ["Lucia", "Miguel", "Sofia", "Javier", "Elena", "Carlos", "Paula", "Diego"];

const EXTRA_PHOTOS_BY_CATEGORY: Record<string, string[]> = {
  beach: [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1400&q=80"
  ],
  design: [
    "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1400&q=80"
  ],
  cabins: [
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1400&q=80"
  ],
  luxury: [
    "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1616594039964-3f5e8ce23d4f?auto=format&fit=crop&w=1400&q=80"
  ],
  trending: [
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80"
  ]
};

function buildAmenities(property: HomeProperty): RoomAmenity[] {
  const common: RoomAmenity[] = [
    { id: `${property.id}-wifi`, label: "Wifi de alta velocidad", icon: "wifi" },
    { id: `${property.id}-kitchen`, label: "Cocina equipada", icon: "utensils" },
    { id: `${property.id}-ac`, label: "Aire acondicionado", icon: "air-conditioning" },
    { id: `${property.id}-tv`, label: "Smart TV", icon: "tv" },
    { id: `${property.id}-shield`, label: "Entrada autonoma", icon: "shield" },
    { id: `${property.id}-coffee`, label: "Cafetera", icon: "coffee" }
  ];

  if (property.categoryId === "beach") {
    return [...common, { id: `${property.id}-waves`, label: "Acceso a la playa", icon: "waves" }];
  }

  return [...common, { id: `${property.id}-car`, label: "Parking privado", icon: "car" }];
}

function buildRoomDetail(property: HomeProperty, index: number): RoomDetail {
  const extraPhotos = EXTRA_PHOTOS_BY_CATEGORY[property.categoryId] ?? EXTRA_PHOTOS_BY_CATEGORY.trending;

  return {
    id: property.id,
    title: property.title,
    location: property.location,
    rating: property.rating,
    reviewsCount: 72 + index * 19,
    pricePerNight: property.nightlyPrice,
    photos: [property.imageUrl.replace("w=900", "w=1400"), ...extraPhotos],
    host: {
      name: HOST_NAMES[index % HOST_NAMES.length],
      yearsHosting: 2 + (index % 6)
    },
    amenities: buildAmenities(property)
  };
}

const ROOM_DETAILS: RoomDetail[] = getHomeDataset().properties.map(buildRoomDetail);

export function getRoomDetailById(roomId: string): RoomDetail | undefined {
  return ROOM_DETAILS.find((room) => room.id === roomId);
}
