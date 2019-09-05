import * as React from 'react'
import {FC} from 'react'
import * as Movies from './style'

const FilterMovies:FC = () => (
  <Movies.filter>
    <Movies.filterSpan>Filtered BY:</Movies.filterSpan>
  </Movies.filter>
)

export default FilterMovies