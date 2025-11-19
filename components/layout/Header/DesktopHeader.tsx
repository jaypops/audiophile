"use client";

import { menuItems } from "@/lib/navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Cart from "@/components/layout/Cart";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function DesktopHeader() {
  const pathname = usePathname();
  const slug = pathname.split("/").at(1);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`hidden md:flex items-center justify-between w-full h-20 px-35 transition-all duration-500 bg-[#0E0E0E]
        ${scroll > 100 ? "fixed top-0 z-50 shadow-xl" : " relative"}
        after:content-[''] after:absolute after:left-[135px] after:right-[135px] after:bottom-0 
        after:h-px after:bg-[#FFFFFF]/10`}
      >
        <div className="text-xl font-black transition-colors duration-300 text-white">
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
        <Cart />
      </header>

      <header
        className={`hidden sm:flex md:hidden items-center justify-between w-full h-20 px-10 transition-all duration-500 bg-[#0E0E0E]
        ${scroll > 100 ? "fixed top-0 z-50 shadow-xl" : " relative"}
        after:content-[''] after:absolute after:left-[40px] after:right-[40px] after:bottom-0 
        after:h-px after:bg-[#FFFFFF]/10`}
      >
        <div className="flex space-x-6 items-center">
          <Sheet>
            <SheetTrigger>
              <RxHamburgerMenu className="text-white size-5" />
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-wrap flex-col justify-center md:justify-end gap-6 text-sm font-medium uppercase">
                {menuItems.map((item) => (
                  <Link
                    key={item.slug}
                    href={item.route}
                    className={`transition-colors duration-200 hover:text-[#D87D4A] text-white ${
                      slug === item.slug ? "text-[#D87D4A]" : ""
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <div className="text-xl font-black transition-colors duration-300 text-white">
            audiophile
          </div>
        </div>
        <Cart />
      </header>

      <header
        className={`flex sm:hidden items-center justify-between w-full h-20 px-6 transition-all duration-500 bg-[#0E0E0E]
        ${scroll > 100 ? "fixed top-0 z-50 shadow-xl" : " relative"}
        after:content-[''] after:absolute after:left-[24px] after:right-[24px] after:bottom-0 
        after:h-px after:bg-[#FFFFFF]/10`}
      >
        <Sheet>
          <SheetTrigger>
            <RxHamburgerMenu className="text-white size-5" />
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-wrap flex-col justify-center md:justify-end gap-6 text-sm font-medium uppercase pt-20 pl-5">
              {menuItems.map((item) => (
                <Link
                  key={item.slug}
                  href={item.route}
                  className={`transition-colors duration-200 hover:text-[#D87D4A] text-black ${
                    slug === item.slug ? "text-[#D87D4A]" : ""
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <div className="text-xl font-black transition-colors duration-300 text-white">
          audiophile
        </div>
        <Cart />
      </header>
    </>
  );
}
