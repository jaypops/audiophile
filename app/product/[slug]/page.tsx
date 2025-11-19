"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import productsData from "@/data/products.json";
import Section1 from "@/components/layout/Section1";
import Section5 from "@/components/layout/Section5";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { cart, setCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = productsData.data.find((p) => p.slug === slug);

  if (!product) {
    return <p className="text-center mt-20">Product not found.</p>;
  }

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    const newItem = {
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      quantity: quantity,
    };

    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) => item.id === newItem.id
      );

      let updatedCart;
      if (existingItemIndex > -1) {
        updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + quantity,
        };
      } else {
        updatedCart = [...prevCart, newItem];
      }

      return updatedCart;
    });

    toast.success(`${quantity}x ${newItem.name} has been added to the cart.`);
    setQuantity(1); 
  };

  return (
    <div className="px-10 md:px-35 py-10">
      <Link
        href={`/${product.category}`}
        className="text-[#000000]/60 hover:text-[#D87D4A] "
      >
        <span className="flex items-center space-x-2"> ← Go Back</span>
      </Link>

      <div className="flex flex-col md:flex-row items-center justify-between pt-10">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <Image
            src={product.image.desktop.replace("./", "/")}
            alt={product.name}
            width={450}
            height={400}
            className="object-cover rounded-lg"
          />
        </div>

        <div className=" space-y-6 text-center md:text-left">
          {product.new && (
            <p className="text-[#D87D4A] text-sm tracking-[0.5em] mb-4">
              NEW PRODUCT
            </p>
          )}
          <h1 className="text-[#000000]/90 text-[50px] font-semibold max-w-sm text-sm/14">
            {product.name}
          </h1>
          <p className="text-[#000000]/50 text-sm max-w-[29rem] mt-4 ">
            {product.description}
          </p>
          <h1 className="font-bold text-sm">${product.price}</h1>
          <div className="flex items-center space-x-4">
            {/* Quantity Buttons */}
            <div className="flex items-center space-x-2">
              <Button onClick={decrease} className="px-3 py-1 text-lg font-bold">
                –
              </Button>
              <span className="font-semibold">{quantity}</span>
              <Button onClick={increase} className="px-3 py-1 text-lg font-bold">
                +
              </Button>
            </div>
            <Button
              onClick={handleAddToCart}
              className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white py-2 px-5 rounded-lg text-xs cursor-pointer"
            >
              ADD TO CART
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-16 pt-15">
        <div className="md:w-2/3 space-y-6">
          <h3 className="text-2xl font-bold uppercase">Features</h3>
          <p className="text-[#000000]/60 whitespace-pre-line text-[14px] leading-7 max-w-xl">
            {product.features}
          </p>
        </div>

        <div className="md:w-1/3 space-y-6">
          <h3 className="text-2xl font-bold uppercase">In the Box</h3>
          <ul className="space-y-2">
            {product.includes.map((item, i) => (
              <li key={i} className="text-[#000000]/60">
                <span className="text-[#D87D4A] font-bold mr-2">
                  {item.quantity}x
                </span>
                {item.item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="w-full py-16">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="grid grid-rows-2 gap-6">
            <Image
              src={product.gallery.first.desktop.replace("./", "/")}
              alt="Gallery 1"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-full"
            />
            <Image
              src={product.gallery.second.desktop.replace("./", "/")}
              alt="Gallery 2"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>

          <div className="h-full">
            <Image
              src={product.gallery.third.desktop.replace("./", "/")}
              alt="Gallery 3"
              width={800}
              height={900}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      <div className="space-y-10 text-center">
        <h3 className="text-2xl font-bold uppercase">You may also like</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {product.others.map((other) => {
            const otherProduct = productsData.data.find(
              (p) => p.slug === other.slug
            );

            return (
              <div key={other.slug} className="space-y-4">
                <Image
                  src={other.image.desktop.replace("./", "/")}
                  alt={other.name}
                  width={400}
                  height={400}
                  className="rounded-lg object-cover w-full"
                />
                <h4 className="text-lg font-bold uppercase">{other.name}</h4>
                <Link
                  href={
                    otherProduct
                      ? `/product/${otherProduct.slug}`
                      : `/product/${other.slug}`
                  }
                >
                  <Button className="bg-[#D87D4A] text-white px-6 py-3 rounded hover:bg-[#FBAF85]">
                    SEE PRODUCT
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" pb-25 pt-20">
        <Section1 />
        <Section5 />
      </div>
    </div>
  );
}