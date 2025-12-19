"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, LayoutGroup } from "framer-motion";

export default function TopNavbar() {
    const pathname = usePathname();

    const basedesign =
        "relative px-4 py-2 border border-white rounded-3xl text-md font-medium transition-colors";
    const activelink = "text-black";
    const inactivelink = "hover:bg-white hover:text-black";

    return (
        <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full p-4 flex items-center justify-center gap-4"
        >
            <LayoutGroup>
                {[
                    { href: "/", label: "Overview" },
                    { href: "/contact-me", label: "Contact Me" }
                ].map(({ href, label }) => {
                    const isActive = pathname === href;

                    return (
                        <Link key={href} href={href}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`${basedesign} ${isActive ? activelink : inactivelink}`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="active-pill"
                                        className="absolute inset-0 bg-white rounded-3xl -z-10"
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 30
                                        }}
                                    />
                                )}
                                {label}
                            </motion.div>
                        </Link>
                    );
                })}
            </LayoutGroup>
        </motion.div>
    );
}
