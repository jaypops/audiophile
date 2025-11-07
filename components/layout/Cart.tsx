"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCart } from "@/context/CartContext";
import { Trash } from "lucide-react";

export default function Cart() {
  const { cart, clearAllCart, clearSingleItem } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Image
            src="/assets/carts.svg"
            alt="Cart"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </DropdownMenuTrigger>

        <DropdownMenuContent className="p-3 mt-8 w-[350px] mr-10">
          <DropdownMenuLabel>
            <div className="flex items-center justify-between pb-3">
              <h1 className="font-semibold text-xl text-[17px]">
                CART ({cart.length})
              </h1>
              <h2
                className="cursor-pointer hover:underline text-[#000000]/50"
                onClick={clearAllCart}
              >
                Remove all
              </h2>
            </div>
          </DropdownMenuLabel>
          {cart.length === 0 ? (
            <p className="text-center text-gray-500 py-4">Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} onSelect={(e) => e.preventDefault()}>
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
                      <h1 className="font-semibold">{item.name}</h1>
                      <p className="text-[#000000]/50 font-medium">
                        ${item.price}
                      </p>
                    </span>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <p className="text-sm text-[#D87D4A] font-medium text-center">
                      x{item.quantity}
                    </p>
                    <span>
                      <Trash
                        className="cursor-pointer hover:text-red-500 size-4"
                        onClick={() => clearSingleItem(item.id)}
                      />
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}

          <div className="flex items-center justify-between pt-4 px-2">
            <h1 className="text-[#000000]/40 text-sm font-medium">TOTAL</h1>
            <p className="text-xl font-bold text-[18px]">${total}</p>
          </div>

          <div className="px-4 pt-2">
            <Link href="/checkout">
              <Button className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white py-4 px-6 w-full rounded-lg text-xs cursor-pointer">
                CHECKOUT
              </Button>
            </Link>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
