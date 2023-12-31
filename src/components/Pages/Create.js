import CreateForm from "../Layouts/CreateForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react';
import AuthContext from "../../store/auth-context";

function Create() {
    // const [page, setPage] = useState(null);
    const [fetchData, setFetchData] = useState(null);
    const [users, setUsers] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const { userData } = useContext(AuthContext);

    let { form } = useParams();

    const location = useLocation();
    const { projects } = location.state

    const navigate = useNavigate();

    useEffect(() => {
        const formData = new FormData();
        formData.append("team_id", userData?.team_id);

        fetch("http://localhost/repos/task-assign/api/user/getUsersByTeam.php", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                setFetchData(data);
            })
            .catch((error) => {
                setError(error)
                console.error("Error fetching data:", error);
            });

    }, [userData])

    useEffect(() => {
        if (fetchData) {
            setUsers(fetchData.data);
        }
    }, [fetchData]);

    useEffect(() => {
        if (users.length > 0) {
            setIsLoaded(true)
        }
    }, [users]);

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2rem',
                    position: 'sticky',
                    top: 0,
                    background: 'white',
                    padding: '2rem',
                    boxShadow: 'rgb(13 16 28 / 20%) 1px 0px 5px 1px',
                }}
            >
                <button 
                    style={{
                        fontSize: '2rem',
                        border: 'none',
                        background: 'none',
                    }}
                    onClick={() => navigate(-1)}
                >
                    <FontAwesomeIcon icon="fa-solid fa-angle-left" />
                </button>
                <h1>Create new {form}</h1>
            </div>
            {isLoaded && <CreateForm
                projects={projects}
                users={users}
                userData={userData}
                page={form}
            />}
        </>
    )
}

export default Create;