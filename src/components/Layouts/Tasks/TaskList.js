import TaskItem from "./TaskItem";


export default function TaskList({ tasks, taskclicked }) {
    console.log(tasks);

    return (
        <>
            {tasks?.map((task) => (
                <TaskItem 
                    task={task} 
                    ontaskclick={taskclicked}
                />
            ))}
            {/* {tasks ? 
                (tasks?.map((task) => (
                    <TaskItem task={task}/>
                )) ) :

                (<p>No Task Yet</p>)
            } */}
        </>
    )

}