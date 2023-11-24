import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { useState } from 'react';

const TaskFilter = ({ onFilterChange }) => {
  const [value, setValue] = useState('all'); 

  const handleChange = (val) => {
    setValue(val);
    onFilterChange(val);
  };

  let styles = {backgroundColor: '#613BE7'};

  return (
    <ToggleButtonGroup
      type="radio"
      name="taskFilter"
      value={value}
      onChange={handleChange}
    >
      <ToggleButton value="all" className={'rounded-pill'} style={styles}>All Tasks</ToggleButton>
      <ToggleButton value="ongoing" className={'rounded-pill'} style={styles}>In Progress</ToggleButton>
      <ToggleButton value="completed" className={'rounded-pill'} style={styles}>Completed</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default TaskFilter;
