import Image from "next/image";
import Bg from "@/assets/hero_bg.jpg"
import { ConsultationButton } from "@/components/cart/ConsultationButton";

export function HeroSection() {
    return (
        <section className="relative flex min-h-[96vh] w-full flex-col justify-between overflow-hidden bg-surface-container-lowest px-margin-mobile py-space-xl lg:px-margin">
            <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
                <Image
                    src={Bg}
                    alt="Ateliê Editorial Nexus Legacy"
                    className="h-full w-full transform object-cover object-center opacity-40 contrast-125 mix-blend-luminosity scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-surface-container-lowest via-surface-container-lowest/70 to-surface/90" />
                <div className="absolute inset-0 bg-linear-to-r from-surface-container-lowest/90 via-transparent to-surface-container-lowest/90" />

                <div className="pointer-events-none absolute left-1/2 top-1/4 h-95 w-195 -translate-x-1/2 rounded-full bg-secondary/10 blur-[140px]" />

                <div className="pointer-events-none absolute inset-x-margin-mobile bottom-0 top-0 border-x border-outline-variant/20 lg:inset-x-margin" />
            </div>

            <div className="z-10 flex w-full items-center justify-between pt-space-xs">
                <div className="flex items-center gap-space-xs rounded border border-outline-variant/30 bg-surface-container-low/60 px-3 py-1.5 font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant backdrop-blur-md">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary" />
                    <span>Ateliê de Patrimônio &amp; Memória Institucional</span>
                </div>

                <div className="hidden items-center gap-space-md rounded border border-outline-variant/30 bg-surface-container-low/60 px-3 py-1.5 font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant backdrop-blur-md sm:flex">
                    <span>Edições Numeradas</span>
                    <span className="text-outline-variant">•</span>
                    <span>Norma ISO 18916</span>
                    <span className="text-outline-variant">•</span>
                    <span>Preservação Museológica</span>
                </div>
            </div>

            <div className="z-10 m-auto flex w-full max-w-5xl flex-col items-center py-space-lg text-center">
                <div className="group relative mb-space-md">
                    <div className="absolute -inset-1 rounded-full bg-secondary/20 blur-xl transition-all duration-700 group-hover:bg-secondary/30" />
                    <div className="relative flex size-28 items-center justify-center rounded-[100%] bg-linear-to-b from-secondary/40 via-surface-container-high/60 to-outline-variant/20 p-1 shadow-[0_0_50px_rgba(123,208,255,0.15)] backdrop-blur-md sm:size-36">
                        <img
                        src="/icon.webp"
                        alt="Nexus Legacy Monogram Emblem"
                        className="size-full rounded-[100%] object-contain"
                        />
                    </div>
                </div>

                <div className="mb-space-sm inline-flex items-center gap-2 rounded border border-outline-variant/30 bg-surface-container-high/50 px-3 py-1 backdrop-blur-md">
                    <span className="h-1 w-1 rounded-full bg-secondary" />
                    <p className="font-label-caps text-label-caps uppercase tracking-[0.25em] text-secondary">
                        Nexus Legacy Atelier du Patrimoine
                    </p>
                    <span className="h-1 w-1 rounded-full bg-secondary" />
                </div>

                <h1 className="mb-space-md max-w-4xl font-display-hero text-display-hero tracking-tight text-primary drop-shadow-md sm:text-[68px] sm:leading-19">
                    Sua história merece permanecer.
                </h1>

                <p className="mb-space-xl max-w-2xl font-body-lg text-body-lg font-light tracking-wide text-on-surface/90">
                    Transformamos histórias, imagens e memórias em peças que atravessam o tempo. Custódia institucional definitiva com pesquisa histórica e padrão de alta arte.
                </p>

                {/* Dual Action Controls */}
                <div className="flex w-full flex-col items-center gap-space-md sm:w-auto sm:flex-row">
                    <a
                        href="#kit-historia"
                        className="group flex w-full items-center justify-center gap-space-xs rounded bg-primary px-space-xl py-space-md font-label-caps text-label-caps uppercase tracking-[0.18em] text-on-primary shadow-[0_4px_24px_rgba(255,255,255,0.12)] transition-all duration-300 hover:bg-primary-fixed sm:w-auto"
                    >
                        <span>Conheça nossos produtos</span>
                        <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-y-0.5">
                            arrow_downward
                        </span>
                    </a>

                    <ConsultationButton />
                </div>
            </div>

            <div className="z-10 mt-space-sm flex w-full flex-col items-center justify-between gap-space-md border-t border-outline-variant/20 pt-space-lg font-caption text-caption text-on-surface-variant md:flex-row">
                <div className="flex items-center gap-space-md">
                    <span className="font-label-caps text-[10px] uppercase tracking-widest text-on-surface-variant">
                        Obsidian Vault
                    </span>
                    <span className="text-outline-variant">•</span>
                    <span className="font-label-caps text-[10px] uppercase tracking-widest">
                        São Paulo · Zurique
                    </span>
                </div>
            </div>
        </section>
  );
};
