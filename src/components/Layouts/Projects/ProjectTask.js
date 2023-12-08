import { Card, Button, CardGroup, ListGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ProjectTask({ task }) {

    return (
        <Card>
            <Card.Title>{task.task_name}</Card.Title>
            <Card.Text>{task.task_description}</Card.Text>

            <CardGroup>
                <ListGroup>
                    <FontAwesomeIcon icon="fa-solid fa-stopwatch" />
                    {formatDate(task.end_date)}
                </ListGroup>

                <Button variant="info">{task.status}</Button>
                <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={<Tooltip id="button-tooltip">
                        {task.assigned_users}
                    </Tooltip>}
                >
                    <Button variant="warning">Assigned Users</Button>
                </OverlayTrigger>
            </CardGroup>

        </Card>
    )
}
