import { Card } from 'react-bootstrap';
import TaskFilter from '../../Ui/TaskFilter';
import TaskList from './TaskList';

const TaskBody = ({ date, tasks }) => {

  const [filteredTasks, setFilteredTasks] = useState([...tasks]);

  const handleFilterChange = (newFilter) => {
    let newFilteredTasks;

    switch (newFilter) {
      case 'all':
        newFilteredTasks = [...tasks];
        break;
      case 'ongoing':
        newFilteredTasks = tasks.filter(task => task.status === 'ongoing');
        break;
      case 'completed':
        newFilteredTasks = tasks.filter(task => task.status === 'completed');
        break;
      default:
        newFilteredTasks = [...tasks];
    }

    setFilteredTasks(newFilteredTasks);
  };

  return (
    <Card>
        <Card.Title>{date} Task</Card.Title>
        <TaskFilter onFilterChange={handleFilterChange} />
        <TaskList tasks={filteredTasks} />
    </Card>
  );
};

export default TaskBody;