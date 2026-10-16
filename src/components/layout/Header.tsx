import { useState } from 'react';
import { NAV_ITEMS } from '../../data/portfolioData';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-outline-subtle shadow-[0_1px_10px_rgba(0,26,114,0.05)]">
      <div className="max-w-[1360px] mx-auto h-20 px-6 lg:px-12 flex items-center justify-between">
        {/* Logo Técnico Editorial */}
        <a className="flex items-center gap-3 group" href="#">
          <div className="w-2.5 h-6 bg-energy-red-bright -skew-x-12" />
          <div className="flex flex-col">
            <span className="font-headline text-2xl font-black uppercase tracking-tight text-structure-navy group-hover:text-energy-red-bright transition-colors">
              LUCAS PERRONE
            </span>
            <span className="font-mono text-[10px] tracking-widest text-text-subtle uppercase font-semibold">
              BACKEND DEVELOPER // SPEC 3.0
            </span>
          </div>
        </a>

        {/* Navegação Limpa */}
        <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-9">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-headline text-base uppercase tracking-wider font-bold text-text-subtle hover:text-structure-navy transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA & Status */}
        <div className="flex items-center gap-4 sm:gap-5">
          <div className="hidden xl:flex items-center gap-2 pl-4 border-l border-outline-subtle">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-energy-red-bright opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-energy-red-bright" />
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-structure-navy">
              PROD_READY
            </span>
          </div>

          <a
            href="#contato"
            className="inline-flex items-center justify-center bg-structure-navy hover:bg-structure-deep text-white font-headline text-sm uppercase px-5 py-2.5 tracking-wider transition-all clip-corner font-bold border-l-2 border-highlight-yellow active:translate-y-0.5"
          >
            FALAR COM O DEV
            <span className="material-symbols-outlined ml-1.5 text-sm text-highlight-yellow">
              arrow_forward
            </span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 border border-outline-subtle text-structure-navy hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Menu mobile"
          className="md:hidden bg-white border-b border-outline-subtle px-6 py-4 flex flex-col gap-3 shadow-lg"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-headline text-lg uppercase tracking-wider font-bold text-structure-navy hover:text-energy-red-bright py-1.5 border-b border-outline-subtle/50 last:border-b-0 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

