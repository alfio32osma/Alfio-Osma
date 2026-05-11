import Link from "next/link";

const FOOTER_LINKS = [
  { id: "terms", label: "Terminos", href: "/" },
  { id: "privacy", label: "Privacidad", href: "/" },
  { id: "support", label: "Soporte", href: "/" }
];

const AppFooter = () => {
  return (
    <footer className="border-t border-zinc-200 bg-white px-4 py-6 text-zinc-600">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Airbnb Clone. Todos los derechos reservados.</p>
        <ul className="flex items-center gap-4">
          {FOOTER_LINKS.map((link) => (
            <li key={link.id}>
              <Link href={link.href} className="transition hover:text-zinc-900">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default AppFooter;
