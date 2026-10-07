"use client";

import { useCart } from "./CartProvider";

export function AddToCartButton({
  name,
  price,
}: {
  name: string;
  price: number;
}) {
  const { addToCart } = useCart();

  return (
    <button
      type="button"
      onClick={() => addToCart(name, price)}
      className="rounded bg-surface-container-high px-space-md py-space-xs font-label-caps text-label-caps uppercase tracking-wider text-secondary transition-all hover:bg-primary hover:text-on-primary"
    >
      Adicionar
    </button>
  );
}
