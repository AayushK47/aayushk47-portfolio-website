"use client"
import GitHubCalendar from 'react-github-calendar';

export default function Work() {
    return (
        <>
            <div className="flex flex-col overflow-hidden px-20 mt-16">
                <div>
                    <h1 className="pb-10 text-3xl lg:text-4xl font-bold">My Contributions</h1>
                    <GitHubCalendar blockSize={24} username='AayushK47' colorScheme='dark' theme={{
                        dark: ["#D4EAE9", "#f8e8b9", "#f4d88a", "#f0c95c", "#EAB41E"]
                    }}/>
                </div>
                <div className='mb-5'>
                    <h1 className="py-10 text-3xl lg:text-4xl font-bold">Projects</h1>
                    <div>
                        <div className='bg-dark w-1/5 p-3 text-center'>
                            <h3 className='text-2xl font-semibold'>Fireshell</h3>
                            <p className='p-4 text-justify'>A shell for firebase realtime database and cloud firestore.</p>
                            <div className=''>
                                <p>Tech Stack</p>
                                <div className='flex justify-end pt-5 pb-2'>
                                    <a className="mr-3" href="https://github.com/AayushK47/fireshell" target='_blank'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 hover:text-highlight" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}