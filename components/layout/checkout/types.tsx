import { z } from "zod";

export const formSchema = z.object({
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

export type FormValues = z.infer<typeof formSchema>;

export const defaultFormValues: FormValues = {
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
};