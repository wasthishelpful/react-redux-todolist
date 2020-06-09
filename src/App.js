import React from 'react';
import './App.css';

import FiltersContainer from './FiltersContainer';
import TasksContainer from './TasksContainer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <FiltersContainer />
        <TasksContainer />
      </div>
    );
  }
}

export default App;
