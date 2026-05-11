import Link from "next/link";

interface HomeNavbarProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
}

const MenuIcon = () => {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
};

const UserIcon = () => {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 19a7 7 0 0 1 14 0" strokeLinecap="round" />
    </svg>
  );
};

const HomeNavbar = ({ searchValue, onSearchChange }: HomeNavbarProps) => {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
        <Link href="/" className="shrink-0 text-xl font-black tracking-tight text-[#ff385c]">
          airbnb
        </Link>

        <label className="relative flex-1">
          <span className="sr-only">Buscar alojamientos</span>
          <input
            type="text"
            value={searchValue}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Empieza a buscar"
            className="h-11 w-full rounded-full border border-zinc-300 bg-white pl-4 pr-4 text-sm text-zinc-900 outline-none transition focus:border-zinc-400"
          />
        </label>

        <Link
          href="/catalog"
          className="inline-flex h-10 items-center rounded-full border border-zinc-300 px-3 text-xs font-medium text-zinc-700 transition hover:border-zinc-400 hover:text-zinc-900 sm:px-4 sm:text-sm"
        >
          <span className="sm:hidden">Cat.</span>
          <span className="hidden sm:inline">Catalogo</span>
        </Link>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Abrir menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-zinc-700"
          >
            <MenuIcon />
          </button>
          <button
            type="button"
            aria-label="Perfil de usuario"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-zinc-700"
          >
            <UserIcon />
          </button>
        </div>
      </div>
    </header>
  );
};

export default HomeNavbar;
