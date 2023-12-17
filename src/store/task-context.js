import React from 'react';

const TaskContext = React.createContext({
    taskData : [],
    changeTaskData : () => {}
});

export default TaskContext;