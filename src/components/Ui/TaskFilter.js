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
      {valuesFilter.map(({value, text}) => {
        let Toggle = 
        <ToggleButton 
          value={value} 
          className={'rounded-pill'} 
          style={{backgroundColor: '#613BE7'}}
        >
          {text}
        </ToggleButton>;
        {console.log(Toggle)}

      })}
    </ToggleButtonGroup>
  );
};

export default TaskFilter;
