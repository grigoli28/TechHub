import React from "react";
import Form from "./components/Form";
import List from "./components/List";
import hocCRUD from "./higher-order-components/hocCRUD";

const App = ({ data, create, update, remove }) => (
  <div className="container">
    <Form onSubmit={create} />
    <List todos={data} onToggle={update} onRemove={remove} />
  </div>
);

export default hocCRUD(App, "http://localhost:9000/api/todos");
