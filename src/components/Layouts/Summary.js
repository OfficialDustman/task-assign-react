import { Card, CardGroup } from "react-bootstrap"
import DateFilter from "../Ui/DateFilter"
import TaskCount from "../Ui/TaskCount"
import { useState, useEffect } from 'react';


export default function Summary({ tasks, onFilteredTasksChange, onDateChange, isFiltered }) {
    const [datefilteredTasks, setDateFilteredTasks] = useState([...tasks]);
    const [allTasksCount, setAllTasksCount] = useState(0);
    const [completedTasksCount, setCompletedTasksCount] = useState(0);


    const handleDateChange = (newDate) => {
        // Filter tasks based on the selected date and update the state
        const selectDate = new Date(newDate);

        const newFilteredTasks = tasks?.filter(task => {
            const taskDate = new Date(task.start_date);
            return taskDate.toDateString() === selectDate.toDateString();
        });
        console.log(newFilteredTasks);

        setDateFilteredTasks(newFilteredTasks);
        isFiltered();
        onFilteredTasksChange(newFilteredTasks)
        onDateChange(selectDate.toDateString())
    };

    useEffect(() => {
        if (datefilteredTasks) {
            const completedCount = datefilteredTasks.filter(task => task.status === 'completed').length;
            
            setAllTasksCount(datefilteredTasks.length);
            setCompletedTasksCount(completedCount);
        }
    }, [datefilteredTasks]);

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