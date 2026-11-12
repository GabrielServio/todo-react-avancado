import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const TodoContext = createContext();

export function TodoProvider({ children }) {

    const [tarefas, setTarefas] = useLocalStorage("tarefas", []);

    const [filtro, setFiltro] = useState("todas");

    return (
        <TodoContext.Provider value={{ tarefas, setTarefas, filtro, setFiltro }}>
            {children}
        </TodoContext.Provider>
    );

}

export default TodoContext;