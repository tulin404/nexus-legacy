"use client";

import { useCart } from "./CartProvider";

export function ArchiveButton() {
  const { itemCount, toggleCartDrawer } = useCart();

  return (
    <button
      type="button"
      aria-label="Sacred Archive"
      onClick={toggleCartDrawer}
      className="relative flex items-center gap-space-xs rounded bg-surface-container-low px-space-sm py-space-xs transition-colors hover:bg-surface-container"
    >
      <span className="material-symbols-outlined text-[20px] text-on-surface-variant">
        archive
      </span>
      <span className="hidden font-label-caps text-label-caps uppercase tracking-wider text-on-surface sm:inline">
        Arquivo
      </span>
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-surface-container-high font-label-caps text-label-caps text-secondary">
        {itemCount}
      </span>
    </button>
  );
}
