import { Tooltip, ListGroup } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AssignedTooltip({ users }) {
    return (
        <Tooltip id="button-tooltip">
            <ListGroup>
                {users.map((user) => {
                    <ListGroup.Item>{user}</ListGroup.Item>
                })}
            </ListGroup>
        </Tooltip>
    )
}