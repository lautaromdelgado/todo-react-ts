import { useState } from "react"
import { ListaTareas } from "./listaTareas"

export const TodoApp = () => {
    const [newTask, setNewTask] = useState<string>('')
    const [tasks, setTasks] = useState<string[]>([])

    const handleAddTask = () => {
        if (newTask.trim() === '') return // No se permiten tareas vacías
        setTasks(tareaAnteriores => [...tareaAnteriores, newTask])
        setNewTask('') // Limpiar el input
    }

    const handleBorrarTarea = (index: number) => {
        setTasks(tasks.filter((_, i) => i !== index)) // Filtrar las tareas que no coincidan con el índice
    }

    return (
        <div>
            <h1>Listas de tareas</h1>
            <div>
                <input
                    type="text"
                    value={newTask}
                    onChange={e => setNewTask(e.target.value)}
                    placeholder="Nueva Tarea"
                />
                <button onClick={handleAddTask}>Agregar Tarea</button>
            </div>
            <ListaTareas tareas={tasks} borrarTarea={handleBorrarTarea}></ListaTareas>
        </div>
    )
}