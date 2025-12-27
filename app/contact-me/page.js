"use client";

import Link from "next/link";
import { FaFacebookMessenger, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contactme() {
    const email = "swayampawar283@gmail.com";

    const copyEmail = () => {
        navigator.clipboard.writeText(email);
    };

    const cardIntro = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    return (
        <div className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6 pt-32 sm:pt-28 pb-20 px-5 overflow-x-hidden">

            <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-extrabold text-4xl sm:text-6xl text-center tracking-tight"
            >
                Let&apos;s Work Together
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg sm:text-2xl font-light text-center text-zinc-300"
            >
                <p>Available for bookings and collaborations.</p>
                <p>Reach out to discuss your next project</p>
            </motion.div>

            <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">

                <Link href="https://www.instagram.com/notsoyumm_" target="_blank" className="w-full sm:w-auto">
                    <motion.div
                        {...cardIntro}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="
                            w-full sm:w-80 h-44
                            bg-white rounded-2xl text-black
                            flex flex-col items-center justify-center gap-4
                            cursor-pointer transition-shadow hover:shadow-xl hover:shadow-white/10
                        "
                    >
                        <FaInstagram className="text-3xl" />
                        <p className="text-base font-medium">@notsoyumm_</p>
                    </motion.div>
                </Link>

                <Link href={`mailto:${email}`} className="w-full sm:w-auto">
                    <motion.div
                        {...cardIntro}
                        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={copyEmail}
                        className="
                            w-full sm:w-80 h-44
                            bg-white rounded-2xl text-black
                            flex flex-col items-center justify-center gap-4
                            cursor-pointer transition-shadow hover:shadow-xl hover:shadow-white/10
                        "
                    >
                        <FaFacebookMessenger className="text-3xl" />
                        <p className="px-4 text-center text-base font-medium">
                            {email}
                        </p>
                    </motion.div>
                </Link>

            </div>
        </div>
    );
}