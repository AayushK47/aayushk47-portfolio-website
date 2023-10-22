import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-dark px-4 py-2">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <div className="text-white font-bold text-lg"><span className="text-info">Aayush</span> <span className="text-highlight">Kurup</span></div>

        {/* Navigation Items */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-info font-bold">Home</a>
          <a href="#" className="text-info font-bold">About</a>
          <a href="#" className="text-info font-bold">Projects</a>
          <a href="#" className="text-info font-bold">Blogs</a>
          <a href="#" className="text-info font-bold">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
