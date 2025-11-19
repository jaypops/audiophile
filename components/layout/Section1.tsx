import { products } from "@/lib/Home";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Section1() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 py-6 md:py-10 px-4 md:px-0">
      {products.map((category, index) => (
        <div
          key={category.id}
          className="relative bg-[#F1F1F1] rounded-xl flex flex-col items-center justify-end pt-16 md:pt-20 pb-4 md:pb-6 w-full md:w-1/3 transition-transform hover:scale-105"
        >
          <div className="absolute -top-10 md:-top-14">
            <Image
              src={category.image}
              alt={category.name}
              width={index === products.length - 1 ? 120 : 80}
              height={index === products.length - 1 ? 120 : 80}
              className="object-contain drop-shadow-2xl md:w-auto md:h-auto"
              style={{
                width: index === products.length - 1 ? '120px' : '80px',
                height: index === products.length - 1 ? '120px' : '80px',
              }}
            />
          </div>
          <h3 className="text-black font-semibold tracking-wide mb-2 mt-4 md:mt-6 text-sm md:text-base">
            {category.name}
          </h3>
          <a
            href={category.route}
            className="flex items-center gap-2 text-[11px] md:text-[13px] tracking-[0.5em] text-black/60 hover:text-[#D87D4A] transition-colors"
          >
            SHOP <ArrowRight size={14} className="md:w-4 md:h-4" />
          </a>
        </div>
      ))}
    </section>
  );
}