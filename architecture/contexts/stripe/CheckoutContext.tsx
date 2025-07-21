import React, { createContext, useState, type ReactNode } from "react";

export interface CartItem {
  id: string;
  quantity: number;
}

export interface CheckoutContextValue {
  cart: CartItem[];
}

export const CheckoutContext = createContext<CheckoutContextValue | undefined>(undefined);

export const CheckoutProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  return (
    <CheckoutContext.Provider value={{ cart }}>
      {children}
    </CheckoutContext.Provider>
  );
};
