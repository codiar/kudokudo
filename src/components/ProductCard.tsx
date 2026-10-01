import React, { useState } from 'react';
import { Plus, Check } from 'lucide-react';
import { Product } from '../data/cafeData';
import { useCart } from '../context/CartContext';
import fallbackImage from '../assets/images/iced-coffee.jpg';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenDetails }) => {
  const { addToCart } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const handleAddClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if ((product.options && product.options.length > 0) || (product.addOns && product.addOns.length > 0)) {
      onOpenDetails(product);
      return;
    }

    addToCart(product, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 900);
  };

  const formattedPrice = new Intl.NumberFormat('en-US').format(product.price);

  return (
    <div
      onClick={() => onOpenDetails(product)}
      className="group bg-white rounded-2xl border border-gray-100/90 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
    >
<div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          onError={(e) => {
            (e.target as HTMLImageElement).src = fallbackImage;
          }}
        />
        {product.isPopular && (
          <span className="absolute top-2.5 right-2.5 bg-black/75 backdrop-blur-md text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-md shadow-sm">
            مميز
          </span>
        )}
      </div>
<div className="p-3 sm:p-4 flex items-center justify-between gap-2">
<div className="flex flex-col text-right">
          <h3 className="font-extrabold text-sm sm:text-base text-gray-900 group-hover:text-[#E51E2B] transition-colors line-clamp-1">
            {product.name}
          </h3>
          <span className="font-black text-xs sm:text-sm text-gray-900 tracking-tight mt-0.5">
            {formattedPrice} <span className="text-[11px] font-bold text-gray-500">د.ع</span>
          </span>
        </div>
<button
          onClick={handleAddClick}
          aria-label={`إضافة ${product.name} إلى السلة`}
          className={`shrink-0 px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-black transition-all duration-200 flex items-center gap-1 active:scale-95 shadow-sm ${
            justAdded
              ? 'bg-emerald-600 text-white'
              : 'bg-[#E51E2B] hover:bg-[#c91823] text-white hover:shadow-md hover:shadow-red-500/20'
          }`}
        >
          {justAdded ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>تم</span>
            </>
          ) : (
            <>
              <span>أضف</span>
              <Plus className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};
