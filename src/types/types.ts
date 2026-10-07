export type CartItem = {
    id: string,
    name: string,
    price: number,
    quantity: number,
    category: string
};

export type CartContextValue = {
    items: CartItem[],
    itemCount: number,
    total: number,
    isDrawerOpen: boolean,
    isKitModalOpen: boolean,
    addToCart: (name: string, price: number) => void,
    requestKitBudget: () => void,
    requestRestorationDiagnostic: () => void,
    updateQuantity: (id: string, delta: number) => void,
    removeFromCart: (id: string) => void,
    openCartDrawer: () => void,
    closeCartDrawer: () => void,
    toggleCartDrawer: () => void,
    openKitDossier: () => void,
    closeKitDossier: () => void,
    checkoutViaWhatsApp: () => void
};
