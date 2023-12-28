import { useState } from 'react';
import { Navbar, Nav, Button, Badge, Card, CardGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProjectAccordion from "./ProjectAccordion";
import UIButton from '../../Ui/Button';
import TaskModal from '../Tasks/TaskModal';
import { Link } from "react-router-dom";


const Sidebar = ({ tasks, projects, username, onTaskRefresh }) => {

  const [taskClicked, setTaskClicked] = useState(false);
  const [taskData, setTaskData] = useState(null);

  const handleTaskClick = (task) => {
    setTaskData(task);
    setTaskClicked(true);
  }

  const handleCloseModal = () => {
    setTaskClicked(false);
  };


  return (
    <Navbar
      expand="lg"
      className="bg-light"
      style={{
        width: '30%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        gap: '1rem',
        position: 'sticky',
        top: '0',
        overflowY: 'scroll'
      }}
    >
      <CardGroup style={{
        position: 'sticky',
        top: '0',
        background: 'inherit',
        flexDirection: 'column',
        zIndex: '10',
        width: '100%',
        alignItems: 'center',
        padding: '1rem',
      }}>
        <Card>
          <Button
            variant="light"
          >
            <Badge
              style={{
                backgroundColor: '#613BE7 !important',
                textTransform: 'uppercase',
                fontSize: '1.2rem',
              }}
            >
              {username[0]}
            </Badge>
            {' '}
            {username}
          </Button>
        </Card>

        <Navbar.Brand>
          <FontAwesomeIcon icon={'fa-solid fa-folder'} />
          {' '}
          Projects
          {' '}
          <FontAwesomeIcon onClick={onTaskRefresh} icon="fa-solid fa-arrows-rotate" />
        </Navbar.Brand>

        <UIButton>
          <Link
            to='/home/create/project'
            state={{ projects: projects }}
            style={{
              color: 'white',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            Create Project
            <FontAwesomeIcon icon="fa-solid fa-plus" />
          </Link>
        </UIButton>
      </CardGroup>


      <Nav>
        <ProjectAccordion
          projects={projects}
          taskclicked={handleTaskClick}
        />
      </Nav>

      <TaskModal
        task={taskClicked ?
          taskData :
          tasks[0]}
        show={taskClicked}
        handleClose={handleCloseModal}
        taskRefreshHandler={onTaskRefresh}
      />
    </Navbar>
  );
};

export default Sidebar;
