import TaskItem from "./TaskItem";


export default function TaskList({tasks}) {
    return (
        <>
            {tasks? 
                (tasks?.data.map((task) => (
                    <TaskItem task={task}/>
                ))) :
                
                <p>No Task Yet!</p>
        }
        </>
    )
    
}