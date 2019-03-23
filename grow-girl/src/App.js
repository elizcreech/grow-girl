import React, { Component } from 'react';
import './App.css';
import GrowAppContainer from './containers/GrowAppContainer.js'




class App extends Component {

  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     tempLowLimit: ''
  //   }

  //   this.toggleTodo = this.toggleTodo.bind(this)
  // }

  render() {
    return (
      <div className="App">
        <h1>Grow Girl</h1>
        <GrowAppContainer />
      </div>
    );
  }
}

export default App;
