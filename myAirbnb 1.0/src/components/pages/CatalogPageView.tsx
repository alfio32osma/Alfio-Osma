"use client";

import dynamic from "next/dynamic";
import TopNavbar from "@/components/layout/TopNavbar";
import CatalogHeader from "@/components/ui/CatalogHeader";
import PropertyCard from "@/components/ui/PropertyCard";
import { useCatalogSorting } from "@/hooks/useCatalogSorting";
import { HomeProperty } from "@/types/home";

const CatalogMap = dynamic(() => import("@/components/ui/CatalogMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center rounded-3xl bg-zinc-300/40">
      <span className="text-lg font-semibold tracking-wide text-zinc-700">Cargando mapa...</span>
    </div>
  )
});

interface CatalogPageViewProps {
  properties: HomeProperty[];
}

const CatalogPageView = ({ properties }: CatalogPageViewProps) => {
  const { sortOrder, sortedProperties, onSortOrderChange } = useCatalogSorting(properties);

  return (
    <main className="min-h-screen bg-[#f7f7f7]">
      <TopNavbar />
      <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <CatalogHeader totalResults={sortedProperties.length} sortOrder={sortOrder} onSortOrderChange={onSortOrderChange} />
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_24rem] xl:grid-cols-[minmax(0,1fr)_28rem]">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 lg:max-h-[calc(100vh-13rem)] lg:overflow-y-auto lg:pr-2">
            {sortedProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <aside className="h-72 rounded-3xl border border-zinc-300 bg-zinc-200 lg:sticky lg:top-6 lg:h-[calc(100vh-13rem)]">
            <CatalogMap properties={sortedProperties} />
          </aside>
        </div>
      </section>
    </main>
  );
};

export default CatalogPageView;
