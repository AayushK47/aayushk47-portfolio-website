/* eslint-disable @next/next/no-img-element */
"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function About() {
    return (
        <>
            <div className="flex overflow-hidden px-10 mt-16">
                <div className="flex flex-col">
                    <div className="p-10">
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-2xl font-bold md:text-4xl"
                        >
                            About
                        </motion.h1>
                    </div>
                    <div className="flex justify-between px-10 h-full">
                        <div className='w-3/5'>
                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1 }}
                            >
                                Hello, My name is Aayush Kurup. I am a Software Engineer from Bhopal, Madhya Pradesh, India.
                                Currently, I am employed by <a href="https://www.saama.com/" className='text-highlight underline'>Saama</a>  as Software Engineer.
                            </motion.p>
                            
                            <br />
                            
                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1.5 }}
                            >
                                I love working on a variety of technologies including Web Development, Mobile App Development and
                                Deep Learning. My goal is to build highly performant applications that solve real-world problems
                                and provide users with an awesome experience.
                            </motion.p>
                            <br />
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 2 }}
                            >
                                <h3 className='text-xl font-semibold'>My Tech Stack</h3>
                                <br />
                                <div className="w-5/6">
                                    <div className="h-auto w-auto text-center float-left">
                                        <img className="p-1" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="" />
                                    </div>
                                    <div className="h-auto w-auto text-center float-left">
                                        <img className="p-1" src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=F7CA3F" alt="" />
                                    </div>
                                    <div className="h-auto w-auto text-center float-left">
                                        <img className="p-1" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="" />
                                    </div>
                                    <div className="h-auto w-auto text-center float-left">
                                        <img className="p-1" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="" />
                                    </div>
                                    <div className="h-auto w-auto text-center float-left">
                                        <img className="p-1" src="https://img.shields.io/badge/nestjS-%2320232a.svg?style=for-the-badge&logo=nestjs&logoColor=%23E0234E" alt="" />
                                    </div>
                                    <div className="h-auto w-auto text-center float-left">
                                        <img className="p-1" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="" />
                                    </div>
                                    <div className="h-auto w-auto text-center float-left">
                                        <img className="p-1" src="https://img.shields.io/badge/flask-%2320232a.svg?style=for-the-badge&logo=flask&logoColor=%23ffffff" alt="" />
                                    </div>
                                    <div className="h-auto w-auto text-center float-left">
                                        <img className="p-1" src="https://img.shields.io/badge/fastapi-%2320232a.svg?style=for-the-badge&logo=FastAPI&logoColor=%019486" alt="" />
                                    </div>
                                    <div className="h-auto w-auto text-center float-left">
                                        <img className="p-1" src="https://img.shields.io/badge/mysql-%23507E9C.svg?style=for-the-badge&logo=mysql&logoColor=white" alt="" />
                                    </div>
                                    <div className="h-auto w-auto text-center float-left">
                                        <img className="p-1" src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="" />
                                    </div>
                                    <div className="h-auto w-auto text-center float-left">
                                        <img className="p-1" src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="" />
                                    </div>
                                    <div className="h-auto w-auto text-center float-left">
                                        <img className="p-1" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="" />
                                    </div>
                                    <div className="h-auto w-auto text-center float-left">
                                        <img className="p-1" src="https://img.shields.io/badge/nextjs-%23000.svg?style=for-the-badge&logo=next.js&logoColor=white" alt="" />
                                    </div>
                                    <div className="h-auto w-auto text-center float-left">
                                        <img className="p-1" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="" />
                                    </div>
                                    <div className="h-auto w-auto text-center float-left">
                                        <img className="p-1" src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="" />
                                    </div>
                                    <div className="h-auto w-auto text-center float-left">
                                        <img className="p-1" src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="" />
                                    </div>
                                    <div className="h-auto w-auto text-center float-left">
                                        <img className="p-1" src="https://img.shields.io/badge/VS%20Code-3EA6E9?style=for-the-badge&logo=visualstudiocode&logoColor=white" alt="" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 3 }} 
                            className='flex justify-center w-2/5'
                        >
                            <Image className="rounded-2xl" src="/images/me.png" alt="" width="300" height="300" />
                        </motion.div>
                    </div>
                    <motion.div
                        className='mt-10 px-10 pb-10'
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 2.5 }}
                    >
                        <h3 className='text-xl font-semibold pb-4'>Certifications</h3>
                        <div>
                            <img src="/images/aws-ccp-badge.png" alt="AWS CCP Badge" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}