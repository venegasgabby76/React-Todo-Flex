import React from 'react';


class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: ''
        };
    }

    handleChanges = e => {
        this.setState({
            tasks: e.target.value
        })
    };

    addItem = e => {
        e.preventDefault();
        this.props.addTask(this.state.tasks)
        this.setState({
            tasks: ''
        })
    }

    render() {
        return (
            <form onSubmit = {this.addItem}>
                <input 
                type= "text"
                name="task"
                placeholder="What needs to get done?"
                value={this.state.tasks}
                onChange={this.handleChanges}
                />
                <br />
                <button>Add Your Task!</button>
            </form>
        )
    }
}


export default TodoForm;
