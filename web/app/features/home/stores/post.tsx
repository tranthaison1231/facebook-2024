import { create } from 'zustand'

interface CreatePostState {
  isCreatePostOpen: boolean
  onOpenCreatePost: () => void
  onToggleCreatePost: () => void
  onCloseCreatePost: () => void
}

export const useCreatePost = create<CreatePostState>(set => ({
  isCreatePostOpen: false,
  onOpenCreatePost: () => set(() => ({ isCreatePostOpen: true })),
  onToggleCreatePost: () => set(state => ({ isCreatePostOpen: !state.isCreatePostOpen })),
  onCloseCreatePost: () => set(() => ({ isCreatePostOpen: false }))
}))
