"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Section1 from "@/components/layout/Section1";
import Section5 from "@/components/layout/Section5";

export default function Headphones() {
  return (
    <div>
      <div className="flex justify-center items-center bg-[#0E0E0E] text-white font-semibold text-2xl min-h-[160px] w-full">
        HEADPHONES
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center space-x-30 py-25">
        <Image
          src="/assets/head.png"
          alt="XX99 Mark II"
          width={450}
          height={400}
        />
        <div>
          <p className="text-[#D87D4A] text-sm tracking-[0.5em] mb-4">
            NEW PRODUCT
          </p>
          <h1 className="text-[#000000]/90 text-[50px] font-semibold max-w-sm">
            XX99 MARK II HEADPHONES
          </h1>
          <p className="text-[#000000]/50 text-sm max-w-[29rem] mt-4 mb-8">
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <Link href="/product/xx99-mark-two-headphones">
            <Button className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white py-4 px-6 rounded-lg text-xs">
              SEE PRODUCT
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center justify-center space-x-30 py-25">
        <Image
          src="/assets/head1.png"
          alt="XX99 Mark I"
          width={450}
          height={400}
        />
        <div>
          <h1 className="text-[#000000]/90 text-[50px] font-semibold max-w-sm">
            XX99 MARK I HEADPHONES
          </h1>
          <p className="text-[#000000]/50 text-sm max-w-[29rem] mt-4 mb-8">
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go.
          </p>
          <Link href="/product/xx99-mark-one-headphones">
            <Button className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white py-4 px-6 rounded-lg text-xs">
              SEE PRODUCT
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center space-x-30 py-25">
        <Image src="/assets/head2.png" alt="XX59" width={450} height={400} />
        <div>
          <h1 className="text-[#000000]/90 text-[50px] font-semibold max-w-sm">
            XX59 HEADPHONES
          </h1>
          <p className="text-[#000000]/50 text-sm max-w-[29rem] mt-4 mb-8">
            Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones. The stylish yet durable versatile
            wireless headset is a brilliant companion at home or on the move.
          </p>
          <Link href="/product/xx59-headphones">
            <Button className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white py-4 px-6 rounded-lg text-xs">
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
  );
}
