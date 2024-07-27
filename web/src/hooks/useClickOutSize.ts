import { useEffect } from 'react'

interface useClickOutsideProps {
  ref: React.RefObject<HTMLElement>
  onClickOutside: () => void
}

export function useClickOutside({ ref, onClickOutside }: useClickOutsideProps) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, onClickOutside])
}
