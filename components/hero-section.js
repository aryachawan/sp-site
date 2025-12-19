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
        
  
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/70 to-transparent" />
      </div>

      <div className="relative z-10 w-full bg-black text-center px-4 pb-20 -mt-24 md:-mt-32">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-light tracking-wide mb-6 text-white"
        >
          Swayam Pawar
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-md md:text-lg text-zinc-300 md:max-w-3xl mx-auto text-justify font-thin"
        >
          I am Swayam Pawar, a freelance model living and working in Mumbai. I enjoy photoshoot sessions in 
          front of the camera and creating high-quality content for brands. I bring my best to every work 
          and I am professional in my work. Always ready to collaborate and create impactful visuals.
        </motion.p>
      </div>
      
    </section>
  );
}