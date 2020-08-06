import React from 'react';

const Tasks = props => {

    console.log(props);

    return (
        <div>
            <p>{props.task.name}</p>
        </div>
    )
}

export default Tasks;