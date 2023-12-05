import { useState, useRef, useEffect } from 'react';
import { Form } from 'react-bootstrap';

const SearchableMultiSelect = ({ options, selectedValues, onChange }) => {
  const [filter, setFilter] = useState('');
  const selectRef = useRef(null);

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

  useEffect(() => {
    // Automatically enable multiple selection when the select element is focused
    const handleFocus = () => {
      selectRef.current.setAttribute('multiple', 'multiple');
      console.log('focus');
    };

    // Attach the event listener
    selectRef.current.addEventListener('focus', handleFocus);

    // Cleanup the event listener on component unmount
    // return () => {
    //   selectRef.current.removeEventListener('focus', handleFocus);
    // };
  }, []);

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
        onChange={handleSelectChange}
        ref={selectRef}
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
