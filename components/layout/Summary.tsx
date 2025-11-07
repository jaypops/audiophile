"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

export default function Summary() {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div className="space-y-8 border border-none pt-6 px-5 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.3)] h-[420px] w-[350px] overflow-y-auto">
      <h1 className="font-semibold text-xl">Order Summary</h1>
      {cart.map((item) => (
        <div key={item.id} className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-3">
            <Image
              src={item.image.desktop.replace("./", "/")}
              alt={item.name}
              width={60}
              height={60}
              className="rounded-sm"
            />
            <span className="flex flex-col space-y-1">
              <h1 className="font-semibold">{item.name}</h1>
              <p className="text-[#000000]/50 font-medium">${item.price}</p>
            </span>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-sm text-[#D87D4A] font-medium text-center">
              x{item.quantity}
            </p>
          </div>
        </div>
      ))}
      <div className="flex items-center justify-between pt-4">
        <h1 className="text-[#000000]/40 text-sm font-medium">TOTAL</h1>
        <p className="text-xl font-bold text-[18px]">${total}</p>
      </div>
      <div className="pb-4">
        <Button
          type="submit"
          className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white py-4 px-6 w-full rounded-lg text-xs cursor-pointer"
        >
          CONTINUE & PAY
        </Button>
      </div>
    </div>
  );
}
