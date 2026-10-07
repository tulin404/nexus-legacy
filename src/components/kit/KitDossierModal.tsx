"use client";

import { useCart } from "@/hooks/useCart";

const steps = [
  [
    "1. Entrevistas Confidenciais",
    "Gravação em 4K e áudio com sócios fundadores, presidentes e colaboradores veteranos.",
  ],
  [
    "2. Inventário de Arquivos e Plantas",
    "Triagem forense em caixas esquecidas, registros notariais e fotos de fábrica.",
  ],
  [
    "3. Fabricação Artesanal na Suíça & Brasil",
    "Encadernação manual, prensagem em prata e lapidação do token com chave digital inviolável.",
  ],
] as const;

export function KitDossierModal() {
  const { isKitModalOpen, closeKitDossier, requestKitBudget } = useCart();

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-surface-container-lowest/80 p-4 backdrop-blur-md transition-opacity duration-300 ${
        isKitModalOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      onClick={closeKitDossier}
      aria-hidden={!isKitModalOpen}
    >
      <div
        className="relative flex w-full max-w-2xl flex-col gap-space-md rounded-xl bg-surface-container-low p-space-lg shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">
            Dossiê de Produção Institucional
          </span>
          <button
            type="button"
            onClick={closeKitDossier}
            className="text-on-surface-variant hover:text-primary"
            aria-label="Fechar dossiê"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        <h3 className="font-headline-md text-headline-md text-primary">
          Protocolo de Criação do Kit História da Empresa
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant">
          O projeto é estruturado em etapas colaborativas entre historiadores da Nexus Legacy, curadores de arte e a diretoria da sua organização:
        </p>

        <div className="flex flex-col gap-space-sm font-body-md text-body-md text-on-surface">
          {steps.map(([title, description]) => (
            <div key={title} className="rounded bg-surface-container p-space-sm">
              <strong className="block font-medium text-primary">{title}</strong>
              <span className="font-caption text-caption text-on-surface-variant">
                {description}
              </span>
            </div>
          ))}
        </div>

        <div className="flex gap-space-sm pt-space-xs">
          <button
            type="button"
            onClick={() => {
              requestKitBudget();
              closeKitDossier();
            }}
            className="w-full rounded bg-secondary py-space-md font-label-caps text-label-caps uppercase tracking-wider text-on-secondary-fixed transition-colors hover:bg-secondary-fixed"
          >
            Solicitar Agendamento com a Curadoria
          </button>
        </div>
      </div>
    </div>
  );
}
