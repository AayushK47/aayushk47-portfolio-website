"use client";
import { useState } from "react";

import Hamburger from "@component/hamburger";
import CloseIcon from "@component/close";
import { usePathname } from "next/navigation";

function Navbar() {
    const pathname = usePathname();
    const [isOpen, setOpen] = useState<boolean>(false);

    const active = "bg-gray-900 text-highlight font-bold block px-3 py-2 rounded-md text-base";
    const inactive = "text-info hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium";

    function expand() {
        setOpen((val) => !val)
    }

    return (
        <>
            <nav className="bg-dark h-14 flex justify-between items-center px-3">
                <div className="text-white font-bold text-lg">
                    <span className="text-info">Aayush </span>
                    <span className="text-highlight">Kurup</span>
                </div>
                <div onClick={expand}>
                    {!isOpen ? <Hamburger /> : <CloseIcon />}
                </div>
            </nav>
            <div className="bg-dark">
                <ul>
                    <li className={pathname === '/' ? active : inactive}>Home</li>
                    <li className={pathname === '/about' ? active : inactive}>About</li>
                    <li className={pathname === '/work' ? active : inactive}>Work</li>
                    <li className={pathname === '/blogs' ? active : inactive}>Blogs</li>
                    <li className={pathname === '/contacts' ? active : inactive}>Contacts</li>
                </ul>
            </div>
        </>

    );
}

export default Navbar;
