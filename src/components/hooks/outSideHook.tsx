import * as React from 'react'
import {useEffect} from 'react'

interface Props {
  handler(event: MouseEvent): void
  ref: React.RefObject<HTMLDivElement>
}

export const useOnClickOutside = ({ref, handler}: Props) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }

      handler(event)
    }

    document.addEventListener('mousedown', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, []) // Empty array ensures that effect is only run on mount and unmount
}
