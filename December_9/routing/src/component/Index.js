import React from "react";

export const Index = ({ title, desc }) => (
  <div className="index">
    <h1 className="index--title">{title}</h1>
    <hr />
    <p>{desc}</p>
  </div>
);
