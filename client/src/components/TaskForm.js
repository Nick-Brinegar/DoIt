import { Button, Modal, ModalHeader, ModalFooter, ModalBody, Input, FormGroup, Label } from 'reactstrap';
import React, { useState } from 'react';
import postTask from '../api/tasks/postTask';

const TaskForm = ({ addTask }) => {
    const [modal, setModal] = useState(false);
    const [taskName, setTaskName] = useState('');
    const [isLoading, setIsLoading] = useState(false);  
    const [error, setError] = useState(null);           

    const toggle = () => setModal(!modal);

    const handleInputChange = (e) => {
        setTaskName(e.target.value);
    };

    const handleCreateTask = async () => {
        if (taskName.trim() !== '') {
            setIsLoading(true); 
            setError(null);     

            try {
                const newTask = await postTask(taskName); 
                setTaskName('');  
                toggle();         
            } catch (error) {
                setError('Failed to create task. Please try again.');
            } finally {
                setIsLoading(false); 
            }
        }
    };

    return (
        <div>
            <Button color="primary" onClick={toggle}>
                New Task
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    New Task
                </ModalHeader>
                <ModalBody>
                    {error && <p style={{ color: 'red' }}>{error}</p>}  
                    <FormGroup>
                        <Label for="taskName">Task Name</Label>
                        <Input
                            type="text"
                            name="task"
                            id="taskName"
                            placeholder="Enter task name"
                            value={taskName}
                            onChange={handleInputChange}
                        />
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={handleCreateTask}
                        disabled={isLoading}  
                    >
                        {isLoading ? 'Creating...' : 'Create Task'}  
                    </Button>
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default TaskForm;
