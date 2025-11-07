"use client";

import { menuItems } from "@/lib/navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Cart from "@/components/layout/Cart";

export default function DesktopHeader() {
  const pathname = usePathname();
  const slug = pathname.split("/").at(1);

  return (
    <header
      className="hidden md:flex w-full h-20 items-center justify-between px-35 bg-[#0E0E0E] relative 
      after:content-[''] after:absolute after:left-[135px] after:right-[135px] after:bottom-0 
      after:h-px after:bg-[#FFFFFF]/10 "
    >
      <div className="text-xl font-black text-[#FFFFFF]">audiophile</div>

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
      <Cart />
    </header>
  );
}
