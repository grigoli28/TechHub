import React from "react";

const Address = props => {
  return (
    <div>
      Address:{" "}
      <span>
        {props.address.street} street, {props.address.suite},{" "}
        {props.address.city}, Zip ({props.address.zipcode})
      </span>
    </div>
  );
};

export default Address;
