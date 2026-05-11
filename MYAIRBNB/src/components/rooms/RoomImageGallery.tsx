import { ChevronLeft, ChevronRight } from "lucide-react";

interface RoomImageGalleryProps {
  imageUrl: string;
  title: string;
  photoIndex: number;
  onPrevious: () => void;
  onNext: () => void;
}

const RoomImageGallery = ({ imageUrl, title, photoIndex, onPrevious, onNext }: RoomImageGalleryProps) => {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white">
      <img src={imageUrl} alt={`${title} - foto ${photoIndex + 1}`} className="h-[20rem] w-full object-cover sm:h-[24rem] lg:h-[30rem]" />
      <button
        type="button"
        onClick={onPrevious}
        className="absolute left-4 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white transition hover:bg-black/70"
        aria-label="Ver foto anterior"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={onNext}
        className="absolute right-4 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white transition hover:bg-black/70"
        aria-label="Ver foto siguiente"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </section>
  );
};

export default RoomImageGallery;
