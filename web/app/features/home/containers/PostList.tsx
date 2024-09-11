import Post from '../components/Post'
import { usePostList } from '../hooks/usePostList'

function PostList() {
  const { posts, lastElementRef, isFetching } = usePostList()

  return (
    <div className="my-4 justify-self-center">
      {posts?.map(post => (
        <div ref={lastElementRef} key={post.id}>
          <Post post={post} />
        </div>
      ))}
      {isFetching && (
        <div className="mt-4 space-y-4">
          <Post.Skeleton />
        </div>
      )}
    </div>
  )
}

export default PostList
