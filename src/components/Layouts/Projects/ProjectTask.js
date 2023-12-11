import { Card, Button, CardGroup, ListGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ProjectTask({ task }) {

    const formatDate = (inputDate) => {
        const date = new Date(inputDate);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };

        return date.toLocaleDateString('en-US', options);
    };

    return (
        <Card
            style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '0.5rem',
            }}
        >
            <Card.Title>{task.task_name}</Card.Title>
            <Card.Text>{task.task_description}</Card.Text>

            <CardGroup
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',

                }}
            >
                <ListGroup
                    style={{
                        display: 'flex',
                        gap: '0.5rem',
                    }}
                >
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
