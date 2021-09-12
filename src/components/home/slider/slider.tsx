import * as React from 'react'
import {FC} from 'react'
import {Icon} from 'react-icons-kit'
import {chevronLeft, chevronRight} from 'react-icons-kit/feather'

import * as SliderParent from './style'
import {
  Slider,
  SliderNextArrow,
  SliderPrevArrow,
  SliderContent,
} from 'src/context/slider'
import {SliderContentChild} from './SliderContentChild'

interface Props {
  movies: Movie[]
}

export const SliderComponent: FC<Props> = ({movies}) => {
  return (
    <Slider movies={movies}>
      <SliderParent.SliderParent>
        <SliderParent.Welcome>
          Your weekend buddy for this week
        </SliderParent.Welcome>
        <SliderContent>
          <SliderContentChild />
        </SliderContent>
        <SliderPrevArrow>
          <SliderParent.LeftArrow>
            <Icon icon={chevronLeft} size={35} />
          </SliderParent.LeftArrow>
        </SliderPrevArrow>
        <SliderNextArrow>
          <SliderParent.RightArrow>
            <Icon icon={chevronRight} size={35} />
          </SliderParent.RightArrow>
        </SliderNextArrow>
      </SliderParent.SliderParent>
    </Slider>
  )
}
