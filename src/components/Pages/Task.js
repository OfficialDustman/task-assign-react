// import Header from '../Layouts/Header'
import Summary from '../Layouts/Summary'
import TaskBody from '../Layouts/Tasks/TaskBody'
import AuthContext from "../../store/auth-context";
import { useState, useEffect, useContext } from "react";

function Task() {
    
    const [fetchData, setFetchData] = useState(null);
    const [tasks, setTasks] = useState([]);
    const [date, setDate] = useState('Today');
    const [isLoaded, setIsLoaded] = useState(true);
    const [error, setError] = useState(null);
    const { userData } = useContext(AuthContext)
    console.log(userData);
    useEffect(() => {
        setIsLoaded(false);

        const formData = new FormData();
        formData.append("username", userData?.username);
    
        fetch("http://localhost/repos/task-assign/api/user/confirmUser.php", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json() )
          .then((data) => {
            setFetchData(data);
            setIsLoaded(true);
            setTasks(fetchData.data);
          })
          .catch((error) => {
            setError(error)
            console.error("Error fetching data:", error);
          });
    }, [userData.username, fetchData.data])
    
    const [filteredTasks, setFilteredTasks] = useState([...tasks]);

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