import React, { useState, useMemo, useRef } from 'react';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { CategoryTabs } from './components/CategoryTabs';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { LocationModal } from './components/LocationModal';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { PRODUCTS, Product } from './data/cafeData';
import { SearchX } from 'lucide-react';

function CafeApp() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);
  const [activeMobileTab, setActiveMobileTab] = useState<'home' | 'menu' | 'contact'>('home');
  const [isLocationModalOpen, setIsLocationModalOpen] = useState<boolean>(false);

  const menuSectionRef = useRef<HTMLDivElement>(null);
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;

      const trimmedQuery = searchQuery.trim().toLowerCase();
      if (!trimmedQuery) return matchesCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(trimmedQuery) ||
        product.description.toLowerCase().includes(trimmedQuery);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleExploreMenu = () => {
    setActiveMobileTab('menu');
    if (menuSectionRef.current) {
      menuSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFocusSearch = () => {
    handleExploreMenu();
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] flex flex-col font-sans selection:bg-[#E51E2B]/10 selection:text-[#E51E2B]">
<Header
        onSearchClick={handleFocusSearch}
        onMenuClick={handleExploreMenu}
        onOpenLocation={() => setIsLocationModalOpen(true)}
        onAboutClick={() => {
          const el = document.getElementById('about');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onContactClick={() => {
          const el = document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />
<main className="flex-1 pb-16 md:pb-8">
<div id="home">
          <HeroBanner
            onExploreMenu={handleExploreMenu}
            onOpenLocation={() => setIsLocationModalOpen(true)}
          />
        </div>
<div id="menu-section" ref={menuSectionRef}>
          <CategoryTabs
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            totalProductsCount={filteredProducts.length}
          />
        </div>
<section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6">
          {filteredProducts.length === 0 ? (
            /* Empty State */
            <div className="py-16 text-center space-y-4 bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
              <div className="w-16 h-16 mx-auto rounded-full bg-red-50 text-[#E51E2B] flex items-center justify-center">
                <SearchX className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-black text-gray-900">
                  لم يتم العثور على نتائج
                </h3>
                <p className="text-sm text-gray-500 max-w-sm mx-auto">
                  لم نجد أي صنف يطابق "{searchQuery}". جرب البحث بكلمة أخرى مثل "لاتيه"، "وافل"، أو اختر تصنيفاً من القائمة أعلاه.
                </p>
              </div>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-5 py-2.5 bg-[#1E1E1E] text-white text-xs sm:text-sm font-bold rounded-xl hover:bg-black transition-colors"
              >
                عرض كامل القائمة
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onOpenDetails={(p) => setActiveModalProduct(p)}
                />
              ))}
            </div>
          )}
        </section>
<AboutSection onOpenLocation={() => setIsLocationModalOpen(true)} />

      </main>
<Footer onOpenLocation={() => setIsLocationModalOpen(true)} />
<MobileBottomNav
        activeTab={activeMobileTab}
        onTabChange={setActiveMobileTab}
        onOpenLocation={() => setIsLocationModalOpen(true)}
      />
<ProductModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
      />

      <CartDrawer />

      <CheckoutModal />

      <LocationModal
        isOpen={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
      />

    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <CafeApp />
    </CartProvider>
  );
}
