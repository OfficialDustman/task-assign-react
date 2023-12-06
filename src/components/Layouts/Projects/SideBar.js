import React from 'react';
import { Navbar, Nav, Button, Badge, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProjectAccordion from "./ProjectAccordion";
import UIButton from '../../Ui/Button';
import {Link} from "react-router-dom";


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
        gap: '1rem',
        position: 'sticky',
        top: '0'
      }}
    >
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
        <FontAwesomeIcon icon={'fa-solid fa-folder'} />{' '}
        Projects
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

      <Nav>
        <ProjectAccordion projects={projects} />
      </Nav>
    </Navbar>
  );
};

export default Sidebar;
