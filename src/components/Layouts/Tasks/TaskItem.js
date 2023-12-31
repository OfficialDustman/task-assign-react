import { Card, Button, CardGroup, ListGroup, OverlayTrigger, Tooltip } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AssignedTooltip from "./AssignedTooltip";

export default function TaskItem({ task, ontaskclick }) {

    const formatDate = (inputDate) => {
        const date = new Date(inputDate);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };

        return date.toLocaleDateString('en-US', options);
    };

    const taskClickHandler = () => {
        ontaskclick(true, task)
    }

    return (

        <Card
            style={{
                display: 'flex',
                padding: '12px',
                flexDirection: 'column',
                alignitems: 'flex-start',
                gap: '1rem',
                alignself: 'stretch'
            }}

            onClick={taskClickHandler}
        >
            <Card.Title>{task.task_name}</Card.Title>
            <Card.Text>{task.task_description}</Card.Text>

            <Card.Body style={{
                display: 'flex',
                alignItems: 'flex-start',
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
                    <ListGroup.Item style={{
                        textTransform: 'capitalize',
                        display: 'flex',
                        gap: '1rem',
                        alignItems: 'center',
                    }}>
                        <FontAwesomeIcon icon="fa-solid fa-folder" />
                        {task.project_name}
                    </ListGroup.Item>
                    <ListGroup.Item style={{
                        display: 'flex',
                        gap: '1rem',
                        alignItems: 'center',
                    }}>
                        <FontAwesomeIcon icon="fa-solid fa-stopwatch" />
                        {formatDate(task.end_date)}
                    </ListGroup.Item>
                </CardGroup>
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
            </Card.Body>
        </Card>

    )
}