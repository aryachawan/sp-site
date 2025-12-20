"use client"
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="w-full bg-black">
      
      <div className="relative w-full">
        <Image
          src="/banner.png" 
          alt="Swayam Pawar"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto block" 
          priority
        />

        <div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-black via-black/90 to-transparent" />
      </div>

      <div className="relative z-10 w-full bg-transparent text-center px-4 pb-12 sm:pb-20 -mt-20 sm:-mt-32 md:-mt-48">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-8xl font-light tracking-wide mb-4 md:mb-6 text-white"
        >
          Swayam Pawar
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl leading-relaxed text-zinc-300 max-w-sm sm:max-w-2xl md:max-w-5xl mx-auto"
        >
          Hi, I'm Swayam Pawar, a dedicated model living right here in Mumbai. I absolutely love getting in front of the camera and transforming through different outfits and styles. I bring a strong work ethic and passion to every shoot, always ready to collaborate and create impactful visuals.
        </motion.p>
      </div>
      
    </section>
  );
}