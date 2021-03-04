import React from 'react';

function Navbar() {
    return (
        <div className="bg-dark h-10 text-info">
            <div className="flex flex-row p-2 font-semibold justify-between items-center">
                <div>Aayush Kurup</div>
                <nav className="">
                    <ul className="flex flex-row w-1/3 justify-between">
                        <li className="mx-2">Home</li>
                        <li className="mx-2">About</li>
                        <li className="mx-2">Contact</li>
                        <li className="mx-2">Resume</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;