import { SectionHeading } from "../home/SectionHeading";
import { ProductCard } from "./ProductCard";
import { AddToCartButton } from "../cart/AddToCartButton";

const products = [
  {
    name: "Monolith No. 01 — Geometria & Sombra",
    price: 1280,
    badge: "Fine Art",
    description:
      "Impressão fine-art sobre papel de algodão 310g, moldura em alumínio anodizado escuro e vidro anti-reflexo museológico.",
    visual: (
      <div className="flex h-4/5 w-4/5 items-center justify-center bg-surface-container-lowest p-4 shadow-2xl transition-transform duration-500 group-hover:scale-105">
        <div className="flex h-full w-full flex-col justify-end bg-gradient-to-tr from-surface to-surface-bright p-3">
          <div className="mb-2 h-1 w-12 bg-secondary/80" />
          <span className="font-caption text-[9px] uppercase tracking-widest text-on-surface-variant">
            M.01 GEOMETRIA
          </span>
        </div>
      </div>
    ),
  },
  {
    name: "Horizonte Brutalista II",
    price: 1540,
    badge: "Edição Limitada",
    description:
      "Fotografia de arquitetura em alto contraste, acabamento com paspatur chanfrado e chassi de madeira nobre ebonizada.",
    visual: (
      <div className="flex h-4/5 w-4/5 items-center justify-center bg-surface-container-lowest p-4 shadow-2xl transition-transform duration-500 group-hover:scale-105">
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-surface-variant p-3">
          <div className="absolute inset-x-0 top-1/2 h-[2px] bg-secondary/40" />
          <span className="z-10 font-caption text-[9px] uppercase tracking-widest text-primary">
            BRUTALISMO II
          </span>
        </div>
      </div>
    ),
  },
  {
    name: "Ecos do Tempo — Díptico",
    price: 2100,
    badge: "Díptico Par",
    description:
      "Par curado em grande formato para backdrops executivos e salas de reunião com iluminação cenográfica.",
    visual: (
      <div className="flex h-4/5 w-4/5 gap-1 bg-surface-container-lowest p-2 shadow-2xl transition-transform duration-500 group-hover:scale-105">
        <div className="h-full w-1/2 bg-surface-container-high" />
        <div className="h-full w-1/2 bg-surface-container-highest" />
      </div>
    ),
  },
  {
    name: "Gravura Minimalista Obsidian",
    price: 980,
    badge: "Compacto",
    description:
      "Peça pontual para setups contemporâneos, estúdios de criação e living rooms com estética sóbria.",
    visual: (
      <div className="flex h-4/5 w-4/5 items-center justify-center bg-surface-container-lowest p-4 shadow-2xl transition-transform duration-500 group-hover:scale-105">
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-b from-surface-container-lowest via-surface-container-high to-surface-container-lowest">
          <span className="material-symbols-outlined text-[32px] text-secondary/70">
            crop_portrait
          </span>
        </div>
      </div>
    ),
  },
];

export function GallerySection() {
  return (
    <section
      className="w-full bg-surface px-margin-mobile py-space-xl lg:px-margin"
      id="quadros"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-space-xl">
        <SectionHeading
          eyebrow="Curadoria de Arte & Arquitetura"
          title="Quadros para espaços que contam quem você é."
          description="Peças de design e decoração contemporânea concebidas para compor setups, escritórios executivos, salas e ambientes corporativos de alto padrão."
        />

        <div className="relative w-full overflow-hidden rounded-xl bg-surface-container-lowest shadow-2xl">
          <div className="relative aspect-[16/9] max-h-[580px] w-full overflow-hidden">
            <img
              alt="Quadro Nexus Legacy em Interior Minimalista Executivo"
              className="h-full w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD732_1u0YLtavePbrKAVTCUD8mDhwpy-ghDXOLnBCGB36eIX3Vd5Rmp-8Ut4UAr4-RZzkts4idOrnBIzh3GYKSWIrGuj5ysAz1r7vtyKYu58QZ3n6RCk76ExYh-ImPhVwj27rQeB2MLZoiknRMM4qWNjRjusTvSRJ6Sg_ylULbPsVTobPP5_xbBr8jeuwsAzv0zzfBHsJwJBku1qFpjh9CugCisV49cVB8uF1-mB4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent" />
          </div>
          <div className="flex flex-col items-start justify-between gap-space-md bg-surface-container-low p-space-lg md:flex-row md:items-center">
            <div>
              <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">
                Ambiente Conceito • Edição 2025
              </span>
              <h3 className="mt-1 font-headline-sm text-headline-sm text-primary">
                Acabamento com Vidro Museológico Sem Reflexo
              </h3>
              <p className="max-w-xl font-body-md text-body-md text-on-surface-variant">
                Nossas molduras utilizam alumínio escovado aeronáutico e montagem com vedação à vácuo anti-umidade para ambientes climatizados corporativos.
              </p>
            </div>
            <AddToCartButton
              name="Ambiente Conceito Executivo (Montagem Completa)"
              price={3980}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-gutter pt-space-md md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              price={product.price}
              badge={product.badge}
              description={product.description}
              visual={product.visual}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
