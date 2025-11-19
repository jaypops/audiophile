"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../../ui/button";
import Section1 from "../Section1";
import Section5 from "../Section5";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { content } from "@/lib/swiper";

export default function Mainbody() {
  return (
    <div>
      <div className="pl-0 md:pl-35 pr-0 md:pr-5 bg-[#0E0E0E] min-h-screen flex items-center">
        <Carousel
          className="w-full"
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: true,
            }),
          ]}
        >
          <CarouselContent>
            {content.map((item, index) => (
              <CarouselItem key={item.id}>
                <div className="hidden lg:flex flex-row justify-between items-center gap-8 px-8">
                  <div>
                    <p className="text-[#FFFFFF]/30 text-sm tracking-[0.5em] mb-4 font-medium">
                      NEW PROJECT
                    </p>
                    <h1 className="text-[#FFFFFF]/90 text-[50px] font-semibold max-w-sm">
                      {item.name}
                    </h1>
                    <p className="text-[#FFFFFF]/50 text-sm max-w-[20rem] mt-4 mb-8">
                      {item.ex}
                    </p>

                    <Link href={item.herf}>
                      <Button className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white py-4 px-6 rounded-lg text-xs cursor-pointer">
                        SEE PRODUCT
                      </Button>
                    </Link>
                  </div>

                  <div>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={700}
                      height={400}
                      className={`object-cover ${index >= content.length - 2 ? "-mt-15" : "-mt-30"}`}
                    />
                  </div>
                </div>

                <div className="lg:hidden relative w-full h-[500px] md:h-[600px]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
                    <p className="text-[#FFFFFF]/40 text-xs md:text-sm tracking-[0.5em] mb-3 md:mb-4 font-medium">
                      NEW PROJECT
                    </p>
                    <h1 className="text-[#FFFFFF] text-3xl md:text-[40px] font-semibold max-w-md mb-4">
                      {item.name}
                    </h1>
                    <p className="text-[#FFFFFF]/70 text-sm md:text-base max-w-md mb-6 md:mb-8">
                      {item.ex}
                    </p>

                    <Link href={item.herf}>
                      <Button className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white py-3 md:py-4 px-6 md:px-8 rounded-lg text-xs md:text-sm cursor-pointer">
                        SEE PRODUCT
                      </Button>
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="py-20 px-10 md:px-35">
        <Section1 />

        <section>
          <div className="bg-[#D87D4A] rounded-lg flex flex-col md:flex-row items-center justify-between px-35 mt-20 pt-10 overflow-hidden relative">
            <div>
              <Image
                src="/assets/spcB.png"
                alt="Plan"
                width={400}
                height={50}
                className="object-contain translate-y-8"
              />
            </div>
            <div className="pb-15">
              <h1 className="text-white text-[50px] font-semibold">
                ZX9 <br /> SPEAKER
              </h1>
              <p className="max-w-xs mt-4 mb-8 text-white/70">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Link href="/product/zx9-speaker">
                <Button className="bg-[#000000] hover:bg-[#000000]/80 text-white py-4 px-6 rounded-lg text-xs cursor-pointer">
                  SEE PRODUCT
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section>
          <div className="mt-25 relative">
            <Image
              src="/assets/home/desktop/image-speaker-zx7.jpg"
              alt="ZX7 Speaker"
              width={1200}
              height={250}
              className="rounded-lg"
            />
            <div className="absolute left-20 top-1/2 -translate-y-1/2 z-10">
              <h1 className="font-medium text-2xl mb-4 text-black">
                ZX7 SPEAKER
              </h1>
              <Link href="/product/zx7-speaker">
                <Button
                  variant="outline"
                  className="py-4 px-6 rounded-lg text-xs cursor-pointer border-black bg-transparent"
                >
                  SEE PRODUCT
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center pt-25">
            <Image
              src="/assets/pod.png"
              alt="pod"
              width={500}
              height={50}
              className="object-contain"
            />
            <div className="bg-[#F1F1F1] rounded-lg w-full max-w-[500px] min-h-[300px] pt-25 pl-20">
              <h1 className="font-medium text-2xl mb-4 text-black">
                YX1 EARPHONES
              </h1>
              <Link href="/product/yx1-earphones">
                <Button
                  variant="outline"
                  className="py-4 px-6 rounded-lg text-xs cursor-pointer border-black bg-transparent"
                >
                  SEE PRODUCT
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Section5 />
      </div>
    </div>
  );
}
