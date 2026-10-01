import React, { useState, useEffect } from 'react';
import { X, MapPin, Navigation, ExternalLink, Copy, Check, Clock, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cafeData';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LocationModal: React.FC<LocationModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 transition-opacity duration-300 animate-in fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 my-auto transform transition-all duration-300 animate-in zoom-in-95"
      >
<div className="relative px-6 pt-5 pb-4 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-red-50 text-[#E51E2B] flex items-center justify-center shadow-inner border border-red-100">
              <MapPin className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div className="text-right">
              <h3 className="font-black text-gray-950 text-lg">
                موقع الكافيه
              </h3>
              <p className="text-xs text-gray-500 font-medium">
                كربلاء المقدسة • حي الحسين
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-800 transition-colors"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
<div className="p-5 sm:p-6 space-y-5 text-right">
<div className="relative w-full h-52 sm:h-60 rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-100 group">
            <iframe
              title="خريطة موقع كودو كودو كافيه"
              src="https://maps.google.com/maps?q=32.616035,44.024888&hl=ar&z=16&output=embed"
              className="w-full h-full border-0 group-hover:opacity-95 transition-opacity"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
<div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-lg border border-gray-200/80 flex items-center gap-2 text-xs font-bold text-gray-900 pointer-events-none">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E51E2B] animate-ping"></span>
              <span>بناية كودو كودو - الطابق الأرضي</span>
            </div>
          </div>
<div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-gray-50 to-red-50/20 border border-gray-200/90 shadow-sm space-y-3">
            <div className="flex items-start justify-between gap-3">
              <button
                onClick={handleCopyAddress}
                className="shrink-0 px-3 py-1.5 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-xs font-bold flex items-center gap-1.5 shadow-sm active:scale-95 transition-all"
                title="نسخ العنوان كاملاً"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                    <span className="text-emerald-700">تم النسخ</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-gray-500" />
                    <span>نسخ العنوان</span>
                  </>
                )}
              </button>

              <div className="text-right">
                <span className="text-[11px] font-bold text-gray-400 block mb-1">
                  العنوان الرسمي:
                </span>
                <p className="text-sm sm:text-base font-black text-gray-950 leading-relaxed">
                  {BUSINESS_INFO.address}
                </p>
              </div>
            </div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3 border-t border-gray-200/70 text-xs">
              <div className="flex items-center gap-2 text-gray-700">
                <Clock className="w-4 h-4 text-[#E51E2B] shrink-0" />
                <span>
                  أوقات العمل: <strong className="text-gray-900">{BUSINESS_INFO.workingHours}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.primaryPhone}`}
                  className="font-bold hover:text-emerald-700 hover:underline tracking-wide"
                >
                  الاتصال: {BUSINESS_INFO.primaryPhone}
                </a>
              </div>
            </div>
          </div>
<div className="space-y-2.5 pt-1">
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-[#E51E2B] hover:bg-[#c91823] text-white font-black text-base flex items-center justify-center gap-2.5 shadow-lg shadow-red-900/25 active:scale-[0.98] transition-all group"
            >
              <Navigation className="w-5 h-5 transition-transform group-hover:rotate-45" />
              <span>فتح الموقع مباشرة في تطبيق خرائط Google</span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </a>

            <button
              onClick={onClose}
              className="w-full py-3 px-4 rounded-xl border border-gray-200 hover:bg-gray-100 text-gray-700 font-bold text-sm transition-colors"
            >
              إغلاق النافذة
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
