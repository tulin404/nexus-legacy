"use client";

import { useCart } from "./CartProvider";

export function CartTrigger() {
  const { itemCount, toggleCartDrawer } = useCart();

  return (
    <button
      id="floating-cart-trigger"
      type="button"
      onClick={toggleCartDrawer}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-space-sm rounded-full bg-surface-container-high/90 px-space-md py-space-sm text-primary shadow-[0_8px_32px_rgba(0,0,0,0.7)] backdrop-blur-md transition-transform hover:bg-surface-container-highest active:scale-95"
    >
      <div className="relative">
        <span className="material-symbols-outlined text-[22px] text-secondary">
          inventory_2
        </span>
        <span className="absolute -right-2 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-secondary font-label-caps text-[9px] font-bold text-on-secondary-fixed">
          {itemCount}
        </span>
      </div>
      <span className="hidden font-label-caps text-label-caps uppercase tracking-wider sm:inline">
        Pedido &amp; Orçamento
      </span>
    </button>
  );
}
