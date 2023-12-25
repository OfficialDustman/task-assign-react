import React from 'react';

const AuthContext = React.createContext({
    userData : [],
    changeUserData : () => {},
    taskData : [],
    changeTaskData : () => {},
    
    projectData : [],
    changeProjectData : () => {},
    projectTask : [],
    changeProjectTask : () => {},
});

export default AuthContext;