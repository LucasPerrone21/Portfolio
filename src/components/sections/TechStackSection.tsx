import { TECH_DOMAIN_CATEGORIES } from '../../data/portfolioData';

export function TechStackSection() {
  return (
    <section
      id="tecnologias"
      className="w-full bg-surface-light py-20 lg:py-24 border-b border-outline-subtle"
    >
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b-2 border-structure-navy gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-structure-navy text-white flex items-center justify-center font-headline text-2xl font-black clip-corner">
              04
            </div>
            <div>
              <span className="font-mono text-xs text-energy-red-bright font-bold uppercase tracking-widest block">
                TECHNICAL ARSENAL // STACK MATRIZ
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl uppercase text-structure-navy font-black tracking-tight">
                TECNOLOGIAS &amp; DOMÍNIOS
              </h2>
            </div>
          </div>

          <span className="font-mono text-xs text-text-subtle uppercase">
            CALIBRADO PARA PRODUÇÃO
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_DOMAIN_CATEGORIES.map((category) => {
            const topBorderClass =
              category.topBorderColor === 'red'
                ? 'border-t-energy-red-bright'
                : category.topBorderColor === 'yellow'
                  ? 'border-t-highlight-yellow'
                  : 'border-t-structure-navy';

            const kickerColorClass =
              category.kickerColor === 'red'
                ? 'text-energy-red-bright'
                : 'text-structure-navy';

            return (
              <div
                key={category.title}
                className={`bg-white p-6 tech-border shadow-sm border-t-4 ${topBorderClass} space-y-4`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-headline text-xl font-black uppercase text-structure-navy">
                    {category.title}
                  </span>
                  <span className={`font-mono text-[10px] ${kickerColorClass} font-bold`}>
                    {category.kicker}
                  </span>
                </div>

                <p className="font-body text-xs text-text-subtle leading-relaxed">
                  {category.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-outline-subtle font-mono text-xs font-bold text-structure-navy">
                  {category.items.map((item) => {
                    const badgeClass =
                      item.badgeVariant === 'red'
                        ? 'text-energy-red-bright text-[10px]'
                        : item.badgeVariant === 'navy-yellow-pill'
                          ? 'text-highlight-yellow text-[10px] bg-structure-navy px-1'
                          : 'text-structure-navy text-[10px]';

                    return (
                      <div
                        key={item.name}
                        className="p-2 bg-surface-light border border-outline-subtle flex items-center justify-between"
                      >
                        <span>{item.name}</span>
                        <span className={badgeClass}>{item.badge}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

