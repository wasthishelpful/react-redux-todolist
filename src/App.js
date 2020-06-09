import React from 'react';
import './App.css';

import Filters from './Filters';
import Tasks from './Tasks';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'SHOW_TODO',
      tasks: [
        {id: 1, title: 'learn html', done: true},
        {id: 2, title: 'learn css', done: true},
        {id: 3, title: 'learn react', done: true},
      ],
     };
  }

  handleChangeFilter = (newFilter) => {
    this.setState({filter: newFilter});
  }

  handleToggleDone = (taskId) => {
    this.setState((previousState) => ({
      tasks: previousState.tasks.map((task) => {
        if (task.id === taskId) {
          return {...task, done: !task.done};
        }
        return task;
      })
    }));
  }

  render() {
    return (
      <div className="App">
        <Filters filter={this.state.filter} handleChangeFilter={this.handleChangeFilter} />
        <Tasks tasks={this.state.tasks.filter((task) => (
          this.state.filter === 'SHOW_ALL'
          || (this.state.filter === 'SHOW_TODO' && !task.done)
          || (this.state.filter === 'SHOW_DONE' && task.done)
          ))} handleToggleDone={this.handleToggleDone} />
      </div>
    );
  }
}

export default App;
