import { useContext, useState } from "react";
import TodosContext from "./context/TodosContext";

const  TodoItem = props=> {
      let  Todosctx = useContext(TodosContext)
     

    const deleted = (id)=>{
        Todosctx.deleted(id)
    }
  
    const crossOut = (id)=>{
        let crossed = document.querySelector(`#a${props.id}`)
        let crossedStyle =  crossed.style.textDecoration
       crossedStyle === "line-through" ? crossed.style.textDecoration = "none":
       crossed.style.textDecoration = "line-through"
    }
    return (
        <div className="card">
            <h2 id={`a${props.id}`} className="cross">{props.name}</h2>
            <div>
                <p className="center">{props.desc}</p>
            </div>
            <div>
                <button onClick={()=>{
                    crossOut(props.id)
                }} className="btn">CrossOut</button>
            </div>
            <fieldset>
                <button className="btn" onClick ={()=>{
                    deleted(props.id)
                }}>Delete</button>
            </fieldset>
        </div>
    )
}

export default TodoItem;