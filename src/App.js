import React from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList"

//i am going to hanve a couple of mock todos that i need to get done instead of just starting totally blank

const todo = [
  {
    name: 'Clean room',
    id: 0,
    completed: false
  },
  {
    name: 'Walk the dog',
    id: 1,
    completed: false
  },
  {
    name: 'Review previous lecture',
    id: 2,
    completed: false
  },
  {
    name: 'Start homework',
    id: 3,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

constructor() {
  super();
  this.state = {
    todo
  };
}

  addTask = (tasks) => {
    const newTask = {
      name: tasks,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newTask]
    })
  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask}/>
        
        <TodoList todo={this.state.todo}/>
      </div>
    );
  }
}

export default App;
