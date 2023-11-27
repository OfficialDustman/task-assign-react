import { Card } from "react-bootstrap"

export default function TaskCount({state, count, styles}) {
    return (
        <Card style={styles}>
            <Card.Subtitle>{state} Tasks</Card.Subtitle>

            <Card.Title style={{
                fontSize: '1.8rem'
            }}>
                {count}
            </Card.Title>
        </Card>
    )
}