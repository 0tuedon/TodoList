import TodoItem from "./TodoItem";

function TodoList(props) {
    let TodoArray = props.data
    
  

    return (<div className="groupTodos">
        {TodoArray.map((todo, index) => {
            return <TodoItem
                name={todo.title}
                desc={todo.description}
                key={index}
                id={index}
                deleted={props.deleted}
            />
        })}
    </div>)
}

export default TodoList;