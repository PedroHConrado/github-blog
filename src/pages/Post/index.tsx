import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { PostContent } from './components/PostContent'
import { PostHeader } from './components/PostHeader'

import { PostContainer } from './styles'
import { api } from '../../libs/axios'
import { dateFormatter } from '../../utils/formatter'
import { IPost } from '../../models/post.model'

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export function Post() {
  const { id } = useParams()
  const [post, setPost] = useState<IPost>({} as IPost)

  async function getPostByNumber(postNumber?: string) {
    try {
        const res = await api.get(`repos/${username}/${repoName}/issues/${postNumber}`);
        setPost(res.data)
        
    } catch (error) {
        console.error("Erro ao buscar o post: ", error);
    }
  }

  useEffect(() => {
    getPostByNumber(id)
  }, [])
  
  return (
    <PostContainer>
      <PostHeader
        title={post?.title} 
        user={post?.user} 
        comments={post?.comments} 
        created_at={dateFormatter(post.created_at!)}
        html_url={post?.html_url}
      />
      <PostContent body={post?.body!}/>
    </PostContainer>
  )
}
