import * as React from 'react'
import {FC} from 'react'
import SliderModal from './sliderModal'
import {Icon} from 'react-icons-kit'
import {chevronLeft, chevronRight} from 'react-icons-kit/feather'
import {Movie} from './sliderModal'

import * as SliderParent from './style'

interface Props {
  translateValue: number
  backImg(): void
  movies: Movie[]
  activeIndex: number
  nextImg(): void
}

const SliderChildren: FC<Props> = ({
  translateValue,
  backImg,
  movies,
  activeIndex,
  nextImg,
}) => {
  return (
    <SliderParent.SliderParent>
      <SliderParent.Welcome>
        Your weekend buddy for this week
      </SliderParent.Welcome>
      <SliderParent.SliderTop>
        <SliderParent.SliderWrapper transform={translateValue}>
          {movies.map((item, key) => (
            <SliderParent.ActiveImg
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              child={activeIndex}
              active={key === activeIndex}
              key={key}
            />
          ))}
        </SliderParent.SliderWrapper>
        <SliderModal movies={movies} activeIndex={activeIndex} />
      </SliderParent.SliderTop>
      <SliderParent.LeftArrow onClick={backImg}>
        <Icon icon={chevronLeft} size={35} />
      </SliderParent.LeftArrow>
      <SliderParent.RightArrow onClick={nextImg}>
        <Icon icon={chevronRight} size={35} />
      </SliderParent.RightArrow>
    </SliderParent.SliderParent>
  )
}

export default SliderChildren
