import { ConsultationButton } from "../cart/ConsultationButton";

export function HeroSection() {
    return (
    <section
      id="top"
      className="relative flex min-h-[92vh] w-full flex-col justify-between overflow-hidden bg-gradient-to-b from-surface via-surface-container-lowest to-surface px-margin-mobile py-space-xl lg:px-margin"
    >
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[340px] w-[680px] -translate-x-1/2 rounded-full bg-secondary/5 blur-[120px]" />

      <div className="z-10 flex w-full items-center justify-between">
        <div className="flex items-center gap-space-xs font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary" />
          <span>Ateliê de Patrimônio &amp; Design</span>
        </div>
        <div className="hidden items-center gap-space-md font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant sm:flex">
          <span>Edições Numeradas</span>
          <span className="text-outline-variant">•</span>
          <span>Preservação Museológica</span>
        </div>
      </div>

      <div className="z-10 mx-auto my-auto flex w-full max-w-5xl flex-col items-center py-space-lg text-center">
        <div className="group relative mb-space-lg">
          <div className="absolute inset-0 rounded-full bg-secondary/10 blur-2xl transition-all duration-700 group-hover:bg-secondary/20" />
          <img
            alt="Emblema monograma Nexus Legacy"
            className="relative h-28 w-28 rounded-full object-contain shadow-[0_0_40px_rgba(123,208,255,0.12)] sm:h-36 sm:w-36"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbRVVsFjE8a_bumAS-_QSmVeOnOSpuEYWqGM7Y-eyDC0DK4ZvFOtMy4j50kH5wl-35SwygZl5wb7orf8sCTA60TOlALiFQEEzxMrVLmi8N6liP-aSd_kAxVcaGY6sED-eVVkPuMNAU-XpwF0kyOBBJAtkA8rDTv79zKjNIBek4Xd-HfcnFvT6VjdV4LfEJtS6bAy26iszrLFqRNmtDlWOr5fyyC2_CYzNBPO8cCQuPK66t9Ridqcmp"
          />
        </div>

        <p className="mb-space-sm font-label-caps text-label-caps uppercase tracking-[0.25em] text-secondary">
          Nexus Legacy Atelier
        </p>
        <h1 className="mb-space-md max-w-4xl font-display-hero text-display-hero tracking-tight text-primary sm:text-[68px] sm:leading-[76px]">
          Sua história merece permanecer.
        </h1>
        <p className="mb-space-xl max-w-2xl font-body-lg text-body-lg font-light tracking-wide text-on-surface-variant">
          Transformamos histórias, imagens e memórias em peças que atravessam o tempo.
        </p>

        <div className="flex w-full flex-col items-center gap-space-md sm:w-auto sm:flex-row">
          <a
            className="flex w-full items-center justify-center gap-space-xs rounded bg-primary px-space-xl py-space-md font-label-caps text-label-caps uppercase tracking-[0.18em] text-on-primary shadow-[0_4px_24px_rgba(255,255,255,0.08)] transition-all duration-300 hover:bg-primary-fixed sm:w-auto"
            href="#kit-historia"
          >
            <span>Conheça nossos produtos</span>
            <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
          </a>
          <ConsultationButton />
        </div>
      </div>

      <div className="z-10 flex w-full flex-col items-center justify-between gap-space-md pt-space-lg font-caption text-caption text-on-surface-variant md:flex-row">
        <span className="font-label-caps text-[10px] uppercase tracking-widest">
          Atelier Obsidian • São Paulo / Zurich
        </span>
        <div className="flex items-center gap-space-lg">
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[14px] text-secondary">verified</span>
            Norma ISO 18916 de Longevidade
          </span>
          <span className="hidden text-outline-variant md:inline">•</span>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[14px] text-secondary">shield</span>
            Acervo Criptografado &amp; Físico
          </span>
        </div>
      </div>
    </section>
  );
}
