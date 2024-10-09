import React from 'react';

const TaskItem = ({ task, updateTaskStatus }) => {
  const handleStatusChange = (e) => {
    updateTaskStatus(task.id, e.target.value);
  };

  return (
    <div className="TaskItem">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Due Date: {task.dueDate}</p>
      <label>
        Update Status:
        <select value={task.status} onChange={handleStatusChange}>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </label>
    </div>
  );
};

export default TaskItem;
