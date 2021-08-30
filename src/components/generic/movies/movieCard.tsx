import * as React from 'react'
import {FC} from 'react'
import {Icon} from 'react-icons-kit'
import {star} from 'react-icons-kit/fa/star'
import {calendar} from 'react-icons-kit/feather'
import * as Movies from './style'

interface Props {
  handleOpen(imdb: string): void
  posterURL?: string
  rating: number
  year: number
  genres: string[]
  title: string
  imdb: string
}

const MovieCard: FC<Props> = ({
  posterURL = '',
  handleOpen,
  rating,
  year,
  genres,
  title,
  imdb,
}) => (
  <Movies.MovieWrapper onClick={() => handleOpen(imdb)}>
    <Movies.Movie src={`https://image.tmdb.org/t/p/w500/${posterURL}`}>
      <Movies.MovieDetailsWrapper>
        <Movies.Bottom>
          <Movies.BottomDetails color="rgba(255,255,255,.8)">
            <Icon icon={calendar} size={20} />
            {year}
          </Movies.BottomDetails>
          <Movies.BottomDetails>
            <Icon icon={star} size={20} />
            {rating}/10
          </Movies.BottomDetails>
        </Movies.Bottom>
      </Movies.MovieDetailsWrapper>
    </Movies.Movie>
    <Movies.Details>
      <Movies.GenreYear>TEST GENRE</Movies.GenreYear>
      <Movies.Name>{title}</Movies.Name>
    </Movies.Details>
  </Movies.MovieWrapper>
)

export default MovieCard
