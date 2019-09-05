import * as React from 'react'
import {FC} from 'react'
import {Icon} from 'react-icons-kit'
import {star} from 'react-icons-kit/fa/star'
import {calendar} from 'react-icons-kit/feather'
import * as Movies from './style'

interface Props {
  handleOpen(imdb:string):void;
  poster_med?:string;
  rating:number;
  year:number;
  genres:string[];
  title:string;
  imdb:string;
}

const MovieCard:FC<Props> = ({poster_med = "", handleOpen, rating, year, genres, title, imdb}) => (
  <Movies.movieWrapper onClick={() => handleOpen(imdb)}>
    <Movies.movie src={poster_med}>
      <Movies.movieDetailsWrapper>
        <Movies.bottom>
          <Movies.bottomDetails color="rgba(255,255,255,.8)">
            <Icon icon={calendar} size={20} />
            {year}
          </Movies.bottomDetails>
          <Movies.bottomDetails>
            <Icon icon={star} size={20} />
            {rating}/10
          </Movies.bottomDetails>
        </Movies.bottom>
      </Movies.movieDetailsWrapper>
    </Movies.movie>
    <Movies.details>
      <Movies.genreYear>
        {genres.slice(0, 3).join(' | ')}
      </Movies.genreYear>
      <Movies.name>{title}</Movies.name>
    </Movies.details>
  </Movies.movieWrapper>
)

export default MovieCard