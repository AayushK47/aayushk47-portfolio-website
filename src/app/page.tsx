"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import Illustration from '@assets/programming.svg'

export default function Home() {
  return (
    <>
      <div className='flex mt-24 overflow-hidden'>
        <div 
          className="flex flex-col px-12 py-24 w-1/2"
        >
          <motion.h4
            initial={{y: 10, opacity: 0}}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }} 
            className='text-base font-semibold md:text-2xl'
          >
            Hi there,
          </motion.h4>
          <motion.h1
            initial={{ y:10, opacity: 0 }}
            animate={{ y:0, opacity: 1 }}
            transition={{ delay: 1 }}
            className='text-xl mb-2 font-bold md:text-5xl md:my-4'
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
            <button 
              className='flex justify-center bg-highlight mb-3 p-2 font-bold rounded text-center text-light w-1/2 md:mr-2 md:w-1/5'
            >
              Get In Touch
            </button>
            <a href="/Aayush_Kurup_Resume.pdf" target="_blank" 
              className={`border-highlight mb-3 border-2 p-2 
                rounded w-1/2 text-highlight font-bold hover:bg-highlight 
                hover:text-light text-center 
                lg:ml-2 md:w-1/5`}
              >
                Download Resume
              </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="2xl:pl-20 md:hidden lg:block"
        >
          <Image src={Illustration} alt='' />
        </motion.div>
      </div>
    </>
  )
}