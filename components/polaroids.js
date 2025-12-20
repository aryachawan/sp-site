"use client"
import Image from "next/image";

export default function PolaroidsSection() {
  return (
    <section className="w-full bg-black text-white py-10 px-4 md:px-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-normal mb-12 tracking-tight">
          Polaroids
        </h2>

        <div className="flex flex-col gap-4 md:gap-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-900 group rounded-lg">
              <Image
                src="/polaroids/pol1.png" 
                alt="Front profile"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-900 group rounded-lg">
              <Image
                src="/polaroids/pol2.png" 
                alt="Front profile variation"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-900 group rounded-lg">
              <Image
                src="/polaroids/pol3.png" 
                alt="Side front profile"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-900 group rounded-lg">
              <Image
                src="/polaroids/pol4.png" 
                alt="Side profile"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-900 group rounded-lg">
              <Image
                src="/polaroids/pol5.png" 
                alt="Back profile"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}