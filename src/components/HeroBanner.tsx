import React from 'react';
import { ArrowLeft, PhoneCall, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cafeData';
import icedCoffeeImage from '../assets/images/iced-coffee.jpg';

interface HeroBannerProps {
  onExploreMenu: () => void;
  onOpenLocation: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onExploreMenu, onOpenLocation }) => {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6">
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#121212] via-[#1A1A1A] to-[#262626] text-white shadow-xl min-h-[220px] sm:min-h-[280px] md:min-h-[320px] flex items-center">
<div className="absolute top-0 right-0 w-96 h-96 bg-[#E51E2B]/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-600/10 rounded-full blur-2xl pointer-events-none -ml-10 -mb-10"></div>
<div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-12 items-center gap-4 px-6 sm:px-10 py-6">
<div className="order-2 md:order-1 md:col-span-5 flex justify-center md:justify-start items-center">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#E51E2B]/30 to-amber-500/20 blur-lg opacity-70 group-hover:opacity-100 transition duration-500"></div>
              <img
                src={icedCoffeeImage}
                alt="قهوة مثلجة كودو كودو"
                className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-2xl shadow-2xl border border-white/10 transform transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute -bottom-2 -left-2 bg-[#E51E2B] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-300" aria-hidden="true"></span>
                <span>الأكثر طلبًا</span>
              </div>
            </div>
          </div>
<div className="order-1 md:order-2 md:col-span-7 text-right flex flex-col justify-center items-start md:items-end">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-amber-300 text-xs sm:text-sm font-semibold mb-3 backdrop-blur-sm">
              <span>{BUSINESS_INFO.tagline}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <button
                onClick={onOpenLocation}
                className="hover:underline flex items-center gap-1 cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 text-[#E51E2B]" />
                <span>كربلاء حي الحسين</span>
              </button>
            </div>
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white mb-3">
              ابدأ رحلة
              <br />
              <span className="text-[#E51E2B] drop-shadow-[0_2px_10px_rgba(229,30,43,0.3)]">
                نكهتك معنا
              </span>
            </h1>

            <p className="text-sm sm:text-base text-gray-300 max-w-lg mb-5 leading-relaxed font-normal">
              قهوة مختصة محضرة بعناية من أجود المحاصيل، مشروبات باردة منعشة، وافل مقرمش وكريب ساخن بصوصات بلجيكية أصلية.
            </p>
<div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={onExploreMenu}
                className="inline-flex items-center gap-2 bg-[#E51E2B] hover:bg-[#c91823] text-white font-bold text-sm sm:text-base px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-lg shadow-red-900/30 transition-all active:scale-95"
              >
                <span>استكشف المنيو</span>
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenLocation}
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-white/20 transition-all backdrop-blur-sm"
              >
                <MapPin className="w-4 h-4 text-[#E51E2B]" />
                <span>عرض الموقع بالخريطة</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-white/20 transition-all backdrop-blur-sm tracking-wide"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>{BUSINESS_INFO.primaryPhone}</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
