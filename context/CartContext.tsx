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

type Order = {
  orderId: string;
  items: CartItem[];
  total: number;
  date: string;
};

type CartContextType = {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  updateQuantity: (id: number, quantity: number) => void;
  clearAllCart: () => void;
  clearSingleItem: (id: number) => void;
  checkout: () => string;
  orders: Order[];
  getOrderById: (orderId: string) => Order | undefined;
  shipping: number;
  subtotal: number;
  vat: number;
  grandTotal: number;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      Promise.resolve().then(() => {
        setCart(JSON.parse(storedCart));
      });
    }

    const storedOrders = localStorage.getItem("orders");
    if (storedOrders) {
      Promise.resolve().then(() => {
        setOrders(JSON.parse(storedOrders));
      });
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("cart");
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
  };

  const shipping = 50;
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const vat = Math.round(subtotal * 0.2);
  const grandTotal = subtotal + shipping + vat;

  const checkout = () => {
    if (cart.length === 0) {
      throw new Error("Cart is empty");
    }

    const orderId = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

    const newOrder: Order = {
      orderId,
      items: [...cart],
      total: grandTotal,
      date: new Date().toISOString(),
    };

    const updatedOrders = [...orders, newOrder];
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    return orderId;
  };

  const getOrderById = (orderId: string): Order | undefined => {
    return orders.find((order) => order.orderId === orderId);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        updateQuantity,
        clearAllCart,
        clearSingleItem,
        checkout,
        orders,
        shipping,
        vat,
        grandTotal,
        subtotal,
        getOrderById,
      }}
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
