import * as React from 'react'
import {FC} from 'react'
import * as SliderParent from './style'
import {Icon} from 'react-icons-kit'
import {ModalProvider} from '../../App'
import {star} from 'react-icons-kit/fa/'
import {search} from 'react-icons-kit/feather/search'
import {globe, video} from 'react-icons-kit/feather'

export interface Movie {
  id: number
  title: string
  poster_path: string
  release_date: number
  genres: []
  overview: string
  vote_average: number
  imdb: string
}

interface Props {
  movies: Movie[]
  activeIndex: number
}

const SliderModal: FC<Props> = ({movies, activeIndex}) => {
  return (
    <ModalProvider.Consumer>
      {({handleOpen}) => {
        return (
          <SliderParent.ActiveModal>
            <SliderParent.ModalImg
              src={`https://image.tmdb.org/t/p/w500/${movies[activeIndex].poster_path}`}
            />
            <SliderParent.ModalInfo>
              <SliderParent.ModalTitle>
                {movies[activeIndex].title}
              </SliderParent.ModalTitle>
              <SliderParent.ModalLine />
              <Info
                title="Release Date"
                content={`${movies[activeIndex].release_date}`}
              />
              <Info title="Genre" content="A" />
              <Info title="Synopsis" content={movies[activeIndex].overview} />
              <SliderParent.ModalCenter />
              <SliderParent.ModalBottom>
                <SliderParent.ModalBottomItem color="#fec72a">
                  <Icon icon={star} size={30} />
                  <SliderParent.ModalBottomContent>
                    {movies[activeIndex].vote_average}/10
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
  title: string
  content: string
}

const Info: FC<InfoProps> = ({title, content}) => (
  <SliderParent.InfoWrapper>
    <SliderParent.InfoTitle>{title}</SliderParent.InfoTitle>
    <SliderParent.InfoContent>{content}</SliderParent.InfoContent>
  </SliderParent.InfoWrapper>
)

export default SliderModal
