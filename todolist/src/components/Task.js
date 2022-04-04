import {useForm} from 'react-hook-form'
import {useContext, useState} from 'react'
import {TaskContext} from '../App'


export default function Task(){
    const contexte = useContext(TaskContext)
    const { register, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = (data)=>{
        var copyTache = [...contexte.tasks]
        var lastIndex = contexte.tasks.map(task=>{
                return task.id
        })
        var tache = {
            id:parseInt(lastIndex.slice(-1))+1,
            title:data.title,
            priority:data.priority
        }

        console.log(tache)
        copyTache.push(tache)
        contexte.changeTasks(copyTache)
    }
    return(
        <>
            <h1>tache</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" id="title" {...register('title', {required:true})}/>
                <select id="priority" {...register('priority', {required:true})}> 
                    <option>Important</option>
                    <option>Urgent</option>
                </select>
                <input type="submit"></input>
                {errors.task && <p>Veuillez remplir la case "Tache"</p>}
                {errors.priority && <p>Veuillez remplir la case "Priorite"</p>}
            </form>
        </>
    )

}