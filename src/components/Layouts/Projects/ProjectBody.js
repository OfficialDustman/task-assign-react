import { Card } from 'react-bootstrap';
import DateFilter from '../../Ui/DateFilter';
import UIButton from '../../Ui/Button';
import TaskList from '../Tasks/TaskList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom";
import { useState } from 'react';

const ProjectBody = ({ tasks, projects }) => {

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


  return (
    <Card style={{
      display: 'flex',
      flexDirection: 'column',
      padding: '20px',
      marginBottom: '6rem',
      gap: '1rem',
      width: '100%'
    }}>
      <Card.Title>
        Today Task

        <UIButton>
          <Link 
            to='/home/create/task'
            state={{ projects: projects }}
          >
            Create Task 
            <FontAwesomeIcon icon="fa-solid fa-plus" />
          </Link>
        </UIButton>
      </Card.Title>
      <DateFilter onDateChange={handleDateChange} />
      {tasks.length > 0 ?
        <TaskList tasks={tasks} />
        :
        <p>No Task Yet</p>
      }
    </Card>
  );
};

export default ProjectBody;