import React from 'react';
import TaskItem from './TaskItem'; 

const TaskList = ({ tasks, updateTask }) => {
    return (
        <div>
            <ul>
                {tasks.map((task) => (
                    <TaskItem key={task._id} task={task} updateTask={updateTask}/> 
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
