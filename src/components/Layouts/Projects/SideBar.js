import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import ProjectAccordion from "./ProjectAccordion";


const Sidebar = ({projects}) => { 
  return (
    <Navbar expand="lg" className="bg-light">
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <FontAwesomeIcon icon={faBars} />
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="flex-column">
          <ProjectAccordion projects={projects} />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Sidebar;
