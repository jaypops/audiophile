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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormValues } from "./types";

interface PaymentSectionProps {
  control: Control<FormValues>;
  paymentMethod: "e-Money" | "Cash on Delivery";
  isLoading: boolean;
}

export default function PaymentSection({
  control,
  paymentMethod,
  isLoading,
}: PaymentSectionProps) {
  return (
    <section>
      <h2 className="text-sm text-orange-500 font-bold mb-4">
        PAYMENT DETAILS
      </h2>

      <FormField
        control={control}
        name="paymentMethod"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Payment Method</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value}
                disabled={isLoading}
                className="grid md:grid-cols-2 gap-2"
              >
                <FormItem className="flex items-center space-x-2 border p-3 rounded-md">
                  <FormControl>
                    <RadioGroupItem value="e-Money" disabled={isLoading} />
                  </FormControl>
                  <FormLabel className="m-0">e-Money</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-2 border p-3 rounded-md">
                  <FormControl>
                    <RadioGroupItem
                      value="Cash on Delivery"
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormLabel className="m-0">Cash on Delivery</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {paymentMethod === "e-Money" && (
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <FormField
            control={control}
            name="eMoneyNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>e-Money Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="238521993"
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
            name="eMoneyPIN"
            render={({ field }) => (
              <FormItem>
                <FormLabel>e-Money PIN</FormLabel>
                <FormControl>
                  <Input
                    placeholder="6891"
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
      )}
    </section>
  );
}
