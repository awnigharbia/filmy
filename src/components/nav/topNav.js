import React from 'react'
import {Nav} from './style'
import {Icon} from 'react-icons-kit'
import {menu, search} from 'react-icons-kit/feather/'
import Search from './search'

export default props => (
  <Nav>
    <Nav.left onClick={props.onClick}>
      <Icon size={25} icon={menu} />
    </Nav.left>
    <Nav.right>
      <Search open={props.open} />
    </Nav.right>
    <Nav.logo />
  </Nav>
)
