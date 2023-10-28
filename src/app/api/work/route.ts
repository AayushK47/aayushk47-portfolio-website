import { GithubRepoResponse, GithubRepo } from "@interfaces/github";
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse<GithubRepo[]>> {
        const response = await axios.get<GithubRepoResponse[]>(
            "https://api.github.com/users/AayushK47/repos",
            {
                headers:  {
                    "Accept": "application/vnd.github+json",
                    "Authorization": `Bearer ${process.env.GH_PAT}`,
                    "X-GitHub-Api-Version": "2022-11-28"
                }
            }
        );
        let repos: GithubRepo[] = []
        for(let { description, full_name, html_url, stargazers_count, languages_url, fork } of response.data) {
            if(!!description && !fork) {
                const languages = Object.keys(
                    (
                        await axios.get<Record<string, any>>(
                            languages_url,
                            {
                                headers: {
                                    "Accept": "application/vnd.github+json",
                                    "Authorization": `Bearer ${process.env.GH_PAT}`,
                                    "X-GitHub-Api-Version": "2022-11-28"
                                }
                            }
                        )
                    ).data
                );
                repos.push({
                    description,
                    languages,
                    full_name,
                    stargazers_count,
                    html_url
                });
            }
        }

        repos = repos.sort((a, b) => b.stargazers_count - a.stargazers_count)
        
        return NextResponse.json(repos);
}