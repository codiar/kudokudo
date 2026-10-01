import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../data/cafeData';

export interface CartItem {
  itemKey: string;
  product: Product;
  quantity: number;
  selectedOptions?: { name: string; choice: string; priceDelta: number }[];
  selectedAddOns?: { id: string; label: string; price: number }[];
  unitPrice: number;
  totalPrice: number;
  specialInstructions?: string;
}

export interface CustomerDetails {
  name: string;
  phone: string;
  orderType: 'dine-in' | 'takeaway' | 'delivery';
  tableOrAddress: string;
  landmark: string;
  notes: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (
    product: Product,
    quantity: number,
    selectedOptions?: { name: string; choice: string; priceDelta: number }[],
    selectedAddOns?: { id: string; label: string; price: number }[],
    specialInstructions?: string
  ) => void;
  updateQuantity: (itemKey: string, delta: number) => void;
  removeItem: (itemKey: string) => void;
  clearCart: () => void;
  totalItemsCount: number;
  subtotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  customerDetails: CustomerDetails;
  setCustomerDetails: React.Dispatch<React.SetStateAction<CustomerDetails>>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'kudo_kudo_cart_v1';
const CUSTOMER_STORAGE_KEY = 'kudo_kudo_customer_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>(() => {
    try {
      const saved = localStorage.getItem(CUSTOMER_STORAGE_KEY);
      return saved
        ? JSON.parse(saved)
        : {
            name: '',
            phone: '',
            orderType: 'dine-in',
            tableOrAddress: '',
            landmark: '',
            notes: '',
          };
    } catch {
      return {
        name: '',
        phone: '',
        orderType: 'dine-in',
        tableOrAddress: '',
        landmark: '',
        notes: '',
      };
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch {
    }
  }, [items]);

  useEffect(() => {
    try {
      localStorage.setItem(CUSTOMER_STORAGE_KEY, JSON.stringify(customerDetails));
    } catch {
    }
  }, [customerDetails]);

  const addToCart = (
    product: Product,
    quantity: number,
    selectedOptions: { name: string; choice: string; priceDelta: number }[] = [],
    selectedAddOns: { id: string; label: string; price: number }[] = [],
    specialInstructions = ''
  ) => {
    const optionsKey = selectedOptions
      .map((o) => `${o.name}:${o.choice}`)
      .sort()
      .join('|');
    const addOnsKey = selectedAddOns
      .map((a) => a.id)
      .sort()
      .join('|');
    const itemKey = `${product.id}__${optionsKey}__${addOnsKey}__${specialInstructions}`;

    const optionDelta = selectedOptions.reduce((sum, o) => sum + o.priceDelta, 0);
    const addOnsDelta = selectedAddOns.reduce((sum, a) => sum + a.price, 0);
    const unitPrice = product.price + optionDelta + addOnsDelta;

    setItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.itemKey === itemKey);
      if (existingIndex > -1) {
        const next = [...prev];
        const newQty = next[existingIndex].quantity + quantity;
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: newQty,
          totalPrice: newQty * unitPrice,
        };
        return next;
      }
      return [
        ...prev,
        {
          itemKey,
          product,
          quantity,
          selectedOptions,
          selectedAddOns,
          unitPrice,
          totalPrice: quantity * unitPrice,
          specialInstructions,
        },
      ];
    });
  };

  const updateQuantity = (itemKey: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.itemKey === itemKey) {
            const newQty = item.quantity + delta;
            if (newQty <= 0) return null;
            return {
              ...item,
              quantity: newQty,
              totalPrice: newQty * item.unitPrice,
            };
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const removeItem = (itemKey: string) => {
    setItems((prev) => prev.filter((item) => item.itemKey !== itemKey));
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        updateQuantity,
        removeItem,
        clearCart,
        totalItemsCount,
        subtotal,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        customerDetails,
        setCustomerDetails,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
