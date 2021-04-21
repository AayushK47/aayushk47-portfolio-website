import React from 'react';
import { Link } from 'gatsby';
import { motion, AnimateSharedLayout } from 'framer-motion';

function Navbar() {
    const currentPath = window.location.pathname;
    return (
        <AnimateSharedLayout>
            <div className="bg-dark h-14 py-2 lg:h-10 lg:py-0 text-info">
                <div className="flex flex-row p-2 font-semibold justify-between items-center">
                    <div>Aayush Kurup</div>
                    <nav className="">
                        <motion.ul className="flex flex-row w-1/3 justify-between">
                            <motion.li animate className={`${currentPath === '/' ? 'text-highlight' : ''} mx-2`}><Link to="/">Home</Link></motion.li>
                            <motion.li animate className={`${currentPath === '/about' ? 'text-highlight' : ''} mx-2`}><Link to="/about">About</Link></motion.li>
                            <motion.li animate className={`${currentPath === '/contact' ? 'text-highlight' : ''} mx-2`}><Link to="/contact">Contact</Link></motion.li>
                            {/* <li className={`mx-2`}>Resume</li> */}
                        </motion.ul>
                    </nav>
                </div>
            </div>
        </AnimateSharedLayout>
    )
}

export default Navbar;