import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProjectAccordion from "./ProjectAccordion";


const Sidebar = ({ projects }) => {
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
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav">
        <FontAwesomeIcon icon="fa-solid fa-bars" />
      </Navbar.Toggle> */}
      <Navbar.Collapse
        id="basic-navbar-nav"
        style={{
          flexBasis: 0,
          flexGrow: 0,
        }}
      >
        <Nav className="flex-column">
          <ProjectAccordion projects={projects} />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Sidebar;
