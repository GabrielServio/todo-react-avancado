import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";

function TodoForm() {

    const [novaTarefa, setNovaTarefa] = useState("");

    const {setTarefas} = useContext(TodoContext);

    function adicionarTarefa(e) {
        e.preventDefault();
        if (!novaTarefa.trim()) {
            return;
        }

        setTarefas((tarefasAtuais) => [
            ...tarefasAtuais,
            {
                id: Date.now(),
                texto: novaTarefa,
                concluida: false
            }
        ]);

        setNovaTarefa("");
    }

    return (

        // FORMULARIO //
        <div className="w-full max-w-xl mx-auto mb-8">
            
            <h2 className="text-2xl font-bold mb-4">
                Adicionar Tarefa:
            </h2>

            <form onSubmit={adicionarTarefa} className="flex flex-col sm:flex-row gap-3">

                <input 
                    className="flex-1 border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-300"
                    type="text"
                    value={novaTarefa}
                    onChange={(e) => setNovaTarefa(e.target.value)}
                    placeholder="Tarefa..."
                />

                <button 
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold px-5 py-2 rounded-lg transition-colors"
                >
                    Adicionar
                </button>

            </form>

        </div>
        // FORMULARIO //

    );

}

export default TodoForm;