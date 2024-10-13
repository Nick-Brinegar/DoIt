import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';  
import TaskForm from './TaskForm';  
import { getTasks } from '../api/tasks/getTasks';

const TaskManager = () => {
    const [tasks, setTasks] = useState([]);  
    const [error, setError] = useState(null);  
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const taskList = await getTasks();
                setTasks(taskList);  
            } catch (error) {
                setError('Failed to fetch tasks.');
            }
        };

        fetchTasks();
    }, []);

    const addTask = (newTask) => {
        setTasks((prevTasks) => [...prevTasks, newTask]);  
    };

    const updateTask = (updatedTask) => {
        setTasks((prevTasks) =>
            prevTasks.map(task =>
                task.id === updatedTask.id ? updatedTask : task
            )
        );
    };

    return (
        <div className="task-manager">
            <h1>Task Manager</h1>
            
            {error && <p style={{ color: 'red' }}>{error}</p>} 
            <TaskForm addTask={addTask} />
            <TaskList tasks={tasks} updateTask={updateTask}/>
        </div>
    );
};

export default TaskManager;
