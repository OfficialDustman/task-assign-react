import { Modal, Button, ListGroup, Badge, Spinner, Card, CardGroup, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UIButton from "../../Ui/Button";

function TaskModal({ task, show, handleClose, taskRefreshHandler }) {

  const [status, setStatus] = useState('');
  const [isLoaded, setIsLoaded] = useState(true);
  const [fetchData, setFetchData] = useState(null);
  const [error, setError] = useState(null);

  const handleStatusChange = (selectedStatus) => {
    setStatus(selectedStatus);
  };

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    return date.toLocaleDateString('en-US', options);
  };

  console.log(task);
  let usersArray = task.assigned_users.split(',');

  useEffect(() => {
    if (show && task.status === 'assigned') {
      submitHandler()
    }
  }, [show])

  function submitHandler() {

    setIsLoaded(false);

    let statusData
    status ? statusData = status : statusData = 'ongoing'

    const formData = new FormData();
    formData.append("task_id", task.task_id);
    formData.append("end_date", '');
    formData.append("status", statusData);

    fetch("http://localhost/repos/task-assign/api/task/editTask.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setFetchData(data);
        setIsLoaded(true);
      })
      .catch((error) => {
        setError(error)
        console.error("Error fetching data:", error);
      });
  }

  useEffect(() => {
    if (show && fetchData.status === 'success') {
      console.log('hiiiiii');
      taskRefreshHandler()
    }
  }, [fetchData])

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
      <Modal.Body
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.7rem',
        }}
      >
        <Card.Subtitle>{task.task_description}</Card.Subtitle>

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
            {formatDate(task.start_date)} - {formatDate(task.end_date)}
          </ListGroup.Item>
        </CardGroup>

        <ListGroup as='ul'>
          <ListGroup.Item active >Assigned Users</ListGroup.Item>
          {usersArray.map((user) => (
            <ListGroup.Item as='li'>
              <Badge
                style={{
                  backgroundColor: '#613BE7 !important',
                  textTransform: 'uppercase',
                  fontSize: '0.8rem',
                }}
              >
                {user[0]}
              </Badge>
              {' '}
              {user}
            </ListGroup.Item>
          ))}
        </ListGroup>

        <Form
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.7rem',
          }}

          onSubmit={(e) => {
            e.preventDefault();
            submitHandler()
          }}
        >
          <Form.Group controlId="statusValue">
            <Form.Label>Status</Form.Label>
            <Form.Control
              as="select"
              value={status ? status : task.status}
              required
              onChange={(e) => handleStatusChange(e.target.value)}
            >
              <option value="assigned" disabled>Assigned</option>
              <option value="ongoing" disabled={task.status === "ongoing"}>In Progress</option>
              <option value="completed" disabled={task.status === "completed"}>Completed</option>
            </Form.Control>
          </Form.Group>

          <UIButton 
            styles={{alignSelf: 'flex-start'}}
            type="submit"
          >
            {isLoaded ? (
              "Submit"
            ) : (
              <Spinner animation="border" variant="light" size="sm" />
            )}
          </UIButton>
        </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TaskModal;