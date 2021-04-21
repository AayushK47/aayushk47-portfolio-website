import React from "react";
import { motion } from "framer-motion";

import Navbar from '../components/Navbar';

function Home() {
  return (
    <div className="overflow-hidden h-screen bg-primary">
      <Navbar />
      <div className="px-12 lg:px-24 py-24 lg:p-48 text-info w-screen flex flex-col">
        <motion.h4
          initial={{y: 10, opacity: 0}}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-base lg:text-2xl font-semibold"
        >
          Hi there,
        </motion.h4>
        <motion.h1
          initial={{ y:10, opacity: 0 }}
          animate={{ y:0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-xl lg:text-5xl mb-2 font-bold"
        >
          My name is <span className="text-highlight">Aayush Kurup</span>
        </motion.h1>
        <motion.h2
          initial={{ y:10, opacity: 0 }}
          animate={{ y:0, opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-lg lg:text-3xl mb-8 lg:mb-16 font-semibold text-muted"
        >
          I am a Full-Stack Developer
        </motion.h2>
        <motion.div
          initial={{ y:10, opacity: 0 }}
          animate={{ y:0, opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="flex justify-between lg:justify-start"
        >
          {/* <button className="bg-highlight font-bold w-2/5 lg:w-1/5 lg:mr-3 border-2 border-highlight p-2 lg:p-4 rounded text-light">Get In Touch</button>
          <button className="bg-transparent border-highlight border-2 text-highlight font-bold w-5/12 lg:w-1/5 lg:ml-3 p-2 lg:p-4 rounded hover:text-light hover:bg-highlight">Download Resume</button> */}
          <button className="bg-highlight p-2 font-bold rounded text-light w-2/5 lg:mr-2 lg:w-1/5">Get In Touch</button>
          <button className="border-highlight border-2 text-highlight hover:bg-highlight font-bold lg:ml-2 lg:w-1/5 hover:text-light p-2 rounded w-2/5">Download Resume</button>
        </motion.div>
      </div>
    </div>
  )
}

export default Home;