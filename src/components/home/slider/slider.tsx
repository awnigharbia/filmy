import * as React from 'react'
import {FC} from 'react'
import {SliderModal} from './SliderModal'
import {Icon} from 'react-icons-kit'
import {chevronLeft, chevronRight} from 'react-icons-kit/feather'

import * as SliderParent from './style'
import {
  Slider,
  SliderNextArrow,
  SliderPrevArrow,
  SliderContent,
} from '../../../context/slider'

interface Props {
  movies: Movie[]
}

interface SliderContentProps {
  currentSlide: number
  translate: number
}

export const SliderComponent: FC<Props> = ({movies}) => {
  return (
    <Slider movies={movies}>
      <SliderParent.SliderParent>
        <SliderParent.Welcome>
          Your weekend buddy for this week
        </SliderParent.Welcome>
        <SliderContent>
          {({currentSlide, translate}: SliderContentProps) => {
            return (
              <SliderParent.SliderTop>
                <SliderParent.SliderWrapper transform={translate}>
                  {movies.map(({id, poster_path}) => (
                    <SliderParent.ActiveImg
                      src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                      child={currentSlide}
                      active={id === currentSlide}
                      key={id}
                    />
                  ))}
                </SliderParent.SliderWrapper>
                <SliderModal movies={movies} activeIndex={currentSlide} />
              </SliderParent.SliderTop>
            )
          }}
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
