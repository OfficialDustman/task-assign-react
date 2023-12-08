import { Tooltip, ListGroup } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AssignedTooltip({ users }) {

    let usersArray = users.split(',');
    console.log(users, usersArray);
    
    return (
        <Tooltip id="button-tooltip">
            {/* <ListGroup>
                {usersArray.map((user) => {
                    <ListGroup.Item>{user}</ListGroup.Item>
                })}
            </ListGroup> */}
        </Tooltip>
    )
}