import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  orders: defineTable({
    orderId: v.string(),
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    address: v.string(),
    zipCode: v.string(),
    city: v.string(),
    country: v.string(),
    paymentMethod: v.string(),
    eMoneyNumber: v.optional(v.string()),
    eMoneyPIN: v.optional(v.string()),
    cartItems: v.array(
      v.object({
        id: v.number(),
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
        image: v.object({
          desktop: v.string(),
          tablet: v.string(),
          mobile: v.string(),
        }),
      })
    ),

    subtotal: v.number(),
    grandTotal: v.number(),
    vat: v.number(),
    shipping: v.number(),
    orderDate: v.string(),

    status: v.optional(v.string()),
  })
    .index("by_orderId", ["orderId"])
    .index("by_orderDate", ["orderDate"]),
});
