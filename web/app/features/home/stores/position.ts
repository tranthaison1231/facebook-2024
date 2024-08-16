import { create } from 'zustand'

export enum Position {
  Root,
  TagPeople,
  FeelingActivity,
  Gif,
  ShowMore,
  CheckIn,
  PostAudience
}

interface PositionStore {
  position: Position
  setPosition: (position: Position) => void
}

export const usePositionStore = create<PositionStore>(set => ({
  position: Position.Root,
  setPosition: (position: Position) => set({ position })
}))
