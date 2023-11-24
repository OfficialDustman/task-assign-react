import { NavLink } from 'react-router-dom';
import { Navbar, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navigation = () => {
  return (
    <Navbar bg="light" expand="sm">
      <NavLink to="/home/task" exact className="nav-link">
        <Button variant="light" className={'rounded-pill'}>
          <FontAwesomeIcon icon="fa-solid fa-house" />
        </Button>
      </NavLink>
      <NavLink to="/home/project" className="nav-link">
        <Button variant="light" className={'rounded-pill'}>
          <FontAwesomeIcon icon="fa-solid fa-folder" />
        </Button>
      </NavLink>
      <NavLink to="/home/profile" className="nav-link">
        <Button variant="light" className={'rounded-pill'}>
          <FontAwesomeIcon icon="fa-solid fa-user" />
        </Button>
      </NavLink>
    </Navbar>
  );
};

export default Navigation;
