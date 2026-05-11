"use client";

import TopNavbar from "@/components/layout/TopNavbar";
import CategoryFilterBar from "@/components/shared/CategoryFilterBar";
import PropertyGrid from "@/components/shared/PropertyGrid";
import LoadingIndicator from "@/components/ui/LoadingIndicator";
import { useHomeListings } from "@/hooks/useHomeListings";

const HomePageView = () => {
  const {
    searchQuery,
    activeCategory,
    visibleProperties,
    isLoading,
    categories,
    onSearchChange,
    onCategoryChange
  } = useHomeListings();

  return (
    <main className="min-h-screen bg-[#f7f7f7]">
      <TopNavbar />
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-3 sm:px-6">
          <label className="relative block">
            <span className="sr-only">Buscar alojamientos</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Empieza a buscar"
              className="h-11 w-full rounded-full border border-zinc-300 bg-white px-4 text-sm text-zinc-900 outline-none transition focus:border-zinc-400"
            />
          </label>
        </div>
      </section>
      <CategoryFilterBar categories={categories} activeCategory={activeCategory} onCategoryChange={onCategoryChange} />
      <section className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6">
        <header className="mb-4 flex items-end justify-between">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900">Alojamientos disponibles</h1>
          <p className="text-sm text-zinc-500">{visibleProperties.length} resultados</p>
        </header>
        {isLoading ? <LoadingIndicator /> : <PropertyGrid properties={visibleProperties} />}
        {!isLoading && visibleProperties.length === 0 ? (
          <p className="mt-6 rounded-2xl border border-zinc-200 bg-white p-5 text-sm text-zinc-600">
            No se encontraron alojamientos para tu busqueda. Prueba con otro texto o categoria.
          </p>
        ) : null}
      </section>
    </main>
  );
};

export default HomePageView;
