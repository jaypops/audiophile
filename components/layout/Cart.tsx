"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCart } from "@/context/CartContext";
import { Trash } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function Cart() {
  const { cart, clearAllCart, clearSingleItem, checkout, subtotal } = useCart();
  const [Close, setClose] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [isProcessing, setIsProcessing] = useState(false);

  const isDisabledPage = pathname.startsWith("/checkout/order-confirmation");

  const handleCheckout = () => {
    if (isDisabledPage) return;

    try {
      setIsProcessing(true);
      const orderId = checkout();
      router.push(`/checkout/order-confirmation/${orderId}`);
      setClose((prev) => !prev);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      toast.error(message);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div>
      <DropdownMenu onOpenChange={setClose} open={Close}>
        <DropdownMenuTrigger>
          <Image
            src="/assets/carts.svg"
            alt="Cart"
            width={24}
            height={24}
            className={`
              ${cart.length === 0 ? "pointer-events-none opacity-40" : "cursor-pointer"}
            `}
          />
        </DropdownMenuTrigger>

        <DropdownMenuContent className="p-3 mt-8 w-[300px] md:w-[350px] mr-3">
          <DropdownMenuLabel>
            <div className="flex items-center justify-between pb-3">
              <h1 className="font-semibold text-xl text-[17px]">
                CART ({cart.length})
              </h1>
              <h2
                className={`
                  text-[#000000]/50
                  ${isDisabledPage ? "opacity-40 pointer-events-none" : "cursor-pointer hover:underline"}
                `}
                onClick={!isDisabledPage ? clearAllCart : undefined}
              >
                Remove all
              </h2>
            </div>
          </DropdownMenuLabel>

          {cart.length === 0 ? (
            <p className="text-center text-gray-500 py-4">Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div key={item.id}>
                <div className="flex items-center justify-between w-full space-y-3">
                  <div className="flex items-center space-x-3">
                    <Image
                      src={item.image.desktop.replace("./", "/")}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="rounded-sm"
                    />
                    <span className="flex flex-col space-y-1">
                      <h1 className="font-semibold text-sm md:text-lg">
                        {item.name}
                      </h1>
                      <p className="text-[#000000]/50 font-medium text-xs md:text-sm">
                        ${item.price}
                      </p>
                    </span>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <p className="md:text-sm text-[#D87D4A] font-medium text-center text-xs">
                      x{item.quantity}
                    </p>

                    <Trash
                      className={`
                        size-4
                        ${isDisabledPage ? "opacity-40 pointer-events-none" : "cursor-pointer hover:text-red-500"}
                      `}
                      onClick={
                        !isDisabledPage
                          ? () => clearSingleItem(item.id)
                          : undefined
                      }
                    />
                  </div>
                </div>
              </div>
            ))
          )}

          <div className="flex items-center justify-between pt-4 px-2">
            <h1 className="text-[#000000]/40 text-sm font-medium">TOTAL</h1>
            <p className=" font-bold text-sm md:text-[18px]">${subtotal}</p>
          </div>

          <div className="px-4 pt-4">
            <Button
              onClick={handleCheckout}
              disabled={isProcessing || cart.length === 0 || isDisabledPage}
              className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white py-4 px-6 w-full rounded-lg text-xs"
            >
              {isProcessing ? "Processing..." : "Place Order"}
            </Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
