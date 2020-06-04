import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'
// import ReactDOM from 'react-dom';



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
    name: 'Do Laundry',
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

  // Class methods to update state

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Gabbys Todo List</h1>
          <TodoForm />
        </div>
        <TodoList todo={todo} />
      </div>
    );
  }
}

export default App;
