import { getPosts } from '@/core/apis/post'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useIntersectionObserver } from './useIntersectionObserver'

export function usePostList() {
  const { data, fetchNextPage, hasNextPage, isFetching, error } = useInfiniteQuery({
    queryFn: ({ pageParam = 1 }) => getPosts({ pageParam }),
    queryKey: ['posts'],
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length ? allPages.length + 1 : undefined
    }
  })

  const posts = useMemo(() => data?.pages.flatMap(page => page), [data])

  const lastElementRef = useIntersectionObserver(
    () => {
      if (hasNextPage && !isFetching) {
        fetchNextPage()
      }
    },
    [fetchNextPage, hasNextPage, isFetching]
  )

  return { posts, lastElementRef, isFetching }
}
