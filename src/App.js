import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'



const todo = [
  {
    name: 'Make Bed/Coffee',
    id: Date.now(),
    purchased: false
  },
  {
    name: 'Walk dog/Workout',
    id: Date.now(),
    purchased: false
  },
  {
    name: 'Do Laundry***',
    id: Date.now(),
    purchased: false
  },
  {
    name: 'Grocery Shopping/Target',
    id: Date.now(),
    purchased: false
  }

];

class App extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      todo
    }
  }


  // Class methods to update state

  
  addTask = (e, task) => {
    e.preventDefault();
    const newTask = {
      name: task,
      id: Date.now(),
      purchased: false
    };
    this.setState({
      todo: [...this.state.todo, newTask]
    })
  }

  

  render() {
    return (
      <div className="App">
        <div className="todo">
          <h1>Gabbys Todo List</h1>
          <TodoForm addTask={this.addTask}/>
        </div>
        <TodoList 
        todo={this.state.todo} />
      </div>
    );
  }
}

export default App;
