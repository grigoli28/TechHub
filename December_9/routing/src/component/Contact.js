import React from "react";

export const Contact = ({ title, desc }) => (
  <div className="index">
    <h1 className="index--title">{title}</h1>
    <hr />
    <p>{desc}</p>
  </div>
);
