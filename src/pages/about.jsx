import React from 'react';

import Navbar from '../components/Navbar';

function AboutPage() {
    return (
        <div className="overflow-hidden h-screen bg-primary">
            <Navbar />
            <div className="px-28 py-28 text-info">
                <h1 className="text-4xl font-bold">About</h1>
                <div className="flex flex-row my-8">
                    <div className="w-3/5">
                        <p>
                            Hello, My name is Aayush Kurup. I am a Software Engineer from Bhopal, Madhya Pradesh, India. 
                            Currently, I am employed by Tata Consultancy Services as an Assistant Software Engineer - Trainee.
                        </p>
                        <br/>
                        <p>
                            I love working on a variety of technologies including Web Development, Mobile App Development and 
                            Deep Learning. My goal is to build highly performant applications that are solve real-world problems 
                            and provide users with an awesome experience.
                        </p>
                        <br/>
                        <p>Here are a few technologies that I work with:-</p>
                        <br/>
                        <div className="flex flex-row w-full justify-around">
                            <ul className="list-disc">
                                <li>HTML and CSS</li>
                                <li>React.js</li>
                                <li>Python</li>
                            </ul>
                            <ul className="list-disc">
                                <li>Javascript</li>
                                <li>Node.js</li>
                                <li>Flutter</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default AboutPage;