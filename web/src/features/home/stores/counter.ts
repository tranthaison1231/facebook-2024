import { create } from 'zustand'
import createContext from 'zustand/context'
import { persist } from 'zustand/middleware'

interface CounterState {
  count: number
  increment: () => void
  decrement: () => void
}

export const counterStore = create<CounterState>(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  persist(
    set => ({
      count: 0,
      increment: () => set(state => ({ count: state.count + 1 })),
      decrement: () => set(state => ({ count: state.count - 1 }))
    }),
    {
      name: 'counter-store'
    }
  )
)

export const { Provider: CounterProvider, useStore: useCounterStore } = createContext<typeof counterStore>()
