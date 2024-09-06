import { getPosts } from '@/core/apis/post'
import { useQuery } from '@tanstack/react-query'
import Post from '../components/Post'

function PostList() {
  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(),
  })

  console.log(data)
  return (
    <div className="my-4 justify-self-center">
      {data?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}

export default PostList
