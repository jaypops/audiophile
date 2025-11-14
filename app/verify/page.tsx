"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

interface OrderConfirmationPageProps {
  onClose?: () => void;
}

export default function OrderConfirmationPage({ onClose }: OrderConfirmationPageProps) {
  const { cart, grandTotal } = useCart();

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[320px] sm:w-[400px] p-6 space-y-5 shadow-lg text-center">
        <div className="flex justify-center">
          <CheckCircle className="w-10 h-10 text-[#D87D4A]" />
        </div>

        <h1 className="text-xl font-bold leading-tight">
          THANK YOU <br /> FOR YOUR ORDER
        </h1>

        <p className="text-sm text-[#000000]/60">
          You will receive an email confirmation shortly.
        </p>

        {cart.slice(0, 1).map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row overflow-hidden rounded-lg"
          >
            <div className="bg-[#F1F1F1] flex-1 p-4 flex flex-col space-y-3 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none">
              <div className="flex items-center space-x-3">
                <Image
                  src={item.image.desktop.replace("./", "/")}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
                <div className="flex-1 text-left">
                  <h3 className="text-sm font-bold">{item.name}</h3>
                  <p className="text-xs text-[#000000]/50">${item.price}</p>
                </div>
                <p className="text-xs font-semibold text-[#000000]/60">
                  x{item.quantity}
                </p>
              </div>
              {cart.length > 1 && (
                <p className="text-xs text-[#000000]/50 text-left">
                  and {cart.length - 1} other item
                  {cart.length - 1 > 1 ? "s" : ""}
                </p>
              )}
            </div>

            <div className="bg-[#000000] text-white p-4 flex flex-col justify-center sm:w-[140px] rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none">
              <p className="text-xs text-[#FFFFFF]/60 uppercase">Grand Total</p>
              <h2 className="text-lg font-bold">$ {grandTotal}</h2>
            </div>
          </div>
        ))}

        <Link href="/" onClick={onClose}>
          <Button className="w-full bg-[#D87D4A] hover:bg-[#FBAF85] text-white py-5 text-sm rounded-md cursor-pointer">
            BACK TO HOME
          </Button>
        </Link>
      </div>
    </div>
  );
}
