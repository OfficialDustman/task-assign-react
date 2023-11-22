import { Card } from "react-bootstrap"

export default function TaskCount({state, count}) {
    return (
        <Card>
            <Card.Subtitle>{state} Tasks</Card.Subtitle>

            <Card.Title>{count}</Card.Title>
        </Card>
    )
}