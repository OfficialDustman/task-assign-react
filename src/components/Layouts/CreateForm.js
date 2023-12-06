import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Form, Col, Row, Spinner } from 'react-bootstrap';
import SearchableMultiSelect from '../Ui/SearchableMultiSelect';
import UIButton from '../Ui/Button';
import SuccessModal from '../Ui/SuccessModal';

const CreateForm = ({ projects, users, userData, page }) => {
  
  const [isLoaded, setIsLoaded] = useState(true);
  const [error, setError] = useState(null);
  const [fetchData, setFetchData] = useState(null);
  const [isProject, setIsProject] = useState(false);
  const [isTask, setIsTask] = useState(false);
  const [formName, setFormName] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [projectId, setProjectId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [assignedTo, setAssignedTo] = useState([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    if (page === 'task') {
      setIsTask(true)
    } else if (page === 'project') {
      setIsProject(true)
    }
  }, [page]);

  const handleCloseSuccessModal = () => {
    navigate(-1);
  };

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

  const submitBtnStyles = {
    alignSelf: 'center',
    padding: '0.5rem 3rem',
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsLoaded(false);

    const formData = new FormData();
    formData.append(`${page}_name`, formName);
    formData.append(`${page}_description`, formDescription);
    formData.append("start_date", startDate);
    formData.append("end_date", endDate);
    formData.append("status", 'assigned');

    if (isTask) {
      formData.append("project_id", projectId);
      formData.append("assigned_users", assignedTo);
    } else if (isProject) {
      formData.append("team_id", userData.team_id);
    }

    for (const value of formData.values()) {
      console.log(value);
    }

    fetch(`http://localhost/repos/task-assign/api/${page}/create${page}.php`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json() )
      .then((data) => {
        setFetchData(data)
        if (data.status === 'success') {
          // Reset form fields
          setFormName('');
          setFormDescription('');
          setProjectId('');
          setStartDate('');
          setEndDate('');
          setAssignedTo([]);
        } else {
          setError(data.status)
        }
      })
      .catch((error) => {
        setError(error)
        console.error("Error fetching data:", error);
      });

  };

  useEffect(() => {
    setIsLoaded(true);
  }, [fetchData]);


  return (
    <Form 
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '85%',
        margin: '2rem auto 7rem',
        gap: '1rem',
      }}
    >
      <Form.Group controlId="formName">
        <Form.Label style={{textTransform: 'capitalize'}}>{page} Name</Form.Label>
        <Form.Control
          type="text"
          placeholder={`Enter ${page} name`}
          value={formName}
          required
          onChange={(e) => setFormName(e.target.value)}
        />
        </Form.Group>

        <Form.Group controlId="formDescription">
        <Form.Label style={{textTransform: 'capitalize'}}>{page} Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder={`Enter ${page} description`}
          value={formDescription}
          required
          onChange={(e) => setFormDescription(e.target.value)}
        />
        </Form.Group>

      <Form.Group as={Row}>
        {isTask && <Form.Group as={Col} controlId="projectId">
          <Form.Label>Project</Form.Label>
          <Form.Control as="select" value={projectId} required onChange={handleProjectChange}>
            <option value="">Select Project</option>
            {projects.map((project) => (
              <option key={project.project_id} value={project.project_id}>
                {project.project_name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>}


        {isProject && <Form.Group as={Col} controlId="teamId">
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
            required
            onChange={handleStartDateChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="endDate">
          <Form.Label>End Date</Form.Label>
          <Form.Control
            type="date"
            value={endDate}
            required
            onChange={handleEndDateChange}
          />
        </Form.Group>
      </Form.Group>

      {isTask && <Form.Group controlId="assignedTo">
        <Form.Label>Assigned To</Form.Label>
        <SearchableMultiSelect
          options={users.map((user) => user.username)}
          selectedValues={assignedTo}
          required={"required"}
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

      {error && <p>{error.message}</p>}

      <UIButton 
        type="submit"
        styles={submitBtnStyles}
      >
        {isLoaded ? (
          "Submit"
        ) : (
          <Spinner animation="border" variant="light" size="sm" />
        )}
      </UIButton>

      <SuccessModal 
        show={isLoaded} 
        handleClose={handleCloseSuccessModal}
        data={fetchData}
      />
    </Form>
  );
};

export default CreateForm;
