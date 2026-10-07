"use client";

import { useCart } from "./CartProvider";

export function RequestRestorationButton() {
  const { requestRestorationDiagnostic } = useCart();

  return (
    <button
      type="button"
      onClick={requestRestorationDiagnostic}
      className="flex items-center gap-2 rounded bg-secondary px-space-lg py-space-md font-label-caps text-label-caps uppercase tracking-wider text-on-secondary-fixed transition-colors hover:bg-secondary-fixed"
    >
      <span className="material-symbols-outlined text-[18px]">photo_camera_back</span>
      Solicitar Restauração
    </button>
  );
}
