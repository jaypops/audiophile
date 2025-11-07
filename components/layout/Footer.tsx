"use client";

import { menuItems } from "@/lib/navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();
  const slug = pathname.split("/").at(1);

  return (
    <footer className="bg-[#101010] text-white pt-16 pb-9 px-8 md:px-35">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-8">
        <div className="text-2xl font-extrabold tracking-widest uppercase">
          audiophile
        </div>

        <nav className="flex flex-wrap justify-center md:justify-end gap-6 text-sm font-medium uppercase">
          {menuItems.map((item) => (
            <Link
              key={item.slug}
              href={item.route}
              className={`transition-colors duration-200 hover:text-[#D87D4A] ${
                slug === item.slug ? "text-[#D87D4A]" : "text-white"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 text-sm">
        <p className="text-[#FFFFFF]/60 leading-relaxed max-w-md">
          Audiophile is an all in one stop to fulfill your audio needs. We’re a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility — we’re open 7 days a week.
        </p>

        <div className="flex gap-5 text-white mt-6 md:mt-0">
          <Link href="#" className="hover:text-[#D87D4A]">
            <Facebook className="w-5 h-5" />
          </Link>
          <Link href="#" className="hover:text-[#D87D4A]">
            <Twitter className="w-5 h-5" />
          </Link>
          <Link href="#" className="hover:text-[#D87D4A]">
            <Instagram className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-10 text-[#FFFFFF]/50 text-xs">
        <p>Copyright 2021. All Rights Reserved</p>
        <div className="flex md:hidden gap-5 mt-4">
          <Link href="#" className="hover:text-[#D87D4A]">
            <Facebook className="w-5 h-5" />
          </Link>
          <Link href="#" className="hover:text-[#D87D4A]">
            <Twitter className="w-5 h-5" />
          </Link>
          <Link href="#" className="hover:text-[#D87D4A]">
            <Instagram className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
