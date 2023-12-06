import { useState } from 'react';
import { Form } from 'react-bootstrap';

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
      <input
        type="text"
        placeholder="Search..."
        value={filter}
        onChange={handleFilterChange}
      />
      <Form.Control
        as="select"
        multiple
        value={selectedValues}
        required
        onChange={handleSelectChange}
      >
        {filteredOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Form.Control>
    </div>
  );
};

export default SearchableMultiSelect;
