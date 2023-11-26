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

    if (fetchData) {
      setTasks(fetchData.data) 
      // setFilteredTasks(tasks)
      handleFilteredTasksChange(tasks)
      console.log(tasks, filteredTasks);
      setIsLoaded(true);
    }

    // const fetchUpdateHandler = () => {

   
    // }

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