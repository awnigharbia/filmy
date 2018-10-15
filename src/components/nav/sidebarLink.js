import React from "react";
import { Route } from "react-router-dom";
import Link from "../Link";

export const SidebarLink = ({ to, activeOnlyWhenExact, children }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match, location }) => {
      const child = React.Children.map(children, child => {
        return child !== null
          ? React.cloneElement(child, {
              active: match
            })
          : null;
      });
      return (
        <Link style={{ textDecoration: "none" }} to={to}>
          {child}
        </Link>
      );
    }}
  />
);
