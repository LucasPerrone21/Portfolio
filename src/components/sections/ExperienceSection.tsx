import { useCallback, useState, type ReactNode } from 'react';
import { CAREER_MILESTONES } from '../../data/portfolioData';
import type { CareerMilestone } from '../../types/portfolio';
import { ScrollReveal } from '../ui/ScrollReveal';
import { TitanEasterEggModal } from '../ui/TitanEasterEggModal';

function highlightTerms(text: string, terms: string[]): ReactNode {
  if (!terms.length) return text;
  const escaped = terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const regex = new RegExp(`(${escaped.join('|')})`, 'g');
  const parts = text.split(regex);

  return parts.map((part, idx) =>
    terms.includes(part) ? (
      <span key={idx} className="font-semibold text-structure-navy">
        {part}
      </span>
    ) : (
      part
    )
  );
}

function renderOrganizationWithEasterEgg(
  organization: string,
  onTriggerTitan: () => void
): ReactNode {
  if (!organization.includes('TITAN')) {
    return organization;
  }

  const parts = organization.split(/(TITAN)/g);
  return parts.map((part, idx) =>
    part === 'TITAN' ? (
      <button
        key={idx}
        type="button"
        onClick={onTriggerTitan}
        title="Clique para ver a animação 3D da TITAN"
        className="inline-flex items-center gap-1 font-headline font-black uppercase text-structure-navy hover:text-[#F2A900] underline decoration-[#F2A900] decoration-2 underline-offset-4 transition-all cursor-pointer hover:scale-105 active:scale-95"
      >
        TITAN
      </button>
    ) : (
      <span key={idx}>{part}</span>
    )
  );
}

