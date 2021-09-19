import * as React from 'react'
import {FC} from 'react'

import {TopNav} from './TopNavbar'
import {SideBar} from './SideBar'
import {useSetState} from 'src/components/hooks/useSetState'

export const Navbar: FC = () => {
  const [state, setState] = useSetState({
    isSidebarOpen: false,
    categoryState: 'none',
  })

  const toggleSidebar = () =>
    setState({
      isSidebarOpen: !state.isSidebarOpen,
      categoryState: !state.isSidebarOpen && 'none',
    })

  const handleCategories = (state: string) => setState({categoryState: state})

  const toggleCategories = () =>
    setState({
      categoryState:
        state.categoryState === 'closed' || state.categoryState === 'none'
          ? 'opened'
          : 'closed',
    })

  return (
    <>
      <TopNav onClick={toggleSidebar} />
      <SideBar
        toggleCategories={toggleCategories}
        handleCategories={handleCategories}
        toggleSidebar={toggleSidebar}
        {...state}
      />
    </>
  )
}
