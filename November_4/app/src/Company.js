import React from "react";

const Company = props => (
  <div>
    Company:{" "}
    <span>
      {props.company.name} street, {props.company.catchPhrase}
    </span>
  </div>
);

export default Company;
