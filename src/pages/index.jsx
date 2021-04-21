import React from "react";
import { motion } from "framer-motion";

import Navbar from '../components/Navbar';

function Home() {
  return (
    <div className="overflow-hidden h-screen bg-primary">
      <Navbar />
      <div className="p-48 text-info w-screen flex flex-col">
        <motion.h4
          initial={{y: 10, opacity: 0}}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-2xl font-semibold"
        >
          Hi there,
        </motion.h4>
        <motion.h1
          initial={{ y:10, opacity: 0 }}
          animate={{ y:0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-5xl mb-2 font-bold"
        >
          My name is <span class="text-highlight">Aayush Kurup</span>
        </motion.h1>
        <motion.h2
          initial={{ y:10, opacity: 0 }}
          animate={{ y:0, opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-3xl mb-16 font-semibold text-muted"
        >
          I am a Full-Stack Developer
        </motion.h2>
        <motion.div
          initial={{ y:10, opacity: 0 }}
          animate={{ y:0, opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <button className="bg-highlight font-bold mr-5 w-1/5 border-2 border-highlight p-4 rounded text-light">Get In Touch</button>
          <button className="bg-transparent border-highlight border-2 text-highlight font-bold w-1/5 p-4 rounded hover:text-light hover:bg-highlight">Download Resume</button>
        </motion.div>
      </div>
    </div>
  )
}

export default Home;