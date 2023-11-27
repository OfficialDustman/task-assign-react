import { Card } from "react-bootstrap"

export default function TaskCount({state, count, styles}) {
    return (
        <Card style={styles}>
            <Card.Subtitle>{state} Tasks</Card.Subtitle>

            <Card.Title style={{
                fontSize: '24px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '130%',
                letterSpacing: '-0.48px'
            }}>
                {count}
            </Card.Title>
        </Card>
    )
}