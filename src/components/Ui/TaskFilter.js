import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { useState } from 'react';

const TaskFilter = ({ onFilterChange }) => {
  const [value, setValue] = useState('all'); 
  const valuesFilter = [
    {
      value : 'all',
      text : 'All Tasks',
    },
    {
      value : 'ongoing',
      text : 'In Progress',
    },
    {
      value : 'completed',
      text : 'Completed',
    }

  ]
  const handleChange = (val) => {
    console.log(val, val.currentTarget.value);
    setValue(val.currentTarget.value);
    onFilterChange(val.currentTarget.value);
  };

  let styles = {
    backgroundColor: '#613BE7',
    color : '#FFFFFF'
  };

  return (
    <ToggleButtonGroup
      type="radio"
      name="taskFilter"
      value={value}
      onChange={handleChange}
    >
      {valuesFilter.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            name="radio"
            variant="light"
            value={radio.value}
            checked={value === radio.value}
            onChange={handleChange}
            style={
              value === radio.value ? 
              { backgroundColor: '#613BE7' } : 
              {}
            }
          >
            {radio.text}
          </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default TaskFilter;
