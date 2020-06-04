import React from "react";

class TodoForm extends React.Component {
    // Constructor with state
    constructor() {
        super();
        this.state = {
            task: "",
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    };

    // class property to submit form
      submitTask = e => {
        e.preventDefault();
        this.setState({
             task: '' 
            });
        this.props.addTask ( e, this.state.task);
      };

    render() {
        console.log('You are adding your task!')
        return (
            <form onSubmit={this.submitTask}>
                <input
                    type="text"
                    name="task"
                    value={this.state.task}
                    onChange={this.handleChange} 
                    />
                <button>Add to list</button>
            </form>
        );
    }
}

export default TodoForm;
