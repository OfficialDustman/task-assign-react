import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const DateFilter = ({ onDateChange }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const generatePastWeekDates = () => {
        const dates = [];
        let today = new Date();

        // Add today and yesterday
        dates.push(new Date(today));
        today.setDate(today.getDate() - 1); 
        dates.push(new Date(today));

        // Add the remaining dates of the past week
        for (let i = 2; i < 7; i++) {
            today = new Date(); // Reset to the original date
            today.setDate(today.getDate() - i);
            dates.push(new Date(today));;
        }
        
        return dates;
    };

    const handleDateChange = (event) => {
        const selectedDate =event.target.value;
        setSelectedDate(selectedDate);
        onDateChange(selectedDate);
    };

    return (
        <Form.Group controlId="dateFilter">
            <Form.Label>Select Date:</Form.Label>
            <Form.Control as="select" value={selectedDate.toISOString()} onChange={handleDateChange}>
                {generatePastWeekDates().map((date, index) => (
                    <option key={index} value={date.toISOString()}>
                        {date.toDateString()}
                    </option>
                ))}
            </Form.Control>
        </Form.Group>
    );
};

export default DateFilter;
