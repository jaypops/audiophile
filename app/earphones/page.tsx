import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Section1 from "@/components/layout/Section1";
import Section5 from "@/components/layout/Section5";
export default function Earphones() {
  return (
    <div>
      <div className="flex justify-center items-center bg-[#0E0E0E] text-white font-semibold text-2xl min-h-[160px] w-full">
        EARPHONES
      </div>
      <div>
        <div className="flex flex-col md:flex-row items-center justify-center space-x-30 py-25">
          <Image src="/assets/pods.png" alt="he" width={450} height={400} />
          <div>
            <p className="text-[#D87D4A] text-sm tracking-[0.5em] mb-4 text-medium">
              NEW PROJECT
            </p>
            <h1 className="text-[#000000]/90 text-[50px] font-semibold max-w-sm text-sm/14">
              YX1 EARPHONES
            </h1>
            <p className="text-[#000000]/50 text-sm max-w-[29rem] mt-4 mb-8 text-sm/6">
              Tailor your listening experience with bespoke dynamic drivers from
              the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
              sound even in noisy environments with its active noise
              cancellation feature.
            </p>
            <Link href="/product/yx1-earphones">
              <Button className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white py-4 px-6 rounded-lg text-xs cursor-pointer">
                SEE PRODUCT
              </Button>
            </Link>
          </div>
        </div>
        <div className="px-40 pb-25 pt-20">
          <Section1 />
          <Section5 />
        </div>
      </div>
    </div>
  );
}
