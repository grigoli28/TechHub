import React from "react";
import ResultItem from "./ResultItem";

const ResultList = props => (
  <div className="results">
    {props.data.map((post, index) => (
      <ResultItem key={index} data={post} />
    ))}
  </div>
);

export default ResultList;
