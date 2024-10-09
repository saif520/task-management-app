import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, updateTaskStatus }) => {
  return (
    <div className="TaskList">
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            updateTaskStatus={updateTaskStatus}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
