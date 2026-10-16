import { useCallback, useEffect, useRef, useState } from 'react';
import { PROJECT_CASE_STUDIES } from '../../data/portfolioData';
import type { ProjectCaseStudy } from '../../types/portfolio';

function ProjectSlide({ project }: { project: ProjectCaseStudy }) {
  const [imgSrc, setImgSrc] = useState(project.image);

  const leftBorderColor =
    project.accentBorderColor === 'red'
      ? 'bg-energy-red-bright'
      : project.accentBorderColor === 'yellow'
        ? 'bg-highlight-yellow'
        : 'bg-structure-navy';

  const caseBadgeClass =
    project.id === 'sisu-2026'
      ? 'bg-structure-navy text-highlight-yellow border border-highlight-yellow/30'
      : project.id === 'iot-industrial'
        ? 'bg-structure-navy text-white border border-white/20'
        : 'bg-energy-red-bright text-white';

  const hudTopRightClass =
    project.hudTopRightVariant === 'yellow-outline'
      ? 'bg-structure-dark/90 backdrop-blur-sm text-highlight-yellow border border-highlight-yellow/40'
      : project.hudTopRightVariant === 'white-outline'
        ? 'bg-structure-dark/90 backdrop-blur-sm text-white border border-white/20'
        : 'bg-energy-red-bright text-white';

  const hudDotClass =
    project.hudBottomDotColor === 'red'
      ? 'bg-energy-red-bright'
      : project.hudBottomDotColor === 'yellow'
        ? 'bg-highlight-yellow'
        : 'bg-emerald-400';

  const hudBottomRightTextClass =
    project.hudBottomRightColor === 'yellow'
      ? 'text-highlight-yellow'
      : project.hudBottomRightColor === 'red'
        ? 'text-energy-red-bright'
        : 'text-emerald-400';

  const categorySkewClass =
    project.accentBorderColor === 'red'
      ? 'bg-energy-red-bright'
      : project.accentBorderColor === 'yellow'
        ? 'bg-highlight-yellow'
        : 'bg-structure-navy';

  const categoryTextClass =
    project.accentBorderColor === 'red'
      ? 'text-energy-red-bright'
      : 'text-structure-navy';

  return (
    <article className="bg-white tech-border grid grid-cols-1 lg:grid-cols-12 shadow-sm relative overflow-hidden">
      {/* Acabamento esportivo lateral */}
      <div className={`absolute top-0 left-0 w-1.5 h-full ${leftBorderColor} z-20`} />

      {/* Coluna Esquerda: Preview com Telemetria Visual */}
      <div className="lg:col-span-5 relative bg-structure-navy overflow-hidden min-h-[340px] lg:min-h-[460px] flex items-center justify-center group">
        <img
          src={imgSrc}
          alt={project.imageAlt}
          onError={() => {
            if (project.fallbackImage && imgSrc !== project.fallbackImage) {
              setImgSrc(project.fallbackImage);
            }
          }}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* HUD Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-structure-dark/90 via-structure-navy/20 to-transparent" />

        <div className="absolute top-4 left-5 flex items-center gap-2 z-10">
          <span
            className={`${caseBadgeClass} font-mono text-xs font-extrabold px-3 py-1 clip-badge shadow`}
          >
            {project.caseNumber}
          </span>
          <span
            className={`${hudTopRightClass} font-mono text-[10px] font-bold px-2.5 py-0.5 uppercase`}
          >
            {project.hudTopRightBadge}
          </span>
        </div>

        <div className="absolute bottom-4 left-5 right-5 z-10 font-mono text-xs text-white/90 flex items-center justify-between bg-structure-dark/80 backdrop-blur-md px-3 py-2 border border-white/10">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${hudDotClass} animate-ping`} />
            <span className="text-[11px] tracking-wider uppercase font-bold text-white">
              {project.hudBottomLeftLabel}
            </span>
          </div>
          <span className={`text-[10px] ${hudBottomRightTextClass} font-bold uppercase`}>
            {project.hudBottomRightLabel}
          </span>
        </div>
      </div>

      {/* Coluna Direita: Informações & Contratos de Engenharia */}
      <div className="lg:col-span-7 p-6 sm:p-9 flex flex-col justify-between space-y-6">
        <div>
          {/* Badges de Categoria & Status */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 ${categorySkewClass} -skew-x-12`} />
              <span
                className={`font-mono text-xs ${categoryTextClass} font-black uppercase tracking-wider`}
              >
                {project.category}
              </span>
            </div>

            {project.statusVariant === 'emerald' && (
              <span className="font-mono text-xs bg-emerald-500/10 text-emerald-700 border border-emerald-600/30 px-2.5 py-0.5 font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                {project.statusLabel}
              </span>
            )}

            {project.statusVariant === 'navy' && (
              <span className="font-mono text-xs bg-structure-navy text-white px-2.5 py-0.5 font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-highlight-yellow" />
                {project.statusLabel}
              </span>
            )}

            {project.statusVariant === 'navy-yellow' && (
              <span className="font-mono text-xs bg-structure-navy text-highlight-yellow px-2.5 py-0.5 font-bold flex items-center gap-1.5 border border-highlight-yellow/30">
                <span className="w-1.5 h-1.5 rounded-full bg-highlight-yellow animate-pulse" />
                {project.statusLabel}
              </span>
            )}

            {project.statusVariant === 'navy-red' && (
              <span className="font-mono text-xs bg-structure-navy text-white px-2.5 py-0.5 font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-energy-red-bright" />
                {project.statusLabel}
              </span>
            )}
          </div>

          <h3 className="font-headline text-3xl sm:text-4xl font-black uppercase text-structure-navy tracking-tight leading-tight">
            {project.title}
          </h3>

          <p className="font-body text-sm sm:text-base text-text-subtle leading-relaxed mt-3">
            {project.description}
          </p>

          {/* Tags de Stack */}
          <div className="pt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => {
              const tagClass =
                tag.variant === 'navy'
                  ? 'bg-structure-navy text-white clip-badge'
                  : tag.variant === 'red'
                    ? 'bg-energy-red-bright text-white clip-badge'
                    : tag.variant === 'yellow-soft'
                      ? 'bg-highlight-yellow/25 text-structure-navy border border-highlight-yellow/60'
                      : tag.variant === 'red-soft'
                        ? 'bg-energy-red-bright/10 text-energy-red-bright border border-energy-red-bright/30'
                        : 'bg-surface-container text-structure-navy border border-outline-subtle';

              return (
                <span
                  key={tag.label}
                  className={`px-2.5 py-1 font-mono text-xs font-bold ${tagClass}`}
                >
                  {tag.label}
                </span>
              );
            })}
          </div>

          {/* Métricas Telemetria */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-3 mt-5 pt-4 border-t border-outline-subtle text-center">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="p-3 bg-surface-light border border-outline-subtle"
                >
                  <span
                    className={`font-headline text-2xl sm:text-3xl font-black block ${
                      metric.highlight ? 'text-energy-red-bright' : 'text-structure-navy'
                    }`}
                  >
                    {metric.value}
                  </span>
                  <span className="font-mono text-[10px] text-text-subtle uppercase font-semibold">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Ações do Projeto com Live Demo + Repositório */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-outline-subtle">
          <div className="flex items-center gap-3">
            <a
              href={project.primaryAction.href}
              target="_blank"
              rel="noopener noreferrer"
              className={
                project.primaryAction.variant === 'red'
                  ? 'inline-flex items-center bg-energy-red-bright hover:bg-energy-red text-white font-headline text-sm uppercase px-5 py-2.5 tracking-wider font-extrabold clip-corner transition-all shadow-[0_2px_12px_rgba(227,6,19,0.3)] hover:scale-[1.02] border-l-2 border-highlight-yellow'
                  : 'inline-flex items-center bg-structure-navy hover:bg-structure-deep text-white font-headline text-sm uppercase px-5 py-2.5 tracking-wider font-extrabold clip-corner transition-all shadow border-l-2 border-highlight-yellow hover:scale-[1.02]'
              }
            >
              {project.primaryAction.label}
              <span className="material-symbols-outlined ml-1.5 text-sm text-highlight-yellow">
                {project.primaryAction.icon}
              </span>
            </a>

            <a
              href={project.secondaryAction.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-surface-container hover:bg-surface-container-high text-structure-navy font-headline text-sm uppercase px-4 py-2.5 tracking-wider font-bold border border-outline-subtle transition-colors"
            >
              {project.secondaryAction.label}
              <span className="material-symbols-outlined ml-1 text-sm text-text-subtle">
                {project.secondaryAction.icon}
              </span>
            </a>
          </div>

          <span className="font-mono text-[11px] text-text-subtle hidden sm:inline-block">
            {project.specFooter}
          </span>
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const touchStartX = useRef(0);
  const totalSlides = PROJECT_CASE_STUDIES.length;

  const goToSlide = useCallback(
    (index: number) => {
      setCurrentIndex(((index % totalSlides) + totalSlides) % totalSlides);
    },
    [totalSlides]
  );

  const nextSlide = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
      if (!isInView) return;

      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const formattedCurrent =
    currentIndex + 1 < 10 ? `0${currentIndex + 1}` : `${currentIndex + 1}`;
  const formattedTotal = totalSlides < 10 ? `0${totalSlides}` : `${totalSlides}`;

  return (
    <section
      id="projetos"
      ref={sectionRef}
      className="w-full bg-surface py-20 lg:py-24 border-b border-outline-subtle"
    >
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 space-y-8">
        {/* Header com Metadados & Controles do Carrossel */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-6 border-b-2 border-structure-navy gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-structure-navy text-white flex items-center justify-center font-headline text-2xl font-black clip-corner">
              03
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-energy-red-bright font-bold uppercase tracking-widest block">
                  ENGINEERING SPEC // PRODUTOS &amp; ARQUITETURAS
                </span>
                <span className="w-2 h-2 rounded-full bg-energy-red-bright animate-ping hidden sm:inline-block" />
              </div>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl uppercase text-structure-navy font-black tracking-tight">
                CASE STUDIES DE BACKEND
              </h2>
            </div>
          </div>

          {/* Telemetria do Carrossel e Botões de Navegação */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Indicador Numérico de Posição / HUD */}
            <div className="flex items-center gap-3 bg-surface-container px-4 py-2 border border-outline-subtle">
              <span className="font-mono text-[10px] text-text-subtle uppercase tracking-widest font-bold">
                PROJECT TELEMETRY
              </span>
              <span className="h-3 w-px bg-outline-subtle" />
              <div className="font-mono text-sm font-black text-structure-navy flex items-center gap-1">
                <span className="text-energy-red-bright text-base">{formattedCurrent}</span>
                <span className="text-text-subtle font-normal">/</span>
                <span>{formattedTotal}</span>
              </div>
            </div>

            {/* Controles Prev / Next Red Bull Telemetry Style */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Projeto Anterior"
                onClick={prevSlide}
                className="w-11 h-11 bg-white hover:bg-structure-navy text-structure-navy hover:text-white border-2 border-structure-navy flex items-center justify-center transition-all clip-corner group active:scale-95 shadow-sm cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl transition-transform group-hover:-translate-x-0.5">
                  arrow_back
                </span>
              </button>
              <button
                type="button"
                aria-label="Próximo Projeto"
                onClick={nextSlide}
                className="w-11 h-11 bg-energy-red-bright hover:bg-energy-red text-white flex items-center justify-center transition-all clip-corner group active:scale-95 shadow-[0_2px_10px_rgba(227,6,19,0.3)] cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-0.5">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Container do Carrossel */}
        <div
          className="relative w-full"
          onTouchStart={(e) => {
            touchStartX.current = e.changedTouches[0].screenX;
          }}
          onTouchEnd={(e) => {
            const touchEndX = e.changedTouches[0].screenX;
            if (touchStartX.current - touchEndX > 50) {
              nextSlide();
            } else if (touchEndX - touchStartX.current > 50) {
              prevSlide();
            }
          }}
        >
          <ProjectSlide
            key={PROJECT_CASE_STUDIES[currentIndex].id}
            project={PROJECT_CASE_STUDIES[currentIndex]}
          />
        </div>

        {/* Barra de Navegação Rápida com Indicadores Red Bull Telemetry Bar */}
        <div className="p-4 bg-white tech-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-structure-navy font-bold uppercase tracking-wider">
              PROJECT SELECTOR:
            </span>
            <span className="text-text-subtle font-mono text-xs hidden md:inline">
              CLI-READY FAST SWITCH
            </span>
          </div>

          {/* Indicadores Interativos em Barra / Badges Clicáveis */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {PROJECT_CASE_STUDIES.map((project, index) => {
              const isActive = index === currentIndex;
              return (
                <button
                  key={project.id}
                  type="button"
                  aria-label={`Ir para ${project.caseNumber}`}
                  aria-pressed={isActive}
                  onClick={() => goToSlide(index)}
                  className={`flex-1 sm:flex-none px-3 py-1.5 font-mono text-xs font-bold border transition-all clip-badge cursor-pointer ${
                    isActive
                      ? 'bg-structure-navy text-white border-structure-navy shadow-sm'
                      : 'bg-surface-container text-structure-navy border-outline-subtle hover:bg-surface-container-high'
                  }`}
                >
                  {project.selectorLabel}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

