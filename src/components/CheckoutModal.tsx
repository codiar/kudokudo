import React, { useState } from 'react';
import {
  X,
  FileText,
  CheckCircle2,
  Camera,
  Phone
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { BUSINESS_INFO } from '../data/cafeData';
import { Logo } from './Logo';

export const CheckoutModal: React.FC = () => {
  const {
    items,
    subtotal,
    isCheckoutOpen,
    setIsCheckoutOpen,
    customerDetails,
    setCustomerDetails,
    clearCart,
  } = useCart();

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [orderDate, setOrderDate] = useState('');

  if (!isCheckoutOpen) return null;

  const generateOrderId = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `ORD-${new Date().getFullYear()}-${code}`;
  };

  const handleConfirmOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerDetails.name.trim()) {
      alert('يرجى إدخال اسم العميل');
      return;
    }
    if (!customerDetails.phone.trim()) {
      alert('يرجى إدخال رقم هاتف العميل');
      return;
    }

    const newId = generateOrderId();
    const now = new Date().toLocaleTimeString('ar-IQ', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    setOrderId(newId);
    setOrderDate(now);
    setOrderPlaced(true);
  };

  const formattedSubtotal = new Intl.NumberFormat('en-US').format(subtotal);

  const handleFinishAndReset = () => {
    clearCart();
    setOrderPlaced(false);
    setIsCheckoutOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden my-4 border border-gray-100">
<div className="px-5 py-4 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#E51E2B]" />
            <h3 className="font-black text-gray-900 text-base sm:text-lg">
              {orderPlaced ? 'فاتورة الطلب' : 'تفاصيل الطلب'}
            </h3>
          </div>
          <button
            onClick={() => setIsCheckoutOpen(false)}
            className="p-1.5 rounded-full hover:bg-gray-200 text-gray-500 hover:text-gray-900 transition-colors"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
{!orderPlaced ? (
          <form onSubmit={handleConfirmOrder} className="p-5 sm:p-6 space-y-4">
<div className="space-y-1.5 text-right">
              <label className="text-xs font-bold text-gray-700 block">نوع الطلب</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'dine-in', label: 'داخل الكافيه (صالة)' },
                  { id: 'takeaway', label: 'سفري (استلام)' },
                  { id: 'delivery', label: 'توصيل' },
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() =>
                      setCustomerDetails((prev) => ({
                        ...prev,
                        orderType: type.id as any,
                      }))
                    }
                    className={`py-2 px-2 text-xs font-bold rounded-xl border transition-all ${
                      customerDetails.orderType === type.id
                        ? 'bg-[#1E1E1E] text-white border-[#1E1E1E]'
                        : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>
<div className="space-y-1 text-right">
              <label className="text-xs font-bold text-gray-700 block">
                اسم العميل <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={customerDetails.name}
                onChange={(e) =>
                  setCustomerDetails((prev) => ({ ...prev, name: e.target.value }))
                }
                placeholder="أدخل اسمك الكريم"
                className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#E51E2B]/20 focus:border-[#E51E2B]"
              />
            </div>
<div className="space-y-1 text-right">
              <label className="text-xs font-bold text-gray-700 block">
                رقم هاتفك <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                value={customerDetails.phone}
                onChange={(e) =>
                  setCustomerDetails((prev) => ({ ...prev, phone: e.target.value }))
                }
                placeholder="مثال: 077XXXXXXXX"
                className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-right focus:outline-none focus:ring-2 focus:ring-[#E51E2B]/20 focus:border-[#E51E2B]"
              />
            </div>
<div className="space-y-1 text-right">
              <label className="text-xs font-bold text-gray-700 block">
                {customerDetails.orderType === 'dine-in'
                  ? 'رقم الطاولة (إن كنت جالسًا داخل الكافيه)'
                  : 'العنوان بالتفصيل'}
              </label>
              <input
                type="text"
                value={customerDetails.tableOrAddress}
                onChange={(e) =>
                  setCustomerDetails((prev) => ({
                    ...prev,
                    tableOrAddress: e.target.value,
                  }))
                }
                placeholder={
                  customerDetails.orderType === 'dine-in'
                    ? 'مثال: طاولة 4'
                    : 'كربلاء - حي الحسين أو المنطقة'
                }
                className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#E51E2B]/20 focus:border-[#E51E2B]"
              />
            </div>
{customerDetails.orderType === 'delivery' && (
              <div className="space-y-1 text-right">
                <label className="text-xs font-bold text-gray-700 block">
                  أقرب نقطة دالة
                </label>
                <input
                  type="text"
                  value={customerDetails.landmark}
                  onChange={(e) =>
                    setCustomerDetails((prev) => ({
                      ...prev,
                      landmark: e.target.value,
                    }))
                  }
                  placeholder="مثال: قرب القاعة المغلقة"
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#E51E2B]/20 focus:border-[#E51E2B]"
                />
              </div>
            )}
<div className="space-y-1 text-right">
              <label className="text-xs font-bold text-gray-700 block">
                ملاحظات التحضير (اختياري)
              </label>
              <textarea
                rows={2}
                value={customerDetails.notes}
                onChange={(e) =>
                  setCustomerDetails((prev) => ({ ...prev, notes: e.target.value }))
                }
                placeholder="سكر خفيف، بدون ثلج، صوص على جنب..."
                className="w-full px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#E51E2B]/20 focus:border-[#E51E2B]"
              />
            </div>
<div className="p-3 bg-gray-50 rounded-2xl border border-gray-200/80 text-xs space-y-1.5">
              <div className="font-bold text-gray-800 flex justify-between">
                <span>ملخص الطلبات:</span>
                <span>{items.length} أصناف</span>
              </div>
              <div className="max-h-24 overflow-y-auto space-y-1 text-gray-600">
                {items.map((it) => (
                  <div key={it.itemKey} className="flex justify-between">
                    <span>
                      {it.product.name} × {it.quantity}
                    </span>
                    <span>{new Intl.NumberFormat('en-US').format(it.totalPrice)} د.ع</span>
                  </div>
                ))}
              </div>
              <div className="pt-2 border-t border-gray-200 flex justify-between font-black text-sm text-gray-900">
                <span>الإجمالي:</span>
                <span className="text-[#E51E2B]">{formattedSubtotal} د.ع</span>
              </div>
            </div>
<button
              type="submit"
              className="w-full py-4 px-6 rounded-2xl bg-[#E51E2B] hover:bg-[#c91823] text-white font-black text-base shadow-lg shadow-red-900/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <FileText className="w-5 h-5 text-amber-300" />
              <span>إصدار الفاتورة</span>
            </button>
          </form>
        ) : (
          <div className="p-4 sm:p-6 space-y-4">
<div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 flex items-center gap-3.5 text-right shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md">
                <Camera className="w-6 h-6 animate-bounce" />
              </div>
              <div>
                <p className="font-black text-sm sm:text-base text-amber-950">
                  تم إصدار الفاتورة
                </p>
                <p className="text-xs text-amber-900 mt-0.5 font-medium leading-relaxed">
                  يمكنك عرض هذه الفاتورة على الكاشير عند المحاسبة أو الاستلام.
                </p>
              </div>
            </div>
<div className="p-6 bg-white rounded-3xl border-2 border-gray-900 shadow-xl relative text-right space-y-4">
<div className="text-center pb-4 border-b-2 border-gray-200 space-y-1.5">
                <div className="flex justify-center mb-1">
                  <Logo size="md" showText={false} />
                </div>
                <h4 className="font-black text-xl text-gray-950">
                  {BUSINESS_INFO.name}
                </h4>
                <p className="text-xs text-gray-500 font-medium">
                  {BUSINESS_INFO.address}
                </p>
                <p className="text-xs font-bold text-gray-700">
                  هاتف الكافيه: {BUSINESS_INFO.primaryPhone}
                </p>
<div className="inline-block mt-2 px-5 py-1.5 bg-[#1E1E1E] text-white rounded-xl text-base font-black tracking-wider">
                  رقم الطلب: {orderId}
                </div>
              </div>
<div className="grid grid-cols-2 gap-3 text-xs text-gray-700 border-b-2 border-gray-200 pb-4">
                <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                  <span className="text-gray-400 block text-[11px] font-semibold">اسم العميل:</span>
                  <span className="font-black text-sm text-gray-900">{customerDetails.name}</span>
                </div>
                <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                  <span className="text-gray-400 block text-[11px] font-semibold">رقم هاتف العميل:</span>
                  <span className="font-black text-sm text-gray-900">{customerDetails.phone}</span>
                </div>
                <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                  <span className="text-gray-400 block text-[11px] font-semibold">نوع الطلب:</span>
                  <span className="font-black text-sm text-[#E51E2B]">
                    {customerDetails.orderType === 'dine-in'
                      ? 'داخل الكافيه (صالة)'
                      : customerDetails.orderType === 'takeaway'
                      ? 'سفري (استلام من الكافيه)'
                      : 'توصيل'}
                  </span>
                </div>
                <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                  <span className="text-gray-400 block text-[11px] font-semibold">وقت إصدار الفاتورة:</span>
                  <span className="font-bold text-sm text-gray-900">{orderDate}</span>
                </div>
                {customerDetails.tableOrAddress && (
                  <div className="col-span-2 bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                    <span className="text-gray-400 block text-[11px] font-semibold">
                      {customerDetails.orderType === 'dine-in' ? 'رقم الطاولة:' : 'العنوان بالتفصيل:'}
                    </span>
                    <span className="font-black text-sm text-gray-950">{customerDetails.tableOrAddress}</span>
                  </div>
                )}
                {customerDetails.notes && (
                  <div className="col-span-2 bg-red-50/60 p-2.5 rounded-xl border border-red-100 text-red-900">
                    <span className="text-red-500 block text-[11px] font-semibold">ملاحظات التحضير:</span>
                    <span className="font-bold text-xs">{customerDetails.notes}</span>
                  </div>
                )}
              </div>
<div className="space-y-3 py-2 text-sm">
                <div className="flex justify-between font-bold text-xs text-gray-400 border-b border-gray-100 pb-1">
                  <span>الصنف والكمية</span>
                  <span>السعر الإجمالي</span>
                </div>
                {items.map((item) => (
                  <div key={item.itemKey} className="flex justify-between items-start">
                    <div className="text-right">
                      <span className="font-black text-gray-950 text-base">
                        {item.product.name} <span className="text-red-600 font-black">× {item.quantity}</span>
                      </span>
                      {item.selectedOptions && item.selectedOptions.length > 0 && (
                        <div className="text-xs text-gray-500">
                          {item.selectedOptions.map((o) => o.choice).join(', ')}
                        </div>
                      )}
                      {item.selectedAddOns && item.selectedAddOns.length > 0 && (
                        <div className="text-xs text-amber-700 font-semibold">
                          +{item.selectedAddOns.map((a) => a.label).join(', ')}
                        </div>
                      )}
                    </div>
                    <span className="font-black text-gray-950 text-base shrink-0">
                      {new Intl.NumberFormat('en-US').format(item.totalPrice)} د.ع
                    </span>
                  </div>
                ))}
              </div>
<div className="pt-4 border-t-4 border-gray-900 flex justify-between items-center bg-gray-50 p-4 rounded-2xl">
                <div>
                  <span className="text-xs font-bold text-gray-500 block">المبلغ الإجمالي للدفع:</span>
                  <span className="text-xs text-gray-400">شامل كافة الإضافات</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-[#E51E2B] tracking-tight">
                  {formattedSubtotal} <span className="text-base font-bold text-gray-900">د.ع</span>
                </div>
              </div>
<div className="pt-2 flex flex-col items-center justify-center gap-1.5 border-t border-gray-200">
                <div className="h-10 flex items-center gap-1 justify-center opacity-85">
                  {[4, 2, 5, 2, 3, 2, 6, 2, 4, 1, 5, 3, 2, 4, 6, 2, 1, 4, 3, 5, 2, 4, 2, 5, 3].map((w, idx) => (
                    <span
                      key={idx}
                      className="bg-black inline-block h-full"
                      style={{ width: `${w}px` }}
                    ></span>
                  ))}
                </div>
                <span className="text-xs text-gray-600 font-mono font-bold tracking-widest">
                  {orderId}
                </span>
                <span className="text-[11px] text-gray-400 font-semibold">
                  شكراً لاختياركم كودو كودو كافيه - مكانك للمزاج
                </span>
              </div>
            </div>
<div className="pt-2 space-y-2">
              <button
                onClick={handleFinishAndReset}
                className="w-full py-4 px-6 rounded-2xl bg-[#E51E2B] hover:bg-[#c91823] text-white font-black text-base shadow-lg shadow-red-900/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                <span>إغلاق الفاتورة</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
