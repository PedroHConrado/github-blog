import { createContext, ReactNode, useEffect, useState } from "react"
import { api } from "../libs/axios"
import { IPosts } from "../models/post.model"

interface PostsProviderProps {
    children: ReactNode
}

interface PostsContextType {
    posts: IPosts
    getPosts: (query?: string) => Promise<void>
}

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export const PostsContext = createContext({} as PostsContextType)

export function PostsProvider({ children }: PostsProviderProps) {
    const [posts, setPosts] = useState<IPosts>({
        total_count: 0,
        items: []
    })

    async function getPosts(query?: string) {
        if(query) {
            const res = await api.get(`search/issues?q=${query} repo:${username}/${repoName}`)
            setPosts(res.data)
        } else {
            const res = await api.get(`search/issues?q=repo:${username}/${repoName}`)
            setPosts(res.data)
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <PostsContext.Provider value={{posts, getPosts}}>
            {children}
        </PostsContext.Provider>
    )
}