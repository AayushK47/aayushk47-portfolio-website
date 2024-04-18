"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import Hamburger from "@component/hamburger";
import CloseIcon from "@component/close";
import { usePathname } from "next/navigation";

function Navbar() {
    const pathname = usePathname();
    const [isOpen, setOpen] = useState<boolean>(false);

    const divVariants = {
        visible: {
            opacity: 1,
            transition: { duration: 0.3 }
        },
        hidden: {
            opacity: 0,
            transition: { duration: 0.3 }
        }
    };

    const active =
        "bg-gray-900 text-highlight font-bold block px-3 py-2 rounded-md text-base";
    const inactive =
        "text-info hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium";

    function toggleNavbar() {
        setOpen((val) => !val);
    }

    return (
        <>
            <nav className="bg-dark h-14 flex justify-between items-center px-3">
                <div className="text-white font-bold text-lg">
                    <span className="text-info">Aayush </span>
                    <span className="text-highlight">Kurup</span>
                </div>
                <div onClick={toggleNavbar}>
                    {!isOpen ? <Hamburger /> : <CloseIcon />}
                </div>
            </nav>
            <motion.div
                variants={divVariants}
                animate={isOpen ? "visible" : "hidden"}
                className={`bg-dark ${isOpen ? "" : "hidden"}`}
            >
                <ul>
                    <li className={pathname === "/" ? active : inactive}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={pathname === "/about" ? active : inactive}>
                        <Link href="/about">About</Link>
                    </li>
                    <li className={pathname === "/work" ? active : inactive}>
                        <Link href="/work">Work</Link>
                    </li>
                    <li className={pathname === "/blogs" ? active : inactive}>
                        <Link href="/blogs">Blogs</Link>
                    </li>
                    <li
                        className={pathname === "/contacts" ? active : inactive}
                    >
                        <Link href="/contacts">Contacts</Link>
                    </li>
                </ul>
            </motion.div>
        </>
    );
}

export default Navbar;
