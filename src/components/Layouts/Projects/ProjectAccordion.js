import { Accordion, Card } from 'react-bootstrap';

const ProjectAccordion = ({ projects }) => {

  return (
    <Accordion defaultActiveKey={projects[1].project_id.toString()} alwaysOpen>
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
