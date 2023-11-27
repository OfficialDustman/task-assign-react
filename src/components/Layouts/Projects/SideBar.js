import React, { useState } from 'react';
import { Navbar, Nav, Accordion, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Navbar bg="light" expand="sm">
        <Navbar.Toggle onClick={toggleSidebar} />
        <Navbar.Brand>My App</Navbar.Brand>
      </Navbar>

      <Accordion className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <Accordion.Toggle as={Button} variant="link" eventKey="0" className="toggle-btn">
          <FontAwesomeIcon icon={sidebarOpen ? 'fa-solid fa-chevron-left' : 'fa-solid fa-chevron-right'} />
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Nav className="flex-column">
            {/* Your sidebar content goes here */}
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Accordion.Collapse>
      </Accordion>
    </>
  );
};

export default Sidebar;


