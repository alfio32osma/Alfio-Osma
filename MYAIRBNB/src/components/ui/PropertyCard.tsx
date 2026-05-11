import Link from "next/link";
import { HomeProperty } from "@/types/home";

interface PropertyCardProps {
  property: HomeProperty;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Link href={`/rooms/${property.id}`} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 rounded-2xl">
      <article className="rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm transition hover:shadow-md">
        <div className="overflow-hidden rounded-xl bg-zinc-100">
          <img
            src={property.imageUrl}
            alt={property.title}
            className="h-44 w-full object-cover md:h-48"
            loading="lazy"
          />
        </div>
        <div className="pt-3">
          <h3 className="text-base font-semibold text-zinc-900">{property.title}</h3>
          <p className="mt-1 text-sm text-zinc-600">{property.location}</p>
          <div className="mt-3 flex items-center justify-between text-sm">
            <p className="font-semibold text-zinc-900">{property.nightlyPrice} EUR / noche</p>
            <p className="font-medium text-zinc-700">★ {property.rating.toFixed(2)}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default PropertyCard;
