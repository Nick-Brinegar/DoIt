import React, { useState, useEffect } from 'react';
import { getTasks } from '../api/tasks/getTasks';
import TaskItem from './TaskItem';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const taskList = await getTasks();
                setTasks(taskList);  // Set the tasks in state
            } catch (error) {
                setError('Failed to fetch tasks.');
            }
        };

        fetchTasks();
    }, []); 
    return (
        <div>
            {tasks.map(task => (
                <TaskItem key={task._id} task={task} />
            ))}
        </div>
    );
};

export default TaskList;
