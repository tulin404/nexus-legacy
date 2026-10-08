import { SectionHeading } from "../home/SectionHeading";

const metrics = [
    ["source_notes", "+180", "Arquivos corporativos catalogados e perenizados"],
    ["palette", "99.8%", "Fidelidade cromática e espectral certificada"],
    ["all_inclusive", "100+", "Anos de longevidade estimada em papel 100% algodão"],
] as const;

export function AboutSection() {
    return (
        <section className="relative w-full bg-surface px-margin-mobile py-space-xl lg:px-margin" id="sobre">
            <div className="mx-auto flex max-w-7xl flex-col gap-space-xl">
                <div className="grid grid-cols-1 items-center gap-gutter lg:grid-cols-12">
                    <div className="flex flex-col gap-space-sm lg:col-span-5">
                        <SectionHeading
                        eyebrow="Manifesto & Origem"
                        title="Nexus = conexão. Legacy = legado."
                        description="A Nexus Legacy conecta passado, presente e futuro através da preservação de histórias, imagens e memórias. Operamos na fronteira entre a alta curadoria artística, o design contemporâneo e o rigor da conservação patrimonial."
                        />
                        <div className="pt-space-sm">
                            <span className="block font-caption text-caption uppercase tracking-widest text-on-surface-variant">
                                Curadoria Principal
                            </span>
                            <span className="font-headline-sm text-headline-sm text-primary">
                                Atelier du Patrimoine
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-space-md sm:grid-cols-3 lg:col-span-7">
                        {metrics.map(([icon, value, description]) => (
                            <div
                                key={value}
                                className="flex h-56 flex-col justify-between rounded-xl bg-surface-container-low p-space-lg"
                            >
                                <span className="material-symbols-outlined text-[28px] text-secondary">
                                    {icon}
                                </span>
                                <div>
                                    <span className="font-headline-lg text-headline-lg text-primary">
                                        {value}
                                    </span>
                                    <p className="mt-1 font-caption text-caption text-on-surface-variant">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
