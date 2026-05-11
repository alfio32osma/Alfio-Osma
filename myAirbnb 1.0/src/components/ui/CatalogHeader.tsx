import { HomePropertySortOrder } from "@/types/home";

interface CatalogHeaderProps {
  totalResults: number;
  sortOrder: HomePropertySortOrder;
  onSortOrderChange: (value: HomePropertySortOrder) => void;
}

const CatalogHeader = ({ totalResults, sortOrder, onSortOrderChange }: CatalogHeaderProps) => {
  return (
    <header className="flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-white px-4 py-4 sm:flex-row sm:items-end sm:justify-between sm:px-5">
      <div>
        {/* Especificacion: contador dinamico del total de alojamientos encontrados. */}
        <p className="text-sm font-medium text-zinc-500">Resultados de busqueda</p>
        <h1 className="text-xl font-semibold tracking-tight text-zinc-900">
          {totalResults} alojamientos encontrados
        </h1>
      </div>

      <label className="flex w-full max-w-xs flex-col gap-1 text-sm font-medium text-zinc-700 sm:w-auto">
        {/* Especificacion: control de ordenacion por precio ascendente/descendente. */}
        Ordenar por precio
        <select
          value={sortOrder}
          onChange={(event) => onSortOrderChange(event.target.value as HomePropertySortOrder)}
          className="h-10 rounded-xl border border-zinc-300 bg-white px-3 text-zinc-900 outline-none transition focus:border-zinc-400"
          aria-label="Ordenar alojamientos por precio"
        >
          <option value="price-asc">Ascendente</option>
          <option value="price-desc">Descendente</option>
        </select>
      </label>
    </header>
  );
};

export default CatalogHeader;
