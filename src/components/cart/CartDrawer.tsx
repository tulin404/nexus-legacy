"use client";

import { formatBRL } from "@/lib/formatters";
import { useCart } from "@/hooks/useCart";

export function CartDrawer() {
    const {
        items,
        total,
        isDrawerOpen,
        closeCartDrawer,
        updateQuantity,
        removeFromCart,
        checkoutViaWhatsApp,
    } = useCart();

    return (
        <>
            <div
            className={`fixed inset-0 z-50 bg-surface-container-lowest/70 backdrop-blur-sm transition-opacity duration-300 ${
                isDrawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
            onClick={closeCartDrawer}
            aria-hidden="true"
            />

            <aside
                className={`fixed bottom-0 right-0 top-0 z-50 flex w-full max-w-md flex-col justify-between bg-surface-container-lowest shadow-[-16px_0_48px_rgba(0,0,0,0.8)] transition-transform duration-300 ease-out
                    ${
                    isDrawerOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                aria-hidden={!isDrawerOpen}
            >
                <div className="flex h-20 items-center justify-between bg-surface-container-low px-space-lg">
                    <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-[22px] text-secondary">
                            archive
                        </span>
                        <span className="font-headline-sm text-headline-sm text-primary">
                            Arquivo de Pedido
                        </span>
                    </div>
                    <button
                        type="button"
                        onClick={closeCartDrawer}
                        className="p-2 text-on-surface-variant transition-colors hover:text-primary"
                        aria-label="Fechar arquivo de pedido"
                    >
                        <span className="material-symbols-outlined text-[24px]">close</span>
                    </button>
                </div>

                <div
                    className="flex flex-1 flex-col gap-space-md overflow-y-auto px-space-lg py-space-md"
                    id="cart-items-container"
                >
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center gap-2 py-16 text-center text-on-surface-variant">
                            <span className="material-symbols-outlined text-[42px] text-outline">
                                inventory_2
                            </span>
                            <span className="font-title-editorial text-title-editorial text-primary">
                                Seu arquivo está vazio
                            </span>
                            <p className="max-w-xs font-caption text-caption">
                                Explore a galeria de quadros contemporâneos ou consulte nosso Kit
                                História da Empresa.
                            </p>
                        </div>
                    ) : (
                        items.map((item) => (
                            <div
                                key={item.id}
                                className="relative flex flex-col gap-space-xs rounded bg-surface-container p-space-md"
                            >
                                <div className="flex items-start justify-between gap-space-xs">
                                    <div>
                                        <span className="block font-label-caps text-[9px] uppercase tracking-widest text-secondary">
                                            {item.category}
                                        </span>
                                        <h5 className="font-body-md text-body-md font-medium text-primary">
                                            {item.name}
                                        </h5>
                                        <span className="font-caption text-caption text-on-surface-variant">
                                            {formatBRL(item.price)} por exemplar
                                        </span>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => removeFromCart(item.id)}
                                        className="p-1 text-on-surface-variant transition-colors hover:text-error"
                                        title="Remover item"
                                        aria-label={`Remover ${item.name}`}
                                    >
                                        <span className="material-symbols-outlined text-[18px]">
                                            delete
                                        </span>
                                    </button>
                                </div>

                                <div className="flex items-center justify-between pt-2">
                                    <div className="flex items-center gap-2 rounded bg-surface-container-high px-2 py-1">
                                        <button
                                            type="button"
                                            onClick={() => updateQuantity(item.id, -1)}
                                            className="px-1.5 font-bold text-on-surface-variant hover:text-primary"
                                            aria-label={`Diminuir quantidade de ${item.name}`}
                                        >
                                            −
                                        </button>
                                        <span className="font-caption text-caption font-medium text-primary">
                                            {item.quantity}
                                        </span>
                                        <button
                                            type="button"
                                            onClick={() => updateQuantity(item.id, 1)}
                                            className="px-1.5 font-bold text-on-surface-variant hover:text-primary"
                                            aria-label={`Aumentar quantidade de ${item.name}`}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <span className="font-body-md text-body-md font-medium text-primary">
                                        {formatBRL(item.price * item.quantity)}
                                    </span>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="flex flex-col gap-space-md bg-surface-container-low p-space-lg">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center justify-between font-caption text-caption text-on-surface-variant">
                            <span>Subtotal estimado</span>
                            <span>{formatBRL(total)}</span>
                        </div>
                        <div className="flex items-center justify-between font-caption text-caption text-on-surface-variant">
                            <span className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-[14px] text-secondary">
                                    local_shipping
                                </span>
                                Logística Segurada Nacional
                            </span>
                            <span className="font-label-caps text-label-caps uppercase text-secondary">
                                Incluso
                            </span>
                        </div>
                        <div className="flex items-center justify-between pt-2 font-headline-sm text-headline-sm text-primary">
                            <span>Total</span>
                            <span className="font-medium text-primary">{formatBRL(total)}</span>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={checkoutViaWhatsApp}
                        className="flex w-full items-center justify-center gap-2 rounded bg-primary py-space-md font-label-caps text-label-caps uppercase tracking-wider text-on-primary shadow-[0_4px_20px_rgba(255,255,255,0.12)] transition-all hover:bg-primary-fixed"
                    >
                        <span className="material-symbols-outlined text-[18px]">chat</span>
                        Finalizar Pedido via WhatsApp
                    </button>
                    <span className="text-center font-caption text-[11px] text-on-surface-variant">
                        Atendimento executivo em horário comercial. Resposta em até 30 minutos.
                    </span>
                </div>
            </aside>
        </>
    );
};
