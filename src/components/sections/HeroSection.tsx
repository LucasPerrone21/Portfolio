import { Fragment, useRef, useState, type MouseEvent } from 'react';
import { HERO_CORE_RUNTIMES, PROFILE_PHOTO } from '../../data/portfolioData';
import { ScrollReveal } from '../ui/ScrollReveal';
import { SoftAurora } from '../ui/SoftAurora';

interface TiltState {
  rotateX: number;
  rotateY: number;
  glowX: number;
  glowY: number;
  isHovered: boolean;
}

const MAX_TILT_DEG = 5;

export function HeroSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<TiltState>({
    rotateX: 0,
    rotateY: 0,
    glowX: 50,
    glowY: 50,
    isHovered: false,
  });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const element = cardRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Normalized coordinates from -1 to +1 relative to card center
    const nx = (x / rect.width - 0.5) * 2;
    const ny = (y / rect.height - 0.5) * 2;

    // Force pushes down where the mouse is, raising the opposite corners:
    // Bottom-left (nx < 0, ny > 0) -> rotateX < 0 (top rises, bottom sinks) & rotateY < 0 (right rises, left sinks)
    const rotateX = -ny * MAX_TILT_DEG;
    const rotateY = nx * MAX_TILT_DEG;

    setTilt({
      rotateX,
      rotateY,
      glowX: (x / rect.width) * 100,
      glowY: (y / rect.height) * 100,
      isHovered: true,
    });
  };

  const handleMouseLeave = () => {
    setTilt((prev) => ({
      ...prev,
      rotateX: 0,
      rotateY: 0,
      isHovered: false,
    }));
  };

  return (
    <section className="relative w-full bg-surface py-20 lg:py-28 border-b border-outline-subtle blueprint-grid overflow-hidden">
      {/* SoftAurora WebGL Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <SoftAurora
          speed={0.6}
          scale={1.5}
          brightness={1}
          color1="#E5ECF6"
          color2="#001A72"
          bandHeight={0.5}
          bandSpread={1}
          enableMouseInteraction
          mouseInfluence={0.25}
          lightMode
        />
      </div>

      {/* Linhas de precisão e acento cirúrgico */}
      <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none opacity-40 z-0">
        <div className="absolute right-0 top-12 w-96 h-96 bg-surface-container rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Badge de Engenharia de Precisão */}
        <ScrollReveal direction="down" duration={550}>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-2.5 py-0.5 bg-structure-navy text-white font-mono text-xs uppercase tracking-widest font-bold clip-badge">
              SOFTWARE ARCHITECTURE // SPEC_03
            </span>
            <span className="h-px w-10 bg-energy-red-bright" />
            <span className="font-mono text-xs text-text-subtle font-medium uppercase tracking-wider">
              HIGH AVAILABILITY &amp; HIGH CONCURRENCY
            </span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Lado Esquerdo: Mensagem Monumental Limpa */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="up" delay={80}>
              <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black uppercase text-structure-navy tracking-tight leading-[0.95]">
                LUCAS <span className="text-energy-red-bright">PERRONE</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={150}>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container text-structure-navy font-headline text-lg sm:text-xl font-bold uppercase tracking-wide border-l-4 border-highlight-yellow">
                Fullstack DEVELOPER
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={220}>
              <p className="font-body text-xl sm:text-2xl text-text-primary font-normal leading-relaxed max-w-xl">
                Criando{' '}
                <span className="font-semibold text-structure-navy underline decoration-highlight-yellow decoration-2 underline-offset-4">
                  interfaces fluidas
                </span>
                ,{' '}
                <span className="font-semibold text-structure-navy underline decoration-highlight-yellow decoration-2 underline-offset-4">
                  APIs resilientes
                </span>
                {' '}e{' '}
                <span className="font-semibold text-structure-navy underline decoration-highlight-yellow decoration-2 underline-offset-4">
                  automações eficientes
                </span>
                {' '}que sustentam produtos digitais escaláveis.
              </p>
            </ScrollReveal>

            {/* Stack Primária em Destaque Visual Exigido */}
            <ScrollReveal direction="up" delay={300}>
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
            </ScrollReveal>

            {/* Botões de Ação Hero */}
            <ScrollReveal direction="up" delay={380}>
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
            </ScrollReveal>
          </div>

          {/* Lado Direito: Card com Foto Editorial + Crachá Técnico */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="right" delay={200} duration={750}>
              <div
                className="relative"
                style={{ perspective: '1000px' }}
              >
                {/* Luz azul leve pulsando continuamente atrás do card */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-2 rounded-none animate-topology-blue-pulse"
                  style={{
                    background:
                      'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.28) 0%, rgba(0, 26, 114, 0.14) 55%, transparent 80%)',
                    filter: 'blur(14px)',
                  }}
                />

                {/* Card da Foto Interativo 3D */}
                <div
                  ref={cardRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  className="relative bg-white p-3 border-2 border-structure-navy overflow-hidden will-change-transform"
                  style={{
                    transform: `rotateX(${tilt.rotateX.toFixed(2)}deg) rotateY(${tilt.rotateY.toFixed(2)}deg) scale3d(${
                      tilt.isHovered ? '1.01, 1.01, 1.01' : '1, 1, 1'
                    })`,
                    transformStyle: 'preserve-3d',
                    transition: tilt.isHovered
                      ? 'transform 90ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 200ms ease'
                      : 'transform 520ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 520ms ease',
                    boxShadow: tilt.isHovered
                      ? '0 18px 42px rgba(0, 26, 114, 0.14), 0 0 28px rgba(59, 130, 246, 0.28)'
                      : '0 10px 30px rgba(0, 26, 114, 0.08), 0 0 20px rgba(59, 130, 246, 0.16)',
                  }}
                >
                  {/* Reflexo azul suave acompanhando o cursor dentro do card */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
                    style={{
                      opacity: tilt.isHovered ? 1 : 0,
                      background: `radial-gradient(280px circle at ${tilt.glowX}% ${tilt.glowY}%, rgba(59, 130, 246, 0.14), transparent 75%)`,
                    }}
                  />

                  <div className="relative z-10 aspect-square overflow-hidden bg-surface-container">
                    <img
                      src={PROFILE_PHOTO}
                      alt="Lucas Perrone Ramos - Fullstack Developer"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-structure-navy text-white font-mono text-[11px] font-bold px-2 py-0.5 uppercase tracking-wider clip-badge">
                      SYS_DEV // O DESENVOLVEDOR
                    </div>
                    <div className="absolute bottom-3 right-3 bg-energy-red-bright text-white font-headline text-xs font-black px-2.5 py-1 uppercase tracking-wider shadow">
                      BACKEND SPECIALIST
                    </div>
                  </div>

                  {/* Metadados de Formação */}
                  <div className="relative z-10 mt-4 p-3 bg-surface-light border border-outline-subtle flex items-center justify-between">
                    <div>
                      <span className="font-mono text-[10px] text-text-subtle uppercase block font-semibold">
                        GRADUAÇÃO SUPERIOR
                      </span>
                      <span className="font-headline text-base font-bold text-structure-navy uppercase">
                        Sistemas de Informação
                      </span>
                    </div>
                    <span className="font-mono text-xs font-bold text-energy-red-bright bg-energy-red-bright/10 px-2 py-1">
                      UFBA
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
