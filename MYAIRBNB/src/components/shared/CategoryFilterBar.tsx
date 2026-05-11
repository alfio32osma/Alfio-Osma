import { HomeCategory } from "@/types/home";

interface CategoryFilterBarProps {
  categories: HomeCategory[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryFilterBar = ({
  categories,
  activeCategory,
  onCategoryChange
}: CategoryFilterBarProps) => {
  return (
    <section className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
        {categories.map((category) => {
          const isActive = category.id === activeCategory;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onCategoryChange(category.id)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium whitespace-nowrap transition ${
                isActive
                  ? "border-zinc-900 bg-zinc-900 text-white"
                  : "border-zinc-300 bg-white text-zinc-700 hover:border-zinc-400"
              }`}
              aria-pressed={isActive}
            >
              <span aria-hidden="true">{category.icon}</span>
              {category.label}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryFilterBar;
