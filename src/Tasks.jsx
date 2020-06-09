import React from 'react';

const Tasks = ({ tasks, handleToggleDone }) => (
 <ul>
   {tasks.map((task) => (
     <li>{task.title}<input type="checkbox" checked={task.done} onChange={e => {
      handleToggleDone(task.id);
     }}/></li>
   ))}
 </ul>
);

export default Tasks;