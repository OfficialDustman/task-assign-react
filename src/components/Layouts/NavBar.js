import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink to="/home/task" exact className="nav-link">
            Home
          </NavLink>
          <NavLink to="/home/project" className="nav-link">
            About
          </NavLink>
          <NavLink to="/home/profile" className="nav-link">
            Contact
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
