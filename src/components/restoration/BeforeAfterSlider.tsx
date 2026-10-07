"use client";

import { useState } from "react";

export function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);

  return (
    <div className="flex w-full max-w-5xl flex-col gap-space-md rounded-xl bg-surface-container-low p-space-md shadow-2xl sm:p-space-lg">
      <div className="flex items-center justify-between px-space-xs font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-error" />
          Original Danificado (1940)
        </span>
        <span className="hidden font-caption text-caption lowercase tracking-normal text-secondary sm:inline">
          ← Arraste o cursor para comparar →
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-secondary" />
          Restauração Nexus Gelatina de Prata
        </span>
      </div>

      <div className="relative aspect-square max-h-145 w-full cursor-ew-resize select-none overflow-hidden rounded-lg bg-surface-container-lowest">
        <img
          alt="Retrato arquivístico restaurado da Nexus Legacy"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcXu1SKJczncDVv2DUY8pQjjRB8UndFwwjuZsbza57uP1_XD_omhezUk_9qgqam0On4XDy_4aCmQX2_dBzvT0kboQGrfeoo2zSnw5sZBg1FKWHrsXSA6Do7xMtZheFLiZZ3GsXKNWKIg1VzLzwKgtXIpSdvr4dfo9QSIdEdUdemWWqdkStkTqzzTmRl50GpMVFIOKYxqeBJx_2CL82zSWS126u-xedIDCZhm4xN7g"
        />

        <div
          className="pointer-events-none absolute inset-0 size-full overflow-hidden"
          style={{ clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)` }}
        >
          <img
            alt="Retrato antigo danificado da Nexus Legacy"
            className="absolute inset-0 h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDFzWGuBi5msO2-BeusBWD2q8UrzgfTaIxCcNONue_fqUJpEG8LKDcgw-LlidrKXDHIURWH-NR4RkMu-jEtWpLxZ_jGpheF1Z2KpTiHDUGPKJIv-0KWq9ejTP3dA3laBtI6rrzb-daCMmuDaBGQ14TTqht3NBV_YzJ3QhIoFdVbZcHv63b3_RuhCVyCnc2_XMGShMSjRhiiDmec-alqlpHIs478u8iYujGNatmysE"
          />
        </div>

        <div
          className="pointer-events-none absolute bottom-0 top-0 flex w-0.5 -translate-x-1/2 items-center justify-center bg-secondary shadow-[0_0_12px_rgba(123,208,255,0.8)]"
          style={{ left: `${position}%` }}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-secondary bg-surface-container-lowest text-secondary shadow-2xl">
            <span className="material-symbols-outlined text-[16px]">code</span>
          </div>
        </div>

        <input
          aria-label="Comparativo antes e depois da restauração de imagem"
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
        />
      </div>

      <div className="flex flex-col items-center justify-between gap-space-xs px-space-xs font-caption text-caption text-on-surface-variant sm:flex-row">
        <span>
          Caso Clínico: Fotografia de fundação fabril (1942). Removida acidez do suporte de celulose e restaurada profundidade de tons médios.
        </span>
        <span className="font-label-caps text-label-caps uppercase text-secondary">
          99.8% Fidelidade Histórica
        </span>
      </div>
    </div>
  );
}
