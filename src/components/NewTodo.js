import { useState, useContext } from "react";
import { Link,useHistory } from "react-router-dom";
import {ArrowBackIosNewSharpIcon} from "@mui/icons-material/ArrowBackIosNewSharp";
import TodosContext from "./context/TodosContext";
function NewTodo(props) {
    let route = useHistory()
    const [inputsData, setInputsData] = useState({
        title: "",
        description: ""
    })
    const Todoctx = useContext(TodosContext)

    const onChangeInputs = (event) => {
        event.preventDefault()
        const { value, name } = event.target
        setInputsData(prev => {
            return { ...prev, [name]: value }
        })

    }

    const submitData = (event) => {
        Todoctx.addTodos(inputsData)
        event.preventDefault();
        route.replace("/");

    }
    return (
        <div className="space">
         <Link variant="contained" className="btn" to="/" color="inherit">
               Back 
            </Link>
        <div className="card-container">
            <div class="container">
                <form id="contact" onSubmit={submitData}>
                    <h3>Todos</h3>
                    <h4>Add your Todos List on the Form below</h4>
                    <fieldset>
                        <input placeholder="Todos" name="title" maxLength="20" type="text" tabIndex="1" required autoFocus onChange={onChangeInputs} />
                    </fieldset>
                  
                    <fieldset>
                        <textarea placeholder="Type your message here...." name="description" tabIndex="2" required onChange={onChangeInputs}></textarea>
                    </fieldset>
                    <fieldset>
                        <button name="submit" type="submit" id="contact-submit">Submit</button>
                    </fieldset>
                </form>
            </div>
        </div>
        </div>
    )
}
export default NewTodo;

