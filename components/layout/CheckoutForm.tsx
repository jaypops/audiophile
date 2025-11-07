"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(8, "Invalid phone number"),
  address: z.string().min(3, "Address required"),
  zipCode: z.string().min(4, "Invalid ZIP code"),
  city: z.string().min(2, "City required"),
  country: z.string().min(2, "Country required"),
  paymentMethod: z.enum(["e-Money", "Cash on Delivery"]),
  eMoneyNumber: z.string().optional(),
  eMoneyPIN: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function CheckoutForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      zipCode: "",
      city: "",
      country: "",
      paymentMethod: "e-Money",
      eMoneyNumber: "",
      eMoneyPIN: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  const paymentMethod = form.watch("paymentMethod");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-8 border border-none py-6 pb-10 px-10 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.3)] w-[620px] ">
          <section>
            <h1 className="text-2xl font-bold py-6">CHECKOUT</h1>
            <h2 className="text-sm text-orange-500 font-bold mb-4">
              BILLING DETAILS
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Alexei Ward" {...field} className=" py-4"  />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="alexei@mail.com" {...field} className=" py-4" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+1 202-555-0136" {...field} className=" py-4" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </section>

          {/* Shipping Info */}
          <section>
            <h2 className="text-sm text-orange-500 font-bold mb-4">
              SHIPPING INFO
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input placeholder="1137 Williams Avenue" {...field} className=" py-4" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="zipCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ZIP Code</FormLabel>
                    <FormControl>
                      <Input placeholder="10001" {...field} className=" py-4" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="New York" {...field} className=" py-4" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <Input placeholder="United States" {...field} className=" py-4" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </section>

          {/* Payment Details */}
          <section>
            <h2 className="text-sm text-orange-500 font-bold mb-4">
              PAYMENT DETAILS
            </h2>

            <FormField
              control={form.control}
              name="paymentMethod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Payment Method</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="grid md:grid-cols-2 gap-2"
                    >
                      <FormItem className="flex items-center space-x-2 border p-3 rounded-md">
                        <FormControl>
                          <RadioGroupItem value="e-Money" />
                        </FormControl>
                        <FormLabel className="m-0">e-Money</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2 border p-3 rounded-md">
                        <FormControl>
                          <RadioGroupItem value="Cash on Delivery" />
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
                  control={form.control}
                  name="eMoneyNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>e-Money Number</FormLabel>
                      <FormControl>
                        <Input placeholder="238521993" {...field} className=" py-4" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="eMoneyPIN"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>e-Money PIN</FormLabel>
                      <FormControl>
                        <Input placeholder="6891" {...field} className=" py-4" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
          </section>
        </div>
      </form>
    </Form>
  );
}
