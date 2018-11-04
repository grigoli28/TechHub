import React from "react";
import User from "./User";

const Users = props => (
  <ol>
    {props.children && props.children.map(user => (
      <User key={user.id} user={user} />
    ))}
  </ol>
);

export default Users;
