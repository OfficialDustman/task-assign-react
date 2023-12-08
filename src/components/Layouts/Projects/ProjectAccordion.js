import { Accordion, Card } from 'react-bootstrap';
import TaskList from '../Tasks/TaskList';

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
              <ul>
                {/* {project.tasks.map(task => (
                  <li 
                    key={task.task_id}
                  >
                    {task.task_name}
                  </li>
                ))} */}

                <TaskList tasks={project.tasks} />
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default ProjectAccordion;
