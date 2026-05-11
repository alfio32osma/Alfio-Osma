import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const RoomBackLink = () => {
  return (
    <div className="mb-4 mt-4">
      <Link
        href="/catalog"
        className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition hover:border-zinc-400 hover:text-zinc-900"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Volver al Catalogo
      </Link>
    </div>
  );
};

export default RoomBackLink;
