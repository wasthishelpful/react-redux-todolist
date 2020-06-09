import React from 'react';

const Filters = ({ filter, handleChangeFilter }) => (
 <select
   value={filter}
   onChange={e => {
     handleChangeFilter(e.target.value);
   }}
 >
   <option value="SHOW_ALL">Show all</option>
   <option value="SHOW_TODO">Show todo</option>
   <option value="SHOW_DONE">Show done</option>
 </select>
);

export default Filters;