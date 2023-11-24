import { Card, CardGroup } from "react-bootstrap"
import DateFilter from "../Ui/DateFilter"
import TaskCount from "../Ui/TaskCount"
import { useState } from 'react';


export default function Summary({tasks, onFilteredTasksChange, onDateChange}) {
    const [datefilteredTasks, setDateFilteredTasks] = useState([...tasks]);
  
    const handleDateChange = (newDate) => {
      // Filter tasks based on the selected date and update the state
      const newFilteredTasks = tasks?.filter(task => {
        const taskDate = new Date(task.start_date); // Assuming each task has a 'date' property
        return taskDate.toDateString() === newDate.toDateString();
      });
      setDateFilteredTasks(newFilteredTasks);
      onFilteredTasksChange(newFilteredTasks)
      onDateChange(newDate)
    };

    // Count all tasks and completed tasks
    const allTasksCount = datefilteredTasks.length;
    const completedTasksCount = datefilteredTasks.filter(task => task.status === 'completed').length;


    return (
        <Card style={{ 
            display: 'flex', 
            lexDirection: 'column', 
            padding: '20px', 
            marginTop: '20px' 
        }}>
            <Card.Header>
                <Card.Title>Summary</Card.Title>
                <DateFilter onDateChange={handleDateChange}/>
            </Card.Header>

            <CardGroup style={{ marginTop: '20px' }}>
                <TaskCount 
                    state={'Assigned'} 
                    count={allTasksCount}
                />
                <TaskCount 
                    state={'Completed'} 
                    count={completedTasksCount}
                />
            </CardGroup>
        </Card>
    )
}