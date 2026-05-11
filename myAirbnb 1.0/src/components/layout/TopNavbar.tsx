import Link from "next/link";
import { usePathname } from "next/navigation";

const HomeIcon = () => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 11.5 12 4l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 10.5V20h12v-9.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

const CatalogIcon = () => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
};

const RoomIcon = () => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 19v-8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8" strokeLinecap="round" />
      <path d="M4 15h16" />
      <path d="M7 12v-1" />
      <path d="M17 12v-1" />
    </svg>
  );
};

const TopNavbar = () => {
  const pathname = usePathname();

  const navItems = [
    { id: "home", label: "Home", href: "/", icon: <HomeIcon /> },
    { id: "catalog", label: "Catalogo", href: "/catalog", icon: <CatalogIcon /> },
    { id: "rooms", label: "Rooms", href: "/rooms/p1", icon: <RoomIcon /> }
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-zinc-200 bg-white/95 px-4 py-3 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-2">
        <Link href="/" className="text-lg font-black tracking-tight text-[#ff385c]">
          airbnb
        </Link>

        <ul className="flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`inline-flex h-10 items-center gap-2 rounded-full border px-3 text-sm font-medium transition sm:px-4 ${
                    isActive
                      ? "border-zinc-900 bg-zinc-900 text-white"
                      : "border-zinc-300 bg-white text-zinc-700 hover:border-zinc-400 hover:text-zinc-900"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.icon}
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default TopNavbar;
