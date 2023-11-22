import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const DateFilter = ({ onDateChange }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const generatePastWeekDates = () => {
        const dates = [];
        const today = new Date();

        // Add today and yesterday
        dates.push(today);
        dates.push(new Date(today.setDate(today.getDate() - 1)));

        // Add the remaining dates of the past week
        for (let i = 2; i < 7; i++) {
            dates.push(new Date(today.setDate(today.getDate() - i)));
        }
        
        return dates;
    };

    const handleDateChange = (event) => {
        const selectedDate = new Date(event.target.value);
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
