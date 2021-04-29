import React from 'react';
import { motion } from 'framer-motion';

function Card() {
    return (
        <motion.div
            initial={{
                rotate: 10,
                y: 200,
                opacity: 0.3
            }}

            animate={{
                rotate: 0,
                y:0,
                opacity: 1
            }}

            className="my-10"
        >
            <div className="w-auto bg-dark px-5 py-3 font-light">
                <h1 className="text-2xl font-semibold">Fireshell</h1>
                <div className="grid gap-4 grid-cols-4">
                    <p className="mt-8 mb-5 col-span-4 lg:col-span-3">
                        A CLI for running firebase database and firestore queries on the shell. 
                        Just install the package globally using npm or yarn, select the service (Realtime Database or Cloud Firestore), enter the path to config file and run your queries.
                    </p>
                    <motion.div
                        className="hidden lg:block h-full"
                        whileHover={{ scale: 1.3 }}
                    >
                        <img src="https://drive.google.com/uc?id=1wOkHEmwoqC-Kdm8YqTqls6JAmRmzGD0f" alt=""/>
                    </motion.div>
                </div>
                <p>
                    <span className="font-bold text-highlight">Technologies Used:</span> Node.js, Firebase API
                </p>
                <div className="flex mt-5 justify-end">
                    <a className="mr-3" href="https://github.com/AayushK47/fireshell">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 hover:text-highlight" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a>
                    <a className="mr-3" href="https://www.npmjs.com/package/fireshell">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 hover:text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
            </div>
        </motion.div>

           
        
    )
}

export default Card;