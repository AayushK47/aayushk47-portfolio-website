import React, { useState } from 'react';

import Head from '../components/Head';
import Card from '../components/Card';
import Navbar from '../components/Navbar';

function Projects() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Head />
            <div className="h-screen w-screen bg-primary">
                <Navbar open={open} setOpen={setOpen} />
                <div className={`flex ${open ? 'mt-48' : ''}`}>
                    <div className={`${open ? 'my-32' : 'my-20'} w-screen text-info mx-10`}>
                        <h1 className="text-4xl font-bold">Projects</h1>
                        <Card />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;