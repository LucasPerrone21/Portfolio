import { useState } from 'react';
import { CONTACT_INFO } from '../../data/portfolioData';
import { ScrollReveal } from '../ui/ScrollReveal';

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.email);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2500);
    } catch {
      window.location.href = `mailto:${CONTACT_INFO.email}`;
    }
  };

  return (
    <section
      id="contato"
      className="w-full bg-structure-navy text-white py-20 lg:py-24 relative overflow-hidden blueprint-grid-dark border-t-4 border-energy-red-bright"
    >
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <ScrollReveal direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-structure-deep border border-highlight-yellow/30">
                <span className="w-2 h-2 rounded-full bg-highlight-yellow animate-ping" />
                <span className="font-mono text-xs uppercase tracking-widest text-highlight-yellow font-bold">
                  COMMUNICATION CHANNEL // DIRECT TO BACKEND DEV
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={80}>
              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[0.95]">
                VAMOS CONSTRUIR <span className="text-highlight-yellow">ALGO.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={150}>
              <p className="font-body text-lg text-white/80 max-w-2xl leading-relaxed">
                Projetos backend que exigem consistência sob estresse, migração para
                microsserviços NestJS, automação de dados com Python ou desenvolvimento de
                APIs escaláveis.
              </p>
            </ScrollReveal>

            {/* Links Diretos de Contato */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <ScrollReveal direction="up" delay={220} className="h-full">
                <a
                  href={CONTACT_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-full p-4 bg-structure-deep hover:bg-structure-dark border border-white/15 hover:border-highlight-yellow transition-all group block"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-white/60">REPOSITÓRIOS</span>
                    <span className="material-symbols-outlined text-sm text-highlight-yellow">
                      north_east
                    </span>
                  </div>
                  <span className="font-headline text-xl uppercase font-black text-white group-hover:text-highlight-yellow block mt-2">
                    GITHUB
                  </span>
                  <span className="font-mono text-xs text-white/70 truncate block">
                    {CONTACT_INFO.githubDisplay}
                  </span>
                </a>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={300} className="h-full">
                <a
                  href={CONTACT_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-full p-4 bg-structure-deep hover:bg-structure-dark border border-white/15 hover:border-energy-red-bright transition-all group block"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-white/60">CONEXÃO</span>
                    <span className="material-symbols-outlined text-sm text-energy-red-bright">
                      north_east
                    </span>
                  </div>
                  <span className="font-headline text-xl uppercase font-black text-white group-hover:text-energy-red-bright block mt-2">
                    LINKEDIN
                  </span>
                  <span className="font-mono text-xs text-white/70 truncate block">
                    {CONTACT_INFO.linkedinDisplay}
                  </span>
                </a>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={380} className="h-full">
                <div className="h-full p-4 bg-structure-deep border border-white/15 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs text-white/60">E-MAIL DIRETO</span>
                    <span className="font-headline text-xl uppercase font-black text-white block mt-2 truncate">
                      {CONTACT_INFO.email}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="mt-3 inline-flex items-center gap-1 font-mono text-xs text-highlight-yellow hover:text-white uppercase font-bold transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-sm">
                      {copied ? 'check' : 'content_copy'}
                    </span>
                    <span>{copied ? 'COPIADO!' : 'COPIAR ENDEREÇO'}</span>
                  </button>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Card de Disparo Rápido */}
          <div className="lg:col-span-4">
            <ScrollReveal direction="right" delay={240}>
              <div className="p-8 bg-structure-deep border-2 border-highlight-yellow/40 space-y-5">
                <span className="font-mono text-xs uppercase text-energy-red-bright font-black tracking-widest block">
                  STATUS: DISPONÍVEL P/ SPRINT
                </span>
                <h3 className="font-headline text-2xl font-black uppercase text-white leading-tight">
                  CHAMA NO WHATSAPP
                </h3>
                <p className="font-body text-xs text-white/75 leading-relaxed">
                  Retorno com foco objetivo na modelagem técnica, prazo de entrega e
                  requisitos de banco de dados.
                </p>
                <a
                  href={`https://wa.me/5571986661929?text=Ol%C3%A1%2C%20Lucas.%20Gostaria%20de%20discutir%20um%20projeto%20com%20você.`}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  className={"w-full inline-flex items-center justify-center bg-energy-red-bright hover:bg-energy-red text-white font-headline text-base uppercase py-3.5 px-6 tracking-wider font-extrabold clip-corner transition-all shadow-[0_4px_16px_rgba(227,6,19,0.4)] border-t border-highlight-yellow"}
                >
                  ENVIAR MENSAGEM
                  <span className="material-symbols-outlined ml-2 text-highlight-yellow text-sm">
                    send
                  </span>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
