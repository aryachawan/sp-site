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
        <div className="w-full flex flex-col items-center justify-center gap-6 mt-20 px-4">

            <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-extrabold text-5xl text-center"
            >
                Let's Work Together
            </motion.p>

    
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-2xl font-thin text-center"
            >
                <p>Available for bookings and collaborations.</p>
                <p>Reach out to discuss your next project</p>
            </motion.div>

            <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-10 mt-8">

                <Link href="https://www.instagram.com/notsoyumm_" target="_blank">
                    <motion.div
                        {...cardIntro}
                        whileHover={{ scale: 1.06 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="
                            w-full sm:w-80 h-44
                            bg-white rounded-xl text-black
                            flex flex-col items-center justify-center gap-4
                            cursor-pointer
                        "
                    >
                        <FaInstagram className="text-2xl" />
                        <p>@notsoyumm_</p>
                    </motion.div>
                </Link>

                <Link href={`mailto:${email}`}>
                    <motion.div
                        {...cardIntro}
                        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                        whileHover={{ scale: 1.06 }}
                        onClick={copyEmail}
                        className="
                            w-full sm:w-80 h-44
                            bg-white rounded-xl text-black
                            flex flex-col items-center justify-center gap-4
                            cursor-pointer
                        "
                    >
                        <FaFacebookMessenger className="text-2xl" />
                        <p className="px-4 text-center">
                            swayampawar283@gmail.com
                        </p>
                    </motion.div>
                </Link>

            </div>
        </div>
    );
}
