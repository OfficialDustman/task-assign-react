import React, { useState } from 'react';
import AuthContext from './auth-context';

const AuthContextProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [taskData, setTaskData] = useState([]);
  const [newtaskData, setNewTaskData] = useState([]);
  const [projectData, setProjectData] = useState([]);
  const [projectTask, setProjectTask] = useState([]);

  const changeUserData = (state) => {
    setUserData(state);
  }

  const changeTaskData = (state) => {
    setTaskData(state);
  }

  const changeNewTaskData = (state) => {
    setNewTaskData(state);
  }

  const changeProjectData = (state) => {
    setProjectData(state);
  }

  const changeProjectTask = (state) => {
    setProjectTask(state);
  }

  return (
    <AuthContext.Provider
      value={{
        userData: userData,
        changeUserData: changeUserData,
        taskData: taskData,
        changeTaskData: changeTaskData,
        newtaskData: newtaskData,
        changeNewTaskData: changeNewTaskData,
        projectData: projectData,
        changeProjectData: changeProjectData,
        projectTask: projectTask,
        changeProjectTask: changeProjectTask,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;