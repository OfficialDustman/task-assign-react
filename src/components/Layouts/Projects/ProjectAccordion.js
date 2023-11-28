import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

const ProjectAccordion = ({ projects }) => {

  console.log(projects);

  return (
    <Accordion>
      {projects.map(project => (
        {project}
        // <Card key={project.project_id}>
        //   <Card.Header>
        //     <Accordion.Toggle as={Button} variant="link" eventKey={project.project_id.toString()}>
        //       {project.project_name}
        //     </Accordion.Toggle>
        //   </Card.Header>
        //   <Accordion.Collapse eventKey={project.project_id.toString()}>
        //     <Card.Body>
        //       <ul>
        //         {project.tasks.map(task => (
        //           <li key={task.task_id}>{task.task_name}</li>
        //         ))}
        //       </ul>
        //     </Card.Body>
        //   </Accordion.Collapse>
        // </Card>
      ))}
    </Accordion>
  );
};

export default ProjectAccordion;
