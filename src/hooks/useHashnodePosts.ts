import { useQuery } from '@tanstack/react-query'

interface HashnodePost {
  id: string
  title: string
  brief: string
  url: string
  coverImage: {
    url: string
  }
  tags: Array<{ name: string }>
}

interface HashnodeUser {
  id: string
  posts: {
    nodes: HashnodePost[]
  }
}

interface HashnodeResponse {
  data: {
    user: HashnodeUser
  }
}

const HASHNODE_API_URL = 'https://gql.hashnode.com/'
const USERNAME = 'AayushK47' // Your Hashnode username

const fetchHashnodePosts = async (): Promise<HashnodePost[]> => {
  const query = `
    query {
      user(username: "${USERNAME}") {
        id
        posts(pageSize: 4, page: 1, sortBy: DATE_PUBLISHED_DESC) {
          nodes {
            id
            title
            coverImage {
              url
            }
            url
            brief
            tags {
              name
            }
          }
        }
      }
    }
  `

  const response = await fetch(HASHNODE_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })

  if (!response.ok) {
    throw new Error('Failed to fetch Hashnode posts')
  }

  const data: HashnodeResponse = await response.json()
  return data.data.user.posts.nodes
}

export const useHashnodePosts = () => {
  return useQuery({
    queryKey: ['hashnode-posts'],
    queryFn: fetchHashnodePosts,
    staleTime: 1000 * 60 * 15, // 15 minutes
    gcTime: 1000 * 60 * 30, // 30 minutes
    retry: 3,
    refetchOnWindowFocus: false,
  })
}

export type { HashnodePost }
