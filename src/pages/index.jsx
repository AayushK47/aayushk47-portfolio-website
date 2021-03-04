import React from "react";

import Navbar from '../components/Navbar';

function Home() {
  return (
    <div className="overflow-hidden h-screen bg-primary">
      <Navbar />
      <div className="p-48 text-info w-screen flex flex-col">
        <h4 className="text-2xl font-semibold">Hi there,</h4>
        <h1 className="text-5xl mb-2 font-bold">My name is <span class="text-highlight">Aayush Kurup</span></h1>
        <h2 className="text-3xl mb-5 font-semibold text-muted">I am a Full-Stack Developer</h2>
        <button className="bg-highlight font-bold w-1/6 p-2 rounded text-light">Get In Touch</button>
      </div>
    </div>
  )
}

export default Home;