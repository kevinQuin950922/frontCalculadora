import Suma from "./components/Suma.js";
import Resta from "./components/Resta.js";
import Division from "./components/Division.js";
import Multiplicacion from "./components/Multiplicacion.js";
import NavbarComponent from "./components/NavbarComponent.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div> 
        <NavbarComponent/>
        <Switch>
          <Route path="/add">
            <Suma/>
          </Route>
          <Route path="/res">
            <Resta/>
          </Route>
          <Route path="/div">
            <Division/>
          </Route>
          <Route path="/mul">
            <Multiplicacion/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
