"use client"
import Image from "next/image";

export default function MyGallery() {
  return (
    <section className="w-full bg-black text-white py-10 px-4 md:px-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-normal mb-12 tracking-tight">
          My Gallery
        </h2>

        <div className="flex flex-col gap-4 md:gap-6 mb-20">
          
          {/* --- ROW 1: 3 Images (mg1, mg2, mg3) --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-900 group rounded-lg">
              <Image
                src="/mygallery/mg1.png" 
                alt="Gallery Image 1"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-900 group rounded-lg">
              <Image
                src="/mygallery/mg2.png"
                alt="Gallery Image 2"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-900 group rounded-lg">
              <Image
                src="/mygallery/mg3.png" 
                alt="Gallery Image 3"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* --- ROW 2: 2 Images (mg4, mg5) --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="relative aspect-[4/3] md:aspect-auto w-full overflow-hidden bg-zinc-900 group rounded-lg min-h-[400px]">
              <Image
                src="/mygallery/mg4.png" 
                alt="Gallery Image 4"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-900 group rounded-lg">
              <Image
                src="/mygallery/mg5.png" 
                alt="Gallery Image 5"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* --- ROW 3: MODIFIED (mg6 & mg8 Side by Side) --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Left: mg6 (with object-top fix) */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-900 group rounded-lg">
              <Image
                src="/mygallery/mg6.png" 
                alt="Gallery Image 6"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Right: mg8 */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-900 group rounded-lg">
              <Image
                src="/mygallery/mg8.png" 
                alt="Gallery Image 8"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* --- ROW 4: 2 Images (mg9, mg10) --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-900 group rounded-lg">
              <Image
                src="/mygallery/mg9.png" 
                alt="Gallery Image 9"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-900 group rounded-lg">
              <Image
                src="/mygallery/mg10.png"
                alt="Gallery Image 10"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* --- ROW 5: 2 Images (mg11, mg12) --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-900 group rounded-lg">
              <Image
                src="/mygallery/mg11.png" 
                alt="Gallery Image 11"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-900 group rounded-lg">
              <Image
                src="/mygallery/mg12.png" 
                alt="Gallery Image 12"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* --- ROW 6: MODIFIED (mg13 Left | mg14, mg15, mg7 Right) --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Left Column: Large Image (mg13) */}
            <div className="relative aspect-[3/4] md:h-full w-full overflow-hidden bg-zinc-900 group rounded-lg">
              <Image
                src="/mygallery/mg13.png" 
                alt="Gallery Image 13"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Right Column: Stack containing (14+15) and then (mg7) */}
            <div className="flex flex-col gap-4 md:gap-6">
               {/* Top: 2 Vertical Images (mg14, mg15) */}
               <div className="grid grid-cols-2 gap-4 md:gap-6">
                 <div className="relative aspect-[3/5] w-full overflow-hidden bg-zinc-900 group rounded-lg">
                    <Image
                      src="/mygallery/mg14.png" 
                      alt="Gallery Image 14"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                 </div>
                 <div className="relative aspect-[3/5] w-full overflow-hidden bg-zinc-900 group rounded-lg">
                    <Image
                      src="/mygallery/mg15.png" 
                      alt="Gallery Image 15"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                 </div>
               </div>

               {/* Bottom: Moved mg7 here as per reference */}
               <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900 group rounded-lg">
                  <Image
                    src="/mygallery/mg7.png" 
                    alt="Gallery Image 7"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
               </div>
            </div>
          </div>

        </div>

        <div className="w-full text-center">
          <p className="text-md md:text-xl text-zinc-400 font-light ">
          CC - Content Copyright - All rights reserved.
          </p>
        </div>

      </div>
    </section>
  );
}