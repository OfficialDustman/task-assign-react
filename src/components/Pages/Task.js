// import Header from '../Layouts/Header'
import Summary from '../Layouts/Summary'
import TaskBody from '../Layouts/Tasks/TaskBody'
import { Card } from 'react-bootstrap';
import AuthContext from "../../store/auth-context";
import { useState, useEffect, useContext } from "react";

function Task() {
    
    const [fetchData, setFetchData] = useState(null);
    const [tasks, setTasks] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [date, setDate] = useState('Today');
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const { userData } = useContext(AuthContext)
    // console.log(userData);
    useEffect(() => {
        const formData = new FormData();
        formData.append("username", userData?.username);
    
        // for (const value of formData.values()) {
        //   console.log(value);
        // }

        fetch("http://localhost/repos/task-assign/api/task/getTasksByUser.php", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json() )
          .then((data) => {
            console.log(data);
            setFetchData(data);
            // fetchUpdateHandler();
          })
          // .catch((error) => {
          //   setError(error)
          //   console.error("Error fetching data:", error);
          // });
          
    }, [userData])

    useEffect(() => {
      // Only proceed if fetchData is not null
      if (fetchData) {
        // Update tasks state
        setTasks(fetchData.data);
      }
    }, [fetchData]);
  
    useEffect(() => {
      // Only proceed if tasks are updated
      if (tasks.length > 0) {
        // Update filteredTasks state
        setFilteredTasks(tasks);
      }
    }, [tasks]);
  
    useEffect(() => {
      // Only proceed if filteredTasks are updated
      if (filteredTasks.length > 0) {
        // Update isLoaded state
        setIsLoaded(true);
      }
    }, [filteredTasks]);

    const handleFilteredTasksChange = (newFilteredTasks) => {
      setFilteredTasks(newFilteredTasks);
    };

    const handleDateChange = (newDate) => {
        setDate(newDate);
    };

    return (
      <Card style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          padding: '20px', 
          marginTop: '20px' 
      }}>
          {/* <Header userData={userData}/> */}
          <Summary 
              tasks={tasks} 
              onFilteredTasksChange={handleFilteredTasksChange}
              onDateChange={handleDateChange}
          />
          {isLoaded && <TaskBody
              date={date}
              tasks={filteredTasks}
          />}
      </Card>
    )
}

export default Task;