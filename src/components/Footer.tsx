import React from 'react';
import { Phone, MapPin, Clock, Instagram, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cafeData';
import { Logo } from './Logo';
import { CodiarLogo } from './CodiarLogo';

interface FooterProps {
  onOpenLocation?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLocation }) => {
  const CODIAR_INSTAGRAM_URL =
    'https://www.instagram.com/codiar_tech?stkn=MTU4emF0azg5cTkzcA==';

  return (
    <footer id="contact" className="bg-[#121212] text-white pt-12 pb-24 md:pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-white/10 text-right">
<div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <Logo size="md" showText={true} />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              {BUSINESS_INFO.description}
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={`https://instagram.com/${BUSINESS_INFO.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#E51E2B] text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <button
                onClick={onOpenLocation}
                aria-label="عرض موقع الكافيه"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#E51E2B] text-white flex items-center justify-center transition-colors"
              >
                <MapPin className="w-5 h-5" />
              </button>
              <a
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                aria-label="الاتصال بالهاتف"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#E51E2B] text-white flex items-center justify-center transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
<div className="md:col-span-4 space-y-3">
            <h4 className="text-base font-black text-white flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#E51E2B]" />
              <span>موقعنا في كربلاء</span>
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              {BUSINESS_INFO.address}
            </p>
            <div className="pt-1">
              <button
                onClick={onOpenLocation}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E51E2B] hover:text-red-400 transition-colors"
              >
                <span>عرض موقع الكافيه على الخريطة</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
<div className="md:col-span-3 space-y-3">
            <h4 className="text-base font-black text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#E51E2B]" />
              <span>أوقات العمل والطلبات</span>
            </h4>
            <div className="text-sm text-gray-300 space-y-1">
              <p className="font-semibold text-white">يوميًا بدون انقطاع:</p>
              <p className="text-gray-400">{BUSINESS_INFO.workingHours}</p>
            </div>
            <div className="pt-2 text-xs text-gray-300 space-y-1">
              <p className="text-gray-400">رقم الهاتف الوحيد المعتمد:</p>
              <a
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                className="block text-base font-black text-white hover:text-[#E51E2B] transition-colors tracking-wider"
              >
                {BUSINESS_INFO.primaryPhone}
              </a>
            </div>
          </div>

        </div>
<div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. جميع الحقوق محفوظة.
          </div>
<a
            href={CODIAR_INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 p-2 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:border-white/20 active:scale-95"
          >
            <CodiarLogo size={34} className="group-hover:scale-105 transition-transform" />
            <div className="flex flex-col text-right leading-tight">
              <span className="text-gray-300 font-semibold text-xs group-hover:text-white transition-colors">
                تم تطوير الموقع من قبل <span className="font-black text-[#00D2FF]">شركة كوديار تك</span>
              </span>
              <span className="text-[10px] text-gray-500 font-mono group-hover:text-amber-400 transition-colors flex items-center gap-1">
                <Instagram className="w-3 h-3 text-[#FF5500]" />
                @codiar_tech
              </span>
            </div>
          </a>
        </div>

      </div>
    </footer>
  );
};
