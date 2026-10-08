"use client";

import { useCart } from "@/hooks/useCart";

export function RequestKitButton() {
    const { requestKitBudget } = useCart();

    return (
        <button
            type="button"
            onClick={requestKitBudget}
            className="flex flex-1 items-center justify-center gap-1.5 rounded bg-surface-container-high px-space-md py-space-md text-center font-label-caps text-label-caps uppercase tracking-wider text-secondary transition-all hover:bg-surface-container-highest"
        >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            Solicitar Orçamento
        </button>
    );
};
