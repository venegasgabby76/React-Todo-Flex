import React from 'react';

const Tasks = props => {
    return (
        <div
            className={`item${props.item.completed ? ' completed' : ''}`}
            onClick={() => props.toggleTask(props.item.id)}
        >
            <p>{props.item.name}</p>
        </div>
    );
};

export default Tasks;