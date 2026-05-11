import { Star } from "lucide-react";

interface RoomHeaderProps {
  title: string;
  rating: number;
  reviewsCount: number;
  location: string;
}

const RoomHeader = ({ title, rating, reviewsCount, location }: RoomHeaderProps) => {
  return (
    <header className="space-y-2">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900">{title}</h1>
      <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-700">
        <p className="inline-flex items-center gap-1 font-semibold text-zinc-900">
          <Star className="h-4 w-4 fill-current" aria-hidden="true" />
          {rating.toFixed(2)}
        </p>
        <span aria-hidden="true">·</span>
        <p>{reviewsCount} resenas</p>
        <span aria-hidden="true">·</span>
        <p>{location}</p>
      </div>
    </header>
  );
};

export default RoomHeader;
