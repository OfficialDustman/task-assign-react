import TaskItem from "./TaskItem";


export default function TaskList({tasks}) {
    console.log(tasks);

    return (
        <>
                {/* <p>No Task Yet!</p> */}
            {tasks? 
                (tasks?.data.map((task) => (
                    <TaskItem task={task}/>
                ))) :
                
                <p>No Task Yet!</p>
            }
        </>
    )
    
}