import React from "react";

function List({ todos, onToggle, onRemove }) {
  return (
    <div className="list-custom list-group">
      {todos.map(todo => (
        <div
          className="todo list-group-item justify-content-between"
          key={todo.id}
        >
          <label>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => onToggle(todo.id)}
            />
            {todo.name}
          </label>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => onRemove(todo.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default List;
