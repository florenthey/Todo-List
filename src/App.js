import React, { Component } from 'react';
import './style/App.css'
import TodoList from './component/TodoList';


class App extends Component {


  render() {

    return (

      <div align='center' className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
