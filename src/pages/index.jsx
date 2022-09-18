import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from 'gatsby';

import Illustration from '../../assets/programming.svg';
import Navbar from '../components/Navbar';

function Home({ location }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="overflow-hidden h-screen bg-primary font-mono">
        <Navbar open={open} setOpen={setOpen} location={location}/>
        <div className="flex">
          <div className={`px-12 py-24 ${open ? 'mt-52': ''} text-info flex md:w-screen z-1 lg:w-3/5 flex-col z-0 lg:px-24 md:p-48`}>
            <motion.h4
              initial={{y: 10, opacity: 0}}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-base font-semibold  md:text-2xl"
            >
              Hi there,
            </motion.h4>
            <motion.h1
              initial={{ y:10, opacity: 0 }}
              animate={{ y:0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-xl mb-2 font-bold md:text-5xl md:my-4"
            >
              My name is <span className="text-highlight">Aayush Kurup</span>
            </motion.h1>
            <motion.h2
              initial={{ y:10, opacity: 0 }}
              animate={{ y:0, opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-lg mb-8 font-semibold text-muted md:text-3xl md:mb-16"
            >
              I am a Full-Stack Developer
            </motion.h2>
            <motion.div
              initial={{ y:10, opacity: 0 }}
              animate={{ y:0, opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="flex flex-col md:flex-row justify-between w-screen md:justify-start"
            >
              <Link to="/contact" className="flex flex-col justify-center bg-highlight mb-3 p-2 font-bold rounded text-center text-light w-1/2 md:mr-2 md:w-1/5">Get In Touch</Link>
              <a href="/Aayush_Kurup_Resume.pdf" target="_blank" className="border-highlight mb-3 border-2 p-2 rounded w-1/2 text-highlight font-bold hover:bg-highlight hover:text-light text-center lg:ml-2 md:w-1/5">Download Resume</a>
            </motion.div>
          </div>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.2 }}
            className="2xl:pl-20 md:hidden lg:block"
          >
            <Illustration height={640} width={480}/>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export function Head() {
  return (
      <title>
          Aayush Kurup
      </title>
  )
}

export default Home;