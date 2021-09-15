import * as React from 'react'
import {FC} from 'react'
import * as Sidebar from './style'
import {Icon} from 'react-icons-kit'
import {SidebarItem, SidebarItemGroup} from './SidebarItem'
import {menu, list, info, zap} from 'react-icons-kit/feather/'
import {home} from 'react-icons-kit/entypo/home'

interface Props {
  isSidebarOpen: boolean
  toggleSidebar(): void
  toggleCategories(): void
  handleCategories(state: string): void
  categoryState: 'opened' | 'closed' | 'none'
}

export const SideBar: FC<Props> = ({
  categoryState,
  isSidebarOpen,
  toggleSidebar,
  handleCategories,
  toggleCategories,
}) => (
  <Sidebar.Sidebar pose={isSidebarOpen ? 'open' : 'closed'}>
    <Sidebar.SidebarTop>
      <Sidebar.SidebarIcon onClick={toggleSidebar}>
        <Icon size={25} icon={menu} />
      </Sidebar.SidebarIcon>
      <Sidebar.SidebarTitle>filmy</Sidebar.SidebarTitle>
    </Sidebar.SidebarTop>
    <Sidebar.SidebarCenter>
      <SidebarItem icon={home} exact={true} to="/" size={20} label="Home" />
      <SidebarItem
        icon={zap}
        exact={false}
        to="/latest-movies"
        size={20}
        label="Latest movies"
      />
      <SidebarItemGroup
        handleCategories={handleCategories}
        toggleCategories={toggleCategories}
        categoryState={categoryState}
        icon={list}
        size={20}
        label="Categories"
      />
      <SidebarItem
        exact={false}
        to="/about"
        icon={info}
        size={20}
        label="Info"
      />
    </Sidebar.SidebarCenter>
  </Sidebar.Sidebar>
)
