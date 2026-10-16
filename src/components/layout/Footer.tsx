import { CONTACT_INFO } from '../../data/portfolioData';

export function Footer() {
  return (
    <footer className="w-full bg-structure-dark text-white py-8 border-t border-structure-navy">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-energy-red-bright" />
          <span className="font-bold text-white uppercase">Lucas Perrone Ramos</span>
          <span className="text-white/40">·</span>
          <span className="text-highlight-yellow uppercase">Backend Developer</span>
          <span className="text-white/40">·</span>
          <span className="text-white/70">© 2026</span>
        </div>

        <div className="flex items-center gap-6 text-white/70">
          <a
            href={CONTACT_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-highlight-yellow transition-colors"
          >
            GITHUB
          </a>
          <a
            href={CONTACT_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-highlight-yellow transition-colors"
          >
            LINKEDIN
          </a>
          <a href="#sobre" className="hover:text-highlight-yellow transition-colors">
            TOPO ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

