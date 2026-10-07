"use client";

import { useCart } from "./CartProvider";

export function ConsultationButton() {
  const { openCartDrawer } = useCart();

  return (
    <button
      type="button"
      onClick={openCartDrawer}
      className="flex w-full items-center justify-center gap-space-xs rounded bg-surface-container-high/60 px-space-lg py-space-md font-label-caps text-label-caps uppercase tracking-[0.18em] text-on-surface backdrop-blur-sm transition-all duration-300 hover:bg-surface-container-highest sm:w-auto"
    >
      <span>Consultoria Privada</span>
      <span className="material-symbols-outlined text-[16px]">north_east</span>
    </button>
  );
}
