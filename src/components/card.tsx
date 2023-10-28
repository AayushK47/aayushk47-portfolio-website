import { GithubRepo } from "@/interfaces/github"

interface CardProps {
    repo: GithubRepo;
}

export default function Card({ repo }: CardProps) {
    return (
        <div className='bg-dark m-5 w-72 p-3 text-center flex flex-col'>
            <a href={ repo.html_url } target="_blank" className='text-2xl font-semibold hover:text-highlight hover:underline'>{ repo.full_name.split('/')[1] }</a>
            <p className='p-4 text-justify'>{ repo.description }</p>
            <div className=''>
                <p className="text-xl">Tech Stack</p>
                <p>{repo.languages.join(', ')}</p>
            </div>
        </div>
    )
}