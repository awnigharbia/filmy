import * as React from 'react'
import {FC} from 'react'
import * as Nav from './style'
import {Icon} from 'react-icons-kit'
import {menu, search} from 'react-icons-kit/feather/'
import {Search} from './Search'

export const TopNav: FC<{onClick(): void}> = ({onClick}) => (
  <Nav.Nav>
    <Nav.NavLeft onClick={onClick}>
      <Icon size={25} icon={menu} />
    </Nav.NavLeft>
    <Nav.NavRight>
      <Search />
    </Nav.NavRight>
    <Nav.logo />
  </Nav.Nav>
)
