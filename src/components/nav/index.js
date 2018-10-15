import React, { Component } from "react";

// components
import TopNav from "./topNav";
import Sidebar from "./sideBar";

export default class Navbar extends Component {
  state = {
    isSidebarOpen: false
  };

  toggleSidebar = () =>
    this.setState(state => ({ isSidebarOpen: !state.isSidebarOpen }));

  render() {
    const { isSidebarOpen } = this.state;

    return (
      <>
        <TopNav onClick={this.toggleSidebar} />
        <Sidebar onClick={this.toggleSidebar} isSidebarOpen={isSidebarOpen} />
      </>
    );
  }
}
