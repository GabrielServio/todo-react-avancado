import { useContext, memo } from "react";
import TodoContext from "../context/TodoContext";

function TodoItem({ tarefa }) {

    const { setTarefas } = useContext(TodoContext);

    function concluirTarefa() {
        setTarefas((tarefasAtuais) =>
            tarefasAtuais.map((t) =>
                t.id === tarefa.id
                    ? { ...t, concluida: !t.concluida }
                    : t
            )
        );
    }

    function excluirTarefa() {
        setTarefas((tarefasAtuais) =>
            tarefasAtuais.filter((t) =>
                t.id !== tarefa.id
            )
        );
    }

    return (

        // ITENS //
        <div className="flex items-center justify-center gap-3">

            <span className={`font-semibold text-2xl ${tarefa.concluida
                    ? "line-through text-gray-500"
                    : "text-gray-950"
                }`}>
                {tarefa.texto}
            </span>

            <div className="flex gap-2">

                <button
                    onClick={concluirTarefa}
                    className="bg-indigo-500 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg text-base font-bold"
                >
                    {tarefa.concluida ? "Reabrir" : "Concluir"}
                </button>

                <button
                    onClick={excluirTarefa}
                    className="bg-red-400 hover:bg-red-500 text-white px-5 p-2 rounded-lg text-base font-bold"
                >
                    Excluir
                </button>

            </div>

        </div>
        // ITENS //

    );
}

export default memo(TodoItem);