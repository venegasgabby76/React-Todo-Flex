import React from 'react';
import TodoForm from "./components/TodoForm";


//i am going to hanve a couple of mock todos that i need to get done instead of just starting totally blank

const todo = [
  {
    task: 'Clean room',
    id: 0,
    completed: false
  },
  {
    task: 'Walk the dog',
    id: 1,
    completed: false
  },
  {
    task: 'Review previous lecture',
    id: 2,
    completed: false
  },
  {
    task: 'Start homework',
    id: 3,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
      </div>
    );
  }
}

export default App;
