import { SectionHeading } from "../home/SectionHeading";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { RequestRestorationButton } from "../cart/RequestRestorationButton";

const phases = [
  [
    "FASE 01",
    "Análise & Espectrometria",
    "Diagnóstico espectral de danos físicos, fungos ativos, oxidação de sulfeto e mapeamento de textura do papel original.",
  ],
  [
    "FASE 02",
    "Restauração Forense",
    "Reconstrução microscópica pixel a pixel, remoção manual de vincos e recomposição de áreas de sombra sem filtros destrutivos.",
  ],
  [
    "FASE 03",
    "Calibração de Prata",
    "Equalização dos tons de preto e platina segundo as fórmulas químicas da emulsão da década em que a imagem foi concebida.",
  ],
  [
    "FASE 04",
    "Entrega & Custódia",
    "Matriz RAW digital 16-bit com backup em nuvem permanente + impressão fine art com pigmento mineral certificada.",
  ],
] as const;

export function RestorationSection() {
  return (
    <section
      className="relative w-full bg-surface-container-lowest px-margin-mobile py-space-xl lg:px-margin"
      id="restauracao"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-space-xl">
        <div className="flex flex-col justify-between gap-space-md md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Restauração Forense & Artística"
            title="O tempo muda as imagens. Nós preservamos suas histórias."
            description="Recuperação físico-digital minuciosa que elimina oxidações, rasgos, poeira e desbotamentos sem descaracterizar a autenticidade do grão original."
          />
          <RequestRestorationButton />
        </div>

        <BeforeAfterSlider />

        <div className="w-full pt-space-lg">
          <h3 className="mb-space-lg font-headline-sm text-headline-sm text-primary">
            Protocolo Museológico em Quatro Fases
          </h3>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-4">
            {phases.map(([phase, title, description]) => (
              <div
                key={phase}
                className="flex flex-col gap-space-xs rounded-xl bg-surface-container p-space-lg"
              >
                <span className="font-label-caps text-label-caps tracking-widest text-secondary">
                  {phase}
                </span>
                <h4 className="font-title-editorial text-title-editorial text-primary">
                  {title}
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
