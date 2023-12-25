import Header from '../Layouts/Header'
import Summary from '../Layouts/Summary'
import TaskBody from '../Layouts/Tasks/TaskBody'
import { Card } from 'react-bootstrap';
// import TaskContextProvider from "../../store/TaskProvider";
// import TaskContext from "../../store/task-context";
import AuthContext from "../../store/auth-context";
import { useState, useEffect, useContext } from "react";

function Task() {
    
    const [fetchData, setFetchData] = useState(null);
    const [tasks, setTasks] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [notificationTasks, setnotificationTasks] = useState([]);
    const [refreshTasks, setRefreshTask] = useState(false)
    const [date, setDate] = useState('Today');
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const { userData, taskData, changeTaskData } = useContext(AuthContext)
    // console.log(userData);
    console.log(taskData)

    const handleFilteredTasksChange = (newFilteredTasks) => {
      setFilteredTasks(newFilteredTasks);
    };

    const handleDateChange = (newDate) => {
        setDate(newDate);
    };

    const handleTaskRefresh = () => {
      setRefreshTask(true)
    }

    useEffect(() => {
        const formData = new FormData();
        formData.append("username", userData?.username);

        fetch("http://localhost/repos/task-assign/api/task/getTasksByUser.php", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json() )
          .then((data) => {
            console.log(data);
            setFetchData(data);
          })
          .catch((error) => {
            setError(error) 
            console.error("Error fetching data:", error);
          });
          
    }, [userData, refreshTasks])

    useEffect(() => {  
      if (fetchData) {

        if (tasks.length > 0) { 
          console.log(taskData)

          const newTasks = fetchData.data;
          const diffTasks = newTasks.filter(
            (newTask) => !tasks.some((task) => task.task_id === newTask.task_id)
          );
          setnotificationTasks(diffTasks)
          console.log("Newly fetched tasks not in current state:", diffTasks);
        }

        // Use context provider to update taskData
        changeTaskData(fetchData.data);
      }
    }, [fetchData, taskData, changeTaskData]); 
  
    useEffect(() => {
      if (taskData.length > 0 && fetchData) {
        console.log(taskData)
        
        setTasks(taskData);
      }
    }, [taskData, fetchData]);

    useEffect(() => {
      if (tasks.length > 0) {
        console.log(tasks);
        setFilteredTasks(tasks);
      } 
    }, [tasks]);
  
    useEffect(() => {
      if (filteredTasks.length > 0) {
        console.log(filteredTasks);
        setIsLoaded(true);
      }
    }, [filteredTasks, notificationTasks]);

    return (
      <Card style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          padding: '20px',
          background: 'linear-gradient(180deg, #FFF 0%, #DFE4F1 100%)',
      }}>
          {userData && <Header 
            userData={userData}
            newTasks={notificationTasks}
            onTaskRefresh={handleTaskRefresh}
            load={isLoaded}
          />}
          <Summary 
              tasks={tasks} 
              onFilteredTasksChange={handleFilteredTasksChange}
              onDateChange={handleDateChange}
          />
          {isLoaded && <TaskBody
              date={date}
              tasks={filteredTasks}
              onTaskRefresh={handleTaskRefresh}
          />}
      </Card>
    )
}

export default Task; 