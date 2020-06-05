import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'
import "./components/Todo.css";



const todo = [
  {
    name: 'Make Coffee',
    id: 1,
    completed: false
  },

  {
    name: 'Walk the dog/Workout',
    id: 2,
    completed: false
  },

  {
    name: 'Go to the grocery store',
    id: 3,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo
    };
  }

  addTask = (e, task) => {
    e.preventDefault();
    const newTask = {
      name: task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newTask]
    });
  };

  toggleTask = itemId => {
    console.log(itemId);
    this.setState({
      todo: this.state.todo.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todo: this.state.todo.filter(item => !item.completed)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Gabbys Todo List</h1>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList
          todo={this.state.todo}
          toggleTask={this.toggleTask}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}


export default App;



