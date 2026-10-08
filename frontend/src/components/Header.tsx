"use client"

import { useState, useEffect } from "react";
import { ArchiveButton } from "./cart/ArchiveButton";

const navigation = [
    { href: "#kit-historia", label: "Kit História da Empresa" },
    { href: "#quadros", label: "Quadros" },
    { href: "#restauracao", label: "Restauração" },
    { href: "#sobre", label: "Sobre" },
];

export function Header() {
    const [activeSection, setActiveSection] = useState("kit-historia");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    };
                });
            },
            {
                threshold: 0.5,
                rootMargin: "-80px 0px 0px 0px",
            }
        );

        navigation.forEach((item) => {
            const section = document.querySelector(item.href);

            if (section) {
                observer.observe(section);
            };
        });

        return () => observer.disconnect();
    }, []);

    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-surface/85 shadow-[0_1px_16px_rgba(0,0,0,0.6)] backdrop-blur-xl">
            <div className="flex h-20 w-full items-center justify-between px-margin-mobile lg:px-margin">
                <a className="group flex items-center gap-space-sm" href="#top">
                    <span className="flex flex-col">
                        <span className="font-headline-sm text-headline-sm tracking-wide text-primary transition-colors group-hover:text-secondary">
                            NEXUS LEGACY
                        </span>
                        <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">
                            Atelier du Patrimoine
                        </span>
                    </span>
                </a>

                <nav className="hidden items-center gap-gutter md:flex" aria-label="Principal">
                    {navigation.map((item) => {
                        const isActive = activeSection === item.href.slice(1);

                        return (
                            <a
                                key={item.href}
                                href={item.href}
                                aria-current={isActive ? "page" : undefined}
                                className={
                                    isActive
                                        ? "font-medium tracking-wide text-primary transition-colors"
                                        : "font-body-md text-body-md tracking-wide text-on-surface-variant transition-colors hover:text-on-surface"
                                }
                            >
                                {item.label}
                            </a>
                        );
                    })}
                </nav>

                <ArchiveButton />
            </div>
        </header>
    );
}
