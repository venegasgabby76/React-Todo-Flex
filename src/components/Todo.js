import React from 'react';

const Todos = props => {
    return (
      <div
        // className={`item${props.todo.purchased ? " purchased" : ""}`}
        // onClick={() => props.toggleItem(props.todo.id)}
      >
        <p>{props.tasks.name}</p>
      </div>
    );
  };
  
  export default Todos;