import * as React from 'react'
import { FC } from 'react'
import * as SliderParent from './style'
import { Icon } from 'react-icons-kit'
import { ModalProvider } from '../../App'
import { star } from 'react-icons-kit/fa/'
import { search } from 'react-icons-kit/feather/search'
import { globe, video } from 'react-icons-kit/feather'

export interface Movie {
  title: string;
  poster_big: string;
  poster_med: string;
  year: number;
  genres: [];
  description: string;
  rating: number;
  imdb: string;
}

interface Props {
  movies: Movie[];
  activeIndex: number
}

const SliderModal: FC<Props> = ({ movies, activeIndex }) => {
  return (
    <ModalProvider.Consumer>
      {({ handleOpen }) => {
        return (
          <SliderParent.ActiveModal>
            <SliderParent.ModalImg src={movies[activeIndex].poster_big} />
            <SliderParent.ModalInfo>
              <SliderParent.ModalTitle>
                {movies[activeIndex].title}
              </SliderParent.ModalTitle>
              <SliderParent.ModalLine />
              <Info title="Release Date" content={`${movies[activeIndex].year}`} />
              <Info
                title="Genre"
                content={movies[activeIndex].genres.join('|')}
              />
              <Info
                title="Synopsis"
                content={movies[activeIndex].description}
              />
              <SliderParent.ModalCenter />
              <SliderParent.ModalBottom>
                <SliderParent.ModalBottomItem color="#fec72a">
                  <Icon icon={star} size={30} />
                  <SliderParent.ModalBottomContent>
                    {movies[activeIndex].rating}/10
                  </SliderParent.ModalBottomContent>
                </SliderParent.ModalBottomItem>

                <SliderParent.ModalBottomItem color="#2091EB">
                  <Icon icon={globe} size={30} />
                  <SliderParent.ModalBottomContent>
                    English
                  </SliderParent.ModalBottomContent>
                </SliderParent.ModalBottomItem>

                <SliderParent.ModalBottomItem color="#4FBA6F">
                  <Icon icon={video} size={30} />
                  <SliderParent.ModalBottomContent>
                    1080p
                  </SliderParent.ModalBottomContent>
                </SliderParent.ModalBottomItem>
              </SliderParent.ModalBottom>
              <SliderParent.ModalDownload
                onClick={() => handleOpen(movies[activeIndex].imdb)}
              >
                <Icon icon={search} size={30} />
              </SliderParent.ModalDownload>
            </SliderParent.ModalInfo>
          </SliderParent.ActiveModal>
        )
      }}
    </ModalProvider.Consumer>
  )
}

interface InfoProps {
  title: string;
  content: string
}

const Info: FC<InfoProps> = ({ title, content }) => (
  <SliderParent.InfoWrapper>
    <SliderParent.InfoTitle>{title}</SliderParent.InfoTitle>
    <SliderParent.InfoContent>{content}</SliderParent.InfoContent>
  </SliderParent.InfoWrapper>
)

export default SliderModal