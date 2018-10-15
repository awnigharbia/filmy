import React from "react";
import { Nav } from "./style";
import { Icon } from "react-icons-kit";
import { menu, search } from "react-icons-kit/feather/";

export default props => (
  <Nav>
    <Nav.left onClick={props.onClick}>
      <Icon size={25} icon={menu} />
    </Nav.left>
    <Nav.logo />
    <Nav.right>
      <Icon size={20} icon={search} />
    </Nav.right>
  </Nav>
);
