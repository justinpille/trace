import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div className="App">
        <svg>
          <line
            x1="0"
            y1="200"
            x2="1000"
            y2="200"
            strokeWidth="0.25"
            stroke="black"
          />
          <line
            x1="0"
            y1="200"
            x2="400"
            y2="200"
            strokeWidth="1"
            stroke="black"
          />
        </svg>
      </div>
    );
  }
}

export default App;