function MilestoneCard({
  milestone,
  index,
  onTriggerTitan,
}: {
  milestone: CareerMilestone;
  index: number;
  onTriggerTitan: () => void;
}) {
  const pinBorderClass =
    milestone.accentTheme === 'red'
      ? 'border-energy-red-bright'
      : milestone.accentTheme === 'yellow'
        ? 'border-highlight-yellow'
        : 'border-structure-navy';

  const pinInnerDotClass =
    milestone.accentTheme === 'red'
      ? 'bg-energy-red-bright animate-pulse'
      : milestone.accentTheme === 'navy'
        ? 'bg-highlight-yellow'
        : 'bg-structure-navy';

  const leftAccentStripeClass =
    milestone.accentTheme === 'red'
      ? 'bg-energy-red-bright'
      : milestone.accentTheme === 'navy'
        ? 'bg-structure-navy'
        : milestone.accentTheme === 'yellow'
          ? 'bg-highlight-yellow'
          : 'bg-outline-subtle';

  return (
    <ScrollReveal direction="up" delay={index * 110}>
      <div className="relative flex flex-col md:flex-row gap-6 pl-12 sm:pl-20 group">
        {/* Nó do Roadmap (Indicator Pin) */}
        <div
          className={`absolute left-1.5 sm:left-5.5 top-1.5 w-6 h-6 rounded-full bg-white border-4 ${pinBorderClass} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}
        >
          <span className={`w-2 h-2 rounded-full ${pinInnerDotClass}`} />
        </div>

        {/* Card Técnico do Marco */}
        <article className="flex-1 bg-white tech-border p-6 sm:p-8 shadow-sm relative overflow-hidden">
          <div className={`absolute top-0 left-0 w-1.5 h-full ${leftAccentStripeClass}`} />

          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                {milestone.accentTheme === 'red' && (
                  <>
                    <span className="px-2.5 py-0.5 bg-energy-red-bright text-white font-mono text-[10px] font-black uppercase tracking-wider clip-badge flex items-center gap-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                      {milestone.statusBadge}
                    </span>
                    <span className="px-2.5 py-0.5 bg-structure-navy text-highlight-yellow font-mono text-[11px] font-bold uppercase tracking-wider">
                      {milestone.period}
                    </span>
                  </>
                )}

                {milestone.accentTheme === 'navy' && (
                  <>
                    <span className="px-2.5 py-0.5 bg-structure-navy text-white font-mono text-[10px] font-black uppercase tracking-wider clip-badge flex items-center gap-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-highlight-yellow animate-ping" />
                      {milestone.statusBadge}
                    </span>
                    <span className="px-2.5 py-0.5 bg-surface-container text-structure-navy font-mono text-[11px] font-bold uppercase tracking-wider border border-outline-subtle">
                      {milestone.period}
                    </span>
                  </>
                )}

                {milestone.accentTheme === 'muted' && (
                  <>
                    <span className="px-2.5 py-0.5 bg-surface-container text-structure-navy font-mono text-[10px] font-black uppercase tracking-wider border border-outline-subtle">
                      {milestone.statusBadge}
                    </span>
                    <span className="px-2.5 py-0.5 bg-surface-container text-text-subtle font-mono text-[11px] font-semibold uppercase tracking-wider">
                      {milestone.period}
                    </span>
                  </>
                )}

                {milestone.accentTheme === 'yellow' && (
                  <>
                    <span className="px-2.5 py-0.5 bg-highlight-yellow text-structure-navy font-mono text-[10px] font-black uppercase tracking-wider clip-badge">
                      {milestone.statusBadge}
                    </span>
                    <span className="px-2.5 py-0.5 bg-structure-navy text-white font-mono text-[11px] font-bold uppercase tracking-wider">
                      {milestone.period}
                    </span>
                  </>
                )}
              </div>

              <h3 className="font-headline text-2xl sm:text-3xl font-black uppercase text-structure-navy tracking-tight">
                {milestone.role}
              </h3>
              <span
                className={`font-headline text-lg sm:text-xl font-bold uppercase block mt-0.5 ${
                  milestone.accentTheme === 'red'
                    ? 'text-energy-red-bright'
                    : milestone.accentTheme === 'navy'
                      ? 'text-structure-navy/80'
                      : milestone.accentTheme === 'muted'
                        ? 'text-text-subtle'
                        : 'text-structure-navy'
                }`}
              >
                {renderOrganizationWithEasterEgg(milestone.organization, onTriggerTitan)}
              </span>
            </div>

            {/* Domain Badge or Technical Victory Callout */}
            {milestone.domainBadge && (
              <div
                className={`inline-flex items-center gap-2 font-mono text-xs font-bold px-3 py-1.5 self-start border border-outline-subtle ${
                  milestone.accentTheme === 'muted'
                    ? 'text-text-subtle bg-surface-light gap-1.5'
                    : 'text-structure-navy bg-surface-container'
                }`}
              >
                {milestone.domainBadge.dotColor && (
                  <span className="w-2 h-2 rounded-full bg-highlight-yellow" />
                )}
                {milestone.domainBadge.icon && (
                  <span
                    className={`material-symbols-outlined text-sm ${
                      milestone.domainBadge.icon === 'check_circle'
                        ? 'text-energy-red-bright'
                        : 'text-highlight-yellow'
                    }`}
                  >
                    {milestone.domainBadge.icon}
                  </span>
                )}
                {milestone.domainBadge.label}
              </div>
            )}

            {milestone.technicalVictory && (
              <div className="p-3 bg-structure-navy text-white rounded-none border-l-4 border-highlight-yellow max-w-sm shadow">
                <span className="font-mono text-[10px] text-highlight-yellow uppercase tracking-widest font-bold block">
                  {milestone.technicalVictory.kicker}
                </span>
                <span className="font-headline text-xl sm:text-2xl font-black uppercase text-white tracking-tight flex items-center gap-2 mt-0.5">
                  <span>{milestone.technicalVictory.from}</span>
                  <span className="text-energy-red-bright font-mono">➔</span>
                  <span className="text-highlight-yellow">{milestone.technicalVictory.to}</span>
                </span>
                <span className="font-body text-[11px] text-white/80 block mt-0.5 leading-snug">
                  {milestone.technicalVictory.description}
                </span>
              </div>
            )}
          </div>

          <p className="font-body text-sm sm:text-base text-text-subtle leading-relaxed mb-6">
            {highlightTerms(milestone.description, milestone.highlights)}
          </p>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-outline-subtle">
            {milestone.tags.map((tag) => {
              const tagClasses =
                tag.variant === 'navy'
                  ? 'bg-structure-navy text-white clip-badge'
                  : tag.variant === 'yellow'
                    ? 'bg-highlight-yellow text-structure-navy'
                    : tag.variant === 'red'
                      ? 'bg-energy-red-bright text-white'
                      : tag.variant === 'red-outline'
                        ? 'bg-energy-red-bright/10 text-energy-red-bright border border-energy-red-bright/30'
                        : 'bg-surface-container text-structure-navy border border-outline-subtle';

              return (
                <span
                  key={tag.label}
                  className={`px-2.5 py-1 font-mono text-xs font-bold ${tagClasses}`}
                >
                  {tag.label}
                </span>
              );
            })}
          </div>
        </article>
      </div>
    </ScrollReveal>
  );
}

export function ExperienceSection() {
  const [isTitanEasterEggOpen, setIsTitanEasterEggOpen] = useState(false);

  const handleOpenTitanEasterEgg = useCallback(() => {
    setIsTitanEasterEggOpen(true);
  }, []);

  const handleCloseTitanEasterEgg = useCallback(() => {
    setIsTitanEasterEggOpen(false);
  }, []);

  return (
    <section
      id="experiencia"
      className="w-full bg-surface-light py-20 lg:py-24 border-b border-outline-subtle"
    >
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 space-y-12">
        {/* Header da Seção de Roadmap */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b-2 border-structure-navy gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-structure-navy text-white flex items-center justify-center font-headline text-2xl font-black clip-corner border-l-4 border-energy-red-bright">
                02
              </div>
              <div>
                <span className="font-mono text-xs text-energy-red-bright font-bold uppercase tracking-widest block">
                  CAREER ROADMAP // PROGRESSÃO TÉCNICA EM PRODUÇÃO
                </span>
                <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl uppercase text-structure-navy font-black tracking-tight">
                  ROADMAP DE CARREIRA &amp; TRAJETÓRIA
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-surface-container px-3.5 py-1.5 border border-outline-subtle self-start md:self-auto">
              <span className="w-2 h-2 rounded-full bg-energy-red-bright animate-ping" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-structure-navy">
                TIMELINE CRONOLÓGICA TÉCNICA
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Container da Timeline / Roadmap com Spine Técnica Conectora */}
        <div className="relative pt-4 pb-8">
          {/* Linha dorsal técnica (Spine) */}
          <div className="absolute left-4 sm:left-8 top-8 bottom-8 w-0.5 bg-gradient-to-t from-structure-navy/20 via-energy-red-bright to-structure-navy z-0" />

          <div className="space-y-12 relative z-10">
            {CAREER_MILESTONES.map((milestone, index) => (
              <MilestoneCard
                key={milestone.id}
                milestone={milestone}
                index={index}
                onTriggerTitan={handleOpenTitanEasterEgg}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Easter Egg 3D da Logo TITAN */}
      <TitanEasterEggModal
        isOpen={isTitanEasterEggOpen}
        onClose={handleCloseTitanEasterEgg}
      />
    </section>
  );
}
