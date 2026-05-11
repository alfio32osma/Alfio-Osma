import { HomeDataset } from "@/types/home";

const HOME_DATASET: HomeDataset = {
  categories: [
    { id: "all", label: "Todos", icon: "✨" },
    { id: "beach", label: "Playa", icon: "🏖️" },
    { id: "luxury", label: "Mansiones", icon: "🏰" },
    { id: "trending", label: "Tendencias", icon: "🔥" },
    { id: "cabins", label: "Cabañas", icon: "🏠" },
    { id: "design", label: "Diseño", icon: "🎨" }
  ],
  properties: [
    {
      id: "p1",
      title: "Villa frente al mar",
      location: "Marbella, Espana",
      categoryId: "beach",
      latitude: 36.5102,
      longitude: -4.8825,
      imageUrl: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=900&q=80",
      nightlyPrice: 280,
      rating: 4.88
    },
    {
      id: "p2",
      title: "Loft contemporaneo",
      location: "Barcelona, Espana",
      categoryId: "design",
      latitude: 41.3874,
      longitude: 2.1686,
      imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80",
      nightlyPrice: 165,
      rating: 4.74
    },
    {
      id: "p3",
      title: "Casa de montana",
      location: "Andorra la Vella",
      categoryId: "cabins",
      latitude: 42.5078,
      longitude: 1.5211,
      imageUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=900&q=80",
      nightlyPrice: 190,
      rating: 4.81
    },
    {
      id: "p4",
      title: "Mansion con piscina infinita",
      location: "Ibiza, Espana",
      categoryId: "luxury",
      latitude: 38.9067,
      longitude: 1.4206,
      imageUrl: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=900&q=80",
      nightlyPrice: 540,
      rating: 4.96
    },
    {
      id: "p5",
      title: "Apartamento urbano premium",
      location: "Madrid, Espana",
      categoryId: "trending",
      latitude: 40.4168,
      longitude: -3.7038,
      imageUrl: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
      nightlyPrice: 145,
      rating: 4.67
    },
    {
      id: "p6",
      title: "Refugio junto al lago",
      location: "Asturias, Espana",
      categoryId: "beach",
      latitude: 43.3619,
      longitude: -5.8494,
      imageUrl: "https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=900&q=80",
      nightlyPrice: 210,
      rating: 4.84
    },
    {
      id: "p7",
      title: "Penthouse de lujo",
      location: "Valencia, Espana",
      categoryId: "luxury",
      latitude: 39.4699,
      longitude: -0.3763,
      imageUrl: "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=900&q=80",
      nightlyPrice: 390,
      rating: 4.91
    },
    {
      id: "p8",
      title: "Cabana minimalista",
      location: "Granada, Espana",
      categoryId: "cabins",
      latitude: 37.1773,
      longitude: -3.5986,
      imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=900&q=80",
      nightlyPrice: 175,
      rating: 4.79
    }
  ]
};

export function getHomeDataset(): HomeDataset {
  return HOME_DATASET;
}
