import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Navbar expand="lg" className="bg-light">
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <FontAwesomeIcon icon={faBars} />
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="flex-column">
          <NavLink to="/home/task" exact className="nav-link">
            <FontAwesomeIcon icon={faHome} /> Home
          </NavLink>
          <NavLink to="/home/project" className="nav-link">
            <FontAwesomeIcon icon={faInfoCircle} /> About
          </NavLink>
          <NavLink to="/home/profile" className="nav-link">
            <FontAwesomeIcon icon={faUser} /> Contact
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Sidebar;
