import { NavLink } from 'react-router-dom';
import { Navbar, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navigation = () => {
  const activeLink =  {
    backgroundColor: '#ddd',
    color: '#333'
  }
  

  return (
    <Navbar
      bg="light"
      expand="sm"
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '2px',
        flex: '1 0 0',
        alignSelf: 'stretch',
        justifyContent: 'center', 
        position: 'fixed', 
        bottom: 0,
        width: '100%',
        borderRadius: '141px',
        background: '#FFF',
        boxShadow: '0px 4px 80px 0px rgba(13, 16, 28, 0.20)'
      }}
    >
      <NavLink
        to="/home/task"
        exact
        className="nav-link"
        activeClassName={activeLink}
        style={{
          display: 'flex',
          padding: '10px 8px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '4px',
          flex: '1 0 0',
          alignSelf: 'stretch',
        }}
      >
        <Button variant="light" className={'rounded-pill'}>
          <FontAwesomeIcon icon="fa-solid fa-house" />
        </Button>
      </NavLink>
      <NavLink
        to="/home/project"
        className="nav-link"
        activeClassName={activeLink}
        style={{
          display: 'flex',
          padding: '10px 8px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '4px',
          flex: '1 0 0',
          alignSelf: 'stretch',
        }}
      >
        <Button variant="light" className={'rounded-pill'}>
          <FontAwesomeIcon icon="fa-solid fa-folder" />
        </Button>
      </NavLink>
      <NavLink
        to="/home/profile"
        className="nav-link"
        activeClassName={activeLink}
        style={{
          display: 'flex',
          padding: '10px 8px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '4px',
          flex: '1 0 0',
          alignSelf: 'stretch',
        }}
      >
        <Button variant="light" className={'rounded-pill'}>
          <FontAwesomeIcon icon="fa-solid fa-user" />
        </Button>
      </NavLink>
    </Navbar>
  );
};

export default Navigation;
