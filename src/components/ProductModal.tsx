import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, ShoppingCart, Check } from 'lucide-react';
import { Product } from '../data/cafeData';
import { useCart } from '../context/CartContext';
import { Logo } from './Logo';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { addToCart, totalItemsCount, setIsCartOpen } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<{ name: string; choice: string; priceDelta: number }[]>([]);
  const [selectedAddOns, setSelectedAddOns] = useState<{ id: string; label: string; price: number }[]>([]);
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (product) {
      setQuantity(1);
      setSpecialInstructions('');
      setIsSuccess(false);

      if (product.options && product.options.length > 0) {
        setSelectedOptions(
          product.options.map((opt) => ({
            name: opt.name,
            choice: opt.choices[0].label,
            priceDelta: opt.choices[0].priceDelta,
          }))
        );
      } else {
        setSelectedOptions([]);
      }

      setSelectedAddOns([]);
    }
  }, [product]);

  if (!product) return null;

  const optionsDelta = selectedOptions.reduce((sum, o) => sum + o.priceDelta, 0);
  const addOnsDelta = selectedAddOns.reduce((sum, a) => sum + a.price, 0);
  const unitPrice = product.price + optionsDelta + addOnsDelta;
  const totalPrice = unitPrice * quantity;

  const handleOptionChange = (optionName: string, choiceLabel: string, priceDelta: number) => {
    setSelectedOptions((prev) => {
      const filtered = prev.filter((o) => o.name !== optionName);
      return [...filtered, { name: optionName, choice: choiceLabel, priceDelta }];
    });
  };

  const toggleAddOn = (addOn: { id: string; label: string; price: number }) => {
    setSelectedAddOns((prev) => {
      const exists = prev.some((a) => a.id === addOn.id);
      if (exists) {
        return prev.filter((a) => a.id !== addOn.id);
      } else {
        return [...prev, addOn];
      }
    });
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedOptions, selectedAddOns, specialInstructions);
    setIsSuccess(true);
    setTimeout(() => {
      onClose();
    }, 700);
  };

  const formattedUnitPrice = new Intl.NumberFormat('en-US').format(unitPrice);
  const formattedTotalPrice = new Intl.NumberFormat('en-US').format(totalPrice);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200">
      <div className="relative w-full sm:max-w-lg bg-white sm:rounded-3xl shadow-2xl overflow-hidden min-h-screen sm:min-h-0 flex flex-col max-h-[92vh]">
<div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md px-4 py-3 border-b border-gray-100 flex items-center justify-between">
<button
            onClick={() => {
              onClose();
              setIsCartOpen(true);
            }}
            className="relative p-2 rounded-full text-[#E51E2B] hover:bg-red-50 transition-colors"
            aria-label="عرض السلة"
          >
            <ShoppingCart className="w-6 h-6" />
            {totalItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#E51E2B] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalItemsCount}
              </span>
            )}
          </button>
<Logo size="sm" showText={true} />
<button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
<div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
<div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
<div className="text-right">
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-xl sm:text-2xl font-black text-gray-950 flex-1 text-right">
                {product.name}
              </h2>
            </div>

            <div className="mt-2 flex items-baseline justify-end gap-1">
              <span className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
                {formattedUnitPrice}
              </span>
              <span className="text-sm font-bold text-gray-500">د.ع</span>
            </div>

            <p className="mt-3 text-sm text-gray-600 leading-relaxed font-normal text-right">
              {product.description}
            </p>
          </div>
{product.options && product.options.length > 0 && (
            <div className="space-y-3 pt-2 border-t border-gray-100 text-right">
              {product.options.map((opt) => (
                <div key={opt.name} className="space-y-2">
                  <label className="text-xs font-bold text-gray-700 block">
                    {opt.name}
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {opt.choices.map((choice) => {
                      const isSelected = selectedOptions.some(
                        (o) => o.name === opt.name && o.choice === choice.label
                      );
                      return (
                        <button
                          key={choice.label}
                          type="button"
                          onClick={() =>
                            handleOptionChange(opt.name, choice.label, choice.priceDelta)
                          }
                          className={`p-2.5 rounded-xl border text-xs font-bold text-right transition-all flex items-center justify-between ${
                            isSelected
                              ? 'border-[#E51E2B] bg-red-50/50 text-[#E51E2B]'
                              : 'border-gray-200 hover:border-gray-300 text-gray-700 bg-white'
                          }`}
                        >
                          <span>{choice.label}</span>
                          {choice.priceDelta > 0 && (
                            <span className="text-[11px] opacity-75 font-semibold">
                              +{choice.priceDelta} د.ع
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
{product.addOns && product.addOns.length > 0 && (
            <div className="space-y-3 pt-2 border-t border-gray-100 text-right">
              <label className="text-xs font-bold text-gray-700 block">
                إضافات حسب رغبتك (اختياري)
              </label>
              <div className="space-y-2">
                {product.addOns.map((addon) => {
                  const isChecked = selectedAddOns.some((a) => a.id === addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddOn(addon)}
                      className={`w-full p-2.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-between ${
                        isChecked
                          ? 'border-[#E51E2B] bg-red-50/50 text-[#E51E2B]'
                          : 'border-gray-200 hover:border-gray-300 text-gray-700 bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border ${
                            isChecked
                              ? 'bg-[#E51E2B] border-[#E51E2B] text-white'
                              : 'border-gray-300'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span>{addon.label}</span>
                      </div>
                      <span className="text-xs text-gray-600 font-semibold">
                        +{new Intl.NumberFormat('en-US').format(addon.price)} د.ع
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
<div className="pt-2 border-t border-gray-100 text-right">
            <label className="text-xs font-bold text-gray-700 block mb-1.5">
              ملاحظات التحضير (اختياري)
            </label>
            <input
              type="text"
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              placeholder="مثال: سكر خفيف، بدون ثلج، صوص على جنب..."
              className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E51E2B]/20 focus:border-[#E51E2B]"
            />
          </div>
<div className="pt-3 border-t border-gray-100 flex items-center justify-between">
            <span className="font-extrabold text-sm sm:text-base text-gray-900">
              الكمية
            </span>
            <div className="inline-flex items-center border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                disabled={quantity <= 1}
                className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-200/70 transition-colors disabled:opacity-40"
                aria-label="تقليل الكمية"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-10 text-center font-black text-sm text-gray-900 tabular-nums">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-200/70 transition-colors"
                aria-label="زيادة الكمية"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
<div className="p-4 sm:p-5 bg-white border-t border-gray-100">
          <button
            onClick={handleAddToCart}
            disabled={isSuccess}
            className={`w-full py-3.5 sm:py-4 px-6 rounded-2xl text-white font-black text-base sm:text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-900/20 active:scale-[0.98] ${
              isSuccess ? 'bg-emerald-600' : 'bg-[#E51E2B] hover:bg-[#c91823]'
            }`}
          >
            {isSuccess ? (
              <>
                <Check className="w-5 h-5 stroke-[3]" />
                <span>تمت الإضافة بنجاح!</span>
              </>
            ) : (
              <>
                <span>إضافة إلى السلة</span>
                <span className="opacity-90 text-sm font-semibold">
                  ({formattedTotalPrice} د.ع)
                </span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
