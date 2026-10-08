import type { ReactNode } from "react";

import { formatBRL } from "@/lib/formatters";
import { AddToCartButton } from "../cart/AddToCartButton";

type ProductCardProps = {
    name: string;
    price: number;
    description: string;
    badge: string;
    visual: ReactNode;
};

export function ProductCard({
    name,
    price,
    description,
    badge,
    visual,
}: ProductCardProps) {
    return (
        <div className="group flex flex-col justify-between overflow-hidden rounded-xl bg-surface-container transition-all duration-300 hover:shadow-2xl">
            <div className="relative flex aspect-4/5 w-full items-center justify-center overflow-hidden bg-surface-container-high p-space-md">
                {visual}
                <span className="absolute right-3 top-3 rounded bg-surface-container-lowest/80 px-2 py-0.5 font-label-caps text-[10px] uppercase tracking-widest text-on-surface-variant">
                    {badge}
                </span>
            </div>

            <div className="flex flex-1 flex-col justify-between gap-space-xs p-space-md">
                <div>
                    <h4 className="font-title-editorial text-title-editorial text-primary">
                        {name}
                    </h4>
                    <p className="mt-1 font-caption text-caption text-on-surface-variant">
                        {description}
                    </p>
                </div>

                <div className="flex items-center justify-between pt-space-md">
                    <span className="font-headline-sm text-headline-sm text-primary">
                        {formatBRL(price)}
                    </span>
                    <AddToCartButton name={name} price={price} />
                </div>
            </div>
        </div>
    );
};
