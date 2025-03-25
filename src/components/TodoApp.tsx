import { useState } from "react"

type Props = {}

export const TodoApp = () => {
    const [newTask, setNewTask] = useState('')

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
            </div>
        </div>
    )
}