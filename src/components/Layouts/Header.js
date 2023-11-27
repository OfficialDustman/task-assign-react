import { Card, PageHeader } from 'react-bootstrap';

export default function Header({userData}) {
    return (
        // <>
        // </>
        <PageHeader>
            <Card.Subtitle>Good Morning {userData.name}!</Card.Subtitle>
            <Card.Title>{new Date().toDateString() }</Card.Title>
        </PageHeader>
    )    
}