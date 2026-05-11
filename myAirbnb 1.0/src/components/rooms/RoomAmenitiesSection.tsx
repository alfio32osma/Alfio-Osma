import { AirVent, Car, Coffee, ShieldCheck, Tv, Utensils, Waves, Wifi } from "lucide-react";
import { RoomAmenity } from "@/types/room";

const iconByAmenity = {
  wifi: Wifi,
  utensils: Utensils,
  "air-conditioning": AirVent,
  tv: Tv,
  car: Car,
  waves: Waves,
  shield: ShieldCheck,
  coffee: Coffee
};

interface RoomAmenitiesSectionProps {
  amenities: RoomAmenity[];
}

const RoomAmenitiesSection = ({ amenities }: RoomAmenitiesSectionProps) => {
  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Servicios</h2>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {amenities.map((amenity) => {
          const AmenityIcon = iconByAmenity[amenity.icon];

          return (
            <li key={amenity.id} className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3">
              <AmenityIcon className="h-5 w-5 text-zinc-700" aria-hidden="true" />
              <span className="text-sm font-medium text-zinc-800">{amenity.label}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default RoomAmenitiesSection;
