import * as React from 'react'
import {FC} from 'react'

// components
import TopNav from './TopNavbar'
import Sidebar from './Sidebar'
import {useSetState} from '../hooks/useSetState'

const Navbar: FC<{openModal(imdb: string): void}> = ({openModal}) => {
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
      <TopNav onClick={toggleSidebar} openModal={openModal} />
      <Sidebar
        toggleCategories={toggleCategories}
        handleCategories={handleCategories}
        toggleSidebar={toggleSidebar}
        {...state}
      />
    </>
  )
}

export default Navbar
