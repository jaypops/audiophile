import Link from "next/link";
import Image from "next/image";
import { Button } from "../../ui/button";
import Section1 from "../Section1";
import Section5 from "../Section5";

export default function Mainbody() {
  return (
    <div>
      <div className="flex flex-row justify-between items-center pl-35 pr-10 bg-[#0E0E0E] min-h-screen">
        <div>
          <p className="text-[#FFFFFF]/30 text-sm tracking-[0.5em] mb-4 text-medium">
            NEW PROJECT
          </p>
          <h1 className="text-[#FFFFFF]/90 text-[50px] font-semibold max-w-sm">
            XX99 MARK II HEADPHONES
          </h1>
          <p className="text-[#FFFFFF]/50 text-sm max-w-[20rem] mt-4 mb-8">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <Link href="/product/xx99-mark-two-headphones">
            <Button className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white py-4 px-6 rounded-lg text-xs cursor-pointer">
              SEE PRODUCT
            </Button>
          </Link>
        </div>

        <div>
          <Image
            src="/assets/headphones.png"
            alt="Headphones"
            width={700}
            height={400}
            className="object-cover -mt-30"
          />
        </div>
      </div>

      <div className="py-20 px-35">
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