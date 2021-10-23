import { BrowserRouter, Route, Switch } from "react-router-dom";
import AllTodos from "./components/Alltodos";
import { TodosContextProvider } from "./components/context/TodosContext";
import NavBar from "./components/layout/NavigationBar";
import NewTodos from "./components/Newtodos";
function App() {
    return (
            <BrowserRouter>
             <NavBar/>
            <TodosContextProvider>
              <Switch>
                <Route path="/" exact={true}>
                    <AllTodos />
                </Route>
                <Route path="/new">
                    <NewTodos />
                </Route>
                </Switch>
                </TodosContextProvider>
            </BrowserRouter>
    )
}
export default App;