import {useMovieModal} from '@/context/MovieModalContext'
import * as React from 'react'
import {FC} from 'react'
import {Icon} from 'react-icons-kit'
import {star} from 'react-icons-kit/fa/star'
import {calendar} from 'react-icons-kit/feather'
import * as Movies from './style'
import {genres} from 'src/constants'

export const MovieCard: FC<Movie> = ({
  id,
  poster_path = '',
  vote_average,
  release_date,
  genre_ids,
  title,
}) => {
  const {handleOpen} = useMovieModal()

  return (
    <Movies.MovieWrapper onClick={() => handleOpen(id)}>
      <Movies.Movie src={`https://image.tmdb.org/t/p/w500/${poster_path}`}>
        <Movies.MovieDetailsWrapper>
          <Movies.Bottom>
            <Movies.BottomDetails color="rgba(255,255,255,.8)">
              <Icon icon={calendar} size={20} />
              {release_date}
            </Movies.BottomDetails>
            <Movies.BottomDetails>
              <Icon icon={star} size={20} />
              {vote_average}/10
            </Movies.BottomDetails>
          </Movies.Bottom>
        </Movies.MovieDetailsWrapper>
      </Movies.Movie>
      <Movies.Details>
        <Movies.GenreYear>
          {genre_ids
            ?.map(id => genres.find(genre => genre.id === id)?.name)
            ?.join(' | ')}
        </Movies.GenreYear>
        <Movies.Name>{title}</Movies.Name>
      </Movies.Details>
    </Movies.MovieWrapper>
  )
}
