const changeFilter = filter => ({
  type: 'CHANGE_FILTER',
  filter
});

const toggleDone = taskId => ({
  type: 'TOGGLE_DONE',
  taskId
});

const initialState = {
  filter: 'SHOW_TODO',
  tasks: [
    {id: 1, title: 'learn html', done: true},
    {id: 2, title: 'learn css', done: true},
    {id: 3, title: 'learn react', done: true},
  ],
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_FILTER' :
      return {...state, filter: action.filter};
    case 'TOGGLE_DONE' :
      return {...state, tasks: state.tasks.map((task) => {
        if (task.id === action.taskId) {
          return {...task, done: !task.done};
        }
        return task;
      })};
    default:
      return state;
  }
}

export default todoReducer;