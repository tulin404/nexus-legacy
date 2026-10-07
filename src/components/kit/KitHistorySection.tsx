import { SectionHeading } from "../home/SectionHeading";
import { KitDossierButton } from "./KitDossierButton";
import { RequestKitButton } from "../cart/RequestKitButton";

const components = [
  {
    index: "01 / LITERATURA CORPORATIVA",
    title: "Monografia dos Fundadores",
    description:
      "Biografia aprofundada dos fundadores, raízes éticas e manifestos originais transcritos com pesquisa documental e tratamento textual editorial de alto padrão.",
  },
  {
    index: "02 / ARQUIVO HISTÓRICO",
    title: "Primeiros Anos & Crônicas",
    description:
      "Resgate narrativo dos primeiros clientes, crises superadas, inaugurações de fábricas e momentos decisivos que forjaram a cultura institucional.",
  },
  {
    index: "03 / DESIGN & BRANDING",
    title: "Evolução da Identidade Visual",
    description:
      "Pranchas em papel vegetal comparando logotipos históricos, cartazes de época, patentes, embalagens pioneiras e diretrizes estéticas pioneiras.",
  },
  {
    index: "04 / CRONOLOGIA TÁTIL",
    title: "Linha do Tempo Sanfonada",
    description:
      "Desdobrável em dobras japonesas com detalhes em folha metálica quente, permitindo visualização panorâmica contínua em salas de conferência.",
  },
  {
    index: "05 / ARQUIVO ICONOGRÁFICO",
    title: "Fotografias & Plantas Históricas",
    description:
      "Reproduções em fine art acondicionadas em pastas numeradas, com clipes de liga de cromo acetinado que não oxidam o papel alcalino.",
  },
  {
    index: "06 / HIPERMÍDIA CRIPTOGRAFADA",
    title: "Token QR Code Criptografado",
    description:
      "Acesso perene a um cofre digital privativo protegido com criptografia de ponta a ponta, contendo áudios de época, filmagens e acervo expandido.",
  },
];

const featureCards = [
  {
    icon: "menu_book",
    title: "Monografia dos Fundadores & Origem",
    description:
      "Encadernação artesanal em algodão nobre 300g com aplicação de folha de prata.",
  },
  {
    icon: "timeline",
    title: "Linha do Tempo em Fita Sanfonada",
    description:
      "Foil metálico impresso à mão com os 30 marcos fundacionais da empresa.",
  },
  {
    icon: "qr_code_2",
    title: "Token Esculpido com QR Code Criptografado",
    description:
      "Medalhão em bronze fosco que destrava o cofre digital de depoimentos e atas.",
  },
];

export function KitHistorySection() {
  return (
    <section
      className="relative w-full bg-surface-container-lowest px-margin-mobile py-space-xl lg:px-margin"
      id="kit-historia"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-space-xl">
        <div className="flex flex-col justify-between gap-space-md md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Obra-Prima Institucional"
            title="Toda empresa tem uma história. Algumas merecem ser contadas."
            description="Projeto memorial corporativo sob medida para companhias centenárias, grupos líderes e fundadores visionários. Não produzimos álbuns de família — construímos a custódia física e digital do seu patrimônio institucional."
          />
          <div className="flex flex-col items-start gap-space-xs md:items-end">
            <span className="rounded bg-surface-container-high px-space-md py-space-xs font-label-caps text-label-caps uppercase tracking-widest text-secondary">
              Sob Encomenda • Projeto Fechado por Edição
            </span>
            <span className="font-caption text-caption text-on-surface-variant">
              Produção limitada a 6 corporações por trimestre
            </span>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 items-center gap-gutter overflow-hidden rounded-xl bg-surface-container-low p-space-md shadow-2xl sm:p-space-lg lg:grid-cols-12">
          <div className="flex flex-col justify-center gap-space-md lg:col-span-7">
            <div className="group relative w-full overflow-hidden rounded-lg">
              <img
                alt="Nexus Legacy Corporate Archival Kit Showcase"
                className="w-full transform object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyV0NyIf6iSJzSwuk0VaK49dDWBx7EvllxoN0_3cb0cXVQmGH9SgOAlQwMIj_Yu-KQVlzVWomJUcggs4uxzMMcVd2mF40KzERp9733zxbZCVEC6vQnWhbelXTlDCULf-b-e5d9qDdMbhVUbret-xQINl0K80f4ALDdqGRQL30LwLTvKdHATLbkFsKkT0Nhi4uFPIanpBtH_IfhnAffSAyDIp4SQTWOK5Bw9PYiHNY"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 rounded bg-surface-container-high/80 px-3 py-1 font-label-caps text-label-caps uppercase tracking-widest text-primary backdrop-blur-md">
                Estojo Solander em Linho Grafite &amp; Cromo
              </span>
            </div>
          </div>

          <div className="flex h-full flex-col justify-between gap-space-lg py-space-sm lg:col-span-5">
            <div>
              <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">
                Especificações Exclusivas
              </span>
              <h3 className="mt-space-xs font-headline-md text-headline-md text-primary">
                O Arquivo do Fundador
              </h3>
              <p className="mt-space-sm font-body-md text-body-md text-on-surface-variant">
                Um monumento tátil desenhado para a mesa do conselho, recepções executivas ou salas memoriais. Cada exemplar sintetiza décadas de pioneirismo com rigor museológico.
              </p>
            </div>

            <div className="flex flex-col gap-space-sm font-body-md text-body-md text-on-surface">
              {featureCards.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-space-sm rounded bg-surface-container/60 p-space-sm"
                >
                  <span className="material-symbols-outlined mt-0.5 text-[20px] text-secondary">
                    {feature.icon}
                  </span>
                  <div>
                    <strong className="block font-medium text-primary">
                      {feature.title}
                    </strong>
                    <span className="font-caption text-caption text-on-surface-variant">
                      {feature.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-space-sm pt-space-sm sm:flex-row">
              <KitDossierButton />
              <RequestKitButton />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-gutter pt-space-md md:grid-cols-2 lg:grid-cols-3">
          {components.map((component) => (
            <div
              key={component.index}
              className="group relative flex flex-col gap-space-xs overflow-hidden rounded-xl bg-surface-container p-space-lg transition-all hover:bg-surface-container-high"
            >
              <span className="font-label-caps text-label-caps tracking-widest text-secondary">
                {component.index}
              </span>
              <h4 className="font-headline-sm text-headline-sm text-primary">
                {component.title}
              </h4>
              <p className="mt-space-xs font-body-md text-body-md text-on-surface-variant">
                {component.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
