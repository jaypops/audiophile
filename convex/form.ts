import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createOrder = mutation({
  args: {
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
  },
  handler: async (ctx, args) => {
    const orderId = await ctx.db.insert("orders", {
      orderId: args.orderId,
      name: args.name,
      email: args.email,
      phone: args.phone,
      address: args.address,
      zipCode: args.zipCode,
      city: args.city,
      country: args.country,
      paymentMethod: args.paymentMethod,
      eMoneyNumber: args.eMoneyNumber,
      eMoneyPIN: args.eMoneyPIN,
      cartItems: args.cartItems,
      subtotal: args.subtotal,
      grandTotal: args.grandTotal,
      vat: args.vat,
      shipping: args.shipping,
      orderDate: args.orderDate,
      status: args.status || "pending",
    });

    return orderId;
  },
});

export const getOrderByOrderId = query({
  args: { orderId: v.string() },
  handler: async (ctx, args) => {
    const order = await ctx.db
      .query("orders")
      .withIndex("by_orderId", (q) => q.eq("orderId", args.orderId))
      .first();

    return order;
  },
});
