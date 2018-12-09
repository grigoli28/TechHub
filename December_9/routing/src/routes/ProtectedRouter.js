import React from "react";
import { Redirect, Route } from "react-router-dom";

export default ({ component: Component, ...restProps }) => (
  <Route
    {...restProps}
    render={props =>
      localStorage.getItem("authorized") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);
