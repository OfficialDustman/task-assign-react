import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

const ProjectAccordion = ({ projects }) => {

  console.log(projects);
  
  projects.map(project => {
    console.log(project, project.project_id, project.project_name)
  })

  if (!projects || projects.length === 0) {
    return <div>No projects available</div>;
  }

  return (
    <Accordion>
      {projects.map(project => (
        <Accordion.Item 
          key={project.project_id}
          eventKey={project.project_id.toString()}
        >
          <Card.Header>
            <Accordion.Header>
              {project.project_name}
            </Accordion.Header>
          </Card.Header>
          <Accordion.Collapse eventKey={project.project_id.toString()}>
            <Card.Body>
              <ul>
                {project.tasks.map(task => (
                  <li 
                    key={task.task_id}
                  >
                    {task.task_name}
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default ProjectAccordion;
