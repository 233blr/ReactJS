import React, { Component } from 'react';
import Header from './Header';
import Task from './Task';
import './App.css';

class App extends Component {
  state = {
    title: 'Caption',
    text: 'Jingle bells, jingle bells, Jingle all the way Oh, what fun it is to ride In a one horse open sleigh',
  };

  // Add new text to stage
  newTextChangeHandler = (value) => {
    this.setState({ ...value });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className='main'>
          <Task
            task={this.state}
            newTextChangeHandler={this.newTextChangeHandler}
          />
        </div>
      </div>
    )
  }
  }

export default App 