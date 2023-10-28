"use client"
import { ThreeDots } from "react-loader-spinner"
import { GithubRepo } from '@/interfaces/github';
import Card from '@components/card';
import GitHubCalendar from 'react-github-calendar';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Work() {
    const { data, isLoading } = useSWR<GithubRepo[]>(
        `/api/work/`,
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    );
    
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
                    <div className={`flex flex-wrap w-full  justify-${isLoading ? "center" : "start"}`}>
                        { isLoading ? <ThreeDots color="#EAB41E" /> : data?.map((repo, i) => <Card repo={repo} key={i} /> ) } 
                    </div>

                </div>

            </div>
        </>
    )
}