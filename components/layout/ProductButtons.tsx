"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

export default function ProductButtons({ itemId }: { itemId: number }) {
  const { cart, updateQuantity } = useCart();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const existingItem = cart.find((item) => item.id === itemId);
    if (existingItem && existingItem.quantity !== quantity) {
      Promise.resolve().then(() => setQuantity(existingItem.quantity));
    }
  }, [cart, itemId, quantity]);

  const increase = () => {
    const newQty = quantity + 1;
    setQuantity(newQty);
    updateQuantity(itemId, newQty);
  };

  const decrease = () => {
    if (quantity > 1) {
      const newQty = quantity - 1;
      setQuantity(newQty);
      updateQuantity(itemId, newQty);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <Button onClick={decrease} className="px-3 py-1 text-lg font-bold">
        –
      </Button>
      <span className="font-semibold">{quantity}</span>
      <Button onClick={increase} className="px-3 py-1 text-lg font-bold">
        +
      </Button>
    </div>
  );
}
