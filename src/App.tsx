import { useState } from 'react';
import { Product, CartItem } from './types';
import { PRODUCTS } from './data';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProductCatalog } from './components/ProductCatalog';
import { StoryFooterSection } from './components/StoryFooterSection';
import { ProductModal } from './components/ProductModal';
import { RoutineFinderModal } from './components/RoutineFinderModal';
import { CartModal } from './components/CartModal';

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<string>('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isRoutineFinderOpen, setIsRoutineFinderOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.product.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
    // Optional feedback or open cart automatically
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.product.id === productId) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const cartTotalCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div 
      className="min-h-screen w-full relative flex flex-col font-sans overflow-x-hidden text-slate-800 selection:bg-rose-200 selection:text-rose-900 animate-fade-in"
      style={{ background: 'radial-gradient(circle at top left, #fdfcfb 0%, #e2d1c3 100%)' }}
    >
      {/* Mesh Gradient Overlays for Depth (Frosted Glass Theme) */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] bg-pink-200/50 pointer-events-none fixed" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[150px] bg-indigo-100/40 pointer-events-none fixed" />
      <div className="absolute top-[40%] left-[20%] w-[400px] h-[400px] rounded-full blur-[140px] bg-rose-100/30 pointer-events-none fixed" />

      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={cartTotalCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenRoutineFinder={() => setIsRoutineFinderOpen(true)}
      />

      {/* Main Single Page Content Flow */}
      <main className="flex-1 flex flex-col w-full max-w-[1440px] mx-auto">
        <HeroSection
          featuredProducts={PRODUCTS}
          onSelectProduct={(product) => setSelectedProduct(product)}
          onExploreShop={() => {
            setActiveTab('shop');
            const el = document.getElementById('shop');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <ProductCatalog
          products={PRODUCTS}
          onSelectProduct={(product) => setSelectedProduct(product)}
          onAddToCart={handleAddToCart}
        />

        <StoryFooterSection />
      </main>

      {/* Modals & Drawers */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <RoutineFinderModal
        isOpen={isRoutineFinderOpen}
        onClose={() => setIsRoutineFinderOpen(false)}
        allProducts={PRODUCTS}
        onAddToCart={handleAddToCart}
      />

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}

