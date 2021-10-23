import { createContext,useState } from "react";

const TodosContext = createContext({
    data:[],
    addTodos:(todo)=>{},
    deleted:(id)=>{}
})

export  const TodosContextProvider =(props)=>{
    const [todos,setTodos] = useState([])

    const addTodos = (todo)=>{
        setTodos(prev=>{
            return (prev.concat(todo))
        })
       
    }
    
    const deleted = (id)=>{
        console.log(id)
        setTodos(prev=>{
           return prev.filter((todo,index)=>{
                return index!==id
            })
        })
    }
  
    localStorage.setItem("Data",JSON.stringify(todos))
    let stored = JSON.parse(localStorage.getItem("Data"))
    console.log(stored)


    const context = {
        addTodos:addTodos,
        data:stored,
        deleted:deleted
    }
  
    return (
        <TodosContext.Provider value={context}>
            {props.children}
        </TodosContext.Provider>
    )
}
export default TodosContext;