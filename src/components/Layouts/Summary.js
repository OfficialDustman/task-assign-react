import { Card, CardGroup } from "react-bootstrap"
import DateFilter from "../Ui/DateFilter"
import TaskCount from "../Ui/TaskCount"
import { useState } from 'react';


export default function Summary({ tasks, onFilteredTasksChange, onDateChange }) {
    const [datefilteredTasks, setDateFilteredTasks] = useState([...tasks]);

    // Count all tasks and completed tasks
    const allTasksCount = datefilteredTasks.length;
    const completedTasksCount = datefilteredTasks.filter(task => task.status === 'completed').length;

    const handleDateChange = (newDate) => {
        // Filter tasks based on the selected date and update the state
        const newFilteredTasks = tasks?.filter(task => {
            const taskDate = new Date(task.start_date); // Assuming each task has a 'date' property
            console.log(taskDate, newDate);
            console.log(taskDate.toDateString(), newDate.toDateString());
            return taskDate.toDateString() === newDate.toDateString();
        });
        setDateFilteredTasks(newFilteredTasks);
        onFilteredTasksChange(newFilteredTasks)
        onDateChange(newDate)
    };

    const taskCountStyle = {
        display: 'flex',
        padding: '12px',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '0.5rem',
        flex: '1 0 0',
        borderRadius: '12px',
        height: '6.5rem',
        justifyContent: 'space-between'
    }

    return (
        <Card style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: '20px',
            marginTop: '20px',
            backgroundColor: '#DCE1EF'
        }}>
            <Card.Header style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
                alignSelf: 'stretch',
                justifyContent: 'space-between',
                backgroundColor: 'transparent'
            }}>
                <Card.Title>Summary</Card.Title>
                <DateFilter onDateChange={handleDateChange} />
            </Card.Header>

            <CardGroup style={{
                marginTop: '20px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.5rem',
                alignSelf: 'stretch'
            }}>
                <TaskCount
                    state={'Assigned'}
                    count={allTasksCount}
                    styles={taskCountStyle}
                />
                <TaskCount
                    state={'Completed'}
                    count={completedTasksCount}
                    styles={taskCountStyle}
                />
            </CardGroup>
        </Card>
    )
}