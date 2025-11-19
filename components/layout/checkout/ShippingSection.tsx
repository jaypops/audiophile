"use client";

import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormValues } from "./types";
// import { useCheckoutForm } from "@/hooks/useCheckoutForm";

interface ShippingSectionProps {
  control: Control<FormValues>;
  isLoading: boolean;
}

export default function ShippingSection({
  control,
  isLoading,
}: ShippingSectionProps) {
  // const { isLoading } = useCheckoutForm();
  return (
    <section>
      <h2 className="text-sm text-orange-500 font-bold mb-4">SHIPPING INFO</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <FormField
          control={control}
          name="address"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input
                  placeholder="1137 Williams Avenue"
                  {...field}
                  className="py-4"
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="zipCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ZIP Code</FormLabel>
              <FormControl>
                <Input
                  placeholder="10001"
                  {...field}
                  className="py-4"
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input
                  placeholder="New York"
                  {...field}
                  className="py-4"
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="country"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>Country</FormLabel>
              <FormControl>
                <Input
                  placeholder="United States"
                  {...field}
                  className="py-4"
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </section>
  );
}
