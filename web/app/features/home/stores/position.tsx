import { createContext, useContext, useState } from 'react'

export enum Position {
  Root,
  TagPeople,
  FeelingActivity,
  Gif,
  ShowMore,
  CheckIn,
  PostAudience
}

export const PositionContext = createContext({
  position: Position.Root,
  setPosition: (_position: Position) => {}
})

export const PositionProvider = ({ children }: { children: React.ReactNode }) => {
  const [position, setPosition] = useState(Position.Root)
  return (
    <PositionContext.Provider
      value={{
        position,
        setPosition
      }}
    >
      {children}
    </PositionContext.Provider>
  )
}

export const usePosition = () => {
  const { position, setPosition } = useContext(PositionContext)
  return {
    position,
    setPosition
  }
}
