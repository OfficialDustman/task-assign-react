import { Accordion, Card } from 'react-bootstrap';
import ProjectTask from './ProjectTask';

const ProjectAccordion = ({ projects }) => {

  return (
    <Accordion defaultActiveKey={projects[0].project_id.toString()} alwaysOpen>
      {projects.map(project => (
        <Accordion.Item 
          key={project.project_id}
          eventKey={project.project_id.toString()}
        >
          <Accordion.Header>
            {project.project_name}
          </Accordion.Header>
          <Accordion.Collapse eventKey={project.project_id.toString()}>
            <Card.Body>
              <ul 
                style={{
                    display: 'flex',
                    width: '100%',
                    flexDirection: 'column',
                    gap: '1rem',
                }}
              >
                {project.tasks.map(task => (
                  <li 
                    key={task.task_id}
                  >
                    <ProjectTask task={task} />
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
