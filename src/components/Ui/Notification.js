import { Toast, ToastContainer } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    return date.toLocaleDateString('en-US', options);
};

function NewTasks({ tasks, showTask, closeTask }) {
    return (
        <ToastContainer className="position-static">
            {tasks.length > 0 && tasks.map((task) => (
                <Toast show={showTask} onClose={closeTask}>
                    <Toast.Header>
                        <FontAwesomeIcon icon="fa-solid fa-bell" />
                        <strong className="me-auto">{task.task_name}</strong>
                        <small className="text-muted">{formatDate(task.end_date)}</small>
                    </Toast.Header>
                    <Toast.Body>{task.task_description}</Toast.Body>
                </Toast>
            ))}

        </ToastContainer>
    );
}

export default NewTasks;