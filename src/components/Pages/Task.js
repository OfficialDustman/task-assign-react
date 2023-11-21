// import Header from '../Layouts/Header'
import Summary from '../Layouts/Summary'
import TaskBody from '../Layouts/Tasks/TaskBody'
import { useState } from 'react';

function Task() {

    const [filteredTasks, setFilteredTasks] = useState([...tasks]);
    const [date, setDate] = useState('Today');

    const handleFilteredTasksChange = (newFilteredTasks) => {
      setFilteredTasks(newFilteredTasks);
    };

    const handleDateChange = (newDate) => {
        setDate(newDate);
    };

    
    return (
        <>
            {/* <Header userData={userData}/> */}
            <Summary 
                tasks={tasks} 
                onFilteredTasksChange={handleFilteredTasksChange}
                onDateChange={handleDateChange}
            />
            <TaskBody
                date={date}
                tasks={filteredTasks}
            />
        </>
    )
}

export default Task;