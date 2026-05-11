import BadgeTag from "@/components/ui/BadgeTag";
import { ExploreListingCard } from "@/types/explore";

interface ListingCardProps {
  listing: ExploreListingCard;
}

const HeartIcon = () => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path
        d="M12 21s-7.5-4.75-9.5-9A5.5 5.5 0 0 1 12 5a5.5 5.5 0 0 1 9.5 7c-2 4.25-9.5 9-9.5 9Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const ListingCard = ({ listing }: ListingCardProps) => {
  return (
    <article className="w-[11.2rem] shrink-0">
      <div className="relative overflow-hidden rounded-3xl bg-zinc-200">
        <img src={listing.imageUrl} alt={listing.title} className="h-40 w-full object-cover" loading="lazy" />
        <button
          type="button"
          aria-label={`Guardar ${listing.title} en favoritos`}
          className="absolute right-2.5 top-2.5 rounded-full bg-black/15 p-1.5 text-white backdrop-blur-sm"
        >
          <HeartIcon />
        </button>
        {listing.badge ? (
          <div className="absolute left-2.5 top-2.5">
            <BadgeTag label={listing.badge.label} tone={listing.badge.tone} />
          </div>
        ) : null}
      </div>
      <div className="pt-2.5">
        <h3 className="line-clamp-2 text-[20px] leading-6 font-medium text-zinc-900">{listing.title}</h3>
        <p className="mt-1 line-clamp-2 text-[16px] leading-5 text-zinc-600">{listing.subtitle}</p>
        <p className="mt-1 text-[16px] leading-5 text-zinc-600">{listing.detail}</p>
        <p className="text-[16px] leading-5 text-zinc-600">
          <span aria-hidden="true">★ </span>
          {listing.rating.toFixed(2)}
        </p>
      </div>
    </article>
  );
};

export default ListingCard;
