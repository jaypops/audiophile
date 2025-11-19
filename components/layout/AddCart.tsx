"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
}

export default function AddCart({ product }: { product: CartItem }) {
  const { cart, setCart } = useCart();

  const handleAddToCart = () => {
    const existingItem = cart.find((item) => item.id === product.id);
    const currentQuantity = existingItem?.quantity || 1;

    const newItem: CartItem = {
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      quantity: currentQuantity,
    };

    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) => item.id === newItem.id
      );

      let updatedCart;
      if (existingItemIndex > -1) {
        updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: currentQuantity,
        };
      } else {
        updatedCart = [...prevCart, newItem];
      }

      return updatedCart;
    });

    toast.success(`${newItem.name} has been added to the cart.`);
  };

  return (
    <Button
      onClick={handleAddToCart}
      className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white py-2 px-5 rounded-lg text-xs cursor-pointer"
    >
      ADD TO CART
    </Button>
  );
}
