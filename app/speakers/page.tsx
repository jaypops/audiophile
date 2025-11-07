import { Button } from "@/components/ui/button";
import Image from "next/image";
import Section1 from "@/components/layout/Section1";
import Section5 from "@/components/layout/Section5";
import Link from "next/link";
export default function Speakers() {
  return (
    <div>
      <div className="flex justify-center items-center bg-[#0E0E0E] text-white font-semibold text-2xl min-h-[160px] w-full">
        SPEAKERS
      </div>
      <div>
        <div className="flex flex-col md:flex-row items-center justify-center space-x-30 py-25">
          <Image src="/assets/Speck1.png" alt="he" width={450} height={400} />
          <div>
            <p className="text-[#D87D4A] text-sm tracking-[0.5em] mb-4 text-medium">
              NEW PROJECT
            </p>
            <h1 className="text-[#000000]/90 text-[50px] font-semibold max-w-sm text-sm/14">
              ZX9 SPEAKERS
            </h1>
            <p className="text-[#000000]/50 text-sm max-w-[29rem] mt-4 mb-8 text-sm/6">
              Upgrade your sound system with the all new ZX9 active speaker.
              It’s a bookshelf speaker system that offers truly wireless
              connectivity -- creating new possibilities for more pleasing and
              practical audio setups..
            </p>
            <Link href="/product/zx9-speaker">
              <Button className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white py-4 px-6 rounded-lg text-xs cursor-pointer">
                SEE PRODUCT
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center space-x-30 py-25">
          <div>
            <h1 className="text-[#000000]/90 text-[50px] font-semibold max-w-sm text-sm/14">
              ZX7 SPEAKERS
            </h1>
            <p className="text-[#000000]/50 text-sm max-w-[29rem] mt-4 mb-8 text-sm/6">
              Stream high quality sound wirelessly with minimal loss. The ZX7
              bookshelf speaker uses high-end audiophile components that
              represents the top of the line powered speakers for home or studio
              use.
            </p>
            <Link href="/product/zx7-speaker">
              <Button className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white py-4 px-6 rounded-lg text-xs cursor-pointer">
                SEE PRODUCT
              </Button>
            </Link>
          </div>
          <Image src="/assets/Speck2.png" alt="he" width={450} height={400} />
        </div>
        <div className="px-40 pb-25 pt-20">
          <Section1 />
          <Section5 />
        </div>
      </div>
    </div>
  );
}
