import { products } from "@/lib/Home";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
export default function Section1() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center gap-6 py-10">
      {products.map((category, index) => (
        <div
          key={category.id}
          className="relative bg-[#F1F1F1] rounded-xl flex flex-col items-center justify-end pt-20 pb-6 w-full md:w-1/3 transition-transform hover:scale-105"
        >
          <div className="absolute -top-14">
            <Image
              src={category.image}
              alt={category.name}
              width={index === products.length - 1 ? 150 : 100}
              height={index === products.length - 1 ? 150 : 100}
              className="object-contain drop-shadow-2xl"
            />
          </div>

          <h3 className="text-black font-semibold tracking-wide mb-2 mt-6">
            {category.name}
          </h3>

          <a
            href={category.route}
            className="flex items-center gap-2 text-[13px] tracking-[0.5em] text-black/60 hover:text-[#D87D4A]"
          >
            SHOP <ArrowRight size={16} />
          </a>
        </div>
      ))}
    </section>
  );
}
