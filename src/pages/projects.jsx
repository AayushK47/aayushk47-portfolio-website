import React, { useState } from 'react';

import Head from '../components/Head';
import Card from '../components/Card';
import Navbar from '../components/Navbar';

function Projects() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Head />
            <div className="h-full w-full bg-primary">
                <Navbar open={open} setOpen={setOpen} />
                <div className={`flex ${open ? 'mt-48' : ''}`}>
                    <div className={`${open ? 'my-32' : 'mt-20'} text-info mx-10`}>
                        <h1 className="text-4xl font-bold">Projects</h1>
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;