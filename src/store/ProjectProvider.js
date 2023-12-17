import React, { useState } from 'react';
import ProjectContext from './project-context';

const ProjectContextProvider = ({children}) => {
    const [projectData, setProjectData] = useState([]);
    const [projectTask, setProjectTask] = useState([]);
  
    const changeProjectData = (state) => {
      setProjectData(state);
    }   

    const changeProjectTask = (state) => {
      setProjectTask(state);
    }

    return (
      <ProjectContext.Provider
        value={{
            projectData : projectData,
            changeProjectData : changeProjectData,
            projectTask : projectTask,
            changeProjectTask : changeProjectTask,
        }}
      >
        {children}
      </ProjectContext.Provider>
    );
  };

export default ProjectContextProvider;