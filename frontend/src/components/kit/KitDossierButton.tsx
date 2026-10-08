"use client";

import { useCart } from "@/hooks/useCart";

export function KitDossierButton() {
    const { openKitDossier } = useCart();

    return (
        <button
            type="button"
            onClick={openKitDossier}
            className="flex-1 rounded bg-primary px-space-md py-space-md text-center font-label-caps text-label-caps uppercase tracking-wider text-on-primary transition-all hover:bg-primary-fixed"
        >
            Conhecer o Kit História
        </button>
    );
};
