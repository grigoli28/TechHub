import React from "react";
import Address from "./Address";
import Company from "./Company";

const User = props => (
  <li key={props.user.id}>
    <div>Name : {props.user.name}</div>
    <div>Username: {props.user.username}</div>
    <div>Email: {props.user.email}</div>
    <div>Phone: {props.user.phone}</div>
    <Address address={props.user.address} />
    <Company company={props.user.company} />
  </li>
);

export default User;
