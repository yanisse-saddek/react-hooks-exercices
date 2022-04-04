import {useContext} from "react"
import {TaskContext} from "../App"

export default function TaskList(){
    const contexte = useContext(TaskContext)
    return(
        <div>
            <h1>liste des taches</h1>
            {
                contexte.tasks.map(task=>{
                    return(
                        <div>
                        <p>{task.title}</p>
                        <p>{task.priority}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}