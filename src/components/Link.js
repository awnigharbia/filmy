import React from "react";
import { Link } from "react-router-dom";

export default ({ children, ...props }) => (
  <Link {...props} replace={window.location.pathname === props.to}>
    {children}
  </Link>
);
