import React from 'react'
import {Icon} from 'react-icons-kit'
import {star} from 'react-icons-kit/fa/star'
import {calendar} from 'react-icons-kit/feather'
import {Movies as Wrapper} from './style'

export default ({poster_med, open, rating, year, genres, title, imdb}) => (
  <Wrapper.movieWrapper onClick={() => open(imdb)}>
    <Wrapper.movie src={poster_med}>
      <Wrapper.movie.details>
        <Wrapper.movie.bottom>
          <Wrapper.movie.bottomDetails color="rgba(255,255,255,.8)">
            <Icon icon={calendar} size={20} />
            {year}
          </Wrapper.movie.bottomDetails>
          <Wrapper.movie.bottomDetails>
            <Icon icon={star} size={20} />
            {rating}/10
          </Wrapper.movie.bottomDetails>
        </Wrapper.movie.bottom>
      </Wrapper.movie.details>
    </Wrapper.movie>
    <Wrapper.movie.detail>
      <Wrapper.movie.genreYear>
        {genres.slice(0, 3).join(' | ')}
      </Wrapper.movie.genreYear>
      <Wrapper.movie.name>{title}</Wrapper.movie.name>
    </Wrapper.movie.detail>
  </Wrapper.movieWrapper>
)
