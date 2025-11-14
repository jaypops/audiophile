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

export function useCheckoutForm() {
  const [open, setOpen] = useState(false);
  const { cart, subtotal, vat, grandTotal, shipping } = useCart();
  const createForm = useMutation(api.form.createOrder);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultFormValues,
  });

  const submitFormData = async (values: FormValues) => {
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

      const orderId = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

      const orderDate = new Date().toISOString();

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

      await fetch("/api/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId }),
      });

      setOpen(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong!");
    }
  };

  const handleContinueAndPay = async () => {
    const isValid = await form.trigger();
    if (isValid) {
      await submitFormData(form.getValues());
    }
  };

  return {
    form,
    open,
    setOpen,
    submitFormData,
    handleContinueAndPay,
  };
}
