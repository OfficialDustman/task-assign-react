import TaskItem from "./TaskItem";
import { useState } from "react";


export default function TaskList({tasks}) {
    console.log(tasks);
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <>
            if (isLoaded) {
                tasks?.data.map((task) => (
                    <TaskItem task={task}/>
                )) 
            } else {
                <p>No Task Yet!</p>
            }
        </>
    )
    
}