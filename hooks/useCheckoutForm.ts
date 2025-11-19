import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useCart } from "@/context/CartContext";
import {
  formSchema,
  defaultFormValues,
  FormValues,
} from "@/components/layout/checkout/types";
import { toast } from "sonner";

export function useCheckoutForm() {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { cart, subtotal, vat, grandTotal, shipping, } = useCart();
  const createForm = useMutation(api.form.createOrder);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultFormValues,
  });

  const submitFormData = async (values: FormValues) => {
    setIsLoading(true);
    try {
      const cartItems = cart.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: {
          desktop: item.image.desktop,
          tablet: item.image.tablet,
          mobile: item.image.mobile,
        },
      }));

      const orderId = `ORD-${Date.now()}-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
      const orderDate = new Date().toISOString();

      // Create order in database
      await createForm({
        ...values,
        cartItems,
        orderId,
        subtotal,
        vat,
        grandTotal,
        shipping,
        orderDate,
        status: "pending",
      });

      // Send verification email (non-blocking)
      try {
        const response = await fetch("/api/emails", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ orderId }),
        });

        if (!response.ok) {
          console.error("Failed to send verification email");
          toast.warning("Order created but verification email failed to send");
        }
      } catch (emailError) {
        console.error("Email sending error:", emailError);
        toast.warning("Order created but verification email failed to send");
      }

      // Success actions
      setOpen(true);
      toast.success("Order created successfully!");
      form.reset();
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to create order. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleContinueAndPay = async () => {
    const isValid = await form.trigger();
    if (isValid) {
      await submitFormData(form.getValues());
    }
  };

  return {
    isLoading,
    form,
    open,
    setOpen,
    submitFormData,
    handleContinueAndPay,
  };
}