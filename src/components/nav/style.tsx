import styled from 'styled-components'
import posed from 'react-pose'

import Logo from 'src/imgs/logo.svg'

export const SidebarState = posed.div({
  open: {
    x: '0%',
    delayChildren: 200,
    staggerChildren: 50,
    transition: {
      type: 'spring',
      damping: 20,
    },
  },
  closed: {
    x: '-100%',
  },
})

export const SidebarGroupState = posed.div({
  opened: {
    x: '0%',
    staggerChildren: 50,
  },
  closed: {x: '-100%'},
})

export const SidebarSubItems = posed.div({
  opened: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 20,
    opacity: 0,
  },
})

export const Nav = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: var(--colors-primary) !important;
  padding: 10px 25px;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.11), 0 -1px 1px rgba(0, 0, 0, 0.05);
  z-index: 4;
  transition: background-color 0.2s;
`

export const logo = styled.img.attrs({
  src: Logo,
})`
  width: 40px;
`

export const Sides = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: 0.3s ease;

  &:hover {
    background-color: #e2e0e0d4;
  }
`

export const NavLeft = styled(Sides)`
  position: relative;
  color: #602f75;
  z-index: 2;
`

export const Sidebar = styled(SidebarState)`
  position: fixed;
  width: 230px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  bottom: 0;
  z-index: 5;
  background: linear-gradient(to bottom, #819ddd, #2ec9d0);
  box-shadow: 3px 0 5px -5px #6f6e6e;
`

export const SidebarItem = styled.div<{active: boolean}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 9px;
  width: 100%;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 5px;
  color: ${props => (props.active ? 'rgba(0, 0, 0, 0.7)' : 'white')};
  background-color: ${props => (props.active ? 'white' : 'transparent')};
  transition: 0.2s ease;
  user-select: none;

  &:hover {
    color: #d4d0d0;
  }
`

export const SidebarGroupItem = styled(SidebarSubItems)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 5px;
  padding: 8px 10px;
  margin-left: 20px;
  color: ${props => (props.active ? 'rgba(0, 0, 0, 0.7)' : 'white')};
  background-color: ${props => (props.active ? 'white' : 'transparent')};
  transition: 0.2s ease;
  user-select: none;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`

export const SidebarSpan = styled.span`
  font-size: 15px;
  font-weight: 500;
  margin-left: 8px;
`

export const SidebarNestedItemsWrapper = styled(SidebarGroupState)``

export const SidebarTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  height: 60px;
  width: 100%;
  flex-shrink: 0;
  padding: 0px 20px;
  border-bottom: 2px solid #819ddd;
  box-sizing: border-box;
`

export const SidebarIcon = styled(Sides)`
  color: 'white';

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`
export const SidebarTitle = styled.h3`
  font-size: 20px;
  margin-left: 10px;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
`

export const SidebarCenter = styled.div`
  padding: 20px 30px 0px 20px;
  margin-top: 20px;
  overflow: auto;
`

export const NavRight = styled.div`
  flex: 0.5;
`

export const SearchInput = styled.input`
  border-radius: 2px;
  border: 2px solid transparent;
  outline: none;
  padding: 10px 10px;
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  transition: 0.2s ease-in-out;
  background-color: transparent;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);

  &:focus {
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.08);
  }
`
