import { useEffect } from "react";

interface useClickOutsideProps {
    ref: any,
    onClickOutside: () => void
}

export function useClickOutside({ref, onClickOutside}: useClickOutsideProps) {
    useEffect(() => {
      function handleClickOutside(event : Event) {
        if (ref.current && !ref.current.contains(event.target)) {
          onClickOutside();
        }
      }
      // Bind
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // dispose
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, onClickOutside]);
  }