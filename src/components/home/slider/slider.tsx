import * as React from 'react'
import {useEffect, FC} from 'react'
import SliderChildren from './sliderChildren'
import {useSetState} from '../../hooks/useSetState'
import {Movie} from './sliderModal'

interface Props {
  loading: boolean
  movies: Movie[]
}

const Slider: FC<Props> = ({movies, loading}) => {
  const [state, setState] = useSetState({
    activeIndex: 2,
    translateValue: 0,
  })

  const nextImg = () => {
    setState(
      state.activeIndex === movies.length - 1
        ? {
            activeIndex: 2,
            translateValue: 0,
          }
        : {
            activeIndex: state.activeIndex + 1,
            translateValue: state.translateValue - 250,
          },
    )
  }

  const backImg = () => {
    setState(
      state.activeIndex === 0
        ? null
        : {
            activeIndex: state.activeIndex - 1,
            translateValue: state.translateValue + 250,
          },
    )
  }

  const handleArrow = (e: KeyboardEvent) => {
    return e.keyCode === 39 ? nextImg() : e.keyCode === 37 ? backImg() : null
  }

  useEffect(() => {
    document.addEventListener('keydown', handleArrow, false)

    return () => document.removeEventListener('keydown', handleArrow, false)
  })

  return loading ? null : (
    <SliderChildren
      {...state}
      nextImg={nextImg}
      backImg={backImg}
      movies={movies}
      loading={loading}
    />
  )
}

export default Slider
