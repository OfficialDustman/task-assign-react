import React from 'react';
import { Navbar, Nav, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProjectAccordion from "./ProjectAccordion";


const Sidebar = ({ projects, username }) => {
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
        gap: '1rem'
      }}
    >
      <Button variant="light">
        <Badge 
          style={{backgroundColor: '#613BE7'}}
        >
          {username[0]}
        </Badge>
        {username} 
      </Button>
      <Navbar.Brand>
        <FontAwesomeIcon icon={'fa-solid fa-folder'} />{' '}
        Projects
      </Navbar.Brand>
      <Nav>
        <ProjectAccordion projects={projects} />
      </Nav>
    </Navbar>
  );
};

export default Sidebar;
