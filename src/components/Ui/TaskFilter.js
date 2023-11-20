import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

const TaskFilter = ({ onFilterChange }) => {
  const [value, setValue] = useState('all'); 

  const handleChange = (val) => {
    setValue(val);
    onFilterChange(val);
  };

  return (
    <ToggleButtonGroup
      type="radio"
      name="taskFilter"
      value={value}
      onChange={handleChange}
    >
      <ToggleButton value="all">All Tasks</ToggleButton>
      <ToggleButton value="ongoing">In Progress</ToggleButton>
      <ToggleButton value="completed">Completed</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default TaskFilter;
