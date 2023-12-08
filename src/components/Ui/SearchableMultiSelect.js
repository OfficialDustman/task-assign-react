import { useState } from 'react';
import { Form, Button, Badge, } from 'react-bootstrap';

const SearchableMultiSelect = ({ options, selectedValues, required, onChange }) => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSelectChange = (event) => {
    const selectedOption = Array.from(event.target.selectedOptions, option => option.value);
    onChange(selectedOption);
  };

  // Filter options based on the input value
  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <InputGroup>
        <InputGroup.Text>Check for Profiles</InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Search..."
          value={filter}
          onChange={handleFilterChange}
        />
      </InputGroup>
      <Form.Control
        as="select"
        multiple
        value={selectedValues}
        required
        onChange={handleSelectChange}
      >
        {filteredOptions.map((option) => (
          <option key={option} value={option}>
            <Button
              variant="light"
            >
              <Badge
                style={{
                  backgroundColor: '#613BE7 !important',
                  textTransform: 'uppercase',
                  fontSize: '1.2rem',
                }}
              >
                {username[0]}
              </Badge>
              {' '}
              {option}
            </Button>
          </option>
        ))}
      </Form.Control>
    </div>
  );
};

export default SearchableMultiSelect;
