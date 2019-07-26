import React, {useLayoutEffect} from 'react'

function useLockBodyScroll(props) {
  useLayoutEffect(() => {
    if (props === 'lock') {
      // Get original body overflow
      // Prevent scrolling on mount
      document.body.style.overflow = 'hidden'
    }
    if (props === 'unlock') {
      document.body.style.overflow = 'auto'
    }
  }, [props]) // Empty array ensures effect is only run on props change
}

export default useLockBodyScroll
