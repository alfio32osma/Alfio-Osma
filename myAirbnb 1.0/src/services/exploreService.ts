import { ExplorePageData } from "@/types/explore";

const exploreData: ExplorePageData = {
  categories: [
    { id: "stays", label: "Alojamientos", icon: "home" },
    { id: "experiences", label: "Experiencias", icon: "balloon", isNew: true },
    { id: "services", label: "Servicios", icon: "bell", isNew: true }
  ],
  tabContent: {
    stays: {
      sections: [
        {
          id: "stays-popular",
          title: "Alojamientos populares en Madrid",
          listings: [
            {
              id: "stay-1",
              imageUrl:
                "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80",
              title: "Apartamento en Ventas",
              subtitle: "7-9 ago · Anfitrion profesional",
              detail: "236 EUR en total",
              meta: "3 camas",
              rating: 4.76
            },
            {
              id: "stay-2",
              imageUrl:
                "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=800&q=80",
              title: "Apartamento en Sol",
              subtitle: "7-9 ago · Anfitrion particular",
              detail: "405 EUR en total",
              meta: "2 habitaciones",
              rating: 4.77,
              badge: { label: "Recomendacion del viajero", tone: "neutral" }
            },
            {
              id: "stay-3",
              imageUrl:
                "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
              title: "Loft en Malasana",
              subtitle: "10-14 ago · Superhost",
              detail: "322 EUR en total",
              meta: "Wifi · cocina",
              rating: 4.89
            }
          ]
        },
        {
          id: "stays-hotels",
          title: "Grandes ofertas en hoteles",
          subtitle: "Ademas, te llevaras credito de Airbnb por tu estancia en uno de los hoteles destacados",
          listings: [
            {
              id: "hotel-1",
              imageUrl:
                "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
              title: "Hotel Boutique Gran Via",
              subtitle: "Centro historico",
              detail: "129 EUR por noche",
              meta: "Cancelacion flexible",
              rating: 4.84
            },
            {
              id: "hotel-2",
              imageUrl:
                "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80",
              title: "Suites Castellana",
              subtitle: "Desayuno incluido",
              detail: "151 EUR por noche",
              meta: "Piscina",
              rating: 4.81
            }
          ]
        }
      ]
    },
    experiences: {
      sections: [
        {
          id: "exp-popular",
          title: "Experiencias populares en Malaga",
          listings: [
            {
              id: "exp-1",
              imageUrl:
                "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80",
              title: "Caminata hasta un canon impresionante",
              subtitle: "Anfitrion particular",
              detail: "Desde 110 EUR por viajero",
              meta: "Aventura al aire libre",
              rating: 4.98,
              badge: { label: "Popular", tone: "light" }
            },
            {
              id: "exp-2",
              imageUrl:
                "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=800&q=80",
              title: "Caminito del Rey desde Malaga con picnic",
              subtitle: "Anfitrion profesional",
              detail: "Desde 89 EUR por viajero",
              meta: "Dia completo",
              rating: 4.95,
              badge: { label: "Popular", tone: "light" }
            },
            {
              id: "exp-3",
              imageUrl:
                "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
              title: "Tour en velero al atardecer",
              subtitle: "Grupos pequenos",
              detail: "Desde 70 EUR por viajero",
              meta: "Bebidas incluidas",
              rating: 4.91
            }
          ]
        },
        {
          id: "exp-originals",
          title: "Airbnb Originals",
          subtitle: "Organizadas por las personas mas interesantes del mundo",
          listings: [
            {
              id: "orig-1",
              imageUrl:
                "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
              title: "Sesion de fotografia nocturna",
              subtitle: "Con un director creativo",
              detail: "Desde 95 EUR por viajero",
              meta: "Edicion incluida",
              rating: 4.93
            },
            {
              id: "orig-2",
              imageUrl:
                "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
              title: "Cena privada de autor",
              subtitle: "Chef invitado",
              detail: "Desde 120 EUR por viajero",
              meta: "Menu degustacion",
              rating: 4.9
            }
          ]
        }
      ]
    },
    services: {
      topServices: [
        {
          id: "service-1",
          imageUrl:
            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
          title: "Fotografia",
          availability: "47 disponibles"
        },
        {
          id: "service-2",
          imageUrl:
            "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=800&q=80",
          title: "Chefs",
          availability: "43 disponibles"
        },
        {
          id: "service-3",
          imageUrl:
            "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
          title: "Masaje",
          availability: "11 disponibles"
        },
        {
          id: "service-4",
          imageUrl:
            "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=800&q=80",
          title: "Entrenador personal",
          availability: "20 disponibles"
        }
      ],
      sections: [
        {
          id: "services-photo",
          title: "Fotografia",
          listings: [
            {
              id: "photo-1",
              imageUrl:
                "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
              title: "Retratos de pareja nocturnos",
              subtitle: "Anfitrion profesional",
              detail: "Desde 75 EUR",
              meta: "Sesion de 90 min",
              rating: 4.94
            },
            {
              id: "photo-2",
              imageUrl:
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
              title: "Sesion en playa al atardecer",
              subtitle: "Anfitrion profesional",
              detail: "Desde 85 EUR",
              meta: "Incluye 30 fotos",
              rating: 4.92,
              badge: { label: "Popular", tone: "light" }
            },
            {
              id: "photo-3",
              imageUrl:
                "https://images.unsplash.com/photo-1529634893441-7f4a94fd00b5?auto=format&fit=crop&w=800&q=80",
              title: "Storytelling visual de viaje",
              subtitle: "Anfitrion particular",
              detail: "Desde 62 EUR",
              meta: "Plan para redes",
              rating: 4.88
            }
          ]
        }
      ]
    }
  },
  bottomNav: [
    { id: "explore", label: "Explorar", icon: "search" },
    { id: "favorites", label: "Favoritos", icon: "heart" },
    { id: "login", label: "Iniciar sesion", icon: "user" }
  ]
};

export async function getExplorePageData(): Promise<ExplorePageData> {
  return Promise.resolve(exploreData);
}
