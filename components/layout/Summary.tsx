"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

export default function Summary() {
  const { cart, grandTotal, shipping, vat, subtotal } = useCart();

  return (
    <div className="space-y-8 border border-none pt-6 px-5 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.3)]  w-[350px] overflow-y-auto mt-6 h-fit">
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
      <div className="pb-4">
        <div className="flex items-center justify-between pt-3">
          <h1 className="text-[#000000]/40 text-sm ">TOTAL</h1>
          <p className="text-xl font-semibold text-[18px]">${subtotal}</p>
        </div>
        <div className="flex items-center justify-between pt-3">
          <h1 className="text-[#000000]/40 text-sm ">SHIPPING</h1>
          <p className="text-xl font-semibold text-[18px]">${shipping}</p>
        </div>
        <div className="flex items-center justify-between pt-3">
          <h1 className="text-[#000000]/40 text-sm ">VAT (INCLUDED)</h1>
          <p className="text-xl font-semibold text-[18px]">${vat}</p>
        </div>
        <div className="flex items-center justify-between pt-6">
          <h1 className="text-[#000000]/40 text-sm font-medium">GRAND TOTAL</h1>
          <p className="text-xl font-bold text-[18px] text-[#D87D4A]">
            ${grandTotal}
          </p>
        </div>
      </div>
    </div>
  );
}
