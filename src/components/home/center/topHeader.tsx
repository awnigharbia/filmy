import * as React from 'react'
import {FC} from 'react'
import * as Wrapper from './style'
import {Icon} from 'react-icons-kit'
import {chevronRight} from 'react-icons-kit/feather'

export const TopHeader: FC<{id: number}> = ({id}) => {
  return (
    <Wrapper.Top>
      <Wrapper.H1>{id}</Wrapper.H1>
      <Wrapper.TopCenter>Latest Movies</Wrapper.TopCenter>
      <Wrapper.DiscoverBtn to="/latest-movies">
        DISCOVER
        <Icon size={20} icon={chevronRight} />
      </Wrapper.DiscoverBtn>
    </Wrapper.Top>
  )
}
