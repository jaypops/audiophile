"use client";

import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function OrderConfirmation() {
  const { clearAllCart } = useCart();
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center space-y-6">
        <div className="flex justify-center">
          <div className="relative">
            <CheckCircle
              className="w-20 h-20 text-green-500"
              strokeWidth={1.5}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Spinner className="w-16 h-16 text-green-400 animate-spin opacity-30" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">
            Order Placed Successfully!
          </h1>
          <p className="text-gray-500 text-sm">Thank you for your purchase</p>
        </div>

        <div className="py-4">
          <Spinner className="w-8 h-8 text-[#D87D4A] animate-spin mx-auto" />
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <p className="text-gray-700 font-medium">
            Check your email for order confirmation
          </p>
          <p className="text-gray-500 text-sm mt-1">
            We've sent detailed information about your order
          </p>
        </div>

        <div className="space-y-3 pt-4">
          <Link href="/" className="block">
            <Button
              onClick={() => clearAllCart()}
              className="w-full bg-[#D87D4A] hover:bg-[#FBAF85] text-white py-6 rounded-lg font-semibold"
            >
              Back to Home
            </Button>
          </Link>
          <a href="/headphones" className="block">
            <Button
              onClick={() => clearAllCart()}
              variant="outline"
              className="w-full border-2 border-gray-300 hover:border-[#D87D4A] py-6 rounded-lg font-semibold"
            >
              Continue Shopping
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
