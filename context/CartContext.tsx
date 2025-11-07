"use client";

import { createContext, useContext, useEffect, useState } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
};

type CartContextType = {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  updateQuantity: (id: number, quantity: number) => void;
  clearAllCart: () => void;
  clearSingleItem: (id: number) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      Promise.resolve().then(() => {
        setCart(JSON.parse(storedCart));
      });
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const updateQuantity = (id: number, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearAllCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  const clearSingleItem = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    console.log("hello")
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, updateQuantity, clearAllCart, clearSingleItem }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
