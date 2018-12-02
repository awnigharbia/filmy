import React from 'react'
import {SliderParent} from './style'
import SliderModal from './sliderModal'
import {Icon} from 'react-icons-kit'
import {chevronLeft, chevronRight} from 'react-icons-kit/feather'

export default ({translateValue, backImg, movies, activeIndex, nextImg}) => {
  return (
    <>
      <SliderParent>
        <SliderParent.title>
          Your weekend buddy for this week
        </SliderParent.title>
        <SliderParent.top>
          <SliderParent.wrapper transform={translateValue}>
            {movies.map((item, key) => (
              <SliderParent.img
                src={item.poster_big}
                child={activeIndex}
                active={key === activeIndex}
                key={key}
              />
            ))}
          </SliderParent.wrapper>
          <SliderModal movies={movies} activeIndex={activeIndex} />
        </SliderParent.top>
        <SliderParent.leftArrow onClick={backImg}>
          <Icon icon={chevronLeft} size={35} />
        </SliderParent.leftArrow>
        <SliderParent.rightArrow onClick={nextImg}>
          <Icon icon={chevronRight} size={35} />
        </SliderParent.rightArrow>
      </SliderParent>
    </>
  )
}
