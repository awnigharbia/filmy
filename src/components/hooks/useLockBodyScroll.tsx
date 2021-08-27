import React, {useLayoutEffect} from 'react'

function useLockBodyScroll(action: 'lock' | 'unlock') {
  useLayoutEffect(() => {
    if (action === 'lock') {
      // Get original body overflow
      // Prevent scrolling on mount
      document.body.style.overflow = 'hidden'
    }
    if (action === 'unlock') {
      document.body.style.overflow = 'auto'
    }
  }, [action]) // Empty array ensures effect is only run on props change
}

export default useLockBodyScroll
