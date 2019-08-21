import React from 'react'
import {SliderParent} from './style'
import {Icon} from 'react-icons-kit'
import {ModalProvider} from '../../App'

// icons
import {star} from 'react-icons-kit/fa/'
import {search} from 'react-icons-kit/feather/search'
import {globe, video} from 'react-icons-kit/feather'

export default ({movies, activeIndex}) => {
  console.log()
  return (
    <ModalProvider.Consumer>
      {handleOpen => {
        return (
          <SliderParent.modal>
            <SliderParent.modal.img src={movies[activeIndex].poster_big} />
            <SliderParent.modal.info>
              <SliderParent.modal.title>
                {movies[activeIndex].title}
              </SliderParent.modal.title>
              <SliderParent.modal.line />
              <Info title="Release Date" content={movies[activeIndex].year} />
              <Info
                title="Genre"
                content={movies[activeIndex].genres.join('|')}
              />
              <Info
                title="Synopsis"
                content={movies[activeIndex].description}
              />
              <SliderParent.modal.center />
              <SliderParent.modal.bottom>
                <SliderParent.modal.bottom.item color="#fec72a">
                  <Icon icon={star} size={30} />
                  <SliderParent.modal.bottom.content>
                    {movies[activeIndex].rating}/10
                  </SliderParent.modal.bottom.content>
                </SliderParent.modal.bottom.item>

                <SliderParent.modal.bottom.item color="#2091EB">
                  <Icon icon={globe} size={30} />
                  <SliderParent.modal.bottom.content>
                    English
                  </SliderParent.modal.bottom.content>
                </SliderParent.modal.bottom.item>

                <SliderParent.modal.bottom.item color="#4FBA6F">
                  <Icon icon={video} size={30} />
                  <SliderParent.modal.bottom.content>
                    1080p
                  </SliderParent.modal.bottom.content>
                </SliderParent.modal.bottom.item>
              </SliderParent.modal.bottom>
              <SliderParent.modal.download
                onClick={() => handleOpen(movies[activeIndex].imdb)}
              >
                <Icon icon={search} size={30} />
              </SliderParent.modal.download>
            </SliderParent.modal.info>
          </SliderParent.modal>
        )
      }}
    </ModalProvider.Consumer>
  )
}

const Info = ({title, content}) => (
  <SliderParent.modal.info.wrapper>
    <SliderParent.modal.info.title>{title}</SliderParent.modal.info.title>
    <SliderParent.modal.info.content>{content}</SliderParent.modal.info.content>
  </SliderParent.modal.info.wrapper>
)
