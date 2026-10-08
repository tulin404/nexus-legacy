const links = [
    ["Kit História da Empresa", "#kit-historia"],
    ["Galeria de Quadros", "#quadros"],
    ["Protocolos de Restauração", "#restauracao"],
    ["O Atelier & História", "#sobre"],
] as const;

export function Footer() {
    const date = new Date();

    return (
        <footer className="w-full bg-surface-container-lowest">
            <div className="w-full px-margin-mobile py-space-xl lg:px-margin">
                <div className="mb-space-xl grid grid-cols-1 gap-gutter md:grid-cols-12">
                    <div className="flex flex-col gap-space-sm md:col-span-5">
                        <span className="font-headline-sm text-headline-sm tracking-wide text-primary">
                            NEXUS LEGACY
                        </span>
                        <p className="max-w-md font-body-md text-body-md text-on-surface-variant">
                            Preservação do patrimônio corporativo, restauração de memórias institucionais e curadoria de arte memorial sob rigor museológico e estética contemporânea.
                        </p>
                    </div>

                    <div className="flex flex-col gap-space-xs md:col-span-3">
                        <span className="mb-space-xs font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">
                            Curadoria &amp; Acervo
                        </span>
                        {links.map(([label, href]) => (
                            <a
                                key={href}
                                href={href}
                                className="font-body-md text-body-md text-on-surface-variant transition-colors hover:text-primary"
                            >
                                {label}
                            </a>
                        ))}
                    </div>

                    <div className="flex flex-col gap-space-xs md:col-span-4">
                        <span className="mb-space-xs font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">
                            Atendimento Privado
                        </span>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                            concierge@nexuslegacy.atelier
                        </p>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                            +55 11 3090-8800
                        </p>
                        <p className="mt-space-xs font-caption text-caption text-on-surface-variant">
                            Acesso exclusivamente sob agendamento e curadoria prévia.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-space-md border-t border-outline-variant/30 pt-space-lg sm:flex-row">
                    <span className="font-caption text-caption text-on-surface-variant">
                        © {date.getFullYear()} Nexus Legacy Atelier. Todos os direitos reservados. Preservação de Patrimônio Institucional.
                    </span>
                    <div className="flex items-center gap-space-md">
                        <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                            Obsidian Vault
                        </span>
                        <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                            Surgical Precision
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
