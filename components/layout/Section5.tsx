import Image from "next/image";
export default function Section5() {
  return (
    <section>
      <div className="pt-25 flex flex-col md:flex-row justify-between items-center gap-10">
        <div>
          <h1 className="text-3xl font-semibold max-w-[22rem]">
            BRINGING YOU THE <span className="text-[#D87D4A]">BEST</span> AUDIO
            GEAR
          </h1>
          <p className="text-sm/6 text-black/50 mt-6 max-w-md">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div>
          <Image
            src="/assets/man.png"
            alt="Best Gear"
            width={500}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
