import { Card } from 'react-bootstrap/';

function Project({userData}) {
    console.log(userData);
    return (
        <Card style={{
            width: '85%',
            height: '45vh',
        }}>
            <Card.Img 
                variant="top" 
                src={'https://picsum.photos/seed/' + userData.username +'/200/300'} 
                style={{height: '20vh'}}
            />
            <Card.Body>
                <Card.Title>Team : {userData.team_name}</Card.Title>
                <Card.Text>Description : {userData.team_description}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Project;