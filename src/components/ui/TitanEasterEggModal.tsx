import { useEffect } from 'react';

interface TitanEasterEggModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EXTRUSION_LAYERS = [-8, -6, -4, -2, 0, 2, 4, 6, 8];

export function TitanEasterEggModal({
  isOpen,
  onClose,
}: TitanEasterEggModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const timer = window.setTimeout(() => {
      onClose();
    }, 3900);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Animação 3D Logo TITAN"
      onClick={onClose}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/88 backdrop-blur-md animate-titan-backdrop cursor-pointer select-none overflow-hidden"
    >
      {/* Brilho Volumétrico de Fundo Amarelo/Laranja (#F2A900) */}
      <div className="pointer-events-none absolute flex items-center justify-center animate-titan-glow">
        {/* Camada externa difusa laranja/dourada */}
        <div
          className="w-[360px] h-[360px] sm:w-[520px] sm:h-[520px] rounded-full blur-[95px]"
          style={{
            background:
              'radial-gradient(circle, rgba(242, 169, 0, 0.95) 0%, rgba(255, 122, 0, 0.55) 48%, rgba(242, 169, 0, 0) 75%)',
          }}
        />
        {/* Núcleo intenso #F2A900 atrás da logo */}
        <div
          className="absolute w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] rounded-full blur-[35px]"
          style={{
            background:
              'radial-gradient(circle, #FFD24C 0%, #F2A900 55%, rgba(242, 169, 0, 0) 100%)',
          }}
        />
      </div>

      {/* Cena 3D com Perspectiva */}
      <div className="relative flex items-center justify-center titan-scene-3d">
        {/* Anel de Onda de Choque Dourado ao travar no centro */}
        <div
          className="pointer-events-none absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full border-2 border-[#F2A900] shadow-[0_0_50px_#F2A900] animate-titan-shockwave"
        />

        {/* Medalhão 3D da Logo TITAN */}
        <div className="relative w-52 h-52 sm:w-68 sm:h-68 titan-medallion-3d">
          {/* Camadas intermediárias para dar espessura física 3D ao girar */}
          {EXTRUSION_LAYERS.map((zOffset) => (
            <div
              key={zOffset}
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                transform: `translateZ(${zOffset}px)`,
                background:
                  'radial-gradient(circle, #B87D00 0%, #8F5E00 75%, #D99600 100%)',
                boxShadow: 'inset 0 0 8px rgba(0, 0, 0, 0.6)',
              }}
            />
          ))}

          {/* Face Frontal 3D */}
          <div
            className="absolute inset-0 flex items-center justify-center rounded-full"
            style={{
              transform: 'translateZ(10px)',
              backfaceVisibility: 'hidden',
              filter: 'drop-shadow(0 0 28px rgba(242, 169, 0, 0.65))',
            }}
          >
            <img
              src="/logoTITAN.svg"
              alt="Logo TITAN"
              className="w-full h-full object-contain"
              draggable={false}
            />
          </div>

          {/* Face Traseira 3D (visível durante os giros de 1080 graus) */}
          <div
            className="absolute inset-0 flex items-center justify-center rounded-full"
            style={{
              transform: 'rotateY(180deg) translateZ(10px)',
              backfaceVisibility: 'hidden',
              filter: 'drop-shadow(0 0 28px rgba(242, 169, 0, 0.65))',
            }}
          >
            <img
              src="/logoTITAN.svg"
              alt="Logo TITAN Verso"
              className="w-full h-full object-contain"
              draggable={false}
            />
          </div>
        </div>
      </div>

      {/* Assinatura Técnica Inferior */}
      <div className="mt-12 text-center pointer-events-none animate-titan-glow">
        <span className="font-headline text-2xl sm:text-3xl font-black uppercase tracking-[0.2em] text-[#F2A900] drop-shadow-[0_2px_16px_rgba(242,169,0,0.6)] block">
          TITAN // UFBA
        </span>
        <span className="font-mono text-[11px] uppercase tracking-widest text-white/75 mt-1 block">
          EMPRESA JÚNIOR DE ENGENHARIA DE COMPUTAÇÃO
        </span>
      </div>
    </div>
  );
}

