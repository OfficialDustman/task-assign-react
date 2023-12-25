import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import NewTasks from '../Ui/Notification';

export default function Header({ userData, newTasks, onTaskRefresh, load }) {
    const [show, setShow] = useState(false);

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
            {load && <NewTasks
                tasks={newTasks}
                showTask={show}
                closeTask={toggleShow}
                refreshTask={onTaskRefresh}
            />}

        </header>
    )
}