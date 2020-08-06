import React from 'react';


class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ''
        };
    }

    handleChanges = e => {
        this.setState({
            task: e.target.value
        })
    };

    addItem = e => {
        e.preventDefault();
        this.props.addTask(this.state.task)
        this.setState({
            task: ''
        })
    }

    render() {
        return (
            <form onSubmit = {this.addItem}>
                <input 
                type= "text"
                name="task"
                placeholder="What needs to get done?"
                value={this.state.task}
                onChange={this.handleChanges}
                />
                <br />
                <button>Add Your Task!</button>
            </form>
        )
    }
}


export default TodoForm;
