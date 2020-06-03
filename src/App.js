import React from 'react';
import TodoList from './components/TodoList';
// import ReactDOM from 'react-dom';



const todo = [
  {
    task: 'Do Laundry',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Clean Room',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Grocery store',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Workout',
    id: Date.now(),
    completed: false
  },
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Gabbys Todo List</h2>
        <p> I AM PUTTING THIS HERE TO TEST THAT THIS IS WORKING</p>
        <TodoList />
      </div>
    );
  }
}

export default App;
