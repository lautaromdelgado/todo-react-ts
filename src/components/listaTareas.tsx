import { Tarea } from "./tarea"

type ListaTareas = {
    tareas: string[]
    borrarTarea: (index: number) => void
}

export const ListaTareas = ({ tareas, borrarTarea }: ListaTareas) => {
    return (
        <div className="tasklist">
            {tareas.map((task, index) => (
                <Tarea key={index} task={task} borrarTarea={() => borrarTarea(index)}></Tarea>
            ))}
        </div>
    )
}