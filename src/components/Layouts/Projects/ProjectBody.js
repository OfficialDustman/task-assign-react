import { Card } from 'react-bootstrap';
import DateFilter from '../../Ui/DateFilter';
import TaskList from '../Tasks/TaskList';
import { useState } from 'react';

const ProjectBody = ({  tasks }) => {

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
      marginTop: '20px',
      marginBottom: '6rem',
      gap: '1rem',
    }}>
      <Card.Title>Today Task</Card.Title>
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