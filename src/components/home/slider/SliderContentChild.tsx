import React, {FC} from 'react'
import {useSlider} from 'src/context/slider'

import {SliderModal} from './SliderModal'
import * as SliderParent from './style'

interface SliderContentChildProps {
  currentSlide?: number
  translate?: number
}

export const SliderContentChild: FC<SliderContentChildProps> = ({
  translate = 250,
  currentSlide = 0,
}) => {
  const {movies} = useSlider()

  return (
    <SliderParent.SliderTop>
      <SliderParent.SliderWrapper transform={translate}>
        {movies.map(({id, poster_path}, key) => {
          return (
            <SliderParent.ActiveImg
              key={id}
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              active={key === currentSlide}
            />
          )
        })}
      </SliderParent.SliderWrapper>
      <SliderModal movies={movies} activeIndex={currentSlide} />
    </SliderParent.SliderTop>
  )
}
