import { Card } from 'react-bootstrap';
import DateFilter from '../../Ui/DateFilter';
import UIButton from '../../Ui/Button';
import TaskList from '../Tasks/TaskList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { useState } from 'react';
import TaskModal from '../Tasks/TaskModal';

const ProjectBody = ({ tasks, projects, onTaskRefresh }) => {
  const [taskClicked, setTaskClicked] = useState(false);
  const [taskData, setTaskData] = useState(null);

  const handleDateChange = (newDate) => {
    // Filter tasks based on the selected date and update the state
    const newFilteredTasks = tasks?.filter(task => {
      const taskDate = new Date(task.start_date); // Assuming each task has a 'date' property
      return taskDate.toDateString() === newDate.toDateString();
    });
    // setFilteredTasks(newFilteredTasks);
    // setDateFilteredTasks(newFilteredTasks);
    // onFilteredTasksChange(newFilteredTasks)
    // onDateChange(newDate)
  };

  const handleTaskClick = (state, task) => {
    setTaskClicked(state);
    setTaskData(task)
  }

  const handleCloseModal = () => {
    setTaskClicked(false);
  };

  return (
    <Card style={{
      display: 'flex',
      flexDirection: 'column',
      padding: '20px',
      marginBottom: '6rem',
      gap: '1rem',
      width: '100%'
    }}>
      <Card.Title
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
        }}
      >
        {'Today Task '}
        <FontAwesomeIcon onClick={onTaskRefresh} icon="fa-solid fa-arrows-rotate" />

        <UIButton>
          <Link
            to='/home/create/task'
            state={{ projects: projects }}
            style={{
              color: 'white',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            Create Task
            <FontAwesomeIcon icon="fa-solid fa-plus" />
          </Link>
        </UIButton>
      </Card.Title>
      <DateFilter onDateChange={handleDateChange} />
      {tasks.length > 0 ?
        <TaskList 
          tasks={tasks} 
          taskclicked={handleTaskClick}
        />
        :
        <p>No Task Yet</p>
      }

      <TaskModal
        task={taskClicked ?
          taskData :
          tasks[0]}
        show={taskClicked}
        handleClose={handleCloseModal}
        taskRefreshHandler={onTaskRefresh}

      />
    </Card>
  );
};

export default ProjectBody;