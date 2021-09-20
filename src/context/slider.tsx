import {callAll} from '@/utils/callAll'
import * as React from 'react'
import {ReactElement} from 'react'
import {useEffect, FC} from 'react'

interface SliderContextType {
  currentSlide: number
  translate: number
  movies: Movie[]
  nextImg: () => void
  prevImg: () => void
}

const SliderContext = React.createContext<SliderContextType>({
  currentSlide: 3,
  translate: 0,
  movies: [],
  nextImg: () => {
    // do nothing
  },
  prevImg: () => {
    // do nothing
  },
})

export function useSlider(): SliderContextType {
  const context = React.useContext(SliderContext)

  if (!context) {
    throw new Error('useSlider must be used within a SliderProvider')
  }

  return context
}

type SliderState = {
  currentSlide: number
  translate: number
}

const defaultState: SliderState = {
  currentSlide: 2,
  translate: 0,
}

interface Props {
  movies: Movie[]
}

const Slider: FC<Props> = ({movies, ...props}) => {
  const [currentSlide, setCurrentSlide] = React.useState(
    defaultState.currentSlide,
  )
  const [translate, setTranslate] = React.useState(defaultState.translate)
  const translateSlideValue = 245
  const step = 1
  const isLastSlide = currentSlide === movies.length - 1
  const isFirstSlide = currentSlide === 0
  const nextKeyCode = 39
  const prevKeyCode = 37

  const nextImg = () => {
    if (isLastSlide) {
      setCurrentSlide(2)
      setTranslate(0)
    } else {
      setCurrentSlide(currentSlide + step)
      setTranslate(translate + translateSlideValue)
    }
  }

  const prevImg = () => {
    if (!isFirstSlide) {
      setCurrentSlide(currentSlide - step)
      setTranslate(translate - translateSlideValue)
    }
  }

  const handleArrow = (e: KeyboardEvent) => {
    return e.keyCode === nextKeyCode
      ? nextImg()
      : e.keyCode === prevKeyCode
      ? prevImg()
      : null
  }

  useEffect(() => {
    document.addEventListener('keydown', handleArrow, false)

    return () => document.removeEventListener('keydown', handleArrow, false)
  }, [])

  const value = {currentSlide, translate, movies, nextImg, prevImg}

  return <SliderContext.Provider value={value} {...props} />
}

const SliderNextArrow = ({
  children,
}: {
  children: ReactElement
}): React.ReactElement => {
  const {nextImg} = useSlider()

  return React.cloneElement(children, {
    onClick: callAll(() => nextImg(), children.props.onClick),
  })
}

const SliderPrevArrow = ({
  children,
}: {
  children: ReactElement
}): React.ReactElement => {
  const {prevImg} = useSlider()

  return React.cloneElement(children, {
    onClick: callAll(() => prevImg(), children.props.onClick),
  })
}

const SliderContent: FC = ({children}) => {
  const {currentSlide, translate} = useSlider()
  const value = {currentSlide, translate}

  return React.cloneElement(
    typeof children === 'function' ? children(value) : children,
    {
      translate,
      currentSlide,
    },
  )
}

export {Slider, SliderNextArrow, SliderPrevArrow, SliderContent}
