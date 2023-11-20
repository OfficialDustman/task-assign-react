import { Card, Button, CardGroup, ListGroup } from "react-bootstrap"

export default function TaskItem({task}) {
    return (
        <Card>
            <Card.Title>{task.name}</Card.Title>
            <Card.Text>{task.description}</Card.Text>

            <Card.Body>
                <CardGroup>
                    <ListGroup.Item>
                        {task.project}
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