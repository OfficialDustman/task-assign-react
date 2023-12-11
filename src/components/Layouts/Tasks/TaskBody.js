import { Card } from 'react-bootstrap';
import TaskFilter from '../../Ui/TaskFilter';
import TaskList from './TaskList';
import { useState } from 'react';
import TaskModal from './TaskModal';

const TaskBody = ({ date, tasks }) => {

  const [filteredTasks, setFilteredTasks] = useState([...tasks]);
  const [taskClicked, setTaskClicked] = useState(false);
  const [taskData, setTaskData] = useState(null);

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

  const handleTaskClick = (state, task) => {
    setTaskClicked(state);
    setTaskData(task)
  }

  const handleCloseModal = () => {
    setTaskClicked(false);
  };

  console.log(filteredTasks);

  return (
    <Card style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        padding: '20px', 
        marginTop: '20px',
        marginBottom: '6rem',
        gap: '1rem',
      }}>
        <Card.Title>{date} Task</Card.Title>
        <TaskFilter onFilterChange={handleFilterChange} />
        {filteredTasks.length > 0 ? 
            <TaskList 
              tasks={filteredTasks}
              taskclicked={handleTaskClick}
            />
              :
            <p>No Task Yet</p>
        }
        <TaskModal 
          task={taskClicked ? 
                taskData : 
                filteredTasks[0]} 
          show={taskClicked}
          handleClose={handleCloseModal}
        />
    </Card>
  );
};

export default TaskBody;