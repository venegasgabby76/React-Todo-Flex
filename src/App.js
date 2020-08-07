import React from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList"
import "./components/Todo.css";

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


  //this is so that we are able to add new tasks to my todo list.
  addTask = (task) => {
    const newTask = {
      name: task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newTask]
    })
  }


  //toggle for when we are done with the task at hand.
  //this code is saying that we want to toggle the completed items. 
  //we want to map through the todos and find the items that have been toggled.
  //if they have not been toggled leave them untouched.
  toggleTodo = (toggleId) => {
    console.log(toggleId);

    this.setState({
      todo: this.state.todo.map((task) => {
        if (toggleId === task.id) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    });
  };


  //now we want to clear the items that have been completed
  // we will use filter to do this. 
  // when we click clear we want it to filter through the items in the todo list and clear those items
  // if they have not been toggled we dont want anything to happen to them

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todo: this.state.todo.filter(task => !task.completed)
    });
  };




  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} />

        <TodoList
          todo={this.state.todo}
          toggleTodo={this.toggleTodo}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
