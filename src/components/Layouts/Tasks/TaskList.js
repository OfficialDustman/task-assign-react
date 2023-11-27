import TaskItem from "./TaskItem";


export default function TaskList({ tasks }) {
    console.log(tasks);

    return (
        <>
            {tasks?.map((task) => (
                <TaskItem task={task} />
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