"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    function handleDownload() {
        window.open("/AayushKurupResume.pdf", "_blank");
    }

    return (
        <div className="flex m-16 justify-between md:mt-40">
            <div className="flex flex-col justify-center xl:w-1/2">
                <motion.h4
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-base font-semibold md:text-2xl md:my-1"
                >
                    Hi there,
                </motion.h4>
                <motion.h1
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.0 }}
                    className="text-xl font-bold md:text-6xl md:my-1"
                >
                    My name is{" "}
                    <span className="text-highlight">Aayush Kurup</span>
                </motion.h1>
                <motion.h2
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="text-xl mb-5 font-semibold text-muted md:text-3xl md:my-8"
                >
                    I am a Full-Stack Developer
                </motion.h2>
                <motion.div
                    className="flex flex-col w-4/6 sm:w-4/5 mb-5"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.8 }}
                >
                    <Link
                        href="/contacts"
                        className="flex justify-center bg-highlight font-bold rounded text-center text-light p-2 mb-5"
                    >
                        Get in Touch
                    </Link>
                    <button
                        onClick={handleDownload}
                        className={`border-highlight border-2 p-2
                    rounded text-highlight font-bold hover:bg-highlight 
                    hover:text-light text-center`}
                    >
                        Download Resume
                    </button>
                </motion.div>
            </div>
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.2 }}
                className="hidden xl:block"
            >
                <Image
                    src="/images/programming.svg"
                    alt=""
                    width="480"
                    height="640"
                />
            </motion.div>
        </div>
    );
}
