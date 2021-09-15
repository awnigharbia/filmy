import * as React from 'react'
import {FC} from 'react'
import * as Movies from './style'

export const FilterMovies: FC = () => (
  <Movies.Filter>
    <Movies.FilterSpan>Filtered BY:</Movies.FilterSpan>
  </Movies.Filter>
)
