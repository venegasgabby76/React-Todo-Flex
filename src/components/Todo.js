import React from 'react';

const Task = props => {
  return (
    <div className={`task${props.task.purchased ? ' purchased' : ''}`}>
      <p>{props.task.name}</p>
    </div>
  );
};

export default Task;