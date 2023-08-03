import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Doughnut } from 'react-chartjs-2';

import Navbar from '../components/Navbar';

function AboutPage({ location }) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="h-screen w-screen bg-primary font-mono">
                <Navbar open={open} setOpen={setOpen} location={location} />
                <div className={`flex bg-primary ${open ? 'mt-60' : ''}`}>
                    <div className="p-10 text-info md:p-28">
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-2xl font-bold md:text-4xl"
                        >
                            About
                        </motion.h1>
                        <div className="flex flex-row my-8 justify-between">
                            <div className="w-5/6">
                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}boutbout
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 1 }}
                                >
                                    Hello, My name is Aayush Kurup. I am a Software Engineer from Bhopal, Madhya Pradesh, India.
                                    Currently, I am employed by Orah as Software Engineer.
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
                                    <br />
                                </motion.div>
                                <br />
                                <motion.div
                                    className='mt-20'
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 2.5 }}
                                >
                                    <h3 className='text-xl font-semibold pb-4'>Certifications</h3>
                                    <div>
                                        <img src="/aws-ccp-badge.png" alt="AWS CCP Badge" />
                                    </div>
                                </motion.div>
                            </div>
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 3 }}
                                className="w-1/3 hidden lg:block"
                            >
                                <Doughnut
                                    options={{
                                        maintainAspectRatio: false,
                                        legend: {
                                            position: 'right'
                                        },
                                        title: {
                                            display: true,
                                            text: "Top languages (Based on lines of code written)",
                                            fontColor: "#D4EAE9",
                                            position: "bottom"
                                        },
                                    }}
                                    data={{
                                        labels: [
                                            "python",
                                            "javascript",
                                            "c",
                                            "typescript",
                                            "dart",
                                            "java"
                                        ],
                                        datasets: [
                                            {
                                                data: [
                                                    9861,
                                                    3032,
                                                    880,
                                                    430,
                                                    351,
                                                    168
                                                ],
                                                backgroundColor: [
                                                    'rgb(209, 140, 29)', // py
                                                    'rgb(217, 214, 26)', // js
                                                    'rgb(104, 112, 117)', // c
                                                    'rgb(29, 137, 209)', //ts
                                                    'rgb(131, 79, 214)', // dart
                                                    'rgb(237, 78, 50)', // java
                                                ],
                                                borderColor: [
                                                    'rgb(209, 140, 29)', // py
                                                    'rgb(217, 214, 26)', // js
                                                    'rgb(104, 112, 117)', // c
                                                    'rgb(29, 137, 209)', //ts
                                                    'rgb(131, 79, 214)', // dart
                                                    'rgb(237, 78, 50)', // java
                                                ]
                                            }
                                        ]
                                    }}
                                />
                            </motion.div>
                        </div>
                    </div>
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

export default AboutPage;