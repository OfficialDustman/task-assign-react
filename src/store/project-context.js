import React from 'react';

const ProjectContext = React.createContext({
    projectData : [],
    changeProjectData : () => {},
    projectTask : [],
    changeProjectTask : () => {},
});

export default ProjectContext;