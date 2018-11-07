import React from "react";

const ResultItem = ({ data }) => (
  <div className="result">
    <h1>{data.title}</h1>
    <h2>{new Date(data.created_at).toDateString()}</h2>
    <p>
      <a href={data.url}>Link To</a>
    </p>
    <h4>{data.author}</h4>
    <h5>{data.points}</h5>
  </div>
);

export default ResultItem;
