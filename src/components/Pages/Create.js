import CreateForm from "../Layouts/CreateForm";
import { useLocation } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react';
import AuthContext from "../../store/auth-context";

function Create() {
    const [fetchData, setFetchData] = useState(null);
    const [users, setUsers] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const { userData } = useContext(AuthContext)

    const location = useLocation()
    const { projects } = location.state

    useEffect(() => {
        const formData = new FormData();
        formData.append("username", userData?.team_id);

        fetch("http://localhost/repos/task-assign/api/user/getUsersByTeam.php", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                setFetchData(data);
                console.log(data);
            })
        // .catch((error) => {
        //   setError(error)
        //   console.error("Error fetching data:", error);
        // });

    }, [userData])

    useEffect(() => {
        if (fetchData) {
            setUsers(fetchData.data);
            console.log(fetchData);
        }
    }, [fetchData]);

    useEffect(() => {
        if (users) {
            console.log(users);
        }
    }, [users]);    

    return (
        <>
           {/* <CreateForm
                projects={projects}
                users={users}
           />  */}
        </>
    )
}

export default Create;