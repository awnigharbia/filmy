import React from "react";
import { Sidebar } from "./style";
import { Icon } from "react-icons-kit";
import { SidebarItem, SidebarItemGroup } from "./sidebarItem";

// icons
import { menu, list, info, zap } from "react-icons-kit/feather/";
import { home } from "react-icons-kit/entypo/home";

export default props => (
  <Sidebar pose={props.isSidebarOpen ? "open" : "closed"}>
    <Sidebar.top>
      <Sidebar.top.icon onClick={props.toggleSidebar}>
        <Icon size={25} icon={menu} />
      </Sidebar.top.icon>
      <Sidebar.top.title>filmy</Sidebar.top.title>
    </Sidebar.top>
    <Sidebar.center>
      <SidebarItem icon={home} exact={true} to="/" size={20} label="Home" />
      <SidebarItem
        icon={zap}
        to="/latest-movies"
        size={20}
        label="Latest movies"
      />
      <SidebarItemGroup
        {...props}
        icon={list}
        size={20}
        label="Categories"
      />
      <SidebarItem to="/about" icon={info} size={20} label="Info" />
    </Sidebar.center>
  </Sidebar>
);
