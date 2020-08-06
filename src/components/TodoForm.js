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
        this.setState({
            item: ''
        })
    }

    render() {
        return (
            <form onSubmit = {this.addItem}>
                <input 
                type= "text"
                name="item"
                placeholder="What needs to get done?"
                value={this.state.item}
                onChange={this.handleChanges}
                />
                <br />
                <button>Add Your Task!</button>
            </form>
        )
    }
}


export default TodoForm;
