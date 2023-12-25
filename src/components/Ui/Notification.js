import { Toast, ToastContainer } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AuthContext from '../../store/auth-context';
import { useState, useContext } from 'react';
import TaskModal from '../Layouts/Tasks/TaskModal';

function NewTasks({ tasks, showTask, closeTask, refreshTask }) {

    const [taskClicked, setTaskClicked] = useState(false);
    const [taskData, setTaskData] = useState(null);
    const { changeNewTaskData } = useContext(AuthContext)

    console.log(tasks);

    const formatDate = (inputDate) => {
        const date = new Date(inputDate);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };

        return date.toLocaleDateString('en-US', options);
    };

    const filterTask = (allTasks, selectTask) => {
        const filteredTasks = allTasks.filter(task => task.task_id !== selectTask.task_id);
        changeNewTaskData(filteredTasks);
    }
      

    const handleTaskClick = (task) => {
        filterTask(tasks, task)
        setTaskData(task)
        setTaskClicked(true);
    }

    const handleCloseModal = () => {
        setTaskClicked(false);
    };

    return (
        <ToastContainer className="position-static">
            {tasks.length > 0 && tasks.map((task) => (
                <Toast
                    show={showTask}
                    onClose={closeTask}
                    onClick={ () =>  handleTaskClick(task)}
                >
                    <Toast.Header>
                        <FontAwesomeIcon icon="fa-solid fa-bell" />
                        <strong className="me-auto">{task.task_name}</strong>
                        <small className="text-muted">{formatDate(task.end_date)}</small>
                    </Toast.Header>
                    <Toast.Body>{task.task_description}</Toast.Body>
                </Toast>
            ))}
            <TaskModal
                task={taskClicked ?
                    taskData :
                    tasks[0]}
                show={taskClicked}
                handleClose={handleCloseModal}
                taskRefreshHandler={refreshTask}
            />
        </ToastContainer>
    );
}

export default NewTasks;