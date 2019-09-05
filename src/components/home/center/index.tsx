import * as React from 'react'
import {FC} from 'react'
import {Wrapper} from './style'
import TopHeader from './topHeader'
import MoviesPanel from '../../generic/movies/movies'
import {Movie} from '../slider/sliderModal'

 const Center:FC<{loading:boolean, movies:Movie[], id:number}> = ({loading, movies, id}) => {
 
    return (
      <Wrapper>
        <TopHeader id={id}/>
        <MoviesPanel
          loading={loading}
          movies={movies}
          loader={false}
        />
      </Wrapper>
    )
  }


  export default Center