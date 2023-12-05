import { useState, useEffect } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import SearchableMultiSelect from '../Ui/SearchableMultiSelect';

const CreateForm = ({ projects, users, userData, page }) => {

  const [isProject, setIsProject] = useState(false);
  const [isTask, setIsTask] = useState(false);
  const [formName, setFormName] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [projectId, setProjectId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [assignedTo, setAssignedTo] = useState([]);

  useEffect(() => {
    if (page === 'task') {
      setIsTask(true)
    } else if (page === 'project') {
      setIsProject(true)
    }
  }, [page]);

  const handleProjectChange = (event) => {
    setProjectId(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleAssignedToChange = (selectedUsers) => {
    // Convert NodeList to Array and extract selected values
    // const selectedUsers = Array.from(event.target.selectedOptions, option => option.value);
    setAssignedTo(selectedUsers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Do something with the form data (e.g., submit to API)
    console.log({
      formName,
      formDescription,
      projectId,
      startDate,
      endDate,
      assignedTo,
    });

    // Reset form fields
    setFormName('');
    setFormDescription('');
    setProjectId('');
    setStartDate('');
    setEndDate('');
    setAssignedTo([]);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Task Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter task name"
          value={formName}
          onChange={(e) => setFormName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Task Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter task description"
          value={formDescription}
          onChange={(e) => setFormDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group as={Row}>
        {isTask && <Form.Group as={Col} controlId="projectId">
          <Form.Label>Project</Form.Label>
          <Form.Control as="select" value={projectId} onChange={handleProjectChange}>
            <option value="">Select Project</option>
            {projects.map((project) => (
              <option key={project.project_id} value={project.project_id}>
                {project.project_name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>}


        {isProject && <Form.Group controlId="teamId">
          <Form.Label>Team</Form.Label>
          <Form.Control
            id={userData.team_id}
            type="text"
            value={userData.team_name}
            readOnly
          />
        </Form.Group>}

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
      </Form.Group>

      {isTask && <Form.Group controlId="assignedTo">
        <Form.Label>Assigned To</Form.Label>
        <SearchableMultiSelect
          options={users.map((user) => user.username)}
          selectedValues={assignedTo}
          onChange={handleAssignedToChange}
        />
      </Form.Group>}

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
