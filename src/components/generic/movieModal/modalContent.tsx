import * as React from 'react'
import {FC} from 'react'
import {Icon} from 'react-icons-kit'
import {x} from 'react-icons-kit/feather'
import {twitter} from 'react-icons-kit/icomoon/twitter'
import {facebook} from 'react-icons-kit/fa'
import {PoseGroup} from 'react-pose'

import * as Modal from './style'
import {useModal} from '@/context/modal-context'
import {useMovie} from '@/api/movie_api'

export interface Data {
  overview: string
  genres: genre[]
  id: string
  poster_path: string
  vote_average: number
  title: string
  release_date: number
}

export const ModalContent: FC = () => {
  //Fix me:lockscroll
  // {
  //   open ? useLockBodyScroll('lock') : useLockBodyScroll('unlock')
  // }

  const {movieId} = useModal()
  const {
    movie,
    isFetching,
    isIdle,
    isSuccess,
  }: {
    movie: Data
    isFetching: boolean
    isIdle: boolean
    isSuccess: boolean
  } = useMovie(movieId)
  const {isOpen, setIsOpen} = useModal()

  return isIdle ? null : isFetching ? (
    <div>Loading..</div>
  ) : (
    <PoseGroup>
      {isOpen && [
        <Modal.Modal key="modal" pose={isSuccess}>
          <Modal.Close onClick={() => setIsOpen(false)}>
            <Icon icon={x} size={30} />
          </Modal.Close>

          <Modal.ModalContent key="content">
            <Modal.LeftSection>
              <Modal.Img
                src={` https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.poster_path}
              />

              <Modal.Name>{movie.title}</Modal.Name>
              <Modal.bio>
                <span role="img" aria-label="globe">
                  🌐
                </span>
                English -
                <span role="img" aria-label="star">
                  ⭐
                </span>
                {movie.vote_average}/10
              </Modal.bio>
              <Modal.SocialShare>
                <Icon icon={facebook} size={30} style={{color: '#4267B2'}} />
                <Icon
                  icon={twitter}
                  size={25}
                  style={{color: '#1da1f2', marginLeft: '10px'}}
                />
              </Modal.SocialShare>
            </Modal.LeftSection>

            <Modal.Center>
              <Category title="Year">
                <Modal.CatBody>{movie.release_date}</Modal.CatBody>
              </Category>
              <Category title="Description">
                <Modal.CatBody>{movie.overview}</Modal.CatBody>
              </Category>
              <Category title="Genres">
                <Modal.CatGenres>
                  {movie.genres.map((item, key) => (
                    <li key={key}>{item.name}</li>
                  ))}
                </Modal.CatGenres>
              </Category>
              <Category title="Actors">
                <Modal.CatGenres>
                  <li>Kate McKinnon</li>
                  <li>Mila Kunis</li>
                  <li>Sam Heughan</li>
                </Modal.CatGenres>
              </Category>
            </Modal.Center>
            <Modal.Right>
              {/* <Category title="Trailer"> */}
              {/* <iframe
                  title="trailer"
                  width="100%"
                  height="250"
                  src={`https://www.youtube.com/embed/${trailer}`}
                  frameBorder="0"
                  allowFullScreen
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                /> */}
              {/* </Category> */}
              {/* <SelectQuality links={items} imdb={imdb} /> */}
            </Modal.Right>
          </Modal.ModalContent>
        </Modal.Modal>,
      ]}
    </PoseGroup>
  )
}

const Category: FC<{title: string; children: React.ReactChild}> = ({
  title,
  children,
}) => (
  <Modal.Category>
    <Modal.CatTitle>{title}</Modal.CatTitle>
    {children}
  </Modal.Category>
)
