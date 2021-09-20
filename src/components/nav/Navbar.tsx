import * as React from 'react'
import {FC} from 'react'

import {TopNav} from './TopNavbar'
import {SideBar} from './SideBar'
import {isStyledComponent} from 'styled-components'

export const Navbar: FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)

  const [categoryState, setCategoryState] = React.useState<
    'none' | 'opened' | 'closed'
  >('none')

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
    if (!isStyledComponent) setCategoryState('none')
  }

  const handleCategories = (state: 'none' | 'opened' | 'closed') =>
    setCategoryState(state)

  const toggleCategories = () =>
    setCategoryState(
      categoryState === 'closed' || categoryState === 'none'
        ? 'opened'
        : 'closed',
    )

  return (
    <>
      <TopNav onClick={toggleSidebar} />
      <SideBar
        toggleCategories={toggleCategories}
        handleCategories={handleCategories}
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
        categoryState={categoryState}
      />
    </>
  )
}
