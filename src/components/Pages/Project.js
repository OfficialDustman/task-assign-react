import ProjectHead from "../Layouts/Projects/ProjectHead";
import Sidebar from "../Layouts/Projects/SideBar";
import AuthContext from "../../store/auth-context";
import { useState, useEffect, useContext } from "react";
import { Card, Container } from 'react-bootstrap';
import ProjectBody from "../Layouts/Projects/ProjectBody";

function Project() {

    const [fetchData, setFetchData] = useState(null);
    const [fetchProject, setFetchProject] = useState(null);
    const [tasks, setTasks] = useState([]);
    const [projects, setProjects] = useState([]);
    const [groupedProjects, setGroupedProjects] = useState(null);
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const { userData, projectData, changeProjectData, projectTask, changeProjectTask } = useContext(AuthContext)

    function groupTasksByProject(projects, tasks) {
        const groupedTasks = {};

        projects.forEach(project => {
            groupedTasks[project.project_id] = {
              ...project,
              tasks: [],
            };
        });

        tasks.forEach(task => {
            if (groupedTasks[task.project_id]) {
                groupedTasks[task.project_id].tasks.push(task);
            }
        });

        return Object.values(groupedTasks);
    }


    useEffect(() => {
        const formData = new FormData();
        formData.append("username", userData?.username);

        fetch("http://localhost/repos/task-assign/api/task/getTasksByTeam.php", {
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
        const formData = new FormData();
        formData.append("username", userData?.username);

        fetch("http://localhost/repos/task-assign/api/project/getProjects.php", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                setFetchProject(data);
            })
        .catch((error) => {
          setError(error)
          console.error("Error fetching data:", error);
        });

    }, [userData])

    useEffect(() => {
        if (fetchData) {
            changeProjectTask(fetchData.data);
        }
    }, [fetchData, changeProjectTask]);

    useEffect(() => {
        if (fetchProject) {
            changeProjectData(fetchProject.data);
        }
    }, [fetchProject, changeProjectData]);

    useEffect(() => {
        if (projectTask.length > 0) {
            setTasks(projectTask);
        }
    }, [projectTask]);

    useEffect(() => {
        if (projectData.length > 0) {
            setProjects(projectData);
        }
    }, [projectData]);

    useEffect(() => {
        if (tasks.length > 0 && projects.length > 0) {
            const groupedProjects = groupTasksByProject(projects, tasks);
            setGroupedProjects(groupedProjects);
        }
    }, [projects, tasks]);

    useEffect(() => {
        if (groupedProjects) {
            console.log(groupedProjects);
            setIsLoaded(true);
        }
    }, [groupedProjects]);

    return (
        <Card style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            gap: '1rem',
            justifyContent: 'space-between',
            background: 'linear-gradient(180deg, #FFF 0%, #DFE4F1 100%)'
        }}>
            {isLoaded &&
                <>
                    <Sidebar
                        projects={groupedProjects}
                        username={userData?.username}
                    />
                    <Container 
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1rem',
                            width: '100%'
                        }}
                    >
                        <ProjectHead userData={userData} />
                        <ProjectBody 
                            tasks={tasks}
                            projects={groupedProjects}
                        />
                    </Container>
                </>
            }
        </Card>
    )
}

export default Project;