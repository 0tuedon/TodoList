import {  useContext } from "react";
import TodoList from "./Todolist";
import TodosContext from "./context/TodosContext";
function AllTodos(props) {
    const Todoctx = useContext(TodosContext)
    const TodoArray =  Todoctx.data
    const deleteTodo = Todoctx.deleted
    return (
        <div>
            <h1>Todo App</h1>
            {TodoArray.length < 1  ? <p>You Have no Todos</p>:
            <TodoList
                data={TodoArray}
                delete={deleteTodo}
            />
            }
        </div>)
}

export default AllTodos;