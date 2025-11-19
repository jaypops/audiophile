"use client";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useRouter } from "next/navigation";
import { useCheckoutForm } from "@/hooks/useCheckoutForm";
import BillingSection from "./BillingSection";
import ShippingSection from "./ShippingSection";
import PaymentSection from "./PaymentSection";
import { Spinner } from "@/components/ui/spinner";
import OrderConfirmation from "../OrderConfirmation";

export default function CheckoutForm() {
  const router = useRouter();
  const {
    form,
    open,
    setOpen,
    submitFormData,
    handleContinueAndPay,
    isLoading,
  } = useCheckoutForm();
  const paymentMethod = form.watch("paymentMethod");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitFormData)}>
        <button
          onClick={() => router.back()}
          className="text-[#000000]/60 hover:text-[#D87D4A] flex items-center space-x-2 cursor-pointer pb-4 -mt-4 -ml-25"
        >
          ← Go Back
        </button>

        <div className="space-y-8 border border-none py-6 pb-10 px-10 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.3)] w-[620px]">
          <h1 className="text-2xl font-bold py-6">CHECKOUT</h1>

          <BillingSection control={form.control} isLoading={isLoading} />
          <ShippingSection control={form.control} isLoading={isLoading} />
          <PaymentSection
            control={form.control}
            paymentMethod={paymentMethod}
            isLoading={isLoading}
          />

          <div className="pb-4">
            <AlertDialog open={open} onOpenChange={setOpen}>
              <Button
                type="button"
                className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white py-4 px-6 rounded-lg text-xs cursor-pointer"
                onClick={handleContinueAndPay}
              >
                {isLoading ? (
                  <>
                    <Spinner /> Processing
                  </>
                ) : (
                  "Continue & Pay"
                )}
              </Button>

              <AlertDialogContent className="p-0 border-none bg-transparent shadow-none">
                <VisuallyHidden>
                  <AlertDialogTitle>Order Confirmation</AlertDialogTitle>
                </VisuallyHidden>
                <OrderConfirmation />
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </form>
    </Form>
  );
}
