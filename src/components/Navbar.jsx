import React from 'react';
import { Link } from 'gatsby';

function Navbar() {
    const currentPath = window.location.pathname;
    console.log(currentPath);
    return (
        <div className="bg-dark h-10 text-info">
            <div className="flex flex-row p-2 font-semibold justify-between items-center">
                <div>Aayush Kurup</div>
                <nav className="">
                    <ul className="flex flex-row w-1/3 justify-between">
                        <li className={`${currentPath === '/' ? 'text-highlight' : ''} mx-2`}><Link to="/">Home</Link></li>
                        <li className={`${currentPath === '/about' ? 'text-highlight' : ''} mx-2`}><Link to="/about">About</Link></li>
                        <li className={`${currentPath === '/contact' ? 'text-highlight' : ''} mx-2`}><Link to="/contact">Contact</Link></li>
                        {/* <li className={`mx-2`}>Resume</li> */}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;