"use client";

import { formatBRL } from "@/lib/formatters";
import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import type { CartItem, CartContextValue } from "@/types/types";

export const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isKitModalOpen, setIsKitModalOpen] = useState(false);


    const addToCart = useCallback((name: string, price: number) => {
        setItems((current) => {
            const existing = current.find((item) => item.name === name);

            if (existing) {
                return current.map((item) =>
                    item.id === existing.id
                    ?
                    { ...item, quantity: item.quantity + 1 }
                    :
                    item,
                );
            };

            return [
                ...current,
                {
                    id: `item-${Date.now()}`,
                    name,
                    price,
                    quantity: 1,
                    category: "Galeria & Design",
                },
            ];
        });
        setIsDrawerOpen(true);
    }, []);


    const requestKitBudget = useCallback(() => {
        setItems((current) => {
            const hasKit = current.some((item) => item.name.includes("Kit História da Empresa"));

            if (hasKit) return current;

            return [
                {
                    id: "kit-historia-corporate",
                    name: "Kit História da Empresa — Edição Executiva",
                    price: 18500,
                    quantity: 1,
                    category: "Patrimônio Corporativo",
                },
                ...current,
            ];
        });
        setIsDrawerOpen(true);
    }, []);


    const requestRestorationDiagnostic = useCallback(() => {
        setItems((current) => {
            const hasRestoration = current.some((item) => item.name.includes("Restauração Museológica"));

            if (hasRestoration) return current;

            return [
                ...current,
                {
                    id: "restoration-service",
                    name: "Restauração Museológica Fine Art (Por Imagem)",
                    price: 750,
                    quantity: 1,
                    category: "Restauração de Memória",
                },
            ];
        });
        setIsDrawerOpen(true);
    }, []);

    const updateQuantity = useCallback((id: string, delta: number) => {
            setItems((current) => current.flatMap((item) => {
                if (item.id !== id) return [item];
                const quantity = item.quantity + delta;
                return quantity > 0 ? [{ ...item, quantity }] : [];
            }));
    }, []);

    const removeFromCart = useCallback((id: string) => {
        setItems((current) => current.filter((item) => item.id !== id));
    }, []);

    const checkoutViaWhatsApp = useCallback(() => {
        let itemsText = "";
        let total = 0;

        if (items.length === 0) {
            itemsText = "- Nenhum item selecionado (Consulta Geral de Serviços)\n";
        } else {
            itemsText = items
                .map((item) => {
                    total += item.price * item.quantity;
                    return `- ${item.name} — ${item.quantity}x\n`;
                })
                .join("");
        };

        const message = `Olá! Gostaria de realizar um pedido com a Nexus Legacy.\nItens:\n${itemsText}Total: ${formatBRL(total)}\nGostaria de prosseguir com o atendimento.`;

        const waUrl = `https://wa.me/551130908800?text=${encodeURIComponent(message)}`;
        window.open(waUrl, "_blank", "noopener,noreferrer");
    }, [items]);

    const value = useMemo<CartContextValue>(() => {
        const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

        return {
            items,
            itemCount,
            total,
            isDrawerOpen,
            isKitModalOpen,
            addToCart,
            requestKitBudget,
            requestRestorationDiagnostic,
            updateQuantity,
            removeFromCart,
            openCartDrawer: () => setIsDrawerOpen(true),
            closeCartDrawer: () => setIsDrawerOpen(false),
            toggleCartDrawer: () => setIsDrawerOpen((open) => !open),
            openKitDossier: () => setIsKitModalOpen(true),
            closeKitDossier: () => setIsKitModalOpen(false),
            checkoutViaWhatsApp,
        };
    }, [
        addToCart,
        checkoutViaWhatsApp,
        isDrawerOpen,
        isKitModalOpen,
        items,
        removeFromCart,
        requestKitBudget,
        requestRestorationDiagnostic,
        updateQuantity,
    ]);

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
