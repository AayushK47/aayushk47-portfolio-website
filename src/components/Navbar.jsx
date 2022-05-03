import React from 'react';
import { Link } from 'gatsby';
import { motion, AnimateSharedLayout } from 'framer-motion';

function Navbar({ open, setOpen, location }) {
    const currentPath = location.pathname;
    console.log(currentPath);
    const active = "bg-gray-900 text-highlight font-bold block px-3 py-2 rounded-md text-base";
    const inactive = "text-info hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium";

    return (
        <AnimateSharedLayout>
            <div className="bg-dark h-14 py-2 lg:h-10 lg:py-0 text-info">
                <div className="flex flex-row p-2 font-semibold justify-between items-center">
                    <Link to="/"><div className="logo">Aayush <span className="text-highlight">Kurup</span></div></Link>
                    <nav className="hidden md:block">
                        <motion.ul className="flex flex-row w-1/3 justify-between">
                            <motion.li animate className={`${currentPath === '/' ? 'text-highlight' : ''} mx-2`}><Link to="/">Home</Link></motion.li>
                            <motion.li animate className={`${currentPath === '/about' ? 'text-highlight' : ''} mx-2`}><Link to="/about">About</Link></motion.li>
                            <motion.li animate className={`${currentPath === '/projects' ? 'text-highlight' : ''} mx-2`}><Link to="/projects">Projects</Link></motion.li>
                            <motion.li animate><Link to="https://blogs.aayushkurup.dev">Blogs</Link></motion.li>
                            <motion.li animate className={`${currentPath === '/contact' ? 'text-highlight' : ''} mx-2`}><Link to="/contact">Contact</Link></motion.li>
                        </motion.ul>
                    </nav>
                    <svg onClick={() => setOpen(!open)} className="block h-6 w-6 md:hidden cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
                <div className={`${open ? '' : 'hidden'} md:hidden bg-dark`}>
                    <div className="pt-2 pb-3 space-y-1 mb-30 z-10">
                        <Link to="/" className={`${currentPath === '/' ? active : inactive}`} aria-current="page">Home</Link>
                        <Link to="/about" className={`${currentPath === '/about' ? active : inactive}`}>About</Link>
                        <Link to="/projects" className={`${currentPath === '/projects' ? active : inactive}`}>Projects</Link>
                        <Link to="https://blogs.aayushkurup.dev">Blogs</Link>
                        <Link to="/contact" className={`${currentPath === '/contact' ? active : inactive}`}>Contact</Link>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </AnimateSharedLayout>
    )
}

export default Navbar;