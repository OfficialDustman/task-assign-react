import { NavLink } from 'react-router-dom';
import { Navbar, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navigation = () => {
  const activeLinkStyle = {
    backgroundColor: '#ddd',
    color: '#333',
  };

  const routes = [
    { path: '/home/task', icon: 'fa-solid fa-house', text: 'Task' },
    { path: '/home/project', icon: 'fa-solid fa-folder', text: 'Project' },
    { path: '/home/profile', icon: 'fa-solid fa-user', text: 'Profile' },
    // Add more routes as needed
  ];

  return (
    <Navbar
      bg="light"
      expand="sm"
      style={{
        display: 'flex',
        padding: '0.5rem',
        alignItems: 'flex-start',
        gap: '2px',
        flex: '1 0 0',
        alignSelf: 'center',
        justifyContent: 'center',
        position: 'fixed',
        bottom: '20px',
        width: '75%',
        borderRadius: '141px',
        background: '#FFF',
        boxShadow: '1px 0px 5px 1px rgba(13, 16, 28, 0.20)',
      }}
    >
      {routes.map((route, index) => (
        <NavLink
          key={index}
          to={route.path}
          exact
          className="nav-link rounded-pill"
          style={{
            ...(route.path === window.location.pathname ? activeLinkStyle : {}),
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
            <FontAwesomeIcon icon={route.icon} />
          </Button>
        </NavLink>
      ))}
    </Navbar>
  );
};

export default Navigation;
