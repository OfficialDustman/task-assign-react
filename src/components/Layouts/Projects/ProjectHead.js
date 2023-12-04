import { Card } from 'react-bootstrap/';

function Project({userData}) {
    console.log(userData);
    return (
        <Card style={{
            width: '85%',
        }}>
            <Card.Body>
                <Card.Title>{userData.team_name} Team</Card.Title>
                <Card.Text>{userData.team_description}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Project;