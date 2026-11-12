import { useContext } from "react";
import TodoContext from "../context/TodoContext";

function TodoFilters() {

    const { filtro, setFiltro } = useContext(TodoContext);

    return (

        // FILTROS //
        <div className="flex flex-wrap justify-center gap-3 mb-6">

            <button
                onClick={() => setFiltro("todas")}
                className={`px-5 py-2 rounded-lg font-semibold transition-colors ${filtro === "todas"
                        ? "bg-indigo-500 text-white"
                        : "bg-blue-100 text-blue-700 hover:bg-indigo-200"
                    }`}
            >
                Todas
            </button>

            <button
                onClick={() => setFiltro("pendentes")}
                className={`px-5 py-2 rounded-lg font-semibold transition-colors ${filtro === "pendentes"
                        ? "bg-indigo-500 text-white"
                        : "bg-blue-100 text-blue-700 hover:bg-indigo-200"
                    }`}
            >
                Pendentes
            </button>

            <button
                onClick={() => setFiltro("concluidas")}
                className={`px-5 py-2 rounded-lg font-semibold transition-colors ${filtro === "concluidas"
                        ? "bg-indigo-500 text-white"
                        : "bg-blue-100 text-blue-700 hover:bg-indigo-200"
                    }`}
            >
                Concluídas
            </button>

        </div>
        // FILTROS //

    );
}

export default TodoFilters;