import {
  COMPETENCY_CARDS,
  CONSOLIDATED_SKILLS,
  PROFILE_PHOTO,
} from '../../data/portfolioData';

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="w-full bg-surface py-20 lg:py-24 border-b border-outline-subtle"
    >
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
        {/* Header da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b-2 border-structure-navy mb-14 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-structure-navy text-white flex items-center justify-center font-headline text-2xl font-black clip-corner">
              01
            </div>
            <div>
              <span className="font-mono text-xs text-energy-red-bright font-bold uppercase tracking-widest block">
                PROFILE // ENGENHARIA DE SOFTWARE
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl uppercase text-structure-navy font-black tracking-tight">
                SOBRE &amp; FORMAÇÃO ACADÊMICA
              </h2>
            </div>
          </div>

          <span className="font-mono text-xs font-bold uppercase tracking-widest text-text-subtle bg-surface-container px-3 py-1 border border-outline-subtle self-start md:self-auto">
            UFBA // SISTEMAS DE INFORMAÇÃO
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Foto Editorial Clean com Crachá Técnico */}
          <div className="lg:col-span-5">
            <div className="relative bg-white p-3 border-2 border-structure-navy shadow-md">
              <div className="relative aspect-square overflow-hidden bg-surface-container">
                <img
                  src={PROFILE_PHOTO}
                  alt="Lucas Perrone Ramos - Backend Developer"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute top-3 left-3 bg-structure-navy text-white font-mono text-[11px] font-bold px-2 py-0.5 uppercase tracking-wider clip-badge">
                  SYS_DEV //&nbsp;
                </div>
                <div className="absolute bottom-3 right-3 bg-energy-red-bright text-white font-headline text-xs font-black px-2.5 py-1 uppercase tracking-wider shadow">
                  BACKEND SPECIALIST
                </div>
              </div>

              {/* Metadados de Formação */}
              <div className="mt-4 p-3 bg-surface-light border border-outline-subtle flex items-center justify-between">
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

          {/* Texto Editorial e Especialidades */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-energy-red-bright font-bold">
                01.1 // ESPECIALIDADE EM ARQUITETURA DE SERVIDORES
              </span>
              <h3 className="font-headline text-2xl sm:text-3xl uppercase text-structure-navy font-black tracking-tight leading-snug">
                DISCIPLINA DE ENGENHARIA, CÓDIGO DETERMINÍSTICO E RESILIÊNCIA OPERACIONAL
              </h3>
              <p className="font-body text-base text-text-subtle leading-relaxed">
                Com base sólida construída na Universidade Federal da Bahia (
                <span className="font-semibold text-structure-navy">UFBA</span>), atuo com
                foco integral no desenvolvimento de serviços backend de alta fidelidade
                técnica. Minha prática combina o dinamismo do{' '}
                <span className="font-semibold text-structure-navy">Node.js / NestJS</span> e a
                robustez do <span className="font-semibold text-structure-navy">Python</span>{' '}
                para arquitetar APIs REST determinísticas, rotinas analíticas e automações que
                eliminam processos manuais ineficientes.
              </p>
            </div>

            {/* Grade de Competências Estruturadas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {COMPETENCY_CARDS.map((card) => {
                const borderAccent =
                  card.accentColor === 'red'
                    ? 'border-l-energy-red-bright'
                    : card.accentColor === 'yellow'
                      ? 'border-l-highlight-yellow'
                      : 'border-l-structure-navy';

                return (
                  <div
                    key={card.title}
                    className={`p-4 bg-surface-container-low border-l-4 ${borderAccent} border-y border-r border-outline-subtle`}
                  >
                    <span className="font-headline text-base uppercase text-structure-navy font-bold block mb-1">
                      {card.title}
                    </span>
                    <p className="font-body text-xs text-text-subtle leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Competências Chave Consolidadas */}
            <div className="pt-4 space-y-3">
              <span className="font-mono text-xs font-bold text-structure-navy uppercase tracking-widest block">
                COMPETÊNCIAS CHAVE CONSOLIDADAS:
              </span>
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs font-bold">
                {CONSOLIDATED_SKILLS.map((skill) => {
                  const badgeClasses =
                    skill.variant === 'navy'
                      ? 'bg-structure-navy text-white shadow-sm'
                      : skill.variant === 'red'
                        ? 'bg-energy-red-bright text-white shadow-sm'
                        : skill.variant === 'dark'
                          ? 'bg-structure-dark text-white shadow-sm'
                          : skill.variant === 'yellow'
                            ? 'bg-highlight-yellow text-structure-navy font-bold shadow-sm'
                            : 'bg-surface-container border border-outline-subtle text-structure-navy shadow-sm';

                  return (
                    <span key={skill.label} className={`px-3 py-1.5 ${badgeClasses}`}>
                      {skill.label}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs font-bold text-structure-navy uppercase">
                COMPROMISSO:
              </span>
              <span className="font-body text-xs text-text-subtle">
                Zero tempo ocioso não planejado, cobertura de testes de integração e
                observabilidade detalhada.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

