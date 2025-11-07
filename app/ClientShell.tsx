"use client";

import Footer from "@/components/layout/Footer";
import DesktopHeader from "@/components/layout/Header/DesktopHeader";
import { ReactNode } from "react";

export default function ClientShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full">
      <div className="flex flex-1 flex-col w-full max-w-[1500px] mx-auto">
        <DesktopHeader />
        <div className=" flex flex-1 flex-col overflow-hidden">
          <main className="flex-1">{children}</main>
        </div>
        <Footer />
      </div>
    </div>
  );
}
