import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ""
        };
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitTask = e => {
        e.preventDefault();
        this.setState({
            item: ""
        });
        this.props.addTask(e, this.state.item);
    };

    render() {
        return (
            <form onSubmit={this.submitTask}>
                <input
                    name="item"
                    placeholder="what needs to get done?"
                    type="text"
                    value={this.state.item}
                    onChange={this.handleChange}
                />
                <button>Add Task</button>
            </form>
        );
    }
}

export default TodoForm;
