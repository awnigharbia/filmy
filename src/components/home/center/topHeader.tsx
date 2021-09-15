import * as React from 'react'
import {FC} from 'react'
import * as Wrapper from './style'
import {Icon} from 'react-icons-kit'
import {chevronRight} from 'react-icons-kit/feather'

export const TopHeader: FC = () => {
  return (
    <Wrapper.Top>
      <Wrapper.H1></Wrapper.H1>
      <Wrapper.TopCenter>Latest Movies</Wrapper.TopCenter>
      <Wrapper.DiscoverBtn to="/latest-movies">
        DISCOVER
        <Icon size={20} icon={chevronRight} />
      </Wrapper.DiscoverBtn>
    </Wrapper.Top>
  )
}
