import { Link } from "react-router-dom";
import logoFileUrl from "../assets/10Power6Logo.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-slate-950">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-indigo-500/[0.04] to-transparent" aria-hidden="true" />

      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-8 sm:gap-4 sm:px-6 sm:py-8 lg:py-10">
        <Link to="/" aria-label="10Power6 home" className="shrink-0 transition-opacity hover:opacity-90">
          <img src={logoFileUrl} alt="10Power6" className="h-[7.5rem] w-auto max-w-[55vw] object-contain object-left sm:h-9 sm:max-w-none md:h-10" />
        </Link>

        <p className="text-right text-[0.7rem] leading-snug text-slate-400 sm:text-sm">
          &copy; {year} 10Power6. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
