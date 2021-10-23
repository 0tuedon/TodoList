import { useState } from "react";
import AllTodos from "./Alltodos";
import NewTodo from "./NewTodo";
function NewTodos() {
    const [todos, setTodos] = useState([])
    const addTodos = (todo) => {
        setTodos(prev => {
            return [...prev, todo]
        })
    }
    return (<NewTodo
        submitted={addTodos}
        data={todos}
    >
        <AllTodos data={todos} />
    </NewTodo>
    )
}

export default NewTodos;