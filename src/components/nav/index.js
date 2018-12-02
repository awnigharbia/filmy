import React, {Component} from 'react'

// components
import TopNav from './topNav'
import Sidebar from './sideBar'

export default class Navbar extends Component {
  state = {
    isSidebarOpen: false,
    catState: 'none',
  }

  toggleSidebar = () =>
    this.setState(state => ({
      isSidebarOpen: !state.isSidebarOpen,
      catState: !state.isSidebarOpen && 'none',
    }))

  handleCategories = state => this.setState({catState: state})

  toggleCategories = () =>
    this.setState(prevState => ({
      catState:
        prevState.catState === 'closed' || prevState.catState === 'none'
          ? 'opened'
          : 'closed',
    }))

  render() {
    return (
      <>
        <TopNav onClick={this.toggleSidebar} open={this.props.open} />
        <Sidebar {...this} {...this.state} />
      </>
    )
  }
}
