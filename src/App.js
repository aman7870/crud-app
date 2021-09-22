import NavBar from "./Components/navBar";
import Crud from "./Components/Crud";
import AllUsers from "./Components/AllUsers";
import AddUser from "./Components/AddUser";
import NotFound from "./Components/NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EditUser from "./Components/Edituser";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
      <Route exact path="/" component={Crud} />
      <Route exact path="/all" component={AllUsers} />
      <Route exact path="/add" component={AddUser} />
      <Route exact path="/edit/:id" component={EditUser} />
      <Route component = {NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
