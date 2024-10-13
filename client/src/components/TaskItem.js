import React, { useState } from 'react';
import { Input } from 'reactstrap';
import './TaskItem.css';

const TaskItem = ({ task }) => {
  const [isCompleted, setIsCompleted] = useState(task.completed);
  const handleCheckboxChange = () => {
    setIsCompleted(!isCompleted);
    console.log(isCompleted);
  };

  return (
    <div className='task-item'>
      <Input
        type="checkbox"
        onClick={handleCheckboxChange}
        checked={task.completed}
      />
      <span>{task.name}</span>
    </div>
  );
};

export default TaskItem;
