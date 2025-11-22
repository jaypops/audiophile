"use client";

import { ReactNode, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import DesktopOnlyPage from "@/components/layout/DesktopOnlyPage";
import DesktopHeader from "@/components/layout/Header/DesktopHeader";
import Footer from "@/components/layout/Footer";

export default function ClientShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const mobileKeywords = [
        "android",
        "webos",
        "iphone",
        "ipad",
        "ipod",
        "blackberry",
        "windows phone",
      ];
      const isMobileDevice = mobileKeywords.some((keyword) =>
        userAgent.includes(keyword)
      );
      const isSmallScreen = window.innerWidth < 768;

      setIsMobile(isMobileDevice || isSmallScreen);
      setIsLoading(false);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isLoading) return null;

  if (isMobile) return <DesktopOnlyPage />;

  return (
    <div className="flex min-h-screen w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex flex-1 flex-col w-full max-w-[1500px] mx-auto"
        >
          <DesktopHeader />
          <div className="flex flex-1 flex-col overflow-hidden">
            <main className="flex-1">{children}</main>
          </div>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
