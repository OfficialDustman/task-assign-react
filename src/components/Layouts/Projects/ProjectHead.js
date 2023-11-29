import { Card } from 'react-bootstrap/';

function Project({userData}) {
    console.log(userData);
    return (
        <Card style={{
            width: '65%'
        }}>
            <Card.Img 
                variant="top" 
                src={'https://picsum.photos/seed/' + userData.username +'200/300'} 
            />
            <Card.Body>
                <Card.Title>{userData.team_name}</Card.Title>
                <Card.Text>{userData.team_description}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Project;