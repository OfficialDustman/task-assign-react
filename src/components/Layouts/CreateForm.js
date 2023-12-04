import { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';

const CreateForm = ({ projects, users }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [projectId, setProjectId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [assignedTo, setAssignedTo] = useState([]);

  console.log(projects, users);

  const handleProjectChange = (event) => {
    setProjectId(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleAssignedToChange = (event) => {
    // Convert NodeList to Array and extract selected values
    const selectedUsers = Array.from(event.target.selectedOptions, option => option.value);
    setAssignedTo(selectedUsers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Do something with the form data (e.g., submit to API)
    console.log({
      taskName,
      taskDescription,
      projectId,
      startDate,
      endDate,
      assignedTo,
    });

    // Reset form fields
    setTaskName('');
    setTaskDescription('');
    setProjectId('');
    setStartDate('');
    setEndDate('');
    setAssignedTo([]);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="taskName">
        <Form.Label>Task Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="taskDescription">
        <Form.Label>Task Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter task description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="projectId">
          <Form.Label>Project</Form.Label>
          <Form.Control as="select" value={projectId} onChange={handleProjectChange}>
            <option value="">Select Project</option>
            {projects.map((project) => (
              <option key={project.project_id} value={project.project_id}>
                {project.project_name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="startDate">
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="endDate">
          <Form.Label>End Date</Form.Label>
          <Form.Control
            type="date"
            value={endDate}
            onChange={handleEndDateChange}
          />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="assignedTo">
        <Form.Label>Assigned To</Form.Label>
        <Form.Control
          as="select"
          multiple
          value={assignedTo}
          onChange={handleAssignedToChange}
        >
          {users.map((user) => (
            <option key={user.username} value={user.username}>
              {user.username}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="status">
        <Form.Label>Status</Form.Label>
        <Form.Control
          type="text"
          value="assigned"
          readOnly
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default CreateForm;
