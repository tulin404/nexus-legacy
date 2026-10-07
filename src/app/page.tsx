import { Header } from "@/components/Header";
import { CartProvider } from "@/components/cart/CartProvider";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { CartTrigger } from "@/components/cart/CartTrigger";
import { KitDossierModal } from "@/components/kit/KitDossierModal";
import { HeroSection } from "@/components/home/HeroSection";
import { KitHistorySection } from "@/components/kit/KitHistorySection";
import { GallerySection } from "@/components/gallery/GallerySection";
import { RestorationSection } from "@/components/restoration/RestorationSection";
import { AboutSection } from "@/components/about/AboutSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
    return (
        <CartProvider>
            <Header />

            <main className="w-full bg-surface pt-20 text-on-surface selection:bg-surface-variant selection:text-primary">
                <HeroSection />
                <KitHistorySection />
                <GallerySection />
                <RestorationSection />
                <AboutSection />
            </main>

            <CartTrigger />
            <CartDrawer />
            <KitDossierModal />
            <Footer />
        </CartProvider>
  );
}
