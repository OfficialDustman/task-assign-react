import { Card, Button, CardGroup, ListGroup } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function TaskItem({ task }) {

    const formatDate = (inputDate) => {
        const date = new Date(inputDate);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
      
        return date.toLocaleDateString('en-US', options);
    };

    return (
        <Card style={{
            display: 'flex',
            padding: '12px',
            flexDirection: 'column',
            alignitems: 'flex-start',
            gap: '1rem',
            alignself: 'stretch'
        }}>
            <Card.Title>{task.task_name}</Card.Title>
            <Card.Text>{task.task_description}</Card.Text>

            <Card.Body style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                alignSelf: 'stretch',
                justifyContent: 'space-between'
            }}>
                <CardGroup style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '10px',
                    flex: '1 0 0'
                }}>
                    <ListGroup.Item style={{ textTransform: 'capitalize' }}>
                        <FontAwesomeIcon icon="fa-solid fa-folder" />
                        {task.project_name}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <FontAwesomeIcon icon="fa-solid fa-stopwatch" />
                        {formatDate(task.end_date)}
                    </ListGroup.Item>
                </CardGroup>
                <Button variant="info">{task.status}</Button>
            </Card.Body>
        </Card>
    )
}