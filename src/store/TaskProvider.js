import React, { useState } from 'react';
import TaskContext from './task-context';

const TaskContextProvider = ({children}) => {
    const [taskData, setTaskData] = useState([]);
  
    const changeTaskData = (state) => {
      setTaskData(state);
    }

    return (
      <TaskContext.Provider
        value={{
            taskData : taskData,
            changeTaskData : changeTaskData
        }}
      >
        {children}
      </TaskContext.Provider>
    );
  };

export default TaskContextProvider;