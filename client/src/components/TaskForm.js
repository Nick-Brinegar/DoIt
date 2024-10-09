import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';
import React, { useState } from 'react';

const TaskForm = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <div>
            <Button color="red" onClick={toggle}>
                    New Task
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader>
                    New Task
                </ModalHeader>
                <ModalBody>
                    
                </ModalBody>
                <ModalFooter>
                    <Button color="blue" onClick={toggle}>
                        Create Task
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default TaskForm;