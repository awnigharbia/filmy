import * as React from 'react'
import {FC} from 'react'
import * as Nav from './style'
import {Icon} from 'react-icons-kit'
import {menu} from 'react-icons-kit/feather/'
import {Search} from './Search'
import {ThemeToggler} from './ThemeToggler'

export const TopNav: FC<{onClick(): void}> = ({onClick}) => {
  return (
    <Nav.Nav>
      <Nav.NavLeft onClick={onClick}>
        <Icon size={25} icon={menu} style={{color: 'var(--colors-icon)'}} />
      </Nav.NavLeft>
      <Nav.NavRight>
        <Search />
      </Nav.NavRight>
      <ThemeToggler />
    </Nav.Nav>
  )
}
