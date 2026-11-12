
import { useContext, useMemo } from "react";
import TodoContext from "../context/TodoContext";
import TodoItem from "./TodoItem";

function TodoList() {

    const { tarefas, filtro } = useContext(TodoContext);

    const tarefasFiltradas = useMemo(() => {
        return tarefas.filter((tarefa) => {
            if (filtro === "pendentes") {
                return !tarefa.concluida;
            }

            if (filtro === "concluidas") {
                return tarefa.concluida;
            }

            return true;
        })
    }, [tarefas, filtro]);

    return (

        // TAREFAS //
        <div className="w-full max-w-full mx-auto">

            <h2 className="text-3xl font-bold italic mb-5 text-center">
                Minhas tarefas:
            </h2>

            <div className="flex flex-col gap-3">
                {tarefasFiltradas.map((tarefa) => (
                    <TodoItem key={tarefa.id} tarefa={tarefa} />
                ))}
            </div>

        </div>
        // TAREFAS //

    );
}

export default TodoList;
