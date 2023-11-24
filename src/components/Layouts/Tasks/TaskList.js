import TaskItem from "./TaskItem";


export default function TaskList({tasks}) {
    console.log(tasks);

    return (
        <>
            {/* <p>No Task Yet!</p> */}
            if (tasks) {
                tasks?.data.map((task) => (
                    <TaskItem task={task}/>
                )) 
            } else {
                <p>No Task Yet!</p>
            }
        </>
    )
    
}