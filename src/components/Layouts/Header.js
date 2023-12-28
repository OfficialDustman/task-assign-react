import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AuthContext from '../../store/auth-context';
import { useState, useEffect, useContext } from "react";
import NewTasks from '../Ui/Notification';

export default function Header({ newTasks, onTaskRefresh }) {
    const [show, setShow] = useState(false);
    const { userData, newtaskData, changeNewTaskData } = useContext(AuthContext)
    console.log(userData);
    console.log(newtaskData)

    const toggleShow = () => {
        setShow(!show);
    }

    const checkTimeOfDay = (date) => {
        const hour = date.getHours();

        if (hour >= 6 && hour < 12) {
            return 'Morning';
        } else if (hour >= 12 && hour < 18) {
            return 'Afternoon';
        } else {
            return 'Evening';
        }
    };

    useEffect(() => {
        if (newTasks.length > 0) {
            changeNewTaskData(newTasks);
        } 
      }, [newTasks]);

    return (
        <header style={{
            display: 'flex',
            width: '100%',
            padding: ' 8px 20px',
            alignItems: 'center',
            gap: '1rem',
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: '4px',
                flex: '1 0 0',
                alignSelf: 'stretch',
            }}>
                <Card.Subtitle>Good {checkTimeOfDay(new Date())} {userData.username}!</Card.Subtitle>
                <Card.Title>{new Date().toDateString()}</Card.Title>
            </div>

            <FontAwesomeIcon onClick={toggleShow} icon="fa-solid fa-bell" />
            <FontAwesomeIcon onClick={onTaskRefresh} icon="fa-solid fa-arrows-rotate" />
            {newtaskData.length > 0 && <NewTasks
                tasks={newtaskData}
                showTask={show}
                closeTask={toggleShow}
                refreshTask={onTaskRefresh}
            />}

        </header>
    )
}