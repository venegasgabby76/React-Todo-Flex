import React from 'react';

const Todos = props => {
    return (
        <div
            className={`item${props.task.completed ? " completed" : ""}`}
            onClick={() => props.toggleTodo(props.task.id)}
        >
            <p>{props.task.name}</p>

        </div>
    );
};

export default Todos;

