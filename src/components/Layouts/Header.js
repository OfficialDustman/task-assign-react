import { Card } from 'react-bootstrap';

export default function Header({ userData }) {
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
                <Card.Subtitle>Good Morning {userData.name}!</Card.Subtitle>
                <Card.Title>{new Date().toDateString()}</Card.Title>
            </div>

            <FontAwesomeIcon icon="fa-solid fa-bell" />
        </header>
    )
}