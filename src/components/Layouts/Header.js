import { Card } from 'react-bootstrap';

export default function Header({userData}) {
    return (
        <header>
            <Card.Subtitle>Good Morning {userData.name}!</Card.Subtitle>
            <Card.Title>{new Date().toDateString() }</Card.Title>
        </header>
    )    
}