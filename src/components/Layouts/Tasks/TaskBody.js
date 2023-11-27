import { Card } from 'react-bootstrap';
import TaskFilter from '../../Ui/TaskFilter';
import TaskList from './TaskList';
import { useState } from 'react';

const TaskBody = ({ date, tasks }) => {

  const [filteredTasks, setFilteredTasks] = useState([...tasks]);

  const handleFilterChange = (newFilter) => {
    let newFilteredTasks;

    switch (newFilter) {
      case 'all':
        newFilteredTasks = [...tasks];
        break;
      case 'ongoing':
        newFilteredTasks = tasks?.filter(task => task.status === 'ongoing');
        break;
      case 'completed':
        newFilteredTasks = tasks?.filter(task => task.status === 'completed');
        break;
      default:
        newFilteredTasks = [...tasks];
    }

    setFilteredTasks(newFilteredTasks);
  };

  console.log(filteredTasks);

  return (
    <Card style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        padding: '20px', 
        marginTop: '20px',
        gap: '1rem',
      }}>
        <Card.Title>{date} Task</Card.Title>
        <TaskFilter onFilterChange={handleFilterChange} />
        {filteredTasks.length > 0 ? 
            <TaskList tasks={filteredTasks} />
              :
            <p>No Task Yet</p>
        }
    </Card>
  );
};

export default TaskBody;