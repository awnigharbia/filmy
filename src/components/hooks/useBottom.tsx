import React, {useEffect, useState} from 'react'

function useBottom(ref:React.RefObject<HTMLDivElement>) {
  const [isBottom, setBottom] = useState(false)

  let numSteps = 20.0
  let boxElement: Element 
  

  function createObserver() {
    let observer: IntersectionObserver

    let options = {
      root: null,
      rootMargin: '0px',
      threshold: buildThresholdList(),
    }

    observer = new IntersectionObserver(handleIntersect, options)
    observer.observe(boxElement)
  }

  function buildThresholdList() {
    let thresholds = []
    let numSteps = 1

    for (let i = 1.0; i <= numSteps; i++) {
      let ratio = i / numSteps
      thresholds.push(ratio)
    }

    thresholds.push(0)
    return thresholds
  }

  function handleIntersect(entries:IntersectionObserverEntry[], observer:IntersectionObserver) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        setBottom(true)
      } else {
        setBottom(false)
      }
    })
  }

  useEffect(() => {
    window.addEventListener(
      'load',
      function() {
        if(ref.current) {
          boxElement = ref.current
        }

        createObserver()
      },
      false,
    )

    return () => {
      setBottom(false)
    }
  }, [])

  return {
    isBottom,
  }
}

export default useBottom
