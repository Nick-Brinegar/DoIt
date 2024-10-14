import React, { useState } from 'react';
import { Input } from 'reactstrap';
import './TaskItem.css';
import putTask from '../api/tasks/putTask';
import { deleteTask } from '../api/tasks/deleteTask';

const TaskItem = ({ task, updateTask }) => {
  const [isCompleted, setIsCompleted] = useState(task.completed);
  const [error, setError] = useState(null);

  const handleCheckboxChange = async () => {
    const previousStatus = isCompleted;
    const updatedCompleteStatus = !isCompleted;
    setIsCompleted(updatedCompleteStatus);
    try{
      const updatedTask = await putTask(task.id);
      setIsCompleted(updatedTask.completed);
      updateTask(updatedTask);
    } catch (error) {
      setError('Failed to update task.');
      setIsCompleted(previousStatus);
    }
  };

  return (
    <div className='task-item'>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Input
        type="checkbox"
        onChange={handleCheckboxChange}
        checked={task.completed}
      />
      <span>{task.name}</span>
    </div>
  );
};

export default TaskItem;
