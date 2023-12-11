import { Modal, Button, ListGroup, Card, CardGroup, Form } from 'react-bootstrap';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TaskModal({ task, show, handleClose }) {

  const [status, setStatus] = useState('');

  const handleStatusChange = (selectedStatus) => {
    setStatus(selectedStatus);
  };

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    return date.toLocaleDateString('en-US', options);
  };

  let usersArray = task.assigned_users.split(',');
  console.log(usersArray, status);

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      show={show}
      onHide={handleClose}
      id={task.task_id}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {task.task_name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card.SubTitle>{task.task_description}</Card.SubTitle>

        {/* <CardGroup style={{
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
            {formatDate(task.start_date)} - {formatDate(task.end_date)}
          </ListGroup.Item>
        </CardGroup> */}

        <ListGroup>
          {usersArray.map((user) => {
            <ListGroup.Item>{user}</ListGroup.Item>
          })}
        </ListGroup>

        <Form.Group controlId="statusValue">
          <Form.Label>Status</Form.Label>
          <Form.Control as="select" value={task.status} required onChange={(e) => handleStatusChange(e.target.value)}>
            <option value="">Select Status</option>
            <option value="assigned">Assigned</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
          </Form.Control>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TaskModal;