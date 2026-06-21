import { Link } from "react-router-dom";
import logoFileUrl from "../assets/10Power6Logo.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-slate-950">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-indigo-500/[0.04] to-transparent" aria-hidden="true" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:py-12">
        <Link
          to="/"
          aria-label="10Power6 home"
          className="group relative inline-flex h-14 w-[4.5rem] shrink-0 items-center justify-center overflow-visible rounded-2xl transition duration-300 hover:bg-white/5"
        >
          <img
            src={logoFileUrl}
            alt="10Power6"
            className="absolute left-0 top-1/2 h-full w-full -translate-y-1/2 scale-[2.85] origin-left object-contain transition duration-300 group-hover:brightness-110"
          />
        </Link>

        <div className="space-y-1 sm:text-right">
          <p className="text-sm text-slate-400">&copy; {year} 10Power6. All rights reserved.</p>
          <p className="text-xs text-slate-500">Building software that scales businesses.</p>
        </div>
      </div>
    </footer>
  );
}
