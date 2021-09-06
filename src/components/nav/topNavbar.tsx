import * as React from 'react'
import {FC} from 'react'
import * as Nav from './style'
import {Icon} from 'react-icons-kit'
import {menu, search} from 'react-icons-kit/feather/'
import {Search} from './Search'

export const TopNav: FC<{onClick(): void; openModal(imdb: string): void}> = ({
  onClick,
  openModal,
}) => (
  <Nav.Nav>
    <Nav.NavLeft onClick={onClick}>
      <Icon size={25} icon={menu} />
    </Nav.NavLeft>
    <Nav.NavRight>
      <Search openModal={openModal} />
    </Nav.NavRight>
    <Nav.logo />
  </Nav.Nav>
)
