import React from 'react';
import { Home, Coffee, ShoppingBag, PhoneCall, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { BUSINESS_INFO } from '../data/cafeData';

interface MobileBottomNavProps {
  activeTab: 'home' | 'menu' | 'contact';
  onTabChange: (tab: 'home' | 'menu' | 'contact') => void;
  onOpenLocation: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  onTabChange,
  onOpenLocation,
}) => {
  const { totalItemsCount, setIsCartOpen } = useCart();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200/80 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] px-2 py-1.5 safe-area-bottom">
      <div className="grid grid-cols-5 items-center">
<button
          onClick={() => {
            onTabChange('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center py-1 transition-colors ${
            activeTab === 'home' ? 'text-[#E51E2B]' : 'text-gray-500 hover:text-gray-800'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-bold mt-1">الرئيسية</span>
        </button>
<button
          onClick={() => {
            onTabChange('menu');
            const menuEl = document.getElementById('menu-section');
            if (menuEl) {
              menuEl.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className={`flex flex-col items-center justify-center py-1 transition-colors ${
            activeTab === 'menu' ? 'text-[#E51E2B]' : 'text-gray-500 hover:text-gray-800'
          }`}
        >
          <Coffee className="w-5 h-5" />
          <span className="text-[10px] font-bold mt-1">المنيو</span>
        </button>
<button
          onClick={onOpenLocation}
          className="flex flex-col items-center justify-center py-1 text-gray-500 hover:text-[#E51E2B] transition-colors"
        >
          <MapPin className="w-5 h-5 text-[#E51E2B]" />
          <span className="text-[10px] font-bold mt-1">الخريطة</span>
        </button>
<button
          onClick={() => setIsCartOpen(true)}
          className="flex flex-col items-center justify-center py-1 relative text-gray-500 hover:text-gray-800"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5" />
            {totalItemsCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-[#E51E2B] text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                {totalItemsCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-bold mt-1">السلة</span>
        </button>
<a
          href={`tel:${BUSINESS_INFO.primaryPhone}`}
          className="flex flex-col items-center justify-center py-1 text-gray-500 hover:text-emerald-600 transition-colors"
        >
          <PhoneCall className="w-5 h-5 text-emerald-600" />
          <span className="text-[10px] font-bold mt-1">اتصال</span>
        </a>
      </div>
    </div>
  );
};
