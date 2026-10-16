import { Fragment } from 'react';
import { HERO_CORE_RUNTIMES, SYSTEM_TOPOLOGY_NODES } from '../../data/portfolioData';

export function HeroSection() {
  return (
    <section className="relative w-full bg-surface py-20 lg:py-28 border-b border-outline-subtle blueprint-grid overflow-hidden">
      {/* Linhas de precisão e acento cirúrgico */}
      <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none opacity-40">
        <div className="absolute right-0 top-12 w-96 h-96 bg-surface-container rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Badge de Engenharia de Precisão */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="px-2.5 py-0.5 bg-structure-navy text-white font-mono text-xs uppercase tracking-widest font-bold clip-badge">
            BACKEND ARCHITECTURE // SPEC_03
          </span>
          <span className="h-px w-10 bg-energy-red-bright" />
          <span className="font-mono text-xs text-text-subtle font-medium uppercase tracking-wider">
            HIGH AVAILABILITY &amp; HIGH CONCURRENCY
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Lado Esquerdo: Mensagem Monumental Limpa */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black uppercase text-structure-navy tracking-tight leading-[0.95]">
              LUCAS <span className="text-energy-red-bright">PERRONE</span>
            </h1>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container text-structure-navy font-headline text-lg sm:text-xl font-bold uppercase tracking-wide border-l-4 border-highlight-yellow">
              Fullstack DEVELOPER
            </div>

            <p className="font-body text-xl sm:text-2xl text-text-primary font-normal leading-relaxed max-w-xl">
              Construindo{' '}
              <span className="font-semibold text-structure-navy underline decoration-highlight-yellow decoration-2 underline-offset-4">
                APIs resilientes
              </span>
              , automações de alta precisão e sistemas escaláveis de missão crítica.
            </p>

            {/* Stack Primária em Destaque Visual Exigido */}
            <div className="pt-2">
              <span className="font-mono text-xs text-text-subtle uppercase tracking-widest font-bold block mb-3">
                // CORE RUNTIMES &amp; INFRASTRUCTURE
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {HERO_CORE_RUNTIMES.map((runtime, index) => (
                  <Fragment key={runtime.label}>
                    <span
                      className={
                        runtime.variant === 'navy'
                          ? 'px-3 py-1.5 bg-structure-navy text-white font-mono text-xs font-bold shadow-sm clip-badge'
                          : runtime.variant === 'navy-yellow'
                            ? 'px-3 py-1.5 bg-structure-navy text-highlight-yellow font-mono text-xs font-bold shadow-sm clip-badge'
                            : 'px-3 py-1.5 bg-white border border-structure-navy/20 font-mono text-xs font-bold text-structure-navy shadow-sm rounded-none'
                      }
                    >
                      {runtime.label}
                    </span>
                    {index < HERO_CORE_RUNTIMES.length - 1 && (
                      <span className="text-energy-red-bright font-black">·</span>
                    )}
                  </Fragment>
                ))}
              </div>
            </div>

            {/* Botões de Ação Hero */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#projetos"
                className="inline-flex items-center bg-energy-red-bright hover:bg-energy-red text-white font-headline text-base uppercase px-7 py-3.5 tracking-wider font-extrabold clip-corner transition-all shadow-[0_4px_16px_rgba(227,6,19,0.3)] hover:scale-[1.02]"
              >
                VER CASE STUDIES
                <span className="material-symbols-outlined ml-2 text-highlight-yellow text-lg">
                  terminal
                </span>
              </a>
              <a
                href="#experiencia"
                className="inline-flex items-center bg-white hover:bg-surface-container text-structure-navy font-headline text-base uppercase px-6 py-3.5 tracking-wider font-bold border-2 border-structure-navy/20 transition-all clip-corner"
              >
                EXPERIÊNCIA TÉCNICA
              </a>
            </div>
          </div>

          {/* Lado Direito: DIAGRAMA TÉCNICO DE NÓS DE BACKEND (PRECISION ARCHITECTURE) */}
          <div className="lg:col-span-5">
            <div className="bg-white p-6 rounded-none tech-border shadow-[0_10px_30px_rgba(0,26,114,0.06)] relative">
              {/* Top Bar da Janela de Telemetria */}
              <div className="flex items-center justify-between pb-4 border-b border-outline-subtle mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-energy-red-bright" />
                  <span className="w-2.5 h-2.5 rounded-full bg-highlight-yellow" />
                  <span className="w-2.5 h-2.5 rounded-full bg-structure-navy" />
                  <span className="font-mono text-xs font-bold text-structure-navy ml-2">
                    SYSTEM_TOPOLOGY.DIAG
                  </span>
                </div>
                <span className="font-mono text-[11px] text-energy-red-bright font-black uppercase">
                  LATÊNCIA p99: 14ms
                </span>
              </div>

              {/* Blueprint Interativo dos Nós */}
              <div className="space-y-3 font-mono text-xs">
                {SYSTEM_TOPOLOGY_NODES.map((node, index) => (
                  <Fragment key={node.id}>
                    <div
                      className={
                        node.variant === 'red'
                          ? 'p-3.5 bg-surface-light border-l-4 border-energy-red-bright border-y border-r border-outline-subtle flex items-center justify-between'
                          : 'p-3.5 bg-surface-light border border-outline-subtle flex items-center justify-between'
                      }
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={
                            node.variant === 'red'
                              ? 'w-7 h-7 bg-energy-red-bright text-white flex items-center justify-center font-bold text-[11px] clip-badge'
                              : node.variant === 'navy-yellow'
                                ? 'w-7 h-7 bg-structure-navy text-highlight-yellow flex items-center justify-center font-bold text-[11px] clip-badge'
                                : 'w-7 h-7 bg-structure-navy text-white flex items-center justify-center font-bold text-[11px] clip-badge'
                          }
                        >
                          {node.id}
                        </span>
                        <div>
                          <span className="font-bold text-structure-navy block">
                            {node.title}
                          </span>
                          <span className="text-[11px] text-text-subtle font-mono">
                            {node.subtitle}
                          </span>
                        </div>
                      </div>
                      <span
                        className={
                          node.variant === 'red'
                            ? 'px-2 py-0.5 bg-energy-red-bright/10 text-energy-red-bright font-mono text-[10px] font-bold'
                            : node.variant === 'navy-yellow'
                              ? 'px-2 py-0.5 bg-highlight-yellow/20 text-structure-navy font-mono text-[10px] font-bold'
                              : 'px-2 py-0.5 bg-surface-container font-mono text-[10px] text-structure-navy font-bold'
                        }
                      >
                        {node.badge}
                      </span>
                    </div>

                    {index < SYSTEM_TOPOLOGY_NODES.length - 1 && (
                      <div className="flex justify-center -my-1">
                        <div
                          className={`w-px h-4 ${
                            index === 0 ? 'bg-energy-red-bright' : 'bg-highlight-yellow'
                          }`}
                        />
                      </div>
                    )}
                  </Fragment>
                ))}
              </div>

              {/* Footer de Métricas do Diagrama */}
              <div className="mt-5 pt-4 border-t border-outline-subtle flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-energy-red-bright animate-pulse" />
                  <span className="text-text-subtle">ISOLAMENTO: DOCKER CT</span>
                </div>
                <span className="text-structure-navy font-bold">THROUGHPUT: 1.2k req/s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

