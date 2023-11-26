import { Card, Button, CardGroup, ListGroup } from "react-bootstrap"

export default function TaskItem({task}) {
    return (
        <Card>
            <Card.Title>{task.task_name}</Card.Title>
            <Card.Text>{task.task_description}</Card.Text>

            <Card.Body>
                <CardGroup>
                    <ListGroup.Item>
                        {task.project_name}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        {task.end_date}
                    </ListGroup.Item>
                </CardGroup>
                <Button variant="info">{task.status}</Button>
            </Card.Body>
        </Card>
    )
}