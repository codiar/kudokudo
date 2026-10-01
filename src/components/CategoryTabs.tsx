import React, { useRef } from 'react';
import { Search, X, ChevronRight, ChevronLeft } from 'lucide-react';
import { CATEGORIES } from '../data/cafeData';

interface CategoryTabsProps {
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalProductsCount: number;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  totalProductsCount,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-16 sm:top-20 z-20 bg-white/95 backdrop-blur-md border-b border-gray-100 py-3 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="relative mb-3">
          <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-gray-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="ابحث عن مشروبك أو حلاك المفضل (مثال: سبانيش، كريب، وافل، أوريو...)"
            className="w-full pl-10 pr-10 py-2 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E51E2B]/20 focus:border-[#E51E2B] transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 hover:text-gray-600"
              aria-label="مسح البحث"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
<div className="relative flex items-center">
<button
            onClick={() => scroll('right')}
            className="hidden sm:flex shrink-0 w-8 h-8 items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 shadow-sm ml-1 z-10"
            aria-label="تمرير لليمين"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1 w-full"
          >
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    onSelectCategory(category.id);
                    if (searchQuery) onSearchChange('');
                  }}
                  className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 shrink-0 border ${
                    isActive
                      ? 'bg-[#1E1E1E] text-white border-[#1E1E1E] shadow-sm scale-[1.02]'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
<button
            onClick={() => scroll('left')}
            className="hidden sm:flex shrink-0 w-8 h-8 items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 shadow-sm mr-1 z-10"
            aria-label="تمرير لليسار"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>
{(searchQuery || selectedCategory !== 'all') && (
          <div className="flex items-center justify-between text-xs text-gray-500 pt-2 px-1">
            <span>
              عرض {totalProductsCount} منتج {searchQuery ? `لنتائج "${searchQuery}"` : ''}
            </span>
            {(searchQuery || selectedCategory !== 'all') && (
              <button
                onClick={() => {
                  onSelectCategory('all');
                  onSearchChange('');
                }}
                className="text-[#E51E2B] hover:underline font-semibold"
              >
                إعادة ضبط الفلاتر
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
