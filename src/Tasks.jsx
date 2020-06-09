import React from 'react';

const Tasks = ({ filter, tasks, handleToggleDone }) => (
 <ul>
   {tasks.filter((task) => (
          filter === 'SHOW_ALL'
          || (filter === 'SHOW_TODO' && !task.done)
          || (filter === 'SHOW_DONE' && task.done)
          )).map((task) => (
     <li>{task.title}<input type="checkbox" checked={task.done} onChange={e => {
      handleToggleDone(task.id);
     }}/></li>
   ))}
 </ul>
);

export default Tasks;