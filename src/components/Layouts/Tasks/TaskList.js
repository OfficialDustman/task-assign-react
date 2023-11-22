import TaskItem from "./TaskItem";


export default function TaskList({tasks}) {
    return (
        <>
            {tasks?.data.map((task) => (
                <TaskItem task={task}/>
            ))}
        </>
    )
    
}