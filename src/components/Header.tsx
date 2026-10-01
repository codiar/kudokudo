import React from 'react';
import { ShoppingCart, Phone, Clock, MapPin, Search } from 'lucide-react';
import { Logo } from './Logo';
import { useCart } from '../context/CartContext';
import { BUSINESS_INFO } from '../data/cafeData';

interface HeaderProps {
  onSearchClick?: () => void;
  onMenuClick?: () => void;
  onAboutClick?: () => void;
  onContactClick?: () => void;
  onOpenLocation?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onSearchClick,
  onMenuClick,
  onAboutClick,
  onContactClick,
  onOpenLocation,
}) => {
  const { totalItemsCount, setIsCartOpen } = useCart();

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-all">
<div className="hidden md:block bg-[#161616] text-white/90 text-xs py-1.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-gray-300">
              <Clock className="w-3.5 h-3.5 text-[#E51E2B]" />
              أوقات العمل: {BUSINESS_INFO.workingHours}
            </span>
            <button
              onClick={onOpenLocation}
              className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-[#E51E2B]" />
              <span>{BUSINESS_INFO.address}</span>
              <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-amber-300">
                عرض الخريطة
              </span>
            </button>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.primaryPhone}`}
              className="flex items-center gap-1 text-white hover:text-[#E51E2B] transition-colors font-bold tracking-wide"
            >
              <Phone className="w-3.5 h-3.5 text-[#E51E2B]" />
              {BUSINESS_INFO.primaryPhone}
            </a>
            <span className="text-gray-500">|</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              مفتوح الآن لاستقبالكم
            </span>
          </div>
        </div>
      </div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
<div className="flex items-center gap-3">
          <button
            onClick={() => setIsCartOpen(true)}
            aria-label="عرض السلة"
            className="relative p-2.5 sm:p-3 rounded-full hover:bg-red-50 text-[#E51E2B] transition-colors active:scale-95 group focus:outline-none focus:ring-2 focus:ring-[#E51E2B]/30"
          >
            <ShoppingCart className="w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover:scale-105" />
            {totalItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#E51E2B] text-white text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-in fade-in zoom-in duration-200">
                {totalItemsCount}
              </span>
            )}
          </button>
{onSearchClick && (
            <button
              onClick={onSearchClick}
              aria-label="البحث في القائمة"
              className="md:hidden p-2.5 rounded-full hover:bg-gray-100 text-gray-700 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
          )}
{onOpenLocation && (
            <button
              onClick={onOpenLocation}
              aria-label="عرض موقع الكافيه على الخريطة"
              className="md:hidden p-2 rounded-full hover:bg-gray-100 text-[#E51E2B] transition-colors"
              title="موقع الكافيه"
            >
              <MapPin className="w-5 h-5" />
            </button>
          )}
        </div>
<nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-700">
          <a
            href="#home"
            className="hover:text-[#E51E2B] transition-colors relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#E51E2B] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            الرئيسية
          </a>
          <a
            href="#menu-section"
            onClick={onMenuClick}
            className="hover:text-[#E51E2B] transition-colors relative py-2"
          >
            المنيو
          </a>
          <button
            onClick={onOpenLocation}
            className="hover:text-[#E51E2B] transition-colors relative py-2 font-semibold"
          >
            خريطة الموقع
          </button>
          <a
            href="#about"
            onClick={onAboutClick}
            className="hover:text-[#E51E2B] transition-colors relative py-2"
          >
            عن الكافيه
          </a>
          <a
            href="#contact"
            onClick={onContactClick}
            className="hover:text-[#E51E2B] transition-colors relative py-2"
          >
            تواصل معنا
          </a>
        </nav>
<a href="#home" className="flex items-center hover:opacity-95 transition-opacity">
          <Logo size="md" showText={true} />
        </a>
      </div>
    </header>
  );
};
