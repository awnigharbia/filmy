import React, { Component } from "react";
import { Sidebar } from "./style";
import { SidebarLink } from "./sidebarLink";
import { Icon } from "react-icons-kit";

export class SidebarItemGroup extends Component {
  state = {
    catState: "none"
  };

  handleCategories = state => this.setState({ catState: state });

  toggleCategories = () =>
    this.setState(prevState => ({
      catState:
        prevState.catState === "closed" || prevState.catState === "none"
          ? "opened"
          : "closed"
    }));

  render() {
    const { catState } = this.state;

    return (
      <>
        <SidebarItem onClick={this.toggleCategories} {...this.props} />

        <Sidebar.nestedGroupWrapper
          pose={catState === "opened" ? "opened" : "closed"}
          onPoseComplete={() =>
            catState === "closed" ? this.handleCategories("none") : null
          }
        >
          {catState !== "none" && (
            <>
              <Sidebar.groupItem size={20}>Action</Sidebar.groupItem>
              <Sidebar.groupItem size={20}>Harror</Sidebar.groupItem>
              <Sidebar.groupItem size={20}>Harror</Sidebar.groupItem>
              <Sidebar.groupItem size={20}>Harror</Sidebar.groupItem>
            </>
          )}
        </Sidebar.nestedGroupWrapper>
      </>
    );
  }
}

export const SidebarItem = ({
  icon,
  size,
  label,
  children,
  onClick,
  exact,
  to = ""
}) => (
  <SidebarLink to={to} activeOnlyWhenExact={exact}>
    <Sidebar.item onClick={onClick}>
      {icon && <Icon icon={icon} size={size} />}
      <Sidebar.item.span>{label}</Sidebar.item.span>
    </Sidebar.item>
    {children}
  </SidebarLink>
);
