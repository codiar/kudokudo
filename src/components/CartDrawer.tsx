import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowLeft, Coffee } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeItem,
    clearCart,
    totalItemsCount,
    subtotal,
    setIsCheckoutOpen,
  } = useCart();

  if (!isCartOpen) return null;

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const formattedSubtotal = new Intl.NumberFormat('en-US').format(subtotal);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 left-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col h-full animate-in slide-in-from-left duration-300">
<div className="px-5 py-4 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1.5 rounded-full hover:bg-gray-200 text-gray-500 hover:text-gray-900 transition-colors"
                aria-label="إغلاق السلة"
              >
                <X className="w-5 h-5" />
              </button>
              <h2 className="text-lg font-black text-gray-900 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#E51E2B]" />
                <span>سلة طلباتك</span>
                <span className="text-xs font-bold text-white bg-[#E51E2B] px-2 py-0.5 rounded-full">
                  {totalItemsCount}
                </span>
              </h2>
            </div>

            {items.length > 0 && (
              <button
                onClick={clearCart}
                className="text-xs text-red-600 hover:text-red-700 font-bold hover:underline"
              >
                تفريغ السلة
              </button>
            )}
          </div>
<div className="flex-1 overflow-y-auto p-4 space-y-3">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center text-[#E51E2B]">
                  <Coffee className="w-10 h-10 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-gray-900 mb-1">
                    سلتك فارغة حاليًا
                  </h3>
                  <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
                    تفضل باختيار مشروبك المفضل، الكريب أو الوافل الشهي لتجربة لا تقاوم.
                  </p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 bg-[#1E1E1E] text-white text-sm font-bold rounded-xl hover:bg-black transition-colors"
                >
                  تصفح المنيو الآن
                </button>
              </div>
            ) : (
              items.map((item) => {
                const itemFormattedPrice = new Intl.NumberFormat('en-US').format(item.totalPrice);
                return (
                  <div
                    key={item.itemKey}
                    className="p-3 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3 transition-all hover:border-gray-200"
                  >
<img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 rounded-xl object-cover shrink-0 bg-gray-50"
                    />
<div className="flex-1 min-w-0 text-right">
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="font-bold text-sm text-gray-900 truncate">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeItem(item.itemKey)}
                          className="text-gray-400 hover:text-red-600 p-1 transition-colors"
                          aria-label="حذف المنتج"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
{item.selectedOptions && item.selectedOptions.length > 0 && (
                        <div className="text-[11px] text-gray-500 mt-0.5">
                          {item.selectedOptions.map((o) => `${o.name}: ${o.choice}`).join(' • ')}
                        </div>
                      )}
                      {item.selectedAddOns && item.selectedAddOns.length > 0 && (
                        <div className="text-[11px] text-amber-700 font-medium">
                          + {item.selectedAddOns.map((a) => a.label).join('، ')}
                        </div>
                      )}
                      {item.specialInstructions && (
                        <div className="text-[10px] text-gray-400 italic">
                          "{item.specialInstructions}"
                        </div>
                      )}
<div className="flex items-center justify-between mt-2">
                        <div className="inline-flex items-center border border-gray-200 rounded-lg bg-gray-50 overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.itemKey, -1)}
                            className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-gray-200 text-xs"
                            aria-label="تقليل"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-7 text-center font-bold text-xs text-gray-900 tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.itemKey, 1)}
                            className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-gray-200 text-xs"
                            aria-label="زيادة"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="text-left font-black text-sm text-[#E51E2B]">
                          {itemFormattedPrice} <span className="text-[10px] font-normal text-gray-500">د.ع</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
{items.length > 0 && (
            <div className="p-5 bg-gray-50 border-t border-gray-100 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 font-semibold">المجموع الإجمالي:</span>
                <span className="text-xl font-black text-gray-950">
                  {formattedSubtotal} <span className="text-xs font-bold text-gray-500">د.ع</span>
                </span>
              </div>

              <button
                onClick={handleProceedToCheckout}
                className="w-full py-3.5 px-6 rounded-2xl bg-[#E51E2B] hover:bg-[#c91823] text-white font-black text-base transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-900/20 active:scale-[0.98]"
              >
                <span>متابعة الطلب وإصدار الفاتورة</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
