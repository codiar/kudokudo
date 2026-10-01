import React from 'react';
import waffleImage from '../assets/images/chocolate-strawberry-waffle.jpg';
import latteImage from '../assets/images/spanish-latte.jpg';
import pancakeImage from '../assets/images/fruit-pancake.jpg';
import { Coffee, Award, MapPin, Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cafeData';

interface AboutSectionProps {
  onOpenLocation?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenLocation }) => {
  return (
    <section id="about" className="py-12 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <img
                  src={waffleImage}
                  alt="وافل كودو كودو"
                  className="rounded-2xl shadow-sm object-cover aspect-square w-full"
                />
                <img
                  src={latteImage}
                  alt="لاتيه ساخن كودو كودو"
                  className="rounded-2xl shadow-sm object-cover aspect-[4/3] w-full"
                />
              </div>
              <div className="space-y-3 pt-6">
                <img
                  src={pancakeImage}
                  alt="بان كيك كودو كودو"
                  className="rounded-2xl shadow-sm object-cover aspect-[4/3] w-full"
                />
                <div className="bg-[#181818] text-white p-5 rounded-2xl flex flex-col justify-between aspect-square">
                  <div className="w-10 h-10 rounded-xl bg-[#E51E2B] flex items-center justify-center">
                    <Coffee className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-2xl font-black text-amber-300">100%</span>
                    <p className="text-xs text-gray-300 mt-1 font-medium">
                      بن مختص ومكونات طازجة يومياً
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
<div className="lg:col-span-7 order-1 lg:order-2 text-right space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#E51E2B] text-xs font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E51E2B]" aria-hidden="true"></span>
              <span>مكانك للمزاج والأوقات الراقية</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-950 leading-tight">
              كودو كودو كافيه
              <br />
              <span className="text-[#E51E2B]">حيث تبدأ متعة القهوة الحقيقية</span>
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              في قلب كربلاء المقدسة، يقدم كودو كودو كافيه تجربة استثنائية لعشاق القهوة المختصة والمشروبات المنعشة مع تشكيلة واسعة من الوافل، الكريب، البان كيك والحلويات المحضرة بصلصات بلجيكية أصيلة على يد أمهر صانعي القهوة والحلويات.
            </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-3 text-right">
                <div className="p-2.5 rounded-xl bg-white shadow-sm text-[#E51E2B] shrink-0">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-gray-900">حبوب قهوة مختصة</h4>
                  <p className="text-xs text-gray-500 mt-0.5">
                    تحضير احترافي لكل كوب إسبريسو أو تقطير V60.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-3 text-right">
                <div className="p-2.5 rounded-xl bg-white shadow-sm text-[#E51E2B] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-gray-900">وافل وكريب طازج</h4>
                  <p className="text-xs text-gray-500 mt-0.5">
                    عجينة خاصة وهشة تخبز فور طلبك مع ألذ الصوصات.
                  </p>
                </div>
              </div>
            </div>
<div className="pt-2 flex flex-wrap items-center gap-3 justify-start">
              <button
                onClick={onOpenLocation}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-900 hover:bg-black text-white text-xs sm:text-sm font-bold transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#E51E2B]" />
                <span>عرض موقع الكافيه على الخريطة</span>
              </button>

              <a
                href={`https://instagram.com/${BUSINESS_INFO.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 hover:bg-gray-50 text-gray-800 text-xs sm:text-sm font-bold transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-600" />
                <span>متابعتنا على إنستغرام</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
