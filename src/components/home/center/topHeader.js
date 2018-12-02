import React from 'react'
import {Wrapper} from './style'
// icon
import {Icon} from 'react-icons-kit'
import {chevronRight} from 'react-icons-kit/feather'

export default ({id}) => {
  return (
    <Wrapper.top>
      <Wrapper.h1>{id}</Wrapper.h1>
      <Wrapper.top.center>Latest Movies</Wrapper.top.center>
      <Wrapper.top.btn to="/latest-movies">
        DISCOVER
        <Icon size={20} icon={chevronRight} />
      </Wrapper.top.btn>
    </Wrapper.top>
  )
}
